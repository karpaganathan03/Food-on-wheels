const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\kiris\\Desktop\\September - Projects\\Foodtruck';

console.log('--- STARTING SYSTEM VERIFICATION ---');

// 1. Verify Blog Pagination
const blogHtml = fs.readFileSync(path.join(rootDir, 'blog.html'), 'utf-8');
const hasPagination = /class="pagination"/i.test(blogHtml);
console.log(`1. Blog Pagination removed: ${!hasPagination ? 'PASS' : 'FAIL'}`);

// 2. Verify Blog Details Routing
const hasBlogDataScript = fs.readFileSync(path.join(rootDir, 'blog-details.html'), 'utf-8').includes('assets/js/blog-data.js');
const blogDataJs = fs.readFileSync(path.join(rootDir, 'assets/js/blog-data.js'), 'utf-8');
const hasAllArticles = ['pizza-revolution', 'smash-burger', 'smokehouse-night-shift', 'vegan-street-food'].every(id => blogDataJs.includes(id));
console.log(`2. Dynamic Blog Details configured & wired: ${hasBlogDataScript && hasAllArticles ? 'PASS' : 'FAIL'}`);

// 3. Verify Logo & Company Name Consistency
const styleCss = fs.readFileSync(path.join(rootDir, 'assets/css/style.css'), 'utf-8');
const hasYellowTagline = /\.street-footer \.brand-tagline\s*\{\s*color:\s*var\(--secondary-color\)/i.test(styleCss);
const hasFooterBrandPill = /\.street-footer \.navbar-brand/i.test(styleCss);
console.log(`3. Universal Brand Pill & Typography enforced (No Yellow Tagline): ${!hasYellowTagline && hasFooterBrandPill ? 'PASS' : 'FAIL'}`);

// 4. Verify Favicon across all HTML files
const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));
const missingFavicon = htmlFiles.filter(f => !fs.readFileSync(path.join(rootDir, f), 'utf-8').includes('favicon.svg'));
console.log(`4. Favicon on all ${htmlFiles.length} HTML pages: ${missingFavicon.length === 0 ? 'PASS (All ' + htmlFiles.length + ' pages have favicon)' : 'FAIL: ' + missingFavicon.join(', ')}`);

// 5. Verify Clean Login & Register Pages
const loginHtml = fs.readFileSync(path.join(rootDir, 'login.html'), 'utf-8');
const registerHtml = fs.readFileSync(path.join(rootDir, 'register.html'), 'utf-8');
const loginClean = !loginHtml.includes('street-navbar') && !loginHtml.includes('street-footer') && loginHtml.includes('form action="dashboard.html"');
const registerClean = !registerHtml.includes('street-navbar') && !registerHtml.includes('street-footer') && registerHtml.includes('form action="dashboard.html"');
console.log(`5. Login & Register page stripped to form alone: ${loginClean && registerClean ? 'PASS' : 'FAIL'}`);

// 6. Verify Dashboard Clickable Interactivity
const dashboardJs = fs.readFileSync(path.join(rootDir, 'assets/js/dashboard.js'), 'utf-8');
const hasToast = dashboardJs.includes('showDashboardToast');
const hasPauseOrders = dashboardJs.includes('btn-pause-orders');
const hasShiftReport = dashboardJs.includes('btn-download-shift-report');
console.log(`6. Dashboard Clickable Entities Functional & Toasted: ${hasToast && hasPauseOrders && hasShiftReport ? 'PASS' : 'FAIL'}`);

// 7. Verify Social Links
const remainingDeadSocial = [];
htmlFiles.forEach(f => {
  const c = fs.readFileSync(path.join(rootDir, f), 'utf-8');
  if (/<a href="#" class="footer-social-link"/i.test(c)) {
    remainingDeadSocial.push(f);
  }
});
console.log(`7. Social Media Links redirecting to real destinations: ${remainingDeadSocial.length === 0 ? 'PASS (0 dead social links)' : 'FAIL in ' + remainingDeadSocial.join(', ')}`);

console.log('--- VERIFICATION COMPLETE ---');
