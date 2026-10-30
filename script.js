
const foods = [
  {id:1,name:"Margherita Pizza",category:"Pizza",price:199,desc:"Classic cheese and tomato.",image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=80"},
  {id:2,name:"Farmhouse Pizza",category:"Pizza",price:249,desc:"Loaded with fresh vegetables.",image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"},
  {id:3,name:"Paneer Tikka Pizza",category:"Pizza",price:269,desc:"Spicy paneer and cheese.",image:"https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80"},
  {id:4,name:"Corn Cheese Pizza",category:"Pizza",price:229,desc:"Sweet corn and extra cheese.",image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=80"},
  {id:5,name:"Classic Veg Burger",category:"Burgers",price:99,desc:"Crispy vegetable patty.",image:"https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"},
  {id:6,name:"Cheese Burger",category:"Burgers",price:129,desc:"Burger with melted cheese.",image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"},
  {id:7,name:"Paneer Burger",category:"Burgers",price:149,desc:"Spicy paneer burger.",image:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80"},
  {id:8,name:"Double Patty Burger",category:"Burgers",price:179,desc:"Double patty and tasty sauce.",image:"https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=600&q=80"},
  {id:9,name:"Aloo Samosa",category:"Indian Snacks",price:20,desc:"Potato-filled crispy samosa.",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"},
  {id:10,name:"Paneer Samosa",category:"Indian Snacks",price:30,desc:"Spiced paneer filling.",image:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=600&q=80"},
  {id:11,name:"Pani Puri",category:"Indian Snacks",price:50,desc:"Tangy and crunchy street snack.",image:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80"},
  {id:12,name:"Bhel Puri",category:"Indian Snacks",price:60,desc:"Crunchy puffed rice mixture.",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"},
  {id:13,name:"Pav Bhaji",category:"Indian Snacks",price:90,desc:"Spiced vegetable mash and pav.",image:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80"},
  {id:14,name:"Paneer Roll",category:"Indian Snacks",price:89,desc:"Paneer wrap with vegetables.",image:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"},
  {id:15,name:"French Fries",category:"Fries",price:89,desc:"Golden crispy potato fries.",image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"},
  {id:16,name:"Peri Peri Fries",category:"Fries",price:109,desc:"Fries with spicy seasoning.",image:"https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&q=80"},
  {id:17,name:"Cheese Fries",category:"Fries",price:129,desc:"Fries topped with cheese.",image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"},
  {id:18,name:"Potato Wedges",category:"Fries",price:99,desc:"Seasoned crispy potato wedges.",image:"https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&q=80"},
  {id:19,name:"Veg Puff",category:"Bakery",price:25,desc:"Flaky pastry with veggie filling.",image:"https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=600&q=80"},
  {id:20,name:"Paneer Puff",category:"Bakery",price:35,desc:"Crispy puff with paneer.",image:"https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=600&q=80"},
  {id:21,name:"Veg Sandwich",category:"Bakery",price:79,desc:"Fresh vegetable sandwich.",image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"},
  {id:22,name:"Cheese Sandwich",category:"Bakery",price:99,desc:"Grilled sandwich with cheese.",image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"},
  {id:23,name:"Chocolate Brownie",category:"Desserts",price:99,desc:"Rich chocolate brownie.",image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"},
  {id:24,name:"Chocolate Donut",category:"Desserts",price:69,desc:"Soft donut with chocolate glaze.",image:"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80"},
  {id:25,name:"Chocolate Cake",category:"Desserts",price:119,desc:"Delicious chocolate cake.",image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"},
  {id:26,name:"Ice Cream",category:"Desserts",price:79,desc:"Creamy and refreshing treat.",image:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"},
  {id:27,name:"Cold Coffee",category:"Drinks",price:99,desc:"Chilled creamy coffee.",image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80"},
  {id:28,name:"Fresh Orange Juice",category:"Drinks",price:79,desc:"Refreshing orange juice.",image:"https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80"},
  {id:29,name:"Chocolate Milkshake",category:"Drinks",price:119,desc:"Thick chocolate milkshake.",image:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"},
  {id:30,name:"Strawberry Milkshake",category:"Drinks",price:119,desc:"Sweet strawberry shake.",image:"https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80"},
  {id:31,name:"Veg Momos",category:"Snacks",price:79,desc:"Steamed vegetable dumplings.",image:"https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80"},
  {id:32,name:"Masala Maggi",category:"Snacks",price:59,desc:"Hot and spicy masala noodles.",image:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"},
  {id:33,name:"Spring Rolls",category:"Snacks",price:89,desc:"Crispy vegetable spring rolls.",image:"https://images.unsplash.com/photo-1548507200-9a4d6f5a3b31?auto=format&fit=crop&w=600&q=80"},
  {id:34,name:"Onion Rings",category:"Snacks",price:79,desc:"Golden crispy onion rings.",image:"https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=600&q=80"}
];

const CART_KEY = "foodChefCart";
const ORDERS_KEY = "foodChefOrders";

const $ = id => document.getElementById(id);
const money = amount => "₹" + Number(amount).toLocaleString("en-IN");

function readStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

let cart = readStorage(CART_KEY);
let orders = readStorage(ORDERS_KEY);
let activeCategory = "All";

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function saveOrders() {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

function cartCount() {
  return cart.reduce((sum,item) => sum + item.quantity,0);
}

function cartTotal() {
  return cart.reduce((sum,item) => sum + item.price * item.quantity,0);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  })[char]);
}

function renderFoods() {
  const query = $("food-search").value.trim().toLowerCase();
  const sort = $("sort-food").value;

  let list = foods.filter(food => {
    const categoryMatch = activeCategory === "All" || food.category === activeCategory;
    const searchMatch = (food.name + " " + food.category).toLowerCase().includes(query);
    return categoryMatch && searchMatch;
  });

  if (sort === "low") list.sort((a,b) => a.price - b.price);
  if (sort === "high") list.sort((a,b) => b.price - a.price);
  if (sort === "name") list.sort((a,b) => a.name.localeCompare(b.name));

  $("food-items").innerHTML = list.length ? list.map(food => `
    <article class="food-card">
      <img src="${food.image}" alt="${escapeHTML(food.name)}" loading="lazy">
      <div class="food-info">
        <span class="food-category">${food.category}</span>
        <h3>${escapeHTML(food.name)}</h3>
        <p class="food-description">${escapeHTML(food.desc)}</p>
        <div class="food-rating">★ 4.8 <span>• Popular choice</span></div>
        <div class="food-bottom">
          <strong class="food-price">${money(food.price)}</strong>
          <button class="add-btn" data-add="${food.id}">+ Add to Cart</button>
        </div>
      </div>
    </article>
  `).join("") : '<p class="empty-message">No food found. Try another search.</p>';
}

function addToCart(id) {
  const food = foods.find(item => item.id === id);
  if (!food) return;

  const existing = cart.find(item => item.id === id);
  if (existing) existing.quantity++;
  else cart.push({...food,quantity:1});

  saveCart();
  renderCart();
}

function changeQuantity(id, amount) {
  const item = cart.find(food => food.id === id);
  if (!item) return;

  item.quantity += amount;
  if (item.quantity <= 0) cart = cart.filter(food => food.id !== id);

  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
}

function renderCart() {
  const count = cartCount();
  const total = money(cartTotal());

  $("cart-count").textContent = count;
  $("side-count").textContent = count;
  $("side-total").textContent = total;
  $("drawer-total").textContent = total;
  $("checkout-total").textContent = total;

  $("drawer-items").innerHTML = cart.length ? cart.map(item => `
    <div class="drawer-item">
      <img src="${item.image}" alt="${escapeHTML(item.name)}">
      <div>
        <b>${escapeHTML(item.name)}</b>
        <small>${money(item.price)} each</small>
        <div class="qty-controls">
          <button data-minus="${item.id}">−</button>
          <strong>${item.quantity}</strong>
          <button data-plus="${item.id}">+</button>
          <button data-remove="${item.id}" aria-label="Remove item">🗑</button>
        </div>
      </div>
    </div>
  `).join("") : '<p class="empty-cart">Your cart is empty. Explore our menu!</p>';

  $("checkout-summary").innerHTML = cart.length ? cart.map(item => `
    <div class="checkout-summary-item">
      <span>${escapeHTML(item.name)} × ${item.quantity}</span>
      <strong>${money(item.price * item.quantity)}</strong>
    </div>
  `).join("") : "<p>Your cart is empty.</p>";
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

const stages = [
  {name:"Order Placed",description:"Your demo order has been received.",icon:"✓"},
  {name:"Confirmed",description:"Your demo order is confirmed.",icon:"☑"},
  {name:"Preparing",description:"Your food is being prepared.",icon:"♨"},
  {name:"Out for Delivery",description:"Your order is on its way.",icon:"🛵"},
  {name:"Delivered",description:"Your demo order is marked delivered.",icon:"🏠"}
];

function renderTracking(order) {
  if (!order) {
    $("tracking-result").innerHTML = '<p class="tracking-placeholder">Order not found. Please check your order ID.</p>';
    return;
  }

  const stage = Math.min(order.stage || 0, stages.length - 1);

  $("tracking-result").innerHTML = `
    <div class="tracking-card">
      <h3>Order Details — ${escapeHTML(order.id)}</h3>
      <div class="order-meta">
        <b>Customer:</b> ${escapeHTML(order.customer.name)}<br>
        <b>Phone:</b> ${escapeHTML(order.customer.phone)}<br>
        <b>Delivery address:</b> ${escapeHTML(order.customer.address)}<br>
        <b>Hotel / Building:</b> ${escapeHTML(order.customer.hotel || "Not provided")}<br>
        <b>District:</b> ${escapeHTML(order.customer.district)}<br>
        <b>City:</b> ${escapeHTML(order.customer.city)}<br>
        <b>PIN Code:</b> ${escapeHTML(order.customer.pincode)}<br>
        <b>Order date:</b> ${new Date(order.createdAt).toLocaleString("en-IN")}
      </div>
      <div class="tracking-steps">
        ${stages.map((item,index) => `
          <div class="track-step ${index <= stage ? "done" : ""}">
            <div class="step-icon">${item.icon}</div>
            <b>${item.name}</b>
            <small>${index < stage ? "Completed" : index === stage ? "Current" : "Pending"}</small>
          </div>
        `).join("")}
      </div>
      <p><b>Current status:</b> ${stages[stage].name}</p>
      <p class="order-meta">${stages[stage].description}</p>
      <div class="track-items">
        <h4>Items Ordered</h4>
        ${order.items.map(item => `
          <p>${escapeHTML(item.name)} × ${item.quantity} — ${money(item.price * item.quantity)}</p>
        `).join("")}
        <p><b>Order Total: ${money(order.total)}</b></p>
      </div>
      <p class="demo-note">Demo tracking only. This is not a live delivery location.</p>
    </div>
  `;
}

function renderHistory() {
  $("order-history-list").innerHTML = orders.length ? [...orders].reverse().map(order => `
    <div class="history-row">
      <div>
        <b>${escapeHTML(order.id)}</b><br>
        <span>${new Date(order.createdAt).toLocaleDateString("en-IN")} • ${money(order.total)}</span><br>
        <small>${stages[Math.min(order.stage || 0, stages.length - 1)].name}</small>
      </div>
      <button data-view-order="${escapeHTML(order.id)}">View Details</button>
    </div>
  `).join("") : "No orders yet.";
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
    id:"FC" + Date.now().toString().slice(-8),
    customer,
    items:cart.map(item => ({...item})),
    total:cartTotal(),
    createdAt:new Date().toISOString(),
    stage:0
  };

  orders.push(order);
  saveOrders();

  cart = [];
  saveCart();
  renderCart();
  renderHistory();
  renderTracking(order);

  $("tracking-id").value = order.id;
  event.target.reset();

  alert("Your demo order was created! Order ID: " + order.id);
  $("tracking").scrollIntoView({behavior:"smooth"});
}

function findOrder() {
  const id = $("tracking-id").value.trim().toUpperCase();
  const order = orders.find(item => item.id.toUpperCase() === id);
  renderTracking(order);
}

// Add food to cart
$("food-items").addEventListener("click",event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(Number(button.dataset.add));
});

// Cart quantity and remove buttons
$("drawer-items").addEventListener("click",event => {
  const minus = event.target.closest("[data-minus]");
  const plus = event.target.closest("[data-plus]");
  const remove = event.target.closest("[data-remove]");

  if (minus) changeQuantity(Number(minus.dataset.minus),-1);
  if (plus) changeQuantity(Number(plus.dataset.plus),1);
  if (remove) removeFromCart(Number(remove.dataset.remove));
});

// Category filters
$("categories").addEventListener("click",event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;
  document.querySelectorAll(".category").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  renderFoods();
});

// Search and sort
$("food-search").addEventListener("input",renderFoods);
$("top-search").addEventListener("input",() => {
  $("food-search").value = $("top-search").value;
  renderFoods();
  $("menu").scrollIntoView({behavior:"smooth"});
});
$("sort-food").addEventListener("change",renderFoods);

// Cart drawer controls
$("open-cart").addEventListener("click",openCart);
$("close-cart").addEventListener("click",closeCart);
$("cart-overlay").addEventListener("click",closeCart);
$("drawer-checkout").addEventListener("click",goToCheckout);

// Checkout and tracking
$("checkout-form").addEventListener("submit",placeOrder);
$("track-button").addEventListener("click",findOrder);
$("tracking-id").addEventListener("keydown",event => {
  if (event.key === "Enter") findOrder();
});

// Previous orders
$("order-history-list").addEventListener("click",event => {
  const button = event.target.closest("[data-view-order]");
  if (!button) return;

  const order = orders.find(item => item.id === button.dataset.viewOrder);
  if (!order) return;

  $("tracking-id").value = order.id;
  renderTracking(order);
  $("tracking").scrollIntoView({behavior:"smooth"});
});

// Mobile menu
$("mobile-menu").addEventListener("click",() => {
  $("navigation").classList.toggle("open");
});

$("navigation").querySelectorAll("a").forEach(link => {
  link.addEventListener("click",() => $("navigation").classList.remove("open"));
});

// Initial display
renderFoods();
renderCart();
renderHistory();
