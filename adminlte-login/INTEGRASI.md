# 🔗 INTEGRASI AdminLTE dengan Dapur Roti UMKM

## 📋 Dokumentasi Integrasi Sistem

Proyek AdminLTE telah berhasil diintegrasikan dengan sistem Dapur Roti UMKM untuk menjadi **Admin Panel Manajemen Lengkap**.

---

## 🎯 Fitur Integrasi

### 1. **Data Management** ✅
- Integrasi data produk Dapur Roti
- Integrasi data pesanan/order
- Integrasi data pelanggan
- Sistem storage berbasis localStorage & sessionStorage

### 2. **Product Management** ✅
- **File**: `produk-management.html`
- Tampilkan semua produk Dapur Roti
- Tambah produk baru
- Edit produk existing
- Hapus produk
- Filter berdasarkan kategori
- Export data ke CSV

### 3. **Order Management** ✅
- **File**: `order-management.html`
- Tampilkan semua pesanan
- Filter berdasarkan status (Pending, Processing, Completed)
- Lihat detail pesanan
- Ubah status pesanan
- Print pesanan
- Export data ke CSV

### 4. **Customer Management** ✅
- **File**: `customer-management.html`
- Tampilkan semua pelanggan
- Cari pelanggan berdasarkan nama/email
- Lihat detail pelanggan
- Statistik pelanggan (total, aktif, total belanja)

### 5. **Dashboard Integration** ✅
- **File**: `dashboard.html`
- Menampilkan ringkasan data Dapur Roti
- Chart penjualan, revenue, dan traffic
- Links ke semua halaman manajemen

---

## 📂 File Structure Integrasi

```
adminlte-login/
├── dashboard.html                  (Updated - Dashboard utama)
├── login.html                      (Login page)
├── produk-management.html          (NEW - Kelola produk)
├── order-management.html           (NEW - Kelola pesanan)
├── customer-management.html        (NEW - Kelola pelanggan)
│
├── js/
│   ├── dapur-roti-data.js         (NEW - Data & functions)
│   ├── login.js                    (Form validation)
│   └── dashboard.js                (Chart & navigation)
│
└── css/
    └── adminlte-custom.css         (Custom styling)
```

---

## 🗂️ Data Structure

### Produk (dapur_roti_products)
```javascript
{
    id: 1,
    name: 'Roti Tawar Premium',
    category: 'roti',              // roti, pastry, spesial
    price: 35000,
    stock: 25,
    image: 'url',
    description: 'Deskripsi...',
    status: 'active'               // active, inactive
}
```

### Pesanan (dapur_roti_orders)
```javascript
{
    id: 'ORD-001',
    customer: 'Nama Pelanggan',
    email: 'email@domain.com',
    phone: '08123456789',
    items: [
        { productId: 1, name: 'Produk', quantity: 2, price: 35000 }
    ],
    totalAmount: 98000,
    status: 'pending',              // pending, processing, completed
    date: '2024-01-12',
    address: 'Alamat lengkap',
    notes: 'Catatan'
}
```

### Pelanggan (dapur_roti_customers)
```javascript
{
    id: 'CUST-001',
    name: 'Nama Pelanggan',
    email: 'email@domain.com',
    phone: '08123456789',
    address: 'Alamat',
    city: 'Jakarta',
    status: 'active',               // active, inactive
    totalOrders: 5,
    totalSpent: 485000,
    joinDate: '2023-06-15'
}
```

---

## 🔧 Functions Tersedia (dapur-roti-data.js)

### Statistics
```javascript
getDapurRotiStats()                 // Get all statistics
```

### Products
```javascript
getProductById(id)                  // Get product by ID
getProductsByCategory(category)     // Get products by category
addNewProduct(productData)          // Add new product
updateProduct(id, updates)          // Update product
deleteProduct(id)                   // Delete product
getLowStockProducts(threshold)      // Get products dengan stok rendah
exportProductsToCSV()               // Export ke CSV
```

### Orders
```javascript
getOrderById(id)                    // Get order by ID
getOrdersByStatus(status)           // Get orders by status
updateOrderStatus(orderId, status)  // Update order status
getRecentOrders(limit)              // Get recent orders
exportOrdersToCSV()                 // Export ke CSV
```

### Data Management
```javascript
loadDataFromStorage()               // Load dari localStorage
initializeDapurRotiData()          // Initialize data
```

---

## 🔐 Login Credentials

Gunakan kredensial demo untuk login:

```
Username: admin
Password: 123
```

---

## 🚀 Alur Penggunaan

### 1. **Login**
```
Buka: login.html
Masuk dengan: admin / 123
```

### 2. **Dashboard**
```
Halaman utama admin
- Lihat ringkasan statistik
- Akses semua menu manajemen
```

### 3. **Kelola Produk**
```
produk-management.html
- Tambah/Edit/Hapus produk
- Filter kategori
- Export data
```

