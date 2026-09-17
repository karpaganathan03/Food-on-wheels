/**
 * StreetFeast — Pure HTML/CSS/JS Earnings Chart & Analytics
 * NO external chart libraries used
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const periodButtons = document.querySelectorAll('.earnings-period-btn');
  const chartContainer = document.getElementById('earnings-chart-bars');
  const totalDisplay = document.getElementById('earnings-total-stat');
  const ordersTotalDisplay = document.getElementById('earnings-orders-stat');
  const eventsTotalDisplay = document.getElementById('earnings-events-stat');

  const earningsData = {
    week: {
      total: '₹72,450',
      orders: '₹48,450',
      events: '₹24,000',
      bars: [
        { label: 'Mon', value: '₹8,200', height: '42%' },
        { label: 'Tue', value: '₹6,400', height: '32%' },
        { label: 'Wed', value: '₹9,800', height: '52%' },
        { label: 'Thu', value: '₹11,200', height: '60%' },
        { label: 'Fri', value: '₹14,500', height: '80%' },
        { label: 'Sat', value: '₹18,450', height: '100%' },
        { label: 'Sun', value: '₹3,900', height: '22%' }
      ]
    },
    month: {
      total: '₹2,84,600',
      orders: '₹1,88,600',
      events: '₹96,000',
      bars: [
        { label: 'Week 1', value: '₹68,200', height: '75%' },
        { label: 'Week 2', value: '₹74,400', height: '82%' },
        { label: 'Week 3', value: '₹69,550', height: '78%' },
        { label: 'Week 4', value: '₹72,450', height: '85%' }
      ]
    },
    today: {
      total: '₹18,450',
      orders: '₹12,450',
      events: '₹6,000',
      bars: [
        { label: '11 AM', value: '₹1,200', height: '25%' },
        { label: '1 PM', value: '₹4,800', height: '90%' },
        { label: '3 PM', value: '₹2,100', height: '40%' },
        { label: '5 PM', value: '₹3,400', height: '65%' },
        { label: '7 PM', value: '₹5,350', height: '100%' },
        { label: '9 PM', value: '₹1,600', height: '30%' }
      ]
    }
  };

  function updateEarningsView(period) {
    const data = earningsData[period];
    if (!data) return;

    if (totalDisplay) totalDisplay.textContent = data.total;
    if (ordersTotalDisplay) ordersTotalDisplay.textContent = data.orders;
    if (eventsTotalDisplay) eventsTotalDisplay.textContent = data.events;

    if (chartContainer) {
      chartContainer.innerHTML = '';
      data.bars.forEach(item => {
        const col = document.createElement('div');
        col.className = 'chart-bar-col';
        col.innerHTML = `
          <div class="chart-bar" style="height: ${item.height}">
            <span class="chart-bar-tooltip">${item.value}</span>
          </div>
          <span class="chart-label">${item.label}</span>
        `;
        chartContainer.appendChild(col);
      });
    }
  }

  periodButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      periodButtons.forEach(b => b.classList.remove('active', 'btn-brand-primary'));
      this.classList.add('active', 'btn-brand-primary');

      const period = this.getAttribute('data-period') || 'week';
      updateEarningsView(period);
    });
  });

  // Initial render with week data
  updateEarningsView('week');
});
