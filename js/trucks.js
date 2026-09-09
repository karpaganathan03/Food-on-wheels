// js/trucks.js
import Storage from "./storage.js";
import { initialData } from "./data.js";

function renderTruckGridHTML(trucks) {
  if (!trucks || trucks.length === 0) {
    return `
            <div class="col-span-full py-20 text-center surface rounded-2xl border border-border">
                <i class="fa-solid fa-route text-4xl text-muted mb-4 opacity-50"></i>
                <h3 class="text-xl font-bold mb-2">No food trucks found</h3>
                <p class="text-muted text-sm">Try adjusting your filters or search term.</p>
            </div>
        `;
  }

  return trucks
    .map((truck) => {
      const loc =
        typeof truck.location === "object"
          ? truck.location.address || ""
          : truck.location;
      return `
        <div class="surface rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col h-full border border-border hover:border-primary/50">
            <div class="relative h-40 overflow-hidden bg-gray-100">
                <img src="${truck.image}" alt="${truck.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=600&q=80'">
                <div class="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] uppercase tracking-wide font-bold text-white shadow-md ${
                  truck.status === "Open Now"
                    ? "bg-success"
                    : truck.status === "Closed"
                      ? "bg-danger"
                      : "bg-warning"
                }">${truck.status}</div>
            </div>
            <div class="p-4 flex flex-col flex-grow">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="font-bold text-main line-clamp-1 text-sm">${truck.name}</h3>
                    <div class="flex items-center gap-1 bg-warning/10 text-warning px-1.5 py-0.5 rounded-md text-[10px] font-bold">
                        <i class="fa-solid fa-star"></i> ${truck.rating}
                    </div>
                </div>
                <p class="text-[10px] text-primary font-semibold mb-2">${truck.cuisine} • ${truck.priceRange}</p>
                <p class="text-[10px] text-muted mb-4 flex-grow line-clamp-1"><i class="fa-solid fa-location-dot mr-1"></i> ${loc}</p>
                <a href="/trucks/${truck.id}" data-link class="block text-center py-2 rounded-lg font-semibold text-white bg-primary hover:bg-primary-dark transition-colors w-full text-xs shadow-sm">View Menu & Book</a>
            </div>
        </div>
    `;
    })
    .join("");
}

export function renderTrucksPage() {
  let trucks = Storage.getData("trucks");
  if (!trucks || trucks.length === 0) {
    trucks = initialData.trucks;
    Storage.setData("trucks", trucks);
  }

  // Auto-initialize events slightly after the HTML renders into the DOM
  setTimeout(initTrucksEvents, 50);

  return `
        <section class="bg-primary/5 border-b border-border py-12">
            <div class="container-custom text-center">
                <h1 class="text-4xl font-extrabold mb-4">Discover Food Trucks</h1>
                <p class="text-muted max-w-xl mx-auto">Browse the best food trucks in your area. Filter by cuisine, status, or location to find exactly what you're craving.</p>
            </div>
        </section>

        <section class="container-custom py-12">
            <div class="flex flex-col lg:flex-row gap-8">
                
                <!-- Left Sidebar: Filters -->
                <aside class="w-full lg:w-1/4">
                    <div class="surface rounded-2xl p-6 sticky top-24 shadow-sm border border-border">
                        <div class="flex justify-between items-center mb-6">
                            <h3 class="font-bold text-lg"><i class="fa-solid fa-filter mr-2 text-primary"></i> Filters</h3>
                            <button id="clear-filters" class="text-xs text-primary hover:underline font-bold cursor-pointer">Clear All</button>
                        </div>
                        
                        <div class="mb-6">
                            <label class="text-[10px] font-bold text-muted uppercase tracking-wider mb-2 block">Search</label>
                            <input type="text" id="filter-search" placeholder="Truck name..." class="w-full px-4 py-2 rounded-lg surface border border-border focus:outline-none focus:border-primary text-sm text-main">
                        </div>

                        <div class="mb-6">
                            <label class="text-[10px] font-bold text-muted uppercase tracking-wider mb-2 block">Cuisine</label>
                            <div class="space-y-3" id="filter-cuisine">
                                ${[
                                  "Burgers",
                                  "Mexican",
                                  "Asian",
                                  "Pizza",
                                  "Desserts",
                                  "BBQ",
                                ]
                                  .map(
                                    (c) => `
                                    <label class="flex items-center gap-3 text-sm cursor-pointer hover:text-primary transition-colors font-medium">
                                        <input type="checkbox" value="${c}" class="cuisine-checkbox accent-primary w-4 h-4 rounded border-border"> ${c}
                                    </label>
                                `,
                                  )
                                  .join("")}
                            </div>
                        </div>

                        <div class="mb-6">
                            <label class="text-[10px] font-bold text-muted uppercase tracking-wider mb-2 block">Status</label>
                            <select id="filter-status" class="w-full px-4 py-2 rounded-lg surface border border-border focus:outline-none focus:border-primary text-sm text-main bg-surface">
                                <option value="All">Any Status</option>
                                <option value="Open Now">Open Now</option>
                                <option value="Moving Soon">Moving Soon</option>
                                <option value="Closed">Closed</option>
                            </select>
                        </div>
                        
                        <button id="apply-filters" class="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-md cursor-pointer">
                            Apply Filters
                        </button>
                    </div>
                </aside>

                <!-- Right Side: Grid -->
                <div class="w-full lg:w-3/4">
                    <div class="flex justify-between items-center mb-6">
                        <p class="text-sm font-semibold text-muted">Showing <span id="truck-count" class="text-main font-bold">${trucks.length}</span> food trucks</p>
                    </div>
                    
                    <!-- Trucks Grid Container -->
                    <div id="trucks-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        ${renderTruckGridHTML(trucks)}
                    </div>
                </div>
            </div>
        </section>
    `;
}

