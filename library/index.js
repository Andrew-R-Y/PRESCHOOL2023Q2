console.log('Самооценка: 50/ 50 \n \n',
'1. Вёрстка соответствует макету. Ширина экрана 768px (26/26).\n',
'2. Ни на одном из разрешений до 640px включительно не появляется',
'горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется:',
'не обрезается и не удаляется (12/12). \n',
'3. На ширине экрана 768рх реализовано адаптивное меню (12/12).')
const burger = document.querySelector('.header__burger-menu');
const navMenu = document.querySelector('.header__nav-and-profile');

document.addEventListener('click', showNav);

function showNav(event) {
    if (event.target.closest('.header__burger-menu')) {
        navMenu.classList.toggle('active');
    }
    if (!event.target.closest('.header__burger-menu') && !event.target.closest('.header__nav-and-profile') || event.target.closest('.header__item-link')) {
        navMenu.classList.remove('active');
    }
};

document.addEventListener('keyup', escapeFunction);

function escapeFunction(event) {
    if (event.code === 'Escape') {
        navMenu.classList.remove('active')
    };
}
