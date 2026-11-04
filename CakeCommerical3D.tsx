import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { FoodItem } from '../data/foodData';
import { Play, Layers, Volume2, VolumeX, Eye, Sparkles, ShoppingBag } from 'lucide-react';

interface CakeCommercial3DProps {
  cakeItem: FoodItem;
  onAddToCart: (item: FoodItem) => void;
}

export const CakeCommercial3D: React.FC<CakeCommercial3DProps> = ({ cakeItem, onAddToCart }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [isExploded, setIsExploded] = useState<boolean>(false);
  const [isPlayingCommercial, setIsPlayingCommercial] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const layersRef = useRef<{
    base: THREE.Mesh;
    mid: THREE.Mesh;
    top: THREE.Mesh;
    frosting: THREE.Group;
    candle: THREE.Group;
    strawberries: THREE.Group;
    chocolateDrip: THREE.Mesh;
  } | null>(null);

  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 3.4, 7.8);
    camera.lookAt(0, 0.5, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Warm Studio Lighting for Sunset Spice
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 1.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffedd5, 2.6);
    keyLight.position.set(5, 10, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    const saffronFillLight = new THREE.PointLight(0xffc928, 2.0, 15);
    saffronFillLight.position.set(-6, 4, 3);
    scene.add(saffronFillLight);

    const tomatoRimLight = new THREE.PointLight(0xe63925, 1.6, 15);
    tomatoRimLight.position.set(0, 6, -5);
    scene.add(tomatoRimLight);

    // Cake Group
    const cakeGroup = new THREE.Group();
    scene.add(cakeGroup);

    // Marble Cake Stand
    const standGeo = new THREE.CylinderGeometry(2.7, 2.9, 0.25, 64);
    const standMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.15,
      metalness: 0.1
    });
    const stand = new THREE.Mesh(standGeo, standMat);
    stand.position.y = -0.125;
    stand.receiveShadow = true;
    cakeGroup.add(stand);

    const pillarGeo = new THREE.CylinderGeometry(0.5, 1.3, 0.8, 32);
    const pillar = new THREE.Mesh(pillarGeo, standMat);
    pillar.position.y = -0.6;
    cakeGroup.add(pillar);

    // Tier 1 Base: Chocolate & Vanilla Sponge
    const baseGeo = new THREE.CylinderGeometry(2.2, 2.2, 0.9, 64);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x542d22, // Rich dark cocoa
      roughness: 0.55,
      metalness: 0.05
    });
    const baseLayer = new THREE.Mesh(baseGeo, baseMat);
    baseLayer.position.y = 0.45;
    baseLayer.castShadow = true;
    baseLayer.receiveShadow = true;
    cakeGroup.add(baseLayer);

    // Tier 2 Mid: Strawberry Cream Layer
    const midGeo = new THREE.CylinderGeometry(1.6, 1.6, 0.8, 64);
    const midMat = new THREE.MeshStandardMaterial({
      color: 0xff7e95, // Strawberry cream
      roughness: 0.35,
      metalness: 0.08
    });
    const midLayer = new THREE.Mesh(midGeo, midMat);
    midLayer.position.y = 1.3;
    midLayer.castShadow = true;
    midLayer.receiveShadow = true;
    cakeGroup.add(midLayer);

    // Tier 3 Top: Saffron-Vanilla Velvet Sponge
    const topGeo = new THREE.CylinderGeometry(1.0, 1.0, 0.7, 64);
    const topMat = new THREE.MeshStandardMaterial({
      color: 0xffc928, // Saffron yellow sponge
      roughness: 0.3,
      metalness: 0.1
    });
    const topLayer = new THREE.Mesh(topGeo, topMat);
    topLayer.position.y = 2.05;
    topLayer.castShadow = true;
    topLayer.receiveShadow = true;
    cakeGroup.add(topLayer);

    // Dark Chocolate Drip Ring
    const dripGeo = new THREE.TorusGeometry(1.02, 0.08, 16, 64);
    const dripMat = new THREE.MeshStandardMaterial({
      color: 0x3d1d16,
      roughness: 0.15,
      metalness: 0.2
    });
    const chocolateDrip = new THREE.Mesh(dripGeo, dripMat);
    chocolateDrip.rotation.x = Math.PI / 2;
    chocolateDrip.position.y = 2.38;
    cakeGroup.add(chocolateDrip);

    // Strawberry & Chantilly Cream Toppings
    const frostingGroup = new THREE.Group();
    frostingGroup.position.y = 2.4;
    const creamMat = new THREE.MeshStandardMaterial({
      color: 0xfffaf0,
      roughness: 0.2
    });
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const swirl = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), creamMat);
      swirl.position.set(Math.cos(angle) * 0.8, 0.05, Math.sin(angle) * 0.8);
      swirl.scale.set(1, 1.4, 1);
      frostingGroup.add(swirl);
    }
    cakeGroup.add(frostingGroup);

    // Fresh Strawberries
    const strawberriesGroup = new THREE.Group();
    strawberriesGroup.position.y = 2.45;
    const strawberryMat = new THREE.MeshStandardMaterial({
      color: 0xe63925, // Tomato red strawberry
      roughness: 0.2,
      metalness: 0.1
    });
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2 + 0.3;
      const berry = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.22, 16), strawberryMat);
      berry.position.set(Math.cos(angle) * 0.65, 0.1, Math.sin(angle) * 0.65);
      berry.rotation.z = Math.PI;
      strawberriesGroup.add(berry);
    }
    cakeGroup.add(strawberriesGroup);

    // Golden Birthday Celebration Candle
    const candleGroup = new THREE.Group();
    candleGroup.position.y = 2.45;
    const candle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.045, 0.045, 0.8, 16),
      new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.85, roughness: 0.2 })
    );
    candle.position.y = 0.4;
    candleGroup.add(candle);

    // Flickering Candle Flame
    const flame = new THREE.Mesh(
      new THREE.ConeGeometry(0.07, 0.24, 16),
      new THREE.MeshBasicMaterial({ color: 0xff9900 })
    );
    flame.position.y = 0.9;
    candleGroup.add(flame);

    const flameLight = new THREE.PointLight(0xffaa00, 1.4, 3.5);
    flameLight.position.y = 0.95;
    candleGroup.add(flameLight);
    cakeGroup.add(candleGroup);

    layersRef.current = {
      base: baseLayer,
      mid: midLayer,
      top: topLayer,
      frosting: frostingGroup,
      candle: candleGroup,
      strawberries: strawberriesGroup,
      chocolateDrip: chocolateDrip
    };

    // Golden Sparkle Floating Particles
    const particleCount = 80;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let p = 0; p < particleCount * 3; p += 3) {
      positions[p] = (Math.random() - 0.5) * 8;
      positions[p + 1] = Math.random() * 5;
      positions[p + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xffc928,
      size: 0.07,
      transparent: true,
      opacity: 0.75
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Animation Loop
    let clock = new THREE.Clock();
    let currentYMid = 1.3;
    let currentYTop = 2.05;
    let currentYFrosting = 2.4;
    let currentYCandle = 2.45;
    let currentYStrawberries = 2.45;
    let currentYDrip = 2.38;

    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Continuous rotation
      cakeGroup.rotation.y += 0.35 * delta;

      // Candle flame flicker
      flame.scale.set(
        1 + Math.sin(elapsed * 18) * 0.15,
        1 + Math.cos(elapsed * 22) * 0.2,
        1 + Math.sin(elapsed * 18) * 0.15
      );
      flameLight.intensity = 1.3 + Math.sin(elapsed * 14) * 0.4;

      // Target positions based on isExploded
      const targetYMid = isExploded ? 2.15 : 1.3;
      const targetYTop = isExploded ? 3.35 : 2.05;
      const targetYDrip = isExploded ? 3.68 : 2.38;
      const targetYFrosting = isExploded ? 4.2 : 2.4;
      const targetYStrawberries = isExploded ? 4.5 : 2.45;
      const targetYCandle = isExploded ? 4.7 : 2.45;

      currentYMid += (targetYMid - currentYMid) * 0.08;
      currentYTop += (targetYTop - currentYTop) * 0.08;
      currentYDrip += (targetYDrip - currentYDrip) * 0.08;
      currentYFrosting += (targetYFrosting - currentYFrosting) * 0.08;
      currentYStrawberries += (targetYStrawberries - currentYStrawberries) * 0.08;
      currentYCandle += (targetYCandle - currentYCandle) * 0.08;

      if (layersRef.current) {
        layersRef.current.mid.position.y = currentYMid;
        layersRef.current.top.position.y = currentYTop;
        layersRef.current.chocolateDrip.position.y = currentYDrip;
        layersRef.current.frosting.position.y = currentYFrosting;
        layersRef.current.strawberries.position.y = currentYStrawberries;
        layersRef.current.candle.position.y = currentYCandle;
      }

      particles.rotation.y = elapsed * 0.05;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container || !renderer) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight || 500;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      renderer.dispose();
    };
  }, [isExploded]);

  return (
    <section id="cake" className="relative py-24 bg-gradient-to-b from-[#FFF4DF] via-white to-[#FFF4DF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Exact Prompt Heading & Text */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFC928]/25 border border-[#FFC928] text-[#542D22] text-xs font-black uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-[#E63925]" />
            Cinematic 3D Birthday Cake Commercial
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#542D22] tracking-tight font-display">
            MAKE EVERY CELEBRATION <span className="text-[#E63925]">SWEETER!</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#542D22]/85 font-medium leading-relaxed">
            Celebrate your happiest moments with beautiful, freshly made celebration cakes from FOOD CHEF. Triple-layered chocolate and strawberry sponge with chocolate drip, fresh strawberries, and golden candles.
          </p>
        </div>

        {/* 3D Showcase & Video Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-[#FFC928]/40">
          {/* Left: Interactive 3D WebGL / Video Switcher */}
          <div className="lg:col-span-7 relative h-[440px] sm:h-[500px] rounded-2xl bg-gradient-to-br from-[#FFF4DF] to-[#FFE0B2] overflow-hidden border border-[#FFC928]/40 flex items-center justify-center">
            {isPlayingCommercial ? (
              <div className="relative w-full h-full">
                <video
                  src="https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/cloudinarry%20to%20cloudflare/202606021731-e_hqa6sn.mp4"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute bottom-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-full text-[#542D22] shadow-lg hover:scale-110 transition-transform"
                  title="Toggle sound"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-[#E63925]" />}
                </button>
              </div>
            ) : (
              <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
            )}

            {/* Mode Switcher Buttons */}
            <div className="absolute top-4 left-4 flex gap-2">
              <button
                onClick={() => setIsPlayingCommercial(false)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black tracking-wide flex items-center gap-1.5 transition-all shadow-md ${
                  !isPlayingCommercial
                    ? 'bg-[#E63925] text-white shadow-[#E63925]/30'
                    : 'bg-white/90 text-[#542D22] hover:bg-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                3D Interactive WebGL
              </button>
              <button
                onClick={() => setIsPlayingCommercial(true)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black tracking-wide flex items-center gap-1.5 transition-all shadow-md ${
                  isPlayingCommercial
                    ? 'bg-[#FFC928] text-[#542D22] shadow-[#FFC928]/30'
                    : 'bg-white/90 text-[#542D22] hover:bg-white'
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                4K Commercial Video
              </button>
            </div>

            {/* 3D Exploded View Toggle */}
            {!isPlayingCommercial && (
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
                <button
                  onClick={() => setIsExploded(!isExploded)}
                  className="px-4 py-2 bg-white/95 backdrop-blur-md border border-[#FFC928] text-[#542D22] text-xs font-black rounded-xl shadow-lg hover:bg-[#FFF4DF] flex items-center gap-2 transition-transform active:scale-95"
                >
                  <Layers className="w-4 h-4 text-[#E63925]" />
                  {isExploded ? 'Reassemble Cake' : 'Explode 3D Layers'}
                </button>
                <span className="text-[11px] font-bold text-[#542D22]/70 bg-white/80 px-2.5 py-1 rounded-lg hidden sm:inline-block">
                  Drag to rotate • Studio Lighting
                </span>
              </div>
            )}
          </div>

          {/* Right: Specifications & Direct Add */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
                <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">
                  100% Eggless Pure Veg
                </span>
              </div>

              <h3 className="text-3xl font-black text-[#542D22] font-display">
                Maison Royale Birthday Celebration Cake
              </h3>

              <p className="mt-2 text-sm text-[#542D22]/80 leading-relaxed font-medium">
                Photorealistic strawberry and chocolate layered celebration cake. Includes dark cocoa base, strawberry cream center, saffron sponge crown, chocolate drip, fresh strawberries, and golden birthday candles.
              </p>

              {/* Layer Breakdown */}
              <div className="mt-5 space-y-2.5">
                <div className="p-3 bg-[#FFF4DF] rounded-xl border border-[#FFC928]/40 flex items-center justify-between text-xs font-bold text-[#542D22]">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E63925]" />
                    Crown: Fresh Strawberries & Chantilly Cream
                  </span>
                  <span className="text-[#E63925]">Topping</span>
                </div>
                <div className="p-3 bg-[#FFF4DF] rounded-xl border border-[#FFC928]/40 flex items-center justify-between text-xs font-bold text-[#542D22]">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFC928]" />
                    Mid: Saffron Sponge & Strawberry Mousse
                  </span>
                  <span className="text-[#FFC928]">Whipped</span>
                </div>
                <div className="p-3 bg-[#FFF4DF] rounded-xl border border-[#FFC928]/40 flex items-center justify-between text-xs font-bold text-[#542D22]">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#542D22]" />
                    Base: Dark Cocoa Sponge & Cashew Crunch
                  </span>
                  <span className="text-[#542D22]">Crisp</span>
                </div>
              </div>
            </div>

            {/* Price & Add to Cart (Tomato Red CTA) */}
            <div className="mt-8 pt-6 border-t border-[#FFC928]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#542D22]/70 font-semibold block">Chef's Signature (1.2 kg)</span>
                <span className="text-3xl font-black text-[#E63925]">₹550</span>
              </div>
              <button
                onClick={() => onAddToCart(cakeItem)}
                className="w-full sm:w-auto px-8 py-4 bg-[#E63925] hover:bg-[#c92f1d] text-white font-black text-sm rounded-2xl shadow-xl shadow-[#E63925]/30 hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-2.5 font-display"
              >
                <ShoppingBag className="w-4 h-4 text-[#FFC928]" />
                Add Celebration Cake
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
