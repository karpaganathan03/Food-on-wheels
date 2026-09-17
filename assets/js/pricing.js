/**
 * StreetFeast — Pricing Packages & Plan Activation Handler
 * Provides interactive billing cycle toggle, plan checkout modal,
 * promo code validation, and simulated instant subscription activation.
 */

const PRICING_PLANS = {
  'starter': {
    id: 'starter',
    name: 'Starter Tier',
    badge: 'Free Forever',
    badgeClass: 'bg-secondary-subtle text-dark border',
    monthlyPrice: 0,
    annualPrice: 0,
    monthlyDisplay: '₹0',
    annualDisplay: '₹0',
    period: '/ month',
    trialNote: 'Free forever. Zero commission on daily street orders.',
    ctaText: 'Get Started Free',
    modalCta: 'Activate Free Starter Account',
    isTrial: false,
    features: [
      'Verified Food Truck Listing in City Directory',
      'Standard Curbside Map Pin with Live Status',
      'Basic Digital Menu (up to 10 items)',
      'Up to 2 Event Booking Requests per month',
      'Community Vendor Forum Access'
    ]
  },
  'growth': {
    id: 'growth',
    name: 'Growth Tier',
    badge: 'Most Popular • 30-Day Free Trial',
    badgeClass: 'bg-primary-light text-primary-custom border border-primary',
    monthlyPrice: 2499,
    annualPrice: 1999,
    monthlyDisplay: '₹2,499',
    annualDisplay: '₹1,999',
    annualBillingTotal: '₹23,988 billed annually (Save ₹6,000/yr)',
    period: '/ month',
    trialNote: '🎉 30-Day Risk-Free Trial: ₹0 due today. Cancel anytime.',
    ctaText: 'Claim 30-Day Free Trial',
    modalCta: 'Start 30-Day Free Trial (₹0 Today)',
    isTrial: true,
    features: [
      'Everything in Starter',
      'Featured Directory Placement in your city',
      'Unlimited Private Event & Catering Leads',
      'Full Operations Command Center with Order Tracker',
      'Unlimited Menu Items & Sold-Out Toggles',
      'Review Management with Customer Reply UI'
    ]
  },
  'pro': {
    id: 'pro',
    name: 'Festival Pro',
    badge: 'VIP Circuit Access',
    badgeClass: 'bg-warning-subtle text-dark border border-warning',
    monthlyPrice: 5999,
    annualPrice: 4799,
    monthlyDisplay: '₹5,999',
    annualDisplay: '₹4,799',
    annualBillingTotal: '₹57,588 billed annually (Save ₹14,400/yr)',
    period: '/ month',
    trialNote: 'Priority Festival Circuit Access & Dedicated Account Manager.',
    ctaText: 'Upgrade to Festival Pro',
    modalCta: 'Confirm Festival Pro Subscription',
    isTrial: false,
    features: [
      'Everything in Growth',
      'Priority Festival Lineup Selection',
      'High-Budget Corporate Campus RFP Access',
      'Dedicated Vendor Success Concierge',
      'Multi-Truck Fleet Support (up to 3 trucks)',
      '24/7 Priority Emergency Phone Support'
    ]
  }
};

let currentBillingCycle = 'monthly'; // 'monthly' | 'annual'
let selectedPlanId = 'growth';

