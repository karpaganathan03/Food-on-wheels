// js/app.js
import Storage from "./storage.js";
import { initializeDatabase } from "./data.js";
import { renderHome1Page, renderHome2Page, initHomeEvents } from "./home.js";
import { renderTrucksPage } from "./trucks.js";
import { renderBlogPage } from "./blog.js";
import { renderCommunityPage, initMapEvents } from "./community.js";
import { renderLoginPage, initLoginEvents } from "./login.js";
import { renderVendorDashboard, initDashboardEvents } from "./dashboard.js";
import {
  renderAboutPage,
  renderContactPage,
  initContactEvents,
  renderPricingPage,
  initPricingEvents,
} from "./pages.js";
import { renderMenuManager, initMenuEvents } from "./menu.js";
import { renderBookingsManager, initBookingsEvents } from "./bookings.js";

class App {
  constructor() {
    this.appContent = document.getElementById("app-content");
    this.header = document.getElementById("global-header");
    this.footer = document.getElementById("global-footer");

    this.routes = {
      "/": renderHome1Page,
      "/home-1": renderHome1Page,
      "/home-2": renderHome2Page,
      "/about": renderAboutPage,
      "/contact": renderContactPage,
      "/pricing": renderPricingPage,
      "/community": renderCommunityPage,
      "/trucks": renderTrucksPage,
      "/blog": renderBlogPage,
      "/login": renderLoginPage,
      "/dashboard/vendor": () => renderVendorDashboard("overview"),
      "/dashboard/vendor/menu": () =>
        renderVendorDashboard("menu", renderMenuManager()),
      "/dashboard/vendor/bookings": () =>
        renderVendorDashboard("bookings", renderBookingsManager()),
      "/404": this.render404,
    };

    this.init();
  }

  init() {
    Storage.initTheme();
    initializeDatabase();

    this.renderHeader();
    this.renderFooter();

    document.body.addEventListener("click", (e) => {
      const link = e.target.closest("a[data-link]");
      if (link) {
        e.preventDefault();
        this.navigate(link.getAttribute("href"));
      }
    });

    window.addEventListener("popstate", () => {
      this.router();
    });
    window.addEventListener("auth-changed", () => {
      this.renderHeader();
    });

    this.router();
  }

  navigate(path) {
    window.history.pushState({}, "", path);
    this.router();
  }

  router() {
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }

    let path = window.location.pathname;
    const isDashboard = path.startsWith("/dashboard");

    if (isDashboard && !Storage.getAuth()) {
      this.navigate("/login");
      return;
    }

    if (path === "/login" && Storage.getAuth()) {
      this.navigate("/dashboard/vendor");
      return;
    }

    const renderFunc = this.routes[path] || this.routes["/404"];
    this.appContent.style.opacity = 0;

    if (isDashboard) {
      this.header.style.display = "none";
      this.footer.style.display = "none";
    } else if (path === "/community") {
      this.header.style.display = "block";
      this.footer.style.display = "none";
    } else {
      this.header.style.display = "block";
      this.footer.style.display = "block";
    }

