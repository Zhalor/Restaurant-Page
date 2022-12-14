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

  editItem(container) {
    const inputItemTitle = document.createElement('input');
    const inputItemPrice = document.createElement('input');
    const inputItemDescription = document.createElement('textarea');
    const updateItemBtn = document.createElement('button');
    inputItemTitle.type = "text";
    inputItemPrice.type = "number";
    updateItemBtn.innerText = "Update";
    updateItemBtn.classList.add('update-btn');
    inputItemDescription.rows = 3;
    inputItemDescription.cols = 43;
    inputItemDescription.style.resize = "none";
    inputItemTitle.value = this.title;
    inputItemPrice.value = this.price;
    inputItemDescription.value = this.description;
    container.childNodes[0].style.display = "none";
    container.childNodes[1].style.display = "none";
    container.childNodes[2].style.display = "none";
    container.childNodes[3].style.display = "none";
    container.append(inputItemTitle, inputItemPrice, inputItemDescription, updateItemBtn);

    updateItemBtn.addEventListener('click', () => {
      container.childNodes[4].classList.remove('error');
      container.childNodes[5].classList.remove('error');
      container.childNodes[6].classList.remove('error');
      let pass = errorCheck(container, 4, 5, 6);
      if (pass === true) {
        container.childNodes[0].style.display = "block";
        container.childNodes[1].style.display = "block";
        container.childNodes[2].style.display = "inline";
        container.childNodes[3].style.display = "inline";
        this.title = inputItemTitle.value;
        this.price = inputItemPrice.value;
        this.description = inputItemDescription.value;
        container.childNodes[0].innerText = `${this.title}...............$${this.price}`;
        container.childNodes[1].innerText = this.description;
        inputItemTitle.remove();
        inputItemPrice.remove();
        inputItemDescription.remove();
        updateItemBtn.remove();
      }
    });
  }
}

class Appitizer extends MenuItem {
  addAppitizer(appitizer) {
    arrAppitizers.push(appitizer);
  }

  removeAppitizer(container) {
    arrAppitizers.splice(arrAppitizers.indexOf(this), 1);
    container.remove();
    const appitizers = document.querySelectorAll('[data-appitizer-item-number]');
    for(let i = 0; i < appitizers.length; i++) {
      appitizers[i].setAttribute('data-appitizer-item-number', i);
    }
  }
}

class Noodle extends MenuItem {
  addNoodle(noodle) {
    arrNoodles.push(noodle);
  }

  removeNoodle(container) {
    arrNoodles.splice(arrNoodles.indexOf(this), 1);
    container.remove();
    const noodles = document.querySelectorAll('[data-noodle-item-number]');
    for(let i = 0; i < noodles.length; i++) {
      noodles[i].setAttribute('data-noodle-item-number', i);
    }
  }
}

class Drink extends MenuItem {
  addDrink(drink) {
    arrDrinks.push(drink);
  }

  removeDrink(container) {
    arrDrinks.splice(arrDrinks.indexOf(this), 1);
    container.remove();
    const drinks = document.querySelectorAll('[data-drink-item-number]');
    for(let i = 0; i < drinks.length; i++) {
      drinks[i].setAttribute('data-drink-item-number', i);
    }
  }
}

const displayMenuPage = () => {
  if(document.getElementById('update-menu') !== null) {
    document.getElementById('update-menu').remove();
  }
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
    if(updateMenuBtn.innerText === "Update Menu") {
      let password = prompt("Enter admin password", 123456);
      if(Number(password) === 123456){
        showBtns(updateMenuBtn);
      } else {
        alert("Incorrect password");
      }
    } else {
      showBtns(updateMenuBtn);
    }
  });
  header.appendChild(updateMenuBtn);
  wrapper.append(h2Appitizers, divAppetizerContainer, h2Noodles, divNoodleContainer, h2Drinks,
    divDrinkContainer);

  createAddItemBtn();
  
  if(arrAppitizers.length === 0) {
    createAndAddApp("Dumplings", 6, "Steamed pork dumplings with herbs.");
    createAndAddApp("Fried Rice", 3, "Vegetable fried rice.");
  } else {
    arrAppitizers.forEach(item => {
      createAppitizer(item.title, item.price, item.description, arrAppitizers.indexOf(item));
    });
  }
  if(arrNoodles.length === 0) {
    createAndAddNoodle("Beef Soba Noodles", 9, "Cold soba noodles in a beef broth with thin slices of beef\
                        fishcake, cucumber slices, and a soft boiled egg.");
    createAndAddNoodle("Pork Ramen Noodles", 9, "Pork based ramen with slices of chashu pork and soft boiled egg.\
                        Regular or spicy broth.");
    createAndAddNoodle("Beef Udon Noodles", 9, "Udon noodles in beef broth, with chunks of beef, fishcake, \
                        and thinly sliced negi.");
  } else {
    arrNoodles.forEach(item => {
      createNoodle(item.title, item.price, item.description, arrNoodles.indexOf(item));
    });
  }
  if(arrDrinks.length === 0) {
    createAndAddDrink("Sake", 5, "Japanese imported sake.");
    createAndAddDrink("Japanese Beer", 5, "Selection of Japanese imported beer.");
  } else {
    arrDrinks.forEach(item => {
      createDrink(item.title, item.price, item.description, arrDrinks.indexOf(item));
    });
  }

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
    displayMenuPage();
    update = false;
  }
}

