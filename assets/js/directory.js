/**
 * StreetFeast — Directory Search & Live Filters
 * Vanilla JavaScript only
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const foodTrucks = [
    {
      name: 'The Taco Wagon',
      cuisine: 'mexican',
      distance: 1.2,
      status: 'open',
      dish: 'Quesabirria Tacos',
      location: 'Riverside Park',
      rating: '4.9 (248)',
      description: 'Authentic Mexican & Birria',
      popularItem: 'Quesabirria with Bone Broth Consomé',
      priceRange: '₹180 - ₹340',
      image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop',
      imageAlt: 'The Taco Wagon specialty birria tacos',
      badge: 'Trending',
      badgeStyle: 'hot',
      slug: 'taco-wagon'
    },
    {
      name: 'Burger Bus Co.',
      cuisine: 'burgers',
      distance: 0.8,
      status: 'open',
      dish: 'Truffle Smash Burger',
      location: 'High Street',
      rating: '4.8 (192)',
      description: 'American Craft Smash Burgers',
      popularItem: 'Truffle Bacon Double Smash Burger',
      priceRange: '₹220 - ₹420',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
      imageAlt: 'Burger Bus gourmet smash burger',
      badge: 'Staff Pick',
      badgeStyle: 'featured',
      slug: 'burger-bus'
    },
    {
      name: 'Pizza Bella Mobile',
      cuisine: 'pizza',
      distance: 2.4,
      status: 'open',
      dish: 'Burrata Margherita',
      location: 'Arts District',
      rating: '4.7 (164)',
      description: 'Artisan Neapolitan Wood-Fired',
      popularItem: 'Spicy Honey Burrata Margherita',
      priceRange: '₹280 - ₹550',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop',
      imageAlt: 'Pizza Bella custom wood-fired oven',
      badge: 'Wood Fired',
      badgeStyle: 'featured',
      slug: 'pizza-bella'
    },
    {
      name: 'Smoke & Bone BBQ',
      cuisine: 'bbq',
      distance: 3.1,
      status: 'open',
      dish: 'Smoked Brisket Platter',
      location: 'Brewery Lane',
      rating: '4.9 (310)',
      description: '14-Hour Hickory Smoked BBQ',
      popularItem: 'Smoked Brisket & Jalapeno Cheddar',
      priceRange: '₹350 - ₹780',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop',
      imageAlt: 'Smoke and Bone BBQ smoker trailer',
      badge: 'Pitmaster',
      badgeStyle: 'hot',
      slug: 'smoke-bone'
    },
    {
      name: 'Seoul Street K-Bao',
      cuisine: 'asian',
      distance: 4.2,
      status: 'open',
      dish: 'Pork Belly Bao',
      location: 'Tech Park',
      rating: '4.9 (205)',
      description: 'Korean Street Food & Baos',
      popularItem: 'Braised Pork Belly Steamed Bao Buns',
      priceRange: '₹190 - ₹380',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop',
      imageAlt: 'Seoul Street bao buns and dumplings',
      badge: 'Handmade',
      badgeStyle: 'featured',
      slug: 'seoul-bao'
    },
    {
      name: 'Sweet Wheels Churros',
      cuisine: 'desserts',
      distance: 2.8,
      status: 'open',
      dish: 'Dulce de Leche Churros',
      location: 'Central Mall',
      rating: '4.8 (175)',
      description: 'Churros & Specialty Espresso',
      popularItem: 'Cinnamon Sugar Churro Bites with Dip',
      priceRange: '₹120 - ₹280',
      image: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=600&auto=format&fit=crop',
      imageAlt: 'Sweet Wheels retro coffee and churro cart',
      badge: 'Sweet Treats',
      badgeStyle: 'hot',
      slug: 'sweet-wheels'
    },
    {
      name: 'Green Fuel Vegan',
      cuisine: 'vegan',
      distance: 3.5,
      status: 'closed',
      dish: 'Avocado Jackfruit Tacos',
      location: 'Yoga District',
      rating: '4.7 (98)',
      description: '100% Plant-Based Clean Comfort',
      popularItem: 'Smoky Pulled Jackfruit & Mango Bowl',
      priceRange: '₹210 - ₹390',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop',
      imageAlt: 'Green Fuel fresh plant bowls',
      badge: 'Eco Friendly',
      badgeStyle: 'featured',
      slug: 'green-fuel'
    },
    {
      name: 'Firebird Hot Chicken',
      cuisine: 'burgers',
      distance: 1.8,
      status: 'open',
      dish: 'Nashville Hot Chicken Sando',
      location: 'South Congress',
      rating: '4.9 (340)',
      description: 'Nashville Hot Poultry & Sandos',
      popularItem: 'Cayenne Glazed Nashville Hot Chicken Sando',
      priceRange: '₹240 - ₹450',
      image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=800&auto=format&fit=crop',
      imageAlt: 'Crispy Nashville hot chicken sandwich on brioche bun',
      badge: 'Spicy Crispy',
      badgeStyle: 'hot',
      slug: 'firebird-chicken'
    },
    {
      name: 'Tokyo Drift Noodle Bar',
      cuisine: 'asian',
      distance: 2.2,
      status: 'open',
      dish: 'Rich Tonkotsu Black Garlic Ramen',
      location: 'East Austin Lot',
      rating: '4.9 (215)',
      description: 'Hand-Pulled Ramen & Crispy Gyoza',
      popularItem: 'Rich Black Garlic Shoyu Tonkotsu Ramen',
      priceRange: '₹260 - ₹480',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop',
      imageAlt: 'Steaming bowl of artisan Tonkotsu Ramen',
      badge: 'Chef Special',
      badgeStyle: 'featured',
      slug: 'tokyo-drift'
    }
  ];

  const searchInput = document.getElementById('directory-search-input');
  const cuisineSelect = document.getElementById('directory-cuisine-select');
  const distanceRange = document.getElementById('directory-distance-range');
  const distanceVal = document.getElementById('distance-val-display');
  const openNowCheckbox = document.getElementById('filter-open-now');
  const cardsContainer = document.getElementById('directory-cards-container');
  const resultsCount = document.getElementById('directory-results-count');
  const viewGridBtn = document.getElementById('btn-view-grid');
  const viewListBtn = document.getElementById('btn-view-list');

  if (resultsCount) {
    resultsCount.textContent = foodTrucks.length;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[character]);
  }

  function renderTruckCard(truck) {
    const name = escapeHtml(truck.name);
    const cuisine = escapeHtml(truck.cuisine);
    const dish = escapeHtml(truck.dish);
    const isOpen = truck.status === 'open';
    const detailsUrl = `food-truck-details.html?truck=${encodeURIComponent(truck.slug)}`;

    return `
      <div
        class="col-md-6 col-lg-4 food-truck-item"
        data-name="${name}"
        data-cuisine="${cuisine}"
        data-distance="${truck.distance}"
        data-status="${truck.status}"
        data-dish="${dish}"
      >
        <div class="food-card">
          <div class="food-card-img-wrap">
            <img src="${escapeHtml(truck.image)}" alt="${escapeHtml(truck.imageAlt)}" />
            <div class="food-card-badge-top">
              <span class="sticker-badge ${escapeHtml(truck.badgeStyle)}">${escapeHtml(truck.badge)}</span>
            </div>
            <div class="food-card-status-top">
              ${isOpen
                ? '<span class="sticker-badge open"><span class="pulse-dot me-1"></span> Open Now</span>'
                : '<span class="sticker-badge closed">Opens at 5 PM</span>'}
            </div>
          </div>
          <div class="food-card-body">
            <div class="food-meta-row">
              <span class="text-muted"><i class="bi bi-geo-alt text-primary-custom"></i> ${truck.distance} km • ${escapeHtml(truck.location)}</span>
              <span class="food-rating"><i class="bi bi-star-fill"></i> ${escapeHtml(truck.rating)}</span>
            </div>
            <h4 class="food-card-title">
              <a href="${detailsUrl}">${name}</a>
            </h4>
            <p class="food-card-cuisine">${escapeHtml(truck.description)}</p>
            <div class="food-dish-featured">
              <small class="text-muted d-block">Popular Item:</small>
              <strong>${escapeHtml(truck.popularItem)}</strong>
            </div>
            <div class="food-card-footer">
              <span class="fw-bold">${escapeHtml(truck.priceRange)}</span>
              <a href="${detailsUrl}" class="btn btn-sm btn-brand-primary">View Details</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (cardsContainer) {
    cardsContainer.innerHTML = foodTrucks.map(renderTruckCard).join('');
  }

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

  function activatePillForCuisine(cuisine) {
    cuisinePills.forEach(p => {
      const isMatch = (p.getAttribute('data-cuisine') || 'all').toLowerCase() === cuisine;
      p.classList.toggle('active', isMatch);
      p.classList.toggle('btn-brand-primary', isMatch);
    });
  }

  cuisinePills.forEach(pill => {
    pill.addEventListener('click', function (e) {
      e.preventDefault();
      const cuisine = this.getAttribute('data-cuisine') || 'all';
      activatePillForCuisine(cuisine);

      if (cuisineSelect) {
        cuisineSelect.value = cuisine;
      }
      filterTrucks();
    });
  });

  // Pre-select cuisine from URL query string, e.g. directory.html?cuisine=burgers
  // Links across the site (home page food gallery, blog CTAs, etc.) use a few
  // shorthand cuisine slugs that don't map 1:1 to the select/pill values below.
  const CUISINE_PARAM_ALIASES = {
    tacos: 'mexican',
    taco: 'mexican',
    mexican: 'mexican',
    burgers: 'burgers',
    burger: 'burgers',
    pizza: 'pizza',
    bbq: 'bbq',
    asian: 'asian',
    indian: 'indian',
    desserts: 'desserts',
    dessert: 'desserts',
    coffee: 'desserts',
    vegan: 'vegan',
    all: 'all'
  };

  function applyCuisineFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const rawCuisine = (params.get('cuisine') || '').toLowerCase().trim();
    if (!rawCuisine) return;

    const resolvedCuisine = CUISINE_PARAM_ALIASES[rawCuisine] || rawCuisine;

    if (cuisineSelect) {
      const hasOption = Array.from(cuisineSelect.options).some(
        opt => opt.value.toLowerCase() === resolvedCuisine
      );
      if (hasOption) {
        cuisineSelect.value = resolvedCuisine;
      }
    }

    activatePillForCuisine(resolvedCuisine);
    filterTrucks();
  }

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

  // Apply any cuisine passed in via the URL (e.g. from the home page food
  // gallery links) as soon as the page loads, then run the filter once so
  // the results/counts are correct from the start.
  applyCuisineFromUrl();
  filterTrucks();
});
