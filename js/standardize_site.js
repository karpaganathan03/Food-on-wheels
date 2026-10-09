const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, "..");
const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));

const universalBrandBlock = `<img class="brand-logo-image" src="assets/images/Logo.png" alt="StreetFeast - Food Truck &amp; Taste">`;

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
