// js/pages.js
import Storage from "./storage.js";

// ==========================================
// ABOUT PAGE
// ==========================================
export function renderAboutPage() {
  return `
        <!-- Hero Section -->
        <section class="bg-primary/5 border-b border-border py-20 text-center relative overflow-hidden">
            <div class="absolute inset-0 pattern-bg opacity-30"></div>
            <div class="container-custom relative z-10">
                <h1 class="text-5xl font-extrabold mb-6">Revolutionizing Street Food.</h1>
               <p class="text-xl text-muted max-w-2xl mx-auto">We built Food on Wheels to connect passionate chefs with hungry communities, making street food discovery seamless and joyful.</p></div>
        </section>

        <!-- Stats Section -->
        <section class="container-custom py-16 border-b border-border">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div><h3 class="text-4xl font-extrabold text-primary mb-2">1,200+</h3><p class="text-sm font-bold text-muted uppercase">Trucks Onboarded</p></div>
                <div><h3 class="text-4xl font-extrabold text-primary mb-2">2M+</h3><p class="text-sm font-bold text-muted uppercase">Orders Fulfilled</p></div>
                <div><h3 class="text-4xl font-extrabold text-primary mb-2">45</h3><p class="text-sm font-bold text-muted uppercase">Cities Active</p></div>
                <div><h3 class="text-4xl font-extrabold text-primary mb-2">150+</h3><p class="text-sm font-bold text-muted uppercase">Events Supported</p></div>
            </div>
        </section>

        <!-- Mission & Story -->
        <section class="container-custom py-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-3xl font-bold mb-6">Our Story</h2>
                <p class="text-muted mb-4">What started as a simple frustration—not knowing where our favorite taco truck moved to—has grown into a global platform supporting thousands of independent food vendors.</p>
                <p class="text-muted mb-6">We provide vendors with the SaaS tools they need to manage their business, while giving food lovers a beautiful, real-time map to satisfy their cravings.</p>
                <div class="flex items-center gap-4 p-4 surface border-l-4 border-primary rounded-r-lg">
                    <i class="fa-solid fa-quote-left text-primary text-2xl"></i>
                    <p class="font-medium text-main italic">"Empowering small food businesses with enterprise-grade technology."</p>
                </div>
            </div>
            <div class="relative h-96 rounded-3xl overflow-hidden shadow-xl">
                <img src="./assets/images/dashboard.jpg" alt="Food on Wheels Dashboard" class="w-full h-full object-cover">
            </div>
        </section>

        <!-- Team -->
        <section class="surface py-20">
            <div class="container-custom">
                <h2 class="text-3xl font-bold text-center mb-12">Meet the Team</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    ${generateTeamCard("Sarah Jenkins", "Founder & CEO", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80")}
                    ${generateTeamCard("Michael Chen", "CTO", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80")}
                    ${generateTeamCard("Elena Rodriguez", "Head of Vendor Success", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80")}
                    ${generateTeamCard("David Kim", "Lead Designer", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80")}
                </div>
            </div>
        </section>
    `;
}

function generateTeamCard(name, role, img) {
  return `
        <div class="flex flex-col items-center">
            <img src="${img}" alt="${name}" class="w-32 h-32 rounded-full object-cover shadow-md mb-4 border-4 border-surface">
            <h4 class="font-bold text-lg text-main">${name}</h4>
            <p class="text-sm text-primary font-medium mb-3">${role}</p>
            <div class="flex gap-3 text-muted">
                <a href="#" class="hover:text-primary transition-colors"><i class="fa-brands fa-linkedin"></i></a>
                <a href="#" class="hover:text-primary transition-colors"><i class="fa-brands fa-twitter"></i></a>
            </div>
        </div>
    `;
}

