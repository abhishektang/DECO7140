import {initializeButtonAlerts_sub} from './components.js';
alert("Javascript works");
console.log("This is destination page");


initializeButtonAlerts_sub();

window.initializeButtonAlerts_sub = initializeButtonAlerts_sub;
export function toggleMenu() {
 const mobileMenu = document.querySelector(".mobile-menu_sub");
  mobileMenu.classList.toggle("show");
  }
  
  window.toggleMenu = toggleMenu;


  