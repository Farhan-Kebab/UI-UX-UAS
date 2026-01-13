# 🚀 Quick Start Guide - Dapur Roti Rumahan

Panduan cepat untuk mulai menggunakan website Dapur Roti Rumahan.

---

## ⚡ 3 Langkah Setup (< 5 Menit)

### **Langkah 1: Buka Project**
```
Folder: dapur-roti/
File: index.html
```

### **Langkah 2: Jalankan di Local Server**

**Option A: Live Server (VS Code)**
1. Install extension "Live Server" (Ritwick Dey)
2. Klik kanan `index.html` → "Open with Live Server"
3. Browser terbuka otomatis

**Option B: Python**
```bash
python -m http.server 8000
# Buka: http://localhost:8000
```

**Option C: Node.js**
```bash
npm install -g http-server
http-server
# Buka: http://localhost:8080
```

### **Langkah 3: Mulai Test**
✅ Homepage muncul  
✅ Navbar sticky di atas  
✅ Klik menu navigasi  

---

## 🧪 5 Menit Quick Test

### **Test 1: Browse Produk**
1. Klik **"Produk"** di navbar
2. Lihat 12 produk dalam grid
3. Klik filter **"Roti"** → tampilkan 4 roti saja
4. Klik filter **"Semua"** → tampilkan 12 lagi
✅ Selesai!

### **Test 2: Add to Cart**
1. Di halaman Produk, klik **"Tambah Keranjang"** pada produk apapun
2. Lihat badge di navbar update (angka item)
3. Toast notification muncul
✅ Selesai!

### **Test 3: Edit Cart**
1. Klik **cart icon** di navbar
2. Masuk ke halaman Keranjang
3. Klik **+** untuk tambah qty
4. Klik **-** untuk kurang qty  
5. Klik **🗑️ Hapus** untuk remove
6. Total otomatis update
✅ Selesai!

### **Test 4: Checkout**
1. Di halaman Keranjang, klik **"Checkout ke WhatsApp"**
2. Browser buka WhatsApp dengan message otomatis
3. Checkout di WhatsApp
4. Keranjang kosong otomatis
✅ Selesai!

### **Test 5: Login**
1. Klik **"Login"** di navbar
2. Masukkan: `demo@gmail.com` / `demo123`
3. Centang "Ingat saya"
4. Klik **"Masuk 🔓"**
5. Redirect ke home
✅ Selesai!

---

## 🔧 Konfigurasi Dasar

### **Ubah Nomor WhatsApp**
**File:** `js/keranjang.js` (baris ~145)

```javascript
// SEBELUM
const waNumber = '6281234567890';

// SESUDAH (ganti dengan nomor Anda)
const waNumber = '628123456789';  // Contoh: +62-812-3456-789
```

**Format:** Hanya angka, tanpa +, misal:
- +62 812 3456 7890 → `6281234567890` ✅
- +62-812-345-6789 → `62812345678` ✅

### **Ubah Ongkir (Shipping Cost)**
**File:** `js/keranjang.js` (baris ~150)

```javascript
// SEBELUM
const shippingCost = 20000;

// SESUDAH
const shippingCost = 25000;  // Ganti dengan nilai Anda
```

### **Ubah Demo Login Credentials**
**File:** `login.html` (baris ~180)

```javascript
// SEBELUM
const validEmail = 'demo@gmail.com';
const validPassword = 'demo123';

// SESUDAH
const validEmail = 'admin@example.com';
const validPassword = 'yourpassword123';
```

### **Ubah Brand Name**
**File:** `components/navbar.html` (baris ~10)

```html
<!-- SEBELUM -->
<h1>🥖 Dapur Roti Rumahan</h1>

<!-- SESUDAH -->
<h1>🍞 Roti Aku</h1>
```

---

## 📁 Project Structure

```
dapur-roti/
├── 📄 index.html              ← Homepage
├── 📄 about.html              ← About & Team
├── 📄 produk.html             ← Product Catalog
├── 📄 keranjang.html          ← Shopping Cart
├── 📄 login.html              ← Login Form
│
├── 📁 components/
│   └── navbar.html            ← Navigation (loaded dynamically)
│
├── 📁 js/
│   ├── script.js              ← Global functions (navbar, cart)
│   ├── produk.js              ← Product data & filtering
│   └── keranjang.js           ← Cart display & checkout
│
├── 📁 css/
│   └── style.css              ← Global styling & animations
│
└── 📄 README.md               ← Full Documentation
```

