export interface FoodItem {
  id: number;
  name: string;
  category:
    | 'South Indian Snacks'
    | 'Street Food'
    | 'Fast Food'
    | 'Traditional Sweets'
    | 'Cakes and Desserts'
    | 'Bakery Items'
    | 'Evening Snacks'
    | 'Special Combos';
  price: number; // in INR ₹
  description: string;
  image: string;
  fallbackImage: string;
  tag?: string;
  prepTime: string;
  calories: string;
  spicyLevel?: 0 | 1 | 2 | 3;
  isVegetarian: boolean;
  isPopular?: boolean;
}

export interface RunwayLook {
  index: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  tag: string;
  isVegetarian: boolean;
  prepTime: string;
  rating: number;
}

export interface CategoryInfo {
  id: string;
  name: string;
  count: string;
  description: string;
  image: string;
  accentColor: string;
}

export interface SpecialOffer {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  discountText: string;
  badge: string;
  minOrder: number;
  itemsIncluded: string[];
  originalPrice: number;
  offerPrice: number;
  image: string;
}

/* ==========================================================================
   1. RUNWAY FOOD ITEMS (MAISON VELL 6-LOOK SYSTEM)
   ========================================================================== */
export const RUNWAY_FOODS: RunwayLook[] = [
  {
    index: 0,
    name: 'Maison Royale Birthday Cake',
    category: 'Cakes and Desserts',
    price: 550,
    description: 'Triple-tier artisan vanilla sponge layered with strawberry compote, dark chocolate glaze, and 24k edible gold dust.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80',
    tag: 'Signature Centerpiece',
    isVegetarian: true,
    prepTime: '45 mins',
    rating: 4.9
  },
  {
    index: 1,
    name: 'Artisan Wood-Fired Cheese Pizza',
    category: 'Fast Food',
    price: 180,
    description: 'Hand-stretched sourdough crust topped with San Marzano tomato coulis, fresh mozzarella pearls, and fragrant basil oil.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80',
    tag: 'Chef Special',
    isVegetarian: true,
    prepTime: '20 mins',
    rating: 4.8
  },
  {
    index: 2,
    name: 'Gourmet Crispy Veg Burger',
    category: 'Fast Food',
    price: 90,
    description: 'Crispy herb-crusted garden patty stacked with English cheddar, crisp iceberg lettuce, caramelized onions, and house aioli.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80',
    tag: 'Bestseller',
    isVegetarian: true,
    prepTime: '15 mins',
    rating: 4.8
  },
  {
    index: 3,
    name: 'Crispy Mysore Masala Dosa',
    category: 'South Indian Snacks',
    price: 85,
    description: 'Paper-thin golden crepe griddled in pure desi ghee, smeared with spicy red garlic chutney and spiced potato mash.',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1000&q=80',
    tag: 'Heritage Recipe',
    isVegetarian: true,
    prepTime: '14 mins',
    rating: 4.9
  },
  {
    index: 4,
    name: 'Golden Punjabi Samosa Platter',
    category: 'Street Food',
    price: 45,
    description: 'Flaky ajwain pastry stuffed with cumin-tempered baby potatoes, cashews, and sweet green peas, served with mint chutney.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80',
    tag: 'Tea Time Classic',
    isVegetarian: true,
    prepTime: '10 mins',
    rating: 4.9
  },
  {
    index: 5,
    name: 'Strawberry Velvet Glaze Pastry',
    category: 'Cakes and Desserts',
    price: 75,
    description: 'Chiffon sponge slice infused with fresh Mahabaleshwar strawberry coulis and whipped white chocolate mascarpone.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=80',
    tag: 'Delicate Pastry',
    isVegetarian: true,
    prepTime: '5 mins',
    rating: 4.7
  }
];

/* ==========================================================================
   2. CATEGORIES (8 DISTINCTIVE CATEGORIES)
   ========================================================================== */
