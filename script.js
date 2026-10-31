(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };

  /* ---------- Data: [category, name, description, price, emoji, image keyword] ---------- */
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

  var DISTRICTS = "Ariyalur,Chengalpattu,Chennai,Coimbatore,Cuddalore,Dharmapuri,Dindigul,Erode,Kallakurichi,Kancheepuram,Karur,Krishnagiri,Madurai,Mayiladuthurai,Nagapattinam,Kanniyakumari,Namakkal,Perambalur,Pudukkottai,Ramanathapuram,Ranipet,Salem,Sivaganga,Tenkasi,Thanjavur,Theni,Thoothukudi,Tiruchirappalli,Tirunelveli,Tirupathur,Tiruppur,Tiruvallur,Tiruvannamalai,The Nilgiris,Vellore,Viluppuram,Virudhunagar".split(",");

  var STAGES = [["Order Placed","📝"],["Order Confirmed","✅"],["Preparing Your Food","👨‍🍳"],["Ready for Pickup","📦"],["Out for Delivery","🛵"],["Delivered","🎉"]];

  /* ---------- State (saved in localStorage) ---------- */
  function load(k, d) { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } }
  var cart = load("fc_cart", {});        // { id: qty }
  var orders = load("fc_orders", []);
  var tempQty = {};
  var cat = "All", activeOrder = null;
  var save = function () { localStorage.setItem("fc_cart", JSON.stringify(cart)); localStorage.setItem("fc_orders", JSON.stringify(orders)); };
  var rupee = function (n) { return "₹" + n; };

  function toast(msg) {
    var t = $("#toast"); t.textContent = msg; t.classList.add("on");
    clearTimeout(toast.t); toast.t = setTimeout(function () { t.classList.remove("on"); }, 2000);
  }

  /* ---------- Loader, nav, particles ---------- */
  window.addEventListener("load", function () { setTimeout(function () { $("#loader").classList.add("done"); }, 700); });
  $("#burger").onclick = function () { $("#links").classList.toggle("open"); };
  $("#links").onclick = function () { $("#links").classList.remove("open"); };

  var P = $("#particles");
  for (var i = 0; i < 28; i++) {
    var s = document.createElement("i"), z = 3 + Math.random() * 5;
    s.className = "spark";
    s.style.cssText = "left:" + Math.random() * 100 + "%;width:" + z + "px;height:" + z + "px;animation-duration:" + (7 + Math.random() * 9) + "s;animation-delay:-" + Math.random() * 12 + "s";
    P.appendChild(s);
  }

  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } });
  }, { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  /* ---------- Menu ---------- */
  var cats = ["All"].concat(SNACKS.map(function (s) { return s.cat; }).filter(function (c, i, a) { return a.indexOf(c) === i; }));
  $("#filters").innerHTML = cats.map(function (c) { return '<button class="chip' + (c === "All" ? " on" : "") + '" data-c="' + c + '">' + c + "</button>"; }).join("");
  $("#filters").onclick = function (e) {
    if (!e.target.dataset.c) return;
    cat = e.target.dataset.c;
    document.querySelectorAll(".chip").forEach(function (b) { b.classList.toggle("on", b === e.target); });
    renderMenu();
  };
  $("#search").oninput = renderMenu;
  $("#sort").onchange = renderMenu;

  function renderMenu() {
    var q = $("#search").value.trim().toLowerCase(), sort = $("#sort").value;
    var list = SNACKS.filter(function (s) {
      return (cat === "All" || s.cat === cat) && (s.name + " " + s.desc).toLowerCase().indexOf(q) > -1;
    });
    if (sort) list.sort(function (a, b) { return sort === "asc" ? a.price - b.price : b.price - a.price; });
    $("#empty").hidden = list.length > 0;
    $("#grid").innerHTML = list.map(function (s, i) {
      var q2 = tempQty[s.id] || 1;
      return '<article class="card" style="animation-delay:' + i * 40 + 'ms"><div class="pic" data-e="' + s.emoji + '">' +
        '<img loading="lazy" src="https://loremflickr.com/400/300/' + s.key + '?lock=' + s.id + '" alt="' + s.name + '"></div>' +
        '<div class="cb"><small>' + s.cat + "</small><h3>" + s.name + "</h3><p>" + s.desc + "</p>" +
        '<div class="row"><span class="price">' + rupee(s.price) + '</span><div class="qty"><button data-d="-1" data-id="' + s.id + '" aria-label="Decrease">−</button><span id="q' + s.id + '">' + q2 + '</span><button data-d="1" data-id="' + s.id + '" aria-label="Increase">+</button></div></div>' +
        '<button class="add" data-add="' + s.id + '">Add to Cart</button></div></article>';
    }).join("");
    document.querySelectorAll(".pic img").forEach(function (img) {
      img.onerror = function () { img.parentNode.textContent = img.parentNode.dataset.e; }; // emoji fallback
    });
  }
  $("#grid").onclick = function (e) {
    var t = e.target;
    if (t.dataset.d) {
      var id = t.dataset.id, v = Math.max(1, Math.min(20, (tempQty[id] || 1) + +t.dataset.d));
      tempQty[id] = v; $("#q" + id).textContent = v;
    } else if (t.dataset.add) {
      var k = t.dataset.add;
      cart[k] = (cart[k] || 0) + (tempQty[k] || 1);
      tempQty[k] = 1; $("#q" + k).textContent = 1;
      save(); renderCart(); toast(SNACKS[k].name + " added to cart");
      var ic = $("#cartIcon"); ic.classList.remove("bounce"); void ic.offsetWidth; ic.classList.add("bounce");
    }
  };

  /* ---------- Cart ---------- */
  function cartTotal() { return Object.keys(cart).reduce(function (t, k) { return t + SNACKS[k].price * cart[k]; }, 0); }
  function renderCart() {
    var keys = Object.keys(cart);
    $("#cartCount").textContent = keys.reduce(function (n, k) { return n + cart[k]; }, 0);
    $("#checkout").style.display = keys.length ? "" : "none";
    if (!keys.length) { $("#cartItems").innerHTML = '<p class="muted">Your cart is empty. Add snacks from the menu.</p>'; $("#cartSum").innerHTML = ""; return; }
    $("#cartItems").innerHTML = keys.map(function (k) {
      var s = SNACKS[k];
      return '<div class="ci"><span style="font-size:1.6rem">' + s.emoji + "</span><b>" + s.name + "</b>" +
        '<div class="qty"><button data-c="-1" data-k="' + k + '">−</button><span>' + cart[k] + '</span><button data-c="1" data-k="' + k + '">+</button></div>' +
        "<span>" + rupee(s.price * cart[k]) + '</span><button class="rm" data-r="' + k + '" aria-label="Remove">🗑️</button></div>';
    }).join("");
    var d = $("#fDistrict").value, h = $("#fHotel").value.trim(), sub = cartTotal();
    $("#cartSum").innerHTML = "<div>Subtotal: " + rupee(sub) + "</div><div>District: " + (d || "Not selected") + "</div><div>Restaurant: " + (h || "Not entered") + '</div><div class="tot">Total: ' + rupee(sub) + "</div>";
  }
  $("#cartItems").onclick = function (e) {
    var t = e.target;
    if (t.dataset.c) { cart[t.dataset.k] += +t.dataset.c; if (cart[t.dataset.k] < 1) delete cart[t.dataset.k]; }
    else if (t.dataset.r) delete cart[t.dataset.r];
    else return;
    save(); renderCart();
  };
  $("#checkout").onclick = function () { $("#order").scrollIntoView(); toast("Fill in your details and place the order"); };

  /* ---------- Order form ---------- */
  $("#fDistrict").innerHTML = '<option value="">Select district</option>' + DISTRICTS.map(function (d) { return "<option>" + d + "</option>"; }).join("");
  $("#fItem").innerHTML = SNACKS.map(function (s) { return '<option value="' + s.id + '">' + s.name + " – " + rupee(s.price) + "</option>"; }).join("");
  $("#fDistrict").onchange = $("#fHotel").oninput = renderCart;

  function check(id, ok, msg) {
    var box = $(id).parentNode;
    box.classList.toggle("bad", !ok);
    box.querySelector("small").textContent = ok ? "" : msg;
    return ok;
  }
  $("#orderForm").onsubmit = function (e) {
    e.preventDefault();
    var v = [
      check("#fName", $("#fName").value.trim().length >= 2, "Enter your name."),
      check("#fPhone", /^[6-9]\d{9}$/.test($("#fPhone").value), "Enter a valid 10-digit mobile number."),
      check("#fDistrict", !!$("#fDistrict").value, "Choose your district."),
      check("#fHotel", $("#fHotel").value.trim().length >= 2, "Enter the hotel or restaurant name."),
      check("#fAddr", $("#fAddr").value.trim().length >= 6, "Enter your full delivery address.")
    ];
    if (v.indexOf(false) > -1) { toast("Please fix the highlighted fields"); return; }

    var items = Object.keys(cart).map(function (k) { return { n: SNACKS[k].name, q: cart[k], p: SNACKS[k].price }; });
    if (!items.length) { var s = SNACKS[$("#fItem").value], q = Math.max(1, Math.min(50, +$("#fQty").value || 1)); items = [{ n: s.name, q: q, p: s.price }]; }
    var o = {
      id: "FC" + Date.now().toString().slice(-7), name: $("#fName").value.trim(), phone: $("#fPhone").value,
      hotel: $("#fHotel").value.trim(), district: $("#fDistrict").value, addr: $("#fAddr").value.trim(), note: $("#fNote").value.trim(),
      items: items, total: items.reduce(function (t, i) { return t + i.p * i.q; }, 0), date: new Date().toLocaleString("en-IN"), stage: 0, t0: Date.now()
    };
    orders.unshift(o); activeOrder = o.id; cart = {}; save(); renderCart(); renderTrack();
    $("#orderForm").reset();
    var c = $("#confirm"); c.hidden = false;
    c.innerHTML = "<h3>🎉 Order placed!</h3><p>Thank you, " + o.name + ". Your order ID is <b>" + o.id + "</b>. Total: " + rupee(o.total) + '.</p><p><a class="btn" href="#track" style="margin-top:12px">Track Order</a></p>';
    c.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  /* ---------- Tracking (demo: advances every 6 seconds) ---------- */
  function tick() {
    var changed = false;
    orders.forEach(function (o) {
      var s = Math.min(5, Math.floor((Date.now() - o.t0) / 6000));
      if (s !== o.stage) { o.stage = s; changed = true; }
    });
    if (changed) { save(); renderTrack(); }
  }
  function renderTrack() {
    if (!orders.length) { $("#tracker").innerHTML = '<p class="muted">No orders yet. Place an order to see it here.</p>'; $("#history").innerHTML = ""; return; }
    var o = orders.filter(function (x) { return x.id === activeOrder; })[0] || orders[0];
    $("#tracker").innerHTML = '<div class="tcard"><dl>' +
      "<div><dt>Order ID</dt><dd>" + o.id + "</dd></div><div><dt>Customer</dt><dd>" + o.name + "</dd></div>" +
      "<div><dt>Restaurant</dt><dd>" + o.hotel + "</dd></div><div><dt>District</dt><dd>" + o.district + "</dd></div>" +
      "<div><dt>Items</dt><dd>" + o.items.map(function (i) { return i.n + " ×" + i.q; }).join(", ") + "</dd></div>" +
      "<div><dt>Total</dt><dd>" + rupee(o.total) + "</dd></div><div><dt>Placed</dt><dd>" + o.date + "</dd></div></dl>" +
      '<div class="prog"><i style="width:' + (o.stage / 5 * 100) + '%"></i></div><div class="steps">' +
      STAGES.map(function (s, i) { return '<div class="st' + (i <= o.stage ? " done" : "") + (i === o.stage ? " now" : "") + '"><span>' + s[1] + "</span>" + s[0] + "</div>"; }).join("") +
      "</div></div>";
    $("#history").innerHTML = orders.map(function (x) {
      return '<div class="hi" data-o="' + x.id + '"><b>' + x.id + "</b><span>" + x.date + "</span><span>" + rupee(x.total) + "</span><span>" + STAGES[x.stage][0] + "</span></div>";
    }).join("");
  }
  $("#history").onclick = function (e) {
    var r = e.target.closest(".hi"); if (!r) return;
    activeOrder = r.dataset.o; renderTrack(); $("#tracker").scrollIntoView({ behavior: "smooth" });
  };

  renderMenu(); renderCart(); renderTrack();
  setInterval(tick, 2000);
})();