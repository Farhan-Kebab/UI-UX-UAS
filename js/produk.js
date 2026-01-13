// ===== PRODUCT DATA =====
const products = [
    {
        id: 1,
        name: 'Roti Tawar Premium',
        category: 'roti',
        price: 35000,
        image: 'assets/img/products/roti-tawar-premium.jpg',
        description: 'Roti tawar putih premium dengan tekstur lembut dan empuk sempurna untuk sarapan keluarga.'
    },
    {
        id: 2,
        name: 'Roti Gandum Utuh',
        category: 'roti',
        price: 40000,
        image: 'assets/img/products/roti-gandum.jpg',
        description: 'Roti gandum 100% dengan biji-bijian pilihan untuk kesehatan yang optimal.'
    },
    {
        id: 3,
        name: 'Roti Sourdough',
        category: 'roti',
        price: 45000,
        image: 'assets/img/products/roti-sourdough.jpg',
        description: 'Roti sourdough artisan dengan fermentasi alami selama 24 jam untuk rasa yang mendalam.'
    },
    {
        id: 4,
        name: 'Croissant Butter',
        category: 'pastry',
        price: 28000,
        image: 'assets/img/products/croissant-butter.jpg',
        description: 'Croissant berlapis mentega premium dengan tekstur renyah dan lembut di dalam.'
    },
    {
        id: 5,
        name: 'Donat Glaze',
        category: 'pastry',
        price: 22000,
        image: 'assets/img/products/donat-glaze.jpg',
        description: 'Donat empuk dengan glasir cokelat yang manis dan lezat.'
    },
    {
        id: 6,
        name: 'Roti Isi Cokelat',
        category: 'pastry',
        price: 32000,
        image: 'assets/img/products/roti-isi-cokelat.jpg',
        description: 'Roti lembut dengan isian cokelat premium yang lumer di mulut.'
    },
    {
        id: 7,
        name: 'Roti Baguette',
        category: 'roti',
        price: 38000,
        image: 'assets/img/products/roti-baguette.jpg',
        description: 'Baguette Prancis dengan kerak renyah dan tekstur chewy di dalamnya.'
    },
    {
        id: 8,
        name: 'Roti Focaccia',
        category: 'spesial',
        price: 42000,
        image: 'assets/img/products/roti-focaccia.jpg',
        description: 'Focaccia Italia dengan minyak zaitun dan rempah pilihan.'
    },
    {
        id: 9,
        name: 'Roti Ciabatta',
        category: 'spesial',
        price: 36000,
        image: 'assets/img/products/roti-ciabatta.jpg',
        description: 'Ciabatta dengan lubang udara alami sempurna untuk sandwich premium.'
    },
    {
        id: 10,
        name: 'Muffin Blueberry',
        category: 'pastry',
        price: 25000,
        image: 'assets/img/products/muffin-blueberry.jpg',
        description: 'Muffin lembut dengan buah blueberry segar dan manis alami.'
    },
    {
        id: 11,
        name: 'Roti Teff',
        category: 'spesial',
        price: 48000,
        image: 'assets/img/products/roti-teff.jpg',
        description: 'Roti Etiopian premium dari biji teff dengan nutrisi tinggi.'
    },
    {
        id: 12,
        name: 'Kue Bolu Kukus',
        category: 'pastry',
        price: 20000,
        image: 'assets/img/products/kue-bolu-kukus.jpg',
        description: 'Bolu kukus tradisional dengan rasa vanilla alami yang hangat.'
    }
];

// ===== RENDER PRODUCTS =====
function renderProducts(filter = 'semua') {
    const grid = document.getElementById('product-grid');
    
    const filtered = filter === 'semua' 
        ? products 
        : products.filter(p => p.category === filter);

    grid.innerHTML = filtered.map(product => `
        <div class="product-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
            <!-- Image -->
            <div class="relative overflow-hidden bg-orange-100 h-48">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     class="w-full h-full object-cover hover:scale-110 transition duration-500">
                <span class="absolute top-3 right-3 badge">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
            </div>

            <!-- Content -->
            <div class="p-6">
                <h3 class="text-xl font-bold text-orange-900 mb-2">${product.name}</h3>
                <p class="text-orange-700 text-sm mb-4 line-clamp-2">${product.description}</p>

                <!-- Price -->
                <div class="flex justify-between items-center mb-6">
                    <span class="text-2xl font-bold text-orange-600">${formatCurrency(product.price)}</span>
                    <span class="text-sm text-orange-500">Per pcs</span>
                </div>

                <!-- Button -->
                <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')" 
                        class="w-full btn-sm text-center">
                    🛒 Tambah ke Keranjang
                </button>
            </div>
        </div>
    `).join('');
}

// ===== FILTER FUNCTIONALITY =====
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-orange-600', 'text-white');
                btn.classList.add('bg-white', 'border-2', 'border-orange-600', 'text-orange-600');
            });

            // Add active class to clicked button
            button.classList.add('active', 'bg-orange-600', 'text-white');
            button.classList.remove('bg-white', 'border-2', 'border-orange-600', 'text-orange-600');

            // Render filtered products
            const filter = button.dataset.filter;
            renderProducts(filter);
        });
    });
}

// ===== PAGE LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupFilters();
});