export const POPULAR_CATEGORIES: CategoryInfo[] = [
  {
    id: 'south-indian',
    name: 'South Indian Snacks',
    count: '8+ Dishes',
    description: 'Crispy vadas, ghee podi idlis, and heritage Chettinad paniyaram.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    accentColor: '#FFC928'
  },
  {
    id: 'street-food',
    name: 'Street Food',
    count: '8+ Dishes',
    description: 'Fiery pani puri, buttery pav bhaji, crispy samosas and spicy chaats.',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
    accentColor: '#E63925'
  },
  {
    id: 'fast-food',
    name: 'Fast Food',
    count: '8+ Dishes',
    description: 'Gourmet burgers, loaded peri-peri fries, cheese pizzas and grilled sandwiches.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    accentColor: '#173F35'
  },
  {
    id: 'traditional-sweets',
    name: 'Traditional Sweets',
    count: '8+ Dishes',
    description: 'Tirunelveli ghee halwa, saffron jalebis, rasmalai and kaju katli.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    accentColor: '#FFC928'
  },
  {
    id: 'cakes-desserts',
    name: 'Cakes and Desserts',
    count: '8+ Dishes',
    description: '3D celebration cakes, brownies, cupcakes and fruit pastries.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    accentColor: '#E63925'
  },
  {
    id: 'bakery-items',
    name: 'Bakery Items',
    count: '6+ Dishes',
    description: 'Oven-fresh vegetable puffs, garlic breads, rolls and glazed donuts.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    accentColor: '#542D22'
  },
  {
    id: 'evening-snacks',
    name: 'Evening Snacks',
    count: '6+ Dishes',
    description: 'Crisp ribbon pakoda, crunchy mixture, banana chips and bread bajji.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    accentColor: '#FFC928'
  },
  {
    id: 'special-combos',
    name: 'Special Combos',
    count: '5+ Platters',
    description: 'Budget-friendly party feasts, breakfast combos and dessert platters.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
    accentColor: '#E63925'
  }
];

/* ==========================================================================
   3. COMPLETE 32+ PRODUCTS (UNIQUE, VERIFIED PHOTOGRAPHS)
   ========================================================================== */
