
const foods = [
  {id:1,name:"Spring Rolls",category:"Snacks",price:89,desc:"Crispy vegetable spring rolls, freshly prepared.",image:"https://images.unsplash.com/photo-1548507200-9a4d6f5a3b31?w=700"},
  {id:2,name:"French Fries",category:"Snacks",price:89,desc:"Golden crispy fries with delicious seasoning.",image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700"},
  {id:3,name:"Chicken Wings",category:"Snacks",price:189,desc:"Spicy chicken wings with a crispy finish.",image:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=700"},
  {id:4,name:"Veg Pizza",category:"Pizza",price:199,desc:"Fresh vegetables, cheese and delicious pizza sauce.",image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700"},
  {id:5,name:"Chicken Pizza",category:"Pizza",price:249,desc:"Chicken, melted cheese and a flavourful crust.",image:"https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=700"},
  {id:6,name:"Classic Burger",category:"Burgers",price:129,desc:"A delicious burger with fresh lettuce and sauce.",image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700"},
  {id:7,name:"Cheese Burger",category:"Burgers",price:159,desc:"A juicy burger filled with melted cheese.",image:"https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=700"},
  {id:8,name:"Veg Fried Rice",category:"Rice",price:120,desc:"Hot fried rice tossed with fresh vegetables.",image:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=700"},
  {id:9,name:"Chicken Fried Rice",category:"Rice",price:160,desc:"Classic fried rice with tender chicken.",image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=700"},
  {id:10,name:"Chicken Biryani",category:"Rice",price:190,desc:"Aromatic rice cooked with delicious spices.",image:"https://images.unsplash.com/photo-1563379091339-03246963d96c?w=700"},
  {id:11,name:"Masala Dosa",category:"South Indian",price:80,desc:"Crispy dosa with a spiced potato filling.",image:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=700"},
  {id:12,name:"Idli",category:"South Indian",price:40,desc:"Soft steamed idlis served with chutney.",image:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=700"},
  {id:13,name:"Medu Vada",category:"South Indian",price:50,desc:"Golden and crispy traditional lentil fritters.",image:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=700"},
  {id:14,name:"Chocolate Cake",category:"Desserts",price:110,desc:"Rich chocolate cake for sweet moments.",image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700"},
  {id:15,name:"Brownie",category:"Desserts",price:90,desc:"Soft chocolate brownie with a rich centre.",image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700"},
  {id:16,name:"Fresh Lime Juice",category:"Drinks",price:45,desc:"A refreshing lime drink served chilled.",image:"https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=700"},
  {id:17,name:"Cold Coffee",category:"Drinks",price:90,desc:"Creamy chilled coffee for coffee lovers.",image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700"},
  {id:18,name:"Pasta",category:"Pasta",price:160,desc:"Delicious pasta tossed with herbs and sauce.",image:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700"}
];

const districts = [
  "Ariyalur","Chengalpattu","Chennai","Coimbatore","Cuddalore",
  "Dharmapuri","Dindigul","Erode","Kallakurichi","Kancheepuram",
  "Kanniyakumari","Karur","Krishnagiri","Madurai","Mayiladuthurai",
  "Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai",
  "Ramanathapuram","Ranipet","Salem","Sivaganga","Tenkasi",
  "Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli",
  "Tirupathur","Tiruppur","Tiruvallur","Tiruvannamalai",
  "Tiruvarur","Vellore","Viluppuram","Virudhunagar"
];

const readStorage = (key) => {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
};

let cart = readStorage("foodChefCart");
let orders = readStorage("foodChefOrders");
let activeCategory = "All";
let customerDetails = null;

const $ = (id) => document.getElementById(id);

function saveCart() {
  localStorage.setItem("foodChefCart", JSON.stringify(cart));
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#039;"
  })[char]);
}

/* MOBILE NAVIGATION */
const hamburger = $("hamburger");
const mobileMenu = $("mobileMenu");

function closeMobileMenu() {
  hamburger.classList.remove("active");
  mobileMenu.classList.remove("open");
  hamburger.setAttribute("aria-expanded", "false");
  hamburger.setAttribute("aria-label", "Open menu");
}

hamburger.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  hamburger.classList.toggle("active", isOpen);
  hamburger.setAttribute("aria-expanded", String(isOpen));
  hamburger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMobileMenu);
});

/* TYPEWRITER INTRO */
const introText =
  "Glad you stopped in. Good taste tends to find us. Now, what are you craving?";

let letterIndex = 0;

function startTypewriter() {
  const target = $("typewriter");
  const cursor = $("typingCursor");

  const typing = setInterval(() => {
    target.textContent = introText.slice(0, letterIndex + 1);
    letterIndex++;

    if (letterIndex >= introText.length) {
      clearInterval(typing);
      cursor.style.display = "none";
    }
  }, 38);
}

setTimeout(startTypewriter, 600);

/* ACTION BUTTONS APPEAR INDEPENDENTLY */
setTimeout(() => {
  $("heroActions").classList.add("visible");
}, 400);

/* COPY EMAIL */
$("copyEmail").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("hello@foodchef.com");
    showToast("Email address copied!");
  } catch {
    showToast("Email: hello@foodchef.com");
  }
});

/* MOUSE-CONTROLLED VIDEO SCRUBBING */
const video = $("heroVideo");
const SENSITIVITY = 0.8;

let previousX = null;
let targetTime = 0;
let isSeeking = false;

video.addEventListener("loadedmetadata", () => {
  targetTime = video.currentTime || 0;
});

function seekVideo() {
  if (!video.duration || !Number.isFinite(video.duration)) return;
  if (isSeeking) return;

  const safeTarget = Math.max(0, Math.min(video.duration, targetTime));

  if (Math.abs(video.currentTime - safeTarget) < 0.04) return;

  isSeeking = true;

  try {
    video.currentTime = safeTarget;
  } catch {
    isSeeking = false;
  }
}

video.addEventListener("seeked", () => {
  isSeeking = false;

  if (Math.abs(video.currentTime - targetTime) > 0.06) {
    seekVideo();
  }
});

window.addEventListener("mousemove", (event) => {
  if (!video.duration || !Number.isFinite(video.duration)) return;

  if (previousX === null) {
    previousX = event.clientX;
    return;
  }

  const delta = event.clientX - previousX;
  previousX = event.clientX;

  targetTime +=
    (delta / Math.max(window.innerWidth, 1)) *
    SENSITIVITY *
    video.duration;

  targetTime = Math.max(0, Math.min(video.duration, targetTime));
  seekVideo();
});

/* FOOD DISTRICTS */
function loadDistricts() {
  const select = $("district");

  districts.forEach(district => {
    const option = document.createElement("option");
    option.value = district;
    option.textContent = district;
    select.appendChild(option);
  });
}

/* FOOD CATEGORIES */
function loadCategories() {
  const categories = ["All", ...new Set(foods.map(food => food.category))];

  $("categoryList").innerHTML = categories.map(category => `
    <button type="button"
      class="category-btn ${category === activeCategory ? "active" : ""}"
      data-category="${escapeHTML(category)}">
      ${escapeHTML(category)}
    </button>
  `).join("");

  $("categoryList").querySelectorAll("[data-category]").forEach(button => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      loadCategories();
      renderFoods();
    });
  });
}

/* FOOD MENU */
function renderFoods() {
  const searchTerm = $("searchInput").value.trim().toLowerCase();

  let filtered = foods.filter(food => {
    const categoryMatch =
      activeCategory === "All" || food.category === activeCategory;

    const searchMatch =
      food.name.toLowerCase().includes(searchTerm) ||
      food.category.toLowerCase().includes(searchTerm) ||
      food.desc.toLowerCase().includes(searchTerm);

    return categoryMatch && searchMatch;
  });

  const sort = $("sortSelect").value;

  if (sort === "low") filtered.sort((a,b) => a.price - b.price);
  if (sort === "high") filtered.sort((a,b) => b.price - a.price);
  if (sort === "az") filtered.sort((a,b) => a.name.localeCompare(b.name));

  $("emptyMessage").hidden = filtered.length > 0;

  $("foodGrid").innerHTML = filtered.map(food => `
    <article class="food-card">
      <div class="food-visual">
        <img src="${food.image}" alt="${escapeHTML(food.name)}" loading="lazy">
        <span class="food-steam"></span>
        <span class="food-steam two"></span>
        <span class="food-steam three"></span>
        <span class="food-heat"></span>
        <span class="sizzle one"></span>
        <span class="sizzle two"></span>
        <span class="sizzle three"></span>
        <span class="food-tag">✳ ${escapeHTML(food.category.toUpperCase())}</span>
      </div>
      <div class="food-info">
        <h3>${escapeHTML(food.name)}</h3>
        <p>${escapeHTML(food.desc)}</p>
        <div class="food-bottom">
          <span class="food-price">₹${food.price}</span>
          <button type="button" class="add-btn" data-add="${food.id}">
            + ADD TO CART
          </button>
        </div>
      </div>
    </article>
  `).join("");

  $("foodGrid").querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => {
      img.style.display = "none";
      img.parentElement.style.background =
        "radial-gradient(circle, #bd8a2e, #38280f)";

      const fallback = document.createElement("span");
      fallback.textContent = "🍽️";
      fallback.style.cssText =
        "position:absolute;inset:0;display:grid;place-items:center;font-size:65px";

      img.parentElement.appendChild(fallback);
    }, { once: true });
  });

  $("foodGrid").querySelectorAll("[data-add]").forEach(button => {
    button.addEventListener("click", () => {
      addToCart(Number(button.dataset.add));
    });
  });
}

