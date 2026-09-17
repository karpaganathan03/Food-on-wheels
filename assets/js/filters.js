/**
 * StreetFeast — General Category & Dietary Filters
 * Vanilla JavaScript only
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Dietary tag filters (Vegan, Halal, Gluten Free)
  const dietaryChips = document.querySelectorAll('.dietary-filter-chip');
  dietaryChips.forEach(chip => {
    chip.addEventListener('click', function () {
      this.classList.toggle('active');
      const event = new Event('input', { bubbles: true });
      const searchInput = document.getElementById('directory-search-input');
      if (searchInput) searchInput.dispatchEvent(event);
    });
  });

  // Events Category Filter Tabs
  const eventFilterButtons = document.querySelectorAll('.event-filter-tab');
  const eventCards = document.querySelectorAll('.event-item-card');

  eventFilterButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      eventFilterButtons.forEach(b => b.classList.remove('active', 'btn-brand-primary'));
      this.classList.add('active', 'btn-brand-primary');

      const filter = this.getAttribute('data-filter') || 'all';

      eventCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
