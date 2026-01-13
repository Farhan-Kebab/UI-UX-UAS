// ===== DATA INTEGRATION - Dapur Roti UMKM =====
// File ini menghubungkan data Dapur Roti dengan AdminLTE Dashboard

// ===== PRODUCT DATA =====
const dapur_roti_products = [
    {
        id: 1,
        name: 'Roti Tawar Premium',
        category: 'roti',
        price: 35000,
        stock: 25,
        image: 'https://images.unsplash.com/photo-1556404174-8c627f60f479?w=300&h=300&fit=crop',
        description: 'Roti tawar premium dengan tekstur lembut',
        status: 'active'
    },
    {
        id: 2,
        name: 'Roti Gandum Organik',
        category: 'roti',
        price: 42000,
        stock: 15,
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop',
        description: 'Roti gandum dari biji organik pilihan',
        status: 'active'
    },
    {
        id: 3,
        name: 'Croissant Butter',
        category: 'pastry',
        price: 28000,
        stock: 30,
        image: 'https://images.unsplash.com/photo-1558303541-31a88a8985cb?w=300&h=300&fit=crop',
        description: 'Croissant dengan butter premium',
        status: 'active'
    },
    {
        id: 4,
        name: 'Donat Cokelat',
        category: 'pastry',
        price: 22000,
        stock: 40,
        image: 'https://images.unsplash.com/photo-1585521498521-ab2ddff5b731?w=300&h=300&fit=crop',
        description: 'Donat empuk dengan lapisan cokelat',
        status: 'active'
    },
    {
        id: 5,
        name: 'Roti Sourdough Premium',
        category: 'spesial',
        price: 55000,
        stock: 8,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop',
        description: 'Sourdough artisan dengan fermentasi 48 jam',
        status: 'active'
    },
    {
        id: 6,
        name: 'Bolu Kukus Lembut',
        category: 'spesial',
        price: 32000,
        stock: 20,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop',
        description: 'Bolu kukus dengan resep turun temurun',
        status: 'active'
    }
];

// ===== ORDER DATA =====
const dapur_roti_orders = [
    {
        id: 'ORD-001',
        customer: 'Budi Santoso',
        email: 'budi@email.com',
        phone: '081234567890',
        items: [
            { productId: 1, name: 'Roti Tawar Premium', quantity: 2, price: 35000 },
            { productId: 3, name: 'Croissant Butter', quantity: 1, price: 28000 }
        ],
        totalAmount: 98000,
        status: 'pending',
        date: '2024-01-12',
        address: 'Jl. Merdeka No. 123, Jakarta',
        notes: 'Pesan tepat waktu untuk besok pagi'
    },
    {
        id: 'ORD-002',
        customer: 'Siti Nurhaliza',
        email: 'siti@email.com',
        phone: '082345678901',
        items: [
            { productId: 2, name: 'Roti Gandum Organik', quantity: 3, price: 42000 }
        ],
        totalAmount: 126000,
        status: 'processing',
        date: '2024-01-11',
        address: 'Jl. Ahmad Yani No. 456, Bandung',
        notes: ''
    },
    {
        id: 'ORD-003',
        customer: 'Ahmad Hidayat',
        email: 'ahmad@email.com',
        phone: '083456789012',
        items: [
            { productId: 4, name: 'Donat Cokelat', quantity: 5, price: 22000 },
            { productId: 5, name: 'Roti Sourdough Premium', quantity: 1, price: 55000 }
        ],
        totalAmount: 165000,
        status: 'completed',
        date: '2024-01-10',
        address: 'Jl. Sudirman No. 789, Surabaya',
        notes: 'Pesanan diterima dengan baik'
    },
    {
        id: 'ORD-004',
        customer: 'Ratna Dewi',
        email: 'ratna@email.com',
        phone: '084567890123',
        items: [
            { productId: 6, name: 'Bolu Kukus Lembut', quantity: 2, price: 32000 }
        ],
        totalAmount: 64000,
        status: 'pending',
        date: '2024-01-12',
        address: 'Jl. Gatot Subroto No. 321, Medan',
        notes: 'Untuk acara keluarga minggu depan'
    }
];

// ===== CUSTOMER DATA =====
const dapur_roti_customers = [
    {
        id: 'CUST-001',
        name: 'Budi Santoso',
        email: 'budi@email.com',
        phone: '081234567890',
        address: 'Jl. Merdeka No. 123, Jakarta',
        city: 'Jakarta',
        status: 'active',
        totalOrders: 5,
        totalSpent: 485000,
        joinDate: '2023-06-15'
    },
    {
        id: 'CUST-002',
        name: 'Siti Nurhaliza',
        email: 'siti@email.com',
        phone: '082345678901',
        address: 'Jl. Ahmad Yani No. 456, Bandung',
        city: 'Bandung',
        status: 'active',
        totalOrders: 8,
        totalSpent: 756000,
        joinDate: '2023-08-20'
    },
    {
        id: 'CUST-003',
        name: 'Ahmad Hidayat',
        email: 'ahmad@email.com',
        phone: '083456789012',
        address: 'Jl. Sudirman No. 789, Surabaya',
        city: 'Surabaya',
        status: 'active',
        totalOrders: 3,
        totalSpent: 325000,
        joinDate: '2023-10-10'
    }
];

