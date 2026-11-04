import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FoodRunwayMaisonVell } from './components/FoodRunwayMaisonVell';
import { FoodMarquee } from './components/FoodMarquee';
import { PopularCategories } from './components/PopularCategories';
import { MenuGallery } from './components/MenuGallery';
import { SpecialOffers } from './components/SpecialOffers';
import { CakeCommercial3D } from './components/CakeCommercial3D';
import { AboutFoodChef } from './components/AboutFoodChef';
import { HowOrderingWorks } from './components/HowOrderingWorks';
import { CustomerOrderForm } from './components/CustomerOrderForm';
import { OrderTracking } from './components/OrderTracking';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { FoodDetailModal } from './components/FoodDetailModal';
import { MENU_ITEMS, FoodItem, RunwayLook } from './data/foodData';
import { CartItem, CustomerOrder } from './types';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  // LocalStorage-backed cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('foodchef_cart');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return [
      {
        id: 9,
        name: 'Samosa (4 pcs)',
        price: 40,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
        category: 'Street Food'
      }
    ];
  });

  const [favorites, setFavorites] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('foodchef_favorites');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return [1, 9, 32];
  });

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [activeDishForModal, setActiveDishForModal] = useState<FoodItem | null>(null);
  const [submittedOrder, setSubmittedOrder] = useState<CustomerOrder | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All Items');
  const [appliedCoupon, setAppliedCoupon] = useState<string>('');

  // Sync to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('foodchef_cart', JSON.stringify(cart));
    } catch {
      // non-blocking
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('foodchef_favorites', JSON.stringify(favorites));
    } catch {
      // non-blocking
    }
  }, [favorites]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3200);
  };

  const handleAddToCart = (
    dish: FoodItem | { id: string | number; name: string; price: number; image: string; category?: string },
    quantity = 1
  ) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => String(i.id) === String(dish.id));
      if (existing) {
        return prevCart.map((i) =>
          String(i.id) === String(dish.id)
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [
        ...prevCart,
        {
          id: dish.id,
          name: dish.name,
          price: dish.price,
          quantity: quantity,
          image: dish.image,
          category: 'category' in dish ? dish.category : 'Signature'
        }
      ];
    });

    showToast(`Added ${quantity > 1 ? `${quantity}x ` : ''}${dish.name} to your basket!`);
  };

  const handleUpdateQuantity = (id: string | number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (String(item.id) === String(id)) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string | number) => {
    setCart((prev) => prev.filter((item) => String(item.id) !== String(id)));
    showToast('Removed item from basket.');
  };

  const handleToggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const isFav = prev.includes(id);
      if (isFav) {
        showToast('Removed from saved items.');
        return prev.filter((favId) => favId !== id);
      } else {
        showToast('Saved to your wishlist!');
        return [...prev, id];
      }
    });
  };

  const handleOrderSubmitted = (order: CustomerOrder) => {
    setSubmittedOrder(order);
    showToast(`Order Confirmed! Tracking #${order.orderId}`);
    setCart([]);
  };

  const handleApplyCoupon = (code: string) => {
    setAppliedCoupon(code);
    setIsCartOpen(true);
    showToast(`Applied voucher ${code} to your basket!`);
  };

  const handleSelectCategory = (cat: string) => {
    setActiveCategoryFilter(cat);
    const menuElem = document.getElementById('menu');
    if (menuElem) menuElem.scrollIntoView({ behavior: 'smooth' });
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // 32nd product: Birthday Celebration Cake
  const celebrationCake = MENU_ITEMS.find((d) => d.id === 32) || MENU_ITEMS[MENU_ITEMS.length - 1];

  return (
    <div className="min-h-screen bg-[#FFF4DF] text-[#542D22] selection:bg-[#E63925] selection:text-white flex flex-col font-body">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center gap-2.5 px-5 py-3.5 rounded-2xl bg-white border-2 border-[#E63925] text-[#542D22] shadow-2xl text-xs font-black tracking-wide">
            <CheckCircle2 className="w-5 h-5 text-[#E63925] shrink-0" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* 3. Global Navigation (Saffron Yellow Header, Tomato Red & Coffee Brown Logo, Order Now) */}
      <Navbar
        cartCount={totalCartCount}
        favoritesCount={favorites.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenFavorites={() => {
          const menuElem = document.getElementById('menu');
          if (menuElem) menuElem.scrollIntoView({ behavior: 'smooth' });
          showToast(`Showing your saved collection (${favorites.length} items)`);
        }}
      />

      <main className="flex-1">
        {/* 4. Hero Section — Cinematic Food Commercial */}
        <HeroSection
          onExploreMenu={() => {
            const menuElem = document.getElementById('menu');
            if (menuElem) menuElem.scrollIntoView({ behavior: 'smooth' });
          }}
          onOrderNow={() => {
            const orderElem = document.getElementById('orderForm');
            if (orderElem) orderElem.scrollIntoView({ behavior: 'smooth' });
          }}
          onSelectDish={(dish) => setActiveDishForModal(dish)}
          featuredDishes={MENU_ITEMS}
        />

        {/* 5. Infinite Food Runway — Maison Vell Style (Major Feature) */}
        <FoodRunwayMaisonVell
          onAddToCart={(dish) => handleAddToCart(dish)}
        />

        {/* 6. Animated Food Marquee (Dual-row moving food photography) */}
        <FoodMarquee onSelectDish={(dish) => setActiveDishForModal(dish)} />

        {/* 7. Popular Food Categories (8 Photographic Category Cards) */}
        <PopularCategories onSelectCategory={handleSelectCategory} />

        {/* 8. Complete Food Menu (32+ Products, Vegetarian indicators, Add to Cart in Forest Green) */}
        <MenuGallery
          onSelectDish={(dish) => setActiveDishForModal(dish)}
          onAddToCart={handleAddToCart}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          activeCategoryFilter={activeCategoryFilter}
        />

        {/* 10. Special Offers (Tomato Red Cards with Saffron Highlights) */}
        <SpecialOffers
          onApplyCoupon={handleApplyCoupon}
          onAddToCart={handleAddToCart}
        />

        {/* 9. Cinematic 3D Birthday Cake Commercial (Three.js WebGL & 4K Video Switcher, NO ANIMALS) */}
        <CakeCommercial3D
          cakeItem={celebrationCake}
          onAddToCart={(dish) => handleAddToCart(dish)}
        />

        {/* 11. About FOOD CHEF (Two-column, exact prompt description) */}
        <AboutFoodChef />

        {/* 12. How Ordering Works (4 Animated Steps) */}
        <HowOrderingWorks />

        {/* 13. Customer Order Form — Tamil Nadu (All 38 Districts, Editable Hotel Field) */}
        <CustomerOrderForm
          cart={cart}
          totalAmount={totalCartAmount}
          onOrderSubmitted={handleOrderSubmitted}
        />

        {/* 15. Order Tracking ("TRACK YOUR FOOD", 5 Stages with Moving Scooter) */}
        <OrderTracking order={submittedOrder} />
      </main>

      {/* 16. Contact and Footer (Forest Green Background with White Text) */}
      <Footer />

      {/* 14. Shopping Cart and Checkout Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedCheckout={() => {
          const formElem = document.getElementById('orderForm');
          if (formElem) formElem.scrollIntoView({ behavior: 'smooth' });
        }}
        initialCoupon={appliedCoupon}
      />

      {/* Food Detail Modal */}
      <FoodDetailModal
        dish={activeDishForModal}
        onClose={() => setActiveDishForModal(null)}
        onAddToCart={(dish, qty) => handleAddToCart(dish, qty)}
        isFavorite={activeDishForModal ? favorites.includes(activeDishForModal.id) : false}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}