    setTimeout(() => {
      this.appContent.innerHTML = renderFunc.call(this);
      this.appContent.style.opacity = 1;
      window.scrollTo(0, 0);

      if (!isDashboard) this.updateActiveNav(path);

      if (path === "/" || path === "/home-1" || path === "/home-2")
        initHomeEvents();
      if (path === "/community") initMapEvents();
      if (path === "/login") initLoginEvents();
      if (path === "/contact") initContactEvents();
      if (path === "/pricing") initPricingEvents();

      if (isDashboard) {
        initDashboardEvents();
        if (path === "/dashboard/vendor/menu") initMenuEvents();
        if (path === "/dashboard/vendor/bookings") initBookingsEvents();
      }
    }, 150);
  }

  updateActiveNav(path) {
    document.querySelectorAll("nav a[data-link]").forEach((link) => {
      if (link.getAttribute("href") === path) {
        link.classList.add("text-primary", "font-semibold");
      } else {
        link.classList.remove("text-primary", "font-semibold");
      }
    });
  }

  toggleMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  }

  renderHeader() {
    const auth = Storage.getAuth();
    const isDark = Storage.getTheme() === "dark";

    this.header.innerHTML = `
            <div class="container-custom py-4 flex justify-between items-center relative">
              <a href="/" data-link class="flex items-center">
    <img src="./assets/logo.svg" alt="Food on Wheels" class="h-10 w-auto transform hover:scale-105 transition-transform duration-300">
</a>
                
                <nav class="hidden lg:flex items-center gap-6 font-medium text-sm">
                    <div class="relative group py-2">
                        <button class="hover:text-primary transition-colors flex items-center gap-1">
                            Home <i class="fa-solid fa-chevron-down text-[10px]"></i>
                        </button>
                        <div class="absolute top-full left-0 w-48 surface border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <a href="/home-1" data-link class="block px-4 py-3 hover:bg-primary/10 hover:text-primary rounded-t-xl border-b border-border transition-colors">Home 1: Explorer</a>
                            <a href="/home-2" data-link class="block px-4 py-3 hover:bg-primary/10 hover:text-primary rounded-b-xl transition-colors">Home 2: Platform</a>
                        </div>
                    </div>
                    <a href="/about" data-link class="hover:text-primary transition-colors">About</a>
                    <a href="/trucks" data-link class="hover:text-primary transition-colors">Trucks</a>
                    <a href="/community" data-link class="hover:text-primary transition-colors">Map</a>
                    <a href="/pricing" data-link class="hover:text-primary transition-colors">Pricing</a>
                </nav>
                
                <div class="hidden lg:flex items-center gap-4">
                    <button id="theme-toggle" class="text-xl text-muted hover:text-primary transition-colors cursor-pointer p-2">
                        <i class="fa-solid ${isDark ? "fa-sun" : "fa-moon"}"></i>
                    </button>
                    ${
                      auth
                        ? `<a href="/dashboard/vendor" data-link class="px-5 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors shadow-md">Dashboard</a>
                           <button id="logout-btn" class="text-sm font-medium hover:text-danger transition-colors">Logout</button>`
                        : `<a href="/login" data-link class="px-5 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors shadow-md">Login / Register</a>`
                    }
                </div>
                <button id="mobile-menu-btn" class="lg:hidden text-2xl text-muted p-2"><i class="fa-solid fa-bars"></i></button>
            </div>
            
            <div id="mobile-menu" class="hidden lg:hidden absolute top-full left-0 w-full surface border-t flex flex-col p-4 shadow-lg z-50">
                <div class="py-2 mb-2 border-b border-border">
                    <p class="text-xs font-bold text-muted uppercase tracking-wider mb-2">Home Pages</p>
                    <a href="/home-1" data-link class="block py-2 pl-4 hover:text-primary border-l-2 border-transparent hover:border-primary transition-colors">Home 1: Explorer</a>
                    <a href="/home-2" data-link class="block py-2 pl-4 hover:text-primary border-l-2 border-transparent hover:border-primary transition-colors">Home 2: Platform</a>
                </div>
                <a href="/about" data-link class="py-3 border-b border-border hover:text-primary">About</a>
                <a href="/trucks" data-link class="py-3 border-b border-border hover:text-primary">Trucks Directory</a>
                <a href="/community" data-link class="py-3 border-b border-border hover:text-primary">Live Map</a>
                <a href="/pricing" data-link class="py-3 border-b border-border hover:text-primary">Pricing</a>
                <a href="/contact" data-link class="py-3 border-b border-border hover:text-primary">Contact</a>
                <div class="py-4 flex justify-between items-center border-t border-border mt-2 pt-4">
                    <button id="mobile-theme-toggle" class="text-xl text-muted"><i class="fa-solid ${isDark ? "fa-sun" : "fa-moon"}"></i> Theme</button>
                    ${
                      auth
                        ? `<a href="/dashboard/vendor" data-link class="text-primary font-bold">Dashboard</a>`
                        : `<a href="/login" data-link class="text-primary font-bold">Login</a>`
                    }
                </div>
            </div>
        `;

    document
      .getElementById("mobile-menu-btn")
      .addEventListener("click", () => this.toggleMobileMenu());
    const handleThemeToggle = () => {
      Storage.toggleTheme();
      this.renderHeader();
    };
    document
      .getElementById("theme-toggle")
      .addEventListener("click", handleThemeToggle);
    document
      .getElementById("mobile-theme-toggle")
      .addEventListener("click", handleThemeToggle);

    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        Storage.logout();
        this.renderHeader();
        this.navigate("/");
      });
    }
  }

  renderFooter() {
    const existingFooter = document.getElementById("global-footer").innerHTML;
    if (existingFooter && !existingFooter.includes("undefined")) return;

    this.footer.innerHTML = `
            <div class="container-custom grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- Brand & Socials -->
                <div>
                   <a href="/" data-link class="flex items-center mb-4">
    <img src="./assets/logo.svg" alt="Food on Wheels" class="h-12 w-auto">
</a>
                    <p class="text-muted text-sm mb-6 leading-relaxed">Connecting food lovers with the best street food experiences in your city through elite technology.</p>
                    
                    <!-- REQUIRED SOCIAL ICONS -->
                    <div class="flex gap-5">
                        <a href="https://whatsapp.com" target="_blank" class="text-xl text-muted hover:text-primary transition-colors transform hover:-translate-y-1"><i class="fa-brands fa-whatsapp"></i></a>
                        <a href="https://facebook.com" target="_blank" class="text-xl text-muted hover:text-primary transition-colors transform hover:-translate-y-1"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://instagram.com" target="_blank" class="text-xl text-muted hover:text-primary transition-colors transform hover:-translate-y-1"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://youtube.com" target="_blank" class="text-xl text-muted hover:text-primary transition-colors transform hover:-translate-y-1"><i class="fa-brands fa-youtube"></i></a>
                        <a href="https://twitter.com" target="_blank" class="text-xl text-muted hover:text-primary transition-colors transform hover:-translate-y-1"><i class="fa-brands fa-x-twitter"></i></a>
                    </div>
                </div>
                
                <!-- Links -->
                <div>
                    <h4 class="font-bold mb-5 text-main">Company</h4>
                    <ul class="space-y-3 text-sm text-muted">
                        <li><a href="/about" data-link class="hover:text-primary transition-colors">About Us</a></li>
                        <li><a href="/contact" data-link class="hover:text-primary transition-colors">Contact</a></li>
                        <li><a href="/blog" data-link class="hover:text-primary transition-colors">Food Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold mb-5 text-main">Vendors</h4>
                    <ul class="space-y-3 text-sm text-muted">
                        <li><a href="/login" data-link class="hover:text-primary transition-colors">Join as Vendor</a></li>
                        <li><a href="/pricing" data-link class="hover:text-primary transition-colors">Pricing</a></li>
                        <li><a href="/login" data-link class="hover:text-primary transition-colors">Vendor Login</a></li>
                    </ul>
                </div>
                
                <!-- Newsletter -->
                <div>
                    <h4 class="font-bold mb-5 text-main">Newsletter</h4>
                    <div class="flex border border-border focus-within:border-primary transition-colors p-1 bg-surface rounded-sm">
                        <input type="email" placeholder="Email address" class="w-full px-4 py-2 bg-transparent focus:outline-none text-sm text-main">
                        <button class="px-5 py-2 bg-primary text-white hover:bg-primary-dark transition-colors"><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            
            <div class="container-custom mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-muted font-medium">
                <p>&copy; 2026 Food on Wheels. All rights reserved.</p>
                <div class="flex gap-4 mt-4 md:mt-0">
                    <a href="#" class="hover:text-primary transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-primary transition-colors">Terms of Service</a>
                </div>
            </div>
        `;
  }
  render404() {
    return `<div class="container-custom py-32 text-center">
                    <h1 class="text-6xl font-bold text-primary mb-4">404</h1>
                    <h2 class="text-2xl font-semibold mb-6">Page Not Found</h2>
                    <a href="/" data-link class="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors">Go Home</a>
                </div>`;
  }
}

// Initialize the app immediately
window.app = new App();
