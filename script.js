/**
 * FOOD CHEF — Luxury Cinematic 3D Food Ordering & Runway
 * Single vanilla script driving:
 * 1. Maison Vell runway depth lookbook engine (depth table KX, KF, KH, KB, KO, exponential easing, looping cards, rolling look number)
 * 2. 3D Birthday Cake interactive animated advertisement
 * 3. 32-item gourmet food catalog with search & category filters
 * 4. Full cart drawer, promo code calculator & checkout system
 * 5. Tamil Nadu district-aware artisan kitchen hub selection
 * 6. Live 5-stage animated delivery order tracker with scooter simulation
 */

// =============================================================================
// 1. DATA: 6 SHOWSTOPPER RUNWAY DISHES & 12 COMPANION RAIL PIECES
// =============================================================================

// High-resolution appetizing culinary visual assets with SVG vector fallbacks
const RUNWAY_DISHES = [
  {
    id: 1,
    look: 15,
    name: "Saffron Truffle Risotto & 24k Gold",
    tagline: "Gourmet arborio, 24k edible gold leaf, shaved winter black truffles, aged parmesan crisp",
    price: "$38.00",
    rawPrice: 38.00,
    category: "Chef's Signature",
    img: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80",
    ratio: 1.15
  },
  {
    id: 2,
    look: 16,
    name: "Royal Grand Dum Biryani Pot",
    tagline: "Slow-dum cooked aged basmati, tender royal spiced cuts, caramelized shallots, saffron mist",
    price: "$28.00",
    rawPrice: 28.00,
    category: "Signature Dum",
    img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    ratio: 1.1
  },
  {
    id: 3,
    look: 17,
    name: "Prime Wagyu Smash Burger",
    tagline: "Double prime wagyu patty, melted vintage cheddar, shallot bacon jam on golden toasted brioche",
    price: "$24.00",
    rawPrice: 24.00,
    category: "Artisan Burger",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    ratio: 1.05
  },
  {
    id: 4,
    look: 18,
    name: "Artisan Burrata & Fig Neapolitan Pizza",
    tagline: "San Marzano tomatoes, fresh pugliese burrata, ripe black figs, hot honey drizzle & fresh basil",
    price: "$26.00",
    rawPrice: 26.00,
    category: "Stone Oven Pizza",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    ratio: 1.12
  },
  {
    id: 5,
    look: 19,
    name: "Golden Crispy Samosa Royale",
    tagline: "Hand-folded flaky pastry, spiced potato & pistachio filling, royal mint & date-tamarind drizzle",
    price: "$14.00",
    rawPrice: 14.00,
    category: "Heritage Snacks",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    ratio: 1.02
  },
  {
    id: 6,
    look: 20,
    name: "Grand Opera Cake & Pistachio Ganache",
    tagline: "Almond sponge, espresso buttercream, dark Valrhona chocolate ganache, 24k gold dusting",
    price: "$18.00",
    rawPrice: 18.00,
    category: "Patisserie",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    ratio: 1.18
  }
];

