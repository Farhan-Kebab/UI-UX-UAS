// ===== ORDER HISTORY PAGE INITIALIZATION =====
let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', function() {
    loadNavbar();
    displayOrders();
});

function displayOrders() {
    const orders = getOrders();
    const ordersList = document.getElementById('orders-list');
    const emptyState = document.getElementById('empty-state');

    if (orders.length === 0) {
        ordersList.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');
    ordersList.innerHTML = '';

    orders.forEach(order => {
        const orderDiv = createOrderCard(order);
        ordersList.appendChild(orderDiv);
    });
}

function createOrderCard(order) {
    const div = document.createElement('div');
    div.className = 'bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition cursor-pointer';
    div.onclick = () => showOrderDetail(order);

    const statusBadge = getStatusBadge(order.status);
    const formattedDate = new Date(order.date).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    div.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
            <!-- Order ID -->
            <div>
                <p class="text-sm text-orange-700 font-semibold mb-1">No. Pesanan</p>
                <p class="text-lg font-bold text-orange-900">${order.id}</p>
                <p class="text-xs text-orange-600 mt-2">${formattedDate}</p>
            </div>

            <!-- Customer Info -->
            <div>
                <p class="text-sm text-orange-700 font-semibold mb-1">Penerima</p>
                <p class="font-semibold text-orange-900">${order.customer.fullname}</p>
                <p class="text-xs text-orange-600">${order.customer.city}</p>
            </div>

            <!-- Items -->
            <div>
                <p class="text-sm text-orange-700 font-semibold mb-1">Produk</p>
                <p class="text-orange-900">${order.items.length} item</p>
                <p class="text-xs text-orange-600 mt-1">
                    ${order.items.map(i => i.name).slice(0, 2).join(', ')}${order.items.length > 2 ? '...' : ''}
                </p>
            </div>

            <!-- Status & Total -->
            <div class="md:text-right">
                <p class="text-sm text-orange-700 font-semibold mb-2">Status</p>
                <div class="mb-3">${statusBadge}</div>
                <p class="text-lg font-bold text-orange-600">Rp ${formatPrice(order.total)}</p>
            </div>
        </div>
    `;

    return div;
}

function getStatusBadge(status) {
    const statuses = {
        'pending': { text: '⏳ Menunggu Pembayaran', color: 'bg-yellow-100 text-yellow-700' },
        'confirmed': { text: '✓ Dikonfirmasi', color: 'bg-blue-100 text-blue-700' },
        'shipped': { text: '🚚 Dalam Pengiriman', color: 'bg-purple-100 text-purple-700' },
        'completed': { text: '✅ Selesai', color: 'bg-green-100 text-green-700' },
        'cancelled': { text: '❌ Dibatalkan', color: 'bg-red-100 text-red-700' }
    };

    const statusInfo = statuses[status] || { text: status, color: 'bg-gray-100 text-gray-700' };
    return `<span class="px-3 py-1 rounded-full text-sm font-semibold ${statusInfo.color}">${statusInfo.text}</span>`;
}

function showOrderDetail(order) {
    const modal = document.getElementById('order-modal');
    const modalContent = document.getElementById('modal-content');

    const itemsHTML = order.items.map(item => `
        <div class="flex justify-between items-center py-2 border-b border-orange-200">
            <div>
                <p class="font-semibold text-orange-900">${item.name}</p>
                <p class="text-xs text-orange-700">${item.quantity}x @ Rp ${formatPrice(item.price)}</p>
            </div>
            <p class="font-semibold text-orange-600">Rp ${formatPrice(item.price * item.quantity)}</p>
        </div>
    `).join('');

    const paymentMethods = {
        'bank': '💳 Transfer Bank',
        'ewallet': '📱 E-Wallet',
        'cod': '🚚 Bayar di Tempat (COD)',
        'cheque': '✍️ Cek/Bilyet Giro'
    };

    const paymentMethod = paymentMethods[order.paymentMethod] || order.paymentMethod;

    modalContent.innerHTML = `
        <div class="space-y-6">
            <!-- Order Header -->
            <div class="grid grid-cols-2 gap-4 pb-4 border-b-2 border-orange-200">
                <div>
                    <p class="text-sm text-orange-700 font-semibold">No. Pesanan</p>
                    <p class="text-xl font-bold text-orange-900">${order.id}</p>
                </div>
                <div class="text-right">
                    <p class="text-sm text-orange-700 font-semibold">Status</p>
                    <div>${getStatusBadge(order.status)}</div>
                </div>
            </div>

            <!-- Customer Info -->
            <div class="bg-orange-50 p-4 rounded-lg">
                <h3 class="font-bold text-orange-900 mb-3">📍 Informasi Pengiriman</h3>
                <p class="font-semibold text-orange-900">${order.customer.fullname}</p>
                <p class="text-sm text-orange-700">${order.customer.address}</p>
                <p class="text-sm text-orange-700">${order.customer.city} ${order.customer.postal}</p>
                <p class="text-sm text-orange-700 mt-2">📱 ${order.customer.phone}</p>
                <p class="text-sm text-orange-700">📧 ${order.customer.email}</p>
                ${order.customer.notes ? `<p class="text-sm text-orange-700 mt-2"><strong>Catatan:</strong> ${order.customer.notes}</p>` : ''}
            </div>

            <!-- Items -->
            <div class="bg-blue-50 p-4 rounded-lg">
                <h3 class="font-bold text-blue-900 mb-3">📦 Detail Pesanan</h3>
                ${itemsHTML}
            </div>

            <!-- Totals -->
            <div class="bg-purple-50 p-4 rounded-lg space-y-2">
                <div class="flex justify-between text-purple-900">
                    <span>Subtotal</span>
                    <span class="font-semibold">Rp ${formatPrice(order.subtotal)}</span>
                </div>
                <div class="flex justify-between text-purple-900">
                    <span>Ongkir</span>
                    <span class="font-semibold">Rp ${formatPrice(order.shipping)}</span>
                </div>
                <div class="flex justify-between text-purple-900">
                    <span>Pajak</span>
                    <span class="font-semibold">Rp ${formatPrice(order.tax)}</span>
                </div>
                <div class="border-t border-purple-200 pt-2 flex justify-between text-lg font-bold text-purple-900">
                    <span>Total</span>
                    <span>Rp ${formatPrice(order.total)}</span>
                </div>
            </div>

            <!-- Payment Info -->
            <div class="bg-green-50 p-4 rounded-lg">
                <h3 class="font-bold text-green-900 mb-2">💳 Metode Pembayaran</h3>
                <p class="text-green-800">${paymentMethod}</p>
                <p class="text-xs text-green-700 mt-2">Tanggal Pesanan: ${new Date(order.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('order-modal').classList.add('hidden');
}

function filterOrders(filter) {
    currentFilter = filter;

    // Update active button
    document.querySelectorAll('.filter-tab').forEach(btn => {
        btn.classList.remove('bg-orange-600', 'text-white');
        btn.classList.add('bg-orange-100', 'text-orange-700');
    });
    event.target.classList.remove('bg-orange-100', 'text-orange-700');
    event.target.classList.add('bg-orange-600', 'text-white');

    // Filter and display
    const orders = getOrders();
    const ordersList = document.getElementById('orders-list');

    let filtered = orders;
    if (filter !== 'all') {
        filtered = orders.filter(order => order.status === filter);
    }

    ordersList.innerHTML = '';
    if (filtered.length === 0) {
        ordersList.innerHTML = `
            <div class="text-center py-8">
                <p class="text-2xl text-orange-700 font-semibold">Tidak ada pesanan dengan status ini</p>
            </div>
        `;
        return;
    }

    filtered.forEach(order => {
        const orderDiv = createOrderCard(order);
        ordersList.appendChild(orderDiv);
    });
}

// ===== ORDER MANAGEMENT =====
function getOrders() {
    const orders = localStorage.getItem('orders');
    return orders ? JSON.parse(orders) : [];
}

// ===== UTILITY FUNCTIONS =====
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID').format(Math.round(price));
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('order-modal');
    if (event.target === modal) {
        closeModal();
    }
});
