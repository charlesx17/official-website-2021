const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const menu = document.querySelector('.nav_list-item');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
  menu.style.display = 'flex';
  menu.style.top = '0';
}

function close() {
  menu.style.top = '-100%';
}
