/**
 * StreetFeast — Main Application Scripts
 * Vanilla JavaScript only
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // 1. Sticky Navbar on Scroll
  const navbar = document.querySelector('.street-navbar');
  const backToTopBtn = document.querySelector('.back-to-top-btn');

  window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY;

    if (navbar) {
      if (scrollPos > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollPos > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 2. Highlight Active Nav Item based on current path
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // 3. Close mobile navbar on link click
  const navbarCollapse = document.querySelector('.navbar-collapse');
  if (navbarCollapse) {
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      });
    });
  }

  // 4. Interactive Map Pin Click (for Home 2 & Discovery pages)
  const mapPins = document.querySelectorAll('.map-truck-pin');
  mapPins.forEach(pin => {
    pin.addEventListener('click', function () {
      const truckName = this.getAttribute('data-truck') || 'Featured Truck';
      const cuisine = this.getAttribute('data-cuisine') || 'Street Food';
      const address = this.getAttribute('data-location') || 'Downtown Park';
      
      alert(`🚚 ${truckName} (${cuisine})\n📍 Location: ${address}\n🟢 Serving fresh street food now!`);
    });
  });

  // 5. Tooltips initialization if Bootstrap tooltip is present
  if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
});
