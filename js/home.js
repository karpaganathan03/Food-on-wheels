// js/home.js

// ==========================================
// HOME PAGE 1: The "Explorer" Layout (Current)
// ==========================================
export function renderHome1Page() {
  return `
        <!-- Enhanced Hero Section with Floating UI -->
        <section class="relative min-h-[90vh] flex items-center overflow-hidden pt-12 pb-20">
            <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[100px]"></div>
                <div class="absolute bottom-[-10%] right-[-5%] w-[30%] h-[50%] rounded-full bg-coral/20 blur-[120px]"></div>
                <div class="absolute inset-0 pattern-bg opacity-40"></div>
            </div>

            <div class="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                <div class="lg:col-span-6 space-y-8 text-center lg:text-left fade-up-element opacity-0 translate-y-10 transition-all duration-700">
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full surface border border-border shadow-sm">
                        <span class="flex h-2 w-2 relative">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                        </span>
                        <span class="text-xs font-bold uppercase tracking-wider text-muted">Over 500 trucks live right now</span>
                    </div>
                    
                    <h1 class="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                        Track down your <br/> 
                        <span class="bg-gradient-to-r from-primary to-coral bg-clip-text text-transparent">ultimate craving.</span>
                    </h1>
                    
                    <p class="text-lg text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        The premium directory and live-tracking platform for street food lovers. Discover hidden gems, view live menus, and book trucks for your next private event.
                    </p>
                    
                    <div class="p-2 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto lg:mx-0">
                        <div class="flex-1 flex items-center px-4 py-3 surface rounded-xl">
                            <i class="fa-solid fa-location-arrow text-primary mr-3"></i>
                            <input type="text" placeholder="Your location..." class="w-full bg-transparent focus:outline-none text-sm font-medium text-main">
                        </div>
                        <a href="/trucks" data-link class="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2 group cursor-pointer">
                            Explore <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                        </a>
                    </div>
                </div>

                <div class="lg:col-span-6 relative h-[500px] lg:h-[650px] w-full hidden md:block" id="hero-parallax-container">
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-[40px] overflow-hidden shadow-2xl parallax-layer" data-speed="2">
                        <img src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=1000&q=80" alt="Food Truck" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div class="absolute top-[15%] left-[5%] surface p-4 rounded-2xl shadow-2xl backdrop-blur-md border border-white/20 flex items-center gap-4 parallax-layer z-20" data-speed="4">
                        <div class="w-12 h-12 bg-warning/20 rounded-full flex items-center justify-center text-warning text-xl"><i class="fa-solid fa-star"></i></div>
                        <div><p class="text-[10px] font-bold text-muted uppercase tracking-wide">Top Rated</p><p class="font-extrabold text-main">4.9 / 5.0</p></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Trucks Grid (Same as before) -->
        <section class="container-custom py-24 fade-up-element opacity-0 translate-y-10 transition-all duration-700 border-t border-border">
            <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div class="max-w-2xl">
                    <h2 class="text-4xl font-extrabold mb-4">Trending Near You</h2>
                    <p class="text-muted text-lg">Discover the highest-rated trucks actively serving in your radius right now.</p>
                </div>
                <a href="/trucks" data-link class="group flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors bg-primary/10 px-6 py-3 rounded-full">
                    View Directory <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </a>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${generatePremiumTruckCard("Spicy Grill Cart", "Mexican", 4.8, 124, "Open Now", "Downtown Square", "$$", "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=800&q=80")}
                ${generatePremiumTruckCard("Burger Bus", "Burgers", 4.6, 89, "Moving Soon", "Tech Park", "$$", "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80")}
                ${generatePremiumTruckCard("Wok This Way", "Asian", 4.9, 210, "Sold Out", "University Campus", "$", "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&w=800&q=80")}
            </div>
        </section>
    `;
}

