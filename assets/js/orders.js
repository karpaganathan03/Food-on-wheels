/**
 * StreetFeast — Vendor Live Order Tracker
 * Vanilla JavaScript only
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const orderRowsContainer = document.getElementById('vendor-orders-table-body');
  const orderTabs = document.querySelectorAll('.order-filter-tab');

  // Filter orders by tab
  orderTabs.forEach(tab => {
    tab.addEventListener('click', function () {
      orderTabs.forEach(t => t.classList.remove('active', 'btn-brand-primary'));
      this.classList.add('active', 'btn-brand-primary');

      const statusFilter = this.getAttribute('data-status') || 'all';
      const rows = orderRowsContainer ? orderRowsContainer.querySelectorAll('tr') : [];

      rows.forEach(row => {
        const currentStatus = row.getAttribute('data-order-status');
        if (statusFilter === 'all' || currentStatus === statusFilter) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });

  // Advance order status
  if (orderRowsContainer) {
    orderRowsContainer.addEventListener('click', function (e) {
      const advanceBtn = e.target.closest('.btn-advance-status');
      if (advanceBtn) {
        const row = advanceBtn.closest('tr');
        const currentStatus = row.getAttribute('data-order-status');
        const statusBadge = row.querySelector('.order-status-badge');

        if (currentStatus === 'new') {
          row.setAttribute('data-order-status', 'preparing');
          statusBadge.className = 'badge-status preparing order-status-badge';
          statusBadge.textContent = 'Preparing';
          advanceBtn.innerHTML = '<i class="bi bi-bell me-1"></i> Mark Ready';
        } else if (currentStatus === 'preparing') {
          row.setAttribute('data-order-status', 'ready');
          statusBadge.className = 'badge-status ready order-status-badge';
          statusBadge.textContent = 'Ready for Pickup';
          advanceBtn.innerHTML = '<i class="bi bi-check2-all me-1"></i> Complete';
        } else if (currentStatus === 'ready') {
          row.setAttribute('data-order-status', 'completed');
          statusBadge.className = 'badge-status completed order-status-badge';
          statusBadge.textContent = 'Completed';
          advanceBtn.disabled = true;
          advanceBtn.innerHTML = '<i class="bi bi-check-lg me-1"></i> Done';
        }
      }
    });
  }
});
