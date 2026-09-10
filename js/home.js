// js/home.js
import Storage from "./storage.js";
import { initialData } from "./data.js";

// Premium Card Generator Function
function generatePremiumTruckCard(
  name,
  cuisine,
  rating,
  reviews,
  status,
  location,
  priceRange,
  imagePath,
) {
  const statusColor =
    status === "Open Now"
      ? "bg-success"
      : status === "Sold Out" || status === "Closed"
        ? "bg-danger"
        : "bg-warning";

  return `
    <div class="truck-card group flex flex-col h-full cursor-pointer">
        <div class="relative h-48 overflow-hidden bg-surface-soft">
            <img src="${imagePath}" alt="${name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] uppercase tracking-wide font-bold text-white shadow-md ${statusColor}">
                <i class="fa-solid fa-circle text-[8px] mr-1 animate-pulse"></i> ${status}
            </div>
        </div>
        <div class="p-5 flex flex-col flex-grow bg-surface">
            <div class="flex justify-between items-start mb-2">
                <h3 class="font-heading font-bold text-xl text-main line-clamp-1">${name}</h3>
                <div class="flex items-center gap-1 bg-main text-surface px-2 py-1 rounded-md text-xs font-bold shadow-sm">
                    <i class="fa-solid fa-star text-secondary"></i> ${rating}
                </div>
            </div>
            <p class="text-[11px] text-primary font-bold mb-3 uppercase tracking-wider">${cuisine} • ${priceRange}</p>
            <p class="text-sm text-muted mb-4 flex-grow"><i class="fa-solid fa-location-dot mr-1"></i> ${location}</p>
            <p class="text-xs text-muted mb-5 border-t border-border pt-4">Based on ${reviews} reviews from the community. Usually responds to booking requests within 24 hours.</p>
            <button class="w-full py-2.5 rounded-xl font-heading font-semibold text-main border border-border hover:border-primary hover:text-primary transition-all text-sm mt-auto shadow-sm">
                View Menu
            </button>
        </div>
    </div>
    `;
}

