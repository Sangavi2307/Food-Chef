
/* =========================================
   FOOD CHEF — ART DECO JAVASCRIPT
   ========================================= */

// FOOD DATABASE
// Add or edit your food items in this array.

const foods = [
  {
    id: 1,
    name: "Royal Veg Pizza",
    category: "Main Course",
    price: 199,
    desc: "Delicious pizza topped with fresh vegetables and cheese.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 2,
    name: "Classic Burger",
    category: "Main Course",
    price: 149,
    desc: "Juicy vegetable patty with fresh lettuce and cheese.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 3,
    name: "Creamy Pasta",
    category: "Main Course",
    price: 179,
    desc: "Rich and creamy pasta with delicious herbs.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 4,
    name: "Spring Rolls",
    category: "Snacks",
    price: 89,
    desc: "Crispy vegetable spring rolls with a tasty filling.",
    image: "https://images.unsplash.com/photo-1548507200-9a4d6f5a3b31?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 5,
    name: "French Fries",
    category: "Snacks",
    price: 79,
    desc: "Golden crispy fries seasoned to perfection.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 6,
    name: "Paneer Tikka",
    category: "Starters",
    price: 169,
    desc: "Soft paneer cubes marinated with aromatic spices.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 7,
    name: "Veg Manchurian",
    category: "Starters",
    price: 139,
    desc: "Crispy vegetable balls in a delicious Indo-Chinese sauce.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 8,
    name: "Chocolate Cake",
    category: "Desserts",
    price: 119,
    desc: "Rich chocolate cake with a soft and moist texture.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 9,
    name: "Ice Cream",
    category: "Desserts",
    price: 79,
    desc: "Smooth and creamy ice cream for a sweet finish.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 10,
    name: "Fresh Fruit Juice",
    category: "Drinks",
    price: 69,
    desc: "Refreshing seasonal fruit juice.",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 11,
    name: "Cold Coffee",
    category: "Drinks",
    price: 99,
    desc: "Chilled creamy coffee with a rich flavour.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 12,
    name: "Veg Fried Rice",
    category: "Main Course",
    price: 129,
    desc: "Flavourful fried rice with fresh vegetables.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 13,
    name: "Samosa",
    category: "Snacks",
    price: 35,
    desc: "Golden pastry filled with spiced potatoes.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 14,
    name: "Masala Dosa",
    category: "Main Course",
    price: 90,
    desc: "Crispy dosa served with potato masala and chutneys.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 15,
    name: "Gulab Jamun",
    category: "Desserts",
    price: 60,
    desc: "Soft sweet dumplings soaked in aromatic syrup.",
    image: "https://images.unsplash.com/photo-1666190092159-4c3c6b2f4e7c?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 16,
    name: "Veg Sandwich",
    category: "Snacks",
    price: 99,
    desc: "Freshly prepared sandwich with vegetables and cheese.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 17,
    name: "Tomato Soup",
    category: "Starters",
    price: 89,
    desc: "Warm and comforting tomato soup with herbs.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 18,
    name: "Lemon Mint Cooler",
    category: "Drinks",
    price: 59,
    desc: "Refreshing lemon and mint drink.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?auto=format&fit=crop&w=700&q=85"
  }
];

// STORAGE HELPERS

function loadStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.warn("Storage unavailable:", error);
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn("Could not save data:", error);
    showToast("Storage unavailable. Please try again.");
  }
}

// APP STATE

let cart = loadStorage("foodChefCart", []);
let orders = loadStorage("foodChefOrders", []);
let activeCategory = "All";
let searchTerm = "";
let toastTimer;

// ELEMENTS

const foodGrid = document.getElementById("foodGrid");
const categoryList = document.getElementById("categoryList");
const foodSearch = document.getElementById("foodSearch");
const emptyMessage = document.getElementById("emptyMessage");

const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");

const checkoutModal = document.getElementById("checkoutModal");
const checkoutForm = document.getElementById("checkoutForm");

const toast = document.getElementById("toast");

// FORMAT CURRENCY

function money(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}

// TOAST MESSAGE

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

