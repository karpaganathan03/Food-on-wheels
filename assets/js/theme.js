/**
 * StreetFeast — Theme Switcher (Light & Night Market Dark Mode)
 * Pure Vanilla JavaScript with localStorage persistence
 */
(function () {
  'use strict';

  const THEME_STORAGE_KEY = 'streetfeast_theme';

  function getStoredTheme() {
    return localStorage.getItem(THEME_STORAGE_KEY) || 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    // Update all theme toggle buttons across the page (icon only)
    const toggleBtns = document.querySelectorAll('.mode-toggle-btn');
    toggleBtns.forEach(btn => {
      if (theme === 'dark') {
        btn.innerHTML = '<i class="bi bi-sun-fill text-warning"></i>';
        btn.setAttribute('aria-label', 'Switch to light mode');
        btn.setAttribute('title', 'Switch to light mode');
      } else {
        btn.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
        btn.setAttribute('aria-label', 'Switch to Night Market mode');
        btn.setAttribute('title', 'Switch to Night Market mode');
      }
    });
  }

  // Apply immediately on script load
  const initialTheme = getStoredTheme();
  applyTheme(initialTheme);

  // Bind after DOM loaded
  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(getStoredTheme());

    document.querySelectorAll('.mode-toggle-btn').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
      });
    });
  });
})();