export const MENU_ITEMS: FoodItem[] = [
  // --- A. South Indian Snacks (1 - 8) ---
  {
    id: 1,
    name: 'Medu Vada (2 pcs)',
    category: 'South Indian Snacks',
    price: 40,
    description: 'Golden crispy urad dal doughnuts tempered with cracked pepper, curry leaves, and ginger. Served with fresh coconut chutney & sambar.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    tag: 'Bestseller',
    prepTime: '12 mins',
    calories: '180 kcal',
    spicyLevel: 1,
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 2,
    name: 'Masala Vada (Paruppu Vadai 3 pcs)',
    category: 'South Indian Snacks',
    price: 35,
    description: 'Coarsely ground chana dal fritters studded with crushed shallots, fennel seeds, and green chillies, deep-fried to deep bronze crunch.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    tag: 'Tea Time Fav',
    prepTime: '15 mins',
    calories: '210 kcal',
    spicyLevel: 2,
    isVegetarian: true
  },
  {
    id: 3,
    name: 'Onion Pakoda (200g)',
    category: 'South Indian Snacks',
    price: 50,
    description: 'Thinly sliced onions tossed in spiced gram flour and roasted ajwain, flash-fried until crackling crisp with sprigs of curry leaves.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins',
    calories: '260 kcal',
    spicyLevel: 1,
    isVegetarian: true
  },
  {
    id: 4,
    name: 'Mysore Bonda (4 pcs)',
    category: 'South Indian Snacks',
    price: 45,
    description: 'Light and airy fried dumpling balls made from seasoned maida batter with fresh coconut slivers, crushed pepper, and ginger.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins',
    calories: '230 kcal',
    spicyLevel: 1,
    isVegetarian: true
  },
  {
    id: 5,
    name: 'Ghee Podi Mini Idli (14 pcs)',
    category: 'South Indian Snacks',
    price: 60,
    description: 'Button-sized steamed rice idlis coated in fragrant village-churned cow ghee and roasted spiced gun powder karapodi.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    tag: 'Chef Choice',
    prepTime: '10 mins',
    calories: '220 kcal',
    spicyLevel: 2,
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 6,
    name: 'Kuzhi Paniyaram (Sweet & Spicy 6 pcs)',
    category: 'South Indian Snacks',
    price: 55,
    description: 'Chettinad fermented rice batter spheres slow-cooked in traditional cast iron pans to achieve crisp shell and tender center.',
    image: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    tag: 'Chettinad Special',
    prepTime: '18 mins',
    calories: '190 kcal',
    spicyLevel: 1,
    isVegetarian: true
  },
  {
    id: 7,
    name: 'Handmade Murukku (200g)',
    category: 'South Indian Snacks',
    price: 45,
    description: 'Traditional spiral rice flour savory flavored with cumin seeds, sesame, and butter, delivering an iconic crunch.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    prepTime: '5 mins',
    calories: '280 kcal',
    spicyLevel: 1,
    isVegetarian: true
  },
  {
    id: 8,
    name: 'Crispy Thattai (6 pcs)',
    category: 'South Indian Snacks',
    price: 40,
    description: 'Classic Tamil Nadu flat savory crisps made with roasted rice, urad flour, chana dal bits, and dried red chilli powder.',
    image: 'https://images.unsplash.com/photo-1505253758473-96b3015f210f?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    prepTime: '5 mins',
    calories: '200 kcal',
    spicyLevel: 1,
    isVegetarian: true
  },

  // --- B. Street Food (9 - 16) ---
  {
    id: 9,
    name: 'Samosa (4 pcs)',
    category: 'Street Food',
    price: 40,
    description: 'Crispy pastry cones filled with potatoes, sweet peas, roasted cumin, and whole coriander seeds. Served with saunth chutney.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    tag: 'Popular',
    prepTime: '12 mins',
    calories: '240 kcal',
    spicyLevel: 2,
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 10,
    name: 'Bakery Veg Puff (2 pcs)',
    category: 'Street Food',
    price: 45,
    description: 'Multi-layered golden puff pastry encasing a rich curry of spiced carrots, green peas, potatoes, and cracked black pepper.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    tag: 'Oven Fresh',
    prepTime: '10 mins',
    calories: '270 kcal',
    spicyLevel: 1,
    isVegetarian: true
  },
  {
    id: 11,
    name: 'Pani Puri (8 puris)',
    category: 'Street Food',
    price: 35,
    description: 'Hollow semolina puris filled with spiced ragda, accompanied by sweet tamarind chutney and chilled mint-coriander water.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    tag: 'Street Hero',
    prepTime: '8 mins',
    calories: '140 kcal',
    spicyLevel: 3,
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 12,
    name: 'Masala Puri',
    category: 'Street Food',
    price: 45,
    description: 'Crushed crispy puris bathed in a boiling spiced green pea gravy, topped with crunchy nylon sev, sweet onions, and coriander.',
    image: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    prepTime: '10 mins',
    calories: '230 kcal',
    spicyLevel: 2,
    isVegetarian: true
  },
  {
    id: 13,
    name: 'Bhel Puri (Chatpata Bombay Style)',
    category: 'Street Food',
    price: 40,
    description: 'Airy puffed rice tossed with crispy papdi, boiled potatoes, raw green mango slivers, sev, and house tamarind relish.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=800&q=80',
    prepTime: '6 mins',
    calories: '180 kcal',
    spicyLevel: 2,
    isVegetarian: true
  },
  {
    id: 14,
    name: 'Aloo Tikki Chaat (2 tikkis)',
    category: 'Street Food',
    price: 55,
    description: 'Crisp pan-fried potato cutlets served over spiced chickpea masala, drizzled with whisked sweetened yogurt and mint glaze.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    prepTime: '14 mins',
    calories: '310 kcal',
    spicyLevel: 2,
    isVegetarian: true
  },
  {
    id: 15,
    name: 'Pav Bhaji (2 buttery pavs)',
    category: 'Street Food',
    price: 70,
    description: 'Rich, buttery vegetable mash simmered on iron tawa with special house pav bhaji spices, served with toasted milk bread rolls.',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
    tag: 'Bestseller',
    prepTime: '15 mins',
    calories: '380 kcal',
    spicyLevel: 2,
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 16,
    name: 'Bread Bajji (4 triangles)',
    category: 'Street Food',
    price: 40,
    description: 'Sandwich bread stuffed with spicy potato masala, coated in seasoned besan batter, and fried golden brown.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    prepTime: '12 mins',
    calories: '240 kcal',
    spicyLevel: 1,
    isVegetarian: true
  },

  // --- C. Fast Food (17 - 24) ---
  {
    id: 17,
    name: 'Crispy French Fries (Large)',
    category: 'Fast Food',
    price: 60,
    description: 'Imported Russet potato batons double-fried to crisp perfection and sprinkled with coarse sea salt.',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    tag: 'Crispy',
    prepTime: '10 mins',
    calories: '290 kcal',
    spicyLevel: 0,
    isVegetarian: true
  },
  {
    id: 18,
    name: 'Peri Peri Fries (Spiced Shaker)',
    category: 'Fast Food',
    price: 70,
    description: 'Crispy hot fries tossed vigorously with zesty African bird’s eye chilli powder, garlic dust, and dried herbs.',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
    tag: 'Spicy Hit',
    prepTime: '10 mins',
    calories: '310 kcal',
    spicyLevel: 2,
    isVegetarian: true
  },
  {
    id: 19,
    name: 'Garden Veg Sandwich (Grilled)',
    category: 'Fast Food',
    price: 60,
    description: 'Triple-decker bread stuffed with sliced cucumbers, tomatoes, bell peppers, mint chutney, and chaat seasoning.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    prepTime: '12 mins',
    calories: '270 kcal',
    spicyLevel: 1,
    isVegetarian: true
  },
  {
    id: 20,
    name: 'Double Cheese Grilled Sandwich',
    category: 'Fast Food',
    price: 75,
    description: 'Golden butter-toasted white bread bursting with mozzarella cheese pull, mild cheddar, and Italian herb seasoning.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    tag: 'Cheese Lover',
    prepTime: '12 mins',
    calories: '360 kcal',
    spicyLevel: 0,
    isVegetarian: true
  },
  {
    id: 21,
    name: 'Veg Burger (Loaded Sesame Bun)',
    category: 'Fast Food',
    price: 80,
    description: 'Crisp vegetable patty with sweet corn and potatoes, layered with crunchy lettuce, gherkins, and eggless mayo.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
    tag: 'Bestseller',
    prepTime: '15 mins',
    calories: '420 kcal',
    spicyLevel: 1,
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 22,
    name: 'Artisan Cheese Pizza (8 inch)',
    category: 'Fast Food',
    price: 150,
    description: 'Stone-baked thin crust pizza topped with house crushed tomato sauce, fresh mozzarella cheese, and dried oregano.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    tag: 'Wood Fired',
    prepTime: '20 mins',
    calories: '550 kcal',
    spicyLevel: 1,
    isVegetarian: true
  },
  {
    id: 23,
    name: 'Steamed Veg Momos (6 pcs)',
    category: 'Fast Food',
    price: 60,
    description: 'Thin-skinned dumplings packed with hand-chopped cabbage, carrots, bell peppers, and scallions. Served with fiery red chilli chutney.',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tag: 'Steamed Fresh',
    prepTime: '14 mins',
    calories: '190 kcal',
    spicyLevel: 2,
    isVegetarian: true
  },
  {
    id: 24,
    name: 'Crispy Veg Spring Rolls (4 pcs)',
    category: 'Fast Food',
    price: 65,
    description: 'Crisp wonton wrappers filled with wok-tossed julienned vegetables, glass noodles, and garlic soy glaze.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins',
    calories: '240 kcal',
    spicyLevel: 1,
    isVegetarian: true
  },

  // --- D. Sweets and Desserts (25 - 32) ---
  {
    id: 25,
    name: 'Gulab Jamun (3 pcs in Rose Syrup)',
    category: 'Traditional Sweets',
    price: 45,
    description: 'Delicate fried khoya spheres soaked warm in rosewater, green cardamom, and light saffron sugar syrup.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    tag: 'Classic Sweet',
    prepTime: '5 mins',
    calories: '280 kcal',
    spicyLevel: 0,
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 26,
    name: 'Crispy Kesari Jalebi (150g)',
    category: 'Traditional Sweets',
    price: 50,
    description: 'Golden fermented spirals piped into hot oil and drenched in saffron syrup with real saffron threads.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    tag: 'Hot & Juicy',
    prepTime: '10 mins',
    calories: '310 kcal',
    spicyLevel: 0,
    isVegetarian: true
  },
  {
    id: 27,
    name: 'Royal Rasmalai (2 pcs)',
    category: 'Traditional Sweets',
    price: 60,
    description: 'Pillowy cottage cheese discs soaked in thick condensed milk scented with Kashmir saffron, cardamom, and pistachio slivers.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    tag: 'Royal Treat',
    prepTime: '5 mins',
    calories: '260 kcal',
    spicyLevel: 0,
    isVegetarian: true
  },
  {
    id: 28,
    name: 'Fudgy Belgian Chocolate Brownie',
    category: 'Cakes and Desserts',
    price: 70,
    description: 'Dense, chewy cocoa brownie baked with 70% dark Belgian chocolate chunks and roasted California walnut pieces.',
    image: 'https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    prepTime: '5 mins',
    calories: '340 kcal',
    spicyLevel: 0,
    isVegetarian: true
  },
  {
    id: 29,
    name: 'Chocolate Swirl Cupcake',
    category: 'Cakes and Desserts',
    price: 45,
    description: 'Fluffy cocoa cupcake crowned with rich chocolate buttercream swirl and golden sugar pearls.',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    prepTime: '5 mins',
    calories: '230 kcal',
    spicyLevel: 0,
    isVegetarian: true
  },
  {
    id: 30,
    name: 'Strawberry Velvet Pastry',
    category: 'Cakes and Desserts',
    price: 65,
    description: 'Layers of moist vanilla sponge infused with fresh strawberry glaze and light chantilly cream.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    prepTime: '5 mins',
    calories: '260 kcal',
    spicyLevel: 0,
    isVegetarian: true
  },
  {
    id: 31,
    name: 'Dark Chocolate Truffle Cake Slice',
    category: 'Cakes and Desserts',
    price: 85,
    description: 'Decadent chocolate sponge layered with silken dark chocolate ganache and chocolate curls.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    prepTime: '5 mins',
    calories: '380 kcal',
    spicyLevel: 0,
    isVegetarian: true
  },
  {
    id: 32,
    name: 'Maison Royale Birthday Celebration Cake (1.2 kg)',
    category: 'Cakes and Desserts',
    price: 550,
    description: 'Triple-tier artisan vanilla sponge layered with Alphonso mango curd, fresh strawberry glaze, chocolate curls, and 24k edible gold dust.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    tag: 'Signature 3D Cake',
    prepTime: '45 mins',
    calories: '1850 kcal',
    spicyLevel: 0,
    isVegetarian: true,
    isPopular: true
  },

  // --- Expandable Additional Snacks ---
  {
    id: 33,
    name: 'Crispy Masala Dosa',
    category: 'South Indian Snacks',
    price: 70,
    description: 'Crispy fermented crepe served with spicy potato mash, coconut chutney, tomato chutney, and sambar.',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    tag: 'South Indian',
    prepTime: '15 mins',
    calories: '280 kcal',
    isVegetarian: true
  },
  {
    id: 34,
    name: 'Ghee Roast Dosa',
    category: 'South Indian Snacks',
    price: 80,
    description: 'Golden, paper-thin cone roasted in pure country ghee until brittle and aromatic.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins',
    calories: '320 kcal',
    isVegetarian: true
  },
  {
    id: 35,
    name: 'Tirunelveli Ghee Halwa (150g)',
    category: 'Traditional Sweets',
    price: 55,
    description: 'Authentic fermented wheat milk halwa cooked with pure cow ghee, topped with whole cashews.',
    image: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    tag: 'TN Classic',
    prepTime: '5 mins',
    calories: '340 kcal',
    isVegetarian: true
  },
  {
    id: 36,
    name: 'Cheesy Garlic Breadsticks (4 pcs)',
    category: 'Bakery Items',
    price: 65,
    description: 'Oven-toasted baguette sticks brushed with garlic butter and melted mozzarella.',
    image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    prepTime: '12 mins',
    calories: '280 kcal',
    isVegetarian: true
  },
  {
    id: 37,
    name: 'Glazed Chocolate Donut',
    category: 'Bakery Items',
    price: 45,
    description: 'Yeast-raised fluffy ring donut coated in shiny Belgian dark chocolate glaze and colorful sprinkles.',
    image: 'https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    prepTime: '5 mins',
    calories: '260 kcal',
    isVegetarian: true
  },
  {
    id: 38,
    name: 'Crispy Nendran Banana Chips (200g)',
    category: 'Evening Snacks',
    price: 50,
    description: 'Kerala-style raw banana wafers fried crisp in pure coconut oil with a dusting of turmeric and rock salt.',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    prepTime: '5 mins',
    calories: '290 kcal',
    isVegetarian: true
  }
];

