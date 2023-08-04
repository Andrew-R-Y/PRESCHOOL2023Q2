console.log('Самооценка: 100/ 100 \n \n')
console.log('1. Вёрстка валидная 10/10')
console.log('2. Вёрстка семантическая 16/16:')
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
