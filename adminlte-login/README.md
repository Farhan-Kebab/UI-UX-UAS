# AdminLTE - Admin Dashboard

Sebuah dashboard admin modern dengan login authentication menggunakan **AdminLTE** styling dan **Bootstrap 5**.

## 📋 Fitur Utama

✅ **Login System** - Autentikasi dengan username dan password
✅ **Dashboard** - Overview dengan statistik dan chart
✅ **User Management** - Mengelola data user
✅ **Analytics** - Chart dan analisis data
✅ **Settings** - Pengaturan aplikasi
✅ **Responsive Design** - Optimal untuk desktop dan mobile
✅ **Modern UI** - Gradient colors dan smooth animations

## 🔐 Login Credentials

```
Username: admin
Password: 123
```

## 📂 Struktur File

```
adminlte-login/
├── login.html           # Halaman login
├── dashboard.html       # Halaman dashboard
├── js/
│   ├── login.js        # Logic untuk login form
│   └── dashboard.js    # Logic untuk dashboard
├── css/
│   └── adminlte-custom.css  # Custom styling
└── README.md           # File ini
```

## 🚀 Cara Menggunakan

### 1. **Buka file login.html**
```html
Buka file login.html di browser (gunakan Live Server)
```

### 2. **Masuk dengan kredensial demo**
```
Username: admin
Password: 123
```

### 3. **Navigasi Dashboard**
- **Dashboard**: Lihat statistik dan chart
- **Users**: Kelola data pengguna
- **Analytics**: Lihat analisis data
- **Settings**: Atur pengaturan aplikasi

### 4. **Logout**
Klik tombol "Logout" di navbar untuk kembali ke login page

## 📊 Fitur Dashboard

### Statistik Ringkas (4 Kartu)
- **Total Users**: 1,234 pengguna
- **Revenue**: $45,678 pendapatan
- **Warnings**: 23 peringatan
- **Pending**: 15 items tertunda

### Chart & Grafik
1. **Sales Chart** - Grafik penjualan 7 hari (line chart)
2. **Revenue Chart** - Pendapatan 12 bulan (bar chart)
3. **Traffic Chart** - Sumber traffic (donut chart)

### Tabel Data
- **Recent Activity**: Aktivitas terbaru dengan timestamp
- **User Management**: List pengguna dengan status
- **Progress Bars**: Indikator progress berbagai metrik

## 🎨 Warna & Styling

### Gradient Palette
```
Primary:   #667eea → #764ba2 (Purple)
Success:   #11998e → #38ef7d (Teal)
Danger:    #ee0979 → #ff6a00 (Pink-Orange)
Warning:   #f93b1d → #ea1e63 (Red-Pink)
```

### Komponen Styling
- **Sidebar**: Dark gradient background
- **Cards**: White dengan shadow & hover effects
- **Buttons**: Gradient dengan smooth transitions
- **Tables**: Clean design dengan hover effects

## 💻 Teknologi yang Digunakan

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| **Bootstrap** | 5.3.7 | Responsive framework |
| **Bootstrap Icons** | 1.13.1 | Icon library |
| **ApexCharts** | 3.37.1 | Interactive charts |
| **Vanilla JS** | ES6+ | Logic & interactivity |
| **CSS3** | Latest | Gradients & animations |

## 📱 Responsive Design

- **Desktop** (1200px+): Layout penuh dengan sidebar
- **Tablet** (768px-1199px): Sidebar dapat disembunyikan
- **Mobile** (<768px): Single column layout

## 🔧 Fitur JavaScript

### login.js
```javascript
- handleLogin()          // Form submission handler
- validateForm()         // Field validation
- showError()            // Display error messages
- clearErrors()          // Clear previous errors
- loginSuccess()         // Handle successful login
- Auto-fill remembered username
- Enter key support
```

### dashboard.js
```javascript
- initCharts()           // Initialize ApexCharts
- showSection()          // Switch content sections
- logout()               // Handle logout
- setupMenuListeners()   // Add click handlers
- checkSession()         // Verify user is logged in
- Smooth scroll & animations
```

## 🛡️ Session Management

- **sessionStorage**: Menyimpan login state saat user aktif
- **localStorage**: Menyimpan remembered username
- **Auto Redirect**: Jika tidak login, redirect ke login.html

Alur Login:
```
login.html → Validasi kredensial → Dashboard.html → Session check
```

## 🎯 Contoh Penggunaan

### Logout
```javascript
// Clearkan session dan redirect ke login
sessionStorage.removeItem('loggedInUser');
window.location.href = 'login.html';
```

### Tampilkan Section
```javascript
// Tampilkan section users
showSection('users');
```

### Initialize Charts
```javascript
// Buat sales chart
const chartOptions = { /* ... */ };
new ApexCharts(document.querySelector("#salesChart"), chartOptions).render();
```

## 📋 Daftar Menu Sidebar

```
📊 Dashboard (Active)
├── Total Users: 1,234
├── Revenue: $45,678
├── Warnings: 23
└── Pending: 15

👥 Users Management
├── User List
└── Add/Edit/Delete Users

📈 Analytics
├── Monthly Revenue
└── Traffic Sources

⚙️ Settings
├── Application Name
├── Theme Selector
└── Notifications
```

## 🎬 Animasi & Efek

- **Fade In**: Section berubah dengan smooth fade
- **Slide In**: Menu dan sidebar dengan slide animation
- **Hover Effect**: Card dan button dengan transform
- **Progress Bar**: Animated bar fill
- **Pulse**: Loading indicator

## 🔍 Tips & Trik

1. **Buat user baru?** Masuk ke Users section
2. **Ubah tema?** Buka Settings dan pilih theme
3. **Cek data terbaru?** Lihat Recent Activity di dashboard
4. **Remember login?** Centang checkbox "Remember Me"

## ⚠️ Catatan Penting

- Kredensial demo: `admin / 123`
- Semua data disimpan di **sessionStorage** & **localStorage**
- Untuk production, gunakan backend API untuk authentication
- Refresh page akan mempertahankan login state

## 📞 Support

Jika ada masalah:
1. Periksa console browser (F12 → Console)
2. Pastikan semua file JavaScript ter-load dengan benar
3. Verifikasi kredensial login: admin / 123
4. Clear browser cache jika ada issue dengan styling

## 🚀 Next Steps

Untuk mengembangkan lebih lanjut:
1. Integrasikan dengan backend API
2. Tambahkan database user real
3. Implementasikan role-based access control
4. Tambahkan more charts dan analytics
5. Buat dark mode toggle
6. Tambahkan export/import data features

---

**Dibuat dengan ❤️ menggunakan Bootstrap 5 & ApexCharts**

Terakhir diupdate: 2024