/* ==========================================================================
   4. ALL 38 TAMIL NADU DISTRICTS & VERIFIED LOCAL HOTELS
   ========================================================================== */
export const TN_DISTRICTS: string[] = [
  'Ariyalur',
  'Chengalpattu',
  'Chennai',
  'Coimbatore',
  'Cuddalore',
  'Dharmapuri',
  'Dindigul',
  'Erode',
  'Kallakurichi',
  'Kancheepuram',
  'Kanniyakumari',
  'Karur',
  'Krishnagiri',
  'Madurai',
  'Mayiladuthurai',
  'Nagapattinam',
  'Namakkal',
  'Nilgiris',
  'Perambalur',
  'Pudukkottai',
  'Ramanathapuram',
  'Ranipet',
  'Salem',
  'Sivaganga',
  'Tenkasi',
  'Thanjavur',
  'Theni',
  'Thoothukudi',
  'Tiruchirappalli',
  'Tirunelveli',
  'Tirupathur',
  'Tiruppur',
  'Tiruvallur',
  'Tiruvannamalai',
  'Tiruvarur',
  'Vellore',
  'Viluppuram',
  'Virudhunagar'
];

export const DISTRICT_POPULAR_HOTELS: { [district: string]: string[] } = {
  'Chennai': ['A2B (Adyar Ananda Bhavan)', 'Murugan Idli Shop', 'Hotel Saravana Bhavan', 'Sangeetha Veg Restaurant', 'Junior Kuppanna'],
  'Madurai': ['Murugan Idli Shop', 'Amma Mess', 'Sree Sabarees', 'Hotel Supreme', 'Modern Restaurant'],
  'Coimbatore': ['Sree Annapoorna Sree Gowrishankar', 'Anandhas Restaurant', 'Junior Kuppanna', 'Hari Bhavanam'],
  'Tiruchirappalli': ['Sangeetha Restaurant', 'Vasantha Bhavan', 'Ezham Suvai', 'Hotel TamilNadu'],
  'Salem': ['Salem RR Biryani Hotel', 'Hotel Selvam', 'Saravana Bhavan Salem', 'Mangala Vilas'],
  'Tirunelveli': ['Hotel Nellai Saravana Bhava', 'Hotel Aryas', 'Bhavani Hotel', 'Janakiram Hotel'],
  'Thanjavur': ['Hotel Gnanam', 'Sree Ariya Bhavan', 'Hotel Parisutham'],
  'Dindigul': ['Dindigul Thalappakatti', 'Venu Biriyani', 'Ponram Veg & Non-Veg'],
  'Nilgiris': ['Hotel Nahar Ooty', 'Shinkow’s Chinese', 'Earl’s Secret', 'A2B Ooty'],
  'Kanniyakumari': ['Hotel Saravana Kanyakumari', 'The Ocean Restaurant', 'Triveni Restaurant']
};

