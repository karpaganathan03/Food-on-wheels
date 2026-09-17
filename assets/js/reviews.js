/**
 * StreetFeast — Customer Reviews Management & Reply UI
 * Vanilla JavaScript only
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  let currentReplyingCard = null;
  const replyModalEl = document.getElementById('modalReplyReview');
  const replyForm = document.getElementById('form-reply-review');
  const replyTextarea = document.getElementById('reply-text');
  const customerNameTarget = document.getElementById('reply-customer-name');

  // Listen to open reply modal buttons
  document.addEventListener('click', function (e) {
    const replyBtn = e.target.closest('.btn-open-reply-modal');
    if (replyBtn) {
      currentReplyingCard = replyBtn.closest('.customer-review-card');
      const customerName = currentReplyingCard.querySelector('.customer-name')?.textContent || 'Customer';
      if (customerNameTarget) customerNameTarget.textContent = customerName;
      if (replyTextarea) replyTextarea.value = '';
    }
  });

  // Submit reply
  if (replyForm) {
    replyForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const text = replyTextarea.value.trim();
      if (!text || !currentReplyingCard) return;

      let replySection = currentReplyingCard.querySelector('.vendor-reply-container');
      if (!replySection) {
        replySection = document.createElement('div');
        replySection.className = 'vendor-reply-container mt-3 p-3 bg-surface-alt rounded border-start border-3 border-danger';
        currentReplyingCard.querySelector('.review-body')?.appendChild(replySection);
      }

      replySection.innerHTML = `
        <div class="d-flex align-items-center gap-2 mb-1">
          <span class="badge bg-danger text-white">Owner Response</span>
          <span class="small text-muted">Just now</span>
        </div>
        <p class="small mb-0 text-body">${text}</p>
      `;

      // Hide reply button
      const replyBtn = currentReplyingCard.querySelector('.btn-open-reply-modal');
      if (replyBtn) replyBtn.style.display = 'none';

      // Hide modal
      if (replyModalEl && typeof bootstrap !== 'undefined') {
        const modal = bootstrap.Modal.getInstance(replyModalEl);
        if (modal) modal.hide();
      }
    });
  }
});
