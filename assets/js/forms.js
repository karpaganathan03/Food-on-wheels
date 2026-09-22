/**
 * StreetFeast — Form Validation & Authentication Flow
 * Vanilla JavaScript with LocalStorage credential handling
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const STORAGE_USER_KEY = 'sf_registered_user';
  const STORAGE_USERS_LIST = 'sf_users';
  const STORAGE_SESSION_KEY = 'sf_logged_in_user';

  // Helper: Retrieve all registered users
  function getAllUsers() {
    try {
      const users = JSON.parse(localStorage.getItem(STORAGE_USERS_LIST) || '[]');
      const single = JSON.parse(localStorage.getItem(STORAGE_USER_KEY) || 'null');
      if (single && !users.some(u => u.email.toLowerCase() === single.email.toLowerCase())) {
        users.push(single);
      }
      return users;
    } catch (e) {
      return [];
    }
  }

  // Helper: Save newly registered user
  function saveRegisteredUser(user) {
    const users = getAllUsers().filter(u => u.email.toLowerCase() !== user.email.toLowerCase());
    users.push(user);
    localStorage.setItem(STORAGE_USERS_LIST, JSON.stringify(users));
    localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(user));
  }

  // Helper: Find matching credentials
  function findMatchingUser(email, password) {
    const cleanEmail = (email || '').trim().toLowerCase();
    const users = getAllUsers();
    return users.find(u => u.email.toLowerCase() === cleanEmail && u.password === password);
  }

  // Helper: Display dynamic alerts
  function renderAlert(containerId, message, type = 'danger') {
    const container = document.getElementById(containerId);
    if (!container) return;
    const icon = type === 'success' 
      ? '<i class="bi bi-check-circle-fill fs-5"></i>' 
      : (type === 'info' ? '<i class="bi bi-info-circle-fill fs-5"></i>' : '<i class="bi bi-exclamation-triangle-fill fs-5"></i>');
    
    container.innerHTML = `
      <div class="alert alert-${type} d-flex align-items-center gap-2 mb-3 shadow-sm border-0 bg-${type} bg-opacity-10 text-${type} rounded-3">
        ${icon}
        <div>${message}</div>
      </div>
    `;
  }

  /* ==========================================================================
     1. SIGN UP CONTROLLERS (vendor-signup.html & register.html)
     ========================================================================== */
  const signupForm = document.getElementById('form-vendor-signup');
  const registerForm = document.getElementById('form-vendor-register');

  function handleAccountCreation(form, alertContainerId, isVendorSignup = true) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      e.stopPropagation();

      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }

      // Extract values based on form type
      const nameInput = isVendorSignup 
        ? document.getElementById('owner-name') 
        : document.getElementById('reg-owner-name');
      const truckInput = isVendorSignup 
        ? document.getElementById('truck-name') 
        : document.getElementById('reg-truck-name');
      const emailInput = isVendorSignup 
        ? document.getElementById('truck-email') 
        : document.getElementById('reg-email');
      const phoneInput = isVendorSignup 
        ? document.getElementById('truck-phone') 
        : document.getElementById('reg-phone');
      const passInput = isVendorSignup 
        ? document.getElementById('truck-password') 
        : document.getElementById('reg-password');
      const confirmPassInput = isVendorSignup 
        ? document.getElementById('truck-confirm-password') 
        : document.getElementById('reg-confirm-password');

      const name = nameInput ? nameInput.value.trim() : '';
      const truckName = truckInput ? truckInput.value.trim() : 'The Taco Wagon';
      const email = emailInput ? emailInput.value.trim().toLowerCase() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const password = passInput ? passInput.value : '';
      const confirmPassword = confirmPassInput ? confirmPassInput.value : '';

      // Password checks
      if (password.length < 6) {
        renderAlert(alertContainerId, 'Password must be at least 6 characters long.', 'danger');
        if (passInput) passInput.focus();
        return;
      }

      if (password !== confirmPassword) {
        renderAlert(alertContainerId, '<strong>Passwords do not match.</strong> Please confirm identical passwords.', 'danger');
        if (confirmPassInput) {
          confirmPassInput.value = '';
          confirmPassInput.focus();
        }
        return;
      }

      // Create and persist user credentials
      const newUser = {
        name: name || 'Vendor Owner',
        truckName: truckName || 'StreetFeast Vendor',
        email: email,
        password: password,
        phone: phone,
        createdAt: new Date().toISOString()
      };

      saveRegisteredUser(newUser);

      // Disable submit button and indicate progress
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Account Created! Redirecting to Login...';
      }

      renderAlert(alertContainerId, '<strong>Account Created!</strong> Redirecting to sign in...', 'success');

      // Redirect to login with registered credentials
      setTimeout(() => {
        window.location.href = `login.html?registered=true&email=${encodeURIComponent(email)}`;
      }, 700);
    });
  }

  if (signupForm) {
    handleAccountCreation(signupForm, 'signup-alert-container', true);
  }

  if (registerForm) {
    handleAccountCreation(registerForm, 'register-alert-container', false);
  }

  // Live "Confirm Password" matching so the mismatch state only ever shows
  // when the two fields genuinely differ, and clears the instant they match.
  function wireConfirmPasswordMatch(passId, confirmId) {
    const passEl = document.getElementById(passId);
    const confirmEl = document.getElementById(confirmId);
    if (!passEl || !confirmEl) return;

    function checkMatch() {
      if (confirmEl.value && confirmEl.value !== passEl.value) {
        confirmEl.setCustomValidity('Passwords do not match.');
      } else {
        confirmEl.setCustomValidity('');
      }
    }

    passEl.addEventListener('input', checkMatch);
    confirmEl.addEventListener('input', checkMatch);
  }

  wireConfirmPasswordMatch('truck-password', 'truck-confirm-password');
  wireConfirmPasswordMatch('reg-password', 'reg-confirm-password');

  /* ==========================================================================
     2. LOGIN CONTROLLER (login.html)
     ========================================================================== */
  const loginForm = document.getElementById('form-vendor-login');
  if (loginForm) {
    const urlParams = new URLSearchParams(window.location.search);
    const registeredParam = urlParams.get('registered');
    const emailParam = urlParams.get('email');
    const logoutParam = urlParams.get('logout');
    const emailField = document.getElementById('vendor-email');
    const passField = document.getElementById('vendor-password');

    // Scenario A: User arrives after creating an account
    if (registeredParam === 'true') {
      const displayEmail = emailParam || (JSON.parse(localStorage.getItem(STORAGE_USER_KEY) || '{}').email || '');
      renderAlert(
        'login-alert-container',
        `<strong>Account Created Successfully!</strong><br>Please enter your credentials to access your Command Center.`,
        'success'
      );
      if (emailField && displayEmail) {
        emailField.value = displayEmail;
        if (passField) passField.focus();
      }
    } else if (logoutParam === 'true') {
      // Scenario B: User logged out
      renderAlert(
        'login-alert-container',
        `You have been safely signed out. Enter your credentials to sign in again.`,
        'info'
      );
    }

    // Handle Login Form Submission
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      e.stopPropagation();

      if (!loginForm.checkValidity()) {
        loginForm.classList.add('was-validated');
        return;
      }

      const email = emailField ? emailField.value.trim().toLowerCase() : '';
      const password = passField ? passField.value : '';

      const allUsers = getAllUsers();
      if (allUsers.length === 0) {
        renderAlert(
          'login-alert-container',
          `<strong>No registered account found.</strong> Please <a href="vendor-signup.html" class="fw-bold text-danger text-decoration-underline">Create Account</a> first with your details.`,
          'danger'
        );
        return;
      }

      // Check credentials strictly against registered details
      const matchedUser = findMatchingUser(email, password);

      if (!matchedUser) {
        renderAlert(
          'login-alert-container',
          `<strong>Invalid credentials.</strong> The email or password does not match the details you entered in the sign-up page.`,
          'danger'
        );
        if (passField) {
          passField.value = '';
          passField.focus();
        }
        return;
      }

      // Credentials are valid! Store logged in session
      const sessionUser = {
        name: matchedUser.name,
        email: matchedUser.email,
        truckName: matchedUser.truckName || 'The Taco Wagon',
        loggedInAt: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(sessionUser));

      // Visual feedback and redirect to dashboard
      const submitBtn = document.getElementById('btn-login-submit') || loginForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Verified! Opening Dashboard...';
      }

      renderAlert(
        'login-alert-container',
        `<strong>Welcome back, ${matchedUser.name}!</strong> Redirecting to your Food Truck Command Center...`,
        'success'
      );

      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 650);
    });
  }

  /* ==========================================================================
     3. GENERIC FORMS (Newsletter, Contact, Feedback) — skips auth forms
     ========================================================================== */
  const genericForms = document.querySelectorAll('.needs-validation');
  Array.from(genericForms).forEach(form => {
    // Skip authentication forms
    if (form.id === 'form-vendor-login' || form.id === 'form-vendor-signup' || form.id === 'form-vendor-register') {
      return;
    }

    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();

        // Footer Newsletter or general form submission feedback
        const isNewsletter = form.classList.contains('footer-newsletter-wrap');
        const alertDiv = document.createElement('div');
        alertDiv.className = isNewsletter 
          ? 'alert alert-success mt-2 py-1 px-2 small text-success bg-white border-0 rounded-pill text-center'
          : 'alert alert-success mt-3 d-flex align-items-center gap-2';
        alertDiv.innerHTML = isNewsletter
          ? '<i class="bi bi-check-circle-fill me-1"></i> You are subscribed for weekly food picks!'
          : '<i class="bi bi-check-circle-fill fs-5"></i> <div><strong>Success!</strong> Your message has been sent successfully.</div>';

        if (isNewsletter) {
          form.parentNode.appendChild(alertDiv);
          setTimeout(() => alertDiv.remove(), 4000);
        } else {
          form.appendChild(alertDiv);
        }

        form.reset();
        form.classList.remove('was-validated');
        return false;
      }

      form.classList.add('was-validated');
    }, false);
  });
});
