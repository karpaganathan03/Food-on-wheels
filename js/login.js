// js/login.js
import Storage from "./storage.js";

export function renderLoginPage() {
  return `
        <section class="min-h-[calc(100vh-76px)] flex items-center justify-center bg-bg-color p-4">
            <div class="w-full max-w-5xl surface rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:h-[600px]">
                
                <!-- Left Side: Visual -->
                <div class="w-full md:w-1/2 relative hidden md:block">
                    <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80" alt="Vendor Platform" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div class="absolute bottom-12 left-10 right-10">
                        <div class="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-3 shadow-md">For Vendors</div>
                        <h2 class="text-3xl font-extrabold text-white mb-2">Manage your food truck business seamlessly.</h2>
                        <p class="text-gray-300 text-sm">Join hundreds of vendors tracking live locations, menus, and incoming event bookings.</p>
                    </div>
                </div>

                <!-- Right Side: Auth Form -->
                <div class="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center relative bg-surface">
                    <div class="absolute inset-0 pattern-bg opacity-30 pointer-events-none"></div>
                    
                    <div class="relative z-10 w-full max-w-sm mx-auto">
                        <!-- Toggle Tabs -->
                        <div class="flex mb-8 border-b border-border">
                            <button class="pb-3 px-4 font-bold text-primary border-b-2 border-primary flex-1">Login</button>
                            <button class="pb-3 px-4 font-bold text-muted hover:text-main flex-1">Register</button>
                        </div>

                        <h3 class="text-2xl font-bold mb-2">Welcome back</h3>
                        <p class="text-muted text-sm mb-6">Enter your details to access the vendor dashboard. (Demo: Use any credentials)</p>

                        <form id="login-form" class="space-y-5">
                            <div>
                                <label class="block text-sm font-semibold mb-2">Email Address</label>
                                <div class="relative">
                                    <i class="fa-regular fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-muted"></i>
                                    <input type="email" id="email" required placeholder="vendor@example.com" class="w-full pl-10 pr-4 py-3 rounded-xl surface border border-border focus:outline-none focus:border-primary transition-colors text-sm">
                                </div>
                            </div>
                            
                            <div>
                                <div class="flex justify-between items-center mb-2">
                                    <label class="block text-sm font-semibold">Password</label>
                                    <a href="#" class="text-xs text-primary hover:underline">Forgot password?</a>
                                </div>
                                <div class="relative">
                                    <i class="fa-solid fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-muted"></i>
                                    <input type="password" id="password" required placeholder="••••••••" class="w-full pl-10 pr-4 py-3 rounded-xl surface border border-border focus:outline-none focus:border-primary transition-colors text-sm">
                                </div>
                            </div>

                            <button type="submit" class="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                                <span>Sign In</span> <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </form>

                        <div class="mt-8 text-center text-sm text-muted">
                            Don't have an account? <a href="#" class="text-primary font-bold hover:underline">Create a vendor profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

export function initLoginEvents() {
  const form = document.getElementById("login-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const btn = form.querySelector('button[type="submit"]');

      // Loading simulation
      btn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Authenticating...`;
      btn.classList.add("opacity-80", "cursor-not-allowed");

      setTimeout(() => {
        // Set fake auth data
        Storage.setAuth({
          id: "v1",
          name: "Demo Vendor",
          email: email,
          role: "vendor",
        });

        // Dispatch global custom event for router/header to catch
        window.dispatchEvent(new Event("auth-changed"));

        // Redirect via SPA Router
        if (window.app) {
          window.app.navigate("/dashboard/vendor");
        }
      }, 800);
    });
  }
}
