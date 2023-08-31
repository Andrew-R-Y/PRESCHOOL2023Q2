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
  if (
    (!event.target.closest('.header__burger-menu') &&
      !event.target.closest('.header__nav-and-profile')) ||
    event.target.closest('.header__item-link')
  ) {
    navMenu.classList.remove('active');
  }
}

document.addEventListener('keyup', escapeFunction);

function escapeFunction(event) {
  if (event.code === 'Escape') {
    navMenu.classList.remove('active');
  }
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
  BUTTON_2.classList.remove('about__pagination_active');
  BUTTON_3.classList.remove('about__pagination_active');
  BUTTON_4.classList.remove('about__pagination_active');
  BUTTON_5.classList.remove('about__pagination_active');
  BUTTON_1.classList.add('about__pagination_active');
  SLIDER.classList.remove('position-2');
  SLIDER.classList.remove('position-3');
  SLIDER.classList.remove('position-4');
  SLIDER.classList.remove('position-5');
  SLIDER.classList.add('position-1');
  LEFT_ARROW.classList.add('arrow-disabled');
  RIGHT_ARROW.classList.remove('arrow-disabled');
});

BUTTON_2.addEventListener('click', () => {
  BUTTON_1.classList.remove('about__pagination_active');
  BUTTON_3.classList.remove('about__pagination_active');
  BUTTON_4.classList.remove('about__pagination_active');
  BUTTON_5.classList.remove('about__pagination_active');
  BUTTON_2.classList.add('about__pagination_active');
  SLIDER.classList.remove('position-1');
  SLIDER.classList.remove('position-3');
  SLIDER.classList.remove('position-4');
  SLIDER.classList.remove('position-5');
  SLIDER.classList.add('position-2');
  LEFT_ARROW.classList.remove('arrow-disabled');
  RIGHT_ARROW.classList.remove('arrow-disabled');
});

BUTTON_3.addEventListener('click', () => {
  BUTTON_1.classList.remove('about__pagination_active');
  BUTTON_2.classList.remove('about__pagination_active');
  BUTTON_4.classList.remove('about__pagination_active');
  BUTTON_5.classList.remove('about__pagination_active');
  BUTTON_3.classList.add('about__pagination_active');
  SLIDER.classList.remove('position-1');
  SLIDER.classList.remove('position-2');
  SLIDER.classList.remove('position-4');
  SLIDER.classList.remove('position-5');
  SLIDER.classList.add('position-3');
  LEFT_ARROW.classList.remove('arrow-disabled');
  RIGHT_ARROW.classList.remove('arrow-disabled');
});

BUTTON_4.addEventListener('click', () => {
  BUTTON_1.classList.remove('about__pagination_active');
  BUTTON_2.classList.remove('about__pagination_active');
  BUTTON_3.classList.remove('about__pagination_active');
  BUTTON_5.classList.remove('about__pagination_active');
  BUTTON_4.classList.add('about__pagination_active');
  SLIDER.classList.remove('position-1');
  SLIDER.classList.remove('position-2');
  SLIDER.classList.remove('position-3');
  SLIDER.classList.remove('position-5');
  SLIDER.classList.add('position-4');
  LEFT_ARROW.classList.remove('arrow-disabled');
  RIGHT_ARROW.classList.remove('arrow-disabled');
});

BUTTON_5.addEventListener('click', () => {
  BUTTON_1.classList.remove('about__pagination_active');
  BUTTON_2.classList.remove('about__pagination_active');
  BUTTON_3.classList.remove('about__pagination_active');
  BUTTON_4.classList.remove('about__pagination_active');
  BUTTON_5.classList.add('about__pagination_active');
  SLIDER.classList.remove('position-1');
  SLIDER.classList.remove('position-2');
  SLIDER.classList.remove('position-3');
  SLIDER.classList.remove('position-4');
  SLIDER.classList.add('position-5');
  LEFT_ARROW.classList.remove('arrow-disabled');
  RIGHT_ARROW.classList.add('arrow-disabled');
});

const LEFT_ARROW = document.querySelector('.slider-arrow-left');
const RIGHT_ARROW = document.querySelector('.slider-arrow-right');

