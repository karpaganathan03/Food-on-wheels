const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, "..");

// Shared footer logo markup
const footerLogoMarkup = `<img class="brand-logo-image" src="assets/images/Logo.png" alt="StreetFeast - Food Truck &amp; Taste">`;

// Shared dashboard and auth logo markup
const dashboardLogoMarkup = `<img class="brand-logo-image" src="assets/images/Logo.png" alt="StreetFeast - Food Truck &amp; Taste">`;

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace footer brand logo if found
  const footerBrandRegex = /<a class="navbar-brand mb-3" href="index\.html">\s*<div class="brand-logo-icon">[\s\S]*?<\/a>/i;
  if (footerBrandRegex.test(content)) {
    content = content.replace(footerBrandRegex, `<a class="navbar-brand mb-3" href="index.html">\n            ${footerLogoMarkup}\n          </a>`);
  }

  // Replace dashboard sidebar logo or auth brand logo
  const dashBrandRegex = /<a class="sidebar-brand[^"]*" href="index\.html">\s*<div class="brand-logo-icon">[\s\S]*?<\/a>/i;
  if (dashBrandRegex.test(content)) {
    content = content.replace(dashBrandRegex, `<a class="sidebar-brand d-flex align-items-center gap-2 p-3 border-bottom text-decoration-none" href="index.html">\n            ${dashboardLogoMarkup}\n          </a>`);
  }

  // Auth brand logo
  const authBrandRegex = /<a class="navbar-brand mb-4[^"]*" href="index\.html">\s*<div class="brand-logo-icon">[\s\S]*?<\/a>/i;
  if (authBrandRegex.test(content)) {
    content = content.replace(authBrandRegex, `<a class="navbar-brand mb-4 d-inline-flex align-items-center gap-2" href="index.html">\n            ${dashboardLogoMarkup}\n          </a>`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Finished updating footers, dashboard, and auth logos.');