// FOOD MENU

function renderFoods() {
  const filteredFoods = foods.filter(food => {
    const matchesCategory =
      activeCategory === "All" ||
      food.category === activeCategory;

    const matchesSearch =
      food.name.toLowerCase().includes(searchTerm) ||
      food.desc.toLowerCase().includes(searchTerm) ||
      food.category.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  foodGrid.innerHTML = "";

  emptyMessage.hidden = filteredFoods.length !== 0;

  filteredFoods.forEach((food, index) => {
    const card = document.createElement("article");

    card.className = "food-card";
    card.style.animationDelay = `${index * 70}ms`;

    card.innerHTML = `
      <div class="food-image-wrap">
        <span class="food-category">${food.category}</span>
        <img
          class="food-image"
          src="${food.image}"
          alt="${food.name}"
          loading="lazy"
        >
      </div>

      <div class="food-details">
        <h3>${food.name}</h3>
        <p>${food.desc}</p>

        <div class="food-bottom">
          <span class="food-price">${money(food.price)}</span>

          <button
            class="add-cart"
            data-add="${food.id}"
            aria-label="Add ${food.name} to cart"
          >
            + ADD TO CART
          </button>
        </div>
      </div>
    `;

    const image = card.querySelector("img");

    image.addEventListener("error", () => {
      image.src = "https://placehold.co/600x400/141414/d4af37?text=Food+Chef";
    }, { once: true });

    foodGrid.appendChild(card);
  });
}

// CATEGORY FILTER

categoryList.addEventListener("click", event => {
  const button = event.target.closest(".category-btn");

  if (!button) return;

  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
  activeCategory = button.dataset.category;

  renderFoods();
});

// SEARCH

foodSearch.addEventListener("input", event => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderFoods();
});

// ADD TO CART

function addToCart(id) {
  const food = foods.find(item => item.id === Number(id));

  if (!food) return;

  const existing = cart.find(item => item.id === food.id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      id: food.id,
      quantity: 1
    });
  }

  updateCart();
  showToast(food.name + " added to your cart!");
}

foodGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");

  if (!button) return;

  addToCart(button.dataset.add);
});

// CART CALCULATIONS

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getSubtotal() {
  return cart.reduce((sum, item) => {
    const food = foods.find(food => food.id === item.id);

    return sum + (food ? food.price * item.quantity : 0);
  }, 0);
}

function getDelivery() {
  return cart.length ? 30 : 0;
}

function getGrandTotal() {
  return getSubtotal() + getDelivery();
}

// UPDATE CART

function updateCart() {
  cart = cart.filter(item => {
    return foods.some(food => food.id === item.id) &&
      Number.isInteger(item.quantity) &&
      item.quantity > 0;
  });

  saveStorage("foodChefCart", cart);

  cartCount.textContent = getCartCount();

  const subtotal = getSubtotal();
  const delivery = getDelivery();

  document.getElementById("subtotal").textContent = money(subtotal);
  document.getElementById("delivery").textContent = money(delivery);
  document.getElementById("grandTotal").textContent =
    money(subtotal + delivery);

  document.getElementById("checkoutTotal").textContent =
    money(subtotal + delivery);

  document.getElementById("checkoutButton").disabled =
    cart.length === 0;

  renderCartItems();
}

// CART DISPLAY

