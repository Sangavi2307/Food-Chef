import React, { useState, useEffect } from 'react';
import { CustomerOrder } from '../types';
import {
  CheckCircle2,
  Clock,
  Phone,
  Flame,
  Truck,
  PackageCheck,
  ShoppingBag,
  Search,
  AlertCircle
} from 'lucide-react';

interface OrderTrackingProps {
  order: CustomerOrder | null;
}

const TRACKING_STAGES = [
  { step: 1, label: 'Order Confirmed', desc: 'Kitchen acknowledged & dispatched ingredients', icon: CheckCircle2 },
  { step: 2, label: 'Preparing', desc: 'Master Chef frying & assembling hot snacks', icon: Flame },
  { step: 3, label: 'Packed', desc: 'Heat-sealed in eco-friendly steam thermal boxes', icon: PackageCheck },
  { step: 4, label: 'Out for Delivery', desc: 'Express Rider is on the way to your door', icon: Truck },
  { step: 5, label: 'Delivered', desc: 'Enjoy your delicious feast!', icon: ShoppingBag }
];

export const OrderTracking: React.FC<OrderTrackingProps> = ({ order }) => {
  const [currentStage, setCurrentStage] = useState<number>(3);
  const [searchOrderId, setSearchOrderId] = useState<string>('');
  const [activeTrackingId, setActiveTrackingId] = useState<string>(
    order ? order.orderId : 'FC-TN-782419'
  );

  useEffect(() => {
    if (order) {
      setActiveTrackingId(order.orderId);
      setCurrentStage(1);
      const timer1 = setTimeout(() => setCurrentStage(2), 2500);
      const timer2 = setTimeout(() => setCurrentStage(3), 6000);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [order]);

  const handleSearchOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchOrderId.trim()) return;
    setActiveTrackingId(searchOrderId.trim());
    setCurrentStage(Math.floor(Math.random() * 4) + 1);
  };

  const activeDistrict = order ? order.district : 'Chennai';
  const activeHotel = order ? order.hotelName : 'A2B (Adyar Ananda Bhavan) Kitchen Hub';

  const progressPercentage = ((currentStage - 1) / (TRACKING_STAGES.length - 1)) * 100;

  return (
    <section id="tracking" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Exact Prompt Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#173F35]/10 border border-[#173F35] text-[#173F35] text-xs font-black uppercase tracking-wider mb-3">
            <Truck className="w-3.5 h-3.5" />
            Live Kitchen & Rider Stream
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#542D22] font-display">
            TRACK YOUR <span className="text-[#E63925]">FOOD</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#542D22]/80 font-medium max-w-xl mx-auto">
            Watch your food travel from the hot pan right to your doorstep with animated status indicators.
          </p>

          {/* Search Order ID Input */}
          <form onSubmit={handleSearchOrder} className="mt-8 max-w-md mx-auto flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchOrderId}
                onChange={(e) => setSearchOrderId(e.target.value)}
                placeholder="Enter Your Order ID (e.g. FC-TN-782419)"
                className="w-full px-4 py-3 rounded-2xl border-2 border-stone-200 text-xs font-bold text-[#542D22] outline-none focus:border-[#E63925] bg-[#FFF4DF]/30"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-[#E63925] hover:bg-[#c92f1d] text-white font-black text-xs rounded-2xl shadow-md transition-all active:scale-95 flex items-center gap-1.5 font-display"
            >
              <Search className="w-3.5 h-3.5" />
              TRACK
            </button>
          </form>
        </div>

        {/* Tracking Card */}
        <div className="bg-[#FFF4DF] rounded-3xl p-6 sm:p-10 border-2 border-[#FFC928]/40 shadow-xl">
          {/* Order Header Meta */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#FFC928]/40">
            <div>
              <span className="text-[11px] font-black text-stone-500 uppercase tracking-wider block">
                Active Tracking Order
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#542D22] font-display">
                #{activeTrackingId}
              </h3>
              <p className="text-xs font-bold text-[#173F35] mt-1">
                Kitchen: <span className="font-extrabold">{activeHotel}</span> ({activeDistrict} District)
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-[#FFC928] shadow-sm">
              <Clock className="w-5 h-5 text-[#E63925] animate-pulse" />
              <div>
                <span className="text-[10px] font-black text-stone-400 block uppercase">Estimated Arrival</span>
                <span className="text-sm font-black text-[#542D22]">25 - 35 Minutes</span>
              </div>
            </div>
          </div>

          {/* Animated Road Track & Scooter */}
          <div className="my-10 relative">
            {/* Road Base */}
            <div className="h-3 w-full bg-stone-200 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-[#FFC928] via-[#E63925] to-[#173F35] transition-all duration-700 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            {/* Moving Scooter along progress line */}
            <div
              className="absolute -top-4 -translate-x-1/2 transition-all duration-700 flex flex-col items-center"
              style={{ left: `${Math.max(4, Math.min(96, progressPercentage))}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-[#E63925] text-white flex items-center justify-center shadow-lg border-2 border-white animate-bounce">
                <Truck className="w-5 h-5" />
              </div>
            </div>

            {/* 5 Stages Markers */}
            <div className="grid grid-cols-5 gap-2 mt-8 text-center">
              {TRACKING_STAGES.map((st) => {
                const Icon = st.icon;
                const isPassed = currentStage >= st.step;
                const isCurrent = currentStage === st.step;

                return (
                  <div key={st.step} className="flex flex-col items-center">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-black transition-all mb-2 ${
                        isCurrent
                          ? 'bg-[#E63925] text-white ring-4 ring-[#E63925]/30 scale-110 shadow-md'
                          : isPassed
                          ? 'bg-[#173F35] text-white'
                          : 'bg-stone-200 text-stone-500'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-xs font-black block leading-tight ${
                        isCurrent ? 'text-[#E63925]' : isPassed ? 'text-[#542D22]' : 'text-stone-400'
                      }`}
                    >
                      {st.label}
                    </span>
                    <span className="text-[10px] text-stone-500 font-medium hidden md:block mt-1 max-w-[120px]">
                      {st.desc}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Prompt Required Notice: DEMO TRACKING */}
          <div className="mt-8 p-3 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-2 text-xs font-bold text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>DEMO TRACKING — LIVE GPS AND REAL DELIVERY UPDATES REQUIRE A BACKEND.</span>
          </div>

          {/* Interactive Simulation Controls */}
          <div className="mt-6 pt-6 border-t border-[#FFC928]/40 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold text-[#542D22]">Simulate Stage:</span>
              {[1, 2, 3, 4, 5].map((s) => (
                <button
                  key={s}
                  onClick={() => setCurrentStage(s)}
                  className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${
                    currentStage === s
                      ? 'bg-[#E63925] text-white shadow'
                      : 'bg-white text-[#542D22] border border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  Step {s}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-[11px] text-stone-500 block font-semibold">Delivery Partner</span>
                <span className="text-xs font-black text-[#542D22]">M. Karthik (+91 97890 12345)</span>
              </div>
              <a
                href="tel:9789012345"
                className="p-2.5 rounded-full bg-[#173F35] text-white hover:bg-[#123129] shadow transition-all"
                title="Call Rider"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
