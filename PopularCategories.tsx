import React from 'react';
import { POPULAR_CATEGORIES } from '../data/foodData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface PopularCategoriesProps {
  onSelectCategory: (categoryName: string) => void;
}

export const PopularCategories: React.FC<PopularCategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-24 bg-[#FFF4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E63925]/15 border border-[#E63925] text-[#E63925] text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Culinary Pillars
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#542D22] font-display">
            POPULAR FOOD <span className="text-[#E63925]">CATEGORIES</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#542D22]/80 font-medium">
            Explore 8 distinctive categories crafted with authentic Tamil Nadu spices, fresh bakery doughs, and royal sweet recipes.
          </p>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.name)}
              className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-white"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#542D22] via-[#542D22]/50 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#FFC928] text-[#542D22] inline-block w-fit mb-2">
                  {cat.count}
                </span>
                <h3 className="text-xl font-black font-display text-white leading-snug">
                  {cat.name}
                </h3>
                <p className="mt-1 text-xs text-stone-200 line-clamp-2 leading-relaxed font-medium">
                  {cat.description}
                </p>

                <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-black text-[#FFC928] group-hover:translate-x-1 transition-transform">
                  <span>Explore Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
