
const menuItems = [
  {id:1,name:"Idli",category:"South Indian",price:30,desc:"Soft and fluffy idlis with chutney.",image:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600"},
  {id:2,name:"Masala Dosa",category:"South Indian",price:80,desc:"Crispy dosa with potato masala.",image:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600"},
  {id:3,name:"Plain Dosa",category:"South Indian",price:50,desc:"Golden crispy traditional dosa.",image:"https://images.unsplash.com/photo-1630383249896-424e482df921?w=600"},
  {id:4,name:"Pongal",category:"South Indian",price:60,desc:"Traditional ghee pongal.",image:"https://images.unsplash.com/photo-1626500155537-93690c24099b?w=600"},
  {id:5,name:"Poori Masala",category:"South Indian",price:65,desc:"Fluffy poori with potato masala.",image:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600"},
  {id:6,name:"Medu Vada",category:"South Indian",price:40,desc:"Crispy vada with coconut chutney.",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600"},
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

const districts = [
  "Ariyalur","Chengalpattu","Chennai","Coimbatore","Cuddalore",
  "Dharmapuri","Dindigul","Erode","Kallakurichi","Kancheepuram",
  "Karur","Krishnagiri","Madurai","Mayiladuthurai","Nagapattinam",
  "Kanniyakumari","Namakkal","Perambalur","Pudukkottai",
  "Ramanathapuram","Ranipet","Salem","Sivaganga","Tenkasi",
  "Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli",
  "Tirupathur","Tiruppur","Tiruvallur","Tiruvannamalai",
  "The Nilgiris","Vellore","Viluppuram","Virudhunagar"
];

let cart = JSON.parse(localStorage.getItem("foodChefCart")) || [];
let currentCategory = "All";
let currentSearch = "";

const $ = (selector) => document.querySelector(selector);

function saveCart() {
  localStorage.setItem("foodChefCart", JSON.stringify(cart));
}

function renderDistricts() {
  const districtSelect = $("#district");
  if (!districtSelect) return;

  districtSelect.innerHTML =
    '<option value="">Select District</option>' +
    districts.map(d => `<option value="${d}">${d}</option>`).join("");
}

function renderCategories() {
  const container = $("#categoryFilters");
  if (!container) return;

  const categories = ["All", ...new Set(menuItems.map(item => item.category))];

  container.innerHTML = categories.map(category => `
    <button class="category-btn ${category === currentCategory ? "active" : ""}"
      data-category="${category}">
      ${category}
    </button>
  `).join("");
}

function renderMenu() {
  const container = $("#menuGrid");
  if (!container) return;

  let filtered = menuItems.filter(item => {
    const matchesCategory =
      currentCategory === "All" || item.category === currentCategory;

    const matchesSearch =
      item.name.toLowerCase().includes(currentSearch.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const sort = $("#sortMenu")?.value;

  if (sort === "low") filtered.sort((a,b) => a.price - b.price);
  if (sort === "high") filtered.sort((a,b) => b.price - a.price);

  if (!filtered.length) {
    container.innerHTML = "<p>No food items found.</p>";
    return;
  }

  container.innerHTML = filtered.map(item => `
    <article class="food-card">
      <img src="${item.image}" alt="${item.name}" loading="lazy"
        onerror="this.src='https://placehold.co/600x400?text=Food+Chef'">
      <div class="food-card-content">
        <span>${item.category}</span>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="food-card-bottom">
          <strong>₹${item.price}</strong>
          <button onclick="addToCart(${item.id})">Add +</button>
        </div>
      </div>
    </article>
  `).join("");
}

function addToCart(id) {
  const item = menuItems.find(food => food.id === id);
  if (!item) return;

  const existing = cart.find(food => food.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({...item, quantity:1});
  }

  saveCart();
  renderCart();
  showToast(`${item.name} added to cart`);
}

function changeQuantity(id, amount) {
  const item = cart.find(food => food.id === id);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(food => food.id !== id);
  }

  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
}

function getSubtotal() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function renderCart() {
  const container = $("#cartItems");
  const count = $("#cartCount");
  const subtotal = $("#cartSubtotal");
  const total = $("#cartTotal");

  const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (count) count.textContent = quantity;

  if (container) {
    container.innerHTML = cart.length ? cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h4>${item.name}</h4>
          <p>₹${item.price} × ${item.quantity}</p>
          <div class="quantity-controls">
            <button onclick="changeQuantity(${item.id},-1)">−</button>
            <span>${item.quantity}</span>
            <button onclick="changeQuantity(${item.id},1)">+</button>
          </div>
        </div>
        <button onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    `).join("") : "<p>Your cart is empty.</p>";
  }

  if (subtotal) subtotal.textContent = `₹${getSubtotal()}`;
  if (total) total.textContent = `₹${getSubtotal()}`;
}

function openCart() {
  $("#cartDrawer")?.classList.add("open");
  $("#cartOverlay")?.classList.add("show");
}

function closeCart() {
  $("#cartDrawer")?.classList.remove("open");
  $("#cartOverlay")?.classList.remove("show");
}

function showToast(message) {
  let toast = $("#toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

function placeOrder(event) {
  event.preventDefault();

  if (!cart.length) {
    alert("Please add food items to your cart.");
    return;
  }

  const form = $("#orderForm");
  if (!form) return;

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
    customer,
    items: [...cart],
    total: getSubtotal(),
    status: 0,
    date: new Date().toLocaleString()
  };

  const orders = JSON.parse(localStorage.getItem("foodChefOrders")) || [];
  orders.push(order);
  localStorage.setItem("foodChefOrders", JSON.stringify(orders));

  cart = [];
  saveCart();
  renderCart();
  closeCart();
  form.reset();

  alert(`Order placed successfully!\nYour Order ID: ${order.id}`);

  const orderIdInput = $("#trackingOrderId");
  if (orderIdInput) orderIdInput.value = order.id;

  trackOrder(order.id);
}

const trackingStages = [
  "Order Placed",
  "Confirmed",
  "Preparing",
  "Ready for Pickup",
  "Out for Delivery",
  "Delivered"
];

function trackOrder(orderId) {
  const orders = JSON.parse(localStorage.getItem("foodChefOrders")) || [];
  const order = orders.find(o => o.id === orderId.trim());

  const result = $("#trackingResult");

  if (!result) return;

  if (!order) {
    result.innerHTML = "<p>Order not found. Please check your Order ID.</p>";
    return;
  }

  result.innerHTML = `
    <h3>Order ${order.id}</h3>
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
    <p>Customer: ${order.customer.name}</p>
  `;
}

function simulateOrderProgress() {
  let orders = JSON.parse(localStorage.getItem("foodChefOrders")) || [];
  let changed = false;

  orders = orders.map(order => {
    if (order.status < trackingStages.length - 1) {
      order.status++;
      changed = true;
    }
    return order;
  });

  if (changed) {
    localStorage.setItem("foodChefOrders", JSON.stringify(orders));
  }
}

// Navigation
function setupNavigation() {
  $("#menuToggle")?.addEventListener("click", () => {
    $("#navLinks")?.classList.toggle("active");
  });

  document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
      $("#navLinks")?.classList.remove("active");
    });
  });
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  renderDistricts();
  renderCategories();
  renderMenu();
  renderCart();
  setupNavigation();

  $("#categoryFilters")?.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    currentCategory = button.dataset.category;
    renderCategories();
    renderMenu();
  });

  $("#searchInput")?.addEventListener("input", event => {
    currentSearch = event.target.value;
    renderMenu();
  });

  $("#sortMenu")?.addEventListener("change", renderMenu);

  $("#cartButton")?.addEventListener("click", openCart);
  $("#closeCart")?.addEventListener("click", closeCart);
  $("#cartOverlay")?.addEventListener("click", closeCart);

  $("#orderForm")?.addEventListener("submit", placeOrder);

  $("#trackOrderForm")?.addEventListener("submit", event => {
    event.preventDefault();
    trackOrder($("#trackingOrderId")?.value || "");
  });

  // Demo tracking: advances one stage every 30 seconds.
  setInterval(simulateOrderProgress, 30000);
});
