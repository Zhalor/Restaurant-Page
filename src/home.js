const displayHomePage = () => {
  const wrapper = document.getElementById('wrapper');

  const pTitle = document.createElement('p');
  const divContainer = document.createElement('div');
  const divImage = document.createElement('div');
  const pAbout = document.createElement('p');

  divImage.classList.add('img-holder');

  pTitle.innerText = "Nagisa's Noodle Bar";
  pAbout.innerText = "This is a whole lot of test text to try some things out.\
  I'm not sure what to say here, but just imagine it's\
  something amazing and worth reading. Not this gibberish you're reading now.";

  wrapper.append(pTitle, divContainer);
  divContainer.append(divImage, pAbout);

}

export {displayHomePage}