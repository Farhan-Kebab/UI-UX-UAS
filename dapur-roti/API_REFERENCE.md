# 📚 API & Function Reference - Dapur Roti Rumahan

Dokumentasi lengkap semua fungsi JavaScript dalam project.

---

## 🏗️ Global Functions (js/script.js)

### **1. loadNavbar()**
**Tujuan:** Load navbar component dari file terpisah  
**Dipanggil:** DOMContentLoaded event  
**Return:** Promise (void)

```javascript
function loadNavbar() {
  fetch('components/navbar.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('navbar-placeholder').innerHTML = html;
      markActiveLink();
      setupMobileMenu();
    })
    .catch(error => console.error('Navbar loading error:', error));
}
```

**Behavior:**
- Fetch `components/navbar.html` file
- Inject HTML into `#navbar-placeholder` div
- Call markActiveLink() untuk highlight active page
- Call setupMobileMenu() untuk mobile toggle

**Usage:**
```html
<!-- Di setiap HTML page, letakkan: -->
<div id="navbar-placeholder"></div>

<!-- Script tag di footer: -->
<script src="js/script.js"></script>
```

---

### **2. setupMobileMenu()**
**Tujuan:** Toggle mobile hamburger menu  
**Dipanggil:** Setelah loadNavbar()  
**Return:** void

```javascript
function setupMobileMenu() {
  const hamburger = document.getElementById('hamburger-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when link is clicked
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}
```

**Behavior:**
- Find hamburger button (id: `hamburger-toggle`)
- Find mobile menu (id: `mobile-menu`)
- Toggle "hidden" class on click
- Auto-close menu when link clicked

**Dependencies:**
- HTML elements in `components/navbar.html`
- Tailwind "hidden" class

---

### **3. markActiveLink()**
**Tujuan:** Highlight current page link di navbar  
**Dipanggil:** Setelah loadNavbar()  
**Return:** void

```javascript
function markActiveLink() {
  const navLinks = document.querySelectorAll('#navbar-placeholder a[href]');
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (currentPath.endsWith(href) || 
        (href === 'index.html' && currentPath.includes('index.html'))) {
      link.classList.add('active-link');
    } else {
      link.classList.remove('active-link');
    }
  });
}
```

**Behavior:**
- Get all links dari navbar
- Compare dengan current pathname
- Add "active-link" class ke matching link

**Styling:**
```css
.active-link {
  @apply text-orange-600 font-bold border-b-2 border-orange-600;
}
```

---

### **4. getCart()**
**Tujuan:** Get cart array dari localStorage  
**Return:** Array of objects

```javascript
function getCart() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}
```

**Return Format:**
```javascript
[
  {
    id: 1,
    name: "Roti Tawar",
    price: 35000,
    image: "https://...",
    qty: 2
  },
  // ... more items
]
```

**Usage:**
```javascript
const cart = getCart();
console.log(cart);  // [{ id: 1, name: "Roti", qty: 2 }]
```

---

### **5. saveCart(cart)**
**Tujuan:** Save cart array ke localStorage  
**Parameters:** cart (Array of objects)  
**Return:** void

```javascript
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
```

**Usage:**
```javascript
let cart = getCart();
cart.push({ id: 1, name: "Roti", price: 35000, qty: 1 });
saveCart(cart);  // Simpan ke localStorage
```

---

### **6. addToCart(productId, name, price, image)**
**Tujuan:** Add product ke cart atau increase quantity  
**Parameters:**
- `productId` (Number) - Product ID
- `name` (String) - Product name
- `price` (Number) - Product price
- `image` (String) - Product image URL

**Return:** void

```javascript
function addToCart(productId, name, price, image) {
  let cart = getCart();
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({
      id: productId,
      name: name,
      price: price,
      image: image,
      qty: 1
    });
  }

  saveCart(cart);
  updateCartCount();
  showNotification(`${name} ditambahkan ke keranjang! 🛒`);
}
```

**Behavior:**
- Check apakah item sudah ada di cart
- Jika ada: increment qty
- Jika tidak: add new item dengan qty=1
- Save ke localStorage
- Update badge count
- Show notification toast

**Usage:**
```javascript
// Dari button onclick
<button onclick="addToCart(1, 'Roti Tawar', 35000, 'image.jpg')">
  Tambah Keranjang
</button>
```

---

### **7. removeFromCart(productId)**
**Tujuan:** Remove product dari cart  
**Parameters:** productId (Number)  
**Return:** void

```javascript
function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  updateCartCount();
}
```