// Companion rail pairings (12 cards, 2 per look)
const RAIL_ITEMS = [
  { look: 15, piece: 1, name: "Truffle Parmesan Polenta Fries", price: "$12.00", rawPrice: 12.00, img: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80" },
  { look: 15, piece: 2, name: "Imperial Rose Pistachio Lassi", price: "$8.00", rawPrice: 8.00, img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80" },
  { look: 16, piece: 1, name: "Mirchi Salan & Raita Dipping Pot", price: "$6.00", rawPrice: 6.00, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80" },
  { look: 16, piece: 2, name: "Saffron Cardamom Golden Milk", price: "$9.00", rawPrice: 9.00, img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80" },
  { look: 17, piece: 1, name: "Smoked Cheddar Jalapeño Croquettes", price: "$13.00", rawPrice: 13.00, img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80" },
  { look: 17, piece: 2, name: "Iced Salted Caramel Cold Brew", price: "$7.50", rawPrice: 7.50, img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80" },
  { look: 18, piece: 1, name: "Basil Pesto Bocconcini Skewers", price: "$11.00", rawPrice: 11.00, img: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=600&q=80" },
  { look: 18, piece: 2, name: "Sparkling Wild Berry Fizz", price: "$8.50", rawPrice: 8.50, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80" },
  { look: 19, piece: 1, name: "Mint Coriander Chutney Jar", price: "$5.00", rawPrice: 5.00, img: "https://images.unsplash.com/photo-1505253758473-96b46deae03e?auto=format&fit=crop&w=600&q=80" },
  { look: 19, piece: 2, name: "Sweet Tamarind Jaggery Reduction", price: "$5.00", rawPrice: 5.00, img: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=600&q=80" },
  { look: 20, piece: 1, name: "Tahitian Vanilla Bean Gelato", price: "$6.00", rawPrice: 6.00, img: "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=600&q=80" },
  { look: 20, piece: 2, name: "24k Gold Espresso Macarons", price: "$10.00", rawPrice: 10.00, img: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=600&q=80" }
];

// =============================================================================
// 2. DATA: 32 GOURMET MENU DISHES ACROSS 7 CATEGORIES
// =============================================================================
const MENU_ITEMS = [
  // Snacks (5)
  {
    id: 101,
    name: "Golden Samosa Royale",
    category: "Snacks",
    price: "$14.00",
    rawPrice: 14.00,
    tag: "Best Seller",
    desc: "Hand-folded flaky pastry, spiced potato & pistachio filling, royal mint & date-tamarind drizzle.",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    calories: "320 kcal",
    prepTime: "15 min"
  },
  {
    id: 102,
    name: "Truffle Parmesan Polenta Fries",
    category: "Snacks",
    price: "$12.00",
    rawPrice: 12.00,
    tag: "Popular",
    desc: "Crispy polenta batons, infused with white truffle oil, rosemary sea salt and 24-month aged Parmigiano Reggiano.",
    img: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
    calories: "280 kcal",
    prepTime: "12 min"
  },
  {
    id: 103,
    name: "Crispy Paneer Tikka Skewers",
    category: "Snacks",
    price: "$15.00",
    rawPrice: 15.00,
    tag: "Chef's Choice",
    desc: "Charcoal-smoked cottage cheese cubes, marinated in Kashmiri chilies, Greek yogurt, and bell pepper skewers.",
    img: "https://images.unsplash.com/photo-1567184109191-3783b3240212?auto=format&fit=crop&w=600&q=80",
    calories: "350 kcal",
    prepTime: "20 min"
  },
  {
    id: 104,
    name: "Tempura Crispy Prawns",
    category: "Snacks",
    price: "$18.00",
    rawPrice: 18.00,
    tag: "Luxury",
    desc: "Golden lacy battered tiger prawns served with yuzu-honey dipping emulsion and toasted sesame.",
    img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
    calories: "290 kcal",
    prepTime: "15 min"
  },
  {
    id: 105,
    name: "Smoked Cheddar Jalapeño Croquettes",
    category: "Snacks",
    price: "$13.00",
    rawPrice: 13.00,
    tag: "Hot",
    desc: "Crispy panko spheres filled with molten smoked vintage cheddar and flame-roasted jalapeño peppers.",
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80",
    calories: "310 kcal",
    prepTime: "14 min"
  },

  // Pizza (5)
  {
    id: 106,
    name: "Artisan Burrata & Fig Neapolitan Pizza",
    category: "Pizza",
    price: "$26.00",
    rawPrice: 26.00,
    tag: "Signature",
    desc: "48-hour fermented crust, San Marzano tomato reduction, whole burrata pugliese, fresh black mission figs & chili hot honey.",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    calories: "680 kcal",
    prepTime: "18 min"
  },
  {
    id: 107,
    name: "Truffle Wild Mushroom Pizza",
    category: "Pizza",
    price: "$25.00",
    rawPrice: 25.00,
    tag: "Best Seller",
    desc: "Black truffle cream sauce, sautéed chanterelles and portobellos, fior di latte, and fresh thyme.",
    img: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=600&q=80",
    calories: "620 kcal",
    prepTime: "18 min"
  },
  {
    id: 108,
    name: "Spicy Pepperoni Diavola",
    category: "Pizza",
    price: "$23.00",
    rawPrice: 23.00,
    tag: "Popular",
    desc: "Artisan cured beef pepperoni, spicy calabrian chili paste, smoked scamorza cheese, and fresh oregano.",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80",
    calories: "740 kcal",
    prepTime: "16 min"
  },
  {
    id: 109,
    name: "Four Cheese Quattro Formaggi",
    category: "Pizza",
    price: "$22.00",
    rawPrice: 22.00,
    tag: "Classic",
    desc: "Harmonious blend of Gorgonzola dolce, Fontina, aged Parmigiano, and creamy buffalo mozzarella.",
    img: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=600&q=80",
    calories: "710 kcal",
    prepTime: "16 min"
  },
  {
    id: 110,
    name: "Pesto Sun-Dried Tomato Flatbread",
    category: "Pizza",
    price: "$21.00",
    rawPrice: 21.00,
    tag: "Vegetarian",
    desc: "Crispy thin crust with genovese basil pesto, semi-dried tomatoes, toasted pine nuts, and goat cheese crumbles.",
    img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80",
    calories: "540 kcal",
    prepTime: "15 min"
  },

  // Burgers (5)
  {
    id: 111,
    name: "Prime Wagyu Smash Burger",
    category: "Burgers",
    price: "$24.00",
    rawPrice: 24.00,
    tag: "Signature",
    desc: "Double wagyu smash patties, caramelized shallot jam, vintage yellow cheddar, secret truffle emulsion, brioche.",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    calories: "780 kcal",
    prepTime: "16 min"
  },
  {
    id: 112,
    name: "Crispy Buttermilk Chicken Brioche",
    category: "Burgers",
    price: "$19.00",
    rawPrice: 19.00,
    tag: "Best Seller",
    desc: "24-hr buttermilk brined organic chicken thigh, twice-fried crisp, purple cabbage slaw, honey mustard butter.",
    img: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80",
    calories: "720 kcal",
    prepTime: "18 min"
  },
  {
    id: 113,
    name: "Truffle Portobello Mushroom Burger",
    category: "Burgers",
    price: "$20.00",
    rawPrice: 20.00,
    tag: "Vegetarian",
    desc: "Grilled balsamic glazed giant portobello cap, molten gruyère cheese, baby arugula, black truffle aioli.",
    img: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=600&q=80",
    calories: "510 kcal",
    prepTime: "15 min"
  },
  {
    id: 114,
    name: "Spiced Lamb Shank Burger",
    category: "Burgers",
    price: "$22.00",
    rawPrice: 22.00,
    tag: "Gourmet",
    desc: "Pulled slow-roasted rosemary lamb, pomegranate glaze, mint tzatziki, pickled red onions.",
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80",
    calories: "690 kcal",
    prepTime: "18 min"
  },
  {
    id: 115,
    name: "Double Melt Cheddar Smash",
    category: "Burgers",
    price: "$18.00",
    rawPrice: 18.00,
    tag: "Classic",
    desc: "Two crispy smashed beef patties, quadruple cheddar cheese slices, house dill pickles, and smoked burger sauce.",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    calories: "760 kcal",
    prepTime: "14 min"
  },

  // Sandwiches (4)
  {
    id: 116,
    name: "Smoked Turkey & Brie Panini",
    category: "Sandwiches",
    price: "$17.00",
    rawPrice: 17.00,
    tag: "Popular",
    desc: "Thinly shaved hickory smoked turkey, french brie cheese, cranberry shallot compote on grilled sourdough.",
    img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
    calories: "490 kcal",
    prepTime: "12 min"
  },
  {
    id: 117,
    name: "Grilled Halloumi & Avocado Sourdough",
    category: "Sandwiches",
    price: "$16.00",
    rawPrice: 16.00,
    tag: "Fresh",
    desc: "Pan-seared Cypriot halloumi, smashed ripe avocado, sun-ripened tomatoes, za'atar seasoning, and lemon zest.",
    img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80",
    calories: "460 kcal",
    prepTime: "12 min"
  },
  {
    id: 118,
    name: "Herb Roasted Beef Ciabatta",
    category: "Sandwiches",
    price: "$18.00",
    rawPrice: 18.00,
    tag: "Hearty",
    desc: "Medium-rare roast beef slices, sharp horseradish cream, peppery wild rocket, crispy fried onions on warm ciabatta.",
    img: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80",
    calories: "530 kcal",
    prepTime: "14 min"
  },
  {
    id: 119,
    name: "Pesto Caprese Focaccia",
    category: "Sandwiches",
    price: "$15.00",
    rawPrice: 15.00,
    tag: "Classic",
    desc: "Fresh rosemary olive oil focaccia, vine heirloom tomatoes, fresh mozzarella di bufala, basil pesto, aged balsamic reduction.",
    img: "https://images.unsplash.com/photo-1619860860774-1e2e17343432?auto=format&fit=crop&w=600&q=80",
    calories: "440 kcal",
    prepTime: "10 min"
  },

  // Desserts (5)
  {
    id: 120,
    name: "Molten Belgian Chocolate Lava",
    category: "Desserts",
    price: "$14.00",
    rawPrice: 14.00,
    tag: "Best Seller",
    desc: "Warm dark Valrhona 70% chocolate center, served with Tahitian vanilla bean gelato and gold sugar crisps.",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
    calories: "520 kcal",
    prepTime: "15 min"
  },
  {
    id: 121,
    name: "Classic Tahitian Crème Brûlée",
    category: "Desserts",
    price: "$13.00",
    rawPrice: 13.00,
    tag: "Classic",
    desc: "Silky Madagascar vanilla custard beneath a brittle blow-torched caramelized turbinado sugar crust.",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    calories: "380 kcal",
    prepTime: "10 min"
  },
  {
    id: 122,
    name: "Sicilian Pistachio Cannoli",
    category: "Desserts",
    price: "$12.00",
    rawPrice: 12.00,
    tag: "Artisan",
    desc: "Crispy fried wine-infused pastry shells piped with sweet sheep's milk ricotta, Bronte pistachio nibs, candied orange.",
    img: "https://images.unsplash.com/photo-1551529834-525807d6b4f3?auto=format&fit=crop&w=600&q=80",
    calories: "340 kcal",
    prepTime: "10 min"
  },
  {
    id: 123,
    name: "Mango Passionfruit Pavlova",
    category: "Desserts",
    price: "$15.00",
    rawPrice: 15.00,
    tag: "Seasonal",
    desc: "Crisp marshmallow meringue nest crowned with whipped chantilly cream, Alphonso mango cubes, passionfruit coulis.",
    img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
    calories: "310 kcal",
    prepTime: "12 min"
  },
  {
    id: 124,
    name: "Salted Caramel Choux Buns",
    category: "Desserts",
    price: "$13.00",
    rawPrice: 13.00,
    tag: "Gourmet",
    desc: "Crispy craquelin pastry puffs filled with fleur de sel salted caramel mousse and dark chocolate glaze.",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    calories: "360 kcal",
    prepTime: "10 min"
  },

  // Cakes (4)
  {
    id: 125,
    name: "Celebration 3D Multi-Layer Cake",
    category: "Cakes",
    price: "$65.00",
    rawPrice: 65.00,
    tag: "Grand Showstopper",
    desc: "As featured in our 3D cinematic showcase! Multi-tier sponge, Bavarian cream, dark ganache, strawberries, 24k gold leaf, candle.",
    img: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80",
    calories: "1850 kcal",
    prepTime: "45 min"
  },
  {
    id: 126,
    name: "Signature Golden Opera Cake",
    category: "Cakes",
    price: "$18.00",
    rawPrice: 18.00,
    tag: "Signature",
    desc: "Almond sponge cake soaked in coffee syrup, layered with ganache and coffee buttercream, covered in chocolate glaze.",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
    calories: "460 kcal",
    prepTime: "15 min"
  },
  {
    id: 127,
    name: "Basque Burnt Caramel Cheesecake",
    category: "Cakes",
    price: "$16.00",
    rawPrice: 16.00,
    tag: "Popular",
    desc: "Rustic caramelized crust with an ultra-creamy, custard-like molten center made with Spanish cream cheese.",
    img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
    calories: "430 kcal",
    prepTime: "12 min"
  },
  {
    id: 128,
    name: "Valrhona Dark Truffle Gateau",
    category: "Cakes",
    price: "$20.00",
    rawPrice: 20.00,
    tag: "Luxury",
    desc: "Decadent flourless dark chocolate gateau dusted with gold powder and topped with hand-rolled cocoa truffles.",
    img: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=600&q=80",
    calories: "510 kcal",
    prepTime: "15 min"
  },

  // Drinks (4)
  {
    id: 129,
    name: "Saffron Cardamom Golden Milk",
    category: "Drinks",
    price: "$9.00",
    rawPrice: 9.00,
    tag: "Signature",
    desc: "Warm steeped whole milk with pure Kashmiri saffron strands, crushed green cardamom pods, and organic honey.",
    img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
    calories: "190 kcal",
    prepTime: "8 min"
  },
  {
    id: 130,
    name: "Imperial Rose Pistachio Lassi",
    category: "Drinks",
    price: "$8.00",
    rawPrice: 8.00,
    tag: "Best Seller",
    desc: "Creamy churned organic yogurt infused with Damask rose petal preserve and roasted pistachio slivers.",
    img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
    calories: "210 kcal",
    prepTime: "6 min"
  },
  {
    id: 131,
    name: "Sparkling Wild Berry Fizz",
    category: "Drinks",
    price: "$8.50",
    rawPrice: 8.50,
    tag: "Refreshing",
    desc: "Muddled blackberries and raspberries, elderflower cordial, sparkling mineral water, fresh mint bouquet.",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    calories: "120 kcal",
    prepTime: "5 min"
  },
  {
    id: 132,
    name: "Iced Salted Caramel Cold Brew",
    category: "Drinks",
    price: "$7.50",
    rawPrice: 7.50,
    tag: "Popular",
    desc: "Single-origin Arabica 18-hour cold brew, topped with velvety salted caramel cold foam and smoked salt.",
    img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80",
    calories: "140 kcal",
    prepTime: "5 min"
  }
];

// District-aware artisan culinary hub directory for Tamil Nadu
const TN_HUBS = {
  "Chennai": [
    "Food Chef Grand Kitchen — Nungambakkam",
    "Food Chef Gourmet Studio — OMR Adyar",
    "Food Chef Express Kitchen — Anna Nagar"
  ],
  "Coimbatore": [
    "Food Chef Central Kitchen — RS Puram",
    "Food Chef Gourmet Hub — Race Course"
  ],
  "Madurai": [
    "Food Chef Heritage Kitchen — KK Nagar",
    "Food Chef Gourmet Studio — Bye Pass Road"
  ],
  "Tiruchirappalli": [
    "Food Chef Royal Kitchen — Thillai Nagar",
    "Food Chef Artisan Hub — Cantonment"
  ],
  "Salem": [
    "Food Chef Cloud Hub — Fairlands",
    "Food Chef Gourmet Kitchen — Junction"
  ],
  "Tirunelveli": [
    "Food Chef Artisan Kitchen — Palayamkottai"
  ],
  "Erode": [
    "Food Chef Kitchen — Perundurai Road"
  ],
  "Vellore": [
    "Food Chef Hub — Katpadi"
  ],
  "Thanjavur": [
    "Food Chef Heritage Hub — Medical College Road"
  ],
  "Dindigul": [
    "Food Chef Biryani & Gourmet Studio — GT Road"
  ],
  "Kanchipuram": [
    "Food Chef Silk City Kitchen — Gandhi Road"
  ],
  "Tiruppur": [
    "Food Chef Artisan Studio — Avinashi Road"
  ]
};

// =============================================================================
// 3. RUNWAY DEPTH LOOKBOOK ENGINE (Exact Maison Vell Architecture)
// =============================================================================

// Depth stops from d = -1 (leaving past the rail) to d = 5 (arriving out of golden haze)
const KX = [1.2, 0.744, 0.496, 0.346, 0.235, 0.15, 0.085];
const KF = [1.14, 0.89, 0.777, 0.704, 0.651, 0.616, 0.59];
const KH = [1.18, 0.832, 0.574, 0.436, 0.334, 0.258, 0.19];
const KB = [0, 0, 1.5, 4, 8, 12, 17];
const KO = [1, 1, 1, 1, 0.86, 0.5, 0];

const N = RUNWAY_DISHES.length;
const FIRST = 15;
const $ = id => document.getElementById(id);
const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const wrap = (x, n) => ((x % n) + n) % n;

let stage, rail, ring, roll, line;
let people = [];
let cards = [];
let W = 0, H = 0, base = 0, cardS = 0, side = false, dirty = true, p = 0, target = 0, last = 0;
let mx = 0, my = 0, cx = 0, cy = 0, down = false, sx = 0, st = 0, moved = 0, wheelT = 0;

// Initialize Runway DOM elements
function initRunway() {
  stage = $('stage');
  rail = $('rail');
  ring = $('ring');
  roll = $('roll');
  line = $('line');

  if (!stage || !rail || !line) return;

  // Build the 6 runway models/dishes
  people = RUNWAY_DISHES.map((dish, i) => {
    const e = document.createElement('div');
    e.className = 'm';
    e.dataset.i = i;
    e.setAttribute('role', 'button');
    e.setAttribute('aria-label', `View ${dish.name}`);

    e.innerHTML = `
      <div class="dish-visual">
        <div class="dish-halo"></div>
        <img class="dish-img" src="${dish.img}" alt="${dish.name}" loading="lazy" />
      </div>
    `;

    line.append(e);
    return { e, r: dish.ratio, f: '', o: '' };
  });

  // Build the companion cards in the rail
  cards = RAIL_ITEMS.map((item, i) => {
    const e = document.createElement('article');
    e.className = 'card' + (i % 2 ? ' alt' : '');
    e.innerHTML = `
      <button class="fav" aria-pressed="false" aria-label="Favorite ${item.name}">
        <svg viewBox="0 0 24 24"><path d="M12 20S3.5 15 3.5 9A4.6 4.6 0 0 1 12 6.6 4.6 4.6 0 0 1 20.5 9C20.5 15 12 20 12 20Z"/></svg>
      </button>
      <div class="shot">
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
      </div>
      <div class="meta">
        <h3 class="wide">${item.name}</h3>
        <span class="tabular">${item.price}</span>
        <button class="add" aria-label="Add ${item.name} to cart" data-rail-index="${i}"></button>
      </div>
    `;
    rail.append(e);
    return e;
  });

  // Build rolling look numbers
  for (let i = 0; i <= N; i++) {
    const b = document.createElement('b');
    b.textContent = (FIRST + (i % N)).toString().padStart(2, '0');
    roll.append(b);
  }

  // Runway Event Listeners (Drag, Wheel, Pointer, Keys)
  const PULL = () => Math.max(150, W * 0.2);

  stage.addEventListener('pointerenter', e => {
    if (e.pointerType === 'mouse') ring.classList.add('show');
  });

  stage.addEventListener('pointerleave', () => ring.classList.remove('show'));

  stage.addEventListener('pointermove', e => {
    const r = stage.getBoundingClientRect();
    mx = e.clientX - r.left;
    my = e.clientY - r.top;
    if (!down) return;
    const dx = e.clientX - sx;
    moved = Math.max(moved, Math.abs(dx));
    target = st + dx / PULL();
  });

  stage.addEventListener('pointerdown', e => {
    if (e.target.closest('button') || e.target.closest('a')) return;
    down = true;
    sx = e.clientX;
    st = target;
    moved = 0;
    stage.setPointerCapture(e.pointerId);
    ring.classList.add('drag');
  });

  function release(e) {
    if (!down) return;
    down = false;
    ring.classList.remove('drag');

    // If movement was small, check if user clicked directly on a dish to jump
    if (moved < 6) {
      const hit = document.elementsFromPoint(e.clientX, e.clientY).find(x => x.classList && x.classList.contains('m'));
      if (hit) {
        let d = wrap(+hit.dataset.i - target, N);
        d = Math.round(d);
        if (d > 0 && d < N) target = Math.round(target) + d;
      }
    } else {
      target = Math.round(target);
    }
  }

  stage.addEventListener('pointerup', release);
  stage.addEventListener('pointercancel', release);

  // Wheel scrubbing
  stage.addEventListener('wheel', e => {
    e.preventDefault();
    target += clamp(e.deltaY + e.deltaX, -120, 120) / 420;
    clearTimeout(wheelT);
    wheelT = setTimeout(() => {
      target = Math.round(target);
    }, 150);
  }, { passive: false });

  // Keyboard navigation
  window.addEventListener('keydown', e => {
    if (['ArrowRight', 'ArrowDown'].includes(e.key)) {
      e.preventDefault();
      target = Math.round(target) + 1;
    }
    if (['ArrowLeft', 'ArrowUp'].includes(e.key)) {
      e.preventDefault();
      target = Math.round(target) - 1;
    }
  });

  // Rail interactions (Favorite and Add to Cart)
  rail.addEventListener('click', e => {
    const fav = e.target.closest('.fav');
    if (fav) {
      const isPressed = fav.getAttribute('aria-pressed') === 'true';
      fav.setAttribute('aria-pressed', (!isPressed).toString());
      showToast(isPressed ? 'Removed from favorites' : 'Saved to favorites');
    }

    const addBtn = e.target.closest('.add');
    if (addBtn) {
      const idx = parseInt(addBtn.dataset.railIndex, 10);
      const item = RAIL_ITEMS[idx];
      if (item) {
        addToCart({
          id: `rail-${idx}`,
          name: item.name,
          price: item.rawPrice,
          priceFormatted: item.price,
          img: item.img
        });
      }
    }
  });

  // Previous and Next Stage Arrow Buttons
  const btnPrev = $('btnPrevRunway');
  const btnNext = $('btnNextRunway');
  if (btnPrev) btnPrev.addEventListener('click', () => { target = Math.round(target) - 1; });
  if (btnNext) btnNext.addEventListener('click', () => { target = Math.round(target) + 1; });

  // Quick Order Look Button
  const btnQuickOrder = $('btnQuickOrderLook');
  if (btnQuickOrder) {
    btnQuickOrder.addEventListener('click', () => {
      const activeIdx = wrap(Math.round(target), N);
      const dish = RUNWAY_DISHES[activeIdx];
      if (dish) {
        addToCart({
          id: `runway-${dish.id}`,
          name: dish.name,
          price: dish.rawPrice,
          priceFormatted: dish.price,
          img: dish.img
        });
      }
    });
  }

  window.addEventListener('resize', size);
  size();
  requestAnimationFrame(loop);
}

// Compute responsive sizes
function size() {
  if (!stage || !rail) return;
  W = stage.clientWidth;
  H = stage.clientHeight;
  base = H * 1.2;
  side = window.innerWidth <= 820;

  people.forEach(m => {
    m.e.style.width = base * m.r + 'px';
    m.e.style.height = base + 'px';
  });

  cardS = side ? 160 : rail.clientHeight / 3;
  cards.forEach(c => c.style.height = side ? '100%' : cardS + 'px');

  if (roll && roll.firstChild) {
    roll.style.setProperty('--h', roll.firstChild.getBoundingClientRect().height.toString());
  }

  dirty = true;
}

// Render the 3D depth runway and looping cards
function paint() {
  // Update dish depth and transformation
  people.forEach((m, i) => {
    let d = wrap(i - p, N);
    if (d > N - 1) d -= N;

    const k = clamp(d + 1, 0, 6);
    const a = Math.floor(k);
    const b = Math.min(6, a + 1);
    const t = k - a;
    const mix = arr => arr[a] + (arr[b] - arr[a]) * t;

    const h = mix(KH) * H;
    const s = h / base;
    const w = h * m.r;
    const x = mix(KX) * W - w / 2;
    const y = mix(KF) * H - h;

    m.e.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) scale(${s.toFixed(4)})`;

    const f = mix(KB) / s;
    const fs = f < 0.2 ? 'none' : `blur(${f.toFixed(1)}px)`;
    const o = mix(KO).toFixed(3);

    if (fs !== m.f) {
      m.f = fs;
      m.e.style.filter = fs;
    }
    if (o !== m.o) {
      m.o = o;
      m.e.style.opacity = o;
    }

    m.e.style.zIndex = (100 - Math.round(d * 10)).toString();
  });

  // Loop companion cards
  const all = cardS * RAIL_ITEMS.length;
  cards.forEach((c, i) => {
    let y = wrap(i * cardS - p * 2 * cardS, all);
    if (y > all - cardS) y -= all;
    c.style.transform = side ? `translate3d(${y.toFixed(1)}px, 0, 0)` : `translate3d(0, ${y.toFixed(1)}px, 0)`;
  });

  // Roll look numbers
  if (roll && roll.firstChild) {
    const itemHeight = roll.firstChild.offsetHeight || 38;
    roll.style.transform = `translate3d(0, ${(-wrap(p, N) * itemHeight).toFixed(1)}px, 0)`;
  }

  // Update lead title & price display for active dish
  const activeDishIndex = wrap(Math.round(p), N);
  const activeDish = RUNWAY_DISHES[activeDishIndex];
  const dishTitleElem = $('activeDishTitle');
  const dishPriceElem = $('activeDishPrice');
  if (dishTitleElem && activeDish) dishTitleElem.textContent = activeDish.name;
  if (dishPriceElem && activeDish) dishPriceElem.textContent = activeDish.price;
}

// Animation loop
function frame(now) {
  const dt = Math.min(50, now - last) || 16;
  last = now;
  const was = p;

  if (calm) {
    p = target;
  } else {
    p += (target - p) * (1 - Math.exp(-dt * 0.0072));
  }

  if (Math.abs(target - p) < 0.0004) p = target;
  if (p !== was || dirty) {
    dirty = false;
    paint();
  }

  // Smooth custom ring cursor
  cx += (mx - cx) * 0.32;
  cy += (my - cy) * 0.32;
  if (ring) {
    ring.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0)`;
  }
}

function loop(t) {
  frame(t);
  requestAnimationFrame(loop);
}

// =============================================================================
// 4. SECTION 5: 3D BIRTHDAY CAKE CINEMATIC ADVERTISEMENT
// =============================================================================
function initCakeShowcase() {
  const cakeRig = $('cake3dRig');
  const btnToggleExplode = $('btnToggleExplode');
  const btnCakeOrder = $('btnCakeOrder');
  const sparkleContainer = $('cakeSparkles');

  if (!cakeRig) return;

  let isExploded = true;
  let angleX = 18;
  let angleY = -8;
  let autoRotate = true;

  // Generate floating sparkle particles
  if (sparkleContainer) {
    for (let i = 0; i < 18; i++) {
      const s = document.createElement('div');
      s.className = 'sparkle';
      s.style.left = `${10 + Math.random() * 80}%`;
      s.style.top = `${20 + Math.random() * 70}%`;
      s.style.animationDelay = `${Math.random() * 3}s`;
      s.style.animationDuration = `${2.5 + Math.random() * 2}s`;
      sparkleContainer.appendChild(s);
    }
  }

  // Toggle exploded vs assembled layers
  if (btnToggleExplode) {
    btnToggleExplode.addEventListener('click', () => {
      isExploded = !isExploded;
      cakeRig.classList.toggle('exploded', isExploded);
      btnToggleExplode.textContent = isExploded ? 'Assemble Cake Layers' : 'Deconstruct 3D Layers';
    });
  }

  // Order Cake CTA
  if (btnCakeOrder) {
    btnCakeOrder.addEventListener('click', () => {
      addToCart({
        id: 'cake-signature',
        name: 'Celebration 3D Multi-Layer Cake',
        price: 65.00,
        priceFormatted: '$65.00',
        img: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80'
      });
    });
  }

  // Mouse tilt parallax on cake stage
  const wrap = $('cakeCanvasWrap');
  if (wrap) {
    wrap.addEventListener('mousemove', e => {
      const rect = wrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      angleY = -8 + x * 26;
      angleX = 18 - y * 18;
      cakeRig.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });

    wrap.addEventListener('mouseleave', () => {
      angleX = 18;
      angleY = -8;
      cakeRig.style.transform = `rotateX(18deg) rotateY(-8deg)`;
    });
  }
}

// =============================================================================
// 5. SECTION 4: FOOD MENU (32 ITEMS, SEARCH & CATEGORIES)
// =============================================================================
let currentCategory = 'All';
let searchQuery = '';

function renderMenu() {
  const container = $('menuGrid');
  if (!container) return;

  const filtered = MENU_ITEMS.filter(item => {
    const matchCat = currentCategory === 'All' || item.category === currentCategory;
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-mid);">
        <p style="font-size: 16px;">No gourmet dishes match your search.</p>
        <button id="btnClearSearch" style="margin-top: 12px; color: var(--gold-dark); font-weight: 600; text-decoration: underline;">Clear filter and view all</button>
      </div>
    `;
    const btn = $('btnClearSearch');
    if (btn) btn.addEventListener('click', () => {
      currentCategory = 'All';
      searchQuery = '';
      if ($('searchInput')) $('searchInput').value = '';
      updateCategoryButtons();
      renderMenu();
    });
    return;
  }

  container.innerHTML = filtered.map(item => `
    <article class="menu-card" data-dish-id="${item.id}">
      <div class="card-img-wrap">
        <span class="card-tag wide">${item.tag}</span>
        <button class="card-fav-btn" data-fav-id="${item.id}" aria-label="Favorite ${item.name}">
          <svg viewBox="0 0 24 24"><path d="M12 20S3.5 15 3.5 9A4.6 4.6 0 0 1 12 6.6 4.6 4.6 0 0 1 20.5 9C20.5 15 12 20 12 20Z"/></svg>
        </button>
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
      </div>
      <div class="card-body">
        <div class="card-category-strip">
          <span class="wide">${item.category}</span>
          <span>·</span>
          <span>${item.prepTime}</span>
        </div>
        <h3 class="card-title">${item.name}</h3>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
          <span class="card-price tabular">${item.price}</span>
          <button class="card-add-btn wide" data-add-id="${item.id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
            Add
          </button>
        </div>
      </div>
    </article>
  `).join('');

  // Event handlers for menu cards
  container.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('click', e => {
      // If user clicked fav or add, don't open detail
      if (e.target.closest('.card-fav-btn') || e.target.closest('.card-add-btn')) return;
      const id = parseInt(card.dataset.dishId, 10);
      const dish = MENU_ITEMS.find(d => d.id === id);
      if (dish) openDetailModal(dish);
    });
  });

  // Favorite button
  container.querySelectorAll('.card-fav-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const isActive = btn.classList.toggle('active');
      showToast(isActive ? 'Saved to favorites' : 'Removed from favorites');
      updateFavoriteCount();
    });
  });

  // Add button
  container.querySelectorAll('.card-add-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.addId, 10);
      const dish = MENU_ITEMS.find(d => d.id === id);
      if (dish) {
        addToCart({
          id: dish.id,
          name: dish.name,
          price: dish.rawPrice,
          priceFormatted: dish.price,
          img: dish.img
        });
      }
    });
  });
}

function updateCategoryButtons() {
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === currentCategory);
  });
}

function updateFavoriteCount() {
  const count = document.querySelectorAll('.card-fav-btn.active').length;
  const countBadge = $('favCount');
  if (countBadge) countBadge.textContent = count.toString();
}

function initMenu() {
  // Category tabs
  const catPills = $('categoryPills');
  if (catPills) {
    const cats = ['All', 'Snacks', 'Pizza', 'Burgers', 'Sandwiches', 'Desserts', 'Cakes', 'Drinks'];
    catPills.innerHTML = cats.map(c => `
      <button class="cat-btn wide ${c === currentCategory ? 'active' : ''}" data-category="${c}">
        ${c}
      </button>
    `).join('');

    catPills.addEventListener('click', e => {
      const btn = e.target.closest('.cat-btn');
      if (btn) {
        currentCategory = btn.dataset.category;
        updateCategoryButtons();
        renderMenu();
      }
    });
  }

  // Search input
  const searchInput = $('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      searchQuery = e.target.value.trim();
      renderMenu();
    });
  }

  renderMenu();
}

// =============================================================================
// 6. SHOPPING CART, PROMO SYSTEM & ORDER CALCULATIONS
// =============================================================================
let cart = [];
let promoDiscount = 0;
let appliedPromoCode = '';

function addToCart(item) {
  const existing = cart.find(i => i.id === item.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  updateCartUI();
  showToast(`Added ${item.name} to cart`);
}

function updateCartUI() {
  // Total item count in badge
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartBadge = $('cartCount');
  if (cartBadge) cartBadge.textContent = totalCount.toString();

  // Subtotal
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryFee = subtotal === 0 ? 0 : (subtotal >= 50 ? 0 : 4.00);
  const discountAmount = (subtotal * promoDiscount) / 100;
  const tax = subtotal * 0.05;
  const finalTotal = Math.max(0, subtotal + deliveryFee + tax - discountAmount);

  // Render items in drawer
  const container = $('cartItemsList');
  if (container) {
    if (cart.length === 0) {
      container.innerHTML = `
        <div class="cart-empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 8h14l1 13H4Z"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/></svg>
          <p style="font-weight: 600; color: var(--text-dark);">Your cart is empty</p>
          <p style="font-size: 13px; margin-top: 4px;">Explore our luxury 3D runway or menu to select dishes.</p>
        </div>
      `;
    } else {
      container.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-img">
            <img src="${item.img}" alt="${item.name}" />
          </div>
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <span class="tabular">$${item.price.toFixed(2)}</span>
          </div>
          <div class="cart-qty-ctrls">
            <button class="qty-btn" data-qty-dec="${item.id}">-</button>
            <span class="qty-val tabular">${item.qty}</span>
            <button class="qty-btn" data-qty-inc="${item.id}">+</button>
          </div>
        </div>
      `).join('');

      // Wire qty buttons
      container.querySelectorAll('[data-qty-dec]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.qtyDec;
          const target = cart.find(i => i.id == id);
          if (target) {
            target.qty -= 1;
            if (target.qty <= 0) cart = cart.filter(i => i.id != id);
            updateCartUI();
          }
        });
      });

      container.querySelectorAll('[data-qty-inc]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.qtyInc;
          const target = cart.find(i => i.id == id);
          if (target) {
            target.qty += 1;
            updateCartUI();
          }
        });
      });
    }
  }

  // Update summary fields
  if ($('cartSubtotal')) $('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
  if ($('cartDelivery')) $('cartDelivery').textContent = deliveryFee === 0 ? (subtotal > 0 ? 'FREE' : '$0.00') : `$${deliveryFee.toFixed(2)}`;
  if ($('cartTax')) $('cartTax').textContent = `$${tax.toFixed(2)}`;
  if ($('cartDiscount')) $('cartDiscount').textContent = discountAmount > 0 ? `-$${discountAmount.toFixed(2)}` : '$0.00';
  if ($('cartTotal')) $('cartTotal').textContent = `$${finalTotal.toFixed(2)}`;
}

function initCart() {
  const drawer = $('cartDrawer');
  const backdrop = $('modalBackdrop');
  const openBtn = $('btnOpenCart');
  const closeBtn = $('btnCloseCart');
  const btnCheckout = $('btnProceedCheckout');

  const openDrawer = () => {
    if (drawer) drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
  };

  const closeDrawer = () => {
    if (drawer) drawer.classList.remove('open');
    if (backdrop && !$('checkoutModal').classList.contains('open') && !$('detailModal').classList.contains('open')) {
      backdrop.classList.remove('open');
    }
  };

  if (openBtn) openBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) {
    backdrop.addEventListener('click', () => {
      closeDrawer();
      closeCheckoutModal();
      closeDetailModal();
    });
  }

  // Promo code apply
  const btnApplyCoupon = $('btnApplyCoupon');
  const couponInput = $('couponInput');
  if (btnApplyCoupon && couponInput) {
    btnApplyCoupon.addEventListener('click', () => {
      const code = couponInput.value.trim().toUpperCase();
      if (code === 'GOLDEN') {
        promoDiscount = 15;
        appliedPromoCode = code;
        showToast('Golden Promo: 15% discount applied!');
      } else if (code === 'CHEF20') {
        promoDiscount = 20;
        appliedPromoCode = code;
        showToast('Chef Promo: 20% discount applied!');
      } else if (code === 'WELCOME10') {
        promoDiscount = 10;
        appliedPromoCode = code;
        showToast('Welcome Promo: 10% discount applied!');
      } else {
        showToast('Invalid promo code. Try GOLDEN or CHEF20.');
      }
      updateCartUI();
    });
  }

  // Proceed to Checkout
  if (btnCheckout) {
    btnCheckout.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('Your cart is empty. Please add delicious items first!');
        return;
      }
      closeDrawer();
      openCheckoutModal();
    });
  }
}

