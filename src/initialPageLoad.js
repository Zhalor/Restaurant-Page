import { displayHomePage } from "./home";

const initialPageLoad = () => {
  const content = document.getElementById('content');

  const header = document.createElement('div');
  const navbar = document.createElement('ul');
  const home = document.createElement('li');
  const menu = document.createElement('li');
  const about = document.createElement('li');
  const wrapper = document.createElement('div');

  header.setAttribute('id', 'header');
  header.classList.add('header');
  home.setAttribute('id', 'home');
  home.classList.add('nav', 'current-page');
  menu.setAttribute('id', 'menu');
  menu.classList.add('nav');
  about.setAttribute('id', 'about');
  about.classList.add('nav');
  wrapper.setAttribute('id', "wrapper");
  wrapper.classList.add('wrapper-home');

  home.innerText = "Home";
  menu.innerText = "Menu";
  about.innerText = "About";


  content.appendChild(header);
  header.appendChild(navbar);
  navbar.append(home, menu, about);
  content.appendChild(wrapper);

  displayHomePage();
}

export {initialPageLoad}