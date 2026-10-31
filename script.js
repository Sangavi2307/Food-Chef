const $ = (selector, root = document) =>
  root.querySelector(selector);

const $$ = (selector, root = document) =>
  [...root.querySelectorAll(selector)];

const image = id =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=85`;

const foods = [
  {id:1,name:"Classic Cheeseburger",category:"Burgers",price:159,desc:"Juicy burger with melted cheese, lettuce and our house sauce.",img:"photo-1568901346375-23c9450c58cd"},
  {id:2,name:"Crispy Chicken Burger",category:"Burgers",price:179,desc:"Crunchy chicken, fresh lettuce and creamy mayo.",img:"photo-1606755962773-d324e0a13086"},
  {id:3,name:"Veggie Burger",category:"Burgers",price:139,desc:"A tasty vegetable patty with fresh toppings.",img:"photo-1520072959219-c595dc870360"},
  {id:4,name:"Double Cheese Burger",category:"Burgers",price:199,desc:"Double layers of cheese and a delicious patty.",img:"photo-1553979459-d2229ba7433a"},

  {id:5,name:"Margherita Pizza",category:"Pizza",price:199,desc:"Classic pizza with tomato, mozzarella and basil.",img:"photo-1579751626657-72bc17010498"},
  {id:6,name:"Farmhouse Pizza",category:"Pizza",price:249,desc:"Loaded with colourful vegetables and cheese.",img:"photo-1513104890138-7c749659a591"},
  {id:7,name:"Pepperoni Pizza",category:"Pizza",price:279,desc:"A flavourful pizza with savoury pepperoni.",img:"photo-1628840042765-356cda07504e"},

  {id:8,name:"French Fries",category:"Fries",price:89,desc:"Golden, crispy fries with a pinch of seasoning.",img:"photo-1573080496219-bb080dd4f877"},
  {id:9,name:"Peri Peri Fries",category:"Fries",price:109,desc:"Crispy fries tossed in spicy peri peri seasoning.",img:"photo-1630384060421-cb20d0e0649d"},
  {id:10,name:"Loaded Cheese Fries",category:"Fries",price:139,desc:"Hot fries covered in creamy melted cheese.",img:"photo-1518013431117-eb1465fa5752"},

  {id:11,name:"Veg Spring Rolls",category:"Snacks",price:89,desc:"Crispy golden rolls filled with seasoned vegetables.",img:"photo-1548507200-9a4d6f5a3b31"},
  {id:12,name:"Samosa",category:"Snacks",price:35,desc:"Flaky pastry filled with spiced potato.",img:"photo-1601050690597-df0568f70950"},
  {id:13,name:"Onion Pakora",category:"Snacks",price:59,desc:"Crispy onion fritters with Indian spices.",img:"photo-1601050690117-94f5f6fa8bd7"},
  {id:14,name:"Veg Momos",category:"Snacks",price:99,desc:"Soft steamed dumplings served with spicy dip.",img:"photo-1563245372-f21724e3856d"},
  {id:15,name:"Fried Momos",category:"Snacks",price:109,desc:"Golden fried dumplings with a tasty filling.",img:"photo-1625220194771-7ebdea0b70b9"},
  {id:16,name:"Potato Wedges",category:"Snacks",price:99,desc:"Seasoned potato wedges, crisp outside and soft inside.",img:"photo-1630384060421-cb20d0e0649d"},
  {id:17,name:"Veg Cutlet",category:"Snacks",price:69,desc:"Crispy vegetable cutlet with herbs and spices.",img:"photo-1601050690597-df0568f70950"},
  {id:18,name:"Paneer Tikka",category:"Snacks",price:149,desc:"Spiced paneer cubes grilled until deliciously golden.",img:"photo-1567188040759-fb8a883dc6d8"},

  {id:19,name:"Chocolate Cake",category:"Desserts",price:119,desc:"Rich chocolate cake for your sweet cravings.",img:"photo-1578985545062-69928b1d9587"},
  {id:20,name:"Strawberry Cheesecake",category:"Desserts",price:149,desc:"Creamy cheesecake topped with strawberry.",img:"photo-1533134242443-d4fd215305ad"},
  {id:21,name:"Chocolate Brownie",category:"Desserts",price:89,desc:"Soft, rich brownie with chocolate goodness.",img:"photo-1606313564200-e75d5e30476c"},
  {id:22,name:"Vanilla Ice Cream",category:"Desserts",price:79,desc:"Smooth and creamy vanilla ice cream.",img:"photo-1563805042-7684c019e1cb"},

  {id:23,name:"Cold Coffee",category:"Drinks",price:99,desc:"Chilled coffee blended until smooth and frothy.",img:"photo-1461023058943-07fcbe16d735"},
  {id:24,name:"Fresh Lemon Juice",category:"Drinks",price:59,desc:"Refreshing lemon drink served chilled.",img:"photo-1513558161293-cd275959baed"},
  {id:25,name:"Mango Smoothie",category:"Drinks",price:119,desc:"A thick and fruity mango smoothie.",img:"photo-1505252585461-04db1eb84625"},
  {id:26,name:"Chocolate Milkshake",category:"Drinks",price:129,desc:"Creamy chocolate shake topped with goodness.",img:"photo-1572490122747-3968b75cc699"}
].map(item => ({
  ...item,
  image: image(item.img)
}));

let cart = JSON.parse(localStorage.getItem("foodChefCart") || "[]");
let likes = JSON.parse(localStorage.getItem("foodChefLikes") || "[]");
let orders = JSON.parse(localStorage.getItem("foodChefOrders") || "[]");

let activeCategory = "All";
let selectedProduct = null;

const money = amount => `₹${Number(amount).toFixed(0)}`;

const saveCart = () =>
  localStorage.setItem("foodChefCart", JSON.stringify(cart));

const saveOrders = () =>
  localStorage.setItem("foodChefOrders", JSON.stringify(orders));

const saveLikes = () =>
  localStorage.setItem("foodChefLikes", JSON.stringify(likes));

function renderFoods() {
  const search = ($("#food-search").value || "")
    .trim()
    .toLowerCase();

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
    <article class="food-card" data-id="${f.id}"
      style="transition-delay:${(i%4)*65}ms">

      <div class="food-img">
        <img src="${f.image}"
          alt="${f.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80'">

        <span class="food-category">${f.category}</span>

        <button class="like-btn ${likes.includes(f.id)?"on":""}"
          data-like="${f.id}">
          ${likes.includes(f.id)?"♥":"♡"}
        </button>
      </div>

      <div class="food-info">
        <h3>${f.name}</h3>
        <p>${f.desc}</p>

        <div class="food-bottom">
          <span class="food-price">${money(f.price)}</span>
          <button class="add-btn" data-add="${f.id}">Add +</button>
        </div>
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
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          cardObserver.unobserve(e.target);
        }
      });
    }, {threshold:0.1});
  }

  $$(".food-card:not(.visible)").forEach(c =>
    cardObserver.observe(c)
  );
}

function addToCart(id, button) {
  const item = foods.find(f => f.id === Number(id));
  if (!item) return;

  const existing = cart.find(c => c.id === item.id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({...item, qty:1});
  }

  saveCart();
  renderCart();

  if (button) {
    button.textContent = "✓ Added";
    button.classList.add("added");

    setTimeout(() => {
      button.textContent = "Add +";
      button.classList.remove("added");
    }, 850);
  }

  animateToCart(button);
}

function animateToCart(button) {
  const img = button?.closest(".food-card")
    ?.querySelector(".food-img img");

  const target = $("#open-cart");

  if (!img || !target) return;

  const a = img.getBoundingClientRect();
  const b = target.getBoundingClientRect();

  const clone = img.cloneNode();

  clone.className = "food-fly";

  Object.assign(clone.style, {
    left:a.left+"px",
    top:a.top+"px",
    width:a.width+"px",
    height:a.height+"px"
  });

  document.body.appendChild(clone);

  requestAnimationFrame(() => {
    Object.assign(clone.style, {
      left:(b.left+b.width/2)+"px",
      top:(b.top+b.height/2)+"px",
      width:"22px",
      height:"22px",
      opacity:"0.2",
      transform:"rotate(360deg)"
    });
  });

  setTimeout(() => {
    clone.remove();

    target.animate(
      [
        {transform:"scale(1)"},
        {transform:"scale(1.12) rotate(-4deg)"},
        {transform:"scale(1)"}
      ],
      {duration:450}
    );
  },700);
}

function renderCart() {
  const count = cart.reduce((n,c) => n+c.qty,0);

  const total = cart.reduce(
    (n,c) => n+c.price*c.qty,0
  );

  $("#cart-count").textContent = count;
  $("#cart-total").textContent = money(total);
  $("#checkout-total").textContent = money(total);

  $("#cart-items").innerHTML = cart.length
    ? cart.map(c => `
      <div class="cart-row">
        <img src="${c.image}" alt="${c.name}">

        <div>
          <h4>${c.name}</h4>
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

  if (item.qty <= 0) {
    cart = cart.filter(c => c.id !== Number(id));
  }

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
  const f = foods.find(x => x.id === Number(id));
  if (!f) return;

  selectedProduct = f;

  $("#modal-image").src = f.image;
  $("#modal-image").alt = f.name;
  $("#modal-category").textContent = f.category;
  $("#modal-name").textContent = f.name;
  $("#modal-description").textContent = f.desc;
  $("#modal-price").textContent = money(f.price);

  $("#product-modal").classList.add("show");
}

