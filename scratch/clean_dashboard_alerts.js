const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\kiris\\Desktop\\September - Projects\\Foodtruck';

// 1. booking-requests.html
let br = fs.readFileSync(path.join(rootDir, 'booking-requests.html'), 'utf-8');
br = br.replace(
  `onclick="alert('Exporting Catering Leads to CSV...')"`,
  `onclick="window.showDashboardToast('📊 <strong>Exporting:</strong> 6 Catering leads exported to CSV.', 'success')"`
);
fs.writeFileSync(path.join(rootDir, 'booking-requests.html'), br, 'utf-8');

// 2. earnings.html
let earn = fs.readFileSync(path.join(rootDir, 'earnings.html'), 'utf-8');
earn = earn.replace(
  /onclick="alert\('Downloading Statement PDF\.\.\.'\)"/g,
  `onclick="window.showDashboardToast('📄 <strong>Statement Downloaded:</strong> Payout invoice saved to downloads.', 'success')"`
);
earn = earn.replace(
  `onclick="alert('Exporting full year sales records to CSV...')"`,
  `onclick="window.showDashboardToast('📊 <strong>Export Complete:</strong> Full-year sales ledger saved as CSV.', 'success')"`
);
fs.writeFileSync(path.join(rootDir, 'earnings.html'), earn, 'utf-8');

// 3. location-schedule.html
let ls = fs.readFileSync(path.join(rootDir, 'location-schedule.html'), 'utf-8');
ls = ls.replace(
  /onclick="alert\('[^']*Rain Alert[^']*'\)"/g,
  `onclick="window.showDashboardToast('🌧️ <strong>Weather Delay Alert:</strong> Rain notice broadcasted to customer app.', 'warning')"`
);
ls = ls.replace(
  /onclick="alert\('Loaded into scheduler'\)"/g,
  `onclick="window.showDashboardToast('📌 <strong>Spot Selected:</strong> Location details added to your timetable.', 'success')"`
);
ls = ls.replace(
  /onclick="alert\('[^']*Weekly location schedule published[^']*'\)"/g,
  `onclick="window.showDashboardToast('✅ <strong>Published:</strong> Weekly timetable broadcasted live to StreetFeast!', 'success')"`
);
fs.writeFileSync(path.join(rootDir, 'location-schedule.html'), ls, 'utf-8');

// 4. menu-management.html
let mm = fs.readFileSync(path.join(rootDir, 'menu-management.html'), 'utf-8');
mm = mm.replace(
  /onclick="alert\('[^']*Digital Menu synced[^']*'\)"/g,
  `onclick="window.showDashboardToast('✅ <strong>Synced:</strong> Digital menu and item pricing updated live!', 'success')"`
);
fs.writeFileSync(path.join(rootDir, 'menu-management.html'), mm, 'utf-8');

// 5. orders.html
let ord = fs.readFileSync(path.join(rootDir, 'orders.html'), 'utf-8');
ord = ord.replace(
  /onclick="alert\('[^']*Shift closed out[^']*'\)"/g,
  `onclick="window.showDashboardToast('🏁 <strong>Shift Closed:</strong> End-of-shift Z-Report emailed to owner.', 'success')"`
);
fs.writeFileSync(path.join(rootDir, 'orders.html'), ord, 'utf-8');

// 6. reviews.html
let rev = fs.readFileSync(path.join(rootDir, 'reviews.html'), 'utf-8');
rev = rev.replace(
  `onclick="alert('Review settings saved!')"`,
  `onclick="window.showDashboardToast('✅ <strong>Saved:</strong> Review alert preferences updated.', 'success')"`
);
fs.writeFileSync(path.join(rootDir, 'reviews.html'), rev, 'utf-8');

console.log('Cleaned and enhanced all dashboard clickable buttons!');
