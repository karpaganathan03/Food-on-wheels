/**
 * StreetFeast — Customer Dashboard DUMMY DATA (frontend demo only)
 * Static sample data. Replace this object with real API data later;
 * customer-dashboard.js only reads from window.SF_DASHBOARD_DATA.
 */
window.SF_DASHBOARD_DATA = {
  user: {
    name: 'Alex Morgan',
    initials: 'AM',
    email: 'alex.morgan@example.com',
    phone: '+91 98765 43210',
    memberSince: 'March 2025',
    tier: 'Gold Foodie',
    points: 1240
  },

  address: {
    label: 'Home',
    line1: '214, Willow Creek Road, Flat 5B',
    line2: 'Rajapalayam, Tamil Nadu 626117',
    notes: 'Ring the bell twice. Leave at the door if no answer.'
  },

  activeOrder: {
    id: 'SF-20418',
    placedAt: 'Today, 12:24 PM',
    status: 'On the way',
    statusKey: 'ontheway',
    etaMinutes: 12,
    arrivalTime: '1:08 PM',
    distanceKm: 1.8,
    progress: 68,
    currentLocation: 'Mill Road, near Bus Stand Junction',
    truck: {
      name: 'The Taco Wagon',
      cuisine: 'Mexican Street Food',
      image: 'assets/images/menu-main-quesabirria.jpg'
    },
    driver: { name: 'Marco R.', rating: '4.9', phone: '+91 90000 11223' },
    steps: [
      { label: 'Confirmed', time: '12:24 PM', state: 'done' },
      { label: 'Preparing', time: '12:31 PM', state: 'done' },
      { label: 'On the way', time: '12:52 PM', state: 'current' },
      { label: 'Delivered', time: 'Est. 1:08 PM', state: 'todo' }
    ],
    items: [
      { name: 'Quesabirria Tacos (3 pcs)', qty: 1, price: 240 },
      { name: 'Street Corn Esquites', qty: 1, price: 120 },
      { name: 'Hibiscus Agua Fresca', qty: 2, price: 90 }
    ],
    deliveryFee: 40,
    taxes: 27
  },

  trackingUpdates: [
    { time: '12:52 PM', text: 'Truck left the kitchen stop and is heading to you.' },
    { time: '12:58 PM', text: 'Passed the Central Market. Traffic is light.' },
    { time: '1:01 PM', text: 'Now on Mill Road — about 1.8 km away.' }
  ],

  history: [
    { id: 'SF-20377', date: '18 Sep 2026', truck: 'Smoke & Brisket Co.', items: 'Brisket Sandwich, Cornbread', total: 410, status: 'Delivered', statusKey: 'ready' },
    { id: 'SF-20291', date: '11 Sep 2026', truck: 'Burrata Pizza Truck', items: 'Burrata Pizza, Chili Crisp Fries', total: 520, status: 'Delivered', statusKey: 'ready' },
    { id: 'SF-20214', date: '02 Sep 2026', truck: 'The Taco Wagon', items: 'Quesabirria Tacos, Slaw', total: 330, status: 'Delivered', statusKey: 'ready' },
    { id: 'SF-20102', date: '24 Aug 2026', truck: 'Sunset Feast Kitchen', items: 'Family Feast Bundle', total: 890, status: 'Cancelled', statusKey: 'declined' },
    { id: 'SF-19988', date: '15 Aug 2026', truck: 'The Taco Wagon', items: 'Esquites, Agua Fresca x2', total: 250, status: 'Delivered', statusKey: 'ready' }
  ],

  notifications: [
    { icon: 'bi-truck', title: 'Your truck is on the way', text: 'The Taco Wagon is about 12 minutes from you.', time: '2 min ago', unread: true },
    { icon: 'bi-check-circle', title: 'Order confirmed', text: 'Order #SF-20418 was confirmed by the truck.', time: '38 min ago', unread: true },
    { icon: 'bi-gift', title: 'Reward unlocked', text: 'You earned 120 points on your last order.', time: 'Yesterday', unread: false },
    { icon: 'bi-megaphone', title: 'New truck nearby', text: 'Burrata Pizza Truck is now serving in your area.', time: '2 days ago', unread: false }
  ]
};