export function initTrucksEvents() {
  const applyBtn = document.getElementById("apply-filters");
  const clearBtn = document.getElementById("clear-filters");
  const gridContainer = document.getElementById("trucks-grid");
  const countDisplay = document.getElementById("truck-count");
  const searchInput = document.getElementById("filter-search");
  const statusSelect = document.getElementById("filter-status");

  if (!applyBtn || !gridContainer) return;

  let allTrucks = Storage.getData("trucks") || initialData.trucks;

  const executeFiltering = () => {
    const searchTerm = searchInput
      ? searchInput.value.toLowerCase().trim()
      : "";
    const selectedStatus = statusSelect ? statusSelect.value : "All";
    const checkedCuisines = Array.from(
      document.querySelectorAll(".cuisine-checkbox:checked"),
    ).map((cb) => cb.value);

    const filteredTrucks = allTrucks.filter((truck) => {
      const locStr =
        typeof truck.location === "object"
          ? truck.location.address || ""
          : truck.location;
      const matchesSearch =
        truck.name.toLowerCase().includes(searchTerm) ||
        locStr.toLowerCase().includes(searchTerm);
      const matchesCuisine =
        checkedCuisines.length === 0 || checkedCuisines.includes(truck.cuisine);
      const matchesStatus =
        selectedStatus === "All" || truck.status === selectedStatus;

      return matchesSearch && matchesCuisine && matchesStatus;
    });

    gridContainer.innerHTML = renderTruckGridHTML(filteredTrucks);
    if (countDisplay) countDisplay.textContent = filteredTrucks.length;
  };

  // Attach listeners cleanly
  applyBtn.onclick = executeFiltering;
  if (searchInput) searchInput.oninput = executeFiltering;
  if (statusSelect) statusSelect.onchange = executeFiltering;

  document.querySelectorAll(".cuisine-checkbox").forEach((cb) => {
    cb.onchange = executeFiltering;
  });

  if (clearBtn) {
    clearBtn.onclick = () => {
      if (searchInput) searchInput.value = "";
      if (statusSelect) statusSelect.value = "All";
      document
        .querySelectorAll(".cuisine-checkbox")
        .forEach((cb) => (cb.checked = false));

      gridContainer.innerHTML = renderTruckGridHTML(allTrucks);
      if (countDisplay) countDisplay.textContent = allTrucks.length;
    };
  }
}
