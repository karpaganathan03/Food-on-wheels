const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, "..");

const modernFooterHTML = `  <!-- GLOBAL FOOTER -->
  <footer class="street-footer">
    <div class="container">
      <!-- Footer CTA Card -->
      <div class="footer-cta-card">
        <div class="row align-items-center g-4">
          <div class="col-lg-8">
            <h3 class="text-white mb-1">Have a Food Truck? Share Your Cooking with the City.</h3>
            <p class="mb-0">Join 500+ independent food truck operators reaching thousands of hungry diners daily.</p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <a href="vendor-signup.html" class="btn btn-brand-secondary">List Your Food Truck Today</a>
          </div>
        </div>
      </div>

      <div class="row g-4">
        <!-- Col 1: Brand Info -->
        <div class="col-lg-3">
          <a class="navbar-brand mb-3" href="index.html">
            <img class="brand-logo-image" src="assets/images/Logo.png" alt="StreetFeast - Food Truck &amp; Taste">
          </a>
          <p class="footer-brand-desc mb-3 pe-lg-2">
            The premier digital food truck booking &amp; discovery platform. Connecting street food lovers with live curbside kitchens, food festivals, and private catering events.
          </p>
          <div class="d-flex gap-2 mb-4 mb-lg-0">
            <a href="#" class="footer-social-link" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="footer-social-link" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="footer-social-link" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
            <a href="#" class="footer-social-link" aria-label="Twitter"><i class="bi bi-twitter-x"></i></a>
          </div>
        </div>

        <!-- Col 2: Discover -->
        <div class="col-6 col-md-3 col-lg-2">
          <h5>Discover</h5>
          <ul class="footer-links">
            <li><a href="directory.html"><i class="bi bi-chevron-right small"></i> Food Truck Directory</a></li>
            <li><a href="directory.html?filter=nearby"><i class="bi bi-chevron-right small"></i> Nearby Trucks</a></li>
            <li><a href="menu.html"><i class="bi bi-chevron-right small"></i> Signature Cuisines</a></li>
            <li><a href="events.html"><i class="bi bi-chevron-right small"></i> Festivals &amp; Markets</a></li>
            <li><a href="about.html#featured-chefs"><i class="bi bi-chevron-right small"></i> Featured Chefs</a></li>
          </ul>
        </div>

        <!-- Col 3: For Vendors -->
        <div class="col-6 col-md-3 col-lg-2">
          <h5>For Vendors</h5>
          <ul class="footer-links">
            <li><a href="vendor-signup.html"><i class="bi bi-chevron-right small"></i> List Your Truck</a></li>
            <li><a href="vendor-signup.html"><i class="bi bi-chevron-right small"></i> Vendor Signup</a></li>
            <li><a href="pricing.html"><i class="bi bi-chevron-right small"></i> Vendor Plans</a></li>
            <li><a href="login.html"><i class="bi bi-chevron-right small"></i> Command Center</a></li>
            <li><a href="blog.html"><i class="bi bi-chevron-right small"></i> Vendor Academy</a></li>
          </ul>
        </div>

        <!-- Col 4: Popular Cuisines -->
        <div class="col-6 col-md-3 col-lg-2">
          <h5>Popular Cuisines</h5>
          <ul class="footer-links">
            <li><a href="directory.html?cuisine=burgers"><i class="bi bi-chevron-right small"></i> Gourmet Burgers</a></li>
            <li><a href="directory.html?cuisine=tacos"><i class="bi bi-chevron-right small"></i> Birria Tacos</a></li>
            <li><a href="directory.html?cuisine=pizza"><i class="bi bi-chevron-right small"></i> Wood-Fired Pizza</a></li>
            <li><a href="directory.html?cuisine=asian"><i class="bi bi-chevron-right small"></i> Asian &amp; Baos</a></li>
            <li><a href="directory.html?cuisine=vegan"><i class="bi bi-chevron-right small"></i> 100% Plant Vegan</a></li>
          </ul>
        </div>

        <!-- Col 5: Newsletter & Contact -->
        <div class="col-12 col-md-6 col-lg-3">
          <h5>Contact</h5>
          <ul class="list-unstyled mb-3">
            <li class="footer-contact-item">
              <i class="bi bi-geo-alt-fill text-primary-custom"></i>
              <span>742 Culinary Boulevard, Austin, TX</span>
            </li>
            <li class="footer-contact-item">
              <i class="bi bi-envelope-fill text-primary-custom"></i>
              <a href="mailto:hello@streetfeast.com" class="text-reset">hello@streetfeast.com</a>
            </li>
            <li class="footer-contact-item">
              <i class="bi bi-telephone-fill text-primary-custom"></i>
              <a href="tel:+18004588782" class="text-reset">+1 (800) 458-TRUCK</a>
            </li>
          </ul>
          <div class="mt-3">
            <label class="footer-newsletter-label">Get Weekly Food Picks</label>
            <form class="footer-newsletter-wrap needs-validation" novalidate>
              <input type="email" class="form-control footer-newsletter-input" placeholder="Enter your email" required aria-label="Enter your email">
              <button class="btn btn-brand-primary footer-newsletter-btn" type="submit">Join</button>
            </form>
          </div>
        </div>
      </div>

      <div class="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div class="footer-copyright">
          &copy; 2026 <strong class="text-white">StreetFeast Platform</strong>. All Rights Reserved. Built with HTML5, CSS3, Vanilla JS &amp; Bootstrap 5.
        </div>
        <div class="d-flex gap-4 footer-legal-links">
          <a href="about.html">Privacy Policy</a>
          <a href="about.html">Terms of Service</a>
          <a href="contact.html">Support Desk</a>
        </div>
      </div>
    </div>
  </footer>`;

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
let count = 0;

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  const footerRegex = /<!-- GLOBAL FOOTER -->[\s\S]*?<\/footer>/i;
  if (footerRegex.test(content)) {
    content = content.replace(footerRegex, modernFooterHTML);
    fs.writeFileSync(filePath, content, 'utf8');
    count++;
  }
});

console.log(`Updated footer on ${count} HTML pages.`);
