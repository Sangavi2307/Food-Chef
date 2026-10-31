/* ================= Food Chef – complete script ================= */
const U = id => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`;
// [id, name, category, price, description, unsplash photo id]
const foods = [
  [1,"Margherita Pizza","Pizza",199,"Classic cheese and tomato.","1579751626657-72bc17010498"],
  [2,"Farmhouse Pizza","Pizza",249,"Loaded with fresh vegetables.","1513104890138-7c749659a591"],
  [3,"Paneer Tikka Pizza","Pizza",269,"Spicy paneer and cheese.","1571407970349-bc81e7e96d47"],
  [4,"Corn Cheese Pizza","Pizza",229,"Sweet corn and extra cheese.","1579751626657-72bc17010498"],
  [5,"Classic Veg Burger","Burgers",99,"Crispy vegetable patty.","1550547660-d9450f859349"],
  [6,"Cheese Burger","Burgers",129,"Burger with melted cheese.","1568901346375-23c9450c58cd"],
  [7,"Paneer Burger","Burgers",149,"Spicy paneer burger.","1571091718767-18b5b1457add"],
  [9,"Aloo Samosa","Indian Snacks",20,"Potato-filled crispy samosa.","1601050690597-df0568f70950"],
  [10,"Paneer Samosa","Indian Snacks",30,"Spiced paneer filling.","1601050690117-94f5f6fa8bd7"],
  [11,"Pani Puri","Indian Snacks",50,"Tangy and crunchy street snack.","1604908176997-125f25cc6f3d"],
  [12,"Bhel Puri","Indian Snacks",60,"Crunchy puffed rice mixture.","1601050690597-df0568f70950"],
  [13,"Pav Bhaji","Indian Snacks",90,"Spiced vegetable mash and pav.","1606491956689-2ea866880c84"],
  [14,"Paneer Roll","Indian Snacks",89,"Paneer wrap with vegetables.","1626700051175-6818013e1d4f"],
  [15,"French Fries","Fries",89,"Golden crispy potato fries.","1573080496219-bb080dd4f877"],
  [16,"Peri Peri Fries","Fries",109,"Fries with spicy seasoning.","1630384060421-cb20d0e0649d"],
  [17,"Cheese Fries","Fries",129,"Fries topped with cheese.","1573080496219-bb080dd4f877"],
  [18,"Potato Wedges","Fries",99,"Seasoned crispy potato wedges.","1630384060421-cb20d0e0649d"],
  [19,"Veg Puff","Bakery",25,"Flaky pastry with veggie filling.","1623334044303-241021148842"],
  [20,"Paneer Puff","Bakery",35,"Crispy puff with paneer.","1623334044303-241021148842"],
  [21,"Veg Sandwich","Bakery",79,"Fresh vegetable sandwich.","1528735602780-2552fd46c7af"],
  [22,"Cheese Sandwich","Bakery",99,"Grilled sandwich with cheese.","1528735602780-2552fd46c7af"],
  [23,"Chocolate Brownie","Desserts",99,"Rich chocolate brownie.","1606313564200-e75d5e30476c"],
  [24,"Chocolate Donut","Desserts",69,"Soft donut with chocolate glaze.","1551024506-0bccd828d307"],
  [25,"Chocolate Cake","Desserts",119,"Delicious chocolate cake.","1578985545062-69928b1d9587"],
  [26,"Ice Cream","Desserts",79,"Creamy and refreshing treat.","1563805042-7684c019e1cb"],
  [27,"Cold Coffee","Drinks",99,"Chilled creamy coffee.","1461023058943-07fcbe16d735"],
  [28,"Fresh Orange Juice","Drinks",79,"Refreshing orange juice.","1600271886742-f049cd451bba"],
  [29,"Chocolate Milkshake","Drinks",119,"Thick chocolate milkshake.","1572490122747-3968b75cc699"],
  [30,"Strawberry Milkshake","Drinks",119,"Sweet strawberry shake.","1579954115545-a95591f28bfc"],
  [31,"Veg Momos","Snacks",79,"Steamed vegetable dumplings.","1563245372-f21724e3856d"],
  [32,"Masala Maggi","Snacks",59,"Hot and spicy masala noodles.","1569718212165-3a8278d5f624"],
  // Spring Rolls: the old Unsplash link was dead. Replace the last value with your own image
  // (e.g. "images/spring-rolls.jpg") – until then a friendly placeholder is shown.
  [33,"Spring Rolls","Snacks",89,"Crispy vegetable spring rolls.","1548507200-9a4d6f5a3b31"]
].map(([id,name,category,price,desc,img]) => ({
  id,name,category,price,desc,
  image: img.includes("/") && !/^\d/.test(img) ? img : U(img)
}));

const CART_KEY = "foodChefCart";
const ORDERS_KEY = "foodChefOrders";
const $ = id => document.getElementById(id);
const money = amount => "₹" + Number(amount).toLocaleString("en-IN");
const setText = (id, v) => { const e = $(id); if (e) e.textContent = v; };

function readStorage(key) {
  try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; }
}
let cart = readStorage(CART_KEY).map(i => ({...i, key:i.key || String(i.id)}));
let orders = readStorage(ORDERS_KEY);
let activeCategory = "All";

const saveCart = () => { try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch {} };
const saveOrders = () => { try { localStorage.setItem(ORDERS_KEY, JSON.stringify(orders)); } catch {} };
const cartCount = () => cart.reduce((s,i) => s + i.quantity, 0);
const cartTotal = () => cart.reduce((s,i) => s + i.price * i.quantity, 0);

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);
}

/* ---------- Variety (options) for every category ---------- */
// each option = [label, extra price]
const VARIETY = {
  "Pizza":[{name:"Size",opts:[['Regular 7"',0],['Medium 9"',80],['Large 12"',160]]},{name:"Crust",opts:[["Classic",0],["Thin",0],["Cheese Burst",60]]}],
  "Burgers":[{name:"Type",opts:[["Single Patty",0],["Double Patty",50]]},{name:"Extra",opts:[["None",0],["Extra Cheese",20],["Extra Sauce",10]]}],
  "Indian Snacks":[{name:"Portion",opts:[["Regular",0],["Large",30]]},{name:"Chutney",opts:[["Mint",0],["Tamarind",0],["Both",5]]}],
  "Fries":[{name:"Size",opts:[["Small",0],["Medium",30],["Large",60]]},{name:"Dip",opts:[["Ketchup",0],["Mayo",15],["Cheese Dip",25]]}],
  "Bakery":[{name:"Portion",opts:[["Single",0],["Family Pack",40]]},{name:"Serve",opts:[["Cold",0],["Warm / Grilled",10]]}],
  "Desserts":[{name:"Size",opts:[["Regular",0],["Large",40]]},{name:"Topping",opts:[["None",0],["Choco Sauce",15],["Nuts",25]]}],
  "Drinks":[{name:"Size",opts:[["Regular",0],["Small",-20],["Large",30]]},{name:"Sugar",opts:[["Normal",0],["Less Sugar",0],["No Sugar",0]]}],
  "Snacks":[{name:"Portion",opts:[["Regular",0],["Large",30]]},{name:"Spice",opts:[["Mild",0],["Medium",0],["Hot",0]]}]
};
const groupsFor = f => VARIETY[f.category] || [];
const defaultPicks = f => groupsFor(f).map(() => 0);
const variantLabel = (f, p) => groupsFor(f).map((g,i) => g.opts[p[i]][0]).join(" · ");
const variantPrice = (f, p) => f.price + groupsFor(f).reduce((s,g,i) => s + g.opts[p[i]][1], 0);

/* ---------- Likes ---------- */
const LIKES_KEY = "foodChefLikes";
let likes = readStorage(LIKES_KEY);
const saveLikes = () => { try { localStorage.setItem(LIKES_KEY, JSON.stringify(likes)); } catch {} };
const syncHeart = (b, id) => { const on = likes.includes(id); b.classList.toggle("on", on); b.textContent = on ? "♥" : "♡"; };
function toggleLike(id) {
  likes = likes.includes(id) ? likes.filter(x => x !== id) : [...likes, id];
  saveLikes();
  document.querySelectorAll(`[data-like="${id}"]`).forEach(b => syncHeart(b, id));
  if (activeCategory === "Liked") renderFoods();
}

/* ---------- Menu ---------- */
function renderFoods() {
  const query = $("food-search").value.trim().toLowerCase();
  const sort = $("sort-food").value;
  const list = foods.filter(f =>
    (activeCategory === "All" || (activeCategory === "Liked" ? likes.includes(f.id) : f.category === activeCategory)) &&
    (f.name + " " + f.category).toLowerCase().includes(query));

  if (sort === "low") list.sort((a,b) => a.price - b.price);
  if (sort === "high") list.sort((a,b) => b.price - a.price);
  if (sort === "name") list.sort((a,b) => a.name.localeCompare(b.name));

  $("food-items").innerHTML = list.length ? list.map(f => {
    const g = groupsFor(f)[0], on = likes.includes(f.id);
    return `
    <article class="food-card" data-open="${f.id}">
      <div class="food-img">
        <img src="${f.image}" alt="${escapeHTML(f.name)}" loading="lazy">
        <button class="like-btn ${on ? "on" : ""}" data-like="${f.id}" aria-label="Like ${escapeHTML(f.name)}">${on ? "♥" : "♡"}</button>
      </div>
      <div class="food-info">
        <span class="food-category">${f.category}</span>
        <h3>${escapeHTML(f.name)}</h3>
        <p class="food-description">${escapeHTML(f.desc)}</p>
        ${g ? `<div class="variety-chips">${g.opts.map(o => `<span>${escapeHTML(o[0])}</span>`).join("")}</div>` : ""}
        <div class="food-rating">★ 4.8 <span>• Popular choice</span></div>
        <div class="food-bottom">
          <strong class="food-price">${money(f.price)}</strong>
          <div class="btns">
            <button class="opt-btn" data-open="${f.id}">Options</button>
            <button class="add-btn" data-add="${f.id}">+ Add</button>
          </div>
        </div>
      </div>
    </article>`;
  }).join("") : `<p class="empty-message">${activeCategory === "Liked" ? "No liked items yet. Tap ♡ on any food." : "No food found. Try another search."}</p>`;
}

/* ---------- Food detail (variety popup) ---------- */
let detail = null;
function openDetail(id) {
  const food = foods.find(f => f.id === id); if (!food) return;
  detail = {food, picks:defaultPicks(food)};
  renderDetail();
  $("detail-modal").classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeDetail() {
  $("detail-modal").classList.remove("show");
  document.body.style.overflow = "";
  detail = null;
}
function renderDetail() {
  const {food, picks} = detail, img = $("detail-img");
  delete img.dataset.fb; img.src = food.image; img.alt = food.name;
  setText("detail-cat", food.category); setText("detail-name", food.name); setText("detail-desc", food.desc);
  setText("detail-price", money(variantPrice(food, picks)));
  $("detail-like").dataset.like = food.id; syncHeart($("detail-like"), food.id);
  $("detail-options").innerHTML = groupsFor(food).map((g,gi) => `
    <div class="opt-group"><b>${g.name}</b><div class="opt-row">
      ${g.opts.map((o,oi) => `<button type="button" class="opt-chip ${picks[gi] === oi ? "active" : ""}" data-g="${gi}" data-o="${oi}">${escapeHTML(o[0])}${o[1] ? ` <small>${o[1] > 0 ? "+" : "−"}₹${Math.abs(o[1])}</small>` : ""}</button>`).join("")}
    </div></div>`).join("");
  $("detail-similar").innerHTML = foods.filter(f => f.category === food.category && f.id !== food.id).slice(0,8).map(f => `
    <button class="similar-item" data-similar="${f.id}">
      <img src="${f.image}" alt="${escapeHTML(f.name)}"><span>${escapeHTML(f.name)}</span><small>${money(f.price)}</small>
    </button>`).join("");
}

/* ---------- Cart (each variety is its own line) ---------- */
function addToCart(id, picks) {
  const food = foods.find(i => i.id === id); if (!food) return;
  picks = picks || defaultPicks(food);
  const key = id + "-" + picks.join("");
  const existing = cart.find(i => i.key === key);
  if (existing) existing.quantity++;
  else cart.push({...food, key, variant:variantLabel(food, picks), price:variantPrice(food, picks), quantity:1});
  saveCart(); renderCart();
}
function changeQuantity(key, amount) {
  const item = cart.find(f => f.key === key); if (!item) return;
  item.quantity += amount;
  if (item.quantity <= 0) cart = cart.filter(f => f.key !== key);
  saveCart(); renderCart();
}
function removeFromCart(key) {
  cart = cart.filter(i => i.key !== key);
  saveCart(); renderCart();
}
function renderCart() {
  const count = cartCount(), total = money(cartTotal());
  setText("cart-count", count);
  setText("drawer-total", total);
  setText("checkout-total", total);

  $("drawer-items").innerHTML = cart.length ? cart.map(item => `
    <div class="drawer-item">
      <img src="${item.image}" alt="${escapeHTML(item.name)}">
      <div>
        <b>${escapeHTML(item.name)}</b>
        ${item.variant ? `<small>${escapeHTML(item.variant)}</small>` : ""}
        <small>${money(item.price)} each</small>
        <div class="qty-controls">
          <button data-minus="${item.key}" aria-label="Decrease">−</button>
          <strong>${item.quantity}</strong>
          <button data-plus="${item.key}" aria-label="Increase">+</button>
          <button data-remove="${item.key}" aria-label="Remove item">🗑</button>
        </div>
      </div>
    </div>`).join("") : '<p class="empty-cart">Your cart is empty. Explore our menu!</p>';

  $("checkout-summary").innerHTML = cart.length ? cart.map(item => `
    <div class="checkout-summary-item">
      <span>${escapeHTML(item.name)}${item.variant ? `<br><small>${escapeHTML(item.variant)}</small>` : ""} × ${item.quantity}</span>
      <strong>${money(item.price * item.quantity)}</strong>
    </div>`).join("") : "<p>Your cart is empty.</p>";
}
function openCart() { $("cart-drawer").classList.add("show"); $("cart-overlay").classList.add("show"); }
function closeCart() { $("cart-drawer").classList.remove("show"); $("cart-overlay").classList.remove("show"); }
function goToCheckout() {
  if (!cart.length) { alert("Your cart is empty. Please add food first."); return; }
  closeCart();
  $("checkout").scrollIntoView({behavior:"smooth"});
}

/* ---------- Tracking ---------- */
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
        ${stages.map((s,i) => `
          <div class="track-step ${i <= stage ? "done" : ""}" style="--i:${i}">
            <div class="step-icon">${s.icon}</div>
            <b>${s.name}</b>
            <small>${i < stage ? "Completed" : i === stage ? "Current" : "Pending"}</small>
          </div>`).join("")}
      </div>
      <p><b>Current status:</b> ${stages[stage].name}</p>
      <p class="order-meta">${stages[stage].description}</p>
      <div class="track-items">
        <h4>Items Ordered</h4>
        ${order.items.map(i => `<p>${escapeHTML(i.name)}${i.variant ? " (" + escapeHTML(i.variant) + ")" : ""} × ${i.quantity} — ${money(i.price * i.quantity)}</p>`).join("")}
        <p><b>Order Total: ${money(order.total)}</b></p>
      </div>
      <p class="demo-note">Demo tracking only. This is not a live delivery location.</p>
    </div>`;
}

