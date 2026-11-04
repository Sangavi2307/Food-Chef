import React from 'react';
import { MENU_ITEMS, FoodItem } from '../data/foodData';

interface FoodMarqueeProps {
  onSelectDish: (dish: FoodItem) => void;
}

export const FoodMarquee: React.FC<FoodMarqueeProps> = ({ onSelectDish }) => {
  const row1 = MENU_ITEMS.slice(0, 16);
  const row2 = MENU_ITEMS.slice(16, 32);

  return (
    <section className="py-8 bg-white border-y-2 border-[#FFC928]/40 overflow-hidden">
      <div className="space-y-4">
        {/* Row 1: Moves Left to Right */}
        <div className="animate-marquee-right flex gap-5 items-center">
          {[...row1, ...row1].map((item, idx) => (
            <div
              key={`row1-${idx}`}
              onClick={() => onSelectDish(item)}
              className="flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-[#FFF4DF] border border-[#FFC928]/40 hover:bg-[#FFE0B2] transition-all shrink-0 cursor-pointer shadow-sm hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-xl object-cover shadow-sm shrink-0"
              />
              <div className="min-w-0 pr-2">
                <span className="text-xs font-black text-[#542D22] block truncate max-w-[150px]">
                  {item.name}
                </span>
                <span className="text-[11px] font-black text-[#E63925]">
                  ₹{item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Moves Right to Left */}
        <div className="animate-marquee-left flex gap-5 items-center">
          {[...row2, ...row2].map((item, idx) => (
            <div
              key={`row2-${idx}`}
              onClick={() => onSelectDish(item)}
              className="flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-white border border-[#E63925]/30 hover:bg-[#FFF4DF] transition-all shrink-0 cursor-pointer shadow-sm hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-xl object-cover shadow-sm shrink-0"
              />
              <div className="min-w-0 pr-2">
                <span className="text-xs font-black text-[#542D22] block truncate max-w-[150px]">
                  {item.name}
                </span>
                <span className="text-[11px] font-black text-[#173F35]">
                  ₹{item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
