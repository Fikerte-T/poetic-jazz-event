const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');

function show() {
  menu.style.top = '0';
}

function close() {
  menu.style.top = '-150%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
