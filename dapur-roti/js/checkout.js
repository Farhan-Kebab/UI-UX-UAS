// ===== CHECKOUT PAGE INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    loadNavbar();
    initializeCheckout();
});

function initializeCheckout() {
    // Load and display cart items
    const cart = getCart();
    
    if (cart.length === 0) {
        window.location.href = 'produk.html';
        return;
    }

    renderCheckoutItems(cart);
    calculateTotals();

    // Setup payment method listeners
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', function() {
            document.querySelectorAll('.payment-method').forEach(m => 
                m.classList.remove('border-orange-500', 'bg-orange-50')
            );
            this.classList.add('border-orange-500', 'bg-orange-50');
            
            const selectedMethod = this.dataset.method;
            showPaymentDetails(selectedMethod);
        });
    });
}

function renderCheckoutItems(cart) {
    const itemsContainer = document.getElementById('order-items');
    itemsContainer.innerHTML = '';

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'flex justify-between items-start pb-3 border-b border-orange-200';
        itemDiv.innerHTML = `
            <div class="flex-1">
                <p class="font-semibold text-orange-900">${item.name}</p>
                <p class="text-xs text-orange-700">${item.quantity}x @ Rp ${formatPrice(item.price)}</p>
            </div>
            <p class="font-semibold text-orange-600">Rp ${formatPrice(item.price * item.quantity)}</p>
        `;
        itemsContainer.appendChild(itemDiv);
    });
}

function calculateTotals() {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 20000;
    const tax = Math.floor(subtotal * 0.1);
    const total = subtotal + shipping + tax;

    document.getElementById('subtotal-price').textContent = 'Rp ' + formatPrice(subtotal);
    document.getElementById('shipping-price').textContent = 'Rp ' + formatPrice(shipping);
    document.getElementById('tax-price').textContent = 'Rp ' + formatPrice(tax);
    document.getElementById('total-price').textContent = 'Rp ' + formatPrice(total);
}

// ===== VALIDATION & FORM HANDLING =====
function validateAndProceed() {
    try {
        console.log('Validasi dimulai...');
        
        // Clear previous errors
        document.querySelectorAll('[class*="error-"]').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('input, textarea').forEach(el => el.classList.remove('form-error'));

        const fullname = document.getElementById('fullname') ? document.getElementById('fullname').value.trim() : '';
        const email = document.getElementById('email') ? document.getElementById('email').value.trim() : '';
        const phone = document.getElementById('phone') ? document.getElementById('phone').value.trim() : '';
        const address = document.getElementById('address') ? document.getElementById('address').value.trim() : '';
        const city = document.getElementById('city') ? document.getElementById('city').value.trim() : '';

        console.log('Form data:', { fullname, email, phone, address, city });

        let isValid = true;

        // Validate Full Name
        if (!fullname) {
            showError('fullname', 'Nama lengkap harus diisi');
            document.getElementById('fullname').classList.add('form-error');
            isValid = false;
        }

        // Validate Email (relaxed validation for demo)
        if (!email) {
            showError('email', 'Email harus diisi');
            document.getElementById('email').classList.add('form-error');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Format email tidak valid (gunakan: nama@domain.com)');
            document.getElementById('email').classList.add('form-error');
            isValid = false;
        }

        // Validate Phone
        if (!phone) {
            showError('phone', 'Nomor telepon harus diisi');
            document.getElementById('phone').classList.add('form-error');
            isValid = false;
        } else if (!isValidPhone(phone)) {
            showError('phone', 'Format telepon tidak valid (gunakan: +62 atau 0 diikuti 9-12 digit)');
            document.getElementById('phone').classList.add('form-error');
            isValid = false;
        }

        // Validate Address
        if (!address) {
            showError('address', 'Alamat harus diisi');
            document.getElementById('address').classList.add('form-error');
            isValid = false;
        }

        // Validate City
        if (!city) {
            showError('city', 'Kota harus diisi');
            document.getElementById('city').classList.add('form-error');
            isValid = false;
        }

        console.log('Validasi hasil:', isValid);

        if (isValid) {
            // Save shipping data
            const shippingData = {
                fullname,
                email,
                phone,
                address,
                city,
                postal: document.getElementById('postal').value,
                notes: document.getElementById('notes').value
            };
            console.log('Simpan data pengiriman:', shippingData);
            localStorage.setItem('shippingData', JSON.stringify(shippingData));

            // Move to step 2
            goToPaymentStep();
        } else {
            console.log('Validasi gagal, scroll ke atas');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } catch (error) {
        console.error('Error dalam validateAndProceed:', error);
        alert('Terjadi kesalahan: ' + error.message);
    }
}

function showError(fieldId, message) {
    const errorElement = document.querySelector(`.error-${fieldId}`);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
        document.getElementById(fieldId).classList.add('form-error');
    }
}

function isValidEmail(email) {
    // Email validation - accept if has @ and .
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    // Accept phone if starts with +62 or 0, followed by 8-13 digits
    const cleaned = phone.replace(/[\s\-()]/g, '');
    return /^(\+62|0)[0-9]{8,13}$/.test(cleaned);
}

