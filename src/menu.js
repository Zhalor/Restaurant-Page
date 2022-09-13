

const displayMenuPage = () => {
  const content = document.getElementById('content');
  const wrapper = document.getElementById('wrapper');

  wrapper.remove();
  wrapper.classList.remove('wrapper-home');
  wrapper.classList.add('wrapper-menu');
  console.log(wrapper);
  content.appendChild(wrapper);
  

  const divItemContainer = document.createElement('div');
  const pIItemTitle = document.createElement('p');
  const divItemImage = document.createElement('div');
  const pItemPrice = document.createElement('p');
  const pItemDescription = document.createElement('p');

  divItemContainer.classList.add('menu-item');
  divItemImage.classList.add('img-holder');

  wrapper.appendChild(divItemContainer);
  divItemContainer.append(pIItemTitle, divItemImage, pItemPrice, pItemDescription);


}

export {displayMenuPage}