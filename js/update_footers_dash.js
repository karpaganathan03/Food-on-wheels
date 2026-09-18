const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\kiris\\Desktop\\September - Projects\\Foodtruck';

// SVG Brand Logo definition for Footers (with text-white)
const svgFooterLogo = `<div class="brand-logo-badge">
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="url(#sfBrandGradFt)"/>
                <path d="M10 29V20C10 18.8954 10.8954 18 12 18H28V29H10Z" fill="white"/>
                <path d="M28 20H33.5858C34.3815 20 35.1446 20.3161 35.7071 20.8787L38.1213 23.2929C38.6839 23.8554 39 24.6185 39 25.4142V29H28V20Z" fill="white" fill-opacity="0.9"/>
                <rect x="14" y="21" width="10" height="5" rx="1" fill="#E63946"/>
                <path d="M18 12C18 12 16.5 14 17.5 15.5C18.5 17 20 15 20 15C20 15 21.5 17 20.5 18C19.5 19 18 18.5 18 18.5" stroke="#FFD166" stroke-width="2.2" stroke-linecap="round"/>
                <path d="M29.5 21.5H34.5L36.5 24.5H29.5V21.5Z" fill="#161A1D"/>
                <circle cx="16" cy="30" r="3.5" fill="#161A1D" stroke="white" stroke-width="1.5"/>
                <circle cx="16" cy="30" r="1.2" fill="#E9A820"/>
                <circle cx="32" cy="30" r="3.5" fill="#161A1D" stroke="white" stroke-width="1.5"/>
                <circle cx="32" cy="30" r="1.2" fill="#E9A820"/>
                <defs>
                  <linearGradient id="sfBrandGradFt" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#E63946"/>
                    <stop offset="1" stop-color="#E9A820"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="brand-text-wrap d-flex flex-column lh-1">
              <span class="brand-title fw-bold fs-4 text-white">Street<strong class="text-primary-custom">Feast</strong></span>
              <span class="brand-tagline text-muted" style="font-size: 0.62rem; letter-spacing: 0.14em; font-weight: 800;">FOOD TRUCK &amp; TASTE</span>
            </div>`;

// SVG Brand Logo definition for Dashboard & Auth
const svgDashboardLogo = `<div class="brand-logo-badge">
            <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="12" fill="url(#sfBrandGradDash)"/>
              <path d="M10 29V20C10 18.8954 10.8954 18 12 18H28V29H10Z" fill="white"/>
              <path d="M28 20H33.5858C34.3815 20 35.1446 20.3161 35.7071 20.8787L38.1213 23.2929C38.6839 23.8554 39 24.6185 39 25.4142V29H28V20Z" fill="white" fill-opacity="0.9"/>
              <rect x="14" y="21" width="10" height="5" rx="1" fill="#E63946"/>
              <path d="M18 12C18 12 16.5 14 17.5 15.5C18.5 17 20 15 20 15C20 15 21.5 17 20.5 18C19.5 19 18 18.5 18 18.5" stroke="#FFD166" stroke-width="2.2" stroke-linecap="round"/>
              <path d="M29.5 21.5H34.5L36.5 24.5H29.5V21.5Z" fill="#161A1D"/>
              <circle cx="16" cy="30" r="3.5" fill="#161A1D" stroke="white" stroke-width="1.5"/>
              <circle cx="16" cy="30" r="1.2" fill="#E9A820"/>
              <circle cx="32" cy="30" r="3.5" fill="#161A1D" stroke="white" stroke-width="1.5"/>
              <circle cx="32" cy="30" r="1.2" fill="#E9A820"/>
              <defs>
                <linearGradient id="sfBrandGradDash" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#E63946"/>
                  <stop offset="1" stop-color="#E9A820"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="brand-text-wrap d-flex flex-column lh-1">
            <span class="brand-title fw-bold fs-4 text-heading">Street<strong class="text-primary-custom">Feast</strong></span>
            <span class="brand-tagline text-muted" style="font-size: 0.62rem; letter-spacing: 0.14em; font-weight: 800;">FOOD TRUCK &amp; TASTE</span>
          </div>`;

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace footer brand logo if found
  const footerBrandRegex = /<a class="navbar-brand mb-3" href="index\.html">\s*<div class="brand-logo-icon">[\s\S]*?<\/a>/i;
  if (footerBrandRegex.test(content)) {
    content = content.replace(footerBrandRegex, `<a class="navbar-brand mb-3" href="index.html">\n            ${svgFooterLogo}\n          </a>`);
  }

  // Replace dashboard sidebar logo or auth brand logo
  const dashBrandRegex = /<a class="sidebar-brand[^"]*" href="index\.html">\s*<div class="brand-logo-icon">[\s\S]*?<\/a>/i;
  if (dashBrandRegex.test(content)) {
    content = content.replace(dashBrandRegex, `<a class="sidebar-brand d-flex align-items-center gap-2 p-3 border-bottom text-decoration-none" href="index.html">\n            ${svgDashboardLogo}\n          </a>`);
  }

  // Auth brand logo
  const authBrandRegex = /<a class="navbar-brand mb-4[^"]*" href="index\.html">\s*<div class="brand-logo-icon">[\s\S]*?<\/a>/i;
  if (authBrandRegex.test(content)) {
    content = content.replace(authBrandRegex, `<a class="navbar-brand mb-4 d-inline-flex align-items-center gap-2" href="index.html">\n            ${svgDashboardLogo}\n          </a>`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Finished updating footers, dashboard, and auth logos.');