function initPricingPage() {
  const billingSwitch = document.getElementById('billing-cycle-switch');
  const labelMonthly = document.getElementById('label-monthly');
  const labelAnnual = document.getElementById('label-annual');

  // 1. Billing Cycle Toggle Handler
  function updateBillingCycle(isAnnual) {
    currentBillingCycle = isAnnual ? 'annual' : 'monthly';

    if (labelMonthly && labelAnnual) {
      if (isAnnual) {
        labelMonthly.classList.remove('text-primary-custom', 'fw-bold');
        labelMonthly.classList.add('text-muted');
        labelAnnual.classList.add('text-primary-custom', 'fw-bold');
        labelAnnual.classList.remove('text-muted');
      } else {
        labelAnnual.classList.remove('text-primary-custom', 'fw-bold');
        labelAnnual.classList.add('text-muted');
        labelMonthly.classList.add('text-primary-custom', 'fw-bold');
        labelMonthly.classList.remove('text-muted');
      }
    }

    // Update prices on cards
    const growthPriceEl = document.getElementById('price-growth-val');
    const growthSubEl = document.getElementById('price-growth-sub');
    const proPriceEl = document.getElementById('price-pro-val');
    const proSubEl = document.getElementById('price-pro-sub');

    if (growthPriceEl) {
      growthPriceEl.textContent = isAnnual ? PRICING_PLANS['growth'].annualDisplay : PRICING_PLANS['growth'].monthlyDisplay;
    }
    if (growthSubEl) {
      growthSubEl.innerHTML = isAnnual 
        ? `<span class="badge bg-success-subtle text-success mt-1">Save ₹6,000/yr (₹23,988 billed annually)</span>` 
        : `/ month`;
    }

    if (proPriceEl) {
      proPriceEl.textContent = isAnnual ? PRICING_PLANS['pro'].annualDisplay : PRICING_PLANS['pro'].monthlyDisplay;
    }
    if (proSubEl) {
      proSubEl.innerHTML = isAnnual 
        ? `<span class="badge bg-success-subtle text-success mt-1">Save ₹14,400/yr (₹57,588 billed annually)</span>` 
        : `/ month`;
    }
  }

  if (billingSwitch) {
    billingSwitch.addEventListener('change', function () {
      updateBillingCycle(this.checked);
    });
  }

  if (labelMonthly) {
    labelMonthly.addEventListener('click', function () {
      if (billingSwitch) {
        billingSwitch.checked = false;
        updateBillingCycle(false);
      }
    });
  }

  if (labelAnnual) {
    labelAnnual.addEventListener('click', function () {
      if (billingSwitch) {
        billingSwitch.checked = true;
        updateBillingCycle(true);
      }
    });
  }

  // 2. Intercept Plan CTA Clicks to open modal
  document.querySelectorAll('[data-pricing-plan]').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const planId = this.getAttribute('data-pricing-plan') || 'growth';
      openPlanCheckoutModal(planId);
    });
  });

  // Check URL params (?plan=growth or #plan=pro)
  const urlParams = new URLSearchParams(window.location.search);
  const planParam = urlParams.get('plan') || window.location.hash.replace('#plan=', '').replace('#', '');
  if (planParam && PRICING_PLANS[planParam]) {
    setTimeout(() => {
      openPlanCheckoutModal(planParam);
    }, 300);
  }
}

/**
 * Prepares and displays the Plan Checkout Modal
 */
function openPlanCheckoutModal(planId) {
  selectedPlanId = planId;
  const plan = PRICING_PLANS[planId] || PRICING_PLANS['growth'];
  const modalEl = document.getElementById('pricingCheckoutModal');
  if (!modalEl) return;

  // Reset modal state
  const formSection = document.getElementById('checkout-form-section');
  const successSection = document.getElementById('checkout-success-section');
  if (formSection) formSection.style.display = 'block';
  if (successSection) successSection.style.display = 'none';

  // Update Plan Info in Modal
  const modalPlanTitle = document.getElementById('modal-plan-title');
  if (modalPlanTitle) modalPlanTitle.textContent = plan.name;

  const modalPlanBadge = document.getElementById('modal-plan-badge');
  if (modalPlanBadge) {
    modalPlanBadge.className = `badge ${plan.badgeClass}`;
    modalPlanBadge.textContent = plan.badge;
  }

  const modalPlanPrice = document.getElementById('modal-plan-price');
  if (modalPlanPrice) {
    const isAnnual = currentBillingCycle === 'annual';
    const priceText = isAnnual ? plan.annualDisplay : plan.monthlyDisplay;
    modalPlanPrice.textContent = `${priceText} ${plan.period}`;
  }

  const modalTrialNote = document.getElementById('modal-plan-note');
  if (modalTrialNote) {
    modalTrialNote.textContent = plan.trialNote;
  }

  const modalFeaturesList = document.getElementById('modal-plan-features');
  if (modalFeaturesList && plan.features) {
    modalFeaturesList.innerHTML = plan.features.map(f => `
      <li class="d-flex align-items-center gap-2 mb-1">
        <i class="bi bi-check-circle-fill text-success small"></i>
        <span>${f}</span>
      </li>
    `).join('');
  }

  const submitBtn = document.getElementById('modal-checkout-submit-btn');
  if (submitBtn) {
    submitBtn.innerHTML = `<i class="bi bi-shield-check me-1"></i> ${plan.modalCta}`;
    submitBtn.disabled = false;
  }

  // Update Full Signup Redirect link
  const fullSignupLink = document.getElementById('modal-full-signup-link');
  if (fullSignupLink) {
    fullSignupLink.href = `vendor-signup.html?plan=${plan.id}&cycle=${currentBillingCycle}`;
  }

  // Reset promo code input
  const promoInput = document.getElementById('checkout-promo-code');
  const promoStatus = document.getElementById('checkout-promo-status');
  if (promoInput) promoInput.value = '';
  if (promoStatus) promoStatus.innerHTML = '';

  // Show Bootstrap Modal
  if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
    const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
    bsModal.show();
  }
}

