import Storage from "./storage.js";
import { initialData } from "./data.js";

export function renderCommunityPage() {
  return `
        <div class="relative h-[calc(100vh-73px)] w-full flex overflow-hidden bg-surface-soft">
            
            <!-- Floating Map UI -->
            <div class="absolute top-6 left-6 start:left-6 rtl:right-6 rtl:left-auto z-[400] w-80 surface rounded-2xl shadow-xl border border-border p-5 flex flex-col gap-4">
                <h2 class="text-xl font-heading font-bold text-main">Live Truck Map</h2>
                <div class="relative">
                    <i class="fa-solid fa-magnifying-glass absolute left-3 rtl:right-3 rtl:left-auto top-1/2 transform -translate-y-1/2 text-muted text-sm"></i>
                    <input type="text" placeholder="Search trucks..." class="w-full px-9 py-2 rounded-xl surface-soft border border-border focus:border-primary focus:outline-none text-sm text-main">
                </div>
                <div class="flex gap-2 mt-1">
                    <button class="px-5 py-1.5 bg-primary text-white text-xs font-bold rounded-lg shadow-sm">All</button>
                    <button class="px-5 py-1.5 surface border border-border text-main text-xs font-bold rounded-lg hover:border-primary transition-colors">Open Now</button>
                </div>
            </div>

            <!-- The Real Street Map Container -->
            <div id="real-map" class="w-full h-full z-0"></div>
        </div>
    `;
}

export function initMapEvents() {
  setTimeout(() => {
    const mapContainer = document.getElementById("real-map");
    if (!mapContainer || mapContainer._leaflet_id) return;

    // Initialize realistic map
    const map = L.map("real-map", {
      zoomControl: false,
    }).setView([37.7749, -122.4194], 14);

    // Premium Light Street Map Tiles
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
      {
        attribution: "&copy; OpenStreetMap &copy; CARTO",
        maxZoom: 19,
      },
    ).addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);

    const trucks = Storage.getData("trucks") || initialData.trucks;

    trucks.forEach((truck) => {
      const lat = 37.7749 + (Math.random() - 0.5) * 0.04;
      const lng = -122.4194 + (Math.random() - 0.5) * 0.04;

      const statusColor =
        truck.status === "Open Now"
          ? "bg-success"
          : truck.status === "Closed"
            ? "bg-danger"
            : "bg-warning";

      const customIcon = L.divIcon({
        className: "custom-truck-marker",
        html: `
                    <div class="relative group cursor-pointer">
                        <div class="w-10 h-10 bg-surface rounded-full shadow-lg border-2 border-border hover:border-primary flex items-center justify-center transform transition-transform group-hover:scale-110 z-10 relative">
                            <i class="fa-solid fa-truck text-main text-sm"></i>
                            <div class="absolute -top-1 -right-1 w-3.5 h-3.5 ${statusColor} rounded-full border-2 border-surface shadow-sm"></div>
                        </div>
                        <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-48 surface p-3 rounded-xl shadow-xl border border-border opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                            <h4 class="font-heading font-bold text-sm text-main truncate">${truck.name}</h4>
                            <p class="text-[10px] text-muted truncate mt-1">${truck.cuisine} • ${truck.status}</p>
                        </div>
                    </div>
                `,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });

      L.marker([lat, lng], { icon: customIcon }).addTo(map);
    });
  }, 150);
}
