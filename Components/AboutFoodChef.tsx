import React from 'react';
import { ChefHat, ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export const AboutFoodChef: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Exact Prompt Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E63925]/15 border border-[#E63925] text-[#E63925] text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Our Culinary Purpose
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#542D22] font-display leading-[1.1]">
              ABOUT <span className="text-[#E63925]">FOOD CHEF</span>
            </h2>

            {/* Exact Prompt Description */}
            <p className="text-base sm:text-lg text-[#542D22]/90 leading-relaxed font-medium">
              At FOOD CHEF, we believe every bite should bring happiness. From traditional South Indian snacks to delicious street food, fast food, bakery treats and celebration cakes, we bring your favourite flavours together in one place.
            </p>

            {/* 4 Culinary Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#FFF4DF] border border-[#FFC928]/40">
                <div className="w-8 h-8 rounded-xl bg-[#E63925] text-white flex items-center justify-center mb-2 shadow">
                  <ChefHat className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-black text-[#542D22]">Master Recipe Heritage</h4>
                <p className="text-xs text-stone-600 mt-1">Authentic Tamil Nadu culinary secrets perfected across generations.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF4DF] border border-[#FFC928]/40">
                <div className="w-8 h-8 rounded-xl bg-[#173F35] text-white flex items-center justify-center mb-2 shadow">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-black text-[#542D22]">100% Pure Vegetarian</h4>
                <p className="text-xs text-stone-600 mt-1">Strict vegetarian and eggless bakery standards in certified kitchens.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF4DF] border border-[#FFC928]/40">
                <div className="w-8 h-8 rounded-xl bg-[#FFC928] text-[#542D22] flex items-center justify-center mb-2 shadow">
                  <Sparkles className="w-4 h-4 text-[#E63925]" />
                </div>
                <h4 className="text-sm font-black text-[#542D22]">Always Cooked to Order</h4>
                <p className="text-xs text-stone-600 mt-1">Zero pre-fried or cold food. Frying pans ignite when you tap order.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF4DF] border border-[#FFC928]/40">
                <div className="w-8 h-8 rounded-xl bg-[#542D22] text-white flex items-center justify-center mb-2 shadow">
                  <Award className="w-4 h-4 text-[#FFC928]" />
                </div>
                <h4 className="text-sm font-black text-[#542D22]">FSSAI Gold Quality</h4>
                <p className="text-xs text-stone-600 mt-1">Strict cold-pressed oils, no artificial preservatives or synthetic colors.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Large Food Photography Grid with Parallax Floating */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
                alt="South Indian medu vada"
                className="w-full h-64 object-cover rounded-3xl shadow-xl border-4 border-white animate-float"
              />
              <div className="p-5 rounded-3xl bg-[#173F35] text-white">
                <span className="text-3xl font-black font-display text-[#FFC928]">38</span>
                <span className="text-xs font-bold block mt-1">Tamil Nadu Districts Connected</span>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="p-5 rounded-3xl bg-[#E63925] text-white">
                <span className="text-3xl font-black font-display text-[#FFC928]">32+</span>
                <span className="text-xs font-bold block mt-1">Freshly Cooked Snack Varieties</span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
                alt="Artisan cake"
                className="w-full h-64 object-cover rounded-3xl shadow-xl border-4 border-white animate-float-reverse"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
