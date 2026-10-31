
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const image = id =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=85`;

const fallbackImage = image("photo-1547592180-85f173990554");

const foods = [
  // BURGERS
  {id:1,name:"Classic Cheeseburger",category:"Burgers",price:159,desc:"Juicy burger with melted cheese, lettuce and house sauce.",img:"photo-1568901346375-23c9450c58cd"},
  {id:2,name:"Crispy Chicken Burger",category:"Burgers",price:179,desc:"Crunchy chicken, fresh lettuce and creamy mayo.",img:"photo-1606755962773-d324e0a13086"},
  {id:3,name:"Veggie Burger",category:"Burgers",price:139,desc:"A tasty vegetable patty with fresh toppings.",img:"photo-1520072959219-c595dc870360"},
  {id:4,name:"Double Cheese Burger",category:"Burgers",price:199,desc:"Double layers of cheese and a delicious patty.",img:"photo-1553979459-d2229ba7433a"},
  {id:27,name:"BBQ Burger",category:"Burgers",price:189,desc:"Smoky BBQ burger with fresh vegetables.",img:"photo-1553979459-d2229ba7433a"},
  {id:28,name:"Spicy Paneer Burger",category:"Burgers",price:159,desc:"Spicy paneer patty with creamy sauce.",img:"photo-1520072959219-c595dc870360"},
  {id:29,name:"Double Chicken Burger",category:"Burgers",price:229,desc:"Double chicken patty with cheese.",img:"photo-1606755962773-d324e0a13086"},

  // PIZZA
  {id:5,name:"Margherita Pizza",category:"Pizza",price:199,desc:"Classic pizza with tomato, mozzarella and basil.",img:"photo-1579751626657-72bc17010498"},
  {id:6,name:"Farmhouse Pizza",category:"Pizza",price:249,desc:"Loaded with colorful vegetables and cheese.",img:"photo-1513104890138-7c749659a591"},
  {id:7,name:"Pepperoni Pizza",category:"Pizza",price:279,desc:"A flavorful pizza with savory pepperoni.",img:"photo-1628840042765-356cda07504e"},
  {id:30,name:"Cheese Burst Pizza",category:"Pizza",price:299,desc:"Pizza loaded with melted cheese.",img:"photo-1574071318508-1cdbab80d002"},
  {id:31,name:"Paneer Pizza",category:"Pizza",price:259,desc:"Fresh paneer with vegetables and cheese.",img:"photo-1565299624946-b28f40a0ae38"},
  {id:32,name:"Veggie Supreme Pizza",category:"Pizza",price:279,desc:"A colorful vegetable-loaded pizza.",img:"photo-1513104890138-7c749659a591"},

  // FRIES
  {id:8,name:"French Fries",category:"Fries",price:89,desc:"Golden crispy fries with seasoning.",img:"photo-1573080496219-bb080dd4f877"},
  {id:9,name:"Peri Peri Fries",category:"Fries",price:109,desc:"Crispy fries tossed in spicy peri peri seasoning.",img:"photo-1630384060421-cb20d0e0649d"},
  {id:10,name:"Loaded Cheese Fries",category:"Fries",price:139,desc:"Hot fries covered in creamy melted cheese.",img:"photo-1518013431117-eb1465fa5752"},
  {id:35,name:"Masala Fries",category:"Fries",price:99,desc:"Crispy fries with Indian masala.",img:"photo-1573080496219-bb080dd4f877"},
  {id:36,name:"Cheese Peri Peri Fries",category:"Fries",price:149,desc:"Spicy fries topped with cheese.",img:"photo-1630384060421-cb20d0e0649d"},

  // SNACKS
  {id:11,name:"Veg Spring Rolls",category:"Snacks",price:89,desc:"Crispy golden rolls filled with seasoned vegetables.",img:"photo-1548507200-9a4d6f5a3b31"},
  {id:12,name:"Samosa",category:"Snacks",price:35,desc:"Flaky pastry filled with spiced potato.",img:"photo-1601050690597-df0568f70950"},
  {id:13,name:"Onion Pakora",category:"Snacks",price:59,desc:"Crispy onion fritters with Indian spices.",img:"photo-1601050690117-94f5f6fa8bd7"},
  {id:14,name:"Veg Momos",category:"Snacks",price:99,desc:"Soft steamed dumplings served with spicy dip.",img:"photo-1563245372-f21724e3856d"},
  {id:15,name:"Fried Momos",category:"Snacks",price:109,desc:"Golden fried dumplings with a tasty filling.",img:"photo-1625220194771-7ebdea0b70b9"},
  {id:16,name:"Potato Wedges",category:"Snacks",price:99,desc:"Seasoned potato wedges, crisp outside and soft inside.",img:"photo-1630384060421-cb20d0e0649d"},
  {id:17,name:"Veg Cutlet",category:"Snacks",price:69,desc:"Crispy vegetable cutlet with herbs and spices.",img:"photo-1601050690597-df0568f70950"},
  {id:18,name:"Paneer Tikka",category:"Snacks",price:149,desc:"Spiced paneer cubes grilled until golden.",img:"photo-1567188040759-fb8a883dc6d8"},
  {id:33,name:"Cheese Balls",category:"Snacks",price:99,desc:"Crispy cheese-filled snack.",img:"photo-1573080496219-bb080dd4f877"},
  {id:34,name:"Garlic Bread",category:"Snacks",price:119,desc:"Toasted garlic bread with herbs.",img:"photo-1619531040576-f9416740661b"},
  {id:41,name:"Veg Samosa",category:"Snacks",price:25,desc:"Golden crispy samosa filled with spiced potatoes.",img:"photo-1601050690597-df0568f70950"},
  {id:42,name:"Chicken Nuggets",category:"Snacks",price:129,desc:"Crispy chicken nuggets served with dip.",img:"photo-1562967914-608f82629710"},
  {id:43,name:"Cheese Sandwich",category:"Snacks",price:119,desc:"Toasted sandwich with melted cheese.",img:"photo-1528735602780-2552fd46c7af"},
  {id:44,name:"Club Sandwich",category:"Snacks",price:139,desc:"Fresh sandwich with a delicious creamy filling.",img:"photo-1539252554453-80ab65ce3586"},
  {id:45,name:"Paneer Roll",category:"Snacks",price:119,desc:"Soft roll filled with spicy paneer.",img:"photo-1626700051175-6818013e1d4f"},
  {id:46,name:"Chicken Popcorn",category:"Snacks",price:139,desc:"Bite-sized crispy chicken pieces.",img:"photo-1562967914-608f82629710"},
  {id:47,name:"Onion Rings",category:"Snacks",price:89,desc:"Golden crispy onion rings.",img:"photo-1639024471283-03518883512d"},
  {id:48,name:"Corn Cheese Balls",category:"Snacks",price:119,desc:"Crunchy corn balls with a cheesy center.",img:"photo-1573080496219-bb080dd4f877"},
  {id:49,name:"Veg Puff",category:"Snacks",price:30,desc:"Flaky pastry filled with spiced vegetables.",img:"photo-1623334044303-241021148842"},
  {id:50,name:"Masala Vada",category:"Snacks",price:40,desc:"Crispy lentil fritters with Indian spices.",img:"photo-1601050690117-94f5f6fa8bd7"},
  {id:51,name:"French Toast",category:"Snacks",price:99,desc:"Golden toast with a delicious coating.",img:"photo-1484723091739-30a097e8f929"},
  {id:52,name:"Cheese Corn Sandwich",category:"Snacks",price:129,desc:"Toasted sandwich with sweet corn and cheese.",img:"photo-1528735602780-2552fd46c7af"},

  // DESSERTS
  {id:19,name:"Chocolate Cake",category:"Desserts",price:119,desc:"Rich chocolate cake for your sweet cravings.",img:"photo-1578985545062-69928b1d9587"},
  {id:20,name:"Strawberry Cheesecake",category:"Desserts",price:149,desc:"Creamy cheesecake topped with strawberry.",img:"photo-1533134242443-d4fd215305ad"},
  {id:21,name:"Chocolate Brownie",category:"Desserts",price:89,desc:"Soft, rich brownie with chocolate goodness.",img:"photo-1606313564200-e75d5e30476c"},
  {id:22,name:"Vanilla Ice Cream",category:"Desserts",price:79,desc:"Smooth and creamy vanilla ice cream.",img:"photo-1563805042-7684c019e1cb"},
  {id:37,name:"Chocolate Donut",category:"Desserts",price:89,desc:"Soft donut covered with chocolate.",img:"photo-1551024506-0bccd828d307"},
  {id:38,name:"Chocolate Waffle",category:"Desserts",price:139,desc:"Warm waffle with chocolate topping.",img:"photo-1562376552-0d160a2f238d"},

  // DRINKS
  {id:23,name:"Cold Coffee",category:"Drinks",price:99,desc:"Chilled coffee blended until smooth and frothy.",img:"photo-1461023058943-07fcbe16d735"},
  {id:24,name:"Fresh Lemon Juice",category:"Drinks",price:59,desc:"Refreshing lemon drink served chilled.",img:"photo-1513558161293-cd275959baed"},
  {id:25,name:"Mango Smoothie",category:"Drinks",price:119,desc:"A thick and fruity mango smoothie.",img:"photo-1505252585461-04db1eb84625"},
  {id:26,name:"Chocolate Milkshake",category:"Drinks",price:129,desc:"Creamy chocolate shake topped with goodness.",img:"photo-1572490122747-3968b75cc699"},
  {id:39,name:"Oreo Milkshake",category:"Drinks",price:139,desc:"Creamy Oreo milkshake.",img:"photo-1572490122747-3968b75cc699"},
  {id:40,name:"Strawberry Milkshake",category:"Drinks",price:129,desc:"Fresh strawberry blended milkshake.",img:"photo-1577805947697-89e18249d767"}
].map(item => ({...item,image:image(item.img)}));

// SAFE LOCAL STORAGE
function loadData(key, fallback) {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    return data ?? fallback;
  } catch {
    return fallback;
  }
}

let cart = loadData("foodChefCart", []);
let likes = loadData("foodChefLikes", []);
let orders = loadData("foodChefOrders", []);

let activeCategory = "All";
let selectedProduct = null;

const money = amount => `₹${Number(amount || 0).toFixed(0)}`;
const saveCart = () => localStorage.setItem("foodChefCart", JSON.stringify(cart));
const saveOrders = () => localStorage.setItem("foodChefOrders", JSON.stringify(orders));
const saveLikes = () => localStorage.setItem("foodChefLikes", JSON.stringify(likes));

const trackingStages = [
  "Order placed",
  "Order confirmed",
  "Food preparing",
  "Out for delivery",
  "Delivered"
];

function safeText(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  })[char]);
}

function renderFoods() {
  const search = ($("#food-search").value || "").trim().toLowerCase();
  const sort = $("#food-sort").value;

  let list = foods.filter(f =>
    (activeCategory === "All" || f.category === activeCategory) &&
    (f.name.toLowerCase().includes(search) ||
     f.desc.toLowerCase().includes(search))
  );

  if (sort === "low") list.sort((a,b) => a.price-b.price);
  if (sort === "high") list.sort((a,b) => b.price-a.price);
  if (sort === "name") list.sort((a,b) => a.name.localeCompare(b.name));

  $("#empty-message").hidden = list.length > 0;

  $("#food-items").innerHTML = list.map((f,i) => `
    <article class="food-card" data-id="${f.id}" style="transition-delay:${(i%4)*65}ms">
      <div class="food-img">
        <img src="${f.image}" alt="${safeText(f.name)}" loading="lazy"
          onerror="this.onerror=null;this.src='${fallbackImage}'">
        <span class="food-category">${safeText(f.category)}</span>
        <button class="like-btn ${likes.includes(f.id)?"on":""}" data-like="${f.id}" aria-label="Favorite">
          ${likes.includes(f.id)?"♥":"♡"}
        </button>
      </div>
      <div class="food-info">
        <h3>${safeText(f.name)}</h3>
        <p>${safeText(f.desc)}</p>
        <div class="food-bottom">
          <span class="food-price">${money(f.price)}</span>
          <button class="add-btn" data-add="${f.id}">Add +</button>
        </div>
        <button class="details-btn" data-details="${f.id}">View details</button>
      </div>
    </article>
  `).join("");

  observeCards();
}

let cardObserver;

function observeCards() {
  if (!("IntersectionObserver" in window)) {
    $$(".food-card").forEach(c => c.classList.add("visible"));
    return;
  }

  if (!cardObserver) {
    cardObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          cardObserver.unobserve(entry.target);
        }
      });
    }, {threshold:0.1});
  }

  $$(".food-card:not(.visible)").forEach(c => cardObserver.observe(c));
}

function addToCart(id, button) {
  const item = foods.find(f => f.id === Number(id));
  if (!item) return;

  const existing = cart.find(c => c.id === item.id);
  if (existing) existing.qty++;
  else cart.push({...item,qty:1});

  saveCart();
  renderCart();

  if (button) {
    button.textContent = "✓ Added";
    button.classList.add("added");
    setTimeout(() => {
      button.textContent = "Add +";
      button.classList.remove("added");
    },850);
  }

  animateToCart(button);
}

function animateToCart(button) {
  const img = button?.closest(".food-card")?.querySelector(".food-img img");
  const target = $("#open-cart");
  if (!img || !target) return;

  const a = img.getBoundingClientRect();
  const b = target.getBoundingClientRect();
  const clone = img.cloneNode();

  clone.className = "food-fly";
  Object.assign(clone.style,{
    left:a.left+"px",top:a.top+"px",
    width:a.width+"px",height:a.height+"px"
  });

  document.body.appendChild(clone);

  requestAnimationFrame(() => Object.assign(clone.style,{
    left:(b.left+b.width/2)+"px",
    top:(b.top+b.height/2)+"px",
    width:"22px",height:"22px",
    opacity:"0.2",transform:"rotate(360deg)"
  }));

  setTimeout(() => {
    clone.remove();
    target.animate(
      [{transform:"scale(1)"},{transform:"scale(1.12) rotate(-4deg)"},{transform:"scale(1)"}],
      {duration:450}
    );
  },700);
}

function renderCart() {
  const count = cart.reduce((n,c) => n+Number(c.qty || 0),0);
  const total = cart.reduce((n,c) => n+c.price*c.qty,0);

  $("#cart-count").textContent = count;
  $("#cart-total").textContent = money(total);
  $("#checkout-total").textContent = money(total);

  $("#cart-items").innerHTML = cart.length
    ? cart.map(c => `
      <div class="cart-row">
        <img src="${c.image || fallbackImage}" alt="${safeText(c.name)}" onerror="this.onerror=null;this.src='${fallbackImage}'">
        <div>
          <h4>${safeText(c.name)}</h4>
          <small>${money(c.price)} each</small>
          <div class="qty-control">
            <button data-qty="-1" data-id="${c.id}">−</button>
            <b>${c.qty}</b>
            <button data-qty="1" data-id="${c.id}">+</button>
          </div>
        </div>
        <strong>${money(c.price*c.qty)}</strong>
      </div>
    `).join("")
    : `<p class="empty-cart">Your cart is waiting for something tasty! 😋</p>`;

  $("#checkout-open").disabled = !cart.length;
  $("#checkout-open").style.opacity = cart.length ? 1 : .5;
}

function changeQty(id, change) {
  const item = cart.find(c => c.id === Number(id));
  if (!item) return;

  item.qty += Number(change);
  if (item.qty <= 0) cart = cart.filter(c => c.id !== Number(id));

  saveCart();
  renderCart();
}

function openCart() {
  $("#cart-drawer").classList.add("show");
  $("#drawer-overlay").classList.add("show");
  $("#cart-drawer").setAttribute("aria-hidden","false");
}

function closeCart() {
  $("#cart-drawer").classList.remove("show");
  $("#drawer-overlay").classList.remove("show");
  $("#cart-drawer").setAttribute("aria-hidden","true");
}

function openModal(id) {
  const food = foods.find(x => x.id === Number(id));
  if (!food) return;

  selectedProduct = food;
  $("#modal-image").src = food.image;
  $("#modal-image").alt = food.name;
  $("#modal-category").textContent = food.category;
  $("#modal-name").textContent = food.name;
  $("#modal-description").textContent = food.desc;
  $("#modal-price").textContent = money(food.price);
  $("#product-modal").classList.add("show");
}

function closeModals() {
  $$(".modal-backdrop").forEach(m => m.classList.remove("show"));
}

// ORDER HISTORY AND TRACKING
function renderOrders() {
  $("#order-history").innerHTML = orders.length
    ? orders.slice().reverse().map(order => {
        const stage = Math.min(Number(order.stage || 0),4);
        const items = Array.isArray(order.products) ? order.products : [];

        return `
          <article class="order-card order-card-full">
            <div class="order-card-top">
              <div>
                <b>Order #${safeText(order.id)}</b>
                <p>${safeText(order.date)} · ${order.items || 0} item(s)</p>
              </div>
              <strong>${money(order.total)}</strong>
            </div>

            <div class="order-detail-content">
              <p><b>Customer:</b> ${safeText(order.customer)}</p>
              <p><b>Phone:</b> ${safeText(order.phone)}</p>
              <p><b>Address:</b> ${safeText(order.address)}</p>
              <p><b>Payment:</b> ${safeText(order.payment)}</p>
              <p><b>Items:</b></p>
              ${items.length ? items.map(item =>
                `<p class="order-product-line">${safeText(item.name)} × ${item.qty} — ${money(item.price*item.qty)}</p>`
              ).join("") : `<p>Item details unavailable for this older order.</p>`}
            </div>

            <div class="order-tracking">
              <h4>🚚 Order tracking</h4>
              <p class="tracking-current">Current status: <b>${trackingStages[stage]}</b></p>
              <div class="tracking-timeline">
                ${trackingStages.map((name,index) => `
                  <div class="tracking-stage ${index <= stage ? "completed" : ""}">
                    <span>${index < stage ? "✓" : index+1}</span>
                    <small>${name}</small>
                  </div>
                `).join("")}
              </div>
              ${stage < 4
                ? `<button class="tracking-demo-btn" data-track="${safeText(order.id)}">Advance demo tracking</button>`
                : `<p class="delivered-note">🎉 Your order has been delivered!</p>`}
              <small class="demo-note">Demo tracking only. Status changes are not connected to a real delivery service.</small>
            </div>
          </article>
        `;
      }).join("")
    : `<p class="empty-history">Your orders will appear here after checkout.</p>`;
}

function advanceTracking(id) {
  const order = orders.find(o => String(o.id) === String(id));
  if (!order) return;

  order.stage = Math.min(Number(order.stage || 0)+1,4);
  order.status = trackingStages[order.stage];
  saveOrders();
  renderOrders();
}

// CATEGORY FILTER
$("#category-list").addEventListener("click",e => {
  const btn = e.target.closest("[data-category]");
  if (!btn) return;

  activeCategory = btn.dataset.category;
  $$(".category").forEach(b => b.classList.toggle("active",b === btn));
  renderFoods();
});

$("#food-search").addEventListener("input",renderFoods);
$("#food-sort").addEventListener("change",renderFoods);

// FOOD CARD ACTIONS
$("#food-items").addEventListener("click",e => {
  const add = e.target.closest("[data-add]");
  if (add) {
    addToCart(add.dataset.add,add);
    return;
  }

  const like = e.target.closest("[data-like]");
  if (like) {
    const id = Number(like.dataset.like);
    likes = likes.includes(id) ? likes.filter(x => x !== id) : [...likes,id];
    saveLikes();
    renderFoods();
    return;
  }

  const details = e.target.closest("[data-details]");
  if (details) {
    openModal(details.dataset.details);
    return;
  }

  const card = e.target.closest(".food-card");
  if (card) openModal(card.dataset.id);
});

// CART ACTIONS
$("#cart-items").addEventListener("click",e => {
  const button = e.target.closest("[data-qty]");
  if (button) changeQty(button.dataset.id,button.dataset.qty);
});

$("#open-cart").addEventListener("click",openCart);
$("#close-cart").addEventListener("click",closeCart);
$("#drawer-overlay").addEventListener("click",closeCart);

// PRODUCT MODAL
$("#modal-add").addEventListener("click",() => {
  if (!selectedProduct) return;
  addToCart(selectedProduct.id);
  closeModals();
  openCart();
});

$$("[data-close-modal]").forEach(button =>
  button.addEventListener("click",closeModals)
);

$$(".modal-backdrop").forEach(modal =>
  modal.addEventListener("click",e => {
    if (e.target === modal) closeModals();
  })
);

// CHECKOUT
$("#checkout-open").addEventListener("click",() => {
  if (!cart.length) return;
  closeCart();
  $("#checkout-modal").classList.add("show");
});

$("#checkout-form").addEventListener("submit",e => {
  e.preventDefault();
  if (!cart.length) return;

  const data = new FormData(e.currentTarget);
  const total = cart.reduce((n,c) => n+c.price*c.qty,0);
  const id = String(Date.now()).slice(-7);

  const order = {
    id,
    customer:data.get("customer"),
    phone:data.get("phone"),
    address:data.get("address"),
    payment:data.get("payment"),
    total,
    items:cart.reduce((n,c) => n+c.qty,0),
    products:cart.map(c => ({
      id:c.id,name:c.name,price:c.price,qty:c.qty
    })),
    date:new Date().toLocaleString(),
    stage:0,
    status:trackingStages[0]
  };

  orders.push(order);
  saveOrders();

  cart = [];
  saveCart();
  renderCart();
  renderOrders();

  e.currentTarget.reset();
  closeModals();

  $("#success-message").textContent =
    `Order #${id} has been recorded. Your order details and demo tracking are available in My Orders. No payment has been processed.`;

  $("#success-modal").classList.add("show");
});

// TRACKING BUTTON
$("#order-history").addEventListener("click",e => {
  const button = e.target.closest("[data-track]");
  if (button) advanceTracking(button.dataset.track);
});

// MOBILE NAVIGATION
$("#menu-toggle").addEventListener("click",() =>
  $("#main-nav").classList.toggle("open")
);

$$('#main-nav a').forEach(a =>
  a.addEventListener("click",() =>
    $("#main-nav").classList.remove("open")
  )
);

// ESCAPE KEY
document.addEventListener("keydown",e => {
  if (e.key === "Escape") {
    closeCart();
    closeModals();
  }
});

// SCROLL PROGRESS
window.addEventListener("scroll",() => {
  const max = document.documentElement.scrollHeight-window.innerHeight;
  $("#scroll-progress").style.transform =
    `scaleX(${max > 0 ? window.scrollY/max : 0})`;
},{passive:true});

// INITIAL SETUP
$("#year").textContent = new Date().getFullYear();

renderFoods();
renderCart();
renderOrders();