// =============================================================================
// 7. CHECKOUT & DISTRICT-AWARE ARTISAN KITCHEN HUBS
// =============================================================================
function initCheckout() {
  const modal = $('checkoutModal');
  const closeBtn = $('btnCloseCheckout');
  const districtSelect = $('districtSelect');
  const hubSelect = $('hubSelect');
  const checkoutForm = $('checkoutForm');

  if (closeBtn) closeBtn.addEventListener('click', closeCheckoutModal);

  // Populate Tamil Nadu districts
  if (districtSelect && hubSelect) {
    districtSelect.innerHTML = Object.keys(TN_HUBS).map(d => `<option value="${d}">${d}</option>`).join('');

    const updateHubs = dist => {
      const hubs = TN_HUBS[dist] || ["Food Chef Premier Central Kitchen"];
      hubSelect.innerHTML = hubs.map(h => `<option value="${h}">${h}</option>`).join('');
    };

    districtSelect.addEventListener('change', e => {
      updateHubs(e.target.value);
    });

    // Default first district
    updateHubs(districtSelect.value || "Chennai");
  }

  // Order Submission
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', e => {
      e.preventDefault();

      const name = $('custName') ? $('custName').value.trim() : 'Guest';
      const phone = $('custPhone') ? $('custPhone').value.trim() : '';
      const address = $('custAddress') ? $('custAddress').value.trim() : '';
      const district = districtSelect ? districtSelect.value : 'Chennai';
      const hub = hubSelect ? hubSelect.value : 'Food Chef Grand Kitchen';

      if (!name || !phone || !address) {
        showToast('Please complete all required fields.');
        return;
      }

      // Generate realistic Order ID
      const orderId = `FC-${Math.floor(10000 + Math.random() * 90000)}-TN`;

      // Clear Cart
      cart = [];
      updateCartUI();
      closeCheckoutModal();

      // Launch Order Tracking with generated order
      startOrderTracking({
        orderId,
        customerName: name,
        hubName: hub,
        district
      });

      // Smooth scroll to tracking section
      const trackingSec = $('orderTracking');
      if (trackingSec) {
        trackingSec.scrollIntoView({ behavior: 'smooth' });
      }

      showToast(`Order Confirmed! Tracking ID: ${orderId}`);
    });
  }
}

