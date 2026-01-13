// ===== LOGIN VALIDATION =====
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const rememberMe = document.getElementById('rememberMe').checked;
    const loginBtn = document.getElementById('loginBtn');
    const btnText = document.getElementById('btnText');

    // Clear previous errors
    clearErrors();

    // Validation
    let isValid = true;

    if (!username) {
        showError('username', 'Username tidak boleh kosong');
        isValid = false;
    }

    if (!password) {
        showError('password', 'Password tidak boleh kosong');
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    // Show loading state
    loginBtn.disabled = true;
    btnText.textContent = 'Loading...';
    loginBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Loading...';

    // Simulate API call (delay 1.5 seconds)
    setTimeout(() => {
        // Check credentials (admin / 123)
        if (username === 'admin' && password === '123') {
            // Login success
            loginSuccess(username, rememberMe);
        } else {
            // Login failed
            loginBtn.disabled = false;
            btnText.textContent = 'Masuk';
            loginBtn.innerHTML = '<i class="bi bi-arrow-right-circle"></i> <span id="btnText">Masuk</span>';
            showError('password', 'Username atau password salah!');
        }
    }, 1500);
}

// ===== SHOW ERROR =====
function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + 'Error');
    const fieldElement = document.getElementById(fieldId);
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
    
    if (fieldElement) {
        fieldElement.parentElement.classList.add('error');
    }
}

// ===== CLEAR ERRORS =====
function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => {
        el.classList.remove('show');
        el.textContent = '';
    });

    document.querySelectorAll('.form-group.error').forEach(el => {
        el.classList.remove('error');
    });
}

// ===== LOGIN SUCCESS =====
function loginSuccess(username, rememberMe) {
    const successMessage = document.getElementById('successMessage');
    const loginBtn = document.getElementById('loginBtn');

    // Show success message
    successMessage.classList.add('show');

    // Save to sessionStorage (always)
    sessionStorage.setItem('loggedInUser', username);

    // Save to localStorage if remember me is checked
    if (rememberMe) {
        localStorage.setItem('rememberedUsername', username);
    } else {
        localStorage.removeItem('rememberedUsername');
    }

    // Redirect to dashboard after 1.5 seconds
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 1500);
}

// ===== AUTO-FILL REMEMBERED USERNAME =====
window.addEventListener('DOMContentLoaded', () => {
    const rememberedUsername = localStorage.getItem('rememberedUsername');
    if (rememberedUsername) {
        document.getElementById('username').value = rememberedUsername;
        document.getElementById('rememberMe').checked = true;
        document.getElementById('password').focus();
    }
});

// ===== CLEAR ERRORS ON INPUT =====
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            const fieldId = input.id;
            const errorElement = document.getElementById(fieldId + 'Error');
            const fieldElement = document.getElementById(fieldId);
            
            if (errorElement) {
                errorElement.classList.remove('show');
            }
            
            if (fieldElement) {
                fieldElement.parentElement.classList.remove('error');
            }
        });
    });

    // Allow Enter key to submit
    document.getElementById('password').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            document.getElementById('loginForm').dispatchEvent(new Event('submit'));
        }
    });
});
