import React, { useState } from 'react';
import { MENU_ITEMS, FoodItem } from '../data/foodData';
import { Search, Heart, Plus, Minus, ShoppingBag, Sparkles, Filter, Check } from 'lucide-react';

interface MenuGalleryProps {
  onSelectDish: (dish: FoodItem) => void;
  onAddToCart: (dish: FoodItem, quantity?: number) => void;
  favorites: number[];
  onToggleFavorite: (id: number) => void;
  activeCategoryFilter: string;
}

const CATEGORY_TABS = [
  'All Items',
  'South Indian Snacks',
  'Street Food',
  'Fast Food',
  'Traditional Sweets',
  'Cakes and Desserts',
  'Bakery Items',
  'Evening Snacks',
  'Special Combos'
];

export const MenuGallery: React.FC<MenuGalleryProps> = ({
  onSelectDish,
  onAddToCart,
  favorites,
  onToggleFavorite,
  activeCategoryFilter
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(activeCategoryFilter || 'All Items');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'featured' | 'price-low' | 'price-high'>('featured');
  const [quantities, setQuantities] = useState<{ [id: number]: number }>({});

  const handleQtyChange = (id: number, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All Items' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortOrder === 'price-low') return a.price - b.price;
    if (sortOrder === 'price-high') return b.price - a.price;
    return 0;
  });

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC928]/25 border border-[#FFC928] text-[#542D22] text-xs font-black uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#E63925]" />
              Authentic Kitchen Catalogue
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#542D22] font-display">
              COMPLETE <span className="text-[#E63925]">FOOD MENU</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#542D22]/80 font-medium">
              38 delicious items across 8 categories. Every single item prepared live with 100% vegetarian ingredients.
            </p>
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search vada, samosa, dosa, cake..."
                className="pl-10 pr-4 py-2.5 rounded-2xl border border-stone-200 bg-[#FFF4DF]/30 text-xs font-bold text-[#542D22] outline-none focus:border-[#E63925] w-full sm:w-64"
              />
            </div>

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as any)}
              className="px-4 py-2.5 rounded-2xl border border-stone-200 bg-[#FFF4DF]/30 text-xs font-bold text-[#542D22] outline-none focus:border-[#E63925]"
            >
              <option value="featured">Featured Chef Selection</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {CATEGORY_TABS.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs font-black tracking-wide transition-all ${
                selectedCategory === cat
                  ? 'bg-[#E63925] text-white shadow-lg shadow-[#E63925]/30 scale-105'
                  : 'bg-[#FFF4DF] text-[#542D22] hover:bg-[#FFE0B2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 32+ Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((dish) => {
            const isFav = favorites.includes(dish.id);
            const qty = quantities[dish.id] || 1;

            return (
              <div
                key={dish.id}
                className="bg-white rounded-3xl p-4 border-2 border-stone-100 shadow-md hover:shadow-2xl hover:border-[#FFC928] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Food Photograph with Fallback & Badges */}
                  <div
                    onClick={() => onSelectDish(dish)}
                    className="relative h-48 rounded-2xl overflow-hidden cursor-pointer"
                  >
                    <img
                      src={dish.image}
                      alt={dish.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = dish.fallbackImage;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Pure Vegetarian Green Dot Indicator */}
                    <div className="absolute top-3 left-3 w-5 h-5 bg-white rounded border border-emerald-600 flex items-center justify-center shadow">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                    </div>

                    {/* Wishlist Toggle Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(dish.id);
                      }}
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-md text-stone-600 hover:text-[#E63925] transition-colors shadow"
                      title="Add to Wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'text-[#E63925] fill-current' : ''}`} />
                    </button>

                    {/* Tag badge */}
                    {dish.tag && (
                      <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-lg bg-[#E63925] text-white text-[10px] font-black uppercase tracking-wider shadow">
                        {dish.tag}
                      </span>
                    )}
                  </div>

                  {/* Dish Details */}
                  <div className="mt-3.5">
                    <div className="flex items-center justify-between text-[11px] text-stone-400 font-bold mb-1">
                      <span>{dish.prepTime}</span>
                      <span>{dish.calories}</span>
                    </div>

                    <h3
                      onClick={() => onSelectDish(dish)}
                      className="text-base font-black text-[#542D22] hover:text-[#E63925] cursor-pointer transition-colors leading-snug line-clamp-1"
                    >
                      {dish.name}
                    </h3>

                    <p className="mt-1 text-xs text-stone-600 line-clamp-2 leading-relaxed font-medium">
                      {dish.description}
                    </p>
                  </div>
                </div>

                {/* Bottom: Price, Quantity Selector, and Add to Cart (Forest Green #173F35) */}
                <div className="mt-5 pt-3 border-t border-stone-100 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block font-bold">Price</span>
                      <span className="text-xl font-black text-[#E63925]">₹{dish.price * qty}</span>
                    </div>

                    {/* Quantity Stepper */}
                    <div className="flex items-center gap-1.5 bg-[#FFF4DF] p-1 rounded-xl border border-[#FFC928]/40">
                      <button
                        onClick={() => handleQtyChange(dish.id, -1)}
                        className="w-6 h-6 rounded-lg bg-white text-[#542D22] flex items-center justify-center font-bold text-xs shadow-sm hover:bg-stone-50"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-black text-[#542D22]">{qty}</span>
                      <button
                        onClick={() => handleQtyChange(dish.id, 1)}
                        className="w-6 h-6 rounded-lg bg-white text-[#542D22] flex items-center justify-center font-bold text-xs shadow-sm hover:bg-stone-50"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Add to Cart in Forest Green (#173F35) */}
                  <button
                    onClick={() => onAddToCart(dish, qty)}
                    className="w-full py-2.5 bg-[#173F35] hover:bg-[#123129] text-white font-black text-xs rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 font-display uppercase tracking-wider"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#FFC928]" />
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
