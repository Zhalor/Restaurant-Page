const displayHomePage = () => {
  const wrapper = document.getElementById('wrapper');
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');
  const updateMenuButton = document.querySelector('button');

  const pTitle = document.createElement('p');
  const divContainer = document.createElement('div');
  const divImage = document.createElement('div');
  const para1 = document.createElement('p');
  const para2 = document.createElement('p');

  home.classList.add('current-page');
  contact.classList.remove('current-page');
  menu.classList.remove('current-page');
  wrapper.removeAttribute('class');
  wrapper.classList.add('wrapper-home');
  divImage.classList.add('img-holder');

  while(wrapper.firstChild !== null) {
    wrapper.removeChild(wrapper.lastChild);
  }

  if(updateMenuButton !== null){
    updateMenuButton.remove();
  }

  pTitle.innerText = "Nagisa's Noodle Bar";
  para1.innerText = "Nagisa’s Noodle Bar brings an authentic Japanese dining experience without \
  having to travel abroad. Enjoy a wide selection of noodles including Ramen, Udon, and Soba. \
  Try our imported Japanese beers or a glass of Sake.";
  para2.innerText = "Come join us for a bowl and get a taste of Japanese culture that we're sure you'll love!";

  wrapper.append(pTitle, divContainer);
  divContainer.append(divImage, para1, para2);

}

export {displayHomePage}