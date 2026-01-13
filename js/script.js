// ===== NAVBAR LOADER =====
async function loadNavbar() {
    try {
        const response = await fetch('components/navbar.html');
        const html = await response.text();
        
        const navbarPlaceholder = document.getElementById('navbar-placeholder');
        if (navbarPlaceholder) {
            navbarPlaceholder.innerHTML = html;
            
            // Setup mobile menu toggle
            setupMobileMenu();
            
            // Mark active link
            markActiveLink();
            
            // Update cart badge
            updateCartCount();
        }
    } catch (error) {
        console.error('Error loading navbar:', error);
    }
}

// ===== MOBILE MENU SETUP =====
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinksTrigger = document.querySelector('#mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when link is clicked
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Mobile cart button
    const mobilCartBtn = document.getElementById('mobile-cart-btn');
    if (mobilCartBtn) {
        mobilCartBtn.addEventListener('click', () => {
            window.location.href = 'keranjang.html';
        });
    }
}

// ===== ACTIVE LINK MARKER =====
function markActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active-link');
            link.classList.remove('text-orange-900');
            link.classList.add('text-orange-600', 'border-b-2', 'border-orange-600');
        }
    });
}

// ===== CART MANAGEMENT =====
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function addToCart(productId, name, price, image) {
    let cart = getCart();
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }

    saveCart(cart);
    showNotification(`${name} ditambahkan ke keranjang!`);
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
}

function updateCartQuantity(productId, qty) {
    let cart = getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        if (qty <= 0) {
            removeFromCart(productId);
        } else {
            item.qty = qty;
            saveCart(cart);
        }
    }
}

function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    
    const cartBadge = document.getElementById('cart-badge');
    const mobilCartBadge = document.getElementById('mobile-cart-badge');

    if (totalItems > 0) {
        if (cartBadge) {
            cartBadge.textContent = totalItems;
            cartBadge.classList.remove('hidden');
        }
        if (mobilCartBadge) {
            mobilCartBadge.textContent = totalItems;
            mobilCartBadge.classList.remove('hidden');
        }
    } else {
        if (cartBadge) cartBadge.classList.add('hidden');
        if (mobilCartBadge) mobilCartBadge.classList.add('hidden');
    }
}

// ===== NOTIFICATION =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50 animate-pulse';
    notification.innerHTML = `
        <span>✓</span>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// ===== FORMAT CURRENCY =====
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// ===== REDIRECT WITH DELAY =====
function redirectAfterDelay(url, delay = 1500) {
    setTimeout(() => {
        window.location.href = url;
    }, delay);
}

// ===== ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', loadNavbar);
