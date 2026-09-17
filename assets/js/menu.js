/**
 * StreetFeast — Vendor Menu Management CRUD (Frontend Demo)
 * Vanilla JavaScript only
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const menuListContainer = document.getElementById('vendor-menu-items-list');
  const addMenuItemForm = document.getElementById('form-add-menu-item');

  // Add Item to Menu
  if (addMenuItemForm && menuListContainer) {
    addMenuItemForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('item-name').value;
      const price = document.getElementById('item-price').value;
      const category = document.getElementById('item-category').value;
      const desc = document.getElementById('item-desc').value;
      const isPopular = document.getElementById('item-is-popular')?.checked;

      const newItem = document.createElement('div');
      newItem.className = 'menu-item-row';
      newItem.innerHTML = `
        <div class="d-flex align-items-center gap-3">
          <img src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=300&auto=format&fit=crop" class="menu-item-thumb" alt="${name}">
          <div>
            <div class="d-flex align-items-center gap-2">
              <h6 class="mb-0 fw-bold">${name}</h6>
              ${isPopular ? '<span class="sticker-badge hot">Popular</span>' : ''}
              <span class="badge-status ready item-avail-badge">Available</span>
            </div>
            <p class="small text-muted mb-0">${desc}</p>
            <span class="badge bg-surface-alt text-muted border mt-1">${category}</span>
          </div>
        </div>
        <div class="d-flex align-items-center gap-3">
          <span class="fw-bold fs-5 text-primary-custom">₹${price}</span>
          <button class="btn btn-sm btn-outline-secondary btn-toggle-avail" type="button" title="Toggle Availability">
            <i class="bi bi-slash-circle"></i>
          </button>
          <button class="btn btn-sm btn-outline-danger btn-delete-item" type="button" title="Delete Item">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      `;

      menuListContainer.prepend(newItem);
      addMenuItemForm.reset();

      // Close modal
      const modalEl = document.getElementById('modalAddMenuItem');
      if (modalEl && typeof bootstrap !== 'undefined') {
        const modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();
      }
    });
  }

  // Event delegation for Availability and Delete
  if (menuListContainer) {
    menuListContainer.addEventListener('click', function (e) {
      // Toggle Availability
      const toggleBtn = e.target.closest('.btn-toggle-avail');
      if (toggleBtn) {
        const row = toggleBtn.closest('.menu-item-row');
        const badge = row.querySelector('.item-avail-badge');
        if (badge.classList.contains('ready')) {
          badge.classList.remove('ready');
          badge.classList.add('declined');
          badge.textContent = 'Sold Out';
          row.style.opacity = '0.65';
        } else {
          badge.classList.remove('declined');
          badge.classList.add('ready');
          badge.textContent = 'Available';
          row.style.opacity = '1';
        }
      }

      // Delete item
      const deleteBtn = e.target.closest('.btn-delete-item');
      if (deleteBtn) {
        if (confirm('Are you sure you want to remove this menu item?')) {
          const row = deleteBtn.closest('.menu-item-row');
          row.remove();
        }
      }
    });
  }
});
