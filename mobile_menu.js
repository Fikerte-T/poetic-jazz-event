const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const body = document.querySelector('body');

function show() {
  menu.style.top = '0';
  body.style.overflow = 'hidden';
  body.style.width = '100%';
}

function close() {
  menu.style.top = '-150%';
  body.style.overflow = 'auto';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
