/**
 * StreetFeast — RTL / LTR Language Direction Handler
 * Displays toggle as text: LTR | RTL
 * Pure Vanilla JavaScript with localStorage persistence
 */
(function () {
  'use strict';

  const RTL_STORAGE_KEY = 'streetfeast_direction';

  function getStoredDirection() {
    return localStorage.getItem(RTL_STORAGE_KEY) || 'ltr';
  }

  function applyDirection(dir) {
    document.documentElement.setAttribute('dir', dir);
    localStorage.setItem(RTL_STORAGE_KEY, dir);

    // Update all RTL toggle buttons text (strictly RTL alone)
    const rtlBtns = document.querySelectorAll('.rtl-toggle-btn');
    rtlBtns.forEach(btn => {
      if (dir === 'rtl') {
        btn.innerHTML = '<span class="fw-bold">LTR</span>';
        btn.classList.add('active');
        btn.setAttribute('title', 'Switch to LTR layout');
      } else {
        btn.innerHTML = '<span class="fw-bold">RTL</span>';
        btn.classList.remove('active');
        btn.setAttribute('title', 'Switch to RTL layout');
      }
      btn.setAttribute('aria-label', 'Toggle RTL layout');
    });
  }

  // Apply immediately
  const initialDir = getStoredDirection();
  applyDirection(initialDir);

  document.addEventListener('DOMContentLoaded', function () {
    applyDirection(getStoredDirection());

    document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
        const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
        applyDirection(newDir);
      });
    });
  });
})();