const createAddItemBtn = () => {
    const addAppitizerBtn = document.createElement('button');
    addAppitizerBtn.classList.add('add-item-btn');
    addAppitizerBtn.setAttribute('id', 'add-appitizer-btn');
    addAppitizerBtn.innerText = "Add Appitizer";
    addAppitizerBtn.style.display = "none";
    addAppitizerBtn.addEventListener('click', () => {
      addAppitizerBtn.disabled = true;
      appitizerForm();
    });

    const addNoodleBtn = document.createElement('button');
    addNoodleBtn.classList.add('add-item-btn');
    addNoodleBtn.setAttribute('id', 'add-noodle-btn');
    addNoodleBtn.innerText = "Add Noodle";
    addNoodleBtn.style.display = "none";
    addNoodleBtn.addEventListener('click', () => {
      addNoodleBtn.disabled = true;
      noodleForm();
    });

    const addDrinkBtn = document.createElement('button');
    addDrinkBtn.classList.add('add-item-btn');
    addDrinkBtn.setAttribute('id', 'add-drink-btn');
    addDrinkBtn.innerText = "Add Drink";
    addDrinkBtn.style.display = "none";
    addDrinkBtn.addEventListener('click', () => {
      addDrinkBtn.disabled = true;
      drinkForm();
    });

    let counter = 0;
    const arr = [addAppitizerBtn, addNoodleBtn, addDrinkBtn];
    document.querySelectorAll('.menu-header').forEach(item => {
      item.appendChild(arr[counter]);
      counter++;
    });
  
}

const errorCheck = (container, node1, node2, node3) => {
  let counter = 0;
  if(container.childNodes[node1].value == "") {
    container.childNodes[node1].placeholder = "Enter a title";
    container.childNodes[node1].classList.add('error');
    counter++;
  }
  if(container.childNodes[node2].value == "") {
    container.childNodes[node2].placeholder = "Enter a number";
    container.childNodes[node2].classList.add('error');
    counter++
  }
  if(container.childNodes[node3].value == "") {
    container.childNodes[node3].placeholder = "Enter a description";
    container.childNodes[node3].classList.add('error');
    counter++
  }
  if(counter > 0) {
    return false;
  } else {
    return true;
  }
}

const appitizerForm = () => {
  const divItemContainer = document.createElement('div');
  const inputItemTitle = document.createElement('input');
  const inputItemDescription = document.createElement('textarea');
  const inputItemPrice = document.createElement('input');
  const addItembtn = document.createElement('button');
  const cancelBtn = document.createElement('button');
  inputItemTitle.type = "text";
  inputItemTitle.placeholder = "Title"
  inputItemPrice.type = "number";
  inputItemPrice.placeholder = "Price"
  inputItemDescription.rows = 3;
  inputItemDescription.cols = 43;
  inputItemDescription.style.resize = "none";
  inputItemDescription.placeholder = "Description of item"
  addItembtn.innerText = "Add";
  addItembtn.classList.add('form-btn');
  cancelBtn.innerText = "Cancel";
  cancelBtn.classList.add('form-btn');

  addItembtn.addEventListener('click', () => {
    inputItemTitle.classList.remove('error');
    inputItemPrice.classList.remove('error');
    inputItemDescription.classList.remove('error');
    let pass = errorCheck(divItemContainer, 0, 1, 2);
    if(pass === true) {
      document.getElementById('add-appitizer-btn').disabled = false;
      createAndAddApp(inputItemTitle.value, inputItemPrice.value, inputItemDescription.value);
      divItemContainer.remove();
    }
  });

  cancelBtn.addEventListener('click', () => {
    document.getElementById('add-appitizer-btn').disabled = false;
    divItemContainer.remove();
  });
  
  divItemContainer.classList.add('menu-item');

  document.getElementById('appitizers').appendChild(divItemContainer);
  divItemContainer.append(inputItemTitle, inputItemPrice, inputItemDescription, addItembtn, cancelBtn);
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
    arrAppitizers[divItemContainer.dataset.appitizerItemNumber].editItem(divItemContainer);
  });

  deleteBtn.addEventListener('click', () => {
    arrAppitizers[divItemContainer.dataset.appitizerItemNumber].removeAppitizer(divItemContainer);
  });

  divItemContainer.append(editBtn, deleteBtn);
}

