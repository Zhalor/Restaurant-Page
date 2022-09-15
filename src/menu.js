const displayMenuPage = () => {
  const wrapper = document.getElementById('wrapper');
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');
  const header = document.getElementById('header');

  menu.classList.add('current-page');
  home.classList.remove('current-page');
  contact.classList.remove('current-page');

  
  wrapper.removeAttribute('class');
  wrapper.classList.add('wrapper-menu');
  while(wrapper.firstChild !== null) {
    wrapper.removeChild(wrapper.lastChild);
  }
  const pAppitizers = document.createElement('p');
  const pNoodles = document.createElement('p');
  const pDrinks = document.createElement('p');
  const divAppetizerContainer = document.createElement('div');
  const divNoodleContainer = document.createElement('div');
  const divDrinkContainer = document.createElement('div');
  const updateMenuBtn = document.createElement('button');

  divAppetizerContainer.setAttribute('id', 'appitizers')
  divAppetizerContainer.classList.add('appitizers');
  divNoodleContainer.setAttribute('id', 'noodles');
  divNoodleContainer.classList.add('noodles');
  divDrinkContainer.setAttribute('id', 'drinks');
  divDrinkContainer.classList.add('drinks');

  pAppitizers.innerText = "Appitizers";
  pNoodles.innerText = "Noodles";
  pDrinks.innerText = "Drinks";
  updateMenuBtn.innerText = "Update Menu";

  header.appendChild(updateMenuBtn);
  wrapper.append(pAppitizers, divAppetizerContainer, pNoodles, divNoodleContainer, pDrinks,
    divDrinkContainer);

  CreateAppitizerItem();
  CreateAppitizerItem();
  CreateNoodleItem();
  CreateNoodleItem();
  CreateNoodleItem();
  CreateDrinkItem();
}

const CreateAppitizerItem = () => {
  const divItemContainer = document.createElement('div');
  const pIItemTitle = document.createElement('p');
  const pItemDescription = document.createElement('p');

  divItemContainer.classList.add('menu-item');

  pIItemTitle.innerText = "Dumplings...............$6";
  pItemDescription.innerText = "Delicious noodles that make you feel like you're at moms house."

  document.getElementById('appitizers').appendChild(divItemContainer);
  divItemContainer.append(pIItemTitle, pItemDescription);
}

const CreateNoodleItem = () => {
  const divItemContainer = document.createElement('div');
  const pIItemTitle = document.createElement('p');
  const pItemDescription = document.createElement('p');

  divItemContainer.classList.add('menu-item');

  pIItemTitle.innerText = "Noodles...............$10";
  pItemDescription.innerText = "Delicious noodles that make you feel like you're at moms house."

  document.getElementById('noodles').appendChild(divItemContainer);
  divItemContainer.append(pIItemTitle, pItemDescription);
}

const CreateDrinkItem = () => {
  const divItemContainer = document.createElement('div');
  const pIItemTitle = document.createElement('p');
  const pItemDescription = document.createElement('p');

  divItemContainer.classList.add('menu-item');

  pIItemTitle.innerText = "Chai Tea...............$3";
  pItemDescription.innerText = "Delicious noodles that make you feel like you're at moms house."

  document.getElementById('drinks').appendChild(divItemContainer);
  divItemContainer.append(pIItemTitle, pItemDescription);
}
export {displayMenuPage}

