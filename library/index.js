// console.log('Самооценка: 50/ 50 \n \n',
// '1. Вёрстка соответствует макету. Ширина экрана 768px (26/26).\n',
// '2. Ни на одном из разрешений до 640px включительно не появляется',
// 'горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется:',
// 'не обрезается и не удаляется (12/12). \n',
// '3. На ширине экрана 768рх реализовано адаптивное меню (12/12).')

// Burger menu start
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
// Burger menu end

// About slider start
const SLIDER = document.querySelector('.about__slider');
const BUTTON_1 = document.querySelector('.about__pagination-button-1');
const BUTTON_2 = document.querySelector('.about__pagination-button-2');
const BUTTON_3 = document.querySelector('.about__pagination-button-3');
const BUTTON_4 = document.querySelector('.about__pagination-button-4');
const BUTTON_5 = document.querySelector('.about__pagination-button-5');

BUTTON_1.addEventListener('click', () => {
    BUTTON_2.classList.remove('about__pagination_active')
    BUTTON_3.classList.remove('about__pagination_active')
    BUTTON_4.classList.remove('about__pagination_active')
    BUTTON_5.classList.remove('about__pagination_active')
    BUTTON_1.classList.add('about__pagination_active')
    SLIDER.classList.remove('position-2')
    SLIDER.classList.remove('position-3')
    SLIDER.classList.remove('position-4')
    SLIDER.classList.remove('position-5')
    SLIDER.classList.add('position-1')
})

BUTTON_2.addEventListener('click', () => {
    BUTTON_1.classList.remove('about__pagination_active')
    BUTTON_3.classList.remove('about__pagination_active')
    BUTTON_4.classList.remove('about__pagination_active')
    BUTTON_5.classList.remove('about__pagination_active')
    BUTTON_2.classList.add('about__pagination_active')
    SLIDER.classList.remove('position-1')
    SLIDER.classList.remove('position-3')
    SLIDER.classList.remove('position-4')
    SLIDER.classList.remove('position-5')
    SLIDER.classList.add('position-2')
})

BUTTON_3.addEventListener('click', () => {
    BUTTON_1.classList.remove('about__pagination_active')
    BUTTON_2.classList.remove('about__pagination_active')
    BUTTON_4.classList.remove('about__pagination_active')
    BUTTON_5.classList.remove('about__pagination_active')
    BUTTON_3.classList.add('about__pagination_active')
    SLIDER.classList.remove('position-1')
    SLIDER.classList.remove('position-2')
    SLIDER.classList.remove('position-4')
    SLIDER.classList.remove('position-5')
    SLIDER.classList.add('position-3')
})

BUTTON_4.addEventListener('click', () => {
    BUTTON_1.classList.remove('about__pagination_active')
    BUTTON_2.classList.remove('about__pagination_active')
    BUTTON_3.classList.remove('about__pagination_active')
    BUTTON_5.classList.remove('about__pagination_active')
    BUTTON_4.classList.add('about__pagination_active')
    SLIDER.classList.remove('position-1')
    SLIDER.classList.remove('position-2')
    SLIDER.classList.remove('position-3')
    SLIDER.classList.remove('position-5')
    SLIDER.classList.add('position-4')
})

BUTTON_5.addEventListener('click', () => {
    BUTTON_1.classList.remove('about__pagination_active')
    BUTTON_2.classList.remove('about__pagination_active')
    BUTTON_3.classList.remove('about__pagination_active')
    BUTTON_4.classList.remove('about__pagination_active')
    BUTTON_5.classList.add('about__pagination_active')
    SLIDER.classList.remove('position-1')
    SLIDER.classList.remove('position-2')
    SLIDER.classList.remove('position-3')
    SLIDER.classList.remove('position-4')
    SLIDER.classList.add('position-5')
})
// About slider end