// ===== STEP NAVIGATION =====
function goToPaymentStep() {
    document.getElementById('step-1-form').classList.add('hidden');
    document.getElementById('step-2-form').classList.remove('hidden');
    
    // Update step indicators
    document.querySelector('.step-active').classList.remove('step-active');
    document.getElementById('step-2').classList.add('step-active');
    document.getElementById('step-2').classList.remove('text-orange-700', 'bg-orange-200');
    document.getElementById('step-2').classList.add('text-white', 'bg-orange-600');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToShipping() {
    document.getElementById('step-1-form').classList.remove('hidden');
    document.getElementById('step-2-form').classList.add('hidden');
    
    // Update step indicators
    document.querySelector('.step-active').classList.remove('step-active');
    document.querySelector('.inline-flex.bg-orange-600').classList.remove('step-active');
    document.querySelector('[class*="text-orange-900"][class*="font-semibold"]').classList.add('step-active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function completeCheckout() {
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    
    if (!selectedPayment) {
        alert('Pilih metode pembayaran terlebih dahulu!');
        return;
    }

    const paymentMethod = selectedPayment.value;
    const shippingData = JSON.parse(localStorage.getItem('shippingData'));
    const cart = getCart();

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 20000;
    const tax = Math.floor(subtotal * 0.1);
    const total = subtotal + shipping + tax;

    // Create order object
    const order = {
        id: generateOrderId(),
        date: new Date().toISOString(),
        customer: {
            fullname: shippingData.fullname,
            email: shippingData.email,
            phone: shippingData.phone,
            address: shippingData.address,
            city: shippingData.city,
            postal: shippingData.postal,
            notes: shippingData.notes
        },
        items: cart,
        subtotal: subtotal,
        shipping: shipping,
        tax: tax,
        total: total,
        paymentMethod: paymentMethod,
        status: 'pending'
    };

    // Save order
    saveOrder(order);

    // Show confirmation
    showConfirmation(order);

    // Clear cart
    localStorage.removeItem('cart');
    updateCartCount();
}

function showConfirmation(order) {
    // Update step indicators
    document.getElementById('step-2-form').classList.add('hidden');
    document.getElementById('step-3-form').classList.remove('hidden');

    document.querySelectorAll('[id^="step-"]').forEach((el, idx) => {
        if (idx < 2) {
            el.classList.remove('bg-orange-200', 'text-orange-700');
            el.classList.add('bg-orange-600', 'text-white');
        }
    });

    // Display order summary
    const summaryDiv = document.getElementById('order-summary');
    summaryDiv.innerHTML = `
        <div class="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
            <h4 class="font-bold text-orange-900 mb-4">📦 Barang Pesanan:</h4>
            <div class="space-y-2">
                ${order.items.map(item => `
                    <div class="flex justify-between text-orange-800">
                        <span>${item.quantity}x ${item.name}</span>
                        <span class="font-semibold">Rp ${formatPrice(item.price * item.quantity)}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <h4 class="font-bold text-blue-900 mb-4">📍 Pengiriman ke:</h4>
            <p class="text-blue-800 font-semibold">${order.customer.fullname}</p>
            <p class="text-blue-700 text-sm">${order.customer.address}</p>
            <p class="text-blue-700 text-sm">${order.customer.city} ${order.customer.postal}</p>
            <p class="text-blue-700 text-sm mt-2">📱 ${order.customer.phone}</p>
        </div>

        <div class="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
            <h4 class="font-bold text-purple-900 mb-4">💳 Pembayaran:</h4>
            <div class="space-y-2 text-purple-800">
                <div class="flex justify-between">
                    <span>Subtotal</span>
                    <span class="font-semibold">Rp ${formatPrice(order.subtotal)}</span>
                </div>
                <div class="flex justify-between">
                    <span>Ongkir</span>
                    <span class="font-semibold">Rp ${formatPrice(order.shipping)}</span>
                </div>
                <div class="flex justify-between">
                    <span>Pajak</span>
                    <span class="font-semibold">Rp ${formatPrice(order.tax)}</span>
                </div>
                <div class="border-t border-purple-300 pt-2 flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>Rp ${formatPrice(order.total)}</span>
                </div>
                <div class="mt-4 pt-4 border-t border-purple-300">
                    <p class="text-sm font-semibold mb-2">Metode: ${getPaymentMethodText(order.paymentMethod)}</p>
                    <p class="text-xs">${getPaymentInstructions(order.paymentMethod, order.total)}</p>
                </div>
            </div>
        </div>
    `;

    document.getElementById('order-id').textContent = order.id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== PAYMENT METHOD DETAILS =====
function showPaymentDetails(method) {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + 20000 + Math.floor(subtotal * 0.1);

    const detailsDiv = document.getElementById('payment-details');
    const infoDiv = document.getElementById('payment-info');

    let paymentInfo = '';

    switch(method) {
        case 'bank':
            paymentInfo = `
                <div class="mb-3 pb-3 border-b border-orange-300">
                    <p class="font-semibold text-orange-900">Bank BCA</p>
                    <p class="text-lg font-bold text-orange-600">No. Rekening: 2910-1234-5678</p>
                    <p class="text-sm text-orange-700">a/n PT Dapur Roti Rumahan</p>
                </div>
                <div class="mb-3 pb-3 border-b border-orange-300">
                    <p class="font-semibold text-orange-900">Bank Mandiri</p>
                    <p class="text-lg font-bold text-orange-600">No. Rekening: 1180-0012-3456</p>
                    <p class="text-sm text-orange-700">a/n PT Dapur Roti Rumahan</p>
                </div>
                <div>
                    <p class="font-semibold text-orange-900">Jumlah Transfer</p>
                    <p class="text-2xl font-bold text-orange-600">Rp ${formatPrice(total)}</p>
                </div>
            `;
            break;
        case 'ewallet':
            paymentInfo = `
                <div class="mb-3 pb-3 border-b border-orange-300">
                    <p class="font-semibold text-orange-900">Dana / GCash</p>
                    <p class="text-lg font-bold text-orange-600">+62 812 3456 7890</p>
                </div>
                <div class="mb-3 pb-3 border-b border-orange-300">
                    <p class="font-semibold text-orange-900">OVO / GoPay</p>
                    <p class="text-lg font-bold text-orange-600">+62 812 3456 7890</p>
                </div>
                <div>
                    <p class="font-semibold text-orange-900">Jumlah Bayar</p>
                    <p class="text-2xl font-bold text-orange-600">Rp ${formatPrice(total)}</p>
                </div>
            `;
            break;
        case 'cod':
            paymentInfo = `
                <p class="text-orange-900 font-semibold mb-2">Bayar Langsung ke Kurir Saat Pengiriman</p>
                <p class="text-lg font-bold text-orange-600 mb-3">Rp ${formatPrice(total)}</p>
                <p class="text-sm text-orange-700">
                    ✓ Kurir akan mengantarkan barang ke alamat Anda<br>
                    ✓ Periksa kondisi barang sebelum membayar<br>
                    ✓ Pembayaran dapat tunai atau e-wallet
                </p>
            `;
            break;
        case 'cheque':
            paymentInfo = `
                <p class="text-orange-900 font-semibold mb-2">Petunjuk Pembayaran via Cek</p>
                <p class="text-sm text-orange-700 mb-3">
                    1. Kirim cek atau bilyet giro atas nama PT Dapur Roti Rumahan<br>
                    2. Alamat pengiriman: Jl. Gatot Subroto No.123, Jakarta<br>
                    3. Pesanan akan diproses setelah cek diterima
                </p>
                <div class="mt-4 p-3 bg-orange-100 rounded">
                    <p class="font-bold text-orange-900">Total Pembayaran</p>
                    <p class="text-2xl font-bold text-orange-600">Rp ${formatPrice(total)}</p>
                </div>
            `;
            break;
    }

    infoDiv.innerHTML = paymentInfo;
    detailsDiv.classList.remove('hidden');
}

function getPaymentMethodText(method) {
    const methods = {
        'bank': '💳 Transfer Bank',
        'ewallet': '📱 E-Wallet',
        'cod': '🚚 Bayar di Tempat (COD)',
        'cheque': '✍️ Cek/Bilyet Giro'
    };
    return methods[method] || method;
}

function getPaymentInstructions(method, total) {
    const instructions = {
        'bank': `Transfer ke rekening BCA 2910-1234-5678 atau Mandiri 1180-0012-3456 sebesar Rp ${formatPrice(total)}. Konfirmasi via chat.`,
        'ewallet': `Transfer ke Dana/GCash/OVO/GoPay +62 812 3456 7890 sebesar Rp ${formatPrice(total)}. Pesanan akan langsung diproses.`,
        'cod': `Bayar langsung ke kurir saat pengiriman sebesar Rp ${formatPrice(total)}. Kurir akan menghubungi Anda.`,
        'cheque': `Kirim cek atas nama PT Dapur Roti Rumahan sebesar Rp ${formatPrice(total)}. Pesanan diproses setelah cek diterima.`
    };
    return instructions[method] || 'Silakan hubungi kami untuk detail pembayaran.';
}

// ===== ORDER MANAGEMENT =====
function generateOrderId() {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `ORD-${new Date().getFullYear()}-${timestamp}${random}`;
}

function saveOrder(order) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Save to admin system too
    if (typeof window.dapur_roti_orders !== 'undefined') {
        window.dapur_roti_orders.push({
            id: order.id,
            customer: order.customer.fullname,
            email: order.customer.email,
            phone: order.customer.phone,
            address: order.customer.address,
            items: order.items.map(item => ({
                name: item.name,
                quantity: item.quantity,
                price: item.price
            })),
            totalAmount: order.total,
            status: 'pending',
            date: order.date,
            notes: order.customer.notes
        });
    }
}

function viewOrderHistory() {
    window.location.href = 'order-history.html';
}

// ===== UTILITY FUNCTIONS =====
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID').format(Math.round(price));
}

function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

function updateCartCount() {
    const cart = getCart();
    const badge = document.querySelector('.cart-badge');
    if (badge) {
        badge.textContent = cart.length;
        badge.style.display = cart.length > 0 ? 'flex' : 'none';
    }
}
