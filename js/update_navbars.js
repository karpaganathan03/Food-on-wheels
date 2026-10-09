const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, "..");

// Shared brand logo markup
const brandLogoMarkup = `<img class="brand-logo-image" src="assets/images/Logo.png" alt="StreetFeast - Food Truck &amp; Taste">`;

function getNavbarForPage(filename) {
  const isHome1 = filename === 'index.html';
  const isHome2 = filename === 'home-2.html';
  const isHome = isHome1 || isHome2;
  const isAbout = filename === 'about.html' || filename === 'vendors.html';
  const isDirectory = filename === 'directory.html' || filename === 'menu.html' || filename === 'food-truck-details.html';
  const isEvents = filename === 'events.html' || filename === 'event-details.html';
  const isPricing = filename === 'pricing.html';
  const isBlog = filename === 'blog.html' || filename === 'blog-details.html';
  const isContact = filename === 'contact.html';

  return `  <!-- GLOBAL NAVBAR -->
  <header class="street-navbar">
    <div class="container">
      <nav class="navbar navbar-expand-lg p-0">
        <!-- StreetFeast Brand Logo -->
        <a class="navbar-brand" href="index.html">
          ${brandLogoMarkup}
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#streetNavbarNav" aria-controls="streetNavbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i class="bi bi-list fs-2"></i>
        </button>

        <div class="collapse navbar-collapse" id="streetNavbarNav">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <!-- 1. Home Dropdown -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle ${isHome ? 'active' : ''}" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Home
              </a>
              <ul class="dropdown-menu dropdown-menu-rich border-0 shadow-lg p-2">
                <li>
                  <a class="dropdown-item rich-dropdown-item ${isHome1 ? 'active' : ''} d-flex align-items-center gap-3 p-2 rounded-3" href="index.html">
                    <div class="rich-dropdown-icon bg-primary-light text-primary-custom rounded-3 d-flex align-items-center justify-content-center">
                      <i class="bi bi-shop fs-5"></i>
                    </div>
                    <div class="rich-dropdown-content">
                      <div class="d-flex align-items-center gap-2">
                        <span class="fw-bold text-heading">Home 1 — Street Vibes</span>
                        <span class="badge badge-subtle-primary">Vibrant</span>
                      </div>
                      <small class="text-muted d-block">Street food photography, trucks &amp; community</small>
                    </div>
                  </a>
                </li>
                <li><hr class="dropdown-divider my-1"></li>
                <li>
                  <a class="dropdown-item rich-dropdown-item ${isHome2 ? 'active' : ''} d-flex align-items-center gap-3 p-2 rounded-3" href="home-2.html">
                    <div class="rich-dropdown-icon bg-warning-light text-secondary-custom rounded-3 d-flex align-items-center justify-content-center">
                      <i class="bi bi-truck-front-fill fs-5"></i>
                    </div>
                    <div class="rich-dropdown-content">
                      <div class="d-flex align-items-center gap-2">
                        <span class="fw-bold text-heading">Home 2 — Catering Fleet</span>
                        <span class="badge badge-subtle-warning">B2B</span>
                      </div>
                      <small class="text-muted d-block">Fleet rentals, private catering &amp; products</small>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <!-- 2. About (Combined with Vendors) -->
            <li class="nav-item"><a class="nav-link ${isAbout ? 'active' : ''}" href="about.html">About</a></li>
            <!-- 3. Directory with Menu dropdown -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle ${isDirectory ? 'active' : ''}" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Directory
              </a>
              <ul class="dropdown-menu border-0 shadow-md">
                <li><a class="dropdown-item ${filename === 'directory.html' ? 'active' : ''}" href="directory.html"><i class="bi bi-grid-fill me-2 text-primary-custom"></i> Food Truck Directory</a></li>
                <li><a class="dropdown-item ${filename === 'menu.html' ? 'active' : ''}" href="menu.html"><i class="bi bi-book-half me-2 text-primary-custom"></i> Signature Street Menus</a></li>
              </ul>
            </li>
            <!-- 4. Events -->
            <li class="nav-item"><a class="nav-link ${isEvents ? 'active' : ''}" href="events.html">Events</a></li>
            <!-- 5. Pricing -->
            <li class="nav-item"><a class="nav-link ${isPricing ? 'active' : ''}" href="pricing.html">Pricing</a></li>
            <!-- 6. Blog -->
            <li class="nav-item"><a class="nav-link ${isBlog ? 'active' : ''}" href="blog.html">Blog</a></li>
            <!-- 7. Contact -->
            <li class="nav-item"><a class="nav-link ${isContact ? 'active' : ''}" href="contact.html">Contact</a></li>
          </ul>

          <div class="nav-actions">
            <!-- Mode Toggle (Icon only) -->
            <button class="mode-toggle-btn icon-only" type="button" aria-label="Toggle Night Market mode" title="Toggle Night Market mode">
              <i class="bi bi-moon-stars-fill"></i>
            </button>

            <!-- RTL Toggle (RTL alone) -->
            <button class="rtl-toggle-btn text-only" type="button" aria-label="Toggle RTL layout" title="Toggle RTL layout">
              <span class="fw-bold">RTL</span>
            </button>

            <!-- Vendor Profile / Dashboard Icon Button (Placed before Login) -->
            <a href="dashboard.html" class="nav-profile-btn" title="Vendor Profile &amp; Dashboard" aria-label="Vendor Profile and Dashboard">
              <i class="bi bi-person-circle"></i>
            </a>

            <!-- Vendor Login -->
            <a href="login.html" class="nav-auth-link">
              <i class="bi bi-box-arrow-in-right"></i> Login
            </a>

            <!-- Vendor Signup -->
            <a href="vendor-signup.html" class="btn btn-brand-outline btn-sm-pill">
              <i class="bi bi-person-plus"></i> Signup
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>`;
}

// Update public pages with street-navbar
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
let updatedCount = 0;

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace header.street-navbar
  const navbarRegex = /<!-- GLOBAL NAVBAR -->[\s\S]*?<\/header>/i;
  if (navbarRegex.test(content)) {
    content = content.replace(navbarRegex, getNavbarForPage(file));
    updatedCount++;
  }

  // Update footer link from vendors.html to about.html#featured-chefs
  content = content.replace(/href="vendors\.html">Featured Chefs<\/a>/g, 'href="about.html#featured-chefs">Featured Chefs</a>');

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log(`Updated navbars across ${updatedCount} HTML pages.`);
