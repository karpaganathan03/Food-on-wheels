// js/dashboard.js
import Storage from "./storage.js";

// The Overview Chart content from Step 6 is moved into a helper
function renderOverviewContent(userName) {
  return `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div class="surface p-6 rounded-2xl shadow-sm border border-border flex items-center justify-between group hover:border-primary transition-colors">
                <div><p class="text-xs font-semibold text-muted uppercase mb-1">Revenue</p><h3 class="text-2xl font-extrabold text-main mb-2">$1,240.00</h3><span class="bg-success/10 text-success text-[10px] px-2 py-0.5 rounded font-bold">+12.5%</span></div>
                <div class="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl group-hover:scale-110 transition-transform"><i class="fa-solid fa-wallet"></i></div>
            </div>
            <div class="surface p-6 rounded-2xl shadow-sm border border-border flex items-center justify-between group hover:border-primary transition-colors">
                <div><p class="text-xs font-semibold text-muted uppercase mb-1">Orders</p><h3 class="text-2xl font-extrabold text-main mb-2">142</h3><span class="bg-success/10 text-success text-[10px] px-2 py-0.5 rounded font-bold">+5.2%</span></div>
                <div class="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl group-hover:scale-110 transition-transform"><i class="fa-solid fa-receipt"></i></div>
            </div>
        </div>
        <div class="surface p-6 rounded-2xl shadow-sm border border-border text-center">
            <i class="fa-solid fa-chart-line text-6xl text-primary/20 mb-4"></i>
            <h3 class="text-lg font-bold">Analytics Active</h3>
            <p class="text-muted text-sm">Navigate to Menu or Bookings using the sidebar to test CRUD functionality.</p>
        </div>
    `;
}

export function renderVendorDashboard(
  activeRoute = "overview",
  customContent = null,
) {
  const user = Storage.getAuth();
  const userName = user ? user.name : "Vendor";

  const innerContent = customContent
    ? customContent
    : renderOverviewContent(userName);

  return `
        <div class="flex h-screen w-full bg-bg-color overflow-hidden font-sans">
            <div id="sidebar-overlay" class="fixed inset-0 bg-black/50 z-40 hidden md:hidden backdrop-blur-sm transition-opacity"></div>

            <aside id="dashboard-sidebar" class="fixed inset-y-0 left-0 z-50 w-64 surface border-r border-border transform -translate-x-full md:translate-x-0 md:relative transition-transform duration-300 flex flex-col">
                <div class="h-16 flex items-center px-6 border-b border-border justify-between">
                    <a href="/" data-link class="text-xl font-bold flex items-center gap-2 text-primary">
                        <i class="fa-solid fa-truck-fast"></i> FoodTruck
                    </a>
                    <button id="close-sidebar" class="md:hidden text-muted hover:text-danger"><i class="fa-solid fa-xmark text-xl"></i></button>
                </div>
                <nav class="flex-1 overflow-y-auto py-4 px-3 space-y-1 no-scrollbar">
                    <p class="px-3 text-xs font-bold text-muted uppercase tracking-wider mb-2 mt-4">Menu</p>
                    <a href="/dashboard/vendor" data-link class="flex items-center gap-3 px-3 py-2.5 rounded-lg ${activeRoute === "overview" ? "bg-primary/10 text-primary font-bold" : "text-muted hover:bg-surface hover:text-main font-medium"} transition-colors">
                        <i class="fa-solid fa-chart-pie w-5"></i> Overview
                    </a>
                    <a href="/dashboard/vendor/menu" data-link class="flex items-center gap-3 px-3 py-2.5 rounded-lg ${activeRoute === "menu" ? "bg-primary/10 text-primary font-bold" : "text-muted hover:bg-surface hover:text-main font-medium"} transition-colors">
                        <i class="fa-solid fa-utensils w-5"></i> Menu Manager
                    </a>

                    <p class="px-3 text-xs font-bold text-muted uppercase tracking-wider mb-2 mt-6">Sales & Events</p>
                    <a href="/dashboard/vendor/bookings" data-link class="flex items-center gap-3 px-3 py-2.5 rounded-lg ${activeRoute === "bookings" ? "bg-primary/10 text-primary font-bold" : "text-muted hover:bg-surface hover:text-main font-medium"} transition-colors justify-between">
                        <div class="flex items-center gap-3"><i class="fa-regular fa-calendar-check w-5"></i> Bookings</div>
                    </a>
                </nav>
                <div class="p-4 border-t border-border">
                    <button id="dashboard-logout" class="w-full flex items-center justify-center gap-2 px-4 py-2 bg-danger/10 text-danger rounded-lg font-bold hover:bg-danger hover:text-white transition-colors">
                        <i class="fa-solid fa-right-from-bracket"></i> Logout
                    </button>
                </div>
            </aside>

            <div class="flex-1 flex flex-col h-screen overflow-hidden relative">
                <header class="h-16 surface border-b border-border flex items-center justify-between px-4 lg:px-8 z-10">
                    <div class="flex items-center gap-4">
                        <button id="open-sidebar" class="md:hidden text-muted hover:text-primary text-xl"><i class="fa-solid fa-bars"></i></button>
                        <h1 class="text-lg font-bold hidden sm:block">Good morning, ${userName}! 👋</h1>
                    </div>
                    <div class="flex items-center gap-4">
                        <button id="dash-theme-toggle" class="w-8 h-8 rounded-full surface border border-border flex items-center justify-center text-muted hover:text-primary transition-colors">
                            <i class="fa-solid fa-moon"></i>
                        </button>
                        <div class="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center shadow-md">${userName.charAt(0)}</div>
                    </div>
                </header>

                <main class="flex-1 overflow-x-hidden overflow-y-auto bg-bg-color p-4 lg:p-8 relative">
                    <div class="absolute inset-0 pattern-bg opacity-30 pointer-events-none"></div>
                    <div class="relative z-10 max-w-7xl mx-auto">
                        ${innerContent}
                    </div>
                </main>
            </div>
        </div>
    `;
}

export function initDashboardEvents() {
  const sidebar = document.getElementById("dashboard-sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const openBtn = document.getElementById("open-sidebar");
  const closeBtn = document.getElementById("close-sidebar");
  const themeBtn = document.getElementById("dash-theme-toggle");
  const logoutBtn = document.getElementById("dashboard-logout");

  const toggleSidebar = () => {
    const isOpen = !sidebar.classList.contains("-translate-x-full");
    if (isOpen) {
      sidebar.classList.add("-translate-x-full");
      overlay.classList.add("hidden");
    } else {
      sidebar.classList.remove("-translate-x-full");
      overlay.classList.remove("hidden");
    }
  };

  if (openBtn) openBtn.addEventListener("click", toggleSidebar);
  if (closeBtn) closeBtn.addEventListener("click", toggleSidebar);
  if (overlay) overlay.addEventListener("click", toggleSidebar);

  if (themeBtn) {
    themeBtn.innerHTML =
      Storage.getTheme() === "dark"
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
    themeBtn.addEventListener("click", () => {
      const newTheme = Storage.toggleTheme();
      themeBtn.innerHTML =
        newTheme === "dark"
          ? '<i class="fa-solid fa-sun"></i>'
          : '<i class="fa-solid fa-moon"></i>';
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      Storage.logout();
      window.dispatchEvent(new Event("auth-changed"));
      window.app.navigate("/");
    });
  }
}