function renderCartItems() {
  if (!cart.length) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <div style="font-size:40px;color:#d4af37">◇</div>
        <h3>Your cart is empty</h3>
        <p>Discover something delicious from our menu.</p>
      </div>
    `;
    return;
  }

  cartItems.innerHTML = "";

  cart.forEach(item => {
    const food = foods.find(f => f.id === item.id);

    if (!food) return;

    const row = document.createElement("div");

    row.className = "cart-item";

    row.innerHTML = `
      <img src="${food.image}" alt="${food.name}">

      <div>
        <h4>${food.name}</h4>
        <p>${money(food.price * item.quantity)}</p>

        <div class="quantity-controls">
          <button data-decrease="${food.id}" aria-label="Decrease quantity">−</button>
          <span>${item.quantity}</span>
          <button data-increase="${food.id}" aria-label="Increase quantity">+</button>
        </div>
      </div>

      <button class="quantity-controls remove-item"
        data-remove="${food.id}" aria-label="Remove ${food.name}">
        ×
      </button>
    `;

    const image = row.querySelector("img");

    image.addEventListener("error", () => {
      image.src = "https://placehold.co/150x150/141414/d4af37?text=Food";
    }, { once: true });

    cartItems.appendChild(row);
  });
}

// CART QUANTITY CONTROLS

cartItems.addEventListener("click", event => {
  const increase = event.target.closest("[data-increase]");
  const decrease = event.target.closest("[data-decrease]");
  const remove = event.target.closest("[data-remove]");

  if (increase) {
    const item = cart.find(i => i.id === Number(increase.dataset.increase));

    if (item) item.quantity++;
  }

  if (decrease) {
    const item = cart.find(i => i.id === Number(decrease.dataset.decrease));

    if (item) {
      item.quantity--;

      if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== item.id);
      }
    }
  }

  if (remove) {
    cart = cart.filter(i => i.id !== Number(remove.dataset.remove));
    showToast("Item removed from cart.");
  }

  updateCart();
});

// OPEN AND CLOSE CART

function openCart() {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("show");
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  document.getElementById("closeCart").focus();
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("show");
  cartDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

document.getElementById("cartButton").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

// CHECKOUT

function openCheckout() {
  if (!cart.length) {
    showToast("Please add food items first.");
    return;
  }

  closeCart();
  checkoutModal.classList.add("show");
  document.body.classList.add("no-scroll");

  document.getElementById("customerName").focus();
}

function closeCheckout() {
  checkoutModal.classList.remove("show");
  document.body.classList.remove("no-scroll");
}

document.getElementById("checkoutButton")
  .addEventListener("click", openCheckout);

document.getElementById("closeCheckout")
  .addEventListener("click", closeCheckout);

checkoutModal.addEventListener("click", event => {
  if (event.target === checkoutModal) closeCheckout();
});

// PLACE ORDER

checkoutForm.addEventListener("submit", event => {
  event.preventDefault();

  if (!cart.length) {
    showToast("Your cart is empty.");
    closeCheckout();
    return;
  }

  if (!checkoutForm.reportValidity()) return;

  const formData = new FormData(checkoutForm);

  const order = {
    orderId: "FC" + Date.now().toString().slice(-9),
    date: new Date().toLocaleString("en-IN"),
    customer: {
      name: formData.get("name").trim(),
      phone: formData.get("phone").trim(),
      address: formData.get("address").trim()
    },
    payment: formData.get("payment"),
    items: cart.map(item => {
      const food = foods.find(f => f.id === item.id);

      return {
        id: food.id,
        name: food.name,
        price: food.price,
        quantity: item.quantity
      };
    }),
    subtotal: getSubtotal(),
    delivery: getDelivery(),
    total: getGrandTotal(),
    status: "Order placed"
  };

  orders.unshift(order);
  saveStorage("foodChefOrders", orders);

  cart = [];
  updateCart();

  checkoutForm.reset();
  closeCheckout();

  showToast("Order placed successfully! ID: " + order.orderId);

  console.log("New Food Chef order:", order);
});

// KEYBOARD CONTROLS

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeCart();
    closeCheckout();
    closeMobileMenu();
  }
});

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function closeMobileMenu() {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMobileMenu);
});

document.getElementById("cartButton")
  .addEventListener("click", closeMobileMenu);

// CINEMATIC SCROLL ANIMATIONS

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

function observeRevealElements() {
  document.querySelectorAll(".reveal:not(.visible)").forEach(element => {
    observer.observe(element);
  });
}

observeRevealElements();

// PAGE INITIALIZATION

function initializeFoodChef() {
  renderFoods();
  updateCart();

  const loader = document.getElementById("pageLoader");

  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("hide"), 500);
  });

  // Fallback in case the page load event already fired.
  setTimeout(() => loader.classList.add("hide"), 1800);
}

initializeFoodChef();
