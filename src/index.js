import { initialPageLoad } from "./initialPageLoad";
import { displayHomePage } from "./home";
import { displayMenuPage } from "./menu";
import { displayContactPage } from "./contact";

initialPageLoad();

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');


home.addEventListener('click', () => {
  if(home.classList.contains('current-page') === false) {
    displayHomePage();
  }
});

menu.addEventListener('click', () => {
  if(menu.classList.contains('current-page') === false) {
    displayMenuPage();
  }
});

contact.addEventListener('click', () => {
  if(contact.classList.contains('current-page') === false) {
    displayContactPage();
  }
});