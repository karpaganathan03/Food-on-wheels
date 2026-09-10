// js/storage.js
export default class Storage {
  static getData(key) {
    const data = localStorage.getItem(`foodTruck_${key}`);
    return data ? JSON.parse(data) : null;
  }

  static setData(key, value) {
    localStorage.setItem(`foodTruck_${key}`, JSON.stringify(value));
  }

  static removeData(key) {
    localStorage.removeItem(`foodTruck_${key}`);
  }

  static getAuth() {
    return this.getData("auth_user");
  }

  static setAuth(user) {
    this.setData("auth_user", user);
    window.dispatchEvent(new Event("auth-changed"));
  }

  static logout() {
    this.removeData("auth_user");
    window.dispatchEvent(new Event("auth-changed"));
  }

  static getTheme() {
    return localStorage.getItem("foodTruckTheme") || "light";
  }

  static setTheme(theme) {
    localStorage.setItem("foodTruckTheme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }

  static toggleTheme() {
    const nextTheme = this.getTheme() === "dark" ? "light" : "dark";
    this.setTheme(nextTheme);
    return nextTheme;
  }

  static initTheme() {
    this.setTheme(this.getTheme());
  }

  static getDirection() {
    return localStorage.getItem("foodTruckDir") || "ltr";
  }

  static setDirection(dir) {
    localStorage.setItem("foodTruckDir", dir);
    document.documentElement.setAttribute("dir", dir);
  }

  static toggleDirection() {
    const nextDir = this.getDirection() === "rtl" ? "ltr" : "rtl";
    this.setDirection(nextDir);
    return nextDir;
  }

  static initDirection() {
    this.setDirection(this.getDirection());
  }
}
