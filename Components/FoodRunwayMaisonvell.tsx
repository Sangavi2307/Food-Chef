import React, { useState, useEffect, useRef, useCallback } from 'react';
import { RUNWAY_FOODS, RunwayLook } from '../data/foodData';
import { ShoppingBag, ChevronLeft, ChevronRight, Play, Pause, Sparkles, Heart } from 'lucide-react';

interface FoodRunwayProps {
  onAddToCart: (dish: { id: string | number; name: string; price: number; image: string; category?: string }, quantity?: number) => void;
  onOpenDishModal?: (dish: RunwayLook) => void;
}

// 7 Depth Stops from -1 to 5 (Maison Vell depth table)
// d = -1: Exiting front right, scaled up, fading out
// d =  0: Front hero look, crisp, fully opaque, large scale
// d =  1: First step into the distance
// d =  2: Mid-ground
// d =  3: Far distance
// d =  4: Background haze
// d =  5: Origin in the hazy horizon
interface DepthStop {
  x: number;      // percent along the stage width (0 to 100)
  y: number;      // percent along the stage height (0 to 100)
  scale: number;
  blur: number;   // in px
  opacity: number;
  zIndex: number;
}

const DEPTH_STOPS: { [key: number]: DepthStop } = {
  [-1]: { x: 86, y: 56, scale: 1.35, blur: 0, opacity: 0, zIndex: 30 },
  0:    { x: 64, y: 50, scale: 1.0,  blur: 0, opacity: 1, zIndex: 25 },
  1:    { x: 47, y: 44, scale: 0.82, blur: 1.4, opacity: 0.95, zIndex: 20 },
  2:    { x: 33, y: 39, scale: 0.68, blur: 3.2, opacity: 0.85, zIndex: 15 },
  3:    { x: 22, y: 35, scale: 0.54, blur: 5.4, opacity: 0.65, zIndex: 10 },
  4:    { x: 13, y: 32, scale: 0.42, blur: 7.8, opacity: 0.40, zIndex: 5 },
  5:    { x: 6,  y: 30, scale: 0.32, blur: 11.0, opacity: 0, zIndex: 1 }
};

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function interpolateStop(d: number): DepthStop {
  // Clamp d between -1 and 5
  if (d <= -1) return DEPTH_STOPS[-1];
  if (d >= 5) return DEPTH_STOPS[5];

  const floor = Math.floor(d);
  const ceil = Math.ceil(d);
  const t = d - floor;

  const s1 = DEPTH_STOPS[floor] || DEPTH_STOPS[0];
  const s2 = DEPTH_STOPS[ceil] || DEPTH_STOPS[5];

  return {
    x: lerp(s1.x, s2.x, t),
    y: lerp(s1.y, s2.y, t),
    scale: lerp(s1.scale, s2.scale, t),
    blur: lerp(s1.blur, s2.blur, t),
    opacity: lerp(s1.opacity, s2.opacity, t),
    zIndex: Math.round(lerp(s1.zIndex, s2.zIndex, t))
  };
}

// Math wrap helper: maps val into [min, max)
function wrap(val: number, range: number): number {
  const m = val % range;
  return m < 0 ? m + range : m;
}

