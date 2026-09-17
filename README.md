# StreetFeast — Food Truck Booking & Directory Platform

> **"Discover great food. Find trucks nearby. Bring food to your next event."**

StreetFeast is a commercial-grade, premium, vibrant, and community-driven **Food Truck Booking & Directory Platform** built with **HTML5, CSS3, Vanilla JavaScript, and Bootstrap 5 ONLY**.

---

## 🚀 Key Specifications & Tech Stack

* **Technology**: **HTML5 + CSS3 + Vanilla JavaScript + Bootstrap 5 ONLY**.
* **Strict Exclusions**: No React, Angular, Vue, Next.js, Nuxt.js, Tailwind CSS, TypeScript, jQuery, Node.js, Express.js, PHP, Laravel, WordPress, or external JS/CSS frameworks.
* **Architecture**: Completely standalone, static, accessible frontend with localized `localStorage` persistence, interactive demo state, and zero build tool requirements.
* **Theme System**:
  * **Light Theme**: Warm Cream (`#FDFBF7`), Tomato Red (`#E63946`), Mustard Yellow (`#E9A820`), Deep Charcoal (`#161A1D`), Pickle Green (`#2A9D8F`).
  * **Night Market Dark Theme**: Deep Charcoal Base (`#12151A`), slate cards (`#1A1F26`), glowing mustard accents, and high-contrast typography.
* **Bidirectional Layout**: Full **LTR and RTL** toggle with explicit text switcher (`LTR | RTL`).
* **Section Rule**: Every single page contains **5 to 6 substantial content sections** (excluding header and footer).
* **Curated Image Inventory**: 29 distinct, high-resolution, appetizing, and strictly relevant street food & food truck hero photographs with **zero duplicate hero imagery**.

---

## 📁 Project Structure

```text
foodtruck/
├── index.html                  (Home 1 — Discovery & Nearby Trucks)
├── home-2.html                 (Home 2 — Street Market Editorial & Interactive Map)
├── about.html                  (About Platform & Food Truck Movement)
├── directory.html              (Food Truck Directory with Live Multi-Filters)
├── food-truck-details.html     (Truck Profile, Signature Menu, Schedule & Event Booking)
├── menu.html                   (Street Food Menu Showcase & Party Bundles)
├── events.html                 (Food Festivals, Night Markets & Campus Rallies)
├── event-details.html          (Festival Schedule, Truck Lineup & Parking Guide)
├── vendors.html                (Vendor Directory & Community Chef Stories)
├── vendor-signup.html          (Vendor Landing Page & Multi-Step Onboarding)
├── pricing.html                (Vendor Membership Tiers & ROI Calculator)
├── blog.html                   (Street Food Chronicles Magazine)
├── blog-details.html           (Editorial Feature Article)
├── contact.html                (Contact, Support & Event Fleet Inquiries)
│
├── login.html                  (Vendor Command Center Login with Demo Shortcuts)
├── register.html               (Vendor Account Registration)
├── forgot-password.html        (Password Recovery Demo)
│
├── dashboard.html              (Vendor Command Center Overview)
├── truck-profile.html          (Vehicle Specs, Dimensions & Photo Showcase)
├── location-schedule.html      (Weekly Location Planner with Live Modal)
├── menu-management.html        (Interactive Menu CRUD & Sold-Out Toggles)
├── booking-requests.html       (Private Catering Inquiries & Accept/Decline)
├── orders.html                 (Kitchen Pass Live Order Tracker)
├── earnings.html               (Revenue Analytics & Pure HTML/CSS Bar Charts)
├── reviews.html                (Customer Reviews & Owner Reply Dialog)
├── vendor-profile.html         (Business Legal, Direct Deposit & Crew PINs)
│
├── 404.html                    (Creative Street Food Error Page)
├── coming-soon.html            (New City Expansion with Live Countdown Timer)
├── maintenance.html            (Grill Tune-Up System Status Page)
│
├── assets/
│   ├── css/
│   │   ├── style.css           (Design system, CSS variables, dark mode, cards)
│   │   ├── responsive.css      (320px to 1920px breakpoints)
│   │   └── rtl.css             (Bidirectional mirror alignments & RTL flips)
│   └── js/
│       ├── main.js             (Navbar scroll, sticky header, back-to-top)
│       ├── theme.js            (Light & Night Market mode with localStorage)
│       ├── rtl.js              (LTR/RTL switcher with text toggle & localStorage)
│       ├── forms.js            (Bootstrap validation & feedback alerts)
│       ├── directory.js        (Live search, cuisine & distance filtering, grid/list)
│       ├── filters.js          (Dietary tags & event filter tabs)
│       ├── booking.js          (Catering cost estimation calculator)
│       ├── dashboard.js        (Sidebar offcanvas toggle & live location modal)
│       ├── menu.js             (Menu management frontend CRUD demo)
│       ├── orders.js           (Order status state machine)
│       ├── earnings.js         (Pure HTML/CSS bar chart periods)
│       ├── reviews.js          (Review reply modal & dynamic append)
│       └── gallery.js          (Photo modal preview & filter)
└── README.md
```

