/**
 * StreetFeast — Customer Dashboard (frontend demo only)
 * Renders each dashboard section from window.SF_DASHBOARD_DATA.
 * No authentication, storage or network requests.
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const D = window.SF_DASHBOARD_DATA;
  if (!D) return;

  const rupee = n => '₹' + Number(n).toLocaleString('en-IN');
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const mount = name => document.querySelector('[data-mount="' + name + '"]');
  const o = D.activeOrder;
  const subtotal = o.items.reduce((t, i) => t + i.qty * i.price, 0);
  const total = subtotal + o.deliveryFee + o.taxes;
  const liveMap = document.getElementById('customer-live-map');
  if (liveMap) {
    const mapQuery = new URLSearchParams({
      q: o.currentLocation,
      z: '15',
      output: 'embed'
    });
    liveMap.src = 'https://www.google.com/maps?' + mapQuery.toString();
    liveMap.title = 'Map showing the food truck near ' + o.currentLocation;
  }

  /* ---------- small toast (reuses the site's .dashboard-toast styles) ---------- */
  function toast(message, type) {
    let box = document.querySelector('.dashboard-toast-container');
    if (!box) {
      box = document.createElement('div');
      box.className = 'dashboard-toast-container';
      document.body.appendChild(box);
    }
    const t = document.createElement('div');
    t.className = 'dashboard-toast ' + (type || '');
    t.textContent = message;
    box.appendChild(t);
    setTimeout(() => t.remove(), 3200);
  }

  /* ---------- reusable fragments ---------- */
  const head = (icon, title, right) =>
    '<div class="dash-card-head"><h2 class="dash-card-title"><i class="bi ' + icon + ' text-primary-custom"></i> ' + title + '</h2>' + (right || '') + '</div>';

  const statusBadge = (o2) => '<span class="badge-status ' + o2.statusKey + '">' + esc(o2.status) + '</span>';

  const infoRow = (icon, label, value) =>
    '<li class="dash-info-row"><i class="bi ' + icon + '"></i><div class="min-w-0"><small>' + label + '</small><strong>' + value + '</strong></div></li>';

  /* ---------- bindings ---------- */
  document.querySelectorAll('[data-bind="user.initials"]').forEach(el => (el.textContent = D.user.initials));
  document.querySelectorAll('[data-bind="user.firstName"]').forEach(el => (el.textContent = D.user.name.split(' ')[0]));

  /* ---------- OVERVIEW: stats ---------- */
  const stats = [
    { icon: 'bi-receipt', cls: 'stat-icon-tomato', value: '#' + o.id, label: 'Active order' },
    { icon: 'bi-truck', cls: 'stat-icon-mustard', value: o.status, label: 'Order status' },
    { icon: 'bi-clock-history', cls: 'stat-icon-green', value: o.etaMinutes + ' min', label: 'Estimated arrival · ' + o.arrivalTime },
    { icon: 'bi-signpost-split', cls: 'stat-icon-charcoal', value: o.distanceKm + ' km', label: 'Distance remaining' }
  ];
  mount('stats').innerHTML = stats.map(s =>
    '<div class="col-12 col-sm-6 col-xl-3"><div class="stat-card-vendor dash-stat">' +
    '<div class="stat-icon-wrap ' + s.cls + '"><i class="bi ' + s.icon + '"></i></div>' +
    '<div class="min-w-0"><div class="stat-value">' + esc(s.value) + '</div><div class="stat-label">' + esc(s.label) + '</div></div></div></div>'
  ).join('');

  /* ---------- OVERVIEW: active order + stepper ---------- */
  const stepper = '<ol class="dash-steps">' + o.steps.map(s =>
    '<li class="dash-step ' + s.state + '"><span class="dash-step-dot">' + (s.state === 'done' ? '<i class="bi bi-check-lg"></i>' : '') + '</span>' +
    '<span class="dash-step-text"><strong>' + s.label + '</strong><small>' + s.time + '</small></span></li>').join('') + '</ol>';

  mount('active-order').innerHTML =
    head('bi-bag-check-fill', 'Active Order', statusBadge(o)) +
    '<div class="dash-order-top"><img src="' + o.truck.image + '" alt="' + esc(o.truck.name) + '" class="dash-thumb" loading="lazy">' +
    '<div class="min-w-0"><h3 class="h6 fw-bold mb-1">' + esc(o.truck.name) + '</h3>' +
    '<p class="small text-muted mb-0">' + esc(o.truck.cuisine) + '</p>' +
    '<p class="small text-muted mb-0">Order #' + o.id + ' · ' + o.placedAt + '</p></div></div>' +
    stepper +
    '<div class="dash-progress-wrap"><div class="d-flex justify-content-between small mb-1"><span class="text-muted">Delivery progress</span><strong>' + o.progress + '%</strong></div>' +
    '<div class="dash-progress" role="progressbar" aria-valuenow="' + o.progress + '" aria-valuemin="0" aria-valuemax="100"><span style="width:' + o.progress + '%"></span></div></div>' +
    '<div class="dash-actions"><button class="btn btn-brand-primary btn-sm" type="button" data-action="open-tracking"><i class="bi bi-geo-alt-fill me-1"></i> Track Live</button>' +
    '<button class="btn btn-brand-outline btn-sm" type="button" data-action="open-orders"><i class="bi bi-receipt me-1"></i> Order Details</button></div>';

  /* ---------- OVERVIEW: delivery info ---------- */
  mount('delivery-info').innerHTML =
    head('bi-info-circle-fill', 'Delivery Information') +
    '<ul class="dash-info-list">' +
    infoRow('bi-truck', 'Food truck', esc(o.truck.name)) +
    infoRow('bi-person-badge', 'Delivery partner', esc(o.driver.name) + ' · ★ ' + o.driver.rating) +
    infoRow('bi-house-door', 'Delivering to', esc(D.address.line1)) +
    infoRow('bi-geo-alt', 'Currently at', esc(o.currentLocation)) +
    infoRow('bi-clock', 'Expected by', o.arrivalTime) + '</ul>' +
    '<div class="dash-actions"><button class="btn btn-brand-outline btn-sm" type="button" data-action="call-driver"><i class="bi bi-telephone me-1"></i> Call Driver</button></div>';

  /* ---------- TRACKING ---------- */
  mount('tracking-status').innerHTML =
    head('bi-broadcast', 'Delivery Status', statusBadge(o)) +
    '<div class="dash-eta"><span class="dash-eta-num">' + o.etaMinutes + '</span><span class="dash-eta-unit">min<br>away</span></div>' +
    '<div class="dash-progress mb-2" role="progressbar" aria-valuenow="' + o.progress + '" aria-valuemin="0" aria-valuemax="100"><span style="width:' + o.progress + '%"></span></div>' +
    '<ul class="dash-info-list">' +
    infoRow('bi-geo-alt-fill', 'Current truck location', esc(o.currentLocation)) +
    infoRow('bi-signpost-split', 'Distance remaining', o.distanceKm + ' km') +
    infoRow('bi-clock', 'Estimated delivery', o.arrivalTime) + '</ul>' +
    '<h3 class="dash-sub">Route updates</h3><ul class="dash-updates">' +
    D.trackingUpdates.map(u => '<li><time>' + u.time + '</time><span>' + esc(u.text) + '</span></li>').join('') + '</ul>';

  /* ---------- ORDERS ---------- */
  mount('order-details').innerHTML =
    head('bi-receipt', 'Current Order', statusBadge(o)) +
    '<p class="small text-muted mb-3">Order #' + o.id + ' · ' + o.placedAt + '<br>' + esc(o.truck.name) + '</p>' +
    '<ul class="dash-items">' + o.items.map(i =>
      '<li><span class="dash-item-name">' + esc(i.name) + '<small> × ' + i.qty + '</small></span><strong>' + rupee(i.qty * i.price) + '</strong></li>').join('') + '</ul>' +
    '<dl class="dash-totals"><div><dt>Subtotal</dt><dd>' + rupee(subtotal) + '</dd></div><div><dt>Delivery fee</dt><dd>' + rupee(o.deliveryFee) + '</dd></div>' +
    '<div><dt>Taxes</dt><dd>' + rupee(o.taxes) + '</dd></div><div class="grand"><dt>Total</dt><dd>' + rupee(total) + '</dd></div></dl>' +
    '<div class="dash-actions"><button class="btn btn-brand-primary btn-sm" type="button" data-action="open-tracking"><i class="bi bi-geo-alt-fill me-1"></i> Track Order</button></div>';

  mount('order-history').innerHTML =
    head('bi-clock-history', 'Order History') +
    '<ul class="dash-history">' + D.history.map(h =>
      '<li class="dash-history-item"><div class="dash-history-main"><strong>#' + h.id + '</strong><span class="dash-history-date">' + h.date + '</span></div>' +
      '<p class="mb-1 fw-semibold">' + esc(h.truck) + '</p><p class="small text-muted mb-2">' + esc(h.items) + '</p>' +
      '<div class="dash-history-foot"><strong>' + rupee(h.total) + '</strong><span class="badge-status ' + h.statusKey + '">' + h.status + '</span>' +
      (h.statusKey === 'ready' ? '<button class="btn btn-brand-outline btn-sm ms-auto" type="button" data-action="reorder">Reorder</button>' : '') +
      '</div></li>').join('') + '</ul>';

  /* ---------- USER ---------- */
  const unread = () => D.notifications.filter(n => n.unread).length;
  function renderNotifications() {
    mount('notifications').innerHTML =
      head('bi-bell-fill', 'Notifications', '<span class="badge-status new" id="dash-unread">' + unread() + ' new</span>') +
      '<ul class="dash-notes">' + D.notifications.map(n =>
        '<li class="dash-note' + (n.unread ? ' unread' : '') + '"><span class="dash-note-icon"><i class="bi ' + n.icon + '"></i></span>' +
        '<div class="min-w-0"><strong>' + esc(n.title) + '</strong><p class="small text-muted mb-0">' + esc(n.text) + '</p><small class="text-muted">' + n.time + '</small></div></li>').join('') + '</ul>' +
      '<div class="dash-actions"><button class="btn btn-brand-outline btn-sm" type="button" data-action="mark-read"><i class="bi bi-check2-all me-1"></i> Mark all as read</button></div>';
  }
  renderNotifications();

  mount('address').innerHTML =
    head('bi-geo-alt', 'Delivery Address', '<span class="badge-status completed">' + esc(D.address.label) + '</span>') +
    '<address class="dash-address"><strong>' + esc(D.user.name) + '</strong><br>' + esc(D.address.line1) + '<br>' + esc(D.address.line2) + '</address>' +
    '<p class="small text-muted mb-3"><i class="bi bi-sticky me-1"></i>' + esc(D.address.notes) + '</p>' +
    '<div class="dash-actions"><button class="btn btn-brand-outline btn-sm" type="button" data-action="edit-address"><i class="bi bi-pencil me-1"></i> Edit Address</button></div>';

  mount('profile').innerHTML =
    head('bi-person-circle', 'Profile &amp; Account') +
    '<ul class="dash-info-list">' +
    infoRow('bi-person', 'Name', esc(D.user.name)) + infoRow('bi-envelope', 'Email', esc(D.user.email)) +
    infoRow('bi-telephone', 'Phone', esc(D.user.phone)) + infoRow('bi-calendar-heart', 'Member since', D.user.memberSince) +
    infoRow('bi-stars', 'Rewards', esc(D.user.tier) + ' · ' + D.user.points.toLocaleString('en-IN') + ' pts') + '</ul>' +
    '<div class="dash-actions"><button class="btn btn-brand-outline btn-sm" type="button" data-action="edit-profile"><i class="bi bi-pencil me-1"></i> Edit Profile</button>' +
    '<a class="btn btn-sm dash-link-btn" href="dashboard.html"><i class="bi bi-shop me-1"></i> Vendor Command Center</a></div>';

  /* ---------- tabs: deep-link + buttons ---------- */
  function showTab(id) {
    const btn = document.getElementById('tab-' + id);
    if (btn && window.bootstrap) window.bootstrap.Tab.getOrCreateInstance(btn).show();
  }
  const fromHash = (location.hash || '').replace('#', '');
  if (['overview', 'tracking', 'orders', 'user'].indexOf(fromHash) > -1) showTab(fromHash);

  document.querySelectorAll('.dash-tab').forEach(btn => {
    btn.addEventListener('shown.bs.tab', () => {
      history.replaceState(null, '', '#' + btn.id.replace('tab-', ''));
    });
  });

  const actions = {
    'open-tracking': () => showTab('tracking'),
    'open-orders': () => showTab('orders'),
    'call-driver': () => toast('Demo only — calling ' + o.driver.name + '…'),
    'reorder': () => toast('Demo only — items added to a new order.', 'success'),
    'edit-address': () => toast('Demo only — address editing is not connected.'),
    'edit-profile': () => toast('Demo only — profile editing is not connected.'),
    'mark-read': () => {
      D.notifications.forEach(n => (n.unread = false));
      renderNotifications();
      toast('All notifications marked as read.', 'success');
    }
  };
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-action]');
    if (el && actions[el.dataset.action]) actions[el.dataset.action]();
  });
});