export const FoodRunwayMaisonVell: React.FC<FoodRunwayProps> = ({ onAddToCart }) => {
  const N = RUNWAY_FOODS.length; // 6 looks
  const stageRef = useRef<HTMLDivElement | null>(null);

  // Position states
  const [p, setP] = useState<number>(0);
  const targetRef = useRef<number>(0);
  const pRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const dragStartXRef = useRef<number>(0);
  const dragStartTargetRef = useRef<number>(0);
  const [autoWalk, setAutoWalk] = useState<boolean>(true);
  const lastWheelTimeRef = useRef<number>(0);

  // Animation frame loop
  useEffect(() => {
    let animId: number;

    const tick = () => {
      // Auto-walk if idle and enabled
      if (autoWalk && !isDraggingRef.current && Date.now() - lastWheelTimeRef.current > 2500) {
        targetRef.current += 0.0035;
      }

      // Smooth exponential easing towards target
      const diff = targetRef.current - pRef.current;
      pRef.current += diff * 0.12;

      setP(pRef.current);
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [autoWalk]);

  // Current active whole index
  const activeIndex = wrap(Math.round(p), N);
  const activeFood = RUNWAY_FOODS[activeIndex];

  // Drag Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartTargetRef.current = targetRef.current;
    if (stageRef.current) {
      stageRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - dragStartXRef.current;
    const stageWidth = stageRef.current ? stageRef.current.clientWidth : 800;
    // Dragging left advances the line forward (target increases)
    const deltaLooks = (-deltaX / stageWidth) * 2.8;
    targetRef.current = dragStartTargetRef.current + deltaLooks;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    // Snap to nearest integer
    targetRef.current = Math.round(targetRef.current);
    if (stageRef.current) {
      try {
        stageRef.current.releasePointerCapture(e.pointerId);
      } catch {
        // non-blocking
      }
    }
  };

  // Wheel Handler
  const handleWheel = (e: React.WheelEvent) => {
    lastWheelTimeRef.current = Date.now();
    targetRef.current += e.deltaY * 0.0018;
    // debounce snapping
    window.clearTimeout((handleWheel as any)._timeout);
    (handleWheel as any)._timeout = window.setTimeout(() => {
      targetRef.current = Math.round(targetRef.current);
    }, 150);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        targetRef.current = Math.round(targetRef.current) + 1;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        targetRef.current = Math.round(targetRef.current) - 1;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Jump to specific food
  const jumpToFood = (idx: number) => {
    const currentRounded = Math.round(targetRef.current);
    const currentWrapped = wrap(currentRounded, N);
    let delta = idx - currentWrapped;
    // take shortest wrapping step
    if (delta > N / 2) delta -= N;
    if (delta < -N / 2) delta += N;
    targetRef.current = currentRounded + delta;
  };

  return (
    <section id="runway" className="relative py-24 bg-gradient-to-b from-[#FFF4DF] via-[#FFF9EC] to-[#FFF4DF] overflow-hidden select-none">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 relative z-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#FFC928]/40 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E63925]/15 border border-[#E63925] text-[#E63925] text-xs font-black uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Maison Vell Inspired Depth Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#542D22] font-display tracking-tight">
              INFINITE <span className="text-[#E63925]">FOOD RUNWAY</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#542D22]/80 font-medium max-w-xl">
              Six signature dishes recede into a blurred distance on the left. Drag, scroll, or use arrow keys to walk the line forward.
            </p>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                targetRef.current = Math.round(targetRef.current) - 1;
              }}
              className="p-3 rounded-2xl bg-white border border-[#FFC928] text-[#542D22] hover:bg-[#FFC928]/20 transition-all shadow-sm active:scale-90"
              title="Previous Dish"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setAutoWalk(!autoWalk)}
              className={`px-4 py-2.5 rounded-2xl font-black text-xs flex items-center gap-2 transition-all shadow-sm ${
                autoWalk
                  ? 'bg-[#173F35] text-white'
                  : 'bg-white border border-stone-200 text-[#542D22]'
              }`}
            >
              {autoWalk ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              <span>{autoWalk ? 'Pause Walk' : 'Auto Walk'}</span>
            </button>
            <button
              onClick={() => {
                targetRef.current = Math.round(targetRef.current) + 1;
              }}
              className="p-3 rounded-2xl bg-white border border-[#FFC928] text-[#542D22] hover:bg-[#FFC928]/20 transition-all shadow-sm active:scale-90"
              title="Next Dish"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Runway Stage Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left/Center Stage: 3D Depth Receding Line (Col 1 to 8) */}
          <div
            ref={stageRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onWheel={handleWheel}
            className="lg:col-span-8 relative h-[440px] sm:h-[540px] rounded-3xl bg-gradient-to-br from-[#FFF4DF] via-white to-[#FFE5B4] border-2 border-[#FFC928]/40 shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y"
          >
            {/* Atmospheric Depth Haze Gradient on Left */}
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#FFF4DF] via-[#FFF4DF]/70 to-transparent z-10 pointer-events-none" />

            {/* Depth Distance Perspective Line Guide */}
            <div className="absolute inset-x-0 bottom-12 h-0.5 bg-gradient-to-r from-transparent via-[#FFC928]/40 to-[#E63925]/40 pointer-events-none" />

            {/* 6 Receding Food Items */}
            {RUNWAY_FOODS.map((food, i) => {
              // Exact Maison Vell Depth Equation:
              // d = wrap(i - p, 6) moved into range -1 to 5
              let d = wrap(i - p, N);
              if (d > 5) d -= N;

              const stop = interpolateStop(d);

              // Don't render if out of view range
              if (d < -1.2 || d > 5.2) return null;

              return (
                <div
                  key={food.index}
                  onClick={() => jumpToFood(food.index)}
                  style={{
                    position: 'absolute',
                    left: `${stop.x}%`,
                    top: `${stop.y}%`,
                    transform: `translate(-50%, -50%) scale(${stop.scale})`,
                    filter: `blur(${stop.blur}px)`,
                    opacity: stop.opacity,
                    zIndex: stop.zIndex,
                    transition: isDraggingRef.current ? 'none' : 'filter 0.05s linear'
                  }}
                  className="group cursor-pointer pointer-events-auto"
                >
                  {/* Food Object with Shadow */}
                  <div className="relative flex flex-col items-center">
                    {/* Realistic Ground Contact Shadow */}
                    <div
                      className="absolute -bottom-6 w-44 sm:w-56 h-8 bg-[#542D22]/25 rounded-full blur-md transform scale-y-50"
                      style={{ opacity: Math.max(0.1, 1 - stop.blur / 8) }}
                    />

                    {/* Food Card Frame */}
                    <div className="relative w-52 sm:w-64 h-52 sm:h-64 rounded-3xl p-3 bg-white/95 shadow-2xl border-4 border-white transition-all duration-300 group-hover:border-[#FFC928]">
                      <img
                        src={food.image}
                        alt={food.name}
                        className="w-full h-full object-cover rounded-2xl shadow-inner"
                        draggable={false}
                      />

                      {/* Pure Veg Green Badge */}
                      <div className="absolute top-4 left-4 w-5 h-5 rounded bg-white border border-emerald-600 flex items-center justify-center shadow">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                      </div>

                      {/* Tag */}
                      <span className="absolute bottom-4 left-4 px-2 py-0.5 rounded-lg bg-[#E63925] text-white text-[10px] font-black uppercase tracking-wider shadow">
                        {food.tag}
                      </span>
                    </div>

                    {/* Miniature Title Label when in front */}
                    {Math.abs(d) < 0.4 && (
                      <div className="mt-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl shadow border border-[#FFC928] text-center">
                        <span className="text-xs font-black text-[#542D22] block truncate max-w-[180px]">
                          {food.name}
                        </span>
                        <span className="text-[11px] font-black text-[#E63925]">
                          ₹{food.price}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Drag Hint & Stage Index */}
            <div className="absolute bottom-4 left-6 z-20 flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#542D22]/60 bg-white/80 px-2.5 py-1 rounded-lg">
                Drag or scroll to walk • Look {activeIndex + 1} of {N}
              </span>
            </div>
          </div>

          {/* Right Product Column (Syncs with active Look) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#FFC928]/40 flex flex-col justify-between h-[440px] sm:h-[540px]">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full bg-[#FFC928]/25 text-[#542D22] text-xs font-black uppercase tracking-wider">
                  {activeFood.category}
                </span>
                <span className="text-xs font-black text-[#173F35] flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  100% Pure Veg
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#542D22] font-display leading-tight">
                {activeFood.name}
              </h3>

              <p className="mt-3 text-sm text-[#542D22]/80 leading-relaxed font-medium">
                {activeFood.description}
              </p>

              {/* Culinary Metrics */}
              <div className="grid grid-cols-2 gap-3 mt-6 p-3 rounded-2xl bg-[#FFF4DF] border border-[#FFC928]/40 text-center">
                <div>
                  <span className="text-[10px] text-stone-500 uppercase font-bold block">Prep Time</span>
                  <span className="text-xs font-black text-[#542D22]">{activeFood.prepTime}</span>
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 uppercase font-bold block">Chef Rating</span>
                  <span className="text-xs font-black text-[#E63925]">★ {activeFood.rating} / 5</span>
                </div>
              </div>
            </div>

            {/* Quick Look Selector Dots */}
            <div className="my-4">
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-2">
                Quick Select Runway Look
              </span>
              <div className="flex items-center gap-2">
                {RUNWAY_FOODS.map((f, i) => (
                  <button
                    key={f.index}
                    onClick={() => jumpToFood(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeIndex === i
                        ? 'w-8 bg-[#E63925]'
                        : 'w-2.5 bg-stone-200 hover:bg-[#FFC928]'
                    }`}
                    title={f.name}
                  />
                ))}
              </div>
            </div>

            {/* Price & Add to Cart Button (Forest Green #173F35) */}
            <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-stone-400 font-bold block">Price in INR</span>
                <span className="text-3xl font-black text-[#E63925]">₹{activeFood.price}</span>
              </div>

              <button
                onClick={() =>
                  onAddToCart({
                    id: `runway-${activeFood.index}`,
                    name: activeFood.name,
                    price: activeFood.price,
                    image: activeFood.image,
                    category: activeFood.category
                  })
                }
                className="px-6 py-3.5 bg-[#173F35] hover:bg-[#123129] text-white font-black text-xs rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 font-display"
              >
                <ShoppingBag className="w-4 h-4 text-[#FFC928]" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
