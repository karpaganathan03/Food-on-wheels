// js/storage.js

const Storage = {
  // Theme Management
  initTheme() {
    const savedTheme = localStorage.getItem("foodTruckTheme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    return savedTheme;
  },

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("foodTruckTheme", newTheme);
    return newTheme;
  },

  getTheme() {
    return document.documentElement.getAttribute("data-theme") || "light";
  },

  // Authentication Management
  getAuth() {
    const auth = localStorage.getItem("foodTruckAuth");
    return auth ? JSON.parse(auth) : null;
  },

  setAuth(userData) {
    localStorage.setItem("foodTruckAuth", JSON.stringify(userData));
  },

  logout() {
    localStorage.removeItem("foodTruckAuth");
  },

  // Mock Data Management
  getData(key) {
    const data = localStorage.getItem(`foodTruck_${key}`);
    return data ? JSON.parse(data) : null;
  },

  setData(key, data) {
    localStorage.setItem(`foodTruck_${key}`, JSON.stringify(data));
  },
};

export default Storage;
