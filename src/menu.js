const arrAppitizers = [];
const arrNoodles = [];
const arrDrinks = [];
let update = false;

class MenuItem {
  constructor(title, price, description) {
    this.title = title;
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
  editAppitizer() {
    console.log(this);
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
  editNoodle() {
    console.log(this);
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
  editDrink() {
    console.log(this);
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
    showBtns(updateMenuBtn);
  });

  header.appendChild(updateMenuBtn);
  wrapper.append(h2Appitizers, divAppetizerContainer, h2Noodles, divNoodleContainer, h2Drinks,
    divDrinkContainer);

  createAddItemBtn();
  createAndAddApp("Dumplings", 6, "Tasty Dumplings");
  createAndAddApp("Fried Rice", 3, "Tasty Fried Rice");
  createAndAddNoodle("Soba Noodles", 9, "Tasty Soba");
  createAndAddNoodle("Ramen Noodles", 9, "Tasty Ramen");
  createAndAddDrink("Sake", 5, "Booze");

  document.querySelectorAll(".edit-delete-btn").forEach(item => {
    item.style.display = "none";
  });
}

const showBtns = (updateBtn) => {
  if(updateBtn.innerText === "Update Menu") {
    updateBtn.innerText = "Complete Update";
    const editDeleteBtns = document.querySelectorAll(".edit-delete-btn");
    const addBtns = document.querySelectorAll(".add-item-btn");
    editDeleteBtns.forEach(item => {
      item.style.display = "inline";
    });
    addBtns.forEach(item => {
      item.style.display = "inline";
    });
    update = true;
  } else {
    updateBtn.innerText = "Update Menu";
    const editDeleteBtns = document.querySelectorAll(".edit-delete-btn");
    const addBtns = document.querySelectorAll(".add-item-btn");
    editDeleteBtns.forEach(item => {
      item.style.display = "none";
    });
    addBtns.forEach(item => {
      item.style.display = "none";
    });
    update = false;
  }
}

const createAddItemBtn = () => {
    const addAppitizerBtn = document.createElement('button');
    addAppitizerBtn.classList.add('add-item-btn');
    addAppitizerBtn.setAttribute('id', 'add-appitizer-btn');
    addAppitizerBtn.innerText = "Add Item";
    addAppitizerBtn.style.display = "none";
    addAppitizerBtn.addEventListener('click', () => {
      appitizerForm();
    });

    const addNoodleBtn = document.createElement('button');
    addNoodleBtn.classList.add('add-item-btn');
    addNoodleBtn.setAttribute('id', 'add-noodle-btn');
    addNoodleBtn.innerText = "Add Item";
    addNoodleBtn.style.display = "none";
    addNoodleBtn.addEventListener('click', () => {
      noodleForm();
    });

    const addDrinkBtn = document.createElement('button');
    addDrinkBtn.classList.add('add-item-btn');
    addDrinkBtn.setAttribute('id', 'add-drink-btn');
    addDrinkBtn.innerText = "Add Item";
    addDrinkBtn.style.display = "none";
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
  let index = arrAppitizers.length - 1;
  createAppitizer(title, price, desc, index);
}

const createAppitizer = (title, price, desc, index) => {
  const divItemContainer = document.createElement('div');
  const pItemTitle = document.createElement('p');
  const pItemDescription = document.createElement('p');

  divItemContainer.classList.add('menu-item');
  divItemContainer.setAttribute('data-appitizer-item-number', index);

  pItemTitle.innerText = `${title}...............$${price}`;
  pItemDescription.innerText = desc;

  document.getElementById('appitizers').appendChild(divItemContainer);
  divItemContainer.append(pItemTitle, pItemDescription);
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  editBtn.classList.add('edit-delete-btn');
  deleteBtn.classList.add('edit-delete-btn');
  editBtn.innerText = "Edit";
  deleteBtn.innerText = "Delete";
  if(update === false) {
    editBtn.style.display = "none";
    deleteBtn.style.display = "none";
  } else {
    editBtn.style.display = "inline";
  deleteBtn.style.display = "inline";
  }
  editBtn.addEventListener('click', () => {
    arrAppitizers[index].editAppitizer();

  });
  divItemContainer.append(editBtn, deleteBtn);

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
  let index = arrNoodles.length - 1;
  createNoodle(title, price, desc, index);
}

const createNoodle = (title, price, desc, index) => {
  const divItemContainer = document.createElement('div');
  const pItemTitle = document.createElement('p');
  const pItemDescription = document.createElement('p');

  divItemContainer.classList.add('menu-item');
  divItemContainer.setAttribute('data-noodle-item-number', index);

  pItemTitle.innerText = `${title}...............$${price}`;
  pItemDescription.innerText = desc;

  document.getElementById('noodles').appendChild(divItemContainer);
  divItemContainer.append(pItemTitle, pItemDescription);

  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  editBtn.classList.add('edit-delete-btn');
  deleteBtn.classList.add('edit-delete-btn');
  editBtn.innerText = "Edit";
  deleteBtn.innerText = "Delete";
  console.log(update);
  if(update === false) {
    editBtn.style.display = "none";
    deleteBtn.style.display = "none";
  } else {
    editBtn.style.display = "inline";
    deleteBtn.style.display = "inline";
  }
  editBtn.addEventListener('click', () => {
    console.log(arrNoodles[index]);
    

  });
  divItemContainer.append(editBtn, deleteBtn);

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
  let index = arrDrinks.length - 1;
  createDrink(title, price, desc, index);
}

const createDrink = (title, price, desc, index) => {
  const divItemContainer = document.createElement('div');
  const pItemTitle = document.createElement('p');
  const pItemDescription = document.createElement('p');

  divItemContainer.classList.add('menu-item');
  divItemContainer.setAttribute('data-drink-item-number', index);

  pItemTitle.innerText = `${title}...............$${price}`;
  pItemDescription.innerText = desc;

  document.getElementById('drinks').appendChild(divItemContainer);
  divItemContainer.append(pItemTitle, pItemDescription);

  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  editBtn.classList.add('edit-delete-btn');
  deleteBtn.classList.add('edit-delete-btn');
  editBtn.innerText = "Edit";
  deleteBtn.innerText = "Delete";
  if(update === false) {
    editBtn.style.display = "none";
    deleteBtn.style.display = "none";
  } else {
    editBtn.style.display = "inline";
    deleteBtn.style.display = "inline";
  }
  editBtn.addEventListener('click', () => {
    arrDrinks[index].editDrink();

  });
  divItemContainer.append(editBtn, deleteBtn);

  console.log(arrDrinks);
}

export {displayMenuPage}