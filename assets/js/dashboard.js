/**
 * StreetFeast — Vendor Command Center Dashboard Controller
 * Vanilla JavaScript only with real interactive state handling & toasts
 */

// Global Dashboard Toast Utility
window.showDashboardToast = function (message, type = 'default') {
  let container = document.querySelector('.dashboard-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'dashboard-toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `dashboard-toast ${type}`;
  toast.innerHTML = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
};

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // User session sync: Apply registered user name to dashboard welcome & profile
  try {
    const sessionUser = JSON.parse(localStorage.getItem('sf_logged_in_user') || 'null');
    if (sessionUser && sessionUser.name) {
      // 1. Update topbar welcome message
      const topbarWelcome = document.querySelector('.dashboard-topbar small.text-muted');
      if (topbarWelcome) {
        topbarWelcome.innerHTML = `Welcome back, <strong class="text-heading">${sessionUser.name}</strong>`;
      }

      // 2. Update any user display name elements
      document.querySelectorAll('.user-display-name, #dashboard-user-name').forEach(el => {
        el.textContent = sessionUser.name;
      });

      // 3. Update sidebar truck badge if provided
      if (sessionUser.truckName) {
        const truckTitle = document.querySelector('.sidebar-truck-badge strong');
        if (truckTitle) {
          truckTitle.textContent = sessionUser.truckName;
        }
      }

      // 4. Update vendor profile owner name if on vendor-profile.html
      const vendorOwnerHeading = document.querySelector('.dashboard-content h4.fw-bold.mb-0');
      if (vendorOwnerHeading && window.location.pathname.includes('vendor-profile')) {
        vendorOwnerHeading.textContent = sessionUser.name;
      }
    }
  } catch (err) {
    console.warn('Session load error:', err);
  }

  // Handle Logout button in sidebar
  const logoutLinks = document.querySelectorAll('a[href="login.html"].sidebar-nav-link, a[href="login.html"].btn-logout');
  logoutLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      localStorage.removeItem('sf_logged_in_user');
      window.location.href = 'login.html?logout=true';
    });
  });

  // 1. Mobile Sidebar Offcanvas Toggle
  const sidebarToggle = document.getElementById('dashboard-sidebar-toggle');
  const sidebar = document.querySelector('.dashboard-sidebar');
  let backdrop = document.querySelector('.sidebar-backdrop');

  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'sidebar-backdrop';
    document.body.appendChild(backdrop);
  }

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', function () {
      sidebar.classList.toggle('show-sidebar');
      backdrop.classList.toggle('active');
    });

    backdrop.addEventListener('click', function () {
      sidebar.classList.remove('show-sidebar');
      backdrop.classList.remove('active');
    });
  }

  // 2. Serving Now / Off-Duty Truck Status Switcher
  const statusToggle = document.getElementById('truck-live-status-toggle');
  const statusBadge = document.getElementById('truck-live-status-badge');

  if (statusToggle && statusBadge) {
    statusToggle.addEventListener('change', function () {
      if (this.checked) {
        statusBadge.className = 'badge-status ready';
        statusBadge.innerHTML = '<span class="pulse-dot"></span> Serving Now';
        showDashboardToast('<i class="bi bi-check2-circle text-success fs-5"></i> <span><strong>Live Status Active:</strong> Serving customers now.</span>', 'success');
      } else {
        statusBadge.className = 'badge-status completed';
        statusBadge.innerHTML = '<i class="bi bi-moon-fill"></i> Off Duty';
        showDashboardToast('<i class="bi bi-moon-stars text-muted fs-5"></i> <span><strong>Truck Off-Duty:</strong> Window closed on public map.</span>');
      }
    });
  }

  // 3. Update Location modal submission
  const locationForm = document.getElementById('form-update-location');
  if (locationForm) {
    locationForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const spotName = document.getElementById('location-spot-name').value;
      const spotTime = document.getElementById('location-spot-time').value;

      const currentLocDisplay = document.getElementById('current-location-display');
      const currentTimeDisplay = document.getElementById('current-time-display');

      if (currentLocDisplay) currentLocDisplay.textContent = spotName;
      if (currentTimeDisplay) currentTimeDisplay.textContent = spotTime;

      // Close modal using bootstrap
      const modalEl = document.getElementById('modalUpdateLocation');
      if (modalEl && typeof bootstrap !== 'undefined') {
        const modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();
      }

      showDashboardToast(`📍 <strong>Location Broadcasted:</strong> ${spotName} (${spotTime})`, 'success');
    });
  }

  // 4. Pause / Resume Walk-Up Orders Quick Action
  const pauseOrdersBtn = document.getElementById('btn-pause-orders');
  let isOrdersPaused = false;

  if (pauseOrdersBtn) {
    pauseOrdersBtn.addEventListener('click', function () {
      isOrdersPaused = !isOrdersPaused;
      const textEl = document.getElementById('btn-pause-orders-text');
      const iconEl = pauseOrdersBtn.querySelector('i');

      if (isOrdersPaused) {
        if (textEl) textEl.textContent = 'Resume Walk-Up Orders (Now Paused)';
        if (iconEl) iconEl.className = 'bi bi-play-circle text-success me-2 fs-5';
        if (statusBadge) {
          statusBadge.className = 'badge-status preparing';
          statusBadge.innerHTML = '<i class="bi bi-pause-fill"></i> Orders Paused (15m Restock)';
        }
        showDashboardToast('⏸ <strong>Walk-Up Orders Paused:</strong> Window orders paused for 15 min restock.', 'warning');
      } else {
        if (textEl) textEl.textContent = 'Pause Walk-Up Orders (15m Restock)';
        if (iconEl) iconEl.className = 'bi bi-pause-circle text-danger me-2 fs-5';
        if (statusBadge) {
          statusBadge.className = 'badge-status ready';
          statusBadge.innerHTML = '<span class="pulse-dot"></span> Serving Now';
        }
        showDashboardToast('▶ <strong>Walk-Up Orders Resumed:</strong> Window queue is now open to diners!', 'success');
      }
    });
  }

  // 5. Download Shift Report (PDF)
  const downloadReportBtn = document.getElementById('btn-download-shift-report');
  if (downloadReportBtn) {
    downloadReportBtn.addEventListener('click', function () {
      showDashboardToast('⏳ <strong>Generating Shift Report:</strong> Compiling sales, tax, and orders data...', 'default');
      setTimeout(() => {
        showDashboardToast('📄 <strong>Report Ready:</strong> Downloaded "StreetFeast_Shift_Report_Sep2026.pdf"', 'success');
      }, 1200);
    });
  }

  // 6. Save Profile Changes (Truck Profile & Vendor Profile)
  const saveProfileBtns = document.querySelectorAll('.btn-save-profile, button[onclick*="Truck Profile changes"]');
  saveProfileBtns.forEach(btn => {
    btn.removeAttribute('onclick');
    btn.addEventListener('click', function () {
      const originalHtml = this.innerHTML;
      this.disabled = true;
      this.innerHTML = '<span class="spinner-border spinner-border-sm me-1" role="status"></span> Saving...';
      setTimeout(() => {
        this.disabled = false;
        this.innerHTML = originalHtml;
        showDashboardToast('✅ <strong>Saved:</strong> Profile changes updated and synced to the public directory!', 'success');
      }, 700);
    });
  });

  // 7. Instant Payout Buttons (Earnings)
  const payoutBtns = document.querySelectorAll('button[onclick*="Instant Payout"]');
  payoutBtns.forEach(btn => {
    btn.removeAttribute('onclick');
    btn.addEventListener('click', function () {
      const originalHtml = this.innerHTML;
      this.disabled = true;
      this.innerHTML = '<span class="spinner-border spinner-border-sm me-1" role="status"></span> Processing ACH...';
      setTimeout(() => {
        this.disabled = false;
        this.innerHTML = originalHtml;
        showDashboardToast('💰 <strong>Instant Payout Sent:</strong> ₹48,250 transferred to Chase Commercial (••• 4192). Ref: #ACH-98214', 'success');
      }, 900);
    });
  });
});
