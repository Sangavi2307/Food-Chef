import React from 'react';
import { SPECIAL_OFFERS, SpecialOffer } from '../data/foodData';
import { Sparkles, ShoppingBag, Tag, ArrowRight } from 'lucide-react';

interface SpecialOffersProps {
  onApplyCoupon: (code: string) => void;
  onAddToCart: (dish: { id: string | number; name: string; price: number; image: string; category?: string }) => void;
}

export const SpecialOffers: React.FC<SpecialOffersProps> = ({ onApplyCoupon, onAddToCart }) => {
  return (
    <section id="offers" className="py-24 bg-gradient-to-br from-[#E63925] via-[#d62815] to-[#542D22] text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC928]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FFC928]" />
            Limited Chef Combos
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display">
            SPECIAL <span className="text-[#FFC928]">OFFERS</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/90 font-medium">
            Savor curated multi-dish platters with instant voucher savings and complimentary chutney pairings.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIAL_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-3xl p-5 text-[#542D22] shadow-2xl border-4 border-[#FFC928] flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300"
            >
              <div>
                {/* Offer Image */}
                <div className="relative h-44 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#E63925] text-white text-[10px] font-black uppercase tracking-wider shadow">
                    {offer.badge}
                  </span>
                  <span className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-[#FFC928] text-[#542D22] text-xs font-black shadow">
                    {offer.discountText}
                  </span>
                </div>

                <h3 className="text-lg font-black font-display leading-tight">{offer.title}</h3>
                <p className="mt-1 text-xs text-stone-600 line-clamp-2 leading-relaxed font-medium">
                  {offer.subtitle}
                </p>

                {/* Items Included */}
                <div className="mt-3 space-y-1">
                  {offer.itemsIncluded.map((it, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] font-bold text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E63925]" />
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Action */}
              <div className="mt-6 pt-4 border-t border-stone-200">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-black text-[#E63925]">₹{offer.offerPrice}</span>
                  <span className="text-xs text-stone-400 line-through font-bold">₹{offer.originalPrice}</span>
                  <span className="ml-auto text-[10px] text-stone-500 font-bold">Min ₹{offer.minOrder}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onApplyCoupon(offer.code)}
                    className="py-2.5 bg-[#FFF4DF] hover:bg-[#FFE5B4] text-[#542D22] border border-[#FFC928] font-black text-xs rounded-xl flex items-center justify-center gap-1 transition-all"
                  >
                    <Tag className="w-3.5 h-3.5 text-[#E63925]" />
                    {offer.code}
                  </button>
                  <button
                    onClick={() =>
                      onAddToCart({
                        id: offer.id,
                        name: offer.title,
                        price: offer.offerPrice,
                        image: offer.image,
                        category: 'Special Combos'
                      })
                    }
                    className="py-2.5 bg-[#E63925] hover:bg-[#c92f1d] text-white font-black text-xs rounded-xl shadow transition-all active:scale-95 flex items-center justify-center gap-1 font-display"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
