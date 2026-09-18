const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\kiris\\Desktop\\September - Projects\\Foodtruck';
const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));

const standardSvg = `<svg width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="12" fill="url(#sfBrandGrad)"/>
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
                <linearGradient id="sfBrandGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#E63946"/>
                  <stop offset="1" stop-color="#E9A820"/>
                </linearGradient>
              </defs>
            </svg>`;

const universalBrandBlock = `<div class="brand-logo-badge">
            ${standardSvg}
          </div>
          <div class="brand-text-wrap d-flex flex-column lh-1">
            <span class="brand-title fw-bold fs-4 text-heading">Street<strong class="text-primary-custom">Feast</strong></span>
            <span class="brand-tagline text-muted" style="font-size: 0.62rem; letter-spacing: 0.14em; font-weight: 800;">FOOD TRUCK &amp; TASTE</span>
          </div>`;

let modifiedCount = 0;

htmlFiles.forEach(file => {
  const filePath = path.join(rootDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // 1. Add Favicon if not present
  if (!content.includes('favicon.svg')) {
    content = content.replace(
      /(<meta name="viewport"[^>]*>)/i,
      `$1\n  <link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg">`
    );
  }

  // 2. Standardize Footer Brand
  // Look for `<a class="navbar-brand mb-3" href="index.html">...</a>`
  const footerBrandRegex = /<a class="navbar-brand mb-3" href="index\.html">[\s\S]*?<\/a>/i;
  if (footerBrandRegex.test(content)) {
    content = content.replace(footerBrandRegex, `<a class="navbar-brand mb-3" href="index.html">
          ${universalBrandBlock}
        </a>`);
  }

  // 3. Standardize Sidebar Brand in Dashboard pages
  // `<div class="sidebar-brand-header">\s*<a class="navbar-brand[^>]*" href="index\.html">[\s\S]*?<\/a>\s*<\/div>`
  const sidebarBrandRegex = /(<div class="sidebar-brand-header">\s*)<a class="navbar-brand[^"]*" href="index\.html">[\s\S]*?<\/a>/i;
  if (sidebarBrandRegex.test(content)) {
    content = content.replace(sidebarBrandRegex, `$1<a class="navbar-brand" href="index.html">
          ${universalBrandBlock}
        </a>`);
  }

  // 4. Update Social Links
  // Instagram
  content = content.replace(
    /<a href="#" class="footer-social-link"( aria-label="Instagram")?>([\s\S]*?<i class="bi bi-instagram"><\/i>[\s\S]*?)<\/a>/g,
    `<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Instagram">$2</a>`
  );
  // Facebook
  content = content.replace(
    /<a href="#" class="footer-social-link"( aria-label="Facebook")?>([\s\S]*?<i class="bi bi-facebook"><\/i>[\s\S]*?)<\/a>/g,
    `<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Facebook">$2</a>`
  );
  // YouTube
  content = content.replace(
    /<a href="#" class="footer-social-link"( aria-label="YouTube")?>([\s\S]*?<i class="bi bi-youtube"><\/i>[\s\S]*?)<\/a>/g,
    `<a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="YouTube">$2</a>`
  );
  // Twitter / X
  content = content.replace(
    /<a href="#" class="footer-social-link"( aria-label="Twitter")?>([\s\S]*?<i class="bi bi-twitter(-x)?"><\/i>[\s\S]*?)<\/a>/g,
    `<a href="https://x.com" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="X (Twitter)">$2</a>`
  );

  // Food truck details social links
  content = content.replace(
    /href="#"([^>]*id="truck-chef-ig")/g,
    `href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"$1`
  );
  content = content.replace(
    /href="#"([^>]*id="truck-chef-fb")/g,
    `href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"$1`
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    modifiedCount++;
    console.log(`Updated ${file}`);
  }
});

console.log(`Successfully standardized ${modifiedCount} HTML files.`);
