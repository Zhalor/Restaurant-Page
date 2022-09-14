const displayHomePage = () => {
  const wrapper = document.getElementById('wrapper');
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');
  const updateMenuButton = document.querySelector('button');

  const pTitle = document.createElement('p');
  const divContainer = document.createElement('div');
  const divImage = document.createElement('div');
  const pcontact = document.createElement('p');

  home.classList.add('current-page');
  contact.classList.remove('current-page');
  menu.classList.remove('current-page');
  wrapper.classList.add('wrapper-home');
  wrapper.classList.remove('wrapper-menu')
  divImage.classList.add('img-holder');

  while(wrapper.firstChild !== null) {
    wrapper.removeChild(wrapper.lastChild);
  }

  if(updateMenuButton !== null){
    updateMenuButton.remove();
  }

  pTitle.innerText = "Nagisa's Noodle Bar";
  pcontact.innerText = "This is a whole lot of test text to try some things out.\
  I'm not sure what to say here, but just imagine it's\
  something amazing and worth reading. Not this gibberish you're reading now.";

  wrapper.append(pTitle, divContainer);
  divContainer.append(divImage, pcontact);

}

export {displayHomePage}