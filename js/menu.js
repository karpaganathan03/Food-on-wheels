// js/menu.js
import Storage from "./storage.js";

export function renderMenuManager() {
  const menuItems = Storage.getData("vendorMenu") || [];

  let tableRows = menuItems
    .map(
      (item) => `
        <tr class="border-b border-border hover:bg-primary/5 transition-colors">
            <td class="p-4">
                <div class="flex items-center gap-3">
                    <img src="${item.image}" alt="${item.name}" class="w-10 h-10 rounded-lg object-cover bg-surface border border-border">
                    <div>
                        <p class="font-bold text-sm">${item.name}</p>
                        <p class="text-[10px] text-muted truncate max-w-[150px]">${item.desc}</p>
                    </div>
                </div>
            </td>
            <td class="p-4 text-sm font-semibold">${item.category}</td>
            <td class="p-4 text-sm font-bold text-primary">$${item.price.toFixed(2)}</td>
            <td class="p-4">
                <span class="px-2 py-1 rounded-full text-[10px] font-bold ${item.available ? "bg-success/20 text-success" : "bg-danger/20 text-danger"}">
                    ${item.available ? "Available" : "Sold Out"}
                </span>
            </td>
            <td class="p-4 text-right">
                <button class="text-muted hover:text-primary transition-colors p-1"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="text-muted hover:text-danger transition-colors p-1 ml-2 delete-menu-btn" data-id="${item.id}"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `,
    )
    .join("");

  if (menuItems.length === 0) {
    tableRows = `<tr><td colspan="5" class="p-8 text-center text-muted">No menu items found. Add your first item!</td></tr>`;
  }

  return `
        <div class="max-w-6xl mx-auto space-y-6">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div>
                    <h2 class="text-2xl font-bold">Menu Manager</h2>
                    <p class="text-muted text-sm">Add, edit, or remove items from your live menu.</p>
                </div>
                <button id="add-item-btn" class="px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors shadow-md flex items-center gap-2">
                    <i class="fa-solid fa-plus"></i> Add New Item
                </button>
            </div>

            <div class="surface rounded-2xl shadow-sm border border-border overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-primary/5 border-b border-border text-xs uppercase tracking-wider text-muted">
                                <th class="p-4 font-bold">Item</th>
                                <th class="p-4 font-bold">Category</th>
                                <th class="p-4 font-bold">Price</th>
                                <th class="p-4 font-bold">Status</th>
                                <th class="p-4 font-bold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${tableRows}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Add Item Modal (Hidden by default) -->
        <div id="menu-modal" class="fixed inset-0 z-[100] hidden items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity">
            <div class="surface w-full max-w-md p-6 rounded-2xl shadow-2xl border border-border transform transition-transform scale-95">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="font-bold text-lg">Add Menu Item</h3>
                    <button id="close-menu-modal" class="text-muted hover:text-danger"><i class="fa-solid fa-xmark text-xl"></i></button>
                </div>
                <form id="menu-form" class="space-y-4">
                    <div>
                        <label class="block text-xs font-semibold text-muted mb-1">Item Name</label>
                        <input type="text" id="item-name" required class="w-full px-4 py-2 rounded-lg surface border border-border focus:outline-none focus:border-primary text-sm">
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-semibold text-muted mb-1">Price ($)</label>
                            <input type="number" id="item-price" step="0.01" required class="w-full px-4 py-2 rounded-lg surface border border-border focus:outline-none focus:border-primary text-sm">
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-muted mb-1">Category</label>
                            <select id="item-category" required class="w-full px-4 py-2 rounded-lg surface border border-border focus:outline-none focus:border-primary text-sm">
                                <option value="Mains">Mains</option>
                                <option value="Sides">Sides</option>
                                <option value="Drinks">Drinks</option>
                                <option value="Desserts">Desserts</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-muted mb-1">Description</label>
                        <textarea id="item-desc" rows="2" class="w-full px-4 py-2 rounded-lg surface border border-border focus:outline-none focus:border-primary text-sm resize-none"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-primary text-white font-bold py-2 rounded-lg hover:bg-primary-dark transition-colors">Save Item</button>
                </form>
            </div>
        </div>
    `;
}

export function initMenuEvents() {
  const modal = document.getElementById("menu-modal");
  const addBtn = document.getElementById("add-item-btn");
  const closeBtn = document.getElementById("close-menu-modal");
  const form = document.getElementById("menu-form");

  if (addBtn)
    addBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modal.querySelector("div").classList.remove("scale-95");
    });
  if (closeBtn)
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      modal.querySelector("div").classList.add("scale-95");
    });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const menuItems = Storage.getData("vendorMenu") || [];

      const newItem = {
        id: "m" + Date.now(),
        name: document.getElementById("item-name").value,
        price: parseFloat(document.getElementById("item-price").value),
        category: document.getElementById("item-category").value,
        desc: document.getElementById("item-desc").value,
        available: true,
        image:
          "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=200", // mock image
      };

      menuItems.push(newItem);
      Storage.setData("vendorMenu", menuItems);
      modal.classList.add("hidden");

      // Trigger a re-render through the app router
      window.app.router();
    });
  }

  // Delete Buttons
  document.querySelectorAll(".delete-menu-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (confirm("Are you sure you want to delete this item?")) {
        const id = e.currentTarget.getAttribute("data-id");
        let menuItems = Storage.getData("vendorMenu") || [];
        menuItems = menuItems.filter((item) => item.id !== id);
        Storage.setData("vendorMenu", menuItems);
        window.app.router();
      }
    });
  });
}
