# 🥖 Dapur Roti Rumahan - Website UMKM

Website toko roti online yang modern dan responsif untuk UMKM "Dapur Roti Rumahan" dengan fitur e-commerce lengkap, checkout WhatsApp, dan sistem login sederhana.

---

## 📋 Daftar Isi

1. [Struktur Proyek](#struktur-proyek)
2. [Fitur Utama](#fitur-utama)
3. [Teknologi yang Digunakan](#teknologi-yang-digunakan)
4. [Panduan Setup](#panduan-setup)
5. [Penjelasan File](#penjelasan-file)
6. [Panduan Penggunaan](#panduan-penggunaan)
7. [Panduan Kustomisasi](#panduan-kustomisasi)
8. [Testing](#testing)

---

## 📁 Struktur Proyek

```
dapur-roti/
├── index.html              # Halaman Home (Hero + Features + CTA)
├── about.html              # Halaman About (Cerita brand + Team)
├── produk.html             # Halaman Produk (Katalog dengan filter)
├── keranjang.html          # Halaman Shopping Cart
├── login.html              # Halaman Login (Form + Validasi)
│
├── components/
│   └── navbar.html         # Navbar component (di-load via fetch)
│
├── js/
│   ├── script.js           # Global utilities (navbar loader, cart management)
│   ├── produk.js           # Product data dan filtering logic
│   └── keranjang.js        # Cart display dan checkout logic
│
└── css/
    └── style.css           # Global styling, animations, utilities
```

---

## ✨ Fitur Utama

### 1. **Navbar Responsif**
- Logo dan menu navigasi (Home, About, Produk, Keranjang, Login)
- Cart icon dengan badge (menampilkan jumlah item)
- Mobile hamburger menu
- Active link indicator
- Sticky positioning

### 2. **Halaman Home (index.html)**
- Hero section dengan gradient animation
- Feature cards (Bahan Organik, Resep Turun Temurun, Fresh Setiap Hari)
- Statistics section (Pelanggan, Varian, Tahun Melayani)
- Call-to-action sections
- Footer dengan contact info

### 3. **Halaman About (about.html)**
- Company story (2-column layout)
- Ingredients section (Bahan Organik)
- Recipe heritage (Resep Turun Temurun)
- Vision & Mission cards
- Team members showcase
- CTA footer

### 4. **Halaman Produk (produk.html)**
- Product grid dengan 12 produk
- Filter buttons (Semua, Roti, Pastry, Spesial)
- Product cards dengan:
  - Product image
  - Category badge
  - Product name
  - Description
  - Price
  - Add to cart button
- Responsive grid (3 columns desktop, 2 mobile, 1 tablet)

### 5. **Halaman Keranjang (keranjang.html)**
- Cart items display dengan:
  - Product image & name
  - Price per item dan subtotal
  - Quantity controls (+/- buttons)
  - Remove button
- Cart summary sidebar:
  - Subtotal calculation
  - Fixed shipping (Rp 20.000)
  - Total price
- "Checkout ke WhatsApp" button
- Empty cart message
- Continue shopping link

### 6. **Halaman Login (login.html)**
- Email & password form
- Client-side validation:
  - Required field check
  - Email format validation
  - Demo credentials (demo@gmail.com / demo123)
- Remember me checkbox
- Social login buttons (placeholder)
- Error message display
- Register & forgot password links

### 7. **Shopping Cart System**
- Add/remove products dari navbar
- Quantity management (increase/decrease)
- Persistent storage (localStorage)
- Real-time cart badge update
- WhatsApp checkout integration

### 8. **Color Scheme**
```
Primary Orange:   #EA580C
Cream/Light:      #FFFBEB  
Dark Stone:       #1C1917
Gradients:        Orange 50 → Orange 900
```

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Kegunaan | Link |
|-----------|----------|------|
| **Tailwind CSS** | Utility-first CSS framework | [tailwindcss.com](https://tailwindcss.com) |
| **Vanilla JavaScript** | Frontend interactivity (ES6+) | - |
| **Fetch API** | Load navbar component dynamically | - |
| **localStorage** | Persistent cart storage | - |
| **sessionStorage** | Login status persistence | - |
| **Intl.NumberFormat** | Currency formatting (IDR) | - |
| **WhatsApp API** | Direct checkout messaging | [wa.me](https://wa.me) |
| **HTML5** | Semantic markup | - |

---

## 🚀 Panduan Setup

### 1. **Download/Clone Project**
```bash
# Jika menggunakan Git
git clone <repository-url>
cd dapur-roti

# Atau extract file ZIP langsung
```

### 2. **Buka dengan Live Server (Recommended)**

**Visual Studio Code:**
1. Install extension "Live Server" oleh Ritwick Dey
2. Klik kanan pada `index.html` → "Open with Live Server"
3. Browser otomatis terbuka di `http://localhost:5500`

**Atau gunakan Python:**
```bash
# Python 3
python -m http.server 8000

# Kemudian buka: http://localhost:8000
```

**Atau gunakan Node.js:**
```bash
# Install http-server globally
npm install -g http-server

# Jalankan di folder project
http-server

# Buka: http://localhost:8080
```

### 3. **Verifikasi Struktur**
Pastikan semua folder dan file ada:
```
✓ index.html, about.html, produk.html, keranjang.html, login.html
✓ components/navbar.html
✓ js/script.js, js/produk.js, js/keranjang.js
✓ css/style.css
```

---

## 📄 Penjelasan File

### **HTML Pages**

#### `index.html` (Home)
- **Ukuran:** ~450 lines
- **Sections:** Hero, Features, Stats, CTA, Footer
- **JavaScript:** script.js (navbar loading)
- **Features:** Gradient animations, responsive grid
- **Key Elements:** Hero gradient, 3-column features, stats badges

#### `about.html` (Company Info)
- **Ukuran:** ~380 lines
- **Sections:** Header, Ingredients, Heritage, Vision/Mission, Team, CTA, Footer
- **JavaScript:** script.js
- **Features:** 2-column layouts, team member cards, section dividers
- **Key Elements:** Two-sided layout (reversed grid), team avatars

#### `produk.html` (Product Catalog)
- **Ukuran:** ~250 lines
- **Sections:** Header, Filter buttons, Product grid, CTA
- **JavaScript:** script.js + produk.js
- **Features:** Dynamic product rendering, filter buttons
- **Key Elements:** Filter UI (semua, roti, pastry, spesial), grid placeholder

#### `keranjang.html` (Shopping Cart)
- **Ukuran:** ~300 lines
- **Sections:** Header, 2-column layout (items + summary)
- **JavaScript:** script.js + keranjang.js
- **Features:** Cart items display, quantity controls, checkout
- **Key Elements:** Cart items placeholder, summary sidebar, WhatsApp button

#### `login.html` (Authentication)
- **Ukuran:** ~350 lines
- **Sections:** Login form, Social login, Links, Info box
- **JavaScript:** Form validation, session storage
- **Features:** Email/password validation, remember me checkbox
- **Key Elements:** Form inputs, error display, demo credentials

---

### **JavaScript Files**

#### `js/script.js` (Global Utilities)
**Ukuran:** ~300 lines  
**Fungsi utama:**

1. **`loadNavbar()`**
   - Fetch `components/navbar.html`
   - Inject ke `#navbar-placeholder`
   - Call `markActiveLink()` setelah loaded
   - Call `setupMobileMenu()` setelah loaded
   
2. **`setupMobileMenu()`**
   - Toggle hamburger menu
   - Close menu saat link di-klik
   
3. **`markActiveLink()`**
   - Bandingkan `window.location.pathname` dengan `href`
   - Add class "active-link" ke link yang match
   
4. **`getCart()`**
   - Return cart array dari localStorage
   - Default: empty array jika tidak ada
   
5. **`saveCart(cart)`**
   - Save cart array ke localStorage dengan key "cart"
   
6. **`addToCart(productId, name, price, image)`**
   - Check apakah product sudah ada di cart
   - Jika ada: increase qty
   - Jika belum: add new item
   - Update cart badge
   
7. **`removeFromCart(productId)`**
   - Filter cart untuk remove item
   - Update localStorage
   
8. **`updateCartCount()`**
   - Calculate total items di cart
   - Update badge text dan visibility
   
9. **`showNotification(message)`**
   - Create temporary toast notification
   - Auto-disappear setelah 3 detik
   
10. **`formatCurrency(amount)`**
    - Format number ke format IDR (Rp)
    - Contoh: 100000 → "Rp 100.000"

**Lifecycle:**
```javascript
DOMContentLoaded event:
→ loadNavbar() call
→ Fetch navbar.html
→ Inject ke DOM
→ markActiveLink() call
→ setupMobileMenu() call
```

---

#### `js/produk.js` (Product Management)
**Ukuran:** ~200 lines  
**Data Structure:**

```javascript
products = [
  {
    id: 1,
    name: "Roti Tawar",
    category: "roti",
    price: 35000,
    image: "https://images.unsplash.com/...",
    description: "Roti tawar lembut dengan tekstur sempurna"
  },
  // ... 11 items lainnya
]
```

**Fungsi utama:**

1. **`renderProducts(filter = 'semua')`**
   - Filter products berdasarkan category
   - Map ke HTML cards
   - Inject ke `#product-grid`
   - Card template mencakup: image, category badge, title, description, price, add button

2. **`setupFilters()`**
   - Add click listeners ke filter buttons
   - Toggle "active-filter" class
   - Call renderProducts dengan selected filter
   
3. **Product Categories:** roti, pastry, spesial (4 items per category)

**Struktur Card HTML:**
```html
<div class="product-card">
  <img src="..." class="product-image">
  <span class="category-badge">Roti</span>
  <h3>Roti Tawar</h3>
  <p class="description">...</p>
  <p class="price">Rp 35.000</p>
  <button onclick="addToCart(...)">Tambah Keranjang</button>
</div>
```

---

#### `js/keranjang.js` (Cart Display & Checkout)
**Ukuran:** ~250 lines  
**Fungsi utama:**

1. **`renderCartItems()`**
   - Fetch cart dari localStorage
   - Check apakah cart kosong
   - Jika kosong: show "Keranjang Kosong" message
   - Jika ada items: render item cards dengan:
     - Product image
     - Name & price
     - Quantity controls (+/- buttons)
     - Remove button
   - Call `updateTotals()`

2. **`increaseQty(index)`**
   - Increment quantity pada index tertentu
   - Save ke localStorage
   - Re-render cart

3. **`decreaseQty(index)`**
   - Decrement quantity
   - Jika qty = 1: delete item
   - Jika qty > 1: decrement
   - Re-render cart

4. **`deleteFromCart(index)`**
   - Remove item dari array
   - Save & re-render
   - Show notification

5. **`updateTotals()`**
   - Calculate subtotal dari semua items
   - Add fixed shipping cost (Rp 20.000)
   - Update DOM elements (#subtotal, #shipping, #total)
   - Enable/disable checkout button

6. **`checkoutToWhatsApp()`**
   - Build WhatsApp message dengan:
     - Item list (nama, qty, harga)
     - Subtotal
     - Shipping cost
     - Total price
   - Open WhatsApp dengan pre-filled message
   - Clear cart setelah checkout
   - Show success notification

7. **`formatCurrencyForWhatsApp(amount)`**
   - Format untuk WhatsApp message
   - Contoh: Rp 100.000

**WhatsApp Message Template:**
```
*Pesanan Dapur Roti Rumahan*

Halo, saya ingin memesan:

1. Roti Tawar
   Jumlah: 2 pcs
   Harga: Rp 35.000 x 2
   Subtotal: Rp 70.000

---
Subtotal: Rp 70.000
Ongkir: Rp 20.000
*Total: Rp 90.000*

Mohon konfirmasi ketersediaan dan jadwal pengiriman. Terima kasih!
```

---

### **CSS & Components**

#### `css/style.css`
**Ukuran:** ~250 lines

**Color Palette:**
```css
--primary-orange: #EA580C
--light-cream: #FFFBEB
--dark-stone: #1C1917
```

**Animations:**
1. **`fadeIn`** - Opacity + translateY (slide up)
   - Duration: 0.8s
   - Delay: 0.2s to 0.6s (staggered)
   
2. **`slideInLeft`** - Slide from left with opacity
   - Duration: 0.8s
   - Used for cart items

3. **`pulse`** - Pulse scale effect
   - Duration: 2s
   - Used for attention-grabbing elements

**Component Classes:**
```css
.btn-primary        /* Orange button with hover effect */
.btn-secondary      /* Light button with orange text */
.btn-sm             /* Small button variant */
.card               /* Card container with shadow */
.product-card       /* Product card with hover scale */
.active-link        /* Navbar active indicator */
.active-filter      /* Filter button active state */
.notification       /* Toast notification style */
```

**Responsive Design:**
- **Mobile (default):** Single column, full width
- **Tablet (md:):** 2 columns
- **Desktop (lg:):** 3 columns untuk produk, 2 columns untuk layout lainnya

#### `components/navbar.html`
**Ukuran:** ~100 lines

**Features:**
- Sticky navbar (top-0, z-50)
- Logo + brand name
- Navigation menu (desktop)
- Hamburger menu (mobile)
- Cart icon dengan badge
- Login button
- Responsive toggle

**DOM Structure:**
```html
<nav id="navbar" class="sticky top-0...">
  <div class="navbar-container">
    <!-- Logo -->
    <!-- Menu (desktop hidden) -->
    <!-- Hamburger toggle (mobile) -->
    <!-- Cart icon -->
    <!-- Cart badge -->
    <!-- Login button -->
  </div>
  
  <!-- Mobile menu (hidden by default) -->
  <div id="mobile-menu" class="hidden">
    <!-- Menu items -->
  </div>
</nav>
```

---

## 📖 Panduan Penggunaan

### **Sebagai User**

#### 1. Browsing Produk
1. Klik **"Produk"** di navbar
2. Lihat katalog produk dengan filter:
   - **Semua** - Tampilkan semua 12 produk
   - **Roti** - Tampilkan 4 jenis roti
   - **Pastry** - Tampilkan 4 jenis pastry
   - **Spesial** - Tampilkan 4 produk spesial

#### 2. Menambah ke Keranjang
1. Klik tombol **"Tambah Keranjang"** pada produk
2. Lihat badge di navbar update (menunjukkan jumlah item)
3. Toast notification muncul "Item ditambahkan!"

#### 3. Lihat Keranjang
1. Klik **icon keranjang** di navbar, atau
2. Klik **"Keranjang"** di navbar
3. Lihat daftar items dengan:
   - Gambar produk
   - Harga per pcs & subtotal
   - Tombol +/- untuk edit qty
   - Tombol hapus
   - Summary (Subtotal + Ongkir + Total)

#### 4. Edit Keranjang
1. Klik **+** untuk tambah qty
2. Klik **-** untuk kurang qty
3. Klik **🗑️ Hapus** untuk remove item
4. Perubahan otomatis tersimpan di browser

#### 5. Checkout
1. Di halaman keranjang, klik **"Checkout ke WhatsApp"**
2. Browser membuka WhatsApp dengan message otomatis
3. Konfirmasikan pesanan di WhatsApp dengan penjual
4. Keranjang otomatis kosong setelah checkout

#### 6. Login
1. Klik **"Login"** di navbar
2. Masukkan email & password
3. Demo credentials: `demo@gmail.com` / `demo123`
4. Centang **"Ingat saya"** untuk save email
5. Klik **"Masuk 🔓"**
6. Redirect ke home setelah berhasil

### **Sebagai Admin/Pengembang**

#### Menambah Produk Baru
1. Edit `js/produk.js`
2. Tambahkan object ke array `products`:
```javascript
{
  id: 13,
  name: "Produk Baru",
  category: "roti",        // roti, pastry, atau spesial
  price: 50000,
  image: "https://...",
  description: "Deskripsi produk"
}
```
3. Produk otomatis muncul di halaman Produk

#### Mengubah Kontak WhatsApp
1. Edit `js/keranjang.js`
2. Cari line: `const waNumber = '6281234567890';`
3. Ganti dengan nomor WhatsApp bisnis Anda (tanpa +, hanya angka)
4. Contoh: `const waNumber = '6281234567890';` → untuk +62 812 3456 7890

#### Mengubah Ongkir
1. Edit `js/keranjang.js`
2. Cari line: `const shippingCost = 20000;`
3. Ganti dengan nilai yang diinginkan
4. Atau edit di halaman jika menggunakan variable yang bisa dikonfigurasi

#### Mengubah Warna
1. Edit `css/style.css`
2. Update CSS custom properties:
```css
/* Existing */
--primary-orange: #EA580C
--light-cream: #FFFBEB
--dark-stone: #1C1917

/* Change to your colors */
--primary-orange: #YOUR_COLOR
```
3. Atau gunakan Tailwind classes directly (update HTML)

---

## 🎨 Panduan Kustomisasi

### **1. Mengubah Branding**

#### Logo & Nama
- Edit `components/navbar.html` → ganti text "Dapur Roti Rumahan"
- Edit semua HTML pages → update `<title>` tag

#### Deskripsi Produk
- Edit `about.html` → section "Bahan Organik"
- Edit hero text di `index.html`

### **2. Mengubah Konten Halaman**

#### Home Page (index.html)
```html
<!-- Hero Section -->
<h1>Deskripsi Bisnis Anda</h1>

<!-- Features Section -->
<!-- Ubah 3 feature cards -->

<!-- Stats Section -->
<!-- Update jumlah customers, varian, tahun -->
```

#### About Page (about.html)
```html
<!-- Ingredients Section -->
<ul>
  <li>Bahan 1</li>
  <li>Bahan 2</li>
  <!-- Tambah/hapus sesuai kebutuhan -->
</ul>

<!-- Team Section -->
<!-- Update nama, posisi, deskripsi team members -->
```

### **3. Mengubah Design**

#### Background Color
```html
<!-- Ubah bg-orange-50 ke bg-color-lain di Tailwind palette -->
<body class="bg-orange-50">  →  <body class="bg-amber-50">
```

#### Button Styling
Edit `css/style.css`:
```css
.btn-primary {
  @apply px-6 py-3 bg-orange-600 text-white font-bold rounded-lg;
  /* Ubah bg-orange-600 ke warna lain */
}
```

#### Font Family
Tambah di HTML head:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

Update di `css/style.css`:
```css
body {
  font-family: 'Poppins', sans-serif;
}
```

### **4. Menambah Halaman Baru**

1. Create file baru: `new-page.html`
2. Copy structure dari `index.html`
3. Update content
4. Add navbar-placeholder div dan script tags
5. Add menu link di `components/navbar.html`:
```html
<a href="new-page.html" class="nav-link">New Page</a>
```

---

## 🧪 Testing

### **1. Functional Testing Checklist**

#### Navbar
- [ ] Logo clickable → go to home
- [ ] Menu links navigate correctly
- [ ] Cart badge shows correct count
- [ ] Hamburger menu toggle works (mobile)
- [ ] Active link highlight on current page
- [ ] Navbar sticky at top (desktop view)

#### Home Page
- [ ] All animations play smoothly
- [ ] Feature cards responsive
- [ ] CTA buttons clickable
- [ ] Footer links work
- [ ] Hero image loads

#### About Page
- [ ] Team member cards display correctly
- [ ] Images load
- [ ] Section dividers show
- [ ] Responsive layout on mobile

#### Product Page
- [ ] Products display in grid
- [ ] Filter buttons work correctly
- [ ] Add to cart buttons functional
- [ ] Grid responsive on mobile (2 columns → 1 column)
- [ ] Product details visible (name, price, description)

#### Shopping Cart
- [ ] Items display correctly
- [ ] Quantity +/- buttons work
- [ ] Remove button removes item
- [ ] Subtotal + shipping + total calculate correctly
- [ ] Empty cart message shows when no items
- [ ] Checkout button opens WhatsApp

#### Login Page
- [ ] Form submits without errors
- [ ] Email validation works
- [ ] Demo credentials (demo@gmail.com / demo123) work
- [ ] Remember me checkbox saves email
- [ ] Redirect to home after successful login
- [ ] Error messages display for invalid input

### **2. Browser Testing**
Test di browsers berikut:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Chrome
- [ ] Mobile Safari

### **3. Responsive Testing**
- [ ] Mobile (375px)
- [ ] Tablet (768px)
- [ ] Desktop (1024px+)

Use DevTools device emulation:
1. Open DevTools (F12)
2. Click device emulation icon
3. Test berbagai screen sizes

### **4. LocalStorage Testing**

#### Test Cart Persistence
```javascript
// Open Console (F12 → Console)

// 1. Add item to cart
// Check localStorage
localStorage.getItem('cart')  // Should show cart array

// 2. Refresh page
// Cart should still exist

// 3. Clear
localStorage.clear()  // Remove all data
```

#### Test Login
```javascript
// Check sessionStorage
sessionStorage.getItem('isLoggedIn')  // Should show 'true' after login
sessionStorage.getItem('userEmail')    // Should show email

// Check localStorage (remember me)
localStorage.getItem('rememberedEmail')  // Should show email
```

### **5. Performance Testing**

#### Page Load Time
1. Open DevTools → Network tab
2. Reload page
3. Check load time < 3 seconds

#### Lighthouse Audit
1. Open DevTools → Lighthouse tab
2. Run audit
3. Target scores:
   - Performance: > 80
   - Accessibility: > 80
   - Best Practices: > 80
   - SEO: > 80

### **6. Manual Testing Scenarios**

#### Scenario 1: New Visitor Flow
1. Open homepage
2. Navigate to About
3. Browse products
4. Add 2 different items to cart
5. Check cart count updated
6. Go to cart page
7. Increase quantity of one item
8. View summary (should show correct total)
9. Checkout to WhatsApp

#### Scenario 2: Login & Cart Persistence
1. Click Login
2. Enter demo@gmail.com / demo123
3. Check Remember me
4. Submit
5. Homepage should load
6. Go to Products
7. Add item to cart
8. Refresh page
9. Cart should still have item
10. Clear browser cache
11. Cart should be gone (new session)

#### Scenario 3: Mobile Experience
1. Open in mobile browser (or DevTools mobile emulation)
2. Test all navigation
3. Check hamburger menu
4. Test product grid (should be 1-2 columns)
5. Test cart on mobile
6. Test quantity controls
7. Checkout should work

---

## 📱 Responsive Design Reference

### **Breakpoints**
```
Mobile:  < 768px     (1 column)
Tablet:  768px-1024px (2 columns)
Desktop: > 1024px    (3 columns)
```

### **Tailwind Classes Used**
```
Grid Columns: grid-cols-1, md:grid-cols-2, lg:grid-cols-3
Padding:      px-4, md:px-6, lg:px-8
Gaps:         gap-4, md:gap-6, lg:gap-8
Display:      block, md:flex, lg:grid
```

---

## 🐛 Troubleshooting

### **Problem: Navbar tidak muncul**
**Solution:** 
- Cek apakah `components/navbar.html` file exists
- Cek console for fetch errors (F12 → Console)
- Pastikan running di local server, bukan file:// protocol

### **Problem: Cart tidak menyimpan setelah refresh**
**Solution:**
- Check localStorage: `localStorage.getItem('cart')`
- Clear browser cache & try again
- Check browser privacy settings (localStorage disabled?)

### **Problem: WhatsApp link tidak buka**
**Solution:**
- Cek nomor WhatsApp di `js/keranjang.js` sudah benar
- Pastikan format: hanya angka, tidak ada +, misal: 6281234567890
- Desktop: WhatsApp Web harus terbuka
- Mobile: WhatsApp app harus terinstall

### **Problem: Styling tidak appear**
**Solution:**
- Hard refresh: Ctrl+Shift+R (Windows) atau Cmd+Shift+R (Mac)
- Clear browser cache
- Pastikan Tailwind CDN link aktif
- Check `css/style.css` loaded di DevTools

### **Problem: Product tidak muncul di katalog**
**Solution:**
- Check `js/produk.js` - apakah products array ada?
- Open Console (F12) dan run: `console.log(products)`
- Check apakah `renderProducts()` dipanggil
- Verify `#product-grid` element exists di HTML

---

## 📞 Support & Contact

Untuk pertanyaan atau issues:

1. **Check Dokumentasi** - Lihat section yang relevan di README ini
2. **Browser Console** - F12 → Console, cek error messages
3. **Network Tab** - F12 → Network, cek failed requests
4. **Test di Incognito** - Eliminasi cache issues

---

## 📄 License & Credits

**Project:** Dapur Roti Rumahan E-Commerce Website  
**Version:** 1.0  
**Created:** 2024  

**Technologies:**
- Tailwind CSS (Utility-First CSS)
- Vanilla JavaScript (ES6+)
- Fetch API
- localStorage/sessionStorage APIs

**Images:** Unsplash (Free stock photos)

---

## 🎯 Future Enhancements

Fitur yang bisa ditambahkan di masa depan:

1. **Backend Integration**
   - Real database untuk products & orders
   - Real user authentication
   - Payment gateway (Stripe, Midtrans, dll)

2. **Advanced Features**
   - Product reviews & ratings
   - Wishlist/favorites
   - Email notifications
   - Order tracking
   - Multiple payment methods

3. **Admin Panel**
   - Dashboard untuk manage products
   - Order management
   - Analytics & reports
   - Customer management

4. **SEO & Performance**
   - Meta tags optimization
   - Image optimization
   - Service Workers (PWA)
   - CDN for assets

5. **Social Integration**
   - Instagram feed embed
   - Facebook integration
   - Google Analytics
   - Sharing buttons

---

**Happy Selling! 🥖✨**