// ==========================================
// HOME 1: THE EXPLORER (CUSTOMER) VIEW
// ==========================================
export function renderHome1Page() {
  return `
        <!-- Hero Section -->
        <section class="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
            <div class="container-custom relative z-10">
                <!-- 12-Column Grid for Perfect Alignment -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                    
                    <!-- Left Content (Text & Search) -->
                    <div class="lg:col-span-6 xl:col-span-5 flex flex-col items-start space-y-6 text-left w-full">
                        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-soft border border-border text-[10px] font-bold tracking-wider uppercase text-muted shadow-sm">
                            <span class="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                            Over 500 trucks live right now
                        </div>
                      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-main leading-[1.1] tracking-tight">
    Find us. <br>
    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Feed your craving.</span>
</h1>
                        
                        <p class="text-lg text-muted leading-relaxed max-w-md">
                            The premium directory and live-tracking platform for street food lovers. Discover hidden gems, view live menus, and book trucks for your next private event.
                        </p>
                        
                        <!-- Search Box -->
                        <div class="w-full max-w-md mt-2">
                            <form id="home-search-form" class="flex flex-col sm:flex-row items-center bg-surface border border-border p-1.5 rounded-2xl shadow-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                                <div class="flex items-center flex-grow w-full px-4 py-3 sm:py-0">
                                    <i class="fa-solid fa-location-arrow text-primary mr-3"></i>
                                    <input type="text" placeholder="Your location..." class="w-full bg-transparent text-main placeholder-muted focus:outline-none text-sm font-medium">
                                </div>
                                <button type="submit" class="w-full sm:w-auto mt-2 sm:mt-0 btn-primary whitespace-nowrap rounded-xl shadow-md flex items-center justify-center">
                                    Explore <i class="fa-solid fa-arrow-right ml-2"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    
                    <!-- Right Content (Hero Image) -->
                    <div class="lg:col-span-6 xl:col-span-7 relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0">
                        <!-- Image Container: Uses h-auto so it respects your photo's real shape -->
                        <div class="relative w-full lg:max-w-[95%] rounded-3xl overflow-hidden shadow-2xl border border-border">
                            <img src="./assets/images/grill.jpg" alt="Featured Food Truck" class="w-full h-auto max-h-[500px] object-cover block transform hover:scale-105 transition-transform duration-700 ease-out" onerror="this.src='https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=800&q=80'">
                        </div>
                        <!-- Soft background glow -->
                        <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 blur-3xl rounded-full pointer-events-none z-0"></div>
                    </div>
                    
                </div>
            </div>
        </section>

        <!-- Featured Trucks Section -->
        <section class="py-20 bg-main">
            <div class="container-custom">
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
                    <div>
                        <h2 class="text-3xl font-heading font-bold text-main mb-2">Featured Trucks</h2>
                        <p class="text-muted">Top-rated street food experiences near you.</p>
                    </div>
                    <a href="/trucks" data-link class="hidden sm:inline-flex items-center text-primary font-bold hover:text-primary-hover transition-colors">
                        View all <i class="fa-solid fa-arrow-right ml-2"></i>
                    </a>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${generatePremiumTruckCard("Spicy Grill Cart", "Mexican", 4.8, 124, "Open Now", "Downtown Square", "$200", "assets/images/grill.jpg")}
                    ${generatePremiumTruckCard("Burger Bus", "Burgers", 4.6, 89, "Moving Soon", "Tech Park", "$145", "assets/images/burger.jpg")}
                    ${generatePremiumTruckCard("Wok This Way", "Asian", 4.9, 210, "Sold Out", "University Campus", "$150", "assets/images/wok.jpg")}
                </div>
                
                <div class="mt-10 text-center sm:hidden">
                    <a href="/trucks" data-link class="btn-secondary w-full inline-block">View all trucks</a>
                </div>
            </div>
        </section>

        <!-- How It Works Section -->
        <section class="py-20 bg-surface-soft border-y border-border">
            <div class="container-custom">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-heading font-bold text-main mb-4">How It Works</h2>
                    <p class="text-muted max-w-xl mx-auto">Three simple steps to satisfy your street food cravings with live tracking.</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="surface p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
                        <div class="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <h3 class="text-xl font-heading font-bold text-main mb-3">1. Locate</h3>
                        <p class="text-muted text-sm leading-relaxed">Find top-rated food trucks currently serving near you on our live tracking map.</p>
                    </div>
                    <div class="surface p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
                        <div class="w-16 h-16 mx-auto bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm">
                            <i class="fa-solid fa-utensils"></i>
                        </div>
                        <h3 class="text-xl font-heading font-bold text-main mb-3">2. Order</h3>
                        <p class="text-muted text-sm leading-relaxed">Browse digital menus, customize your meal, and place your order securely online.</p>
                    </div>
                    <div class="surface p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
                        <div class="w-16 h-16 mx-auto bg-accent/10 text-accent rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm">
                            <i class="fa-solid fa-motorcycle"></i>
                        </div>
                        <h3 class="text-xl font-heading font-bold text-main mb-3">3. Track</h3>
                        <p class="text-muted text-sm leading-relaxed">Get live ETA updates and track your food from the truck's window to your hands.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// ==========================================
// HOME 2: THE PLATFORM (VENDOR/SAAS) VIEW
// ==========================================
export function renderHome2Page() {
  return `
        <!-- SaaS Hero Section -->
        <section class="relative pt-16 pb-24 overflow-hidden bg-main border-b border-border">
            <div class="absolute inset-0 pattern-bg opacity-10 pointer-events-none"></div>
            <div class="container-custom relative z-10 text-center max-w-4xl mx-auto">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full surface border border-border text-xs font-bold tracking-wider uppercase text-primary mb-8 shadow-sm">
                    <i class="fa-solid fa-rocket"></i> Food on Wheels Vendor Platform
                </div>
                
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-main leading-[1.2] tracking-tight mb-6">
                    The all-in-one operating system for <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">street food businesses.</span>
                </h1>
                
                <p class="text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
                    Food on Wheels is the elite platform bridging the gap between passionate chefs and hungry communities. Manage menus, track live locations, and scale your sales.
                </p>
                
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="/login" data-link class="btn-primary w-full sm:w-auto px-8 py-3 text-lg">Partner With Us</a>
                    <a href="/dashboard/vendor" data-link class="btn-secondary w-full sm:w-auto px-8 py-3 text-lg">Vendor Dashboard</a>
                </div>
            </div>
        </section>

        <!-- Platform Features -->
        <section class="py-24 bg-surface-soft">
            <div class="container-custom">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-heading font-bold text-main mb-4">Built for Mobile Kitchens</h2>
                    <p class="text-muted max-w-xl mx-auto">Everything you need to run your food truck smoothly in one unified dashboard.</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="surface p-8 text-left rounded-2xl shadow-sm border border-border transform hover:-translate-y-2 transition-transform duration-300">
                        <div class="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-xl mb-6">
                            <i class="fa-solid fa-chart-line"></i>
                        </div>
                        <h3 class="text-xl font-heading font-bold text-main mb-3">Live Order Management</h3>
                        <p class="text-muted text-sm leading-relaxed">Process orders in real-time, update prep times, and notify customers instantly via SMS or push notifications.</p>
                    </div>
                    <div class="surface p-8 text-left rounded-2xl shadow-sm border border-border transform hover:-translate-y-2 transition-transform duration-300">
                        <div class="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center text-xl mb-6">
                            <i class="fa-solid fa-satellite-dish"></i>
                        </div>
                        <h3 class="text-xl font-heading font-bold text-main mb-3">GPS Live Tracking</h3>
                        <p class="text-muted text-sm leading-relaxed">Broadcast your exact location to the community map so customers never have to guess where you are parked today.</p>
                    </div>
                    <div class="surface p-8 text-left rounded-2xl shadow-sm border border-border transform hover:-translate-y-2 transition-transform duration-300">
                        <div class="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center text-xl mb-6">
                            <i class="fa-solid fa-qrcode"></i>
                        </div>
                        <h3 class="text-xl font-heading font-bold text-main mb-3">Contactless Menus</h3>
                        <p class="text-muted text-sm leading-relaxed">Generate QR codes for instant digital menus. Update items and mark them "Sold Out" on the fly without reprinting.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// ==========================================
// EVENTS INITIALIZATION
// ==========================================
export function initHomeEvents() {
  const searchForm = document.getElementById("home-search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      window.history.pushState({}, "", "/trucks");
      window.dispatchEvent(new PopStateEvent("popstate"));
    });
  }
}