/**
 * Handles promo code application
 */
function applyPromoCode() {
  const promoInput = document.getElementById('checkout-promo-code');
  const promoStatus = document.getElementById('checkout-promo-status');
  if (!promoInput || !promoStatus) return;

  const code = (promoInput.value || '').trim().toUpperCase();
  if (code === 'STREET2026' || code === 'FOODTRUCK' || code === 'FESTIVAL') {
    promoStatus.innerHTML = `
      <div class="alert alert-success py-2 px-3 small mt-2 d-flex align-items-center gap-2 mb-0">
        <i class="bi bi-check-circle-fill"></i>
        <span>Promo code <strong>${code}</strong> applied! 1 extra month free included upon activation.</span>
      </div>
    `;
  } else if (code) {
    promoStatus.innerHTML = `
      <div class="alert alert-warning py-2 px-3 small mt-2 d-flex align-items-center gap-2 mb-0">
        <i class="bi bi-exclamation-triangle-fill"></i>
        <span>Invalid promo code. Proceed with regular trial activation.</span>
      </div>
    `;
  }
}

/**
 * Handles Form Submission inside the Checkout Modal
 */
function handleCheckoutSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('checkout-subscription-form');
  if (!form) return;

  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return;
  }

  const submitBtn = document.getElementById('modal-checkout-submit-btn');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
      Activating Membership...
    `;
  }

  const truckName = (document.getElementById('checkout-truck-name')?.value || 'Your Food Truck').trim();
  const email = (document.getElementById('checkout-email')?.value || 'operator@foodtruck.com').trim();
  const plan = PRICING_PLANS[selectedPlanId] || PRICING_PLANS['growth'];

  // Simulate instant activation after 800ms
  setTimeout(() => {
    const formSection = document.getElementById('checkout-form-section');
    const successSection = document.getElementById('checkout-success-section');

    if (formSection) formSection.style.display = 'none';
    if (successSection) {
      successSection.style.display = 'block';

      // Populate Success Details
      const successTitle = document.getElementById('success-plan-title');
      if (successTitle) successTitle.textContent = `${plan.name} Activated!`;

      const successTruck = document.getElementById('success-truck-name');
      if (successTruck) successTruck.textContent = truckName;

      const successEmail = document.getElementById('success-email');
      if (successEmail) successEmail.textContent = email;

      const successBilling = document.getElementById('success-billing-summary');
      if (successBilling) {
        const isAnnual = currentBillingCycle === 'annual';
        const price = isAnnual ? plan.annualDisplay : plan.monthlyDisplay;
        successBilling.textContent = plan.id === 'starter' 
          ? 'Free Forever (₹0)' 
          : plan.isTrial 
            ? `30-Day Free Trial (Then ${price} ${plan.period})` 
            : `${price} ${plan.period}`;
      }

      const orderRef = document.getElementById('success-order-ref');
      if (orderRef) {
        const randomNum = Math.floor(100000 + Math.random() * 900000);
        orderRef.textContent = `SF-SUB-${randomNum}`;
      }
    }
  }, 900);
}

// Auto-run on DOM ready
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPricingPage);
  } else {
    initPricingPage();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRICING_PLANS, initPricingPage };
}
