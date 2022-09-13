import { initialPageLoad } from "./initialPageLoad";
import { displayHomePage } from "./home";
import { displayMenuPage } from "./menu";

initialPageLoad();

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const about = document.getElementById('about');


if(!document.getElementById('home').classList.contains('current-page')){
  home.addEventListener('click', () => {
    displayHomePage();
  });
  
}
menu.addEventListener('click', () => {
  displayMenuPage();
});