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
    LEFT_ARROW.classList.add('arrow-disabled');
    RIGHT_ARROW.classList.remove('arrow-disabled');
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
    LEFT_ARROW.classList.remove('arrow-disabled');
    RIGHT_ARROW.classList.remove('arrow-disabled');
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
    LEFT_ARROW.classList.remove('arrow-disabled');
    RIGHT_ARROW.classList.remove('arrow-disabled');
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
    LEFT_ARROW.classList.remove('arrow-disabled');
    RIGHT_ARROW.classList.remove('arrow-disabled');
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
    LEFT_ARROW.classList.remove('arrow-disabled');
    RIGHT_ARROW.classList.add('arrow-disabled');
})

const LEFT_ARROW = document.querySelector('.slider-arrow-left');
const RIGHT_ARROW = document.querySelector('.slider-arrow-right');

LEFT_ARROW.addEventListener('click', () => {
    if (SLIDER.classList.contains('position-1')) {
        return
    } else if (SLIDER.classList.contains('position-2')) {
        SLIDER.classList.remove('position-2');
        SLIDER.classList.add('position-1');
        BUTTON_2.classList.remove('about__pagination_active')
        BUTTON_1.classList.add('about__pagination_active')
        LEFT_ARROW.classList.add('arrow-disabled');
    } else if (SLIDER.classList.contains('position-3')) {
        SLIDER.classList.remove('position-3');
        SLIDER.classList.add('position-2');
        BUTTON_3.classList.remove('about__pagination_active')
        BUTTON_2.classList.add('about__pagination_active')
    } else if (SLIDER.classList.contains('position-4')) {
        SLIDER.classList.remove('position-4');
        SLIDER.classList.add('position-3');
        BUTTON_4.classList.remove('about__pagination_active')
        BUTTON_3.classList.add('about__pagination_active')
    } else if (SLIDER.classList.contains('position-5')) {
        SLIDER.classList.remove('position-5');
        SLIDER.classList.add('position-4');
        BUTTON_5.classList.remove('about__pagination_active')
        BUTTON_4.classList.add('about__pagination_active')
        RIGHT_ARROW.classList.remove('arrow-disabled')
    }
})

RIGHT_ARROW.addEventListener('click', () => {
    if (SLIDER.classList.contains('position-5')) {
        return
    } else if (SLIDER.classList.contains('position-1')) {
        SLIDER.classList.remove('position-1');
        SLIDER.classList.add('position-2');
        BUTTON_1.classList.remove('about__pagination_active');
        BUTTON_2.classList.add('about__pagination_active');
        LEFT_ARROW.classList.remove('arrow-disabled');
    } else if (SLIDER.classList.contains('position-2')) {
        SLIDER.classList.remove('position-2');
        SLIDER.classList.add('position-3');
        BUTTON_2.classList.remove('about__pagination_active')
        BUTTON_3.classList.add('about__pagination_active')
    } else if (SLIDER.classList.contains('position-3')) {
        SLIDER.classList.remove('position-3');
        SLIDER.classList.add('position-4');
        BUTTON_3.classList.remove('about__pagination_active')
        BUTTON_4.classList.add('about__pagination_active')
    } else if (SLIDER.classList.contains('position-4')) {
        SLIDER.classList.remove('position-4');
        SLIDER.classList.add('position-5');
        BUTTON_4.classList.remove('about__pagination_active')
        BUTTON_5.classList.add('about__pagination_active')
        RIGHT_ARROW.classList.add('arrow-disabled')
    }
})
// About slider end

// Favorites seasons selector start
const SEASONS = document.querySelectorAll('input.favorites__input');
const BOOKS = document.querySelectorAll('.favorites__book-card');
let activeSeason;
let previosSeason = 'winter';
SEASONS.forEach(setEventListener);

function setEventListener(item){
    item.addEventListener('change', showCardsBySeason)
}

function showCardsBySeason(event) {
    activeSeason = event.target.value;
    console.log('activeSeason:', activeSeason);
    console.log('previosSeason', previosSeason)
    BOOKS.forEach((book) => {
        if(book.classList.contains(activeSeason)) {
            setTimeout(() => {book.classList.add('favorites__fade-in')}, 2000);
            setTimeout(() => {book.classList.add('is-active')}, 2000);
            setTimeout(() => {book.classList.remove('favorites__fade-in')}, 4000);
        } 
        if(book.classList.contains(previosSeason)){
            book.classList.add('favorites__fade-out')
            setTimeout(() => {book.classList.remove('favorites__fade-out')}, 2000)
            setTimeout(() => {book.classList.remove('is-active')}, 2000)
        }
    })
    previosSeason = activeSeason;
}

BOOKS.forEach((book) => {
    if (book.classList.contains('winter')) {
        book.classList.add('is-active')
    }
})
// Favorites seasons selector end 