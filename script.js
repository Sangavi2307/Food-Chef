// All 38 Tamil Nadu Districts
const DISTRICTS = [
  "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri",
  "Dindigul", "Erode", "Kallakurichi", "Kancheepuram", "Karur", "Krishnagiri",
  "Madurai", "Mayiladuthurai", "Nagapattinam", "Kanniyakumari", "Namakkal", "Perambalur",
  "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi",
  "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur",
  "Tiruppur", "Tiruvallur", "Tiruvannamalai", "The Nilgiris", "Vellore", "Viluppuram", "Virudhunagar"
];

// Complete Menu Items
const SNACKS_DATA = [
  // South Indian
  { id: "si-1", name: "Samosa", cat: "South Indian", price: 25, desc: "Crispy pastry stuffed with spiced potato and green peas.", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500" },
  { id: "si-2", name: "Masala Vada", cat: "South Indian", price: 20, desc: "Crunchy Bengal gram fritter seasoned with ginger and curry leaves.", img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500" },
  { id: "si-3", name: "Medu Vada", cat: "South Indian", price: 30, desc: "Golden fluffy lentil doughnut with coconut chutney.", img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500" },
  { id: "si-4", name: "Onion Pakoda", cat: "South Indian", price: 40, desc: "Golden spiced crispy shredded onion fritters.", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500" },
  // Chinese
  { id: "ch-1", name: "Veg Spring Rolls", cat: "Chinese", price: 90, desc: "Crispy rolls filled with shredded seasonal vegetables.", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500" },
  { id: "ch-2", name: "Gobi Manchurian", cat: "Chinese", price: 120, desc: "Crispy cauliflower florets in spicy garlic-soy glaze.", img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500" },
  { id: "ch-3", name: "Veg Momos", cat: "Chinese", price: 80, desc: "Steamed Himalayan dumplings with spicy red dip.", img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500" },
  // Fast Food
  { id: "ff-1", name: "French Fries", cat: "Fast Food", price: 70, desc: "Crispy salted golden potato fries.", img: "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=500" },
  { id: "ff-2", name: "Peri Peri Fries", cat: "Fast Food", price: 85, desc: "Fiery tossed fries dusted with spicy peri peri seasonings.", img: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=500" },
  { id: "ff-3", name: "Veg Burger", cat: "Fast Food", price: 110, desc: "Crispy spiced veg patty with cheddar slice & secret mayo.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500" },
  // Bakery
  { id: "bk-1", name: "Veg Puff", cat: "Bakery & Sweets", price: 30, desc: "Flaky golden bakery puff stuffed with curried potatoes.", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500" },
  { id: "bk-2", name: "Chocolate Brownie", cat: "Bakery & Sweets", price: 90, desc: "Rich fudgy dark chocolate brownie with ganache drizzle.", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500" },
  // Special Snacks
  { id: "sp-1", name: "Cheese Balls", cat: "Special Snacks", price: 120, desc: "Crispy golden orbs filled with molten cheese & herbs.", img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500" },
  { id: "sp-2", name: "Paneer Tikka", cat: "Special Snacks", price: 160, desc: "Clay-oven charred spiced cottage cheese cubes.", img: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=500" }
];

const STAGES = [
  "1. Order Placed",
  "2. Order Confirmed",
  "3. Preparing Food",
  "4. Ready for Pickup",
  "5. Out for Delivery",
  "6. Delivered"
];

let currentStage = 2; // "Preparing Food" default
let cart = {};

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
  populateDistricts();
  renderMenu('All');
  renderTracker();
});

// 1. Populate all 38 Tamil Nadu districts
function populateDistricts() {
  const select = document.getElementById('cust-district');
  DISTRICTS.forEach(dist => {
    const opt = document.createElement('option');
    opt.value = dist;
    opt.textContent = `${dist} District`;
    select.appendChild(opt);
  });
}

// 2. Render Snacks Menu Cards
function renderMenu(category) {
  const grid = document.getElementById('snacks-grid');
  grid.innerHTML = "";

  const items = category === 'All' 
    ? SNACKS_DATA 
    : SNACKS_DATA.filter(s => s.cat === category);

  items.forEach(snack => {
    const card = document.createElement('div');
    card.className = "snack-card";
    card.innerHTML = `
      <div>
        <img src="${snack.img}" alt="${snack.name}" />
        <div class="card-header">
          <span class="snack-name">${snack.name}</span>
          <span class="snack-price">₹${snack.price}</span>
        </div>
        <p class="snack-desc">${snack.desc}</p>
      </div>
      <button class="btn btn-primary" style="width:100%; padding:10px;" onclick="addToCart('${snack.id}', '${snack.name}')">
        Add to Cart
      </button>
    `;
    grid.appendChild(card);
  });
}

// 3. Category Filter Tabs
function filterCategory(cat) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  renderMenu(cat);
}

// 4. Cart Logic
function addToCart(id, name) {
  cart[id] = (cart[id] || 0) + 1;
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  document.getElementById('cart-count').textContent = count;
}

function toggleCart() {
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  if (count === 0) {
    alert("Your cart is empty! Please select some snacks from the menu.");
  } else {
    alert(`Your cart has ${count} snacks ready! Scroll down to the order form to complete your delivery.`);
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
  }
}

// 5. Place Order Form Handler
function handlePlaceOrder(e) {
  e.preventDefault();
  const name = document.getElementById('cust-name').value.trim();
  const mobile = document.getElementById('cust-mobile').value.trim();
  const district = document.getElementById('cust-district').value;
  const resto = document.getElementById('cust-resto').value.trim();

  if (mobile.length !== 10) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  const orderId = "FC-" + Math.floor(10000 + Math.random() * 90000);
  document.getElementById('track-id').textContent = orderId;
  document.getElementById('track-name').textContent = name;
  document.getElementById('track-resto').textContent = `${resto} • ${district} District`;

  currentStage = 0; // "Order Placed"
  renderTracker();

  alert(`Congratulations ${name}! Order #${orderId} successfully dispatched to ${resto} in ${district}.`);
  document.getElementById('tracking').scrollIntoView({ behavior: 'smooth' });
}

// 6. Order Tracking Timeline
function renderTracker() {
  const container = document.getElementById('stages-container');
  container.innerHTML = "";

  STAGES.forEach((stage, idx) => {
    const isDone = idx <= currentStage;
    const div = document.createElement('div');
    div.className = `stage-item ${isDone ? 'completed' : ''}`;
    div.innerHTML = `<div>${stage}</div>`;
    container.appendChild(div);
  });
}

function advanceStage() {
  currentStage = (currentStage + 1) % STAGES.length;
  renderTracker();
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}