**Behavior:**
- Find dan remove item dengan ID tertentu
- Save updated cart
- Update badge count

**Usage:**
```javascript
removeFromCart(1);  // Remove item dengan ID 1
```

---

### **8. updateCartCount()**
**Tujuan:** Update cart badge dengan jumlah item  
**Return:** void

```javascript
function updateCartCount() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cart-badge');

  if (badge) {
    badge.textContent = totalItems;
    badge.classList.toggle('hidden', totalItems === 0);
  }
}
```

**Behavior:**
- Calculate total items (sum semua qty)
- Update badge text
- Hide badge jika total = 0
- Show badge jika total > 0

**HTML Element:**
```html
<span id="cart-badge" class="...hidden">0</span>
```

---

### **9. showNotification(message)**
**Tujuan:** Show temporary toast notification  
**Parameters:** message (String)  
**Return:** void

```javascript
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}
```

**Behavior:**
- Create div dengan message
- Add "notification" class
- Append ke body
- Remove setelah 3 detik
- Auto-animation via CSS

**Styling:**
```css
.notification {
  @apply fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded;
  animation: slideInUp 0.5s ease;
}
```

**Usage:**
```javascript
showNotification('Item ditambahkan! ✅');
showNotification('Item dihapus dari keranjang 🗑️');
```

---

### **10. formatCurrency(amount)**
**Tujuan:** Format number ke format IDR (Rp)  
**Parameters:** amount (Number)  
**Return:** String

```javascript
function formatCurrency(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(amount);
}
```

**Examples:**
```javascript
formatCurrency(35000)     // "Rp 35.000"
formatCurrency(100000)    // "Rp 100.000"
formatCurrency(1500000)   // "Rp 1.500.000"
```

**Usage:**
```javascript
// Di HTML template
<p class="price">${formatCurrency(product.price)}</p>
```

---

## 📦 Product Functions (js/produk.js)

### **1. renderProducts(filter = 'semua')**
**Tujuan:** Render products dalam grid format  
**Parameters:** filter (String: 'semua', 'roti', 'pastry', 'spesial')  
**Return:** void

```javascript
function renderProducts(filter = 'semua') {
  const productGrid = document.getElementById('product-grid');
  
  let filteredProducts = products;
  if (filter !== 'semua') {
    filteredProducts = products.filter(p => p.category === filter);
  }

  productGrid.innerHTML = filteredProducts.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <span class="category-badge">${product.category}</span>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="price">${formatCurrency(product.price)}</p>
      <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">
        Tambah Keranjang
      </button>
    </div>
  `).join('');
}
```

**Behavior:**
- Filter products berdasarkan category
- Generate HTML dari product array
- Inject ke `#product-grid` element
- Include button onclick untuk add to cart

**Filter Options:**
```
'semua'   → Show all 12 products
'roti'    → Show 4 roti items
'pastry'  → Show 4 pastry items
'spesial' → Show 4 special items
```

**Usage:**
```javascript
renderProducts('semua');    // Show all
renderProducts('roti');     // Show roti only
renderProducts('pastry');   // Show pastry only
```

---

### **2. setupFilters()**
**Tujuan:** Setup filter button event listeners  
**Dipanggil:** DOMContentLoaded  
**Return:** void

```javascript
function setupFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active-filter'));
      // Add active class to clicked button
      this.classList.add('active-filter');
      // Render products with selected filter
      const filter = this.getAttribute('data-filter');
      renderProducts(filter);
    });
  });
}
```

**Behavior:**
- Add click listeners ke filter buttons
- Toggle "active-filter" class
- Call renderProducts dengan selected filter
- Update grid

**HTML Structure:**
```html
<button class="filter-btn active-filter" data-filter="semua">Semua</button>
<button class="filter-btn" data-filter="roti">Roti</button>
<button class="filter-btn" data-filter="pastry">Pastry</button>
<button class="filter-btn" data-filter="spesial">Spesial</button>
```

**Styling:**
```css
.filter-btn {
  @apply px-4 py-2 border-2 border-orange-300 rounded;
}
.active-filter {
  @apply bg-orange-600 text-white;
}
```

---

### **3. products (Array)**
**Tujuan:** Store product data  
**Type:** Array of Objects

```javascript
const products = [
  {
    id: 1,
    name: "Roti Tawar",
    category: "roti",
    price: 35000,
    image: "https://images.unsplash.com/...",
    description: "Roti tawar lembut dengan tekstur sempurna"
  },
  // ... 11 more items
];
```