// ==========================================
// CONTACT PAGE
// ==========================================
export function renderContactPage() {
  return `
        <section class="container-custom py-16">
            <div class="text-center max-w-2xl mx-auto mb-16">
                <h1 class="text-4xl font-extrabold mb-4">Get in Touch</h1>
                <p class="text-muted">Have questions about listing your truck, booking an event, or our pricing plans? Our team is here to help.</p>
            </div>

            <!-- Contact Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
               <div class="surface p-6 rounded-2xl shadow-sm text-center border border-border hover:border-primary transition-colors">
    <div class="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl mx-auto mb-4"><i class="fa-solid fa-envelope"></i></div>
    <h3 class="font-bold mb-2">Email Us</h3>
    <p class="text-muted text-sm">support@foodonwheels.com</p>
</div>
                <div class="surface p-6 rounded-2xl shadow-sm text-center border border-border hover:border-primary transition-colors">
                    <div class="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl mx-auto mb-4"><i class="fa-solid fa-phone"></i></div>
                    <h3 class="font-bold mb-2">Call Us</h3>
                    <p class="text-muted text-sm">+1 (555) 123-4567</p>
                </div>
                <div class="surface p-6 rounded-2xl shadow-sm text-center border border-border hover:border-primary transition-colors">
                    <div class="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl mx-auto mb-4"><i class="fa-solid fa-location-dot"></i></div>
                    <h3 class="font-bold mb-2">HQ Location</h3>
                    <p class="text-muted text-sm">123 Culinary Ave, Tech City</p>
                </div>
            </div>

            <!-- Form & Mock Map Split -->
            <div class="surface rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-border">
                
                <!-- Left: Simple CSS Map Graphic -->
                <div class="w-full md:w-1/2 bg-[#e0e7ff] dark:bg-[#0f172a] relative min-h-[300px] flex items-center justify-center p-8">
                    <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(var(--primary) 1px, transparent 1px); background-size: 20px 20px;"></div>
                    <div class="relative z-10 surface p-6 rounded-2xl shadow-2xl text-center border-t-4 border-primary">
                        <i class="fa-solid fa-map-location-dot text-4xl text-primary mb-3"></i>
                        <h3 class="font-bold text-lg mb-1">Global HQ</h3>
                        <p class="text-sm text-muted">We operate remotely worldwide, but our roots are here.</p>
                    </div>
                </div>

                <!-- Right: Form -->
                <div class="w-full md:w-1/2 p-8 md:p-12">
                    <h3 class="text-2xl font-bold mb-6">Send a Message</h3>
                    <form id="contact-form" class="space-y-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-semibold text-muted uppercase mb-1">Name</label>
                                <input type="text" id="contact-name" class="w-full px-4 py-2 rounded-lg surface border border-border focus:outline-none focus:border-primary text-sm" placeholder="Jane Doe">
                                <span id="error-name" class="text-danger text-xs hidden mt-1">Name is required</span>
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-muted uppercase mb-1">Email</label>
                                <input type="email" id="contact-email" class="w-full px-4 py-2 rounded-lg surface border border-border focus:outline-none focus:border-primary text-sm" placeholder="jane@example.com">
                                <span id="error-email" class="text-danger text-xs hidden mt-1">Valid email required</span>
                            </div>
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-muted uppercase mb-1">Subject</label>
                            <select id="contact-subject" class="w-full px-4 py-2 rounded-lg surface border border-border focus:outline-none focus:border-primary text-sm">
                                <option value="">Select a subject...</option>
                                <option value="support">Vendor Support</option>
                                <option value="sales">Pricing & Sales</option>
                                <option value="general">General Inquiry</option>
                            </select>
                            <span id="error-subject" class="text-danger text-xs hidden mt-1">Please select a subject</span>
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-muted uppercase mb-1">Message</label>
                            <textarea id="contact-message" rows="4" class="w-full px-4 py-2 rounded-lg surface border border-border focus:outline-none focus:border-primary text-sm resize-none" placeholder="How can we help?"></textarea>
                            <span id="error-message" class="text-danger text-xs hidden mt-1">Message is required</span>
                        </div>
                        <button type="submit" class="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary-dark transition-colors shadow-md">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    `;
}

