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
let cart = readStorage(CART_KEY);
let orders = readStorage(ORDERS_KEY);
let activeCategory = "All";

const saveCart = () => { try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch {} };
const saveOrders = () => { try { localStorage.setItem(ORDERS_KEY, JSON.stringify(orders)); } catch {} };
const cartCount = () => cart.reduce((s,i) => s + i.quantity, 0);
const cartTotal = () => cart.reduce((s,i) => s + i.price * i.quantity, 0);

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);
}

/* ---------- Menu ---------- */
function renderFoods() {
  const query = $("food-search").value.trim().toLowerCase();
  const sort = $("sort-food").value;
  const list = foods.filter(f =>
    (activeCategory === "All" || f.category === activeCategory) &&
    (f.name + " " + f.category).toLowerCase().includes(query));

  if (sort === "low") list.sort((a,b) => a.price - b.price);
  if (sort === "high") list.sort((a,b) => b.price - a.price);
  if (sort === "name") list.sort((a,b) => a.name.localeCompare(b.name));

  $("food-items").innerHTML = list.length ? list.map(f => `
    <article class="food-card">
      <img src="${f.image}" alt="${escapeHTML(f.name)}" loading="lazy">
      <div class="food-info">
        <span class="food-category">${f.category}</span>
        <h3>${escapeHTML(f.name)}</h3>
        <p class="food-description">${escapeHTML(f.desc)}</p>
        <div class="food-rating">★ 4.8 <span>• Popular choice</span></div>
        <div class="food-bottom">
          <strong class="food-price">${money(f.price)}</strong>
          <button class="add-btn" data-add="${f.id}">+ Add to Cart</button>
        </div>
      </div>
    </article>`).join("") : '<p class="empty-message">No food found. Try another search.</p>';
}

/* ---------- Cart ---------- */
function addToCart(id) {
  const food = foods.find(i => i.id === id);
  if (!food) return;
  const existing = cart.find(i => i.id === id);
  if (existing) existing.quantity++; else cart.push({...food, quantity:1});
  saveCart(); renderCart();
}
function changeQuantity(id, amount) {
  const item = cart.find(f => f.id === id);
  if (!item) return;
  item.quantity += amount;
  if (item.quantity <= 0) cart = cart.filter(f => f.id !== id);
  saveCart(); renderCart();
}
function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
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
        <small>${money(item.price)} each</small>
        <div class="qty-controls">
          <button data-minus="${item.id}" aria-label="Decrease">−</button>
          <strong>${item.quantity}</strong>
          <button data-plus="${item.id}" aria-label="Increase">+</button>
          <button data-remove="${item.id}" aria-label="Remove item">🗑</button>
        </div>
      </div>
    </div>`).join("") : '<p class="empty-cart">Your cart is empty. Explore our menu!</p>';

  $("checkout-summary").innerHTML = cart.length ? cart.map(item => `
    <div class="checkout-summary-item">
      <span>${escapeHTML(item.name)} × ${item.quantity}</span>
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
        ${order.items.map(i => `<p>${escapeHTML(i.name)} × ${i.quantity} — ${money(i.price * i.quantity)}</p>`).join("")}
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
  const b = e.target.closest("[data-add]");
  if (b) addToCart(Number(b.dataset.add));
});
$("drawer-items").addEventListener("click", e => {
  const minus = e.target.closest("[data-minus]"), plus = e.target.closest("[data-plus]"), rem = e.target.closest("[data-remove]");
  if (minus) changeQuantity(Number(minus.dataset.minus), -1);
  if (plus) changeQuantity(Number(plus.dataset.plus), 1);
  if (rem) removeFromCart(Number(rem.dataset.remove));
});
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
document.addEventListener("keydown", e => { if (e.key === "Escape") closeCart(); });

renderFoods(); renderCart(); renderHistory();

