# 🛒 Sistem Checkout Web - Dapur Roti Rumahan

## 📋 Ringkasan

Sistem checkout web telah berhasil diimplementasikan untuk menggantikan proses WhatsApp. Pelanggan sekarang dapat:
- ✅ Mengisi data pengiriman langsung di website
- ✅ Memilih metode pembayaran (Bank Transfer, E-Wallet, COD, Cheque)
- ✅ Melihat konfirmasi pesanan secara real-time
- ✅ Melacak riwayat pesanan mereka

---

## 🎯 Fitur Utama

### 1. **Halaman Checkout (3 Steps)**

#### Step 1: Data Pengiriman
- **Fields**: Nama lengkap, Email, Nomor telepon, Alamat, Kota, Kode pos, Catatan
- **Validasi**: Email format, Nomor telepon (Indonesia), Alamat required
- **Penyimpanan**: Data tersimpan di localStorage untuk reference

#### Step 2: Metode Pembayaran
- 💳 **Transfer Bank** - BCA dan Mandiri
- 📱 **E-Wallet** - Dana, GCash, OVO, GoPay
- 🚚 **Bayar di Tempat (COD)** - Cash On Delivery
- ✍️ **Cek/Bilyet Giro** - Untuk pesanan korporat

Setiap metode menampilkan instruksi dan rincian pembayaran yang spesifik.

#### Step 3: Konfirmasi Pesanan
- **Order ID**: Unik, format `ORD-YYYY-XXXXXX`
- **Summary**: Barang, pengiriman, total, instruksi pembayaran
- **Actions**: Lihat riwayat pesanan atau lanjut belanja

### 2. **Keranjang Belanja (Cart)**
- Tampil items dengan gambar, harga, dan quantity
- Fitur +/- untuk mengubah quantity
- Tombol hapus per item
- Ringkasan otomatis: Subtotal, Ongkir, Pajak (10%), Total
- **CTA**: Tombol "Lanjut ke Checkout" (bukan WhatsApp)

### 3. **Riwayat Pesanan (Order History)**
- **Daftar pesanan** dengan status
- **Filter**: Semua, Menunggu, Dikonfirmasi, Dikirim, Selesai
- **Detail modal**: Klik pesanan untuk melihat detail lengkap
- **Informasi**: Tanggal, Penerima, Items, Total, Status, Metode pembayaran

---

## 📁 File Baru & Dimodifikasi

### ✨ File Baru Dibuat:

| File | Deskripsi |
|------|-----------|
| `checkout.html` | Halaman checkout 3-step |
| `js/checkout.js` | Logic checkout, validasi form, order processing |
| `js/keranjang.js` | Cart management & display |
| `order-history.html` | Halaman riwayat pesanan |
| `js/order-history.js` | Logic order history & filtering |

### 📝 File Dimodifikasi:

| File | Perubahan |
|------|-----------|
| `keranjang.html` | Tombol checkout diubah dari WhatsApp → checkout.html |
| `js/script.js` | Perbaikan struktur cart (qty → quantity) |

---

## 🔄 Alur Checkout

```
Produk → Keranjang → Checkout (3 steps) → Konfirmasi → Order History
   ↓         ↓           ↓          ↓         ↓           ↓
 Pilih   +/- qty    Data +     Bayar   Nomor Order  Track Pesanan
        Hapus    Pembayaran   Metode   Generated    Filter Status
```

---

## 💾 Data Storage

### LocalStorage Digunakan:

1. **`cart`** - Array produk di keranjang
   ```json
   [
     {
       "id": 1,
       "name": "Roti Tawar Premium",
       "price": 35000,
       "image": "url",
       "quantity": 2
     }
   ]
   ```

2. **`shippingData`** - Data pengiriman saat checkout
   ```json
   {
     "fullname": "Budi Santoso",
     "email": "budi@example.com",
     "phone": "+62812345678",
     "address": "Jl. Gatot Subroto No.123",
     "city": "Jakarta",
     "postal": "12345",
     "notes": "Tolong titip di depan rumah"
   }
   ```

3. **`orders`** - Array semua pesanan
   ```json
   [
     {
       "id": "ORD-2024-123456",
       "date": "2024-01-13T10:30:00Z",
       "customer": {...},
       "items": [...],
       "subtotal": 70000,
       "shipping": 20000,
       "tax": 9000,
       "total": 99000,
       "paymentMethod": "bank",
       "status": "pending"
     }
   ]
   ```

---

## 🔐 Validasi Form

### Data Pengiriman:
- ✅ Nama: Tidak boleh kosong
- ✅ Email: Format valid (xxx@xxx.xxx)
- ✅ Telepon: Format Indonesia (+62 atau 0, 9-12 digit)
- ✅ Alamat: Tidak boleh kosong
- ✅ Kota: Tidak boleh kosong

### Error Handling:
- Menampilkan pesan error spesifik per field
- Highlight field error dengan border merah
- Otomatis clear error saat user mulai mengetik

---

## 💳 Metode Pembayaran

### 1. Transfer Bank
- **BCA**: 2910-1234-5678 (a/n PT Dapur Roti Rumahan)
- **Mandiri**: 1180-0012-3456 (a/n PT Dapur Roti Rumahan)
- **Instruksi**: Transfer exact amount untuk auto-verification

