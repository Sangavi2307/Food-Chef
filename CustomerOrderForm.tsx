import React, { useState } from 'react';
import { CartItem, CustomerOrder } from '../types';
import { TN_DISTRICTS, DISTRICT_POPULAR_HOTELS } from '../data/foodData';
import confetti from 'canvas-confetti';
import {
  MapPin,
  Calendar,
  Clock,
  User,
  Building,
  CreditCard,
  Send,
  AlertCircle,
  Sparkles,
  ShoppingBag,
  Search
} from 'lucide-react';

interface CustomerOrderFormProps {
  cart: CartItem[];
  totalAmount: number;
  onOrderSubmitted: (order: CustomerOrder) => void;
}

export const CustomerOrderForm: React.FC<CustomerOrderFormProps> = ({
  cart,
  totalAmount,
  onOrderSubmitted
}) => {
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('Chennai');
  const [districtSearch, setDistrictSearch] = useState('');
  const [isDistrictDropdownOpen, setIsDistrictDropdownOpen] = useState(false);
  const [area, setArea] = useState('');
  const [doorNumber, setDoorNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [hotelName, setHotelName] = useState('');
  const [deliveryDate, setDeliveryDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [deliveryTime, setDeliveryTime] = useState('Immediate (30-45 mins)');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Card' | 'COD'>('UPI');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const filteredDistricts = TN_DISTRICTS.filter((d) =>
    d.toLowerCase().includes(districtSearch.toLowerCase())
  );

  const suggestedHotels = DISTRICT_POPULAR_HOTELS[selectedDistrict] || [
    'A2B (Adyar Ananda Bhavan)',
    'Hotel Saravana Bhavan',
    'Grand Madurai Mess',
    'Salem RR Biryani Hotel'
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!customerName.trim()) errs.customerName = 'Please enter your full name';
    if (!mobileNumber.trim()) {
      errs.mobileNumber = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(mobileNumber.trim())) {
      errs.mobileNumber = 'Enter a valid 10-digit Indian phone number';
    }
    if (!deliveryAddress.trim()) errs.deliveryAddress = 'Full street address is required';
    if (!pincode.trim()) {
      errs.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(pincode.trim())) {
      errs.pincode = 'Enter a valid 6-digit Tamil Nadu PIN code';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#E63925', '#FFC928', '#173F35', '#542D22']
      });
    } catch {
      // non-blocking
    }

    const orderId = `FC-TN-${Math.floor(100000 + Math.random() * 900000)}`;

    const newOrder: CustomerOrder = {
      orderId,
      customerName,
      mobileNumber,
      email,
      district: selectedDistrict,
      area: area || selectedDistrict,
      deliveryAddress,
      doorNumber,
      pincode,
      hotelName: hotelName || suggestedHotels[0],
      deliveryDate,
      deliveryTime,
      specialInstructions,
      items:
        cart.length > 0
          ? [...cart]
          : [
              {
                id: 99,
                name: 'Express Snack Feast Platter',
                price: 250,
                quantity: 1,
                image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
                category: 'Street Food'
              }
            ],
      totalAmount: totalAmount > 0 ? totalAmount : 250,
      paymentMethod,
      orderTimestamp: new Date()
    };

    onOrderSubmitted(newOrder);

    // Scroll to order tracking
    const trackingElem = document.getElementById('tracking');
    if (trackingElem) {
      trackingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="orderForm" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E63925]/15 border border-[#E63925] text-[#E63925] text-xs font-black uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Tamil Nadu Wide Order & Delivery Form
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#542D22] font-display">
            CUSTOMER <span className="text-[#E63925]">ORDER FORM</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#542D22]/80 font-medium">
            Serving all 38 districts of Tamil Nadu. Specify your local kitchen preference or enter your neighborhood hotel name.
          </p>
        </div>

        {/* Order Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#FFF4DF] rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-[#FFC928]/40 space-y-8"
        >
          {/* 1. Customer Information */}
          <div>
            <h3 className="text-lg font-black text-[#542D22] flex items-center gap-2 mb-4 font-display">
              <User className="w-5 h-5 text-[#E63925]" />
              1. Customer Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#542D22] mb-1.5">Full Name *</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Ananya Raman"
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold outline-none bg-white transition-all ${
                    errors.customerName ? 'border-red-500 bg-red-50' : 'border-stone-200 focus:border-[#E63925]'
                  }`}
                />
                {errors.customerName && <p className="mt-1 text-xs text-red-600 font-bold">{errors.customerName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#542D22] mb-1.5">Mobile Number *</label>
                <div className="relative">
                  <span className="absolute left-3.5 top-3 text-xs font-bold text-stone-500">+91</span>
                  <input
                    type="tel"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="9876543210"
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border text-sm font-semibold outline-none bg-white transition-all ${
                      errors.mobileNumber ? 'border-red-500 bg-red-50' : 'border-stone-200 focus:border-[#E63925]'
                    }`}
                  />
                </div>
                {errors.mobileNumber && <p className="mt-1 text-xs text-red-600 font-bold">{errors.mobileNumber}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#542D22] mb-1.5">Email Address (Optional)</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ananya@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-sm font-semibold outline-none focus:border-[#E63925]"
                />
              </div>
            </div>
          </div>

          {/* 2. Tamil Nadu District (All 38 Districts Searchable) & Hotel Selection */}
          <div>
            <h3 className="text-lg font-black text-[#542D22] flex items-center gap-2 mb-4 font-display">
              <Building className="w-5 h-5 text-[#FFC928]" />
              2. Tamil Nadu District & Preferred Restaurant / Hotel
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Searchable 38 Districts */}
              <div className="relative">
                <label className="block text-xs font-bold text-[#542D22] mb-1.5">
                  Tamil Nadu District (All 38 Districts) *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={selectedDistrict}
                    onFocus={() => setIsDistrictDropdownOpen(true)}
                    onChange={(e) => {
                      setSelectedDistrict(e.target.value);
                      setDistrictSearch(e.target.value);
                      setIsDistrictDropdownOpen(true);
                    }}
                    placeholder="Search district..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-sm font-bold text-[#542D22] outline-none focus:border-[#E63925]"
                  />
                  <Search className="w-4 h-4 text-stone-400 absolute right-3.5 top-3.5 pointer-events-none" />
                </div>

                {isDistrictDropdownOpen && (
                  <div className="absolute left-0 right-0 top-full mt-1 max-h-48 overflow-y-auto bg-white rounded-xl shadow-xl border border-stone-200 z-30">
                    {filteredDistricts.length === 0 ? (
                      <div className="p-3 text-xs text-stone-400">No district matched</div>
                    ) : (
                      filteredDistricts.map((dist) => (
                        <div
                          key={dist}
                          onClick={() => {
                            setSelectedDistrict(dist);
                            setIsDistrictDropdownOpen(false);
                          }}
                          className={`px-4 py-2 text-xs font-bold cursor-pointer hover:bg-[#FFF4DF] ${
                            selectedDistrict === dist ? 'text-[#E63925] bg-[#FFF4DF]/50' : 'text-[#542D22]'
                          }`}
                        >
                          {dist} District
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>

              {/* Editable Restaurant / Hotel Name */}
              <div>
                <label className="block text-xs font-bold text-[#542D22] mb-1.5">
                  Preferred Hotel / Food Chef Kitchen Hub
                </label>
                <input
                  type="text"
                  value={hotelName}
                  onChange={(e) => setHotelName(e.target.value)}
                  placeholder={`e.g. ${suggestedHotels[0]}`}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-sm font-semibold outline-none focus:border-[#E63925]"
                />
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  <span className="text-[10px] text-stone-500 font-bold uppercase">Suggestions:</span>
                  {suggestedHotels.slice(0, 3).map((h) => (
                    <button
                      key={h}
                      type="button"
                      onClick={() => setHotelName(h)}
                      className="text-[11px] bg-white border border-[#FFC928] text-[#542D22] px-2 py-0.5 rounded-md font-bold hover:bg-[#FFC928]/20 transition-colors"
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Address & Locality */}
          <div>
            <h3 className="text-lg font-black text-[#542D22] flex items-center gap-2 mb-4 font-display">
              <MapPin className="w-5 h-5 text-[#E63925]" />
              3. Delivery Address
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold text-[#542D22] mb-1.5">Door / Flat No.</label>
                <input
                  type="text"
                  value={doorNumber}
                  onChange={(e) => setDoorNumber(e.target.value)}
                  placeholder="e.g. 14/B, 2nd Floor"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-sm font-semibold outline-none focus:border-[#E63925]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-[#542D22] mb-1.5">Area / Locality / Street</label>
                <input
                  type="text"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="e.g. T. Nagar, Gandhipuram, Anna Nagar"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-sm font-semibold outline-none focus:border-[#E63925]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-[#542D22] mb-1.5">Full Delivery Address *</label>
                <input
                  type="text"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  placeholder="Landmark, cross street, apartment name"
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold outline-none bg-white ${
                    errors.deliveryAddress ? 'border-red-500 bg-red-50' : 'border-stone-200 focus:border-[#E63925]'
                  }`}
                />
                {errors.deliveryAddress && <p className="mt-1 text-xs text-red-600 font-bold">{errors.deliveryAddress}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold text-[#542D22] mb-1.5">PIN Code *</label>
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="600017"
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold outline-none bg-white ${
                    errors.pincode ? 'border-red-500 bg-red-50' : 'border-stone-200 focus:border-[#E63925]'
                  }`}
                />
                {errors.pincode && <p className="mt-1 text-xs text-red-600 font-bold">{errors.pincode}</p>}
              </div>
            </div>
          </div>

          {/* 4. Slot & Instructions */}
          <div>
            <h3 className="text-lg font-black text-[#542D22] flex items-center gap-2 mb-4 font-display">
              <Clock className="w-5 h-5 text-[#173F35]" />
              4. Delivery Slot, Payment & Instructions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold text-[#542D22] mb-1.5">Date</label>
                <input
                  type="date"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-sm font-semibold outline-none focus:border-[#E63925]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#542D22] mb-1.5">Delivery Slot</label>
                <select
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-sm font-bold text-[#542D22] outline-none focus:border-[#E63925]"
                >
                  <option>Immediate (30-45 mins)</option>
                  <option>Evening Snack (4:30 PM - 5:30 PM)</option>
                  <option>Dinner (7:30 PM - 9:00 PM)</option>
                  <option>Midnight Craving (10:00 PM - 11:30 PM)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#542D22] mb-1.5">Payment Method</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value as any)}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-sm font-bold text-[#542D22] outline-none focus:border-[#E63925]"
                >
                  <option value="UPI">Google Pay / PhonePe / UPI</option>
                  <option value="Card">Credit / Debit Card</option>
                  <option value="COD">Cash on Delivery (COD)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#542D22] mb-1.5">Special Instructions</label>
              <input
                type="text"
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                placeholder="e.g. Extra coconut chutney, ring doorbell, less spicy"
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-sm font-semibold outline-none focus:border-[#E63925]"
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="pt-4 border-t border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-stone-500 font-bold block">Total Amount Payable</span>
              <span className="text-3xl font-black text-[#E63925]">
                ₹{totalAmount > 0 ? totalAmount : 250}
              </span>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-4 bg-[#E63925] hover:bg-[#c92f1d] text-white font-black text-sm rounded-2xl shadow-xl shadow-[#E63925]/30 hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-3 font-display uppercase tracking-wider"
            >
              <Send className="w-4 h-4" />
              CONFIRM & ORDER NOW
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
