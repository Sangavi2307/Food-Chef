
// ==========================================
// FOOD CHEF - COMPLETE WEBSITE JAVASCRIPT
// ==========================================

// FOOD MENU - 32 ITEMS

const menuItems = [
  {id:1,name:"Idli",category:"South Indian",price:30,desc:"Soft and fluffy idlis with chutney.",image:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600"},
  {id:2,name:"Masala Dosa",category:"South Indian",price:80,desc:"Crispy dosa with potato masala.",image:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600"},
  {id:3,name:"Plain Dosa",category:"South Indian",price:50,desc:"Golden crispy traditional dosa.",image:"https://images.unsplash.com/photo-1630383249896-424e482df921?w=600"},
  {id:4,name:"Pongal",category:"South Indian",price:60,desc:"Traditional ghee pongal.",image:"https://images.unsplash.com/photo-1626500155537-93690c24099b?w=600"},
  {id:5,name:"Poori Masala",category:"South Indian",price:65,desc:"Fluffy poori with potato masala.",image:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600"},
  {id:6,name:"Medu Vada",category:"South Indian",price:40,desc:"Crispy vada with chutney.",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600"},

  {id:7,name:"Veg Fried Rice",category:"Chinese",price:120,desc:"Delicious vegetable fried rice.",image:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600"},
  {id:8,name:"Chicken Fried Rice",category:"Chinese",price:160,desc:"Spicy chicken fried rice.",image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600"},
  {id:9,name:"Veg Noodles",category:"Chinese",price:110,desc:"Stir-fried vegetable noodles.",image:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600"},
  {id:10,name:"Chicken Noodles",category:"Chinese",price:150,desc:"Hot and tasty chicken noodles.",image:"https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600"},
  {id:11,name:"Gobi Manchurian",category:"Chinese",price:100,desc:"Crispy cauliflower Manchurian.",image:"https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600"},
  {id:12,name:"Paneer Fried Rice",category:"Chinese",price:145,desc:"Fried rice with paneer cubes.",image:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600"},

  {id:13,name:"Veg Burger",category:"Fast Food",price:90,desc:"Fresh vegetable burger.",image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600"},
  {id:14,name:"Cheese Burger",category:"Fast Food",price:130,desc:"Cheesy and delicious burger.",image:"https://images.unsplash.com/photo-1550547660-d9450f859349?w=600"},
  {id:15,name:"French Fries",category:"Fast Food",price:70,desc:"Golden crispy potato fries.",image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600"},
  {id:16,name:"Veg Pizza",category:"Fast Food",price:180,desc:"Pizza with fresh vegetables.",image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"},
  {id:17,name:"Chicken Pizza",category:"Fast Food",price:230,desc:"Loaded chicken pizza.",image:"https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600"},
  {id:18,name:"Sandwich",category:"Fast Food",price:80,desc:"Fresh vegetable sandwich.",image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600"},

  {id:19,name:"Chocolate Cake",category:"Bakery & Sweets",price:100,desc:"Rich chocolate cake.",image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600"},
  {id:20,name:"Black Forest Cake",category:"Bakery & Sweets",price:120,desc:"Classic black forest cake.",image:"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600"},
  {id:21,name:"Donut",category:"Bakery & Sweets",price:60,desc:"Soft glazed donut.",image:"https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600"},
  {id:22,name:"Cupcake",category:"Bakery & Sweets",price:50,desc:"Fresh cream cupcake.",image:"https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600"},
  {id:23,name:"Gulab Jamun",category:"Bakery & Sweets",price:40,desc:"Sweet and soft gulab jamun.",image:"https://images.unsplash.com/photo-1666190092159-3e8c7f8a9b0b?w=600"},
  {id:24,name:"Brownie",category:"Bakery & Sweets",price:80,desc:"Chocolate fudge brownie.",image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600"},

  {id:25,name:"Samosa",category:"Special Snacks",price:20,desc:"Crispy potato-filled samosa.",image:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=600"},
  {id:26,name:"Spring Rolls",category:"Special Snacks",price:89,desc:"Crispy vegetable spring rolls.",image:"https://images.unsplash.com/photo-1548507200-9a4d6f5a3b31?w=600"},
  {id:27,name:"Pani Puri",category:"Special Snacks",price:50,desc:"Tangy and spicy pani puri.",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600"},
  {id:28,name:"French Toast",category:"Special Snacks",price:90,desc:"Sweet golden French toast.",image:"https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600"},
  {id:29,name:"Chicken Puff",category:"Special Snacks",price:35,desc:"Flaky chicken puff pastry.",image:"https://images.unsplash.com/photo-1626074353765-517a681e40be?w=600"},
  {id:30,name:"Veg Puff",category:"Special Snacks",price:25,desc:"Crispy vegetable puff.",image:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=600"},
  {id:31,name:"Onion Pakoda",category:"Special Snacks",price:50,desc:"Crispy onion fritters.",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600"},
  {id:32,name:"Paneer Roll",category:"Special Snacks",price:100,desc:"Delicious paneer stuffed roll.",image:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600"}
];

// TAMIL NADU DISTRICTS

const districts = [
  "Ariyalur","Chengalpattu","Chennai","Coimbatore","Cuddalore",
  "Dharmapuri","Dindigul","Erode","Kallakurichi","Kancheepuram",
  "Karur","Krishnagiri","Madurai","Mayiladuthurai","Nagapattinam",
  "Kanniyakumari","Namakkal","Perambalur","Pudukkottai",
  "Ramanathapuram","Ranipet","Salem","Sivaganga","Tenkasi",
  "Thanjavur","Theni","Thoothukudi","Tiruchirappalli",
  "Tirunelveli","Tirupathur","Tiruppur","Tiruvallur",
  "Tiruvannamalai","The Nilgiris","Vellore","Viluppuram",
  "Virudhunagar"
];

// CART DATA

let cart = JSON.parse(localStorage.getItem("foodChefCart")) || [];
let activeCategory = "All";
let searchText = "";

// HELPER

const getElement = id => document.getElementById(id);

function saveCart() {
  localStorage.setItem("foodChefCart", JSON.stringify(cart));
}

function money(amount) {
  return "₹" + amount;
}

function showToast(message) {
  const toast = getElement("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.foodChefToastTimer);

  window.foodChefToastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// DISTRICT DROPDOWN

function loadDistricts() {
  const select = getElement("districtSelect");
  if (!select) return;

  select.innerHTML =
    '<option value="">Choose your district</option>';

  districts.forEach(district => {
    const option = document.createElement("option");
    option.value = district;
    option.textContent = district;
    select.appendChild(option);
  });
}

// MANUAL FOOD DROPDOWN

function loadManualFood() {
  const select = getElement("manualFood");
  if (!select) return;

  select.innerHTML = '<option value="">Choose a snack</option>';

  menuItems.forEach(item => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = `${item.name} - ₹${item.price}`;
    select.appendChild(option);
  });
}

// MENU DISPLAY

function renderMenu() {
  const grid = getElement("foodGrid");
  if (!grid) return;

  let filteredItems = menuItems.filter(item => {
    const categoryMatch =
      activeCategory === "All" ||
      item.category === activeCategory;

    const searchMatch =
      item.name.toLowerCase().includes(searchText) ||
      item.category.toLowerCase().includes(searchText);

    return categoryMatch && searchMatch;
  });

  const sortValue = getElement("sortSelect")?.value || "featured";

  if (sortValue === "low") {
    filteredItems.sort((a,b) => a.price - b.price);
  } else if (sortValue === "high") {
    filteredItems.sort((a,b) => b.price - a.price);
  } else if (sortValue === "az") {
    filteredItems.sort((a,b) => a.name.localeCompare(b.name));
  }

  if (filteredItems.length === 0) {
    grid.innerHTML = "<p>No food items found. Try another search.</p>";
    return;
  }

  grid.innerHTML = filteredItems.map(item => `
    <article class="food-card" style="overflow:hidden;">
      <img
        src="${item.image}"
        alt="${item.name}"
        loading="lazy"
        style="width:100%;height:220px;object-fit:cover;display:block;"
        onerror="this.onerror=null;this.src='https://placehold.co/600x400/f7f3e9/82713d?text=FOOD+CHEF';"
      >

      <div class="food-card-content" style="padding:18px;">
        <p style="font-size:11px;letter-spacing:1px;text-transform:uppercase;">
          ${item.category}
        </p>

        <h3>${item.name}</h3>

        <p>${item.desc}</p>

        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:15px;">
          <strong style="font-size:19px;">₹${item.price}</strong>

          <button
            type="button"
            class="button button-dark"
            onclick="addToCart(${item.id})"
          >
            Add +
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

// CATEGORY FILTERS

function setupCategories() {
  const tabs = getElement("categoryTabs");
  if (!tabs) return;

  tabs.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    activeCategory = button.dataset.category;

    tabs.querySelectorAll("[data-category]").forEach(tab => {
      tab.classList.toggle("active", tab === button);
    });

    renderMenu();
  });
}

// SEARCH AND SORT

function setupSearch() {
  getElement("searchInput")?.addEventListener("input", event => {
    searchText = event.target.value.trim().toLowerCase();
    renderMenu();
  });

  getElement("sortSelect")?.addEventListener("change", renderMenu);
}

// ADD TO CART

function addToCart(id, quantity = 1) {
  const item = menuItems.find(food => food.id === Number(id));
  if (!item) return;

  const existing = cart.find(food => food.id === item.id);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({...item, quantity});
  }

  saveCart();
  renderCart();

  showToast(item.name + " added to your bag!");
}

// CHANGE QUANTITY

function changeQuantity(id, amount) {
  const item = cart.find(food => food.id === Number(id));
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(food => food.id !== Number(id));
  }

  saveCart();
  renderCart();
}

// REMOVE ITEM

function removeItem(id) {
  cart = cart.filter(food => food.id !== Number(id));
  saveCart();
  renderCart();
}

// CART TOTAL

function getTotal() {
  return cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
}

// CART DISPLAY

function renderCart() {
  const quantity = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const count = getElement("cartCount");
  if (count) count.textContent = quantity;

  const summary = getElement("summaryItems");
  const drawer = getElement("drawerItems");

  const cartHTML = cart.length
    ? cart.map(item => `
      <div class="summary-item">
        <div>
          <strong>${item.name}</strong>
          <p>₹${item.price} × ${item.quantity}</p>
        </div>

        <div class="cart-quantity">
          <button type="button" onclick="changeQuantity(${item.id},-1)">−</button>
          <span>${item.quantity}</span>
          <button type="button" onclick="changeQuantity(${item.id},1)">+</button>
          <button type="button" onclick="removeItem(${item.id})">×</button>
        </div>
      </div>
    `).join("")
    : '<p class="empty-cart">Your bag is waiting for something tasty.</p>';

  if (summary) summary.innerHTML = cartHTML;
  if (drawer) drawer.innerHTML = cartHTML;

  const subtotal = getElement("subtotal");
  const total = getElement("total");
  const drawerTotal = getElement("drawerTotal");

  if (subtotal) subtotal.textContent = money(getTotal());
  if (total) total.textContent = money(getTotal());
  if (drawerTotal) drawerTotal.textContent = money(getTotal());
}

// CART DRAWER

function openCart() {
  getElement("cartDrawer")?.classList.add("open");
  getElement("drawerBackdrop")?.classList.add("show");

  getElement("cartDrawer")?.setAttribute("aria-hidden", "false");
}

function closeCart() {
  getElement("cartDrawer")?.classList.remove("open");
  getElement("drawerBackdrop")?.classList.remove("show");

  getElement("cartDrawer")?.setAttribute("aria-hidden", "true");
}

// MANUAL ADD

function setupManualAdd() {
  getElement("manualAdd")?.addEventListener("click", () => {
    const id = Number(getElement("manualFood")?.value);
    const quantity = Number(getElement("manualQty")?.value || 1);

    if (!id) {
      alert("Please choose a food item.");
      return;
    }

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 20) {
      alert("Please enter a quantity between 1 and 20.");
      return;
    }

    addToCart(id, quantity);
  });
}

// ORDER TRACKING

const trackingStages = [
  "Order Placed",
  "Confirmed",
  "Preparing",
  "Ready for Pickup",
  "Out for Delivery",
  "Delivered"
];

function trackOrder(orderId) {
  const orders = JSON.parse(
    localStorage.getItem("foodChefOrders") || "[]"
  );

  const order = orders.find(
    item => item.id.toLowerCase() === orderId.trim().toLowerCase()
  );

  const result = getElement("trackingResult");
  if (!result) return;

  if (!order) {
    result.innerHTML = "<p>Order not found. Please check your order ID.</p>";
    return;
  }

  result.innerHTML = `
    <h3>Order ${order.id}</h3>
    <p>Customer: ${order.customer.name}</p>
    <p>Total: ₹${order.total}</p>

    <div class="tracking-progress">
      ${trackingStages.map((stage, index) => `
        <div class="tracking-step ${index <= order.status ? "completed" : ""}">
          <span>${index + 1}</span>
          <p>${stage}</p>
        </div>
      `).join("")}
    </div>

    <h3>Current Status: ${trackingStages[order.status]}</h3>
  `;
}

function setupTracking() {
  getElement("trackForm")?.addEventListener("submit", event => {
    event.preventDefault();

    const orderId = getElement("trackId")?.value || "";
    trackOrder(orderId);
  });
}

// PLACE ORDER

function setupOrderForm() {
  const form = getElement("orderForm");
  if (!form) return;

  form.addEventListener("submit", event => {
    event.preventDefault();

    if (cart.length === 0) {
      alert("Your bag is empty. Please add food items first.");
      return;
    }

    const formData = new FormData(form);

    const customer = {
      name: formData.get("customerName"),
      mobile: formData.get("mobile"),
      district: formData.get("district"),
      hotel: formData.get("hotel"),
      address: formData.get("address"),
      instructions: formData.get("instructions")
    };

    const order = {
      id: "FC" + Date.now().toString().slice(-8),
      customer: customer,
      items: [...cart],
      total: getTotal(),
      status: 0,
      date: new Date().toLocaleString()
    };

    const orders = JSON.parse(
      localStorage.getItem("foodChefOrders") || "[]"
    );

    orders.push(order);

    localStorage.setItem(
      "foodChefOrders",
      JSON.stringify(orders)
    );

    cart = [];
    saveCart();
    renderCart();
    form.reset();

    closeCart();

    const trackInput = getElement("trackId");
    if (trackInput) trackInput.value = order.id;

    trackOrder(order.id);

    alert(
      "Your demo order has been placed successfully!\n\n" +
      "Your Order ID: " + order.id
    );

    getElement("track")?.scrollIntoView({behavior:"smooth"});
  });
}

// NAVIGATION

function setupNavigation() {
  const toggle = getElement("menuToggle");
  const nav = getElement("navLinks");

  toggle?.addEventListener("click", () => {
    nav?.classList.toggle("active");
  });

  nav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
}

// CART BUTTONS

function setupCartButtons() {
  getElement("openCart")?.addEventListener("click", openCart);
  getElement("summaryOpenCart")?.addEventListener("click", openCart);
  getElement("closeCart")?.addEventListener("click", closeCart);
  getElement("drawerBackdrop")?.addEventListener("click", closeCart);

  getElement("goCheckout")?.addEventListener("click", () => {
    closeCart();
    getElement("order")?.scrollIntoView({behavior:"smooth"});
  });
}

// FOOTER YEAR

function setYear() {
  const year = getElement("year");
  if (year) year.textContent = new Date().getFullYear();
}

// INITIALIZE WEBSITE

document.addEventListener("DOMContentLoaded", () => {
  loadDistricts();
  loadManualFood();

  renderMenu();
  renderCart();

  setupCategories();
  setupSearch();
  setupManualAdd();
  setupOrderForm();
  setupTracking();
  setupNavigation();
  setupCartButtons();

  setYear();

  console.log("FOOD CHEF website loaded successfully!");
});
