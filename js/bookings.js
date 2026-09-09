// js/bookings.js
import Storage from "./storage.js";

export function renderBookingsManager() {
  const bookings = Storage.getData("vendorBookings") || [];

  let tableRows = bookings
    .map((b) => {
      const statusClass =
        b.status === "Accepted"
          ? "bg-success/20 text-success"
          : b.status === "Rejected"
            ? "bg-danger/20 text-danger"
            : "bg-warning/20 text-warning";
      return `
        <tr class="border-b border-border hover:bg-primary/5 transition-colors">
            <td class="p-4">
                <p class="font-bold text-sm">${b.event}</p>
                <p class="text-[10px] text-muted">${b.customer}</p>
            </td>
            <td class="p-4 text-sm"><i class="fa-regular fa-calendar mr-1"></i> ${b.date}</td>
            <td class="p-4 text-sm font-semibold">${b.guests} guests</td>
            <td class="p-4 text-sm font-bold text-primary">${b.budget}</td>
            <td class="p-4">
                <span class="px-2 py-1 rounded-full text-[10px] font-bold ${statusClass}">${b.status}</span>
            </td>
            <td class="p-4 text-right space-x-2">
                ${
                  b.status === "Pending"
                    ? `
                    <button class="text-success hover:bg-success/10 px-2 py-1 rounded transition-colors text-xs font-bold action-btn" data-id="${b.id}" data-action="Accepted"><i class="fa-solid fa-check"></i> Accept</button>
                    <button class="text-danger hover:bg-danger/10 px-2 py-1 rounded transition-colors text-xs font-bold action-btn" data-id="${b.id}" data-action="Rejected"><i class="fa-solid fa-xmark"></i> Reject</button>
                `
                    : `<span class="text-xs text-muted">Completed</span>`
                }
            </td>
        </tr>
    `;
    })
    .join("");

  return `
        <div class="max-w-6xl mx-auto space-y-6">
            <div class="mb-6">
                <h2 class="text-2xl font-bold">Event Bookings</h2>
                <p class="text-muted text-sm">Manage incoming catering and private event requests.</p>
            </div>

            <div class="surface rounded-2xl shadow-sm border border-border overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-primary/5 border-b border-border text-xs uppercase tracking-wider text-muted">
                                <th class="p-4 font-bold">Event / Client</th>
                                <th class="p-4 font-bold">Date</th>
                                <th class="p-4 font-bold">Size</th>
                                <th class="p-4 font-bold">Budget</th>
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
    `;
}

export function initBookingsEvents() {
  document.querySelectorAll(".action-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.getAttribute("data-id");
      const action = e.currentTarget.getAttribute("data-action");
      let bookings = Storage.getData("vendorBookings") || [];

      const index = bookings.findIndex((b) => b.id === id);
      if (index > -1) {
        bookings[index].status = action;
        Storage.setData("vendorBookings", bookings);

        // Show toast
        const toastContainer = document.getElementById("toast-container");
        const toast = document.createElement("div");
        toast.className = `${action === "Accepted" ? "bg-success" : "bg-danger"} text-white px-6 py-3 rounded-lg shadow-lg font-bold flex items-center gap-3`;
        toast.innerHTML = `<i class="fa-solid fa-circle-info"></i> Booking ${action}!`;
        toastContainer.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);

        window.app.router();
      }
    });
  });
}