// ===== STATISTICS FUNCTIONS =====
function getDapurRotiStats() {
    return {
        totalProducts: dapur_roti_products.length,
        activeProducts: dapur_roti_products.filter(p => p.status === 'active').length,
        totalStock: dapur_roti_products.reduce((sum, p) => sum + p.stock, 0),
        totalOrders: dapur_roti_orders.length,
        pendingOrders: dapur_roti_orders.filter(o => o.status === 'pending').length,
        totalCustomers: dapur_roti_customers.length,
        totalRevenue: dapur_roti_orders
            .filter(o => o.status === 'completed')
            .reduce((sum, o) => sum + o.totalAmount, 0),
        monthlyRevenue: dapur_roti_orders
            .filter(o => o.status === 'completed')
            .reduce((sum, o) => sum + o.totalAmount, 0)
    };
}

// ===== GET PRODUCT BY ID =====
function getProductById(id) {
    return dapur_roti_products.find(p => p.id === id);
}

// ===== GET ORDER BY ID =====
function getOrderById(id) {
    return dapur_roti_orders.find(o => o.id === id);
}

// ===== GET PRODUCTS BY CATEGORY =====
function getProductsByCategory(category) {
    if (category === 'semua') {
        return dapur_roti_products;
    }
    return dapur_roti_products.filter(p => p.category === category);
}

// ===== GET ORDERS BY STATUS =====
function getOrdersByStatus(status) {
    if (status === 'semua') {
        return dapur_roti_orders;
    }
    return dapur_roti_orders.filter(o => o.status === status);
}

// ===== ADD NEW PRODUCT =====
function addNewProduct(productData) {
    const newProduct = {
        id: dapur_roti_products.length + 1,
        ...productData,
        status: 'active'
    };
    dapur_roti_products.push(newProduct);
    localStorage.setItem('dapur_roti_products', JSON.stringify(dapur_roti_products));
    return newProduct;
}

// ===== UPDATE PRODUCT =====
function updateProduct(id, updates) {
    const productIndex = dapur_roti_products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        dapur_roti_products[productIndex] = { ...dapur_roti_products[productIndex], ...updates };
        localStorage.setItem('dapur_roti_products', JSON.stringify(dapur_roti_products));
        return dapur_roti_products[productIndex];
    }
    return null;
}

// ===== DELETE PRODUCT =====
function deleteProduct(id) {
    const productIndex = dapur_roti_products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        dapur_roti_products.splice(productIndex, 1);
        localStorage.setItem('dapur_roti_products', JSON.stringify(dapur_roti_products));
        return true;
    }
    return false;
}

// ===== UPDATE ORDER STATUS =====
function updateOrderStatus(orderId, newStatus) {
    const orderIndex = dapur_roti_orders.findIndex(o => o.id === orderId);
    if (orderIndex !== -1) {
        dapur_roti_orders[orderIndex].status = newStatus;
        localStorage.setItem('dapur_roti_orders', JSON.stringify(dapur_roti_orders));
        return dapur_roti_orders[orderIndex];
    }
    return null;
}

// ===== GET RECENT ORDERS =====
function getRecentOrders(limit = 5) {
    return dapur_roti_orders.slice(0, limit);
}

// ===== GET LOW STOCK PRODUCTS =====
function getLowStockProducts(threshold = 15) {
    return dapur_roti_products.filter(p => p.stock <= threshold);
}

// ===== EXPORT DATA FUNCTIONS =====
function exportProductsToCSV() {
    let csv = 'ID,Name,Category,Price,Stock,Status\n';
    dapur_roti_products.forEach(p => {
        csv += `${p.id},"${p.name}","${p.category}",${p.price},${p.stock},"${p.status}"\n`;
    });
    downloadCSV(csv, 'dapur-roti-products.csv');
}

function exportOrdersToCSV() {
    let csv = 'ID,Customer,Email,Phone,Total Amount,Status,Date\n';
    dapur_roti_orders.forEach(o => {
        csv += `${o.id},"${o.customer}","${o.email}","${o.phone}",${o.totalAmount},"${o.status}","${o.date}"\n`;
    });
    downloadCSV(csv, 'dapur-roti-orders.csv');
}

function downloadCSV(csv, filename) {
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}

// ===== LOAD DATA FROM LOCALSTORAGE =====
function loadDataFromStorage() {
    const savedProducts = localStorage.getItem('dapur_roti_products');
    const savedOrders = localStorage.getItem('dapur_roti_orders');
    
    if (savedProducts) {
        const parsed = JSON.parse(savedProducts);
        for (let i = 0; i < parsed.length; i++) {
            dapur_roti_products[i] = parsed[i];
        }
    }
    if (savedOrders) {
        const parsed = JSON.parse(savedOrders);
        for (let i = 0; i < parsed.length; i++) {
            dapur_roti_orders[i] = parsed[i];
        }
    }
}

// ===== INITIALIZE DATA =====
function initializeDapurRotiData() {
    // Check if data already exists in localStorage
    if (!localStorage.getItem('dapur_roti_products')) {
        localStorage.setItem('dapur_roti_products', JSON.stringify(dapur_roti_products));
    }
    if (!localStorage.getItem('dapur_roti_orders')) {
        localStorage.setItem('dapur_roti_orders', JSON.stringify(dapur_roti_orders));
    }
    if (!localStorage.getItem('dapur_roti_customers')) {
        localStorage.setItem('dapur_roti_customers', JSON.stringify(dapur_roti_customers));
    }
    
    loadDataFromStorage();
}

// Auto-initialize on load
if (typeof window !== 'undefined') {
    window.addEventListener('load', initializeDapurRotiData);
}
