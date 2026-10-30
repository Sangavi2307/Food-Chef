
const foods = [
  {id:1,name:"Margherita Pizza",category:"Pizza",price:199,description:"Classic cheese and tomato pizza.",image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=80"},
  {id:2,name:"Farmhouse Pizza",category:"Pizza",price:249,description:"Loaded with fresh vegetables and cheese.",image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80"},
  {id:3,name:"Paneer Pizza",category:"Pizza",price:269,description:"Spicy paneer with delicious toppings.",image:"https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=700&q=80"},
  {id:4,name:"Cheese Burger",category:"Burgers",price:129,description:"Juicy burger with melted cheese.",image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"},
  {id:5,name:"Veg Burger",category:"Burgers",price:99,description:"Crispy vegetable patty and fresh salad.",image:"https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80"},
  {id:6,name:"French Fries",category:"Fries",price:89,description:"Golden and crispy potato fries.",image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80"},
  {id:7,name:"Peri Peri Fries",category:"Fries",price:109,description:"Fries tossed in spicy peri peri seasoning.",image:"https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=700&q=80"},
  {id:8,name:"Aloo Samosa",category:"Indian Snacks",price:20,description:"Crispy pastry filled with spiced potato.",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80"},
  {id:9,name:"Pani Puri",category:"Indian Snacks",price:50,description:"Crunchy puris with tangy flavoured water.",image:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=700&q=80"},
  {id:10,name:"Veg Puff",category:"Bakery",price:25,description:"Flaky pastry with savoury vegetable filling.",image:"https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=700&q=80"},
  {id:11,name:"Chocolate Brownie",category:"Desserts",price:99,description:"Rich and delicious chocolate brownie.",image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80"},
  {id:12,name:"Chocolate Donut",category:"Desserts",price:69,description:"Soft donut topped with chocolate.",image:"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=80"},
  {id:13,name:"Cold Coffee",category:"Drinks",price:99,description:"Refreshing chilled coffee.",image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80"},
  {id:14,name:"Fresh Orange Juice",category:"Drinks",price:79,description:"Fresh and refreshing orange juice.",image:"https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80"},
  {id:15,name:"Paneer Roll",category:"Indian Snacks",price:89,description:"Soft wrap filled with spicy paneer.",image:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=80"},
  {id:16,name:"Veg Sandwich",category:"Bakery",price:79,description:"Fresh sandwich with vegetable filling.",image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80"}
];

let cart = [];
let selectedCategory = "All";

const foodItems = document.getElementById("food-items");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const searchInput = document.getElementById("search-input");

function renderFoods() {
  const search = searchInput.value.trim().toLowerCase();

  const filtered = foods.filter(food => {
    const categoryMatch = selectedCategory === "All" || food.category === selectedCategory;
    const searchMatch = food.name.toLowerCase().includes(search) ||
      food.category.toLowerCase().includes(search);
    return categoryMatch && searchMatch;
  });

  if (filtered.length === 0) {
    foodItems.innerHTML = '<p class="empty-message">No food items found. Try another search.</p>';
    return;
  }

  foodItems.innerHTML = filtered.map(food => `
    <article class="food-card">
      <img src="${food.image}" alt="${food.name}" loading="lazy">
      <div class="food-info">
        <span class="food-category">${food.category}</span>
        <h3>${food.name}</h3>
        <p>${food.description}</p>
        <div class="food-bottom">
          <span class="food-price">₹${food.price}</span>
          <button class="add-btn" data-add="${food.id}">+ Add</button>
        </div>
      </div>
    </article>
  `).join("");
}

function addToCart(id) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity++;
  } else {
    const food = foods.find(item => item.id === id);
    if (food) cart.push({...food, quantity:1});
  }
  renderCart();
}

function changeQuantity(id, amount) {
  const item = cart.find(item => item.id === id);
  if (!item) return;

  item.quantity += amount;
  if (item.quantity <= 0) {
    cart = cart.filter(food => food.id !== id);
  }
  renderCart();
}

function renderCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCount.textContent = totalItems;
  cartTotal.textContent = `Total: ₹${totalPrice}`;

  if (cart.length === 0) {
    cartItems.textContent = "Your cart is empty. Explore the menu to add food!";
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-row">
      <div>
        <strong>${item.name}</strong>
        <small>₹${item.price} × ${item.quantity}</small>
      </div>
      <div class="quantity-controls">
        <button data-minus="${item.id}" aria-label="Decrease ${item.name}">−</button>
        <strong>${item.quantity}</strong>
        <button data-plus="${item.id}" aria-label="Increase ${item.name}">+</button>
      </div>
      <strong>₹${item.price * item.quantity}</strong>
    </div>
  `).join("");
}

foodItems.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(Number(button.dataset.add));
});

cartItems.addEventListener("click", event => {
  const minus = event.target.closest("[data-minus]");
  const plus = event.target.closest("[data-plus]");
  if (minus) changeQuantity(Number(minus.dataset.minus), -1);
  if (plus) changeQuantity(Number(plus.dataset.plus), 1);
});

document.getElementById("category-list").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  selectedCategory = button.dataset.category;
  document.querySelectorAll(".category").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  renderFoods();
});

searchInput.addEventListener("input", renderFoods);

document.getElementById("cart-button").addEventListener("click", () => {
  document.getElementById("cart").scrollIntoView({behavior:"smooth"});
});

document.getElementById("checkout-button").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty. Please add food items first.");
    return;
  }
  document.getElementById("checkout").scrollIntoView({behavior:"smooth"});
});

document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("open");
  });
});

document.getElementById("checkout-form").addEventListener("submit", event => {
  event.preventDefault();

  if (cart.length === 0) {
    alert("Please add food items to your cart before ordering.");
    return;
  }

  const form = new FormData(event.target);
  const orderNumber = "FC" + Date.now().toString().slice(-7);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const message = document.getElementById("order-message");
  message.textContent =
    `Demo order ${orderNumber} created! Total: ₹${total}. This is only a website demonstration; no real order was sent.`;

  event.target.reset();
  cart = [];
  renderCart();
});

renderFoods();
renderCart();