/* ================= Motion layer ================= */
(() => {
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $$ = s => [...document.querySelectorAll(s)];
const $q = s => document.querySelector(s);

/* Image fallback: any broken photo (e.g. Spring Rolls) becomes a styled placeholder */
const emo = a => /roll/i.test(a) ? "🌯" : /pizza/i.test(a) ? "🍕" : /burger/i.test(a) ? "🍔" : /shake|coffee|juice/i.test(a) ? "🥤" : "🍽️";
document.addEventListener("error", e => {
  const i = e.target;
  if (!i || i.tagName !== "IMG" || i.dataset.fb) return;
  i.dataset.fb = 1;
  i.src = "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe08a"/><stop offset="1" stop-color="#ffb800"/></linearGradient></defs><rect width="400" height="300" fill="url(#g)"/><text x="200" y="185" font-size="120" text-anchor="middle">${emo(i.alt || "")}</text></svg>`);
}, true);
const checkImgs = () => $$("img").forEach(i => { if (i.complete && !i.naturalWidth) i.dispatchEvent(new Event("error")); });
checkImgs();

/* Scroll progress, hide-on-scroll header, hero parallax */
const bar = document.createElement("div"); bar.className = "progress"; document.body.append(bar);
const header = $q("header"), heroImg = $q(".hero-image"); let lastY = 0;
addEventListener("scroll", () => {
  const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${h ? y / h : 0})`;
  header.classList.toggle("hide", y > lastY && y > 200);
  if (heroImg && !reduce && y < 900) heroImg.style.setProperty("--py", y * .12 + "px");
  lastY = y;
}, {passive:true});

/* Scroll reveal with stagger */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const t = e.target; t.classList.add("in"); io.unobserve(t);
  setTimeout(() => t.classList.remove("reveal", "in"), 1500 + (parseInt(t.style.getPropertyValue("--d")) || 0));
}), {threshold:.1});
const reveal = (el, d = 0) => {
  if (reduce || el.classList.contains("reveal")) return;
  el.style.setProperty("--d", d + "ms"); el.classList.add("reveal"); io.observe(el);
};
$$(".section-heading,.benefit,.about>*,.checkout-form,.summary-box,.track-search,.history-box").forEach((el,i) => reveal(el, (i % 4) * 110));
const grid = $("food-items");
const revealCards = () => { $$("#food-items .food-card").forEach((c,i) => reveal(c, (i % 4) * 90 + Math.floor(i / 4) * 40)); checkImgs(); };
new MutationObserver(revealCards).observe(grid, {childList:true});
revealCards();

/* Hero: word-by-word headline, floating food bits, mouse tilt */
const h1 = $q(".hero h1");
if (h1 && !reduce) {
  let n = 0; const w = document.createTreeWalker(h1, NodeFilter.SHOW_TEXT), nodes = [];
  while (w.nextNode()) nodes.push(w.currentNode);
  nodes.forEach(t => {
    const f = document.createDocumentFragment();
    t.textContent.split(/(\s+)/).forEach(p => {
      if (!p.trim()) { f.append(p); return; }
      const s = document.createElement("span"); s.className = "w"; s.style.setProperty("--i", n++); s.textContent = p; f.append(s);
    });
    t.replaceWith(f);
  });
}
const hero = $q(".hero");
if (hero && !reduce) {
  const bits = document.createElement("div"); bits.className = "bits";
  ["🍕","🍔","🍟","🥟","🍩","🥤","🧀","🌶️","🍰","🥪"].forEach(e => {
    const s = document.createElement("span"); s.textContent = e;
    s.style.cssText = `--x:${Math.random()*92}%;--y:${Math.random()*85}%;--s:${22+Math.random()*30}px;--t:${3+Math.random()*4}s`;
    bits.append(s);
  });
  hero.prepend(bits);
  hero.addEventListener("pointermove", e => {
    if (e.pointerType !== "mouse" || !heroImg) return;
    const r = hero.getBoundingClientRect();
    heroImg.style.setProperty("--ry", ((e.clientX - r.left) / r.width - .5) * 10 + "deg");
    heroImg.style.setProperty("--rx", (.5 - (e.clientY - r.top) / r.height) * 8 + "deg");
  });
  hero.addEventListener("pointerleave", () => { heroImg.style.setProperty("--ry","0deg"); heroImg.style.setProperty("--rx","0deg"); });
}

/* 3D tilt + glare on cards */
if (!reduce) {
  grid.addEventListener("pointermove", e => {
    if (e.pointerType !== "mouse") return;
    const c = e.target.closest(".food-card"); if (!c) return;
    const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    c.style.transform = `perspective(800px) rotateX(${(.5-y)*10}deg) rotateY(${(x-.5)*12}deg) translateY(-8px)`;
    c.style.setProperty("--gx", x*100 + "%"); c.style.setProperty("--gy", y*100 + "%");
  });
  grid.addEventListener("pointerout", e => {
    const c = e.target.closest(".food-card");
    if (c && !c.contains(e.relatedTarget)) c.style.transform = "";
  });

  /* Magnetic buttons + ripple */
  document.addEventListener("pointermove", e => {
    if (e.pointerType !== "mouse") return;
    const b = e.target.closest && e.target.closest(".primary-btn");
    $$(".primary-btn").forEach(x => { if (x !== b) x.style.translate = ""; });
    if (!b) return;
    const r = b.getBoundingClientRect();
    b.style.translate = `${(e.clientX - r.left - r.width/2)*.18}px ${(e.clientY - r.top - r.height/2)*.25}px`;
  });
  document.addEventListener("pointerdown", e => {
    const b = e.target.closest(".add-btn,.primary-btn,.category"); if (!b) return;
    const r = b.getBoundingClientRect(), d = Math.max(r.width, r.height) * 2, s = document.createElement("span");
    s.className = "rip";
    s.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX-r.left-d/2}px;top:${e.clientY-r.top-d/2}px`;
    b.append(s); setTimeout(() => s.remove(), 650);
  });
}

/* Fly-to-cart + badge bump */
const cartBtn = $("open-cart"), badge = $("cart-count");
document.addEventListener("click", e => {
  const b = e.target.closest("[data-add]"); if (!b || red