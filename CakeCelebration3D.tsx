import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Play, Pause, Volume2, VolumeX, Cake, ArrowRight, RotateCw, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FoodItem } from '../data/foodData';

interface CakeCelebration3DProps {
  onAddToCart: (dish: FoodItem) => void;
  cakeItem: FoodItem;
}

export const CakeCelebration3D: React.FC<CakeCelebration3DProps> = ({ onAddToCart, cakeItem }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'video' | 'interactive3D'>('video');
  const [isExploded, setIsExploded] = useState<boolean>(true);
  const [rotationAngle, setRotationAngle] = useState<{ x: number; y: number }>({ x: 16, y: -10 });

  const videoUrl = 'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/cloudinarry%20to%20cloudflare/202606021731-e_hqa6sn.mp4';

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleCelebrateNow = () => {
    // Spectacular celebratory confetti blast
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F28C28', '#FFC928', '#E94B5A', '#FFD6B5', '#FFFFFF']
    });

    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFC928', '#F28C28', '#E94B5A']
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFC928', '#F28C28', '#E94B5A']
      });
    }, 250);

    // Scroll to order form with cake pre-selected
    const orderForm = document.getElementById('orderForm');
    if (orderForm) orderForm.scrollIntoView({ behavior: 'smooth' });
  };

  // Mouse tilt parallax on interactive 3D rig
  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotationAngle({
      x: 16 - y * 18,
      y: -10 + x * 26
    });
  };

  const handleStageMouseLeave = () => {
    setRotationAngle({ x: 16, y: -10 });
  };

  return (
    <section
      id="cakeSection"
      className="relative py-20 bg-gradient-to-b from-[#FFF9EC] via-[#FFF2D6] to-[#FFF9EC] border-b border-[#FFD6B5]/60 overflow-hidden"
    >
      {/* Decorative Golden Sparkle Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#FFC928] blur-[1px] animate-pulse"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#FFD6B5] shadow-sm mb-4 text-xs font-bold text-[#F28C28] uppercase tracking-wider">
            <Cake className="w-4 h-4 text-[#E94B5A]" />
            <span>Cinematic Birthday Experience</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#58352B] tracking-tight">
            Make Every Celebration Sweeter!
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#58352B]/80 leading-relaxed">
            Witness the art of pure confectionery. Multi-tiered velvety Dutch sponge, Belgian chocolate ganache, fresh hill strawberries, and 24k edible gold dust—crafted to make your loved ones feel truly extraordinary.
          </p>

          {/* Mode Tabs: Cinematic Video vs 3D Layer Exploder */}
          <div className="mt-6 inline-flex p-1 rounded-full bg-[#FFF3DC] border border-[#FFD6B5]">
            <button
              onClick={() => setActiveTab('video')}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                activeTab === 'video'
                  ? 'bg-gradient-to-r from-[#F28C28] to-[#FFC928] text-white shadow-md'
                  : 'text-[#58352B] hover:text-[#F28C28]'
              }`}
            >
              Cinematic Video Commercial
            </button>
            <button
              onClick={() => setActiveTab('interactive3D')}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                activeTab === 'interactive3D'
                  ? 'bg-gradient-to-r from-[#F28C28] to-[#FFC928] text-white shadow-md'
                  : 'text-[#58352B] hover:text-[#F28C28]'
              }`}
            >
              Interactive 3D Layer Exploder
            </button>
          </div>
        </div>

        {/* Cake Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Stage: Video Commercial or 3D Rig (7 Cols) */}
          <div className="lg:col-span-7">
            {activeTab === 'video' ? (
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-[#F28C28]/20 bg-black aspect-video max-h-[460px] group">
                <video
                  ref={videoRef}
                  src={videoUrl}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-white text-xs font-bold tracking-wider uppercase">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F28C28]/80 backdrop-blur-sm">
                      <Sparkles className="w-3.5 h-3.5" />
                      4K Bakery Commercial
                    </span>
                    <button
                      onClick={toggleMute}
                      className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-display text-lg font-bold">
                        Maison Grand Celebration Cake
                      </h3>
                      <p className="text-white/80 text-xs">Freshly baked upon order · Handcrafted in Tamil Nadu</p>
                    </div>

                    <button
                      onClick={togglePlay}
                      className="w-12 h-12 rounded-full bg-white/90 text-[#F28C28] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Interactive 3D Exploded Layer Rig */
              <div
                onMouseMove={handleStageMouseMove}
                onMouseLeave={handleStageMouseLeave}
                className="relative h-[460px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-[#F28C28]/20 bg-gradient-to-b from-[#FFF6E5] to-[#FFE8CC] flex items-center justify-center perspective-1000 cursor-grab active:cursor-grabbing"
              >
                {/* 3D Rig Container */}
                <div
                  style={{
                    transform: `rotateX(${rotationAngle.x}deg) rotateY(${rotationAngle.y}deg)`,
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="relative w-72 h-72 transform-style-3d flex items-center justify-center"
                >
                  {/* Marble Pedestal Base */}
                  <div
                    style={{
                      transform: 'translateY(120px) rotateX(90deg)'
                    }}
                    className="absolute w-72 h-72 rounded-full bg-gradient-to-b from-white via-[#F5EFE0] to-[#E6DEC9] border-2 border-[#FFD6B5] shadow-2xl"
                  />

                  {/* Layer 1: Bottom Golden Almond Sponge */}
                  <div
                    style={{
                      transform: isExploded
                        ? 'translateY(70px) translateZ(-30px)'
                        : 'translateY(60px)'
                    }}
                    className="absolute w-64 h-16 rounded-full bg-gradient-to-r from-[#DE9E52] via-[#F28C28] to-[#BD7728] border border-[#FFD6B5] shadow-lg flex items-center justify-center transition-transform duration-700"
                  >
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                      Almond Sponge Base
                    </span>
                  </div>

                  {/* Layer 2: Bavarian Cream Compote */}
                  <div
                    style={{
                      transform: isExploded
                        ? 'translateY(25px) translateZ(-10px)'
                        : 'translateY(35px)'
                    }}
                    className="absolute w-60 h-12 rounded-full bg-gradient-to-r from-[#FFFFFE] via-[#FFF3D6] to-[#F5DEB3] border border-white shadow-md flex items-center justify-center transition-transform duration-700"
                  >
                    <span className="text-[10px] font-bold text-[#58352B] uppercase tracking-wider">
                      Bavarian Vanilla Cream
                    </span>
                  </div>

                  {/* Layer 3: Mid Cocoa Sponge */}
                  <div
                    style={{
                      transform: isExploded
                        ? 'translateY(-20px) translateZ(10px)'
                        : 'translateY(10px)'
                    }}
                    className="absolute w-56 h-14 rounded-full bg-gradient-to-r from-[#4A2E18] via-[#58352B] to-[#351C0C] border border-[#58352B]/40 shadow-md flex items-center justify-center transition-transform duration-700"
                  >
                    <span className="text-[10px] font-bold text-[#FFC928] uppercase tracking-wider">
                      Dutch Dark Cocoa
                    </span>
                  </div>

                  {/* Layer 4: Belgian Ganache & Strawberries */}
                  <div
                    style={{
                      transform: isExploded
                        ? 'translateY(-65px) translateZ(30px)'
                        : 'translateY(-15px)'
                    }}
                    className="absolute w-52 h-12 rounded-full bg-gradient-to-r from-[#E94B5A] via-[#C93B48] to-[#A02834] border border-white/60 shadow-lg flex items-center justify-center transition-transform duration-700"
                  >
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                      Fresh Strawberry Glaze
                    </span>
                  </div>

                  {/* Layer 5: Golden Glaze Top with Celebration Candle */}
                  <div
                    style={{
                      transform: isExploded
                        ? 'translateY(-110px) translateZ(50px)'
                        : 'translateY(-40px)'
                    }}
                    className="absolute w-44 h-12 rounded-full bg-gradient-to-r from-[#FFF1B0] via-[#FFC928] to-[#F28C28] border-2 border-white shadow-xl flex items-center justify-center transition-transform duration-700"
                  >
                    {/* Glowing Candle */}
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex flex-col items-center">
                      <div className="w-2.5 h-3.5 bg-gradient-to-t from-[#FF4500] via-[#FFC928] to-white rounded-full animate-bounce shadow-md shadow-[#FFC928]" />
                      <div className="w-2 h-5 bg-white border border-[#FFD6B5] rounded-xs shadow-xs" />
                    </div>
                    <span className="text-[9px] font-extrabold text-[#58352B] uppercase tracking-wider">
                      24k Gold Topper
                    </span>
                  </div>
                </div>

                {/* 3D Exploder Controls Bottom Bar */}
                <div className="absolute bottom-4 inset-x-4 flex items-center justify-between bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#FFD6B5]">
                  <span className="text-xs font-semibold text-[#58352B]">
                    Drag mouse to rotate 3D cake
                  </span>
                  <button
                    onClick={() => setIsExploded(!isExploded)}
                    className="px-3.5 py-1.5 rounded-full bg-[#F28C28] text-white text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-sm hover:bg-[#58352B] transition-colors"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>{isExploded ? 'Assemble Layers' : 'Deconstruct 3D'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Information & Order Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#FFD6B5] shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F28C28] px-3 py-1 rounded-full bg-[#FFF9EC] border border-[#FFD6B5]">
                Signature Showstopper
              </span>
              <div className="flex items-center gap-1 text-xs font-bold text-[#58352B]">
                <Sparkles className="w-4 h-4 text-[#FFC928]" />
                <span>Custom Name Plaque</span>
              </div>
            </div>

            <h3 className="font-display font-bold text-2xl text-[#58352B] mt-3">
              Birthday Celebration Cake
            </h3>

            <div className="mt-2 text-2xl font-extrabold text-[#F28C28] tabular-nums">
              ₹650 <span className="text-xs font-normal text-[#58352B]/60">/ 1.5 kg Grand Tier</span>
            </div>

            <p className="mt-3 text-sm text-[#58352B]/80 leading-relaxed">
              Every cake is hand-assembled to order by master pastry chefs. Includes free celebration candles, birthday sparklers, golden knife, and eco-friendly insulated packaging.
            </p>

            {/* Cake Highlights List */}
            <div className="mt-6 space-y-2.5 text-xs font-semibold text-[#58352B]/90">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F28C28]" />
                <span>6 separate artisan layers of chocolate, cream & berries</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F28C28]" />
                <span>100% Eggless pure vegetarian recipe guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F28C28]" />
                <span>Same-day priority delivery in Chennai, Coimbatore & Madurai</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onAddToCart(cakeItem)}
                className="w-full sm:flex-1 py-3.5 rounded-full bg-gradient-to-r from-[#F28C28] to-[#FFC928] text-white font-bold tracking-wide uppercase text-xs shadow-md hover:scale-105 transition-all text-center"
              >
                Order Birthday Cake (₹650)
              </button>

              <button
                onClick={handleCelebrateNow}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#E94B5A] text-white font-bold tracking-wide uppercase text-xs shadow-md hover:bg-[#58352B] transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Celebrate Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
