

const btn = document.getElementById('title');
btn.addEventListener('click', () => {
  const wrapper = document.getElementById('wrapper');
  div = document.createElement('div');
  div.innerText = "This is generated";
  wrapper.appendChild(div);
});