---

## 🎨 Design System & CSS Variables

```css
:root {
  --primary-color: #E63946;          /* Tomato Red */
  --secondary-color: #E9A820;        /* Mustard Yellow */
  --accent-color: #E76F51;           /* Terracotta */
  --success-color: #2A9D8F;          /* Pickle Green */
  --background-color: #FDFBF7;       /* Warm Cream */
  --surface-color: #FFFFFF;
  --surface-card: #FFFFFF;
  --surface-alt: #F7F3EB;
  --heading-color: #161A1D;          /* Deep Charcoal */
  --text-color: #333940;
  --border-color: #E8E2D5;
}
```

---

## 📸 Page-Level Image Inventory (Zero Duplication)

| Page | Theme / Subject | Image Description |
| :--- | :--- | :--- |
| `index.html` | Home 1 | Modern food truck serving tacos with warm lights at sunset |
| `home-2.html` | Home 2 | Night market street festival with illuminated food stalls |
| `about.html` | About | Artisan food truck chef smiling and prepping fresh food |
| `directory.html` | Directory | Vibrant street food market line-up with colorful trucks |
| `food-truck-details.html` | Details | Vintage silver trailer custom airstream kitchen |
| `menu.html` | Menu | Gourmet smash burger with golden fries and signature dip |
| `events.html` | Events | Summer food truck festival with fairy lights & park crowd |
| `event-details.html` | Event Details | Sunset Downtown Block Party & Food Truck Rodeo festival scene |
| `vendors.html` | Vendors | Female street chef seasoning fresh dumplings |
| `vendor-signup.html` | Signup | Food truck entrepreneur preparing commercial stainless grill |
| `pricing.html` | Pricing | Cheerful food truck crew celebrating successful shift |
| `blog.html` | Blog | Close-up of fiery wok toss and sizzling street barbecue |
| `blog-details.html` | Blog Details | Authentic wood-fired pizza emerging from truck oven |
| `contact.html` | Contact | Urban food square with outdoor picnic tables & festoon lights |
| `login.html` | Login | Retro turquoise mobile coffee and churro truck |
| `register.html` | Register | Excited food truck window transaction |
| `forgot-password.html` | Recovery | Artisan baker finishing fresh cinnamon roll cones in truck |
| `dashboard.html` | Dashboard | Modern matte-black food truck parked at prime spot |
| `truck-profile.html` | Truck Profile | Handcrafted timber & steel food truck exterior |
| `location-schedule.html` | Scheduler | Riverside Park boardwalk food truck staging lane |
| `menu-management.html` | Menu CRUD | Fresh kitchen prep of herbs, meats, and marinades |
| `booking-requests.html` | Inquiries | Private rooftop wedding reception with mobile catering |
| `orders.html` | Orders | Expediter food pass with loaded fries and craft sliders |
| `earnings.html` | Earnings | Food truck POS terminal and contactless tap payment |
| `reviews.html` | Reviews | Happy diner biting into giant artisanal taco with friends |
| `vendor-profile.html` | Profile | Executive food truck founder inspecting fresh farm ingredients |
| `404.html` | 404 Error | Clean rustic picnic plate with sauce bottle & napkin |
| `coming-soon.html` | Coming Soon | Vibrant night food carnival with Ferris wheel & steam |
| `maintenance.html` | Maintenance | Polished vintage airstream kitchen detailed in workshop |

---

## ⚡ How to Run Locally

Because this project is built using strictly **HTML5, CSS3, Vanilla JavaScript, and Bootstrap 5**, it requires **no Node.js build step or compiler**.

1. Simply double-click `index.html` to open it in Google Chrome, Microsoft Edge, Firefox, or Safari.
2. Or use any local static server (e.g. VS Code Live Server or Python `python -m http.server 8000`).

---

## 🏆 ThemeForest & TemplateMonster Quality Standards

* **Valid W3C HTML5**: Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
* **SEO Optimized**: Unique meta descriptions, titles, OpenGraph-ready keywords, and accessible alt texts across all 29 pages.
* **Accessibility**: ARIA attributes, semantic heading hierarchies (`<h1>` -> `<h2>` -> `<h3>`), visible keyboard focus indicators, and high color contrast.
* **No Console Errors**: Clean, defensive Vanilla JavaScript event handling.
