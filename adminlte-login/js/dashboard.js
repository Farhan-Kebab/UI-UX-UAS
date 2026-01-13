// ===== AUTHENTICATION CHECK =====
window.addEventListener('load', function() {
    const user = sessionStorage.getItem('loggedInUser');
    if (!user) {
        window.location.href = 'login.html';
    } else {
        document.getElementById('usernameDisplay').textContent = user;
    }
});

// ===== INITIALIZE CHARTS =====
function initCharts() {
    // Sales Chart (Line Chart)
    const salesOptions = {
        series: [{
            name: 'Penjualan',
            data: [30, 40, 35, 50, 49, 60, 70]
        }],
        chart: {
            height: 350,
            type: 'line',
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: false
            }
        },
        colors: ['#667eea'],
        stroke: {
            curve: 'smooth',
            width: 3
        },
        xaxis: {
            categories: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']
        },
        grid: {
            show: false
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [20, 100, 100, 100]
            }
        }
    };
    new ApexCharts(document.querySelector("#salesChart"), salesOptions).render();

    // Revenue Chart (Bar Chart)
    const revenueOptions = {
        series: [{
            name: 'Pendapatan (Rp)',
            data: [3000000, 3500000, 3200000, 4200000, 3800000, 4500000, 5000000, 4200000, 5500000, 6000000, 5800000, 6500000]
        }],
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        colors: ['#11998e'],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yaxis: {
            title: {
                text: 'Rp'
            }
        }
    };
    new ApexCharts(document.querySelector("#revenueChart"), revenueOptions).render();

    // Traffic Chart (Pie/Donut Chart)
    const trafficOptions = {
        series: [45, 30, 25],
        labels: ['Organic Search', 'Direct', 'Referral'],
        chart: {
            height: 350,
            type: 'donut'
        },
        colors: ['#667eea', '#764ba2', '#f93b1d'],
        plotOptions: {
            pie: {
                donut: {
                    size: '65%'
                }
            }
        }
    };
    new ApexCharts(document.querySelector("#trafficChart"), trafficOptions).render();
}

// ===== SECTION SWITCHING =====
function showSection(sectionName) {
    // Hide all sections
    document.getElementById('dashboard-section').style.display = 'none';
    document.getElementById('users-section').style.display = 'none';
    document.getElementById('analytics-section').style.display = 'none';
    document.getElementById('settings-section').style.display = 'none';

    // Show selected section
    document.getElementById(sectionName + '-section').style.display = 'block';

    // Update active menu item
    document.querySelectorAll('.sidebar-menu li').forEach(item => {
        item.classList.remove('active');
    });

    // Add active class to clicked item
    const menuMapping = {
        'dashboard': 'dashboard-menu',
        'users': 'users-menu',
        'analytics': 'analytics-menu',
        'settings': 'settings-menu'
    };

    if (menuMapping[sectionName]) {
        const menuItem = document.getElementById(menuMapping[sectionName]);
        if (menuItem) {
            menuItem.parentElement.classList.add('active');
        }
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// ===== LOGOUT FUNCTION =====
function logout() {
    if (confirm('Apakah Anda yakin ingin logout?')) {
        sessionStorage.removeItem('loggedInUser');
        localStorage.removeItem('rememberedUsername');
        window.location.href = 'login.html';
    }
}

// ===== SETUP MENU LISTENERS =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts
    setTimeout(() => {
        initCharts();
    }, 500);

    // Menu listeners
    document.getElementById('dashboard-menu').addEventListener('click', (e) => {
        e.preventDefault();
        showSection('dashboard');
    });

    document.getElementById('users-menu').addEventListener('click', (e) => {
        e.preventDefault();
        showSection('users');
    });

    document.getElementById('analytics-menu').addEventListener('click', (e) => {
        e.preventDefault();
        showSection('analytics');
    });

    document.getElementById('settings-menu').addEventListener('click', (e) => {
        e.preventDefault();
        showSection('settings');
    });

    // Logout button
    document.getElementById('logoutBtn').addEventListener('click', logout);

    // Settings form handler
    document.getElementById('settingsForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const appName = document.getElementById('appName').value;
        const theme = document.getElementById('theme').value;
        
        localStorage.setItem('appName', appName);
        localStorage.setItem('theme', theme);
        
        alert('Pengaturan berhasil disimpan!');
    });

    // Load saved settings
    const savedAppName = localStorage.getItem('appName');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedAppName) {
        document.getElementById('appName').value = savedAppName;
    }
    if (savedTheme) {
        document.getElementById('theme').value = savedTheme;
    }
});

// ===== SMOOTH SCROLL AND ANIMATIONS =====
document.addEventListener('DOMContentLoaded', function() {
    // Add animation to stat cards on load
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