### 2. E-Wallet
- **Nomor**: +62 812 3456 7890
- **Aplikasi**: Dana, GCash, OVO, GoPay
- **Instant**: Pesanan langsung diproses setelah pembayaran

### 3. COD (Bayar di Tempat)
- **Prosedur**: Bayar ke kurir saat barang tiba
- **Fleksibel**: Tunai atau e-wallet
- **Verifikasi**: Kondisi barang bisa dicek sebelum bayar

### 4. Cheque/Bilyet Giro
- **Untuk**: Pesanan korporat/B2B
- **Alamat**: Jl. Gatot Subroto No.123, Jakarta
- **Proses**: Order diproses setelah cek diterima

---

## 📦 Order Lifecycle

### Status Pesanan:
1. **Pending** ⏳ - Menunggu pembayaran
2. **Confirmed** ✓ - Pembayaran diterima, dalam packing
3. **Shipped** 🚚 - Dalam perjalanan ke alamat
4. **Completed** ✅ - Barang telah diterima
5. **Cancelled** ❌ - Pesanan dibatalkan

### Customer Actions:
- Dapat melihat status real-time di Order History
- Dapat melihat detail pesanan lengkap
- Dapat melacak shipping (jika ada tracking number)

---

## 🎨 UI/UX Features

### Progress Indicator
- 3-step progress bar visual
- Highlight step yang sedang aktif
- Navigation forward & backward

### Mobile Responsive
- Fully responsive design
- Optimized untuk mobile checkout
- Touch-friendly buttons & forms

### Feedback & Notifications
- Form validation messages
- Success confirmation page
- Loading states
- Error alerts

---

## 📊 Perhitungan Total

### Formula:
```
Subtotal = SUM(product.price × product.quantity)
Shipping = 20,000 (fixed)
Tax      = Subtotal × 10%
Total    = Subtotal + Shipping + Tax
```

### Contoh:
```
Roti Tawar (2x 35,000) = 70,000
Croissant (1x 28,000)  = 28,000
───────────────────────────────
Subtotal               = 98,000
Ongkir                 = 20,000
Pajak (10%)            =  9,800
───────────────────────────────
Total                  = 127,800
```

---

## 🚀 Cara Menggunakan

### Untuk Pelanggan:

1. **Berbelanja**
   - Buka halaman `produk.html`
   - Pilih produk & klik "Tambah ke Keranjang"
   - Ulangi untuk produk lainnya

2. **Review Keranjang**
   - Buka `keranjang.html`
   - Ubah quantity dengan tombol +/-
   - Hapus item jika perlu
   - Klik "Lanjut ke Checkout"

3. **Checkout**
   - **Step 1**: Isi data pengiriman
   - **Step 2**: Pilih metode pembayaran
   - **Step 3**: Lihat konfirmasi & nomor order
   - Catat nomor order untuk referensi

4. **Cek Status**
   - Buka `order-history.html`
   - Filter berdasarkan status
   - Klik pesanan untuk detail lengkap

### Untuk Admin:

1. **Integrasi dengan Admin Panel**
   - Orders otomatis tersimpan di admin system
   - Dapat diakses via `/admin/order-management.html`
   - Update status pesanan dari admin panel

2. **Notifikasi Order**
   - Email ke `info@dapurroti.com`
   - WhatsApp confirmation (opsional add-on)
   - Order visible di dashboard admin

---

## ⚙️ Konfigurasi

### Bank Account (Edit di checkout.js):
```javascript
// Line 207-220
case 'bank':
    paymentInfo = `
        <div class="mb-3 pb-3 border-b border-orange-300">
            <p class="font-semibold text-orange-900">Bank BCA</p>
            <p class="text-lg font-bold text-orange-600">No. Rekening: 2910-1234-5678</p>
            ...
    `;
```

### Shipping Cost (Edit di checkout.js & order-history.js):
```javascript
const shipping = 20000; // Ubah nilai ini
```

### Tax Rate (Edit di checkout.js):
```javascript
const tax = Math.floor(subtotal * 0.1); // 0.1 = 10%
```

### Contact Info (Edit di checkout.html):
```html
<li>📱 +62 812 3456 7890</li>
<li>📧 info@dapurroti.com</li>
```

---

## 🐛 Troubleshooting

### Cart tidak muncul?
- Clear browser cache
- Check localStorage: `localStorage.getItem('cart')`

### Order tidak tersimpan?
- Pastikan JavaScript enabled
- Check browser console untuk errors
- Verify data di localStorage

### Form validation error?
- Gunakan format email valid
- Nomor telepon harus +62 atau 0
- Pastikan semua field required diisi

---

## 🔄 Integrasi dengan Backend (Opsional)

Untuk integrasi dengan backend:

1. **API Endpoint untuk Order**
   ```
   POST /api/orders
   ```

2. **Order Status Update**
   ```
   PUT /api/orders/{orderId}/status
   ```

3. **Payment Verification**
   ```
   POST /api/payments/verify
   ```

4. **Email Notification**
   ```
   POST /api/email/send-order-confirmation
   ```

---

## 📞 Support

Untuk bantuan atau pertanyaan tentang checkout system:
- 📧 Email: info@dapurroti.com
- 📱 WhatsApp: +62 812 3456 7890
- 💬 Chat: Via website contact form

---

**Terakhir Updated**: 13 Januari 2024  
**Version**: 2.0 (Web Checkout)  
**Status**: ✅ Production Ready
