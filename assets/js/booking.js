/**
 * StreetFeast — Event Booking Calculator & Request Handler
 * Vanilla JavaScript only
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const guestInput = document.getElementById('booking-guests-count');
  const packageSelect = document.getElementById('booking-package-select');
  const estCostDisplay = document.getElementById('booking-estimated-cost');

  function calculateBookingEstimate() {
    if (!guestInput || !packageSelect || !estCostDisplay) return;

    const guests = parseInt(guestInput.value, 10) || 50;
    const ratePerGuest = parseFloat(packageSelect.selectedOptions[0]?.getAttribute('data-rate') || '350');
    
    // Base minimum setup fee ₹5,000 + per guest catering
    const total = 5000 + (guests * ratePerGuest);
    estCostDisplay.textContent = `₹${total.toLocaleString('en-IN')}`;
  }

  if (guestInput) guestInput.addEventListener('input', calculateBookingEstimate);
  if (packageSelect) packageSelect.addEventListener('change', calculateBookingEstimate);

  // Run initial calc
  calculateBookingEstimate();
});
