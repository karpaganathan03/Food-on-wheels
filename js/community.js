// js/community.js
import Storage from "./storage.js";

export function renderCommunityPage() {
  return `
        <section class="h-[calc(100vh-76px)] flex flex-col overflow-hidden bg-bg-color relative">
            
            <!-- Map Controls -->
            <div class="absolute top-4 left-4 z-20 flex flex-col gap-2 w-72">
                <div class="surface p-4 shadow-lg border border-border">
                    <h2 class="font-bold text-lg mb-3">Live Truck Map</h2>
                    <div class="flex items-center px-3 py-2 border border-border bg-opacity-50 mb-3 focus-within:border-primary transition-colors">
                        <i class="fa-solid fa-magnifying-glass text-muted mr-2"></i>
                        <input type="text" placeholder="Search trucks..." class="w-full bg-transparent focus:outline-none text-sm text-main">
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <button class="px-4 py-1 bg-primary text-white text-xs font-bold shadow-sm">All</button>
                        <button class="px-4 py-1 surface border border-border text-xs font-bold hover:border-primary transition-colors">Open Now</button>
                    </div>
                </div>
            </div>

            <!-- Zoom Controls -->
            <div class="absolute bottom-6 right-6 z-20 flex flex-col shadow-lg surface border border-border">
                <button id="zoom-in" class="w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors border-b border-border"><i class="fa-solid fa-plus"></i></button>
                <button id="zoom-out" class="w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><i class="fa-solid fa-minus"></i></button>
            </div>

            <!-- Popup Container -->
            <div id="map-popup" class="absolute hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 surface p-0 shadow-2xl w-72 overflow-hidden border border-border transition-all"></div>

            <!-- The Interactive Mock Map -->
            <div id="map-container" class="w-full h-full relative overflow-hidden surface cursor-grab active:cursor-grabbing">
                <div class="absolute inset-0 pattern-bg opacity-20 pointer-events-none"></div>
                
                <div id="map-layer" class="w-full h-full absolute inset-0 origin-center transition-transform duration-300" style="transform: scale(1);">
                    
                    <!-- SVG City Layout -->
                    <svg class="w-full h-full absolute inset-0 pointer-events-none" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1000 1000">
                        <path d="M100 100 Q 300 150 400 300 T 200 600 Z" fill="var(--success)" opacity="0.15" />
                        <path d="M700 0 Q 800 400 900 600 T 1000 1000 L 1000 0 Z" fill="var(--info)" opacity="0.15" />
                        
                        <path d="M0 300 L 1000 300 M0 700 L 1000 700 M300 0 L 300 1000 M700 0 L 700 1000" stroke="var(--text-muted)" opacity="0.2" stroke-width="15" />
                        <path d="M0 150 L 1000 150 M0 450 L 1000 450 M0 850 L 1000 850 M150 0 L 150 1000 M450 0 L 450 1000 M850 0 L 850 1000" stroke="var(--text-muted)" opacity="0.1" stroke-width="5" />
                    </svg>

                    <!-- Markers Layer -->
                    <div id="markers-layer" class="absolute inset-0 z-10"></div>
                </div>
            </div>
        </section>
    `;
}

// THIS WAS THE MISSING FUNCTION
export function initMapEvents() {
  const mapLayer = document.getElementById("map-layer");
  const zoomInBtn = document.getElementById("zoom-in");
  const zoomOutBtn = document.getElementById("zoom-out");
  const popup = document.getElementById("map-popup");
  const markersLayer = document.getElementById("markers-layer");

  if (!mapLayer) return; // Safety check

  let currentScale = 1;

  const trucks = Storage.getData("trucks") || [];
  const mockCoordinates = [
    { top: "30%", left: "30%" },
    { top: "70%", left: "30%" },
    { top: "45%", left: "70%" },
    { top: "15%", left: "45%" },
    { top: "85%", left: "85%" },
    { top: "50%", left: "50%" },
    { top: "20%", left: "80%" },
    { top: "60%", left: "15%" },
    { top: "80%", left: "40%" },
    { top: "10%", left: "60%" },
  ];

  markersLayer.innerHTML = trucks
    .map((truck, i) => {
      const coords = mockCoordinates[i % mockCoordinates.length];
      const statusColorClass =
        truck.status === "Open Now"
          ? "text-success"
          : truck.status === "Closed"
            ? "text-danger"
            : "text-warning";
      const bounceClass = truck.status === "Open Now" ? "animate-bounce" : "";

      return `
            <button class="map-marker absolute w-10 h-10 -ml-5 -mt-10 flex flex-col items-center group cursor-pointer transition-transform hover:scale-110 z-10" 
                style="top: ${coords.top}; left: ${coords.left};"
                data-id="${truck.id}">
                <div class="surface p-1 rounded-full shadow-md ${bounceClass} border border-border">
                    <i class="fa-solid fa-truck ${statusColorClass} text-lg"></i>
                </div>
                <div class="opacity-0 group-hover:opacity-100 mt-1 surface px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap shadow-sm pointer-events-none transition-opacity border border-border">
                    ${truck.name}
                </div>
            </button>
        `;
    })
    .join("");

  zoomInBtn.addEventListener("click", () => {
    if (currentScale < 3) currentScale += 0.5;
    mapLayer.style.transform = `scale(${currentScale})`;
  });

  zoomOutBtn.addEventListener("click", () => {
    if (currentScale > 1) currentScale -= 0.5;
    mapLayer.style.transform = `scale(${currentScale})`;
  });

  document.querySelectorAll(".map-marker").forEach((marker) => {
    marker.addEventListener("click", (e) => {
      e.stopPropagation();
      const truckId = marker.getAttribute("data-id");
      const truck = trucks.find((t) => t.id === truckId);

      if (truck) {
        const statusColor =
          truck.status === "Open Now"
            ? "bg-success"
            : truck.status === "Closed"
              ? "bg-danger"
              : "bg-warning";
        const loc =
          typeof truck.location === "object"
            ? truck.location.address
            : truck.location;

        popup.innerHTML = `
                    <div class="relative h-32">
                        <img src="${truck.image}" alt="${truck.name}" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <button id="close-popup" class="absolute top-2 right-2 w-6 h-6 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-xs text-white transition-colors"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="p-4">
                        <div class="flex justify-between items-start mb-1">
                            <h3 class="font-bold text-main leading-tight line-clamp-1">${truck.name}</h3>
                            <span class="${statusColor} text-white px-2 py-0.5 rounded text-[10px] font-bold whitespace-nowrap">${truck.status}</span>
                        </div>
                        <p class="text-xs text-primary font-semibold mb-2">${truck.cuisine} • <i class="fa-solid fa-star text-warning"></i> ${truck.rating}</p>
                        <p class="text-xs text-muted mb-4 line-clamp-1"><i class="fa-solid fa-location-dot"></i> ${loc}</p>
                        <a href="/trucks/${truck.id}" data-link class="block text-center w-full py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary-dark transition-colors">View Details</a>
                    </div>
                `;

        popup.classList.remove("hidden");

        document
          .getElementById("close-popup")
          .addEventListener("click", (e) => {
            e.stopPropagation();
            popup.classList.add("hidden");
          });
      }
    });
  });

  mapLayer.addEventListener("click", () => {
    popup.classList.add("hidden");
  });
}
