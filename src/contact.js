const displayContactPage = () => {
  const wrapper = document.getElementById('wrapper');
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');
  const updateMenuButton = document.querySelector('button');

  const h1ContactUs = document.createElement('h1');
  const divContainer = document.createElement('div');
  const divContactContaner = document.createElement('div');
  const h2Address = document.createElement('h2');
  const pAddress = document.createElement('p');
  const h2PhoneNumber = document.createElement('h2');
  const pPhoneNumber = document.createElement('p');
  const h2Email = document.createElement('h2');
  const pEmail = document.createElement('p');
  const divHoursContainer = document.createElement('div');
  const h2Hours = document.createElement('h2');
  const ul = document.createElement('ul');
  const liSun = document.createElement('li');
  const liMon = document.createElement('li');
  const liTues = document.createElement('li');
  const liWed = document.createElement('li');
  const liThur = document.createElement('li');
  const liFri = document.createElement('li');
  const liSat = document.createElement('li');

  contact.classList.add('current-page');
  menu.classList.remove('current-page')
  home.classList.remove('current-page');
  wrapper.removeAttribute('class');
  wrapper.classList.add('wrapper-contact');

  while(wrapper.firstChild !== null) {
    wrapper.removeChild(wrapper.lastChild);
  }

  if(updateMenuButton !== null){
    updateMenuButton.remove();
  }

  h1ContactUs.innerText = "Contact Us";
  h2Address.innerText = "Address";
  pAddress.innerText = "123456 Fakeyfake Street, Johnson City, TN 37601";
  h2PhoneNumber.innerText = "Phone Number";
  pPhoneNumber.innerText = "(555)-555-8368";
  h2Email.innerText = "Email Address";
  pEmail.innerText = "NagisaNoodleBar@Fakeyfake.com";
  h2Hours.innerText = "Hours";
  liSun.innerText = "Sunday: 11AM - 11PM";
  liMon.innerText = "Monday: CLOSED";
  liTues.innerText = "Tuesday: 11AM - 12AM";
  liWed.innerText = "Wednesday: 11AM - 12AM";
  liThur.innerText = "Thursday: 11AM - 12AM";
  liFri.innerText = "Friday: 11AM - 1AM";
  liSat.innerText = "Saturday: 11AM - 1AM";


  wrapper.appendChild(divContainer);
  divContainer.append(divContactContaner, divHoursContainer);
  divContactContaner.append(h2Address, pAddress, h2PhoneNumber, pPhoneNumber, h2Email, pEmail);
  divHoursContainer.append(h2Hours ,ul);
  ul.append(liSun, liMon, liTues, liWed, liThur, liFri, liSat);
}

export {displayContactPage}