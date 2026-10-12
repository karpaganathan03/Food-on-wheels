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
  const eventEmptyState = document.getElementById('event-filter-empty');
  const eventFilterStatus = document.getElementById('event-filter-status');

  function applyEventFilter(selectedButton) {
    const filter = selectedButton ? selectedButton.getAttribute('data-filter') || 'all' : 'all';
    const filterLabel = selectedButton ? selectedButton.textContent.trim() : 'All Gatherings';
    let visibleCount = 0;

    eventFilterButtons.forEach(button => {
      const isActive = button === selectedButton;
      button.classList.toggle('active', isActive);
      button.classList.toggle('btn-brand-primary', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    eventCards.forEach(card => {
      const isVisible = filter === 'all' || card.getAttribute('data-category') === filter;
      card.style.display = isVisible ? '' : 'none';
      if (isVisible) visibleCount += 1;
    });

    if (eventEmptyState) eventEmptyState.classList.toggle('d-none', visibleCount > 0);
    if (eventFilterStatus) {
      eventFilterStatus.textContent = visibleCount
        ? filter === 'all'
          ? `Showing all ${visibleCount} gatherings.`
          : `Showing ${visibleCount} ${visibleCount === 1 ? 'gathering' : 'gatherings'} in ${filterLabel}.`
        : `No gatherings are available for ${filterLabel.toLowerCase()}.`;
    }
  }

  eventFilterButtons.forEach(button => {
    button.addEventListener('click', () => applyEventFilter(button));
  });
  if (eventFilterButtons.length) {
    const activeEventFilter = Array.from(eventFilterButtons).find(button => button.classList.contains('active'));
    applyEventFilter(activeEventFilter || eventFilterButtons[0]);
  }

  // Blog "Recent Articles" Category Filter Tabs (Food Truck Stories,
  // Vendor Guides, Festivals, All Stories)
  const blogFilterButtons = document.querySelectorAll('.blog-filter-tab');
  const blogPostItems = document.querySelectorAll('.blog-post-item');
  const blogSearchForm = document.getElementById('blog-search-form');
  const blogSearchInput = document.getElementById('blog-search-input');
  const blogSearchFeedback = document.getElementById('blog-search-feedback');
  let activeBlogCategory = 'all';
  let blogSearchQuery = '';

  function applyBlogFilters() {
    let visibleCount = 0;
    blogPostItems.forEach(post => {
      const matchesCategory = activeBlogCategory === 'all' || post.getAttribute('data-category') === activeBlogCategory;
      const matchesQuery = !blogSearchQuery || post.textContent.toLowerCase().includes(blogSearchQuery);
      const isVisible = matchesCategory && matchesQuery;
      post.style.display = isVisible ? '' : 'none';
      if (isVisible) visibleCount += 1;
    });

    if (blogSearchFeedback && blogSearchQuery) {
      blogSearchFeedback.textContent = visibleCount
        ? `${visibleCount} article${visibleCount === 1 ? '' : 's'} found.`
        : 'No articles match that search. Try another keyword.';
    } else if (blogSearchFeedback && blogSearchForm && blogSearchForm.dataset.searchSubmitted === 'true') {
      blogSearchFeedback.textContent = 'Enter a keyword to search articles. Showing the selected category.';
    }
  }

  blogFilterButtons.forEach(button => {
    button.addEventListener('click', function () {
      activeBlogCategory = this.getAttribute('data-filter') || 'all';
      blogFilterButtons.forEach(filterButton => {
        const isActive = filterButton === this;
        filterButton.classList.toggle('active', isActive);
        filterButton.classList.toggle('btn-brand-primary', isActive);
        filterButton.setAttribute('aria-pressed', String(isActive));
      });
      applyBlogFilters();
    });
  });

  if (blogSearchForm && blogSearchInput) {
    blogSearchForm.addEventListener('submit', function (event) {
      event.preventDefault();
      blogSearchQuery = blogSearchInput.value.trim().toLowerCase();
      blogSearchForm.dataset.searchSubmitted = 'true';
      applyBlogFilters();
    });
  }
});
