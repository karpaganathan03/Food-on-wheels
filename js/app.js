// js/app.js
import Storage from "./storage.js";
import { initializeDatabase } from "./data.js";
import { renderHome1Page, renderHome2Page, initHomeEvents } from "./home.js";
import { renderTrucksPage, initTrucksEvents } from "./trucks.js";
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

    // In constructor of App inside js/app.js:
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
      "/login": renderLoginPage, // Dedicated standalone route
      "/auth": renderLoginPage, // Optional alias
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
    // Removed global renderHeader() and renderFooter() from here.
    // The router will now handle conditional mounting.

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
      this.router();
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
    const isAuth = path === "/login" || path === "/auth";
    const isMap = path === "/community";

    // Route Guards
    if (isDashboard && !Storage.getAuth()) {
      this.navigate("/login");
      return;
    }

    if (isAuth && Storage.getAuth()) {
      this.navigate("/dashboard/vendor");
      return;
    }

    const renderFunc = this.routes[path] || this.routes["/404"];
    this.appContent.style.opacity = 0;

    // ARCHITECTURE FIX: Conditional Mounting (No display:none)
    if (isAuth || isDashboard) {
      // Completely unmount the header and footer and strip their structural classes
      this.header.innerHTML = "";
      this.header.className = "";
      this.footer.innerHTML = "";
      this.footer.className = "";
    } else {
      // Mount the global header securely for public pages
      this.header.className =
        "sticky top-0 z-50 glass-panel border-b border-border transition-all duration-300";
      this.renderHeader();

      if (isMap) {
        // Map page has no footer
        this.footer.innerHTML = "";
        this.footer.className = "";
      } else {
        // Mount global footer securely
        this.footer.className = "surface mt-auto py-12 border-t border-border";
        this.renderFooter();
      }
    }

    setTimeout(() => {
      this.appContent.innerHTML = renderFunc.call(this);
      this.appContent.style.opacity = 1;
      window.scrollTo(0, 0);

      // Re-bind active navigation only if header exists
      if (!isDashboard && !isAuth) this.updateActiveNav(path);

      // Re-initialize scripts for the loaded DOM
      if (path === "/" || path === "/home-1" || path === "/home-2")
        initHomeEvents();
      if (path === "/community") initMapEvents();
      if (isAuth) initLoginEvents();
      if (path === "/contact") initContactEvents();
      if (path === "/pricing") initPricingEvents();
      if (path === "/trucks") initTrucksEvents();

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
    const currentTheme = Storage.getTheme() || "light";
    const isDark = currentTheme === "dark";
    const currentDir = Storage.getDirection ? Storage.getDirection() : "ltr";

    this.header.innerHTML = `
            <div class="container-custom py-4 flex justify-between items-center relative">
                <!-- Logo -->
                <a href="/" data-link class="text-2xl font-heading font-bold flex items-center gap-2 text-primary">
                    <img src="./assets/logo.svg" alt="Food on Wheels" class="h-10 w-auto transform hover:scale-105 transition-transform duration-300">
                </a>
                
                <!-- Desktop Nav -->
                <nav class="hidden lg:flex items-center gap-8 font-medium text-sm text-main">
                    <div class="relative group py-2">
                        <button class="hover:text-primary transition-colors flex items-center gap-1">
                            Home <i class="fa-solid fa-chevron-down text-[10px]"></i>
                        </button>
                        <div class="absolute top-full left-0 w-48 surface border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                            <a href="/home-1" data-link class="block px-4 py-3 hover:bg-surface-soft hover:text-primary border-b border-border transition-colors">Explorer View</a>
                            <a href="/home-2" data-link class="block px-4 py-3 hover:bg-surface-soft hover:text-primary transition-colors">Platform View</a>
                        </div>
                    </div>
                    <a href="/about" data-link class="hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">About</a>
                    <a href="/trucks" data-link class="hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">Trucks</a>
                    <a href="/community" data-link class="hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">Live Map</a>
                    <a href="/pricing" data-link class="hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">Pricing</a>
                </nav>
                
                <!-- Actions, Direction & Theme Toggle -->
                <div class="hidden lg:flex items-center gap-4">
                    <!-- RTL / LTR Toggle Button -->
                    <button id="dir-toggle" aria-label="Toggle Direction" class="px-3 py-1.5 text-xs font-heading font-bold surface border border-border rounded-lg text-main hover:border-primary transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm">
                        <i class="fa-solid fa-globe text-primary text-xs"></i>
                        <span>${currentDir.toUpperCase()}</span>
                    </button>

                    <!-- Premium Theme Toggle -->
                    <button id="theme-toggle" aria-label="Toggle Theme" class="relative flex items-center p-1 w-14 h-7 rounded-full bg-surface-soft border border-border cursor-pointer transition-colors duration-300">
                        <div class="absolute w-full flex justify-between px-2 text-xs text-muted pointer-events-none">
                            <i class="fa-solid fa-moon"></i>
                            <i class="fa-solid fa-sun"></i>
                        </div>
                        <div class="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-[10px] transform transition-transform duration-300 z-10 ${isDark ? "translate-x-7" : "translate-x-0"}">
                            <i class="fa-solid ${isDark ? "fa-moon" : "fa-sun"}"></i>
                        </div>
                    </button>

                    ${
                      auth
                        ? `<a href="/dashboard/vendor" data-link class="btn-primary">Dashboard</a>
                           <button id="logout-btn" class="text-sm font-semibold text-muted hover:text-primary transition-colors">Logout</button>`
                        : `<a href="/login" data-link class="btn-primary">Login / Register</a>`
                    }
                </div>
                
                <!-- Mobile Menu Button -->
                <button id="mobile-menu-btn" class="lg:hidden text-2xl text-main p-2 hover:text-primary transition-colors"><i class="fa-solid fa-bars"></i></button>
            </div>
            
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden lg:hidden absolute top-full left-0 w-full surface border-t border-border flex flex-col p-4 shadow-xl z-50">
                <a href="/trucks" data-link class="py-3 border-b border-border text-main font-medium hover:text-primary">Trucks Directory</a>
                <a href="/community" data-link class="py-3 border-b border-border text-main font-medium hover:text-primary">Live Map</a>
                <a href="/pricing" data-link class="py-3 border-b border-border text-main font-medium hover:text-primary">Pricing</a>
                
                <div class="py-4 flex flex-wrap justify-between items-center gap-3 border-t border-border mt-2 pt-4">
                    <button id="mobile-dir-toggle" class="text-xs font-bold surface px-3 py-1.5 rounded-lg border border-border flex items-center gap-1">
                        <i class="fa-solid fa-globe text-primary"></i> ${currentDir.toUpperCase()}
                    </button>

                    <button id="mobile-theme-toggle" class="text-sm font-semibold text-main flex items-center gap-2">
                        <i class="fa-solid ${isDark ? "fa-sun" : "fa-moon"} text-primary"></i> Toggle Theme
                    </button>

                   ${
                     auth
                       ? `<a href="/dashboard/vendor" data-link class="btn-primary text-sm px-4 py-2">Dashboard</a>`
                       : `<a href="/login" data-link class="btn-primary">
                          Login / Register
                        </a>`
                   }
                </div>
            </div>
        `;

    document
      .getElementById("mobile-menu-btn")
      .addEventListener("click", () => this.toggleMobileMenu());

    // Theme Toggle Handler
    const handleThemeToggle = () => {
      Storage.toggleTheme();
      document.documentElement.setAttribute("data-theme", Storage.getTheme());
      this.renderHeader();
    };

    document
      .getElementById("theme-toggle")
      .addEventListener("click", handleThemeToggle);
    document
      .getElementById("mobile-theme-toggle")
      .addEventListener("click", handleThemeToggle);

    // Direction (RTL / LTR) Toggle Handler
    const handleDirToggle = () => {
      Storage.toggleDirection();
      this.renderHeader();
      this.router();
    };

    const dirToggle = document.getElementById("dir-toggle");
    if (dirToggle) dirToggle.addEventListener("click", handleDirToggle);

    const mobileDirToggle = document.getElementById("mobile-dir-toggle");
    if (mobileDirToggle)
      mobileDirToggle.addEventListener("click", handleDirToggle);

    // Logout Handler
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
            <div class="container-custom grid grid-cols-1 md:grid-cols-4 gap-12">
                <!-- Brand & Socials -->
                <div class="md:col-span-1">
                    <a href="/" data-link class="text-2xl font-heading font-bold flex items-center gap-2 text-primary mb-6">
                       <img src="./assets/logo.svg" alt="Food on Wheels" class="h-10 w-auto transform hover:scale-105 transition-transform duration-300">
                    </a>
                    <p class="text-muted text-sm mb-6 leading-relaxed">Connecting food lovers with the best street food experiences through elite delivery and live-tracking tech.</p>
                    
                    <div class="flex gap-4">
                        <a href="#" class="w-10 h-10 rounded-full surface-soft flex items-center justify-center text-main hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"><i class="fa-brands fa-whatsapp"></i></a>
                        <a href="#" class="w-10 h-10 rounded-full surface-soft flex items-center justify-center text-main hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="w-10 h-10 rounded-full surface-soft flex items-center justify-center text-main hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"><i class="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
                
                <!-- Links -->
                <div>
                    <h4 class="font-heading font-bold mb-6 text-main">Platform</h4>
                    <ul class="space-y-4 text-sm text-muted font-medium">
                        <li><a href="/about" data-link class="hover:text-primary transition-colors">About Us</a></li>
                        <li><a href="/trucks" data-link class="hover:text-primary transition-colors">Browse Trucks</a></li>
                        <li><a href="/community" data-link class="hover:text-primary transition-colors">Live Map Tracking</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-heading font-bold mb-6 text-main">Vendors</h4>
                    <ul class="space-y-4 text-sm text-muted font-medium">
                        <li><a href="/login" data-link class="hover:text-primary transition-colors">Partner With Us</a></li>
                        <li><a href="/pricing" data-link class="hover:text-primary transition-colors">Platform Pricing</a></li>
                        <li><a href="/login" data-link class="hover:text-primary transition-colors">Vendor Login</a></li>
                    </ul>
                </div>
                
                <!-- Newsletter -->
                <div>
                    <h4 class="font-heading font-bold mb-6 text-main">Get Updates</h4>
                    <p class="text-sm text-muted mb-4">Subscribe for the latest truck locations.</p>
                    
                    <div class="flex w-full overflow-hidden rounded-md border border-border bg-surface shadow-sm focus-within:border-primary transition-colors">
                        <input type="email" placeholder="Email address..." class="w-full bg-transparent px-4 py-3 text-sm text-main focus:outline-none">
                        <button class="bg-primary px-6 py-3 text-white hover:bg-primary-hover transition-colors font-semibold">
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="container-custom mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted font-medium">
                <p>&copy; 2026 Food on Wheels. All rights reserved.</p>
                <div class="flex gap-6 mt-4 md:mt-0">
                    <a href="#" class="hover:text-main transition-colors">Privacy</a>
                    <a href="#" class="hover:text-main transition-colors">Terms</a>
                </div>
            </div>
        `;
  }

  render404() {
    return `<div class="container-custom py-32 text-center">
                    <h1 class="text-6xl font-heading font-bold text-primary mb-4">404</h1>
                    <h2 class="text-2xl font-semibold mb-6">Page Not Found</h2>
                    <a href="/" data-link class="btn-primary">Go Home</a>
                </div>`;
  }
}

// Initialize the app immediately
window.app = new App();