**Product Object Structure:**
```javascript
{
  id: Number,              // Unique identifier
  name: String,            // Product name
  category: String,        // 'roti', 'pastry', 'spesial'
  price: Number,           // Price in Rupiah
  image: String,           // Image URL
  description: String      // Short description
}
```

**Initialization:**
```javascript
// On page load
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupFilters();
});
```

---

## 🛒 Cart Functions (js/keranjang.js)

### **1. renderCartItems()**
**Tujuan:** Display cart items dari localStorage  
**Return:** void

```javascript
function renderCartItems() {
  const cartContainer = document.getElementById('cart-items');
  const cart = getCart();

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="text-center py-12">
        <h3>Keranjang Kosong</h3>
        <!-- Empty state HTML -->
      </div>
    `;
    updateTotals();
    return;
  }

  cartContainer.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image}">
      <div class="item-info">
        <h4>${item.name}</h4>
        <p>${formatCurrency(item.price)}</p>
      </div>
      <div class="qty-control">
        <button onclick="decreaseQty(${index})">-</button>
        <span>${item.qty}</span>
        <button onclick="increaseQty(${index})">+</button>
      </div>
      <button onclick="deleteFromCart(${index})">🗑️</button>
    </div>
  `).join('');

  updateTotals();
}
```

**Behavior:**
- Check cart kosong?
- Jika kosong: show empty state message
- Jika ada items: render setiap item dengan controls
- Call updateTotals() setelah render

**Usage:**
```javascript
// Automatic on page load
document.addEventListener('DOMContentLoaded', renderCartItems);
```

---

### **2. increaseQty(index)**
**Tujuan:** Increase quantity item tertentu  
**Parameters:** index (Number - array index)  
**Return:** void

```javascript
function increaseQty(index) {
  let cart = getCart();
  if (cart[index]) {
    cart[index].qty += 1;
    saveCart(cart);
    renderCartItems();
  }
}
```

**Behavior:**
- Find item by index
- Increment qty
- Save to localStorage
- Re-render cart

---

### **3. decreaseQty(index)**
**Tujuan:** Decrease quantity atau delete jika qty = 1  
**Parameters:** index (Number)  
**Return:** void

```javascript
function decreaseQty(index) {
  let cart = getCart();
  if (cart[index]) {
    if (cart[index].qty > 1) {
      cart[index].qty -= 1;
      saveCart(cart);
    } else {
      deleteFromCart(index);
    }
    renderCartItems();
  }
}
```

**Behavior:**
- If qty > 1: decrement
- If qty = 1: delete item
- Save & re-render

---

### **4. deleteFromCart(index)**
**Tujuan:** Delete item dari cart  
**Parameters:** index (Number)  
**Return:** void

```javascript
function deleteFromCart(index) {
  let cart = getCart();
  const itemName = cart[index].name;
  cart.splice(index, 1);
  saveCart(cart);
  renderCartItems();
  showNotification(`${itemName} dihapus dari keranjang`);
}
```

**Behavior:**
- Remove item by index
- Save updated cart
- Re-render
- Show notification

---

### **5. updateTotals()**
**Tujuan:** Calculate & display subtotal, shipping, total  
**Return:** void

```javascript
function updateTotals() {
  const cart = getCart();
  const shippingCost = 20000;

  let subtotal = 0;
  cart.forEach(item => {
    subtotal += item.price * item.qty;
  });

  const total = subtotal + shippingCost;

  document.getElementById('subtotal').textContent = formatCurrency(subtotal);
  document.getElementById('shipping').textContent = formatCurrency(shippingCost);
  document.getElementById('total').textContent = formatCurrency(total);

  // Disable checkout button jika cart kosong
  const checkoutBtn = document.getElementById('checkout-btn');
  if (cart.length === 0) {
    checkoutBtn.disabled = true;
    checkoutBtn.classList.add('opacity-50', 'cursor-not-allowed');
  } else {
    checkoutBtn.disabled = false;
    checkoutBtn.classList.remove('opacity-50', 'cursor-not-allowed');
  }
}
```

**Calculation:**
```
Subtotal = Sum(price × qty) untuk semua items
Shipping = Fixed Rp 20.000
Total = Subtotal + Shipping
```

**HTML Elements:**
```html
<div id="subtotal">Rp 0</div>
<div id="shipping">Rp 20.000</div>
<div id="total">Rp 20.000</div>
<button id="checkout-btn">Checkout</button>
```

---

### **6. checkoutToWhatsApp()**
**Tujuan:** Generate WhatsApp message & open chat  
**Return:** void