export function initContactEvents() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const subject = document.getElementById("contact-subject").value;
    const message = document.getElementById("contact-message").value.trim();

    let isValid = true;

    // Simple Validation
    if (!name) {
      document.getElementById("error-name").classList.remove("hidden");
      isValid = false;
    } else {
      document.getElementById("error-name").classList.add("hidden");
    }

    if (!email || !email.includes("@")) {
      document.getElementById("error-email").classList.remove("hidden");
      isValid = false;
    } else {
      document.getElementById("error-email").classList.add("hidden");
    }

    if (!subject) {
      document.getElementById("error-subject").classList.remove("hidden");
      isValid = false;
    } else {
      document.getElementById("error-subject").classList.add("hidden");
    }

    if (!message) {
      document.getElementById("error-message").classList.remove("hidden");
      isValid = false;
    } else {
      document.getElementById("error-message").classList.add("hidden");
    }

    if (isValid) {
      // Save to mock storage to simulate sending
      const inquiries = Storage.getData("inquiries") || [];
      inquiries.push({
        name,
        email,
        subject,
        message,
        date: new Date().toISOString(),
      });
      Storage.setData("inquiries", inquiries);

      // Show Global Toast (Using the container from index.html)
      const toastContainer = document.getElementById("toast-container");
      const toast = document.createElement("div");
      toast.className =
        "bg-success text-white px-6 py-3 rounded-lg shadow-lg font-bold flex items-center gap-3 transform transition-all translate-y-10 opacity-0";
      toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> Message sent successfully!`;
      toastContainer.appendChild(toast);

      // Animate In
      setTimeout(() => {
        toast.classList.remove("translate-y-10", "opacity-0");
      }, 50);

      // Animate Out & Remove
      setTimeout(() => {
        toast.classList.add("translate-y-10", "opacity-0");
        setTimeout(() => toast.remove(), 300);
      }, 3000);

      // Reset form
      form.reset();
    }
  });
}

// ==========================================
// PRICING PAGE
// ==========================================
export function renderPricingPage() {
  return `
        <section class="container-custom py-20">
            <div class="text-center max-w-2xl mx-auto mb-12">
                <h1 class="text-4xl font-extrabold mb-4">Simple, Transparent Pricing</h1>
                <p class="text-muted mb-8">Choose the plan that fits your food truck business. No hidden fees, cancel anytime.</p>
                
                <!-- Billing Toggle -->
                <div class="inline-flex items-center gap-3 surface p-1 rounded-full border border-border shadow-sm">
                    <button id="bill-monthly" class="px-6 py-2 rounded-full font-bold text-white bg-primary transition-all text-sm">Monthly</button>
                    <button id="bill-yearly" class="px-6 py-2 rounded-full font-bold text-muted hover:text-main transition-all text-sm">Yearly <span class="text-[10px] bg-success/20 text-success px-1.5 py-0.5 rounded ml-1">Save 20%</span></button>
                </div>
            </div>

            <!-- Pricing Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                
                <!-- Starter -->
                <div class="surface p-8 rounded-3xl shadow-sm border border-border text-center">
                    <h3 class="text-xl font-bold mb-2">STARTER</h3>
                    <p class="text-muted text-sm mb-6">Perfect for new food trucks.</p>
                    <div class="mb-6">
                        <span class="text-4xl font-extrabold price-display" data-monthly="29" data-yearly="24">$29</span>
                        <span class="text-muted">/mo</span>
                    </div>
                    <ul class="text-sm text-left space-y-4 mb-8">
                        <li><i class="fa-solid fa-check text-success mr-2"></i> Standard Map Listing</li>
                        <li><i class="fa-solid fa-check text-success mr-2"></i> Menu Management</li>
                        <li><i class="fa-solid fa-check text-success mr-2"></i> Accept Reviews</li>
                        <li class="text-muted opacity-50"><i class="fa-solid fa-xmark mr-2"></i> Event Bookings</li>
                    </ul>
                    <a href="/register" data-link class="block w-full py-3 surface border border-border font-bold rounded-xl hover:border-primary transition-colors">Start Free Trial</a>
                </div>

                <!-- Pro (Recommended) -->
                <div class="surface p-8 rounded-3xl shadow-2xl border-2 border-primary text-center relative transform md:-translate-y-4">
                    <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">RECOMMENDED</div>
                    <h3 class="text-xl font-bold mb-2 text-primary">PRO</h3>
                    <p class="text-muted text-sm mb-6">For established vendors growing fast.</p>
                    <div class="mb-6">
                        <span class="text-4xl font-extrabold price-display" data-monthly="79" data-yearly="64">$79</span>
                        <span class="text-muted">/mo</span>
                    </div>
                    <ul class="text-sm text-left space-y-4 mb-8">
                        <li><i class="fa-solid fa-check text-success mr-2"></i> Premium Map Placement</li>
                        <li><i class="fa-solid fa-check text-success mr-2"></i> Menu Management</li>
                        <li><i class="fa-solid fa-check text-success mr-2"></i> Event Bookings Engine</li>
                        <li><i class="fa-solid fa-check text-success mr-2"></i> Earnings Analytics</li>
                    </ul>
                    <a href="/register" data-link class="block w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors shadow-lg">Get PRO</a>
                </div>

                <!-- Fleet -->
                <div class="surface p-8 rounded-3xl shadow-sm border border-border text-center">
                    <h3 class="text-xl font-bold mb-2">FLEET</h3>
                    <p class="text-muted text-sm mb-6">For multi-truck operations.</p>
                    <div class="mb-6">
                        <span class="text-4xl font-extrabold price-display" data-monthly="199" data-yearly="159">$199</span>
                        <span class="text-muted">/mo</span>
                    </div>
                    <ul class="text-sm text-left space-y-4 mb-8">
                        <li><i class="fa-solid fa-check text-success mr-2"></i> Up to 5 Trucks</li>
                        <li><i class="fa-solid fa-check text-success mr-2"></i> Fleet Analytics</li>
                        <li><i class="fa-solid fa-check text-success mr-2"></i> Centralized Dispatch</li>
                        <li><i class="fa-solid fa-check text-success mr-2"></i> Priority Support</li>
                    </ul>
                    <a href="/register" data-link class="block w-full py-3 surface border border-border font-bold rounded-xl hover:border-primary transition-colors">Contact Sales</a>
                </div>

            </div>
        </section>
    `;
}

export function initPricingEvents() {
  const btnMonthly = document.getElementById("bill-monthly");
  const btnYearly = document.getElementById("bill-yearly");
  const prices = document.querySelectorAll(".price-display");

  if (!btnMonthly || !btnYearly) return;

  btnMonthly.addEventListener("click", () => {
    // Toggle Active Classes
    btnMonthly.classList.replace("text-muted", "text-white");
    btnMonthly.classList.replace("hover:text-main", "bg-primary");
    btnMonthly.classList.add("bg-primary");

    btnYearly.classList.replace("text-white", "text-muted");
    btnYearly.classList.replace("bg-primary", "hover:text-main");
    btnYearly.classList.remove("bg-primary");

    // Update Prices
    prices.forEach((price) => {
      price.innerText = `$${price.getAttribute("data-monthly")}`;
    });
  });

  btnYearly.addEventListener("click", () => {
    // Toggle Active Classes
    btnYearly.classList.replace("text-muted", "text-white");
    btnYearly.classList.replace("hover:text-main", "bg-primary");
    btnYearly.classList.add("bg-primary");

    btnMonthly.classList.replace("text-white", "text-muted");
    btnMonthly.classList.replace("bg-primary", "hover:text-main");
    btnMonthly.classList.remove("bg-primary");

    // Update Prices
    prices.forEach((price) => {
      price.innerText = `$${price.getAttribute("data-yearly")}`;
    });
  });
}
