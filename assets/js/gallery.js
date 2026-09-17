/**
 * StreetFeast — Food & Festival Photo Gallery Lightbox / Filter
 * Vanilla JavaScript only
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Gallery category filter
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      galleryFilterBtns.forEach(b => b.classList.remove('active', 'btn-brand-primary'));
      this.classList.add('active', 'btn-brand-primary');

      const filter = this.getAttribute('data-filter') || 'all';

      galleryItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Modal preview trigger
  const galleryModalImg = document.getElementById('gallery-modal-img');
  const galleryModalTitle = document.getElementById('gallery-modal-title');

  document.querySelectorAll('.btn-preview-photo').forEach(btn => {
    btn.addEventListener('click', function () {
      const src = this.getAttribute('data-src');
      const title = this.getAttribute('data-title');
      if (galleryModalImg) galleryModalImg.src = src;
      if (galleryModalTitle) galleryModalTitle.textContent = title;
    });
  });
});
