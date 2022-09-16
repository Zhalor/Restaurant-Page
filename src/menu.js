const arrAppitizers = [];
const arrNoodles = [];
const arrDrinks = [];

const menuItem = class {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

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
  const h2Appitizers = document.createElement('h2');
  const h2Noodles = document.createElement('h2');
  const h2Drinks = document.createElement('h2');
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
  h2Appitizers.classList.add('menu-header');
  h2Noodles.classList.add('menu-header');
  h2Drinks.classList.add('menu-header');
  updateMenuBtn.setAttribute('id', 'update-menu');

  h2Appitizers.innerText = "Appitizers";
  h2Noodles.innerText = "Noodles";
  h2Drinks.innerText = "Drinks";
  updateMenuBtn.innerText = "Update Menu";

  updateMenuBtn.addEventListener('click', () => {
    createAddItemBtn();
    createEditBtn();
  });

  header.appendChild(updateMenuBtn);
  wrapper.append(h2Appitizers, divAppetizerContainer, h2Noodles, divNoodleContainer, h2Drinks,
    divDrinkContainer);

  CreateAppitizerItem();
  CreateAppitizerItem();
  CreateNoodleItem();
  CreateNoodleItem();
  CreateNoodleItem();
  CreateDrinkItem();
}

const createAddItemBtn = () => {
  if(document.getElementById('add-appitizer-btn') === null &&
  document.getElementById('add-noodle-btn') === null &&
  document.getElementById('add-drink-btn') === null){
    const addAppetizerItem = document.createElement('button');
    addAppetizerItem.classList.add('add-item');
    addAppetizerItem.setAttribute('id', 'add-appitizer-btn');
    addAppetizerItem.innerText = "Add Item";

    const addNoodleItem = document.createElement('button');
    addNoodleItem.classList.add('add-item');
    addNoodleItem.setAttribute('id', 'add-noodle-btn');
    addNoodleItem.innerText = "Add Item";

    const addDrinkItem = document.createElement('button');
    addDrinkItem.classList.add('add-item');
    addDrinkItem.setAttribute('id', 'add-drink-btn');
    addDrinkItem.innerText = "Add Item";
    document.getElementById('drinks').appendChild(addDrinkItem);

    let counter = 0;
    const arr = [addAppetizerItem, addNoodleItem, addDrinkItem];
    document.querySelectorAll('.menu-header').forEach(item => {
      item.appendChild(arr[counter]);
      counter++;
    });
  }
}

const createEditBtn = () => {
  if(document.getElementsByClassName('edit-delete-btn').length === 0){
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    editBtn.classList.add('edit-delete-btn');
    deleteBtn.classList.add('edit-delete-btn');
    editBtn.innerText = "Edit";
    deleteBtn.innerText = "Delete";
    item.append(editBtn, deleteBtn);
  });
  }
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