// ===== CART PAGE INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Keranjang page loaded');
    loadNavbar();
    displayCart();
});

// ===== DISPLAY CART =====
function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    const cart = getCart();

    console.log('Display cart, items:', cart.length);

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="text-center py-12">
                <div class="text-6xl mb-4">🛒</div>
                <h3 class="text-2xl font-bold text-orange-900 mb-2">Keranjang Kosong</h3>
                <p class="text-orange-700 mb-6">Belum ada produk yang ditambahkan ke keranjang Anda.</p>
                <a href="produk.html" class="btn-primary inline-block">
                    🛍 Mulai Belanja →
                </a>
            </div>
        `;
        document.getElementById('checkout-btn').disabled = true;
        document.getElementById('checkout-btn').style.opacity = '0.5';
        calculateTotal();
        return;
    }

    let cartHTML = '';
    cart.forEach((item, index) => {
        cartHTML += `
            <div class="flex justify-between items-start pb-6 border-b border-orange-200" data-index="${index}">
                <div class="flex gap-4 flex-1">
                    <img src="${item.image}" alt="${item.name}" class="w-24 h-24 object-cover rounded-lg">
                    <div class="flex-1">
                        <h3 class="font-bold text-orange-900 text-lg">${item.name}</h3>
                        <p class="text-orange-700 text-sm mb-3">Harga: Rp ${formatPrice(item.price)}</p>
                        <div class="flex items-center gap-3">
                            <button onclick="updateQuantity(${index}, -1)" class="px-3 py-1 bg-orange-100 text-orange-700 rounded hover:bg-orange-200 transition">-</button>
                            <span class="font-semibold text-orange-900 min-w-[30px] text-center">${item.quantity}</span>
                            <button onclick="updateQuantity(${index}, 1)" class="px-3 py-1 bg-orange-100 text-orange-700 rounded hover:bg-orange-200 transition">+</button>
                        </div>
                    </div>
                </div>
                <div class="text-right">
                    <p class="font-bold text-orange-600 text-lg mb-3">Rp ${formatPrice(item.price * item.quantity)}</p>
                    <button onclick="removeFromCart(${index})" class="px-4 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200 transition text-sm font-semibold">
                        🗑 Hapus
                    </button>
                </div>
            </div>
        `;
    });

    cartContainer.innerHTML = cartHTML;
    calculateTotal();
}


// ===== UPDATE QUANTITY =====
function updateQuantity(index, change) {
    const cart = getCart();
    if (cart[index]) {
        cart[index].quantity = Math.max(1, cart[index].quantity + change);
        saveCart(cart);
        displayCart();
    }
}

// ===== REMOVE FROM CART =====
function removeFromCart(index) {
    if (confirm('Hapus produk ini dari keranjang?')) {
        const cart = getCart();
        cart.splice(index, 1);
        saveCart(cart);
        displayCart();
    }
}

// ===== CALCULATE TOTAL =====
function calculateTotal() {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 20000;
    const tax = Math.floor(subtotal * 0.1);
    const total = subtotal + shipping + tax;

    document.getElementById('subtotal').textContent = 'Rp ' + formatPrice(subtotal);
    document.getElementById('shipping').textContent = 'Rp ' + formatPrice(shipping);
    document.getElementById('total').textContent = 'Rp ' + formatPrice(total);

    // Enable/Disable checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (cart.length === 0) {
        checkoutBtn.disabled = true;
        checkoutBtn.style.opacity = '0.5';
    } else {
        checkoutBtn.disabled = false;
        checkoutBtn.style.opacity = '1';
    }
}

// ===== PROCEED TO CHECKOUT =====
function proceedToCheckout() {
    const cart = getCart();
    if (cart.length === 0) {
        alert('⚠ Keranjang Anda kosong!');
        return;
    }
    console.log('Proceed to checkout, cart:', cart.length, 'items');
    window.location.href = 'checkout.html';
}

// ===== SHOW NOTIFICATION =====
function showNotification(message) {
    console.log('Notification:', message);
    // Optional: Implement toast notification UI
}

// ===== FORMAT PRICE (FALLBACK) =====
if (typeof formatPrice === 'undefined') {
    window.formatPrice = function(amount) {
        return amount.toLocaleString('id-ID');
    };
}