function closeModals() {
  $$(".modal-backdrop").forEach(m =>
    m.classList.remove("show")
  );
}

function renderOrders() {
  $("#order-history").innerHTML = orders.length
    ? orders.slice().reverse().map(o => `
      <article class="order-card">
        <div>
          <b>Order #${o.id}</b>
          <p>${o.date} · ${o.items} item(s) · ${o.payment}</p>
          <p>${o.customer} · ${o.address}</p>
        </div>

        <div style="text-align:right">
          <b>${money(o.total)}</b>
          <p class="order-status">Order placed</p>
        </div>
      </article>
    `).join("")
    : `<p class="empty-history">Your orders will appear here after checkout.</p>`;
}

// Category selection
$("#category-list").addEventListener("click", e => {
  const btn = e.target.closest("[data-category]");
  if (!btn) return;

  activeCategory = btn.dataset.category;

  $$(".category").forEach(b =>
    b.classList.toggle("active", b === btn)
  );

  renderFoods();
});

// Search and sort
$("#food-search").addEventListener("input", renderFoods);
$("#food-sort").addEventListener("change", renderFoods);

// Food cards
$("#food-items").addEventListener("click", e => {
  const add = e.target.closest("[data-add]");

  if (add) {
    addToCart(add.dataset.add, add);
    return;
  }

  const like = e.target.closest("[data-like]");

  if (like) {
    const id = Number(like.dataset.like);

    likes = likes.includes(id)
      ? likes.filter(x => x !== id)
      : [...likes,id];

    saveLikes();
    renderFoods();
    return;
  }

  const card = e.target.closest(".food-card");

  if (card) openModal(card.dataset.id);
});

