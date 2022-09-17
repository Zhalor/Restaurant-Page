const arrAppitizers = [{title: "Dumplings", price: "6", desc: "Tasty Dumplings."},
                       {title: "Fried Rice", price: "3", desc: "Tasty Fried Rice."}];
const arrNoodles = [{title: "Soba Noodles", price: "9", desc: "Tasty Soba."},
                    {title: "Ramen Noodles", price: "9", desc: "Tasty Ramen."}];
const arrDrinks = [{title: "Sake", price: "5", desc: "Tasty Sake."}]

let update = false;

class MenuItem {
  constructor(title, price, description) {
    this.name = title;
    this.price = price;
    this.description = description;
  }
}

class Appitizer extends MenuItem {
  addAppitizer(appitizer) {
    console.log(appitizer);
    arrAppitizers.push(appitizer);
    console.log(arrAppitizers);
    console.log(arrAppitizers.indexOf(this));
  }
  removeAppitizer() {
    arrAppitizers.splice(arrAppitizers.indexOf(this), 1);
    console.log(arrAppitizers);
  }
}

class Noodle extends MenuItem {
  addNoodle(noodle) {
    console.log(noodle);
    arrNoodles.push(noodle);
    console.log(arrNoodles);
    console.log(arrNoodles.indexOf(this));
  }
  removeNoodle() {
    arrNoodles.splice(arrNoodles.indexOf(this), 1);
    console.log(arrNoodles);
  }
}

class Drink extends MenuItem {
  addDrink(drink) {
    console.log(drink);
    arrDrinks.push(drink);
    console.log(arrDrinks);
    console.log(arrDrinks.indexOf(this));
  }
  removeDrink() {
    arrDrinks.splice(arrDrinks.indexOf(this), 1);
    console.log(arrDrinks);
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
    if(update === false){
      createAddItemBtn();
      createEditBtn();
      update = true;
      updateMenuBtn.innerText = "Complete Update";
    }
  });

  header.appendChild(updateMenuBtn);
  wrapper.append(h2Appitizers, divAppetizerContainer, h2Noodles, divNoodleContainer, h2Drinks,
    divDrinkContainer);

  arrAppitizers.forEach(item => {
    createAppitizer(item.title, item.price, item.desc);
  });

  arrNoodles.forEach(item => {
    createNoodle(item.title, item.price, item.desc);
  });

  arrDrinks.forEach(item => {
    createDrink(item.title, item.price, item.desc);
  });
}