// ==========================================
// HOME PAGE 2: The "Platform/Vendor" Layout
// ==========================================
export function renderHome2Page() {
  return `
        <!-- Center-Aligned Hero Section -->
        <section class="relative min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden pt-24 pb-20">
            <div class="absolute inset-0 pattern-bg opacity-50 -z-10"></div>
            
            <div class="container-custom relative z-10 max-w-4xl mx-auto fade-up-element opacity-0 translate-y-10 transition-all duration-700">
                <div class="inline-flex items-center gap-2 px-6 py-2 rounded-full surface border border-primary/30 text-primary font-bold shadow-sm mb-8">
                    <i class="fa-solid fa-bolt"></i> The operating system for food trucks
                </div>
                
                <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8">
                    Manage your fleet. <br/>
                    <span class="text-muted">Delight your customers.</span>
                </h1>
                
                <p class="text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
    Food on Wheels is the all-in-one platform bridging the gap...
</p>
                
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="/register" data-link class="px-8 py-4 bg-main text-surface bg-gray-900 dark:bg-white dark:text-black rounded-xl font-bold hover:shadow-lg transition-all hover:-translate-y-1 text-lg">
                        Start 14-Day Free Trial
                    </a>
                    <a href="/community" data-link class="px-8 py-4 surface border border-border text-main rounded-xl font-bold hover:border-primary transition-all hover:-translate-y-1 text-lg flex items-center justify-center gap-2">
                        <i class="fa-solid fa-map"></i> View Live Map
                    </a>
                </div>
            </div>

            <!-- Large Dashboard Preview -->
            <div class="container-custom mt-20 fade-up-element opacity-0 translate-y-10 transition-all duration-700 delay-200">
                <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-surface bg-surface mx-auto max-w-5xl">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80" alt="Platform Dashboard" class="w-full h-auto object-cover opacity-90">
                </div>
            </div>
        </section>

        <!-- Feature Grid -->
        <section class="surface py-24 border-y border-border">
            <div class="container-custom fade-up-element opacity-0 translate-y-10 transition-all duration-700">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-extrabold mb-4">Everything you need to grow</h2>
                    <p class="text-muted text-lg">Purpose-built tools for the modern food vendor.</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="p-8 rounded-3xl bg-bg-color border border-border hover:border-primary transition-colors">
                        <div class="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-6"><i class="fa-solid fa-location-crosshairs"></i></div>
                        <h3 class="text-xl font-bold mb-3">Live GPS Tracking</h3>
                        <p class="text-muted">Broadcast your location to thousands of users instantly when you open your service window.</p>
                    </div>
                    <div class="p-8 rounded-3xl bg-bg-color border border-border hover:primary transition-colors">
                        <div class="w-14 h-14 rounded-xl bg-coral/10 text-coral flex items-center justify-center text-2xl mb-6"><i class="fa-regular fa-calendar-check"></i></div>
                        <h3 class="text-xl font-bold mb-3">Event Bookings</h3>
                        <p class="text-muted">Receive and manage private catering requests directly through your public profile.</p>
                    </div>
                    <div class="p-8 rounded-3xl bg-bg-color border border-border hover:border-primary transition-colors">
                        <div class="w-14 h-14 rounded-xl bg-info/10 text-info flex items-center justify-center text-2xl mb-6"><i class="fa-solid fa-chart-line"></i></div>
                        <h3 class="text-xl font-bold mb-3">Revenue Analytics</h3>
                        <p class="text-muted">Track your busiest hours, most popular items, and total earnings in a beautiful dashboard.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// ----------------------------------------------------
// Helper Functions
// ----------------------------------------------------
function generatePremiumTruckCard(
  name,
  cuisine,
  rating,
  reviews,
  status,
  location,
  price,
  img,
) {
  const isAvailable = status === "Open Now";
  return `
        <div class="surface rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-primary/50 transition-all duration-500 group flex flex-col h-full bg-surface relative hover:-translate-y-2">
            <div class="relative h-56 overflow-hidden">
                <img src="${img}" alt="${name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div class="absolute top-4 left-4 flex gap-2">
                    <div class="${isAvailable ? "bg-success" : "bg-warning"} text-white px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide backdrop-blur-md shadow-md flex items-center gap-1">
                        ${isAvailable ? '<span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>' : ""} ${status}
                    </div>
                </div>
                <div class="absolute bottom-4 left-4 right-4 text-white">
                    <h3 class="text-2xl font-bold mb-1 line-clamp-1">${name}</h3>
                    <p class="text-xs font-medium opacity-90"><i class="fa-solid fa-location-crosshairs mr-1"></i> ${location}</p>
                </div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <div class="flex justify-between items-center mb-4 pb-4 border-b border-border">
                    <p class="text-sm font-bold text-muted uppercase tracking-wider">${cuisine} <span class="mx-1">•</span> ${price}</p>
                    <div class="flex items-center gap-1.5 bg-warning/10 text-warning px-2.5 py-1 rounded-lg text-sm font-bold"><i class="fa-solid fa-star text-[10px]"></i> ${rating}</div>
                </div>
                <p class="text-sm text-muted mb-6 flex-grow">Based on ${reviews} reviews from the community. Usually responds to booking requests within 24 hours.</p>
                <div class="flex gap-3 mt-auto">
                    <a href="/trucks/t1" data-link class="flex-1 text-center py-3 rounded-xl font-bold text-main surface border border-border hover:border-primary hover:text-primary transition-colors text-sm">View Menu</a>
                </div>
            </div>
        </div>
    `;
}

// ----------------------------------------------------
// Shared Event Initializer
// ----------------------------------------------------
export function initHomeEvents() {
  // Parallax logic (Only exists on Home 1)
  const parallaxContainer = document.getElementById("hero-parallax-container");
  const layers = document.querySelectorAll(".parallax-layer");

  if (parallaxContainer) {
    parallaxContainer.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (clientX - centerX) / 100;
      const moveY = (clientY - centerY) / 100;

      layers.forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const x = moveX * speed;
        const y = moveY * speed;
        if (layer.classList.contains("-translate-x-1/2")) {
          layer.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        } else {
          layer.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    });

    parallaxContainer.addEventListener("mouseleave", () => {
      layers.forEach((layer) => {
        if (layer.classList.contains("-translate-x-1/2")) {
          layer.style.transform = `translate(-50%, -50%)`;
        } else {
          layer.style.transform = `translate(0px, 0px)`;
        }
      });
    });
  }

  // Scroll Reveal Animation (Works on both pages)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-10");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  document
    .querySelectorAll(".fade-up-element")
    .forEach((el) => observer.observe(el));
}
