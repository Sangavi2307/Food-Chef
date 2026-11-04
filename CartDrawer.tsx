import React, { useState } from 'react';
import { CartItem } from '../types';
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight, Tag, Check, Sparkles } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string | number, delta: number) => void;
  onRemoveItem: (id: string | number) => void;
  onProceedCheckout: () => void;
  initialCoupon?: string;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onProceedCheckout,
  initialCoupon = ''
}) => {
  const [couponCode, setCouponCode] = useState(initialCoupon);
  const [appliedCoupon, setAppliedCoupon] = useState(initialCoupon);

  if (!isOpen) return null;

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Discount calculation
  let discount = 0;
  if (appliedCoupon === 'SUNSET30' && subtotal >= 150) {
    discount = Math.round(subtotal * 0.3);
  } else if (appliedCoupon === 'CAKEFEST' && subtotal >= 500) {
    discount = 100;
  } else if (appliedCoupon === 'TIFFIN15' && subtotal >= 199) {
    discount = 50;
  } else if (appliedCoupon === 'FAMILY50' && subtotal >= 350) {
    discount = 90;
  }

  const deliveryFee = subtotal > 200 || subtotal === 0 ? 0 : 35;
  const grandTotal = Math.max(0, subtotal - discount + deliveryFee);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (['SUNSET30', 'CAKEFEST', 'TIFFIN15', 'FAMILY50'].includes(code)) {
      setAppliedCoupon(code);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-6 border-b border-stone-200 flex items-center justify-between bg-[#FFF4DF]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#E63925] text-white flex items-center justify-center shadow">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-black text-[#542D22] font-display">Your Basket</h3>
              <span className="text-xs font-bold text-[#173F35]">
                {totalCount} item{totalCount !== 1 ? 's' : ''} selected
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-stone-200 text-stone-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-[#FFF4DF] flex items-center justify-center mx-auto mb-4 border-2 border-[#FFC928]">
                <ShoppingBag className="w-8 h-8 text-[#542D22]" />
              </div>
              <p className="text-base font-black text-[#542D22]">Your basket is hungry!</p>
              <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                Explore our 32+ authentic snacks, chaats, and 3D celebration cakes.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-3 bg-[#E63925] text-white font-black text-xs rounded-xl shadow-lg font-display uppercase tracking-wider"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#FFF4DF]/40 border border-stone-200 hover:border-[#FFC928] transition-all"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover shrink-0 border border-stone-200"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-black text-[#542D22] truncate">{item.name}</h4>
                  <span className="text-xs font-black text-[#E63925]">
                    ₹{item.price * item.quantity}
                  </span>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="w-6 h-6 rounded-md bg-white border border-stone-300 flex items-center justify-center text-xs font-bold hover:bg-stone-100 shadow-sm"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-black text-[#542D22] w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="w-6 h-6 rounded-md bg-white border border-stone-300 flex items-center justify-center text-xs font-bold hover:bg-stone-100 shadow-sm"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="p-2 text-stone-400 hover:text-red-500 transition-colors"
                  title="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-stone-200 bg-[#FFF4DF]/60 space-y-3.5">
            {/* Coupon Code Input */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Voucher code (e.g. SUNSET30)"
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-xs font-bold text-[#542D22] uppercase placeholder:normal-case outline-none focus:border-[#E63925]"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-[#FFC928] hover:bg-[#ffb700] text-[#542D22] font-black text-xs rounded-xl shadow transition-all"
              >
                Apply
              </button>
            </form>

            <div className="space-y-1.5 pt-1 text-xs font-bold text-stone-600">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-[#E63925]">
                  <span>Voucher Discount ({appliedCoupon})</span>
                  <span>-₹{discount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Delivery Charge</span>
                <span className={deliveryFee === 0 ? 'text-emerald-700 font-extrabold' : ''}>
                  {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-stone-300 flex items-baseline justify-between text-[#542D22]">
              <span className="text-sm font-black font-display">Total Payable</span>
              <span className="text-2xl font-black text-[#E63925]">₹{grandTotal}</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onProceedCheckout();
              }}
              className="w-full py-4 bg-[#E63925] hover:bg-[#c92f1d] text-white font-black text-xs rounded-2xl shadow-xl flex items-center justify-center gap-2 font-display uppercase tracking-wider active:scale-95 transition-all"
            >
              Proceed to Delivery Form
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
