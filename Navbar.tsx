import React, { useState } from 'react';
import { ChefHat, ShoppingBag, Heart, Search, Menu as MenuIcon, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  favoritesCount: number;
  onOpenCart: () => void;
  onOpenFavorites: () => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  favoritesCount,
  onOpenCart,
  onOpenFavorites
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FFC928] text-[#542D22] border-b-2 border-[#542D22]/15 shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Brand Logo & Chef Hat Mark (Typographic / Illustrated without a character) */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-2xl bg-[#E63925] flex items-center justify-center text-white shadow-lg shadow-[#E63925]/30 group-hover:scale-105 transition-transform border-2 border-white">
            <ChefHat className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className="text-2xl font-black tracking-wider text-[#542D22] font-display flex items-center gap-1">
              FOOD <span className="text-[#E63925]">CHEF</span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#173F35] block -mt-1">
              Good Food • Great Mood
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-black uppercase tracking-widest text-[#542D22]">
          <a href="#" className="hover:text-[#E63925] transition-colors">Home</a>
          <a href="#runway" className="hover:text-[#E63925] transition-colors">Runway</a>
          <a href="#categories" className="hover:text-[#E63925] transition-colors">Categories</a>
          <a href="#menu" className="hover:text-[#E63925] transition-colors">Menu</a>
          <a href="#cake" className="hover:text-[#E63925] transition-colors">3D Cakes</a>
          <a href="#about" className="hover:text-[#E63925] transition-colors">About Us</a>
          <a href="#tracking" className="hover:text-[#E63925] transition-colors">Track Order</a>
        </nav>

        {/* Right: Search, Wishlist, Cart with Bounce Badge, Order Now */}
        <div className="flex items-center gap-3">
          <a
            href="#menu"
            className="p-2.5 rounded-xl bg-white/70 hover:bg-white text-[#542D22] transition-colors shadow-sm"
            title="Search dishes"
          >
            <Search className="w-4 h-4 text-[#542D22]" />
          </a>

          <button
            onClick={onOpenFavorites}
            className="relative p-2.5 rounded-xl bg-white/70 hover:bg-white text-[#542D22] transition-colors shadow-sm"
            title="Wishlist"
          >
            <Heart className="w-4 h-4 text-[#E63925]" />
            {favoritesCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#E63925] text-white text-[10px] font-black flex items-center justify-center shadow">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Cart Icon with Live Item Count */}
          <button
            onClick={onOpenCart}
            className="relative px-3.5 py-2.5 rounded-xl bg-[#173F35] hover:bg-[#123129] text-white font-black text-xs flex items-center gap-2 shadow-md active:scale-95 transition-all"
            title="Open Cart Basket"
          >
            <ShoppingBag className="w-4 h-4 text-[#FFC928]" />
            <span className="hidden sm:inline">Basket</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#E63925] text-white text-[10px] font-black flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* Order Now Button (Tomato Red #E63925 with white text) */}
          <a
            href="#orderForm"
            className="hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-[#E63925] hover:bg-[#c92f1d] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-[#E63925]/30 hover:scale-105 active:scale-95 transition-all font-display"
          >
            Order Now
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/70 text-[#542D22]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFC928] border-t-2 border-[#542D22]/15 px-6 py-5 space-y-3 text-xs font-black uppercase tracking-wider">
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#E63925]">Home</a>
          <a href="#runway" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#E63925]">Runway Depth</a>
          <a href="#categories" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#E63925]">Categories</a>
          <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#E63925]">32+ Dishes Menu</a>
          <a href="#offers" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#E63925]">Special Offers</a>
          <a href="#cake" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#E63925]">3D Birthday Cake</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#E63925]">About Food Chef</a>
          <a href="#how" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#E63925]">How It Works</a>
          <a href="#orderForm" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#E63925]">Order Now (Tamil Nadu)</a>
          <a href="#tracking" onClick={() => setMobileMenuOpen(false)} className="block py-1">Order Tracking</a>
        </div>
      )}
    </header>
  );
};