function addToCart(id) {
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ id, quantity: 1 });
  }

  saveCart();
  renderCart();
  showToast("Delicious choice! Added to your basket.");
}

/* CART */
function changeQuantity(id, amount) {
  const item = cart.find(entry => entry.id === id);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(entry => entry.id !== id);
  }

  saveCart();
  renderCart();
}

function renderCart() {
  $("cartItems").innerHTML = "";
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  let total = 0;
  $("cartItems").innerHTML = cart.map(item => {
    const food = foods.find(entry => entry.id === item.id);
    if (!food) return "";

    total += food.price * item.quantity;

    return `
      <div class="cart-row">
        <div>
          <h4>${escapeHTML(food.name)}</h4>
          <small>₹${food.price} each · ₹${food.price * item.quantity} total</small>
        </div>
        <div class="quantity-controls">
          <button type="button" data-minus="${food.id}" aria-label="Decrease">−</button>
          <strong>${item.quantity}</strong>
          <button type="button" data-plus="${food.id}" aria-label="Increase">+</button>
        </div>
      </div>
    `;
  }).join("");

  if (cart.length === 0) {
    $("cartItems").innerHTML =
      '<p class="empty-history">Your basket is empty. Explore the menu and add something delicious!</p>';
  }

  $("cartTotal").textContent = `₹${total}`;
  $("cartCount")?.replaceChildren(document.createTextNode(count));

  $("cartItems").querySelectorAll("[data-minus]").forEach(button => {
    button.addEventListener("click", () =>
      changeQuantity(Number(button.dataset.minus), -1)
    );
  });

  $("cartItems").querySelectorAll("[data-plus]").forEach(button => {
    button.addEventListener("click", () =>
      changeQuantity(Number(button.dataset.plus), 1)
    );
  });
}

/* CUSTOMER DETAILS */
$("customerForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = $("customerName").value.trim();
  const phone = $("phone").value.trim();
  const district = $("district").value;
  const hotel = $("hotel").value.trim();
  const address = $("address").value.trim();

  if (!/^[6-9]\d{9}$/.test(phone)) {
    $("formMessage").style.color = "#b33b2e";
    $("formMessage").textContent =
      "Please enter a valid 10-digit Indian mobile number.";
    return;
  }

  customerDetails = { name, phone, district, hotel, address };

  $("formMessage").style.color = "#39804a";
  $("formMessage").textContent =
    "Your delivery details have been saved successfully!";

  showToast("Delivery details saved!");
});

/* CHECKOUT */
$("checkoutBtn").addEventListener("click", () => {
  const message = $("checkoutMessage");

  if (cart.length === 0) {
    message.style.color = "#b33b2e";
    message.textContent = "Your basket is empty. Add food first.";
    return;
  }

  if (!customerDetails) {
    message.style.color = "#b33b2e";
    message.textContent = "Please save your delivery details first.";
    $("order").scrollIntoView({ behavior: "smooth" });
    return;
  }

  const items = cart.map(item => {
    const food = foods.find(entry => entry.id === item.id);

    return {
      name: food.name,
      price: food.price,
      quantity: item.quantity
    };
  });

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  const order = {
    orderId: "FC" + Date.now().toString().slice(-7),
    date: new Date().toLocaleString("en-IN"),
    customer: { ...customerDetails },
    items,
    total
  };

  orders.unshift(order);
  localStorage.setItem("foodChefOrders", JSON.stringify(orders));

  cart = [];
  saveCart();
  renderCart();
  renderOrders();

  message.style.color = "#39804a";
  message.textContent =
    `Demo order ${order.orderId} saved successfully!`;

  showToast("Your demo order has been placed!");
  $("orders").scrollIntoView({ behavior: "smooth" });
});

/* ORDER HISTORY */
function renderOrders() {
  if (orders.length === 0) {
    $("orderHistory").innerHTML =
      '<p class="empty-history">No orders yet. Your orders will appear here.</p>';
    return;
  }

  $("orderHistory").innerHTML = orders.map(order => `
    <article class="history-card">
      <strong>Order ${escapeHTML(order.orderId)}</strong><br>
      ${escapeHTML(order.date)}<br>
      Customer: ${escapeHTML(order.customer.name)}<br>
      District: ${escapeHTML(order.customer.district)}<br>
      Restaurant: ${escapeHTML(order.customer.hotel)}<br>
      Items: ${order.items.map(item =>
        `${escapeHTML(item.name)} × ${item.quantity}`
      ).join(", ")}<br>
      <strong>Total: ₹${order.total}</strong>
    </article>
  `).join("");
}

/* SEARCH AND SORT */
$("searchInput").addEventListener("input", renderFoods);
$("sortSelect").addEventListener("change", renderFoods);

/* START WEBSITE */
$("year").textContent = new Date().getFullYear();

loadDistricts();
loadCategories();
renderFoods();
renderCart();
renderOrders();
