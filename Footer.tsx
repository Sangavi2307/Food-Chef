import React, { useState } from 'react';
import { ChefHat, Phone, Mail, MapPin, Heart, ShieldCheck, Clock, Send, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 4000);
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-[#173F35] text-white pt-16 pb-12 relative overflow-hidden font-body">
      {/* Top Accent Ribbon in Sunset Spice Palette */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FFC928] via-[#E63925] to-[#FFC928]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E63925] flex items-center justify-center text-white shadow-lg border-2 border-white">
                <ChefHat className="w-7 h-7" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-wider text-white font-display">
                  FOOD <span className="text-[#FFC928]">CHEF</span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FFC928] block -mt-1">
                  GOOD FOOD. GREAT MOOD.
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed max-w-sm font-medium">
              Tamil Nadu's premier luxury snack and celebration cake delivery brand. Handcrafted authentic recipes prepared in FSSAI-certified cloud kitchens with zero artificial coloring.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs font-bold text-[#FFC928]">
                <ShieldCheck className="w-4 h-4 text-[#FFC928]" />
                FSSAI Lic. #12423001000845
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs font-bold text-emerald-300">
                <Clock className="w-4 h-4" />
                24x7 Kitchen Service
              </div>
            </div>

            {/* Newsletter Subscription Form */}
            <div className="pt-4 max-w-sm">
              <span className="text-xs font-bold text-[#FFC928] uppercase tracking-wider block mb-2">
                Join the Chef's Secret Club
              </span>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white placeholder-stone-400 outline-none focus:border-[#FFC928]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#FFC928] hover:bg-[#ffb700] text-[#542D22] font-black text-xs rounded-xl shadow transition-all flex items-center gap-1 font-display"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </form>
              {subscribed && (
                <p className="text-[11px] text-emerald-300 font-bold mt-1">Thank you for subscribing!</p>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black text-[#FFC928] tracking-wider uppercase mb-4 font-display">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-bold text-stone-300">
              <li><a href="#" className="hover:text-[#FFC928] transition-colors">Home</a></li>
              <li><a href="#runway" className="hover:text-[#FFC928] transition-colors">Runway Depth</a></li>
              <li><a href="#categories" className="hover:text-[#FFC928] transition-colors">Categories</a></li>
              <li><a href="#menu" className="hover:text-[#FFC928] transition-colors">32+ Dishes Menu</a></li>
              <li><a href="#cake" className="hover:text-[#FFC928] transition-colors">3D Cakes</a></li>
              <li><a href="#about" className="hover:text-[#FFC928] transition-colors">About Us</a></li>
              <li><a href="#tracking" className="hover:text-[#FFC928] transition-colors">Track Order</a></li>
            </ul>
          </div>

          {/* Districts Coverage */}
          <div>
            <h4 className="text-sm font-black text-[#FFC928] tracking-wider uppercase mb-4 font-display">
              TN Coverage
            </h4>
            <ul className="space-y-2.5 text-xs font-bold text-stone-300">
              <li>Chennai Hub (Central)</li>
              <li>Madurai Temple Mess</li>
              <li>Coimbatore Kitchens</li>
              <li>Tiruchirappalli Express</li>
              <li>Salem & Tirunelveli</li>
              <li>+ 33 Other Districts</li>
            </ul>
          </div>

          {/* Contact Hotline */}
          <div>
            <h4 className="text-sm font-black text-[#FFC928] tracking-wider uppercase mb-4 font-display">
              Chef Hotline
            </h4>
            <ul className="space-y-3 text-xs font-bold text-stone-300">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFC928] shrink-0" />
                <a href="tel:18002008989" className="hover:text-[#FFC928]">1800-200-8989 (Toll Free)</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FFC928] shrink-0" />
                <a href="mailto:orders@foodchef.com" className="hover:text-[#FFC928]">orders@foodchef.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E63925] shrink-0 mt-0.5" />
                <span>Anna Salai, T. Nagar, Chennai, Tamil Nadu 600017</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© 2026 FOOD CHEF Inc. All culinary rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart className="w-3.5 h-3.5 text-[#E63925] fill-current" /> for food lovers across Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
};