const noodleForm = () => {
  const divItemContainer = document.createElement('div');
  const inputItemTitle = document.createElement('input');
  const inputItemDescription = document.createElement('textarea');
  const inputItemPrice = document.createElement('input');
  const addItembtn = document.createElement('button');
  const cancelBtn = document.createElement('button');
  inputItemTitle.type = "text";
  inputItemTitle.placeholder = "Title"
  inputItemPrice.type = "number";
  inputItemPrice.placeholder = "Price"
  inputItemDescription.rows = 3;
  inputItemDescription.cols = 43;
  inputItemDescription.style.resize = "none";
  inputItemDescription.placeholder = "Description of item"
  addItembtn.innerText = "Add";
  addItembtn.classList.add('form-btn');
  cancelBtn.innerText = "Cancel";
  cancelBtn.classList.add('form-btn');

  addItembtn.addEventListener('click', () => {
    inputItemTitle.classList.remove('error');
    inputItemPrice.classList.remove('error');
    inputItemDescription.classList.remove('error');
    let pass = errorCheck(divItemContainer, 0, 1, 2);
    if(pass === true) {
      document.getElementById('add-appitizer-btn').disabled = false;
      createAndAddNoodle(inputItemTitle.value, inputItemPrice.value, inputItemDescription.value);
      divItemContainer.remove();
    }
  });

  cancelBtn.addEventListener('click', () => {
    document.getElementById('add-noodle-btn').disabled = false;
    divItemContainer.remove();
  });

  divItemContainer.classList.add('menu-item');

  document.getElementById('noodles').appendChild(divItemContainer);
  divItemContainer.append(inputItemTitle, inputItemPrice, inputItemDescription, addItembtn, cancelBtn);
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

  if(update === false) {
    editBtn.style.display = "none";
    deleteBtn.style.display = "none";
  } else {
    editBtn.style.display = "inline";
    deleteBtn.style.display = "inline";
  }

  editBtn.addEventListener('click', () => {
    arrNoodles[divItemContainer.dataset.noodleItemNumber].editItem(divItemContainer);
  });

  deleteBtn.addEventListener('click', () => {
    arrNoodles[divItemContainer.dataset.noodleItemNumber].removeNoodle(divItemContainer);
  });

  divItemContainer.append(editBtn, deleteBtn);
}

const drinkForm = () => {
  const divItemContainer = document.createElement('div');
  const inputItemTitle = document.createElement('input');
  const inputItemDescription = document.createElement('textarea');
  const inputItemPrice = document.createElement('input');
  const addItembtn = document.createElement('button');
  const cancelBtn = document.createElement('button');
  inputItemTitle.type = "text";
  inputItemTitle.placeholder = "Title"
  inputItemPrice.type = "number";
  inputItemPrice.placeholder = "Price"
  inputItemDescription.rows = 3;
  inputItemDescription.cols = 43;
  inputItemDescription.style.resize = "none";
  inputItemDescription.placeholder = "Description of item"
  addItembtn.innerText = "Add";
  addItembtn.classList.add('form-btn');
  cancelBtn.innerText = "Add";
  cancelBtn.classList.add('form-btn');

  addItembtn.addEventListener('click', () => {
    inputItemTitle.classList.remove('error');
    inputItemPrice.classList.remove('error');
    inputItemDescription.classList.remove('error');
    let pass = errorCheck(divItemContainer, 0, 1, 2);
    if(pass === true) {
      document.getElementById('add-appitizer-btn').disabled = false;
      createAndAddDrink(inputItemTitle.value, inputItemPrice.value, inputItemDescription.value);
      divItemContainer.remove();
    }
  });

  cancelBtn.addEventListener('click', () => {
    document.getElementById('add-drink-btn').disabled = false;
    divItemContainer.remove();
  });

  divItemContainer.classList.add('menu-item');

  document.getElementById('drinks').appendChild(divItemContainer);
  divItemContainer.append(inputItemTitle, inputItemPrice, inputItemDescription, addItembtn, cancelBtn);
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
    arrDrinks[divItemContainer.dataset.drinkItemNumber].editItem(divItemContainer);
  });
  
  deleteBtn.addEventListener('click', () => {
    arrDrinks[divItemContainer.dataset.drinkItemNumber].removeDrink(divItemContainer);
  });

  divItemContainer.append(editBtn, deleteBtn);
}

export {displayMenuPage}