function renderHistory() {
  $("order-history-list").innerHTML = orders.length ? [...orders].reverse().map(o => `
    <div class="history-row">
      <div>
        <b>${escapeHTML(o.id)}</b><br>
        <span>${new Date(o.createdAt).toLocaleDateString("en-IN")} • ${money(o.total)}</span><br>
        <small>${stages[Math.min(o.stage || 0, stages.length - 1)].name}</small>
      </div>
      <button data-view-order="${escapeHTML(o.id)}">View Details</button>
    </div>`).join("") : "No orders yet.";
}

function placeOrder(event) {
  event.preventDefault();
  if (!cart.length) { alert("Your cart is empty. Add food before placing an order."); return; }
  const form = new FormData(event.target);
  const customer = {
    name:form.get("name").trim(), phone:form.get("phone").trim(),
    hotel:form.get("hotel").trim(), district:form.get("district"),
    city:form.get("city").trim(), pincode:form.get("pincode").trim(),
    address:form.get("address").trim()
  };
  const order = {
    id:"FC" + Date.now().toString().slice(-8), customer,
    items:cart.map(i => ({...i})), total:cartTotal(),
    createdAt:new Date().toISOString(), stage:0
  };
  orders.push(order); saveOrders();
  cart = []; saveCart(); renderCart(); renderHistory(); renderTracking(order);
  $("tracking-id").value = order.id;
  event.target.reset();
  alert("Your demo order was created! Order ID: " + order.id);
  $("tracking").scrollIntoView({behavior:"smooth"});
}