// Cart controls
$("#cart-items").addEventListener("click", e => {
  const b = e.target.closest("[data-qty]");
  if (b) changeQty(b.dataset.id,b.dataset.qty);
});

$("#open-cart").addEventListener("click",openCart);
$("#close-cart").addEventListener("click",closeCart);
$("#drawer-overlay").addEventListener("click",closeCart);

// Product popup
$("#modal-add").addEventListener("click",() => {
  if (selectedProduct) {
    addToCart(selectedProduct.id);
    closeModals();
    openCart();
  }
});

$$("[data-close-modal]").forEach(b =>
  b.addEventListener("click",closeModals)
);

$$(".modal-backdrop").forEach(m =>
  m.addEventListener("click",e => {
    if (e.target === m) closeModals();
  })
);

// Checkout
$("#checkout-open").addEventListener("click",() => {
  if (!cart.length) return;

  closeCart();
  $("#checkout-modal").classList.add("show");
});

$("#checkout-form").addEventListener("submit",e => {
  e.preventDefault();

  if (!cart.length) return;

  const data = new FormData(e.currentTarget);

  const total = cart.reduce(
    (n,c) => n+c.price*c.qty,0
  );

  const id = String(Date.now()).slice(-7);

  const order = {
    id,
    customer:data.get("customer"),
    phone:data.get("phone"),
    address:data.get("address"),
    payment:data.get("payment"),
    total,
    items:cart.reduce((n,c) => n+c.qty,0),
    date:new Date().toLocaleString()
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
    `Order #${id} has been recorded. This is a demo checkout; no payment has been processed.`;

  $("#success-modal").classList.add("show");
});

// Mobile navigation
$("#menu-toggle").addEventListener("click",() =>
  $("#main-nav").classList.toggle("open")
);

$$('#main-nav a').forEach(a =>
  a.addEventListener("click",() =>
    $("#main-nav").classList.remove("open")
  )
);

// Close popup with Escape key
document.addEventListener("keydown",e => {
  if (e.key === "Escape") {
    closeCart();
    closeModals();
  }
});

// Scroll progress
window.addEventListener("scroll",() => {
  const max =
    document.documentElement.scrollHeight-window.innerHeight;

  $("#scroll-progress").style.transform =
    `scaleX(${max>0 ? window.scrollY/max : 0})`;
},{passive:true});

// Initial setup
$("#year").textContent = new Date().getFullYear();

renderFoods();
renderCart();
renderOrders();