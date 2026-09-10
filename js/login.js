// js/login.js
import Storage from "./storage.js";

export function renderLoginPage() {
  const currentTheme = Storage.getTheme() || "light";
  const isDark = currentTheme === "dark";
  const currentDir = Storage.getDirection ? Storage.getDirection() : "ltr";

  return `
        <section class="relative min-h-screen flex items-center justify-center pattern-bg py-12">
            
            <!-- Standalone Back to Home Navigation (Top Left) -->
            <div class="absolute top-6 left-6 start:left-6 rtl:right-6 rtl:left-auto z-10">
                <a href="/" data-link class="inline-flex items-center gap-2 px-4 py-2 surface border border-border rounded-xl text-sm font-bold text-main hover:border-primary hover:text-primary transition-all shadow-sm">
                    <i class="fa-solid fa-arrow-left rtl:rotate-180"></i> Back to Home
                </a>
            </div>

            <!-- Standalone Toggles (Top Right) -->
            <div class="absolute top-6 right-6 start:right-6 rtl:left-6 rtl:right-auto z-10 flex items-center gap-4">
                <!-- RTL / LTR Toggle -->
                <button id="auth-dir-toggle" aria-label="Toggle Direction" class="px-3 py-1.5 text-xs font-heading font-bold surface border border-border rounded-lg text-main hover:border-primary transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm">
                    <i class="fa-solid fa-globe text-primary text-xs"></i>
                    <span>${currentDir.toUpperCase()}</span>
                </button>

                <!-- Premium Theme Toggle -->
                <button id="auth-theme-toggle" aria-label="Toggle Theme" class="relative flex items-center p-1 w-14 h-7 rounded-full bg-surface-soft border border-border cursor-pointer transition-colors duration-300 shadow-sm">
                    <div class="absolute w-full flex justify-between px-2 text-xs text-muted pointer-events-none">
                        <i class="fa-solid fa-moon"></i>
                        <i class="fa-solid fa-sun"></i>
                    </div>
                    <div class="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-[10px] transform transition-transform duration-300 z-10 ${isDark ? "translate-x-7 rtl:-translate-x-7" : "translate-x-0"}">
                        <i class="fa-solid ${isDark ? "fa-moon" : "fa-sun"}"></i>
                    </div>
                </button>
            </div>

            <!-- Auth Container -->
            <div class="container-custom max-w-md w-full mx-auto px-4 relative z-10">
                <div class="surface rounded-3xl p-8 md:p-10 shadow-2xl border border-border">
                    
                    <!-- Header with Restored Logo -->
                    <div class="text-center mb-8">
                        <img src="./assets/logo.svg" alt="Food on Wheels" class="h-12 w-auto mx-auto mb-6 transform hover:scale-105 transition-transform duration-300" onerror="this.outerHTML='<div class=\\'text-2xl font-heading font-bold text-primary flex justify-center items-center gap-2 mb-6\\'><i class=\\'fa-solid fa-truck-fast\\'></i> Food on Wheels</div>'">
                        
                        <h1 class="text-2xl md:text-3xl font-heading font-bold text-main" id="auth-title">Welcome Back</h1>
                        <p class="text-sm text-muted mt-2" id="auth-subtitle">Log in to manage your food truck or orders</p>
                    </div>

                    <!-- Mode Toggle Tabs -->
                    <div class="flex p-1 bg-surface-soft rounded-xl mb-6 border border-border">
                        <button id="tab-login" class="flex-1 py-2 text-xs font-heading font-bold rounded-lg transition-all text-white bg-primary shadow-sm">
                            Sign In
                        </button>
                        <button id="tab-register" class="flex-1 py-2 text-xs font-heading font-bold rounded-lg transition-all text-muted hover:text-main">
                            Register
                        </button>
                    </div>

                    <!-- Form Container -->
                    <form id="auth-form" class="space-y-4">
                        <div id="name-group" class="hidden">
                            <label class="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Full Name</label>
                            <div class="relative flex items-center">
                                <i class="fa-solid fa-user absolute left-4 start:left-4 rtl:right-4 rtl:left-auto text-muted text-xs"></i>
                                <input type="text" id="auth-name" placeholder="John Doe" class="w-full px-10 py-3 rounded-xl surface border border-border focus:outline-none focus:border-primary text-sm text-main">
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Email Address</label>
                            <div class="relative flex items-center">
                                <i class="fa-solid fa-envelope absolute left-4 start:left-4 rtl:right-4 rtl:left-auto text-muted text-xs"></i>
                                <input type="email" id="auth-email" required placeholder="vendor@foodonwheels.com" class="w-full px-10 py-3 rounded-xl surface border border-border focus:outline-none focus:border-primary text-sm text-main">
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Password</label>
                            <div class="relative flex items-center">
                                <i class="fa-solid fa-key absolute left-4 start:left-4 rtl:right-4 rtl:left-auto text-muted text-xs"></i>
                                <input type="password" id="auth-password" required placeholder="••••••••" class="w-full px-10 py-3 rounded-xl surface border border-border focus:outline-none focus:border-primary text-sm text-main">
                            </div>
                        </div>

                        <div id="role-group" class="hidden">
                            <label class="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Account Type</label>
                            <select id="auth-role" class="w-full px-4 py-3 rounded-xl surface border border-border focus:outline-none focus:border-primary text-sm text-main bg-surface">
                                <option value="customer">Foodie / Customer</option>
                                <option value="vendor">Food Truck Owner / Chef</option>
                            </select>
                        </div>

                        <button type="submit" id="auth-submit-btn" class="w-full btn-primary py-3 rounded-xl font-bold shadow-md mt-6 flex items-center justify-center gap-2">
                            <span>Sign In</span>
                            <i class="fa-solid fa-arrow-right rtl:rotate-180"></i>
                        </button>
                    </form>

                    <!-- Quick Demo Credentials helper -->
                    <div class="mt-8 pt-6 border-t border-border text-center">
                        <p class="text-[11px] text-muted mb-2 font-medium">Quick Vendor Demo:</p>
                        <button id="quick-demo-btn" class="text-xs text-primary font-bold hover:underline">
                            Auto-fill Vendor Credentials
                        </button>
                    </div>
                </div>
            </div>
        </section>
    `;
}