---

## 🎨 Color Reference

```
Primary Orange:   #EA580C
Light Cream:      #FFFBEB
Dark Stone:       #1C1917
```

Tailwind color classes used:
- `bg-orange-50` → Light cream
- `bg-orange-600` → Primary orange button
- `text-orange-900` → Dark text
- `border-orange-200` → Light border

---

## 🧠 How It Works (Overview)

### **1. Navbar Loading**
```
index.html loaded
    ↓
DOMContentLoaded event fires
    ↓
script.js runs
    ↓
loadNavbar() function:
  - Fetch components/navbar.html
  - Inject to #navbar-placeholder
  - Mark active link
  - Setup mobile menu
```

### **2. Product Filtering**
```
produk.html loads
    ↓
produk.js runs
    ↓
renderProducts('semua') - show all 12 products
    ↓
User clicks filter button
    ↓
setupFilters() triggers
    ↓
renderProducts('roti') - show only roti
```

### **3. Cart Management**
```
User clicks "Tambah Keranjang"
    ↓
addToCart() function:
  - Add item to cart array
  - Save to localStorage
  - Update badge count
  - Show notification
```

### **4. Checkout Flow**
```
User clicks "Checkout ke WhatsApp"
    ↓
checkoutToWhatsApp() function:
  - Build message with items & total
  - Open WhatsApp link
  - User confirms order in WhatsApp
  - Cart clears
```

---

## 📝 Key Functions Reference

| Function | File | Purpose |
|----------|------|---------|
| `loadNavbar()` | script.js | Load navbar.html via fetch |
| `addToCart()` | script.js | Add product to cart |
| `updateCartCount()` | script.js | Update badge count |
| `renderProducts()` | produk.js | Display products in grid |
| `setupFilters()` | produk.js | Handle filter buttons |
| `renderCartItems()` | keranjang.js | Display cart items |
| `checkoutToWhatsApp()` | keranjang.js | Generate WhatsApp message |
| `formatCurrency()` | script.js | Format to Rp currency |

---

## ✅ Checklist: Before Going Live

- [ ] Update WhatsApp number di `keranjang.js`
- [ ] Update shipping cost jika berbeda
- [ ] Change demo login credentials
- [ ] Update brand name di navbar
- [ ] Update about page content
- [ ] Test semua fitur (navbar, produk, cart, checkout)
- [ ] Test di mobile & desktop
- [ ] Test WhatsApp checkout
- [ ] Update footer contact info
- [ ] Set favicon (optional)

---

## 🆘 Quick Troubleshooting

### Navbar tidak muncul?
```
✓ Cek: components/navbar.html ada?
✓ Jalankan di local server (bukan file://)
✓ Open Console (F12) - lihat error
```

### Cart tidak menyimpan?
```
✓ Cek: localStorage.getItem('cart')
✓ Hard refresh: Ctrl+Shift+R
✓ Cek: browser privacy settings
```

### WhatsApp tidak buka?
```
✓ Format nomor: tanpa +, hanya angka
✓ Desktop: WhatsApp Web harus open
✓ Mobile: WhatsApp app harus install
```

### Styling tidak work?
```
✓ Hard refresh: Ctrl+Shift+R
✓ Cek: Tailwind CDN link aktif
✓ Cek: css/style.css loaded
```

---

## 📚 Full Documentation

Untuk panduan lengkap, buka **README.md** file di folder project.

---

## 🎯 Next Steps

1. **Customize Content:**
   - Edit about.html (cerita Anda)
   - Edit index.html (hero section)
   - Update produk di js/produk.js

2. **Customize Design:**
   - Ubah colors di css/style.css
   - Update navbar branding
   - Customize button styles

3. **Deploy (Optional):**
   - Upload ke hosting (Netlify, Vercel, GitHub Pages)
   - Set custom domain
   - Enable HTTPS

---

**Happy Selling! 🥖🚀**

Questions? Check README.md for detailed documentation.