const createAddItemBtn = () => {
  if(document.getElementById('add-appitizer-btn') === null &&
  document.getElementById('add-noodle-btn') === null &&
  document.getElementById('add-drink-btn') === null){
    const addAppitizerBtn = document.createElement('button');
    addAppitizerBtn.classList.add('add-item-btn');
    addAppitizerBtn.setAttribute('id', 'add-appitizer-btn');
    addAppitizerBtn.innerText = "Add Item";
    addAppitizerBtn.addEventListener('click', () => {
      appitizerForm();
    });

    const addNoodleBtn = document.createElement('button');
    addNoodleBtn.classList.add('add-item-btn');
    addNoodleBtn.setAttribute('id', 'add-noodle-btn');
    addNoodleBtn.innerText = "Add Item";
    addNoodleBtn.addEventListener('click', () => {
      noodleForm();
    });

    const addDrinkBtn = document.createElement('button');
    addDrinkBtn.classList.add('add-item-btn');
    addDrinkBtn.setAttribute('id', 'add-drink-btn');
    addDrinkBtn.innerText = "Add Item";
    addDrinkBtn.addEventListener('click', () => {
      drinkForm();
    });

    let counter = 0;
    const arr = [addAppitizerBtn, addNoodleBtn, addDrinkBtn];
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

const appitizerForm = () => {
  const divItemContainer = document.createElement('div');
  const inputItemTitle = document.createElement('input');
  const inputItemDescription = document.createElement('input');
  const inputItemPrice = document.createElement('input');
  const addItembtn = document.createElement('button');
  inputItemTitle.type = "text";
  inputItemPrice.type = "number";
  inputItemDescription.type = "text";
  addItembtn.innerText = "Add";

  addItembtn.addEventListener('click', () => {
    createAndAddApp(inputItemTitle.value, inputItemPrice.value, inputItemDescription.value);
    divItemContainer.remove();
  });

  divItemContainer.classList.add('menu-item');

  document.getElementById('appitizers').appendChild(divItemContainer);
  divItemContainer.append(inputItemTitle, inputItemPrice, inputItemDescription, addItembtn);
}

const createAndAddApp = (title, price, desc) => {
  const newAppitizer = new Appitizer(title, price, desc);
  newAppitizer.addAppitizer(newAppitizer);
  createAppitizer(title, price, desc);
}

const createAppitizer = (title, price, desc) => {
  const divItemContainer = document.createElement('div');
  const pItemTitle = document.createElement('p');
  const pItemDescription = document.createElement('p');

  divItemContainer.classList.add('menu-item');

  pItemTitle.innerText = `${title}...............$${price}`;
  pItemDescription.innerText = desc;

  document.getElementById('appitizers').appendChild(divItemContainer);
  divItemContainer.append(pItemTitle, pItemDescription);
  if(update === true) {
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    editBtn.classList.add('edit-delete-btn');
    deleteBtn.classList.add('edit-delete-btn');
    editBtn.innerText = "Edit";
    deleteBtn.innerText = "Delete";
    divItemContainer.append(editBtn, deleteBtn);
  }

  console.log(arrAppitizers);
}

const noodleForm = () => {
  const divItemContainer = document.createElement('div');
  const inputItemTitle = document.createElement('input');
  const inputItemDescription = document.createElement('input');
  const inputItemPrice = document.createElement('input');
  const addItembtn = document.createElement('button');
  inputItemTitle.type = "text";
  inputItemPrice.type = "number";
  inputItemDescription.type = "text";
  addItembtn.innerText = "Add";

  addItembtn.addEventListener('click', () => {
    createAndAddNoodle(inputItemTitle.value, inputItemPrice.value, inputItemDescription.value);
    divItemContainer.remove();
  });

  divItemContainer.classList.add('menu-item');

  document.getElementById('noodles').appendChild(divItemContainer);
  divItemContainer.append(inputItemTitle, inputItemPrice, inputItemDescription, addItembtn);
}

const createAndAddNoodle = (title, price, desc) => {
  const newNoodle = new Noodle(title, price, desc);
  newNoodle.addNoodle(newNoodle);
  createNoodle(title, price, desc);
}

const createNoodle = (title, price, desc) => {
  const divItemContainer = document.createElement('div');
  const pItemTitle = document.createElement('p');
  const pItemDescription = document.createElement('p');

  divItemContainer.classList.add('menu-item');

  pItemTitle.innerText = `${title}...............$${price}`;
  pItemDescription.innerText = desc;

  document.getElementById('noodles').appendChild(divItemContainer);
  divItemContainer.append(pItemTitle, pItemDescription);

  console.log(arrNoodles);
}

const drinkForm = () => {
  const divItemContainer = document.createElement('div');
  const inputItemTitle = document.createElement('input');
  const inputItemDescription = document.createElement('input');
  const inputItemPrice = document.createElement('input');
  const addItembtn = document.createElement('button');
  inputItemTitle.type = "text";
  inputItemPrice.type = "number";
  inputItemDescription.type = "text";
  addItembtn.innerText = "Add";

  addItembtn.addEventListener('click', () => {
    createAndAddDrink(inputItemTitle.value, inputItemPrice.value, inputItemDescription.value);
    divItemContainer.remove();
  });

  divItemContainer.classList.add('menu-item');

  document.getElementById('drinks').appendChild(divItemContainer);
  divItemContainer.append(inputItemTitle, inputItemPrice, inputItemDescription, addItembtn);
}

const createAndAddDrink = (title, price, desc) => {
  const newDrink = new Drink(title, price, desc);
  newDrink.addDrink(newDrink);
  createDrink(title, price, desc);
}

const createDrink = (title, price, desc) => {
  const divItemContainer = document.createElement('div');
  const pItemTitle = document.createElement('p');
  const pItemDescription = document.createElement('p');

  divItemContainer.classList.add('menu-item');

  pItemTitle.innerText = `${title}...............$${price}`;
  pItemDescription.innerText = desc;

  document.getElementById('drinks').appendChild(divItemContainer);
  divItemContainer.append(pItemTitle, pItemDescription);

  console.log(arrDrinks);
}

export {displayMenuPage}