export function initLoginEvents() {
  const form = document.getElementById("auth-form");
  if (!form) return;

  // --- High-Level QA: Bind Missing Toggles ---
  const dirToggle = document.getElementById("auth-dir-toggle");
  if (dirToggle) {
    dirToggle.addEventListener("click", () => {
      Storage.toggleDirection();
      window.app.router(); // Triggers a re-render to apply RTL changes dynamically
    });
  }

  const themeToggle = document.getElementById("auth-theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      Storage.toggleTheme();
      document.documentElement.setAttribute("data-theme", Storage.getTheme());
      window.app.router(); // Triggers a re-render to update the toggle's sun/moon icon
    });
  }

  // --- Standard Auth Form Events ---
  let isRegisterMode = false;
  const tabLogin = document.getElementById("tab-login");
  const tabRegister = document.getElementById("tab-register");
  const title = document.getElementById("auth-title");
  const subtitle = document.getElementById("auth-subtitle");
  const nameGroup = document.getElementById("name-group");
  const roleGroup = document.getElementById("role-group");
  const submitBtn = document.getElementById("auth-submit-btn");
  const emailInput = document.getElementById("auth-email");
  const passInput = document.getElementById("auth-password");
  const nameInput = document.getElementById("auth-name");
  const quickDemoBtn = document.getElementById("quick-demo-btn");

  const toggleMode = (register) => {
    isRegisterMode = register;
    if (isRegisterMode) {
      tabRegister.className =
        "flex-1 py-2 text-xs font-heading font-bold rounded-lg transition-all text-white bg-primary shadow-sm";
      tabLogin.className =
        "flex-1 py-2 text-xs font-heading font-bold rounded-lg transition-all text-muted hover:text-main";
      title.textContent = "Create an Account";
      subtitle.textContent = "Join the platform to discover or track trucks";
      nameGroup.classList.remove("hidden");
      roleGroup.classList.remove("hidden");
      submitBtn.querySelector("span").textContent = "Create Account";
    } else {
      tabLogin.className =
        "flex-1 py-2 text-xs font-heading font-bold rounded-lg transition-all text-white bg-primary shadow-sm";
      tabRegister.className =
        "flex-1 py-2 text-xs font-heading font-bold rounded-lg transition-all text-muted hover:text-main";
      title.textContent = "Welcome Back";
      subtitle.textContent = "Log in to manage your food truck or orders";
      nameGroup.classList.add("hidden");
      roleGroup.classList.add("hidden");
      submitBtn.querySelector("span").textContent = "Sign In";
    }
  };

  tabLogin.addEventListener("click", () => toggleMode(false));
  tabRegister.addEventListener("click", () => toggleMode(true));

  quickDemoBtn.addEventListener("click", () => {
    toggleMode(false);
    emailInput.value = "vendor@foodonwheels.com";
    passInput.value = "password123";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const role = isRegisterMode
      ? document.getElementById("auth-role").value
      : "vendor";
    const name = isRegisterMode
      ? nameInput.value.trim() || "Vendor Owner"
      : "Food Truck Admin";

    const authData = {
      email: emailInput.value.trim(),
      name: name,
      role: role,
      token: "mock-jwt-token-" + Date.now(),
    };

    Storage.setAuth(authData);
    window.dispatchEvent(new CustomEvent("auth-changed"));
    window.app.navigate("/dashboard/vendor");
  });
}