```javascript
function checkoutToWhatsApp() {
  const cart = getCart();

  if (cart.length === 0) {
    alert('Keranjang kosong!');
    return;
  }

  // Build message
  let message = `*Pesanan Dapur Roti Rumahan*%0A%0A`;
  message += `Halo, saya ingin memesan:%0A%0A`;

  let subtotal = 0;
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    message += `${index + 1}. ${item.name}%0A`;
    message += `   Jumlah: ${item.qty} pcs%0A`;
    message += `   Harga: ${formatCurrencyForWhatsApp(item.price)} x ${item.qty}%0A`;
    message += `   Subtotal: ${formatCurrencyForWhatsApp(itemTotal)}%0A%0A`;
  });

  const total = subtotal + 20000;
  message += `Total: ${formatCurrencyForWhatsApp(total)}%0A%0A`;
  message += `Mohon konfirmasi. Terima kasih!`;

  // Open WhatsApp
  const waLink = `https://wa.me/6281234567890?text=${message}`;
  window.open(waLink, '_blank');

  // Clear cart
  setTimeout(() => {
    localStorage.removeItem('cart');
    renderCartItems();
    showNotification('Pesanan dikirim! 🎉');
  }, 500);
}
```

**WhatsApp Message Format:**
```
*Pesanan Dapur Roti Rumahan*

Halo, saya ingin memesan:

1. Roti Tawar
   Jumlah: 2 pcs
   Harga: Rp 35.000 x 2
   Subtotal: Rp 70.000

2. Croissant
   Jumlah: 1 pcs
   Harga: Rp 28.000 x 1
   Subtotal: Rp 28.000

Total: Rp 118.000

Mohon konfirmasi. Terima kasih!
```

**WhatsApp Number:**
- Edit: `const waNumber = '6281234567890';`
- Format: Tanpa +, hanya angka
- Example: +62-812-345-6789 → 6281234567890

---

### **7. formatCurrencyForWhatsApp(amount)**
**Tujuan:** Format currency untuk WhatsApp message  
**Parameters:** amount (Number)  
**Return:** String

```javascript
function formatCurrencyForWhatsApp(amount) {
  return `Rp ${amount.toLocaleString('id-ID')}`;
}
```

**Examples:**
```javascript
formatCurrencyForWhatsApp(35000)    // "Rp 35.000"
formatCurrencyForWhatsApp(100000)   // "Rp 100.000"
```

---

## 🔐 Login Functions (login.html)

### **1. handleLogin(event)**
**Tujuan:** Handle form submission dan validation  
**Parameters:** event (Form submit event)  
**Return:** void

```javascript
function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const remember = document.getElementById('remember').checked;

  // Validation
  if (!email || !password) {
    showError('Email dan password tidak boleh kosong!');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError('Format email tidak valid!');
    return;
  }

  // Check credentials
  const validEmail = 'demo@gmail.com';
  const validPassword = 'demo123';

  if (email === validEmail && password === validPassword) {
    loginSuccess(email, remember);
  } else {
    showError('Email atau password salah!');
  }
}
```

**Validation Checks:**
1. Email & password not empty
2. Email format valid (contains @ and .)
3. Credentials match

---

### **2. loginSuccess(email, remember)**
**Tujuan:** Save login state & redirect  
**Parameters:**
- `email` (String)
- `remember` (Boolean)

**Return:** void

```javascript
function loginSuccess(email, remember) {
  // Save to sessionStorage
  sessionStorage.setItem('isLoggedIn', 'true');
  sessionStorage.setItem('userEmail', email);
  
  // Save to localStorage if remember
  if (remember) {
    localStorage.setItem('rememberedEmail', email);
  }

  showNotification(`Selamat datang, ${email}!`);

  // Redirect after 1.5 seconds
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1500);
}
```

**Storage:**
- **sessionStorage:**
  - `isLoggedIn`: 'true'
  - `userEmail`: email address
  - Cleared when browser closed
- **localStorage:**
  - `rememberedEmail`: email address (if remember checked)
  - Persistent across sessions

---

### **3. showError(message)**
**Tujuan:** Display error message  
**Parameters:** message (String)  
**Return:** void

```javascript
function showError(message) {
  const errorMessage = document.getElementById('error-message');
  errorMessage.textContent = message;
  errorMessage.classList.remove('hidden');
  errorMessage.scrollIntoView({ behavior: 'smooth' });
}
```

---

## 📊 Data Flow Diagrams

### **Add to Cart Flow**
```
User clicks "Tambah Keranjang"
    ↓
addToCart(id, name, price, image)
    ↓
Check if item exists in cart array
    ↓
If YES:           If NO:
  increase qty  →  add new item with qty=1
    ↓                ↓
  saveCart() → Update localStorage
    ↓
  updateCartCount() → Update badge
    ↓
  showNotification() → Show toast
```

### **Checkout Flow**
```
User clicks "Checkout ke WhatsApp"
    ↓
checkoutToWhatsApp()
    ↓
Build message with items & total
    ↓
Generate WhatsApp link with message
    ↓
window.open(whatsAppLink)
    ↓
Clear localStorage cart
    ↓
renderCartItems() → Show empty cart
    ↓
Show success notification
```

### **Product Filter Flow**
```
User clicks filter button
    ↓
setupFilters() listener triggers
    ↓
Remove active class from all buttons
    ↓
Add active class to clicked button
    ↓
Get filter value (data-filter attribute)
    ↓
renderProducts(filter)
    ↓
Filter products array by category
    ↓
Render HTML cards to #product-grid
```

---

## 🔄 Storage & Data

### **localStorage (Persistent)**
```javascript
// Cart items
localStorage.getItem('cart')
// Returns: [{"id":1,"name":"Roti","qty":2,"price":35000,"image":"..."}]

// Remembered email
localStorage.getItem('rememberedEmail')
// Returns: "demo@gmail.com"
```

### **sessionStorage (Session Only)**
```javascript
// Login status
sessionStorage.getItem('isLoggedIn')
// Returns: "true" or null

// User email
sessionStorage.getItem('userEmail')
// Returns: "demo@gmail.com" or null
```

### **Clear All Data**
```javascript
// Clear cart
localStorage.removeItem('cart');

// Clear all localStorage
localStorage.clear();

// Clear all sessionStorage
sessionStorage.clear();
```

---

## 🎨 CSS Classes Reference

### **Utility Classes**
```css
.btn-primary        /* Orange button (primary action) */
.btn-secondary      /* Light button (secondary action) */
.btn-sm             /* Small button variant */
.card               /* Card container with shadow */
.product-card       /* Product card with hover effect */
.active-link        /* Active navbar link */
.active-filter      /* Active filter button */
.notification       /* Toast notification */
.hidden             /* Tailwind hidden class (display: none) */
```

### **Animation Classes**
```css
.animate-fadeIn     /* Fade in with slide up */
.animate-slideIn    /* Slide in from left/right */
.animate-pulse      /* Pulse animation */
```

---

## 🐛 Error Handling

### **Common Errors & Solutions**

**Error: "Cannot read properties of null"**
```javascript
// Problem: Element not found
// Solution: Check element ID exists in HTML
document.getElementById('product-grid')  // Must exist

// Debug:
console.log(document.getElementById('product-grid'));
// If null: element not found, check HTML
```

**Error: "localStorage is not defined"**
```javascript
// Problem: Running in context where localStorage unavailable
// Solution: Check browser supports storage

// Debug:
if (typeof(Storage) !== "undefined") {
  localStorage.setItem('cart', JSON.stringify(cart));
}
```

**Error: "Fetch failed"**
```javascript
// Problem: File not found or CORS issue
// Solution: 
// 1. Check file path exists
// 2. Run on local server (not file://)
// 3. Check network tab for 404 errors
```

---

## 📝 Function Call Summary

| Function | File | Parameters | Returns |
|----------|------|-----------|---------|
| `loadNavbar()` | script.js | None | Promise |
| `markActiveLink()` | script.js | None | void |
| `getCart()` | script.js | None | Array |
| `saveCart(cart)` | script.js | Array | void |
| `addToCart(...)` | script.js | id, name, price, image | void |
| `removeFromCart(id)` | script.js | id | void |
| `updateCartCount()` | script.js | None | void |
| `showNotification(msg)` | script.js | String | void |
| `formatCurrency(amt)` | script.js | Number | String |
| `renderProducts(filter)` | produk.js | String | void |
| `setupFilters()` | produk.js | None | void |
| `renderCartItems()` | keranjang.js | None | void |
| `increaseQty(idx)` | keranjang.js | Number | void |
| `decreaseQty(idx)` | keranjang.js | Number | void |
| `updateTotals()` | keranjang.js | None | void |
| `checkoutToWhatsApp()` | keranjang.js | None | void |
| `handleLogin(evt)` | login.html | Event | void |

---

**Happy Coding! 💻✨**

For more info, check README.md and QUICKSTART.md files.
