/**
 * StreetFeast — Directory Search & Live Filters
 * Vanilla JavaScript only
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const searchInput = document.getElementById('directory-search-input');
  const cuisineSelect = document.getElementById('directory-cuisine-select');
  const distanceRange = document.getElementById('directory-distance-range');
  const distanceVal = document.getElementById('distance-val-display');
  const openNowCheckbox = document.getElementById('filter-open-now');
  const cardsContainer = document.getElementById('directory-cards-container');
  const resultsCount = document.getElementById('directory-results-count');
  const viewGridBtn = document.getElementById('btn-view-grid');
  const viewListBtn = document.getElementById('btn-view-list');

  // Distance range slider listener
  if (distanceRange && distanceVal) {
    distanceRange.addEventListener('input', function () {
      distanceVal.textContent = `${this.value} km`;
      filterTrucks();
    });
  }

  function filterTrucks() {
    if (!cardsContainer) return;

    const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
    const selectedCuisine = (cuisineSelect ? cuisineSelect.value : 'all').toLowerCase();
    const maxDistance = distanceRange ? parseFloat(distanceRange.value) : 50;
    const requireOpen = openNowCheckbox ? openNowCheckbox.checked : false;

    const cards = cardsContainer.querySelectorAll('.food-truck-item');
    let visibleCount = 0;

    cards.forEach(card => {
      const name = (card.getAttribute('data-name') || '').toLowerCase();
      const cuisine = (card.getAttribute('data-cuisine') || '').toLowerCase();
      const distance = parseFloat(card.getAttribute('data-distance') || '0');
      const isOpen = card.getAttribute('data-status') === 'open';
      const dish = (card.getAttribute('data-dish') || '').toLowerCase();

      let matchesSearch = !query || name.includes(query) || cuisine.includes(query) || dish.includes(query);
      let matchesCuisine = selectedCuisine === 'all' || cuisine.includes(selectedCuisine);
      let matchesDistance = distance <= maxDistance;
      let matchesOpen = !requireOpen || isOpen;

      if (matchesSearch && matchesCuisine && matchesDistance && matchesOpen) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (resultsCount) {
      resultsCount.textContent = visibleCount;
    }
  }

  if (searchInput) searchInput.addEventListener('input', filterTrucks);
  if (cuisineSelect) cuisineSelect.addEventListener('change', filterTrucks);
  if (openNowCheckbox) openNowCheckbox.addEventListener('change', filterTrucks);

  // Quick Cuisine Pill Buttons
  const cuisinePills = document.querySelectorAll('.filter-cuisine-pill');
  cuisinePills.forEach(pill => {
    pill.addEventListener('click', function (e) {
      e.preventDefault();
      cuisinePills.forEach(p => p.classList.remove('active', 'btn-brand-primary'));
      this.classList.add('active', 'btn-brand-primary');

      const cuisine = this.getAttribute('data-cuisine') || 'all';
      if (cuisineSelect) {
        cuisineSelect.value = cuisine;
      }
      filterTrucks();
    });
  });

  // Grid / List View Toggle
  if (viewGridBtn && viewListBtn && cardsContainer) {
    viewGridBtn.addEventListener('click', function () {
      viewGridBtn.classList.add('active');
      viewListBtn.classList.remove('active');
      cardsContainer.classList.remove('list-view');
      const cards = cardsContainer.querySelectorAll('.food-truck-item');
      cards.forEach(card => {
        card.classList.remove('col-12');
        card.classList.add('col-md-6', 'col-lg-4');
        const innerCard = card.querySelector('.food-card, .food-card-horizontal');
        if (innerCard) {
          innerCard.className = 'food-card';
        }
      });
    });

    viewListBtn.addEventListener('click', function () {
      viewListBtn.classList.add('active');
      viewGridBtn.classList.remove('active');
      cardsContainer.classList.add('list-view');
      const cards = cardsContainer.querySelectorAll('.food-truck-item');
      cards.forEach(card => {
        card.classList.remove('col-md-6', 'col-lg-4');
        card.classList.add('col-12');
        const innerCard = card.querySelector('.food-card, .food-card-horizontal');
        if (innerCard) {
          innerCard.className = 'food-card-horizontal';
        }
      });
    });
  }
});