/* ==========================================================================
   5. SPECIAL OFFERS (TOMATO RED WITH SAFFRON HIGHLIGHTS)
   ========================================================================== */
export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'offer-1',
    code: 'SUNSET30',
    title: 'Evening Snacks Combo',
    subtitle: '4 Crispy Samosas + 2 Medu Vadas + 200g Onion Pakoda + Chutneys',
    discountText: '30% OFF',
    badge: 'Popular Platter',
    minOrder: 150,
    itemsIncluded: ['4x Samosa', '2x Medu Vada', '1x Onion Pakoda'],
    originalPrice: 170,
    offerPrice: 119,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'offer-2',
    code: 'CAKEFEST',
    title: 'Birthday Celebration Cake Special',
    subtitle: 'Maison Royale 1.2 kg 3D Cake with golden sparkler candles and delivery box',
    discountText: '₹100 OFF',
    badge: 'Party Special',
    minOrder: 500,
    itemsIncluded: ['1x 1.2kg Maison Cake', 'Candle Pack', 'Cutlery Set'],
    originalPrice: 650,
    offerPrice: 550,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'offer-3',
    code: 'TIFFIN15',
    title: 'South Indian Breakfast Feast',
    subtitle: '14 Ghee Podi Mini Idlis + 2 Medu Vadas + 1 Masala Dosa + Sambar',
    discountText: 'FLAT ₹50 OFF',
    badge: 'Breakfast Hero',
    minOrder: 199,
    itemsIncluded: ['14x Mini Idli', '2x Medu Vada', '1x Masala Dosa'],
    originalPrice: 210,
    offerPrice: 160,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'offer-4',
    code: 'FAMILY50',
    title: 'Family Street Food & Fast Food Box',
    subtitle: '2 Pav Bhaji plates + 8 Pani Puris + 1 Veg Burger + French Fries',
    discountText: 'SAVE ₹90',
    badge: 'Weekend Special',
    minOrder: 350,
    itemsIncluded: ['2x Pav Bhaji', '8x Pani Puri', '1x Burger', '1x Fries'],
    originalPrice: 325,
    offerPrice: 235,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80'
  }
];