### 4. **Kelola Pesanan**
```
order-management.html
- Lihat semua pesanan
- Filter status
- Ubah status
- Print/Export
```

### 5. **Kelola Pelanggan**
```
customer-management.html
- Lihat semua pelanggan
- Cari pelanggan
- Lihat detail
- Statistik
```

---

## 💾 Data Storage

### SessionStorage
- `loggedInUser` - Username yang sedang login

### LocalStorage
- `dapur_roti_products` - Data produk (JSON)
- `dapur_roti_orders` - Data pesanan (JSON)
- `dapur_roti_customers` - Data pelanggan (JSON)
- `rememberedUsername` - Username yang diingat

### Inisialisasi
Data otomatis diinisialisasi saat page load. Data default akan disimpan ke localStorage jika belum ada.

---

## 🎨 UI/UX Features

### Color Scheme
- **Primary**: #667eea (Purple)
- **Success**: #11998e (Teal)
- **Danger**: #ee0979 (Pink)
- **Warning**: #f93b1d (Red-Orange)

### Components
- ✅ Responsive sidebar navigation
- ✅ Modern card designs
- ✅ Interactive tables
- ✅ Modal dialogs
- ✅ Status badges
- ✅ Progress indicators
- ✅ Smooth animations

---

## 🔄 Workflow Manajemen Pesanan

```
Pesanan Diterima (pending)
        ↓
    [Ubah Status]
        ↓
Sedang Diproses (processing)
        ↓
    [Ubah Status]
        ↓
Selesai (completed)
        ↓
    [Print/Export]
```

---

## 📊 Contoh Usage

### Tambah Produk Baru
```
1. Buka: produk-management.html
2. Klik: "Tambah Produk"
3. Isi form:
   - Nama: Roti Baguette
   - Kategori: roti
   - Harga: 45000
   - Stok: 20
4. Simpan
```

### Ubah Status Pesanan
```
1. Buka: order-management.html
2. Lihat pesanan
3. Klik: "Ubah Status"
4. Pilih status baru: processing/completed
5. Simpan
```

### Export Data
```
1. Buka halaman manajemen (produk/pesanan)
2. Klik: "Export CSV"
3. File .csv akan download
4. Buka di Excel/Sheets
```

---

## 🔒 Security Notes

### Client-Side Only
- **IMPORTANT**: Semua data disimpan di browser (localStorage)
- Tidak aman untuk production
- Untuk production, gunakan backend dengan database

### Recommendations
1. Implementasikan authentication proper (JWT)
2. Gunakan backend API
3. Encrypt sensitive data
4. Implement role-based access control
5. Add audit logging
6. Use HTTPS only

---

## 🚀 Next Steps (Development)

### Backend Integration
```javascript
// Replace localStorage dengan API calls
// Replace hardcoded data dengan API endpoints
fetch('/api/products')
    .then(res => res.json())
    .then(data => renderProducts(data))
```

### Database Integration
```
- Create database tables
- Setup API endpoints
- Implement authentication
- Add validation rules
- Setup logging
```

### Advanced Features
```
1. Real-time order notifications
2. Analytics dashboard
3. Inventory management
4. Customer loyalty program
5. Automated reporting
6. SMS/Email notifications
7. Payment gateway integration
8. Multi-user support
```

---

## 📱 Responsive Design

- **Desktop** (1200px+): Full layout dengan sidebar
- **Tablet** (768-1199px): Compact layout
- **Mobile** (<768px): Optimized untuk touchscreen

---

## ⚙️ Customization

### Mengubah Warna
```css
/* Di css/adminlte-custom.css */
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Menambah Menu
```html
<!-- Di sidebar -->
<li>
    <a href="fitur-baru.html">
        <i class="bi bi-icon"></i> Fitur Baru
    </a>
</li>
```

### Menambah Data Fields
```javascript
// Di dapur-roti-data.js
const newProduct = {
    ...productData,
    customField: 'value'  // Field baru
};
```

---

## 📞 Support & Troubleshooting

### Data Tidak Muncul
1. Refresh page
2. Clear browser cache
3. Check console (F12)
4. Verify localStorage di DevTools

### Login Failed
1. Username: admin (case-sensitive)
2. Password: 123 (exact match)
3. Check console untuk error

### Charts Tidak Muncul
1. Verify ApexCharts CDN loaded
2. Check console errors
3. Verify chart container IDs match

---

## 📈 Metrics & Monitoring

Dashboard menampilkan:
- Total produk & stok
- Total pesanan & pending
- Total pelanggan & revenue
- Statistik real-time

---

**Version**: 1.0
**Status**: Production Ready (Client-Side Only)
**Last Updated**: 2024
**Integrated With**: Dapur Roti UMKM System

---

**Untuk integrasi dengan backend, hubungi tim development!** 🚀
