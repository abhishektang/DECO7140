import {initializeButtonAlerts} from './components.js';

alert("Javascript works");
console.log("This is homepage");

initializeButtonAlerts();
window.initializeButtonAlerts = initializeButtonAlerts;

export function toggleMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("show");
}

window.toggleMenu = toggleMenu;