LEFT_ARROW.addEventListener('click', () => {
  if (SLIDER.classList.contains('position-1')) {
    return;
  } else if (SLIDER.classList.contains('position-2')) {
    SLIDER.classList.remove('position-2');
    SLIDER.classList.add('position-1');
    BUTTON_2.classList.remove('about__pagination_active');
    BUTTON_1.classList.add('about__pagination_active');
    LEFT_ARROW.classList.add('arrow-disabled');
  } else if (SLIDER.classList.contains('position-3')) {
    SLIDER.classList.remove('position-3');
    SLIDER.classList.add('position-2');
    BUTTON_3.classList.remove('about__pagination_active');
    BUTTON_2.classList.add('about__pagination_active');
  } else if (SLIDER.classList.contains('position-4')) {
    SLIDER.classList.remove('position-4');
    SLIDER.classList.add('position-3');
    BUTTON_4.classList.remove('about__pagination_active');
    BUTTON_3.classList.add('about__pagination_active');
  } else if (SLIDER.classList.contains('position-5')) {
    SLIDER.classList.remove('position-5');
    SLIDER.classList.add('position-4');
    BUTTON_5.classList.remove('about__pagination_active');
    BUTTON_4.classList.add('about__pagination_active');
    RIGHT_ARROW.classList.remove('arrow-disabled');
  }
});

RIGHT_ARROW.addEventListener('click', () => {
  if (SLIDER.classList.contains('position-5')) {
    return;
  } else if (SLIDER.classList.contains('position-1')) {
    SLIDER.classList.remove('position-1');
    SLIDER.classList.add('position-2');
    BUTTON_1.classList.remove('about__pagination_active');
    BUTTON_2.classList.add('about__pagination_active');
    LEFT_ARROW.classList.remove('arrow-disabled');
  } else if (SLIDER.classList.contains('position-2')) {
    SLIDER.classList.remove('position-2');
    SLIDER.classList.add('position-3');
    BUTTON_2.classList.remove('about__pagination_active');
    BUTTON_3.classList.add('about__pagination_active');
  } else if (SLIDER.classList.contains('position-3')) {
    SLIDER.classList.remove('position-3');
    SLIDER.classList.add('position-4');
    BUTTON_3.classList.remove('about__pagination_active');
    BUTTON_4.classList.add('about__pagination_active');
  } else if (SLIDER.classList.contains('position-4')) {
    SLIDER.classList.remove('position-4');
    SLIDER.classList.add('position-5');
    BUTTON_4.classList.remove('about__pagination_active');
    BUTTON_5.classList.add('about__pagination_active');
    RIGHT_ARROW.classList.add('arrow-disabled');
  }
});
// About slider end

// Favorites seasons selector start
const SEASONS = document.querySelectorAll('input.favorites__input');
const BOOKS = document.querySelectorAll('.favorites__book-card');
const BOOKS_CONTAINER = document.querySelector('.favorites__books-container');
let activeSeason = 'winter';
let previousSeason;
BOOKS.forEach((book) => {
  if (book.classList.contains('winter')) {
    book.classList.add('is-active');
  }
});

SEASONS.forEach(setEventListener);

function setEventListener(item) {
  item.addEventListener('change', changeSeason);
}

function changeSeason(event) {
  BOOKS_CONTAINER.style.height = booksContainerHeight + 'px';
  activeSeason = event.target.value;

  const removeFadeIn = function () {
    this.classList.remove('fade-in');
    this.removeEventListener('animationend', removeFadeIn);
  };

  const changeActive = function () {
    this.classList.remove('is-active');
    this.classList.remove('fade-out');
    BOOKS.forEach((book) => {
      if (book.classList.contains(activeSeason)) {
        book.classList.add('is-active');
        book.classList.add('fade-in');
        book.addEventListener('animationend', removeFadeIn);
      }
      this.removeEventListener('animationend', changeActive);
    });
  };

  let i = 0;

  BOOKS.forEach((book) => {
    if (
      book.classList.contains('is-active') &&
      book.classList.contains('fade-in')
    ) {
      i = 1;
    } else if (
      book.classList.contains('is-active') &&
      book.classList.contains('fade-out')
    ) {
      i = 2;
    } else if (book.classList.contains('is-active')) {
      i = 3;
    }
  });

  BOOKS.forEach((book) => {
    if (
      book.classList.contains('is-active') &&
      book.classList.contains('fade-in')
    ) {
      book.classList.remove('is-active');
      book.classList.remove('fade-in');
      book.removeEventListener('animationend', removeFadeIn);
      //
      //
    } else if (
      book.classList.contains('is-active') &&
      book.classList.contains('fade-out')
    ) {
      book.classList.remove('is-active');
      book.classList.remove('fade-out');
      book.removeEventListener('animationend', changeActive);
      //
      //
    } else if (book.classList.contains('is-active')) {
      book.classList.add('fade-out');
      book.addEventListener('animationend', changeActive);
    }
    if (book.classList.contains(activeSeason) && i < 3) {
      book.classList.add('is-active');
      book.classList.add('fade-in');
      book.addEventListener('animationend', removeFadeIn);
    }

    if (book.classList.contains(previousSeason) && i < 3) {
      book.classList.remove('fade-in');
      book.removeEventListener('animationend', removeFadeIn);
    }
  });
  previousSeason = activeSeason;
}

let booksContainerHeight = BOOKS_CONTAINER.offsetHeight;
// Favorites seasons selector end

