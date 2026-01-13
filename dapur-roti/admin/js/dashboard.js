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
}

// ===== LOGOUT FUNCTION =====
function logout() {
    if (confirm('Apakah Anda yakin ingin logout?')) {
        sessionStorage.removeItem('loggedInUser');
        localStorage.removeItem('rememberedUsername');
        window.location.href = 'login.html';
    }
}

// ===== SETUP ON LOAD =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts
    setTimeout(() => {
        initCharts();
    }, 500);
});
