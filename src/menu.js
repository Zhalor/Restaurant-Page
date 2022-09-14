const displayMenuPage = () => {
  const wrapper = document.getElementById('wrapper');
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');
  const header = document.getElementById('header');

  menu.classList.add('current-page');
  home.classList.remove('current-page');
  contact.classList.remove('current-page');

  
  wrapper.classList.remove('wrapper-home');
  wrapper.classList.add('wrapper-menu');
  while(wrapper.firstChild !== null) {
    wrapper.removeChild(wrapper.lastChild);
  }

  const divItemContainer = document.createElement('div');
  const pIItemTitle = document.createElement('p');
  const divItemImage = document.createElement('div');
  const pItemPrice = document.createElement('p');
  const pItemDescription = document.createElement('p');
  const updateMenuBtn = document.createElement('button');

  divItemContainer.classList.add('menu-item');
  divItemImage.classList.add('img-holder');

  pIItemTitle.innerText = "Noodles!";
  pItemPrice.innerText = "$10";
  pItemDescription.innerText = "Delicious noodles that make you feel like you're at moms house."
  updateMenuBtn.innerText = "Update Menu";

  header.appendChild(updateMenuBtn);
  wrapper.appendChild(divItemContainer);
  divItemContainer.append(pIItemTitle, divItemImage, pItemPrice, pItemDescription);
}

export {displayMenuPage}