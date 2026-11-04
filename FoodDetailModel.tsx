import React from 'react';
import { FoodItem } from '../data/foodData';
import { X, Plus, Heart, Clock, Flame, ShieldCheck, ShoppingBag } from 'lucide-react';

interface FoodDetailModalProps {
  dish: FoodItem | null;
  onClose: () => void;
  onAddToCart: (dish: FoodItem, quantity?: number) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export const FoodDetailModal: React.FC<FoodDetailModalProps> = ({
  dish,
  onClose,
  onAddToCart,
  isFavorite,
  onToggleFavorite
}) => {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFC928] animate-in zoom-in-95 duration-200 text-[#542D22]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 text-[#542D22] shadow-lg hover:scale-110 transition-transform"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img
            src={dish.image}
            alt={dish.name}
            onError={(e) => {
              (e.target as HTMLImageElement).src = dish.fallbackImage;
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Pure Veg Badge */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow">
            <span className="w-3 h-3 rounded-full bg-emerald-600" />
            <span className="text-xs font-black text-emerald-800 uppercase tracking-wider">
              100% Pure Vegetarian
            </span>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#E63925] block mb-1">
                {dish.category}
              </span>
              <h3 className="text-2xl font-black text-[#542D22] font-display">{dish.name}</h3>
            </div>
            <button
              onClick={() => onToggleFavorite(dish.id)}
              className="p-3 rounded-2xl bg-[#FFF4DF] hover:bg-[#FFE0B2] text-[#542D22] transition-colors"
              title="Add to Wishlist"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'text-[#E63925] fill-current' : ''}`} />
            </button>
          </div>

          <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
            {dish.description}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-3 my-5 p-3.5 bg-[#FFF4DF] rounded-2xl border border-[#FFC928]/40 text-center">
            <div>
              <span className="text-[10px] text-stone-500 uppercase font-black block">Prep Time</span>
              <span className="text-xs font-black text-[#542D22]">{dish.prepTime}</span>
            </div>
            <div>
              <span className="text-[10px] text-stone-500 uppercase font-black block">Nutritional Energy</span>
              <span className="text-xs font-black text-[#542D22]">{dish.calories}</span>
            </div>
          </div>

          {/* Bottom Price & Add to Cart (Forest Green #173F35) */}
          <div className="pt-2 flex items-center justify-between gap-4 border-t border-stone-200">
            <div>
              <span className="text-[10px] text-stone-400 block font-bold">Standard Portion</span>
              <span className="text-2xl font-black text-[#E63925]">₹{dish.price}</span>
            </div>
            <button
              onClick={() => {
                onAddToCart(dish, 1);
                onClose();
              }}
              className="px-6 py-3.5 bg-[#173F35] hover:bg-[#123129] text-white font-black text-xs rounded-xl shadow-lg flex items-center gap-2 font-display uppercase tracking-wider active:scale-95 transition-all"
            >
              <ShoppingBag className="w-4 h-4 text-[#FFC928]" />
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
