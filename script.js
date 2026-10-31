
const foods = [
  {id:1,name:"Veg Pizza",category:"Pizza",price:199,desc:"Cheesy pizza loaded with fresh vegetables.",image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700"},
  {id:2,name:"Chicken Pizza",category:"Pizza",price:249,desc:"Delicious chicken pizza with melted cheese.",image:"https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=700"},
  {id:3,name:"Classic Burger",category:"Burgers",price:129,desc:"Juicy burger with fresh lettuce and sauce.",image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700"},
  {id:4,name:"Cheese Burger",category:"Burgers",price:159,desc:"A tasty burger filled with melted cheese.",image:"https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=700"},
  {id:5,name:"French Fries",category:"Snacks",price:89,desc:"Golden, crispy and perfectly seasoned fries.",image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700"},
  {id:6,name:"Spring Rolls",category:"Snacks",price:89,desc:"Crispy vegetable spring rolls.",image:"https://images.unsplash.com/photo-1548507200-9a4d6f5a3b31?w=700"},
  {id:7,name:"Samosa",category:"Snacks",price:30,desc:"Crispy pastry with a spicy potato filling.",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700"},
  {id:8,name:"Chicken Wings",category:"Snacks",price:189,desc:"Spicy and flavourful chicken wings.",image:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=700"},
  {id:9,name:"Veg Fried Rice",category:"Rice",price:120,desc:"Stir-fried rice with fresh vegetables.",image:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=700"},
  {id:10,name:"Chicken Fried Rice",category:"Rice",price:160,desc:"Classic fried rice with tender chicken.",image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=700"},
  {id:11,name:"Paneer Biryani",category:"Rice",price:170,desc:"Aromatic rice cooked with paneer and spices.",image:"https://images.unsplash.com/photo-1563379091339-03246963d96c?w=700"},
  {id:12,name:"Chicken Biryani",category:"Rice",price:190,desc:"Fragrant biryani with delicious chicken.",image:"https://images.unsplash.com/photo-1563379091339-03246963d96c?w=700"},
  {id:13,name:"Masala Dosa",category:"South Indian",price:80,desc:"Crispy dosa with a spiced potato filling.",image:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=700"},
  {id:14,name:"Idli",category:"South Indian",price:40,desc:"Soft steamed idlis served with chutney.",image:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=700"},
  {id:15,name:"Medu Vada",category:"South Indian",price:50,desc:"Crispy golden lentil fritters.",image:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=700"},
  {id:16,name:"Pongal",category:"South Indian",price:65,desc:"Comforting rice and lentil pongal.",image:"https://images.unsplash.com/photo-1630383249896-424e482df921?w=700"},
  {id:17,name:"Chocolate Cake",category:"Desserts",price:110,desc:"Rich chocolate cake for sweet moments.",image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700"},
  {id:18,name:"Brownie",category:"Desserts",price:90,desc:"Soft chocolate brownie with a rich centre.",image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700"},
  {id:19,name:"Ice Cream",category:"Desserts",price:70,desc:"Cool and creamy dessert.",image:"https://images.unsplash.com/photo-1501446529957-6226bd447c46?w=700"},
  {id:20,name:"Gulab Jamun",category:"Desserts",price:60,desc:"Soft sweet dumplings in sugar syrup.",image:"https://images.unsplash.com/photo-1666190092159-5b8e3a4f3e0b?w=700"},
  {id:21,name:"Fresh Lime Juice",category:"Drinks",price:45,desc:"Refreshing fresh lime drink.",image:"https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=700"},
  {id:22,name:"Mango Juice",category:"Drinks",price:60,desc:"Sweet mango juice served chilled.",image:"https://images.unsplash.com/photo-1546173159-315724a31696?w=700"},
  {id:23,name:"Cold Coffee",category:"Drinks",price:90,desc:"Creamy chilled coffee.",image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700"},
  {id:24,name:"Milkshake",category:"Drinks",price:100,desc:"Thick and creamy milkshake.",image:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=700"},
  {id:25,name:"Paneer Tikka",category:"Snacks",price:160,desc:"Grilled paneer with aromatic spices.",image:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=700"},
  {id:26,name:"Chicken Noodles",category:"Noodles",price:150,desc:"Stir-fried noodles with chicken.",image:"https://images.unsplash.com/photo-1585032226651-759b368d7246?w=700"},
  {id:27,name:"Veg Noodles",category:"Noodles",price:120,desc:"Hot noodles tossed with vegetables.",image:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=700"},
  {id:28,name:"Pasta",category:"Pasta",price:160,desc:"Creamy pasta with herbs and sauce.",image:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700"},
  {id:29,name:"White Sauce Pasta",category:"Pasta",price:180,desc:"Creamy white sauce pasta.",image:"https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=700"},
  {id:30,name:"Fish Fry",category:"Snacks",price:180,desc:"Crispy fish with traditional spices.",image:"https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=700"}
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

let cart = JSON.parse(localStorage.getItem("foodChefCart") || "[]");
let orders = JSON.parse(localStorage.getItem("foodChefOrders") || "[]");
let activeCategory = "All";
let customerDetails = null;

const foodGrid = document.getElementById("foodGrid");
const categoryList = document.getElementById("categoryList");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const toast = document.getElementById("toast");

function saveCart() {
  localStorage.setItem("foodChefCart", JSON.stringify(cart));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2300);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;",
    '"':"&quot;", "'":"&#039;"
  })[character]);
}

function loadDistricts() {
  const districtSelect = document.getElementById("district");
  districts.forEach(district => {
    const option = document.createElement("option");
    option.value = district;
    option.textContent = district;
    districtSelect.appendChild(option);
  });
}

function loadCategories() {
  const categories = ["All", ...new Set(foods.map(food => food.category))];
  categoryList.innerHTML = categories.map(category => `
    <button class="category-btn ${category === activeCategory ? "active" : ""}"
      data-category="${escapeHTML(category)}" type="button">
      ${escapeHTML(category)}
    </button>
  `).join("");

  categoryList.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      loadCategories();
      renderFoods();
    });
  });
}

function renderFoods() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  let filtered = foods.filter(food => {
    const matchesCategory = activeCategory === "All" || food.category === activeCategory;
    const matchesSearch = food.name.toLowerCase().includes(searchTerm) ||
      food.desc.toLowerCase().includes(searchTerm) ||
      food.category.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  if (sortSelect.value === "low") filtered.sort((a,b) => a.price - b.price);
  if (sortSelect.value === "high") filtered.sort((a,b) => b.price - a.price);
  if (sortSelect.value === "az") filtered.sort((a,b) => a.name.localeCompare(b.name));

  document.getElementById("emptyMessage").hidden = filtered.length !== 0;

  foodGrid.innerHTML = filtered.map(food => `
    <article class="food-card">
      <div class="food-visual">
        <img src="${food.image}" alt="${escapeHTML(food.name)}" loading="lazy">
        <span class="food-steam"></span>
        <span class="food-steam s2"></span>
        <span class="food-steam s3"></span>
        <span class="food-heat"></span>
        <span class="sizzle a"></span>
        <span class="sizzle b"></span>
        <span class="sizzle c"></span>
        <span class="food-tag">✦ ${escapeHTML(food.category.toUpperCase())}</span>
      </div>
      <div class="food-info">
        <h3>${escapeHTML(food.name)}</h3>
        <p>${escapeHTML(food.desc)}</p>
        <div class="food-bottom">
          <span class="food-price">₹${food.price}</span>
          <button class="add-btn" type="button" data-add="${food.id}">+ ADD TO CART</button>
        </div>
      </div>
    </article>
  `).join("");

  // If an image is unavailable, show a clean fallback instead of a broken icon.
  foodGrid.querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => {
      img.style.display = "none";
      img.parentElement.style.background =
        "radial-gradient(circle at center, #d9ad54, #49351b)";
      const fallback = document.createElement("span");
      fallback.textContent = "🍽️";
      fallback.style.cssText = "font-size:64px;position:absolute;inset:0;display:grid;place-items:center";
      img.parentElement.appendChild(fallback);
    }, { once: true });
  });

  foodGrid.querySelectorAll("[data-add]").forEach(button => {
    button.addEventListener("click", () => addToCart(Number(button.dataset.add)));
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
  showToast("Added to your food basket!");
}

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
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = count;

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-history">Your basket is empty. Add something delicious from the menu!</p>';
    cartTotal.textContent = "₹0";
    return;
  }

  let total = 0;
  cartItems.innerHTML = cart.map(item => {
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
          <button type="button" aria-label="Decrease quantity" data-minus="${food.id}">−</button>
          <strong>${item.quantity}</strong>
          <button type="button" aria-label="Increase quantity" data-plus="${food.id}">+</button>
        </div>
      </div>
    `;
  }).join("");

  cartTotal.textContent = `₹${total}`;

  cartItems.querySelectorAll("[data-minus]").forEach(button =>
    button.addEventListener("click", () => changeQuantity(Number(button.dataset.minus), -1))
  );
  cartItems.querySelectorAll("[data-plus]").forEach(button =>
    button.addEventListener("click", () => changeQuantity(Number(button.dataset.plus), 1))
  );
}

document.getElementById("customerForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const district = document.getElementById("district").value;
  const hotel = document.getElementById("hotel").value.trim();
  const address = document.getElementById("address").value.trim();
  const message = document.getElementById("formMessage");

  if (!/^[6-9]\d{9}$/.test(phone)) {
    message.style.color = "#b33b2e";
    message.textContent = "Please enter a valid 10-digit Indian mobile number.";
    return;
  }

  customerDetails = { name, phone, district, hotel, address };
  message.style.color = "#39804a";
  message.textContent = "Delivery details saved. Add food and place your demo order!";
  showToast("Delivery details saved.");
});

document.getElementById("checkoutBtn").addEventListener("click", () => {
  const message = document.getElementById("checkoutMessage");
  message.style.color = "#b33b2e";

  if (cart.length === 0) {
    message.textContent = "Your cart is empty. Please add food first.";
    return;
  }

  if (!customerDetails) {
    message.textContent = "Please complete and save your delivery details first.";
    document.getElementById("order").scrollIntoView({ behavior: "smooth" });
    return;
  }

  const items = cart.map(item => {
    const food = foods.find(entry => entry.id === item.id);
    return { name: food.name, price: food.price, quantity: item.quantity };
  });

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
  message.textContent = `Demo order ${order.orderId} has been saved in your order history!`;
  showToast("Your demo order is placed!");

  document.getElementById("orders").scrollIntoView({ behavior: "smooth" });
});

function renderOrders() {
  const history = document.getElementById("orderHistory");

  if (orders.length === 0) {
    history.innerHTML = '<p class="empty-history">No orders yet. Your placed orders will appear here.</p>';
    return;
  }

  history.innerHTML = orders.map(order => `
    <article class="history-card">
      <strong>Order ${escapeHTML(order.orderId)}</strong><br>
      <span>${escapeHTML(order.date)}</span><br>
      Customer: ${escapeHTML(order.customer.name)}<br>
      District: ${escapeHTML(order.customer.district)}<br>
      Hotel / Restaurant: ${escapeHTML(order.customer.hotel)}<br>
      Items: ${order.items.map(item =>
        `${escapeHTML(item.name)} × ${item.quantity}`
      ).join(", ")}<br>
      <strong>Total: ₹${order.total}</strong>
    </article>
  `).join("");
}

searchInput.addEventListener("input", renderFoods);
sortSelect.addEventListener("change", renderFoods);

document.getElementById("year").textContent = new Date().getFullYear();

loadDistricts();
loadCategories();
renderFoods();
renderCart();
renderOrders();
