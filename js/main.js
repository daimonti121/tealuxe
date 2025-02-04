// mobile-menu 

const btnOpen = document.querySelector('.menu__btn'); 
const btnClose = document.querySelector('.menu__close-btn'); 
const menuList = document.querySelector('.menu__list');
const shadow = document.querySelector('.menu--close');

btnOpen.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--open');
    shadow.classList.toggle('menu--open');
})

btnClose.addEventListener('click', () => {
    menuList.classList.remove('menu__list--open');
    shadow.classList.remove('menu--open');
})