// Favorites selector area background-color on scroll start
const NAV_PANEL = document.querySelector('.favorites__navigation-panel');
document.addEventListener('scroll', blackoutNavPanel);
function blackoutNavPanel() {
  const windowScrollTop = window.scrollY;
  const navPanelOffsetTop = NAV_PANEL.offsetTop;
  if (navPanelOffsetTop - windowScrollTop <= 0) {
    NAV_PANEL.classList.add('favorites__navigation-panel_move');
  } else {
    NAV_PANEL.classList.remove('favorites__navigation-panel_move');
  }
}
// Favorites selector area background-color on scroll end

// Login drop menu display start
const PROFILE_IMAGE = document.querySelector('.header__profile-image');
const DROP_MENU_NO_AUTH = document.querySelector('.drop-menu__no-auth');

const DropMenuNoAuth = function (event) {
  if (event.target.closest('.header__profile-image')) {
    navMenu.classList.remove('active');
    DROP_MENU_NO_AUTH.classList.toggle('drop-menu__no-auth_active');
  }
  if (
    (DROP_MENU_NO_AUTH.classList.contains('drop-menu__no-auth_active') &&
      !event.target.closest('.drop-menu') &&
      !event.target.closest('.header__profile-image')) ||
    event.target.closest('.popup-register_link') ||
    event.target.closest('.popup-login-register_link')
  ) {
    DROP_MENU_NO_AUTH.classList.remove('drop-menu__no-auth_active');
  }
};

const escapeCloseDrop = function (event) {
  if (event.code === 'Escape') {
    DROP_MENU_NO_AUTH.classList.remove('drop-menu__no-auth_active');
  }
};
document.addEventListener('click', DropMenuNoAuth);
document.addEventListener('keyup', escapeCloseDrop);
// Login drop menu display end

// Popup register start
const popupOpenButton = document.querySelector('.popup-register_link-button');
const popupOpenLink = document.querySelector('.popup-register_link');
const popupRegisterWindow = document.querySelector('.popup-register');

function openPopup(event) {
  if (
    event.target.closest('.popup-register_link-button') ||
    event.target.closest('.popup-register_link') ||
    event.target.closest('.popup-login__inner-link')
  ) {
    popupRegisterWindow.classList.add('open');
    popupRegisterWindow.addEventListener('click', function (event) {
      if (
        !event.target.closest('.popup-register__content') ||
        event.target.closest('.close-popup') ||
        event.target.closest('.popup-register__inner-link')
      ) {
        popupRegisterWindow.classList.remove('open');
      }
    });
  }
}

function escapeCloseRegisterWindow(event) {
  if (event.code === 'Escape') {
    popupRegisterWindow.classList.remove('open');
  }
}

document.addEventListener('click', openPopup);
document.addEventListener('keyup', escapeCloseRegisterWindow);
// Popup register end

// Popup login start
const popupLoginOpenButton = document.querySelector('.popup-login_link-button');
const popupLoginOpenLink = document.querySelector('.popup-login-register_link');
const popupLoginWindow = document.querySelector('.popup-login');

function openLoginPopup(event) {
  if (
    event.target.closest('.popup-login_link-button') ||
    event.target.closest('.popup-login-register_link') ||
    event.target.closest('.popup-register__inner-link')
  ) {
    popupLoginWindow.classList.add('open');
    popupLoginWindow.addEventListener('click', function (event) {
      if (
        !event.target.closest('.popup-login__content') ||
        event.target.closest('.close-popup') ||
        event.target.closest('.popup-login__inner-link')
      ) {
        popupLoginWindow.classList.remove('open');
      }
    });
  }
}

function escapeCloseLoginWindow(event) {
  if (event.code === 'Escape') {
    popupLoginWindow.classList.remove('open');
  }
}

document.addEventListener('click', openLoginPopup);
document.addEventListener('keyup', escapeCloseLoginWindow);
// Popup login end

// working with localStorage start
const REGISTER_FORM = document.getElementById('register-form');
const FIRSTNAME_INPUT = document.getElementById('first-name');
const LASTNAME_INPUT = document.getElementById('last-name');
const EMAIL_INPUT = document.getElementById('email');
const PASSWORD_INPUT = document.getElementById('password');

function createUser(event) {
  event.preventDefault();
  let user = {};
  user.firstname = FIRSTNAME_INPUT.value;
  user.lastname = LASTNAME_INPUT.value;
  user.email = EMAIL_INPUT.value;
  user.password = PASSWORD_INPUT.value;
  REGISTER_FORM.reset();
  popupRegisterWindow.classList.remove('open');

  console.log(user);

  usersData = JSON.stringify(user);

  localStorage.setItem('user', usersData);
}

REGISTER_FORM.addEventListener('submit', createUser);

// working with localStorage end
