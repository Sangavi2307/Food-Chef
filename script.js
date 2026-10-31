(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var rnd = Math.random, body = document.body;
  function safe(fn) { try { fn(); } catch (e) { console.error("FOOD CHEF:", e); } }
  function esc(t) { var d = document.createElement("div"); d.textContent = t; return d.innerHTML; }

  /* ================= DATA ================= */
  // [category, name, description, price (₹), emoji, photo keywords]
  var SNACKS = [
    ["South Indian","Samosa","Crisp pastry with spiced potato",20,"🥟","samosa"],
    ["South Indian","Masala Vada","Crunchy lentil fritters with spices",15,"🧆","vada"],
    ["South Indian","Medu Vada","Soft inside, golden outside",18,"🍩","medu,vada"],
    ["South Indian","Onion Pakoda","Onion fritters fried to a crisp",40,"🧅","pakora"],
    ["South Indian","Mysore Bonda","Fluffy fried dumplings, coconut chutney",35,"🟡","bonda"],
    ["South Indian","Bajji","Batter-fried banana pepper or raw banana",30,"🌶️","bajji"],
    ["South Indian","Murukku","Crunchy rice-flour spirals",45,"🥨","murukku"],
    ["South Indian","Thatta","Thin crisp rice crackers",25,"🍘","rice,cracker"],
    ["Chinese","Veg Spring Rolls","Crispy rolls packed with vegetables",70,"🌯","spring,rolls"],
    ["Chinese","Gobi Manchurian","Cauliflower in tangy Manchurian sauce",90,"🥦","gobi,manchurian"],
    ["Chinese","Paneer Manchurian","Paneer cubes in spicy garlic sauce",110,"🧀","paneer,chilli"],
    ["Chinese","Veg Momos","Steamed dumplings with red chutney",60,"🥟","momos"],
    ["Chinese","Chilli Potato","Crispy potato tossed in chilli sauce",80,"🥔","chilli,potato"],
    ["Chinese","Veg Noodles","Wok-tossed noodles with vegetables",85,"🍜","noodles"],
    ["Fast Food","French Fries","Golden salted fries",70,"🍟","french,fries"],
    ["Fast Food","Peri Peri Fries","Fries dusted with peri peri spice",90,"🌶️","fries,spicy"],
    ["Fast Food","Veg Burger","Crispy patty, fresh veggies, soft bun",80,"🍔","veg,burger"],
    ["Fast Food","Cheese Sandwich","Grilled bread with melted cheese",65,"🥪","cheese,sandwich"],
    ["Fast Food","Pizza","Cheesy pizza on a thin base",150,"🍕","pizza"],
    ["Fast Food","Garlic Bread","Toasted bread with garlic butter",75,"🥖","garlic,bread"],
    ["Bakery and Sweet Snacks","Veg Puff","Flaky puff pastry with veg filling",25,"🥐","puff,pastry"],
    ["Bakery and Sweet Snacks","Cream Roll","Crisp roll filled with sweet cream",30,"🍥","cream,roll"],
    ["Bakery and Sweet Snacks","Chocolate Brownie","Fudgy chocolate square",60,"🍫","brownie"],
    ["Bakery and Sweet Snacks","Donut","Soft glazed ring donut",50,"🍩","donut"],
    ["Bakery and Sweet Snacks","Cupcake","Frosted vanilla cupcake",45,"🧁","cupcake"],
    ["Bakery and Sweet Snacks","Cookies","Buttery cookies with choco chips",40,"🍪","cookies"],
    ["Special Snacks","Cheese Balls","Molten cheese in a crunchy shell",95,"🧀","cheese,balls"],
    ["Special Snacks","Paneer Tikka","Smoky grilled paneer with mint dip",130,"🍢","paneer,tikka"],
    ["Special Snacks","Corn Cheese Nuggets","Sweet corn and cheese bites",100,"🌽","corn,nuggets"],
    ["Special Snacks","Aloo Tikki","Spiced potato patties",40,"🥔","aloo,tikki"],
    ["Special Snacks","Bread Roll","Potato-stuffed bread, fried crisp",35,"🍞","bread,roll"],
    ["Special Snacks","Popcorn","Buttery or caramel popcorn",50,"🍿","popcorn"]
  ].map(function (a, i) { return { id: i, cat: a[0], name: a[1], desc: a[2], price: a[3], emoji: a[4], key: a[5] }; });

  var DISTRICTS = ["Ariyalur","Chengalpattu","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kallakurichi","Kancheepuram","Karur","Krishnagiri","Madurai","Mayiladuthurai","Nagapattinam","Kanniyakumari","Namakkal","Perambalur","Pudukkottai","Ramanathapuram","Ranipet","Salem","Sivaganga","Tenkasi","Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli","Tirupathur","Tiruppur","Tiruvallur","Tiruvannamalai","The Nilgiris","Vellore","Viluppuram","Virudhunagar"];
  var STAGES = [["Order Placed","📝"],["Order Confirmed","✅"],["Preparing Your Food","👨‍🍳"],["Ready for Pickup","📦"],["Out for Delivery","🛵"],["Delivered","🎉"]];
  var STAGE_MS = 6000; // demo: one stage every 6 seconds

  /* ================= STATE ================= */
  function load(k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v || d; } catch (e) { return d; } }
  var cart = load("fc_cart", {}), orders = load("fc_orders", []);
  var tempQty = {}, cat = "All", activeOrder = null;
  Object.keys(cart).forEach(function (k) { if (!SNACKS[k]) delete cart[k]; }); // drop stale ids
  function save() { try { localStorage.setItem("fc_cart", JSON.stringify(cart)); localStorage.setItem("fc_orders", JSON.stringify(orders)); } catch (e) {} }
  function rupee(n) { return "₹" + n; }
  function toast(msg) {
    var t = $("#toast"); t.textContent = msg; t.classList.add("on");
    clearTimeout(toast.t); toast.t = setTimeout(function () { t.classList.remove("on"); }, 2200);
  }

  /* ================= CORE FEATURES ================= */
  /* ---- Menu ---- */
  var cats = ["All"].concat(SNACKS.map(function (s) { return s.cat; }).filter(function (c, i, a) { return a.indexOf(c) === i; }));
  $("#filters").innerHTML = cats.map(function (c) { return '<button class="chip' + (c === "All" ? " on" : "") + '" data-c="' + c + '">' + c + "</button>"; }).join("");
  $("#filters").addEventListener("click", function (e) {
    var c = e.target.getAttribute("data-c"); if (!c) return;
    cat = c; $$(".chip").forEach(function (b) { b.classList.toggle("on", b === e.target); }); renderMenu();
  });
  $("#search").addEventListener("input", renderMenu);
  $("#sort").addEventListener("change", renderMenu);

  function renderMenu() {
    var q = $("#search").value.trim().toLowerCase(), sort = $("#sort").value;
    var list = SNACKS.filter(function (s) { return (cat === "All" || s.cat === cat) && (s.name + " " + s.desc).toLowerCase().indexOf(q) > -1; });
    if (sort) list.sort(function (a, b) { return sort === "asc" ? a.price - b.price : b.price - a.price; });
    $("#empty").hidden = list.length > 0;
    $("#grid").innerHTML = list.map(function (s, i) {
      return '<article class="card" style="animation-delay:' + Math.min(i, 12) * 45 + 'ms"><div class="pic">' + s.emoji +
        '<img loading="lazy" alt="' + s.name + '" data-src="https://loremflickr.com/480/360/' + s.key + '?lock=' + s.id + '"></div>' +
        '<div class="cb"><small>' + s.cat + "</small><h3>" + s.name + "</h3><p>" + s.desc + "</p>" +
        '<div class="row"><span class="price">' + rupee(s.price) + '</span><div class="qty"><button data-d="-1" data-id="' + s.id + '" aria-label="Decrease quantity">−</button><span id="q' + s.id + '">' + (tempQty[s.id] || 1) + '</span><button data-d="1" data-id="' + s.id + '" aria-label="Increase quantity">+</button></div></div>' +
        '<button class="add" data-add="' + s.id + '">Add to Cart</button></div></article>';
    }).join("");
    // Photos load in the background; the emoji tile stays if a photo fails.
    $$("#grid img").forEach(function (img) {
      img.onload = function () { img.classList.add("ok"); };
      img.src = img.getAttribute("data-src");
    });
  }
  $("#grid").addEventListener("click", function (e) {
    var t = e.target.closest("button"); if (!t) return;
    var id = t.getAttribute("data-id"), add = t.getAttribute("data-add");
    if (t.hasAttribute("data-d")) {
      tempQty[id] = Math.max(1, Math.min(20, (tempQty[id] || 1) + +t.getAttribute("data-d")));
      $("#q" + id).textContent = tempQty[id];
    } else if (add !== null) {
      cart[add] = Math.min(99, (cart[add] || 0) + (tempQty[add] || 1));
      tempQty[add] = 1; $("#q" + add).textContent = 1;
      save(); renderCart(); toast(SNACKS[add].name + " added to cart");
      var b = $("#cartBtn"); b.classList.remove("bounce"); void b.offsetWidth; b.classList.add("bounce");
    }
  });

  /* ---- Cart drawer ---- */
  function cartTotal() { return Object.keys(cart).reduce(function (t, k) { return t + SNACKS[k].price * cart[k]; }, 0); }
  function cartCount() { return Object.keys(cart).reduce(function (n, k) { return n + cart[k]; }, 0); }
  function renderCart() {
    var keys = Object.keys(cart), d = $("#fDistrict").value, h = $("#fHotel").value.trim(), tot = cartTotal();
    $("#cartCount").textContent = cartCount();
    $("#checkout").hidden = !keys.length;
    $("#cartItems").innerHTML = keys.length ? keys.map(function (k) {
      var s = SNACKS[k];
      return '<div class="ci"><span style="font-size:1.6rem">' + s.emoji + "</span><b>" + s.name + "</b>" +
        '<div class="qty"><button data-c="-1" data-k="' + k + '" aria-label="Decrease">−</button><span>' + cart[k] + '</span><button data-c="1" data-k="' + k + '" aria-label="Increase">+</button></div>' +
        "<span>" + rupee(s.price * cart[k]) + '</span><button class="rm" data-r="' + k + '" aria-label="Remove ' + s.name + '">🗑️</button></div>';
    }).join("") : '<p class="muted">Your cart is empty. Add snacks from the menu.</p>';
    $("#cartSum").innerHTML = keys.length ? "<div>Subtotal: " + rupee(tot) + "</div><div>District: " + (d || "Not selected yet") + "</div><div>Restaurant: " + esc(h || "Not entered yet") + '</div><div class="tot">Total: ' + rupee(tot) + "</div>" : "";
    $("#sum").innerHTML = keys.length ? "<b>Order summary:</b> " + keys.map(function (k) { return SNACKS[k].name + " ×" + cart[k]; }).join(", ") + " — <b>" + rupee(tot) + "</b>" : "Your cart is empty, so the food item and quantity above will be ordered.";
  }
  $("#cartItems").addEventListener("click", function (e) {
    var t = e.target.closest("button"); if (!t) return;
    var k = t.getAttribute("data-k"), r = t.getAttribute("data-r");
    if (k) { cart[k] += +t.getAttribute("data-c"); if (cart[k] < 1) delete cart[k]; }
    else if (r) delete cart[r]; else return;
    save(); renderCart();
  });
  function drawer(open) {
    $("#drawer").classList.toggle("open", open); $("#veil").classList.toggle("on", open);
    $("#drawer").setAttribute("aria-hidden", !open);
  }
  $("#cartBtn").addEventListener("click", function () { drawer(true); });
  $("#closeCart").addEventListener("click", function () { drawer(false); });
  $("#veil").addEventListener("click", function () { drawer(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") drawer(false); });
  $("#checkout").addEventListener("click", function () { drawer(false); $("#order").scrollIntoView({ behavior: "smooth" }); toast("Add your details and place the order"); });

  /* ---- Order form ---- */
  $("#fDistrict").innerHTML = '<option value="">Select district</option>' + DISTRICTS.map(function (d) { return "<option>" + d + "</option>"; }).join("");
  $("#fItem").innerHTML = SNACKS.map(function (s) { return '<option value="' + s.id + '">' + s.name + " – " + rupee(s.price) + "</option>"; }).join("");
  $("#fDistrict").addEventListener("change", renderCart);
  $("#fHotel").addEventListener("input", renderCart);
  $("#fPhone").addEventListener("input", function (e) { e.target.value = e.target.value.replace(/\D/g, ""); });

  function check(sel, ok, msg) {
    var box = $(sel).parentNode; box.classList.remove("bad"); void box.offsetWidth;
    box.classList.toggle("bad", !ok); $("small", box).textContent = ok ? "" : msg; return ok;
  }
  $("#orderForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var res = [
      check("#fName", $("#fName").value.trim().length >= 2, "Enter your name."),
      check("#fPhone", /^[6-9]\d{9}$/.test($("#fPhone").value), "Enter a valid 10-digit mobile number."),
      check("#fDistrict", !!$("#fDistrict").value, "Choose your district."),
      check("#fHotel", $("#fHotel").value.trim().length >= 2, "Enter the hotel or restaurant name."),
      check("#fAddr", $("#fAddr").value.trim().length >= 6, "Enter your full delivery address.")
    ];
    if (res.indexOf(false) > -1) { toast("Please fix the highlighted fields"); return; }
    var items = Object.keys(cart).map(function (k) { return { n: SNACKS[k].name, q: cart[k], p: SNACKS[k].price }; });
    if (!items.length) {
      var s = SNACKS[$("#fItem").value], q = Math.max(1, Math.min(50, parseInt($("#fQty").value, 10) || 1));
      items = [{ n: s.name, q: q, p: s.price }];
    }
    var o = {
      id: "FC" + Date.now().toString().slice(-7), name: $("#fName").value.trim(), phone: $("#fPhone").value,
      hotel: $("#fHotel").value.trim(), district: $("#fDistrict").value, addr: $("#fAddr").value.trim(), note: $("#fNote").value.trim(),
      items: items, total: items.reduce(function (t, i) { return t + i.p * i.q; }, 0),
      date: new Date().toLocaleString("en-IN"), stage: 0, t0: Date.now()
    };
    orders.unshift(o); activeOrder = o.id; cart = {}; save();
    $("#orderForm").reset(); renderCart(); renderTrack();
    var c = $("#confirm"); c.hidden = false;
    c.innerHTML = "<h3>🎉 Order placed!</h3><p style='margin-top:8px'>Thank you, " + esc(o.name) + ". Your order ID is <b>" + o.id + "</b>. Total: " + rupee(o.total) + ".</p><p><a class='btn' href='#track' style='margin-top:14px'>Track Order</a></p>";
    c.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  /* ---- Order tracking (demo) ---- */
  function tick() {
    var changed = false;
    orders.forEach(function (o) {
      var s = Math.min(5, Math.floor((Date.now() - o.t0) / STAGE_MS));
      if (s !== o.stage) { o.stage = s; changed = true; }
    });
    if (changed) { save(); renderTrack(); }
  }
  function renderTrack() {
    if (!orders.length) { $("#tracker").innerHTML = '<p class="muted">No orders yet. Place an order to see