
const foods = [
  // PIZZA
  {id:1,name:"Margherita Pizza",category:"Pizza",price:199,desc:"Classic cheese and tomato.",image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=80"},
  {id:2,name:"Farmhouse Pizza",category:"Pizza",price:249,desc:"Loaded with fresh vegetables.",image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"},
  {id:3,name:"Paneer Tikka Pizza",category:"Pizza",price:269,desc:"Spicy paneer and cheese.",image:"https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80"},
  {id:4,name:"Corn Cheese Pizza",category:"Pizza",price:229,desc:"Sweet corn and extra cheese.",image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=80"},

  // BURGERS
  {id:5,name:"Classic Veg Burger",category:"Burgers",price:99,desc:"Crispy vegetable patty.",image:"https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"},
  {id:6,name:"Cheese Burger",category:"Burgers",price:129,desc:"Burger with melted cheese.",image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"},
  {id:7,name:"Paneer Burger",category:"Burgers",price:149,desc:"Spicy paneer burger.",image:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80"},
  {id:8,name:"Double Patty Burger",category:"Burgers",price:179,desc:"Double patty and tasty sauce.",image:"https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=600&q=80"},

  // INDIAN SNACKS
  {id:9,name:"Aloo Samosa",category:"Indian Snacks",price:20,desc:"Potato-filled crispy samosa.",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"},
  {id:10,name:"Paneer Samosa",category:"Indian Snacks",price:30,desc:"Spiced paneer filling.",image:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=600&q=80"},
  {id:11,name:"Pani Puri",category:"Indian Snacks",price:50,desc:"Tangy and crunchy street snack.",image:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80"},
  {id:12,name:"Bhel Puri",category:"Indian Snacks",price:60,desc:"Crunchy puffed rice mixture.",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"},
  {id:13,name:"Pav Bhaji",category:"Indian Snacks",price:90,desc:"Spiced vegetable mash and pav.",image:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80"},
  {id:14,name:"Paneer Roll",category:"Indian Snacks",price:89,desc:"Paneer wrap with fresh vegetables.",image:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"},

  // FRIES
  {id:15,name:"French Fries",category:"Fries",price:89,desc:"Golden crispy potato fries.",image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"},
  {id:16,name:"Peri Peri Fries",category:"Fries",price:109,desc:"Fries with spicy seasoning.",image:"https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&q=80"},
  {id:17,name:"Cheese Fries",category:"Fries",price:129,desc:"Fries topped with cheese.",image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"},
  {id:18,name:"Potato Wedges",category:"Fries",price:99,desc:"Seasoned crispy potato wedges.",image:"https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&q=80"},

  // BAKERY
  {id:19,name:"Veg Puff",category:"Bakery",price:25,desc:"Flaky pastry with veggie filling.",image:"https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=600&q=80"},
  {id:20,name:"Paneer Puff",category:"Bakery",price:35,desc:"Crispy puff with paneer.",image:"https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=600&q=80"},
  {id:21,name:"Veg Sandwich",category:"Bakery",price:79,desc:"Fresh vegetable sandwich.",image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"},
  {id:22,name:"Cheese Sandwich",category:"Bakery",price:99,desc:"Grilled sandwich with cheese.",image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"},

  // DESSERTS
  {id:23,name:"Chocolate Brownie",category:"Desserts",price:99,desc:"Rich chocolate brownie.",image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"},
  {id:24,name:"Chocolate Donut",category:"Desserts",price:69,desc:"Soft donut with chocolate glaze.",image:"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80"},
  {id:25,name:"Chocolate Cake",category:"Desserts",price:119,desc:"Delicious chocolate cake.",image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"},
  {id:26,name:"Ice Cream",category:"Desserts",price:79,desc:"Creamy and refreshing treat.",image:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"},

  // DRINKS
  {id:27,name:"Cold Coffee",category:"Drinks",price:99,desc:"Chilled creamy coffee.",image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80"},
  {id:28,name:"Fresh Orange Juice",category:"Drinks",price:79,desc:"Refreshing orange juice.",image:"https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80"},
  {id:29,name:"Chocolate Milkshake",category:"Drinks",price:119,desc:"Thick chocolate milkshake.",image:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"},
  {id:30,name:"Strawberry Milkshake",category:"Drinks",price:119,desc:"Sweet strawberry shake.",image:"https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80"},

  // MORE SNACKS
  {id:31,name:"Veg Momos",category:"Snacks",price:79,desc:"Steamed vegetable dumplings.",image:"https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80"},
  {id:32,name:"Masala Maggi",category:"Snacks",price:59,desc:"Hot and spicy masala noodles.",image:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"},
  {id:33,name:"Spring Rolls",category:"Snacks",price:89,desc:"Crispy vegetable spring rolls.",image:"https://images.unsplash.com/photo-1548507200-9a4d6f5a3b31?auto=format&fit=crop&w=600&q=80"},
  {id:34,name:"Onion Rings",category:"Snacks",price:79,desc:"Golden crispy onion rings.",image:"https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=600&q=80"}
];

const STORAGE_CART = "foodChefCart";
const STORAGE_ORDERS = "foodChefOrders";

let cart = loadData(STORAGE_CART, []);
let orders = loadData(STORAGE_ORDERS, []);
let activeCategory = "All";

const $ = id => document.getElementById(id);
const money = value => "₹" + Number(value).toLocaleString("en-IN");

function loadData(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function totalCart() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function itemCount() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function renderFoods() {
  const query = $("food-search").value.trim().toLowerCase();
  const sort = $("sort-food").value;

  let results = foods.filter(food => {
    const matchesCategory =
      activeCategory === "All" || food.category === activeCategory;
    const matchesSearch =
      food.name.toLowerCase().includes(query) ||
      food.category.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  if (sort === "low") results.sort((a,b) => a.price - b.price);
  if (sort === "high") results.sort((a,b) => b.price - a.price);
  if (sort === "name") results.sort((a,b) => a.name.localeCompare(b.name));

  $("food-items").innerHTML = results.length
    ? results.map(food => `
      <article class="food-card">
        <img src="${food.image}" alt="${food.name}" loading="lazy">
        <div class="food-info">
          <span class="food-category">${food.category}</span>
          <h3>${food.name}</h3>
          <p class="food-description">${food.desc}</p>
          <div class="food-rating">★ 4.8 <span>• Popular choice</span></div>
          <div class="food-bottom">
            <strong class="food-price">${money(food.price)}</strong>
            <button class="add-btn" data-add="${food.id}">+ Add to Cart</button>
          </div>
        </div>
      </article>
    `).join("")
    : '<p class="empty-message">No food found. Try another search.</p>';
}

function addToCart(id) {
  const food = foods.find(item => item.id === id);
  if (!food) return;

  const existing = cart.find(item => item.id === id);
  if (existing) existing.quantity++;
  else cart.push({...food, quantity:1});

  saveData(STORAGE_CART, cart);
  renderCart();
}

function changeQty(id, change) {
  const item = cart.find(food => food.id === id);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    cart = cart.filter(food => food.id !== id);
  }

  saveData(STORAGE_CART, cart);
  renderCart();
}

function removeItem(id) {
  cart = cart.filter(item => item.id !== id);
  saveData(STORAGE_CART, cart);
  renderCart();
}

function cartItemHTML(item, drawer = false) {
  return `
    <div class="${drawer ? "drawer-item" : "mini-cart-item"}">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <b>${item.name}</b>
        <small>${money(item.price)} × ${item.quantity}</small>
        ${drawer ? `
          <div class="qty-controls">
            <button data-minus="${item.id}">−</button>
            <strong>${item.quantity}</strong>
            <button data-plus="${item.id}">+</button>
            <button data-remove="${item.id}" aria-label="Remove item">🗑</button>
          </div>
        ` : `
          <div class="mini-qty">
            <button data-minus="${item.id}">−</button>
            ${item.quantity}
            <button data-plus="${item.id}">+</button>
          </div>
        `}
      </div>
      ${drawer ? "" : `<strong>${money(item.price * item.quantity)}</strong>`}
    </div>
  `;
}

function renderCart() {
  const count = itemCount();
  const total = money(totalCart());

  $("cart-count").textContent = count;
  $("side-count").textContent = count;
  $("side-total").textContent = total;
  $("drawer-total").textContent = total;
  $("checkout-total").textContent = total;

  $("side-cart-items").innerHTML = cart.length
    ? cart.map(item => cartItemHTML(item)).join("")
    : '<p class="empty-cart">Your cart is empty. Add your favourite food!</p>';

  $("drawer-items").innerHTML = cart.length
    ? cart.map(item => cartItemHTML(item, true)).join("")
    : '<p class="empty-cart">Your cart is empty. Explore our menu!</p>';

  $("checkout-summary").innerHTML = cart.length
    ? cart.map(item => `
      <div class="checkout-summary-item">
        <span>${item.name} × ${item.quantity}</span>
        <strong>${money(item.price * item.quantity)}</strong>
      </div>
    `).join("")
    : "Your cart is empty.";
}

function openCart() {
  $("cart-drawer").classList.add("show");
  $("cart-overlay").classList.add("show");
}

function closeCart() {
  $("cart-drawer").classList.remove("show");
  $("cart-overlay").classList.remove("show");
}

function goToCheckout() {
  if (!cart.length) {
    alert("Your cart is empty. Please add food first.");
    return;
  }
  closeCart();
  $("checkout").scrollIntoView({behavior:"smooth"});
}

function makeOrderId() {
  return "FC" + Date.now().toString().slice(-8);
}

const trackingStages = [
  {name:"Order Placed",icon:"✓",description:"Your order has been received."},
  {name:"Confirmed",icon:"☑",description:"Your demo order is confirmed."},
  {name:"Preparing",icon:"♨",description:"Your food is being prepared."},
  {name:"Out for Delivery",icon:"🛵",description:"Your order is on its way."},
  {name:"Delivered",icon:"🏠",description:"Your order has been delivered."}
];

function renderTracking(order) {
  if (!order) {
    $("tracking-result").innerHTML =
      '<div class="tracking-placeholder">Order not found. Please check your order ID.</div>';
    return;
  }

  const current = order.stage || 0;

  $("tracking-result").innerHTML = `
    <div class="tracking-card">
      <h3>Order Details – ${order.id}</h3>
      <div class="order-meta">
        Customer: ${escapeHTML(order.customer.name)}<br>
        Phone: ${escapeHTML(order.customer.phone)}<br>
        Delivery: ${escapeHTML(order.customer.address)}<br>
        ${order.customer.hotel ? "Hotel: " + escapeHTML(order.customer.hotel) + "<br>" : ""}
        District: ${escapeHTML(order.customer.district)}<br>
        City: ${escapeHTML(order.customer.city)} – ${escapeHTML(order.customer.pincode)}<br>
        Order date: ${new Date(order.createdAt).toLocaleString("en-IN")}
      </div>

      <div class="tracking-steps">
        ${trackingStages.map((stage,index) => `
          <div class="track-step ${index <= current ? "done" : ""}">
            <div class="step-icon">${stage.icon}</div>
            <b>${stage.name}</b>
            <small>${index < current ? "Completed" : index === current ? "Current status" : "Pending"}</small>
          </div>
        `).join("")}
      </div>

      <p><strong>Current Status:</strong> ${trackingStages[current].name}</p>
      <p class="order-meta">${trackingStages[current].description}</p>

      <div class="track-items">
        <h4>Items Ordered</h4>
        ${order.items.map(item => `
          <p>${escapeHTML(item.name)} × ${item.quantity} — ${money(item.price * item.quantity)}</p>
        `).join("")}
        <p><strong>Order Total: ${money(order.total)}</strong></p>
      </div>

      <p class="demo-note">Demo tracking status only. This is not a live delivery location.</p>
    </div>
  `;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  })[char]);
}

function renderHistory() {
  if (!orders.length) {
    $("order-history-list").textContent = "No orders yet.";
    return;
  }

  $("order-history-list").innerHTML = [...orders].reverse().map(order => `
    <div class="history-row">
      <div>
        <strong>${order.id}</strong><br>
        <span>${new Date(order.createdAt).toLocaleDateString("en-IN")} • ${money(order.total)}</span><br>
        <small>${trackingStages[order.stage || 0].name}</small>
      </div>
      <button data-track="${order.id}">View Details</button>
    </div>
  `).join("");
}

function placeOrder(event) {
  event.preventDefault();

  if (!cart.length) {
    alert("Your cart is empty. Add food before placing an order.");
    return;
  }

  const form = new FormData(event.target);
  const customer = {
    name:form.get("name").trim(),
    phone:form.get("phone").trim(),
    hotel:form.get("hotel").trim(),
    district:form.get("district"),
    city:form.get("city").trim(),
    pincode:form.get("pincode").trim(),
    address:form.get("address").trim()
  };

  const order = {
    id:makeOrderId(),
    customer,
    items:cart.map(item => ({...item})),
    total:totalCart(),
    createdAt:new Date().toISOString(),
    stage:0
  };

  orders.push(order);
  saveData(STORAGE_ORDERS, orders);

  cart = [];
  saveData(STORAGE_CART, cart);
  renderCart();
  renderHistory();
  renderTracking(order);

  $("tracking-id").value = order.id;
  event.target.reset();

  alert("Demo order created! Your order ID is " + order.id);
  $("tracking").scrollIntoView({behavior:"smooth"});
}

function findOrder() {
  const id = $("tracking-id").value.trim().toUpperCase();
  const order = orders.find(item => item.id.toUpperCase() === id);
  renderTracking(order);
}

function advanceDemoOrder(id) {
  const order = orders.find(item => item.id === id);
  if (!order) return;

  if (order.stage < trackingStages.length - 1) {
    order.stage++;
    saveData(STORAGE_ORDERS, orders);
    renderHistory();
    renderTracking(order);
  }
}

// Food card actions
$("food-items").addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(Number(button.dataset.add));
});

// Cart quantity actions
["side-cart-items","drawer-items"].forEach(containerId => {
  $(containerId).addEventListener("click", event => {
    const minus = event.target.closest("[data-minus]");
    const plus = event.target.closest("[data-plus]");
    const remove = event.target.closest("[data-remove]");

    if (minus) changeQty(Number(minus.dataset.minus),-1);
    if (plus) changeQty(Number(plus.dataset.plus),1);
    if (remove) removeItem(Number(remove.dataset.remove));
  });
});

// Category filters
$("categories").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;
  document.querySelectorAll(".category").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  renderFoods();
});

// Search in both search boxes
function searchFood(value) {
  $("food-search").value = value;
  renderFoods();
  $("menu").scrollIntoView({behavior:"smooth"});
}
$("food-search").addEventListener("input", () => renderFoods());
$("top-search").addEventListener("input", event => searchFood(event.target.value));
$("sort-food").addEventListener("change", renderFoods);

// Cart drawer
$("open-cart").addEventListener("click", openCart);
$("close-cart").addEventListener("click", closeCart);
$("cart-overlay").addEventListener("click", closeCart);
$("side-checkout").addEventListener("click", goToCheckout);
$("drawer-checkout").addEventListener("click", goToCheckout);
$("checkout-form").addEventListener("submit", placeOrder);

// Tracking
$("track-button").addEventListener("click", findOrder);
$("tracking-id").addEventListener("keydown", event => {
  if (event.key === "Enter") findOrder();
});

// Order history
$("order-history-list").addEventListener("click", event => {
  const button = event.target.closest("[data-track]");
  if (!button) return;

  const order = orders.find(item => item.id === button.dataset.track);
  $("tracking-id").value = button.dataset.track;
  renderTracking(order);
  $("tracking-result").scrollIntoView({behavior:"smooth"});
});

// Mobile navigation
$("mobile-menu").addEventListener("click", () => {
  $("navigation").classList.toggle("open");
});
$("navigation").querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => $("navigation").classList.remove("open"));
});

// Start the website
renderFoods();
renderCart();
renderHistory();