function openCheckoutModal() {
  const modal = $('checkoutModal');
  const backdrop = $('modalBackdrop');
  if (modal) modal.classList.add('open');
  if (backdrop) backdrop.classList.add('open');
}

function closeCheckoutModal() {
  const modal = $('checkoutModal');
  const backdrop = $('modalBackdrop');
  if (modal) modal.classList.remove('open');
  if (backdrop && !$('cartDrawer').classList.contains('open') && !$('detailModal').classList.contains('open')) {
    backdrop.classList.remove('open');
  }
}

// =============================================================================
// 8. DISH DETAIL MODAL
// =============================================================================
function openDetailModal(dish) {
  const modal = $('detailModal');
  const backdrop = $('modalBackdrop');
  const content = $('detailModalContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="detail-grid">
      <div class="detail-img-box">
        <img src="${dish.img}" alt="${dish.name}" />
      </div>
      <div class="detail-info">
        <span class="wide" style="font-size: 11px; color: var(--gold-dark); letter-spacing: 0.16em; font-weight: 700;">${dish.category} · ${dish.tag}</span>
        <h3 style="margin-top: 6px;">${dish.name}</h3>
        <div class="detail-price tabular">${dish.price}</div>
        <p class="detail-desc">${dish.desc}</p>
        <div class="detail-specs">
          <div><strong>Prep Time:</strong> ${dish.prepTime}</div>
          <div><strong>Calories:</strong> ${dish.calories}</div>
          <div><strong>Artisan Style:</strong> Slow Crafted</div>
          <div><strong>Dietary:</strong> Premium Ingredients</div>
        </div>
        <button id="btnDetailAdd" class="cta-primary wide" style="width: 100%; justify-content: center;">
          Add to Cart · ${dish.price}
        </button>
      </div>
    </div>
  `;

  const btnAdd = $('btnDetailAdd');
  if (btnAdd) {
    btnAdd.addEventListener('click', () => {
      addToCart({
        id: dish.id,
        name: dish.name,
        price: dish.rawPrice,
        priceFormatted: dish.price,
        img: dish.img
      });
      closeDetailModal();
    });
  }

  modal.classList.add('open');
  if (backdrop) backdrop.classList.add('open');
}

function closeDetailModal() {
  const modal = $('detailModal');
  const backdrop = $('modalBackdrop');
  if (modal) modal.classList.remove('open');
  if (backdrop && !$('cartDrawer').classList.contains('open') && !$('checkoutModal').classList.contains('open')) {
    backdrop.classList.remove('open');
  }
}

// =============================================================================
// 9. SECTION 7: LIVE 5-STAGE ANIMATED ORDER TRACKING & SCOOTER SIMULATION
// =============================================================================
const TRACKING_STAGES = [
  { name: "Order Confirmed", time: "Just now", desc: "Kitchen received your order" },
  { name: "Food Preparing", time: "Est. 12 mins", desc: "Chef is slow-cooking with passion" },
  { name: "Food Packed", time: "Est. 20 mins", desc: "Sealed in gold-foil insulation" },
  { name: "Out for Delivery", time: "Est. 28 mins", desc: "Scooter courier en route" },
  { name: "Delivered", time: "Delivered!", desc: "Bon appétit! Enjoy your meal" }
];

let currentTrackingStep = 0; // 0 to 4
let currentOrderData = {
  orderId: "FC-84920-TN",
  customerName: "Valued Patron",
  hubName: "Food Chef Grand Kitchen — Nungambakkam",
  district: "Chennai"
};

function updateTrackingUI() {
  const idElem = $('trackingDisplayId');
  const statusElem = $('trackingStatusText');
  const hubElem = $('trackingHubText');
  const scooter = $('scooterVehicle');
  const progressLine = $('timelineProgressBar');

  if (idElem) idElem.textContent = currentOrderData.orderId;
  if (statusElem) statusElem.textContent = TRACKING_STAGES[currentTrackingStep].name;
  if (hubElem) hubElem.textContent = `Prepared by: ${currentOrderData.hubName}`;

  // Update Scooter position (0% to 85%)
  const percentage = (currentTrackingStep / 4) * 85;
  if (scooter) {
    scooter.style.left = `${percentage}%`;
  }

  // Update progress bar width
  const lineWidth = (currentTrackingStep / 4) * 80;
  if (progressLine) {
    progressLine.style.width = `${lineWidth}%`;
  }

  // Update node classes
  for (let i = 0; i < 5; i++) {
    const stepEl = $(`trackStep${i}`);
    if (stepEl) {
      stepEl.classList.remove('active', 'done');
      if (i < currentTrackingStep) {
        stepEl.classList.add('done');
      } else if (i === currentTrackingStep) {
        stepEl.classList.add('active');
      }
    }
  }
}

function startOrderTracking(orderData) {
  currentOrderData = orderData;
  currentTrackingStep = 0;
  updateTrackingUI();
}

function initOrderTracking() {
  const btnAdvance = $('btnAdvanceSim');
  const btnReset = $('btnResetSim');

  if (btnAdvance) {
    btnAdvance.addEventListener('click', () => {
      currentTrackingStep = Math.min(4, currentTrackingStep + 1);
      updateTrackingUI();
      showToast(`Tracking update: ${TRACKING_STAGES[currentTrackingStep].name}`);
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      currentTrackingStep = 0;
      updateTrackingUI();
      showToast('Simulation reset to Order Confirmed');
    });
  }

  updateTrackingUI();
}

// =============================================================================
// 10. TOAST NOTIFICATIONS
// =============================================================================
function showToast(message) {
  const container = $('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E6B800" stroke-width="2.2"><path d="M20 6 9 17l-5-5"/></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s, transform 0.3s';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

// =============================================================================
// 11. BOOTSTRAP APPLICATION
// =============================================================================
window.addEventListener('DOMContentLoaded', () => {
  initRunway();
  initCakeShowcase();
  initMenu();
  initCart();
  initCheckout();
  initOrderTracking();

  // Detail Modal Close Button
  const btnCloseDetail = $('btnCloseDetail');
  if (btnCloseDetail) btnCloseDetail.addEventListener('click', closeDetailModal);

  // Preload and dismiss wait curtain
  Promise.all(
    RUNWAY_DISHES.map(d => {
      const img = new Image();
      img.src = d.img;
      return img.decode().catch(() => {});
    })
  ).then(() => {
    return document.fonts ? document.fonts.ready : Promise.resolve();
  }).then(() => {
    const wait = $('wait');
    if (wait) wait.classList.add('gone');
    size();
    paint();
  });
});
