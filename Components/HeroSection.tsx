import React from 'react';
import { FoodItem } from '../data/foodData';
import { ArrowRight, Sparkles, Flame, ShieldCheck, Clock } from 'lucide-react';

interface HeroSectionProps {
  onExploreMenu: () => void;
  onOrderNow: () => void;
  onSelectDish: (dish: FoodItem) => void;
  featuredDishes: FoodItem[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreMenu,
  onOrderNow,
  onSelectDish,
  featuredDishes
}) => {
  // Key items requested in prompt: samosas, medu vada, onion pakoda, french fries, burger, pizza, chocolate cake
  const vada = featuredDishes.find((d) => d.name.includes('Medu Vada')) || featuredDishes[0];
  const samosa = featuredDishes.find((d) => d.name.includes('Samosa')) || featuredDishes[8];
  const pakoda = featuredDishes.find((d) => d.name.includes('Pakoda')) || featuredDishes[2];
  const fries = featuredDishes.find((d) => d.name.includes('Fries')) || featuredDishes[16];
  const burger = featuredDishes.find((d) => d.name.includes('Burger')) || featuredDishes[20];
  const pizza = featuredDishes.find((d) => d.name.includes('Pizza')) || featuredDishes[21];
  const cake = featuredDishes.find((d) => d.name.includes('Cake')) || featuredDishes[31];

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-[#FFC928] via-[#FF8A00] to-[#E63925] text-white py-16 lg:py-24">
      {/* Decorative Parallax Background Circles */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#542D22]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading, Supporting Text, and Buttons */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-black uppercase tracking-widest shadow-md">
            <Sparkles className="w-4 h-4 text-[#FFC928]" />
            Luxury Cinematic Food Experience
          </div>

          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-white leading-[1.08] tracking-tight font-display drop-shadow-md">
            GOOD FOOD.<br />
            <span className="text-[#542D22]">GREAT MOOD.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/95 max-w-xl font-medium leading-relaxed drop-shadow-sm">
            Discover delicious snacks, irresistible treats, authentic South Indian flavours and unforgettable desserts. Your favourite food is just one order away!
          </p>

          {/* Buttons: EXPLORE MENU & ORDER NOW */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button
              onClick={onExploreMenu}
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#E63925] font-black text-sm rounded-2xl shadow-xl hover:bg-stone-50 hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-2 font-display uppercase tracking-wider"
            >
              EXPLORE MENU
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOrderNow}
              className="w-full sm:w-auto px-8 py-4 bg-[#E63925] text-white font-black text-sm rounded-2xl shadow-xl border-2 border-white hover:bg-[#c92f1d] hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-2 font-display uppercase tracking-wider"
            >
              ORDER NOW
            </button>
          </div>

          {/* Culinary Highlights Bar */}
          <div className="pt-6 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
            <div className="bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/25 text-center">
              <span className="text-xl font-black block text-white font-display">32+</span>
              <span className="text-[11px] font-bold text-white/90">Authentic Snacks</span>
            </div>
            <div className="bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/25 text-center">
              <span className="text-xl font-black block text-white font-display">38</span>
              <span className="text-[11px] font-bold text-white/90">TN Districts</span>
            </div>
            <div className="bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/25 text-center">
              <span className="text-xl font-black block text-white font-display">100%</span>
              <span className="text-[11px] font-bold text-white/90">Pure Veg Certified</span>
            </div>
          </div>
        </div>

        {/* Right Column: Central Realistic Food Arrangement with Floating 3D Depth */}
        <div className="lg:col-span-6 relative h-[480px] sm:h-[560px] flex items-center justify-center perspective-1000">
          {/* Card 1 (Top Left): Golden Medu Vada */}
          <div
            onClick={() => onSelectDish(vada)}
            className="absolute top-2 left-2 sm:left-8 w-44 sm:w-52 bg-white rounded-3xl p-3 shadow-2xl border-4 border-white transform -rotate-8 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-float cursor-pointer z-10"
          >
            <img src={vada.image} alt={vada.name} className="w-full h-28 sm:h-32 object-cover rounded-2xl" />
            <div className="p-1.5 text-left">
              <span className="text-[9px] font-extrabold text-[#173F35] uppercase">Pure Veg</span>
              <h4 className="text-xs font-black text-[#542D22] truncate">{vada.name}</h4>
              <span className="text-xs font-black text-[#E63925]">₹{vada.price}</span>
            </div>
          </div>

          {/* Card 2 (Top Right): Wood Fired Pizza */}
          <div
            onClick={() => onSelectDish(pizza)}
            className="absolute top-6 right-2 sm:right-6 w-44 sm:w-52 bg-white rounded-3xl p-3 shadow-2xl border-4 border-white transform rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-float-reverse cursor-pointer z-10"
          >
            <img src={pizza.image} alt={pizza.name} className="w-full h-28 sm:h-32 object-cover rounded-2xl" />
            <div className="p-1.5 text-left">
              <span className="text-[9px] font-extrabold text-[#E63925] uppercase">Hot Oven</span>
              <h4 className="text-xs font-black text-[#542D22] truncate">{pizza.name}</h4>
              <span className="text-xs font-black text-[#E63925]">₹{pizza.price}</span>
            </div>
          </div>

          {/* Centerpiece Hero Card: Celebration Cake & Burger */}
          <div
            onClick={() => onSelectDish(cake)}
            className="relative z-20 w-64 sm:w-72 bg-white rounded-3xl p-4 shadow-2xl border-4 border-[#FFC928] transform hover:scale-105 transition-all duration-300 animate-pulse-glow cursor-pointer"
          >
            <div className="relative">
              <img src={cake.image} alt={cake.name} className="w-full h-44 sm:h-52 object-cover rounded-2xl" />
              <span className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-[#E63925] text-white text-[10px] font-black uppercase tracking-wider">
                Signature 3D
              </span>
            </div>
            <div className="p-2 text-left">
              <h4 className="text-base font-black text-[#542D22] truncate font-display">Maison Royale Cake</h4>
              <div className="flex items-center justify-between mt-1">
                <span className="text-base font-black text-[#E63925]">₹{cake.price}</span>
                <span className="text-xs font-black text-[#173F35]">1.2 kg Feast</span>
              </div>
            </div>
          </div>

          {/* Card 3 (Bottom Left): Samosas */}
          <div
            onClick={() => onSelectDish(samosa)}
            className="absolute bottom-4 left-4 sm:left-10 w-44 sm:w-52 bg-white rounded-3xl p-3 shadow-2xl border-4 border-white transform -rotate-4 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-float-reverse cursor-pointer z-10"
          >
            <img src={samosa.image} alt={samosa.name} className="w-full h-28 sm:h-32 object-cover rounded-2xl" />
            <div className="p-1.5 text-left">
              <span className="text-[9px] font-extrabold text-[#E63925] uppercase">Crispy Fried</span>
              <h4 className="text-xs font-black text-[#542D22] truncate">{samosa.name}</h4>
              <span className="text-xs font-black text-[#E63925]">₹{samosa.price}</span>
            </div>
          </div>

          {/* Card 4 (Bottom Right): Gourmet Veg Burger */}
          <div
            onClick={() => onSelectDish(burger)}
            className="absolute bottom-2 right-4 sm:right-8 w-44 sm:w-52 bg-white rounded-3xl p-3 shadow-2xl border-4 border-white transform rotate-8 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-float cursor-pointer z-10"
          >
            <img src={burger.image} alt={burger.name} className="w-full h-28 sm:h-32 object-cover rounded-2xl" />
            <div className="p-1.5 text-left">
              <span className="text-[9px] font-extrabold text-[#173F35] uppercase">Loaded Bun</span>
              <h4 className="text-xs font-black text-[#542D22] truncate">{burger.name}</h4>
              <span className="text-xs font-black text-[#E63925]">₹{burger.price}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