function findOrder() {
  const id = $("tracking-id").value.trim().toUpperCase();
  renderTracking(orders.find(i => i.id.toUpperCase() === id));
}

/* ---------- Events ---------- */
$("food-items").addEventListener("click", e => {
  const add = e.target.closest("[data-add]");
  if (add) { addToCart(Number(add.dataset.add)); return; }
  const like = e.target.closest("[data-like]");
  if (like) { toggleLike(Number(like.dataset.like)); return; }
  const open = e.target.closest("[data-open]");
  if (open) openDetail(Number(open.dataset.open));
});
$("drawer-items").addEventListener("click", e => {
  const minus = e.target.closest("[data-minus]"), plus = e.target.closest("[data-plus]"), rem = e.target.closest("[data-remove]");
  if (minus) changeQuantity(minus.dataset.minus, -1);
  if (plus) changeQuantity(plus.dataset.plus, 1);
  if (rem) removeFromCart(rem.dataset.remove);
});
$("detail-options").addEventListener("click", e => {
  const b = e.target.closest(".opt-chip"); if (!b || !detail) return;
  detail.picks[Number(b.dataset.g)] = Number(b.dataset.o);
  renderDetail();
});
$("detail-add").addEventListener("click", () => { addToCart(detail.food.id, [...detail.picks]); closeDetail(); openCart(); });
$("detail-like").addEventListener("click", () => detail && toggleLike(detail.food.id));
$("detail-similar").addEventListener("click", e => {
  const b = e.target.closest("[data-similar]"); if (!b) return;
  detail = {food:foods.find(f => f.id === Number(b.dataset.similar)), picks:[]};
  detail.picks = defaultPicks(detail.food);
  renderDetail(); $("detail-modal").querySelector(".modal-card").scrollTo({top:0, behavior:"smooth"});
});
$("detail-close").addEventListener("click", closeDetail);
$("detail-modal").addEventListener("click", e => { if (e.target === $("detail-modal")) closeDetail(); });
$("categories").addEventListener("click", e => {
  const b = e.target.closest("[data-category]");
  if (!b) return;
  activeCategory = b.dataset.category;
  document.querySelectorAll(".category").forEach(i => i.classList.remove("active"));
  b.classList.add("active");
  renderFoods();
});
$("food-search").addEventListener("input", renderFoods);
$("top-search").addEventListener("input", () => {
  $("food-search").value = $("top-search").value;
  renderFoods();
  $("menu").scrollIntoView({behavior:"smooth"});
});
$("sort-food").addEventListener("change", renderFoods);
$("open-cart").addEventListener("click", openCart);
$("close-cart").addEventListener("click", closeCart);
$("cart-overlay").addEventListener("click", closeCart);
$("drawer-checkout").addEventListener("click", goToCheckout);
$("checkout-form").addEventListener("submit", placeOrder);
$("track-button").addEventListener("click", findOrder);
$("tracking-id").addEventListener("keydown", e => { if (e.key === "Enter") findOrder(); });
$("order-history-list").addEventListener("click", e => {
  const b = e.target.closest("[data-view-order]");
  if (!b) return;
  const order = orders.find(i => i.id === b.dataset.viewOrder);
  if (!order) return;
  $("tracking-id").value = order.id;
  renderTracking(order);
  $("tracking").scrollIntoView({behavior:"smooth"});
});
$("mobile-menu").addEventListener("click", () => $("navigation").classList.toggle("open"));
$("navigation").querySelectorAll("a").forEach(l => l.addEventListener("click", () => $("navigation").classList.remove("open")));
document.addEventListener("keydown", e => { if (e.key === "Escape") { closeCart(); closeDetail(); } });

renderFoods(); renderCart()
