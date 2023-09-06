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
const DROP_MENU_WITH_AUTH = document.querySelector('.drop-menu__with-auth');

const dropMenuNoAuth = function (event) {
  if (event.target.closest('.header__profile-image')) {
    navMenu.classList.remove('active');
    DROP_MENU_NO_AUTH.classList.toggle('drop-menu_active');
  }
  if (
    (DROP_MENU_NO_AUTH.classList.contains('drop-menu_active') &&
      !event.target.closest('.drop-menu') &&
      !event.target.closest('.header__profile-image')) ||
    event.target.closest('.popup-register_link') ||
    event.target.closest('.popup-login_link')
  ) {
    DROP_MENU_NO_AUTH.classList.remove('drop-menu_active');
  }
};

document.addEventListener('click', dropMenuNoAuth);
// Login drop menu display end

// Popup Register-form start
const popupOpenButton = document.querySelector('.popup-register_link-button');
const popupOpenLink = document.querySelector('.popup-register_link');
const popupRegisterWindow = document.querySelector('.popup-register');
const REGISTER_FORM = document.getElementById('register-form');

function openPopup(event) {
  if (
    event.target.closest('.popup-register_link-button') ||
    event.target.closest('.popup-register_link') ||
    event.target.closest('.popup-login__inner-link')
  ) {
    popupRegisterWindow.classList.add('open');
    popupRegisterWindow.addEventListener('click', function (event) {
      if (
        !event.target.closest('.popup__content') ||
        event.target.closest('.close-popup') ||
        event.target.closest('.popup-register__inner-link')
      ) {
        clearFormAndClose();
      }
    });
  }
}

document.addEventListener('click', openPopup);

function clearFormAndClose() {
  REGISTER_FORM.reset();
  popupRegisterWindow.classList.remove('open');
}
// Popup Register-form end

// Popup login start
const popupLoginOpenButton = document.querySelector('.popup-login_link-button');
const popupLoginOpenLink = document.querySelector('.popup-login_link');
const popupLoginWindow = document.querySelector('.popup-login');

function openLoginPopup(event) {
  if (
    event.target.closest('.popup-login_link-button') ||
    event.target.closest('.popup-login_link') ||
    event.target.closest('.popup-register__inner-link')
  ) {
    popupLoginWindow.classList.add('open');
    popupLoginWindow.addEventListener('click', function (event) {
      if (
        !event.target.closest('.popup__content') ||
        event.target.closest('.close-popup') ||
        event.target.closest('.popup-login__inner-link')
      ) {
        clearLoginAndClose();
      }
    });
  }
}

document.addEventListener('click', openLoginPopup);

function clearLoginAndClose() {
  LOGIN_FORM.reset();
  popupLoginWindow.classList.remove('open');
}
// Popup login end

// working with localStorage start
const FIRSTNAME_INPUT = document.getElementById('first-name');
const LASTNAME_INPUT = document.getElementById('last-name');
const EMAIL_INPUT = document.getElementById('email');
const PASSWORD_INPUT = document.getElementById('password');
const PROFILE_INITIALS = document.querySelector('.header__profile-initials');
const LOGOUT_LINK = document.querySelector('.popup-logout_link');
const DROP_MENU_HEADING = document.getElementById('drop-menu__profile-heading');
const DROP_MENU_CARDNUMBER = document.querySelector('.drop-menu__card-number');
const POPUP_PROFILE_CARDNUMBER = document.querySelector(
  '.popup-my-profile__card-number-value'
);
const POPUP_PROFILE_FULLNAME = document.querySelector(
  '.popup-my-profile__name-inside'
);
const POPUP_PROFILE_INITIALS = document.getElementById('my-profile__initials');
const POPUP_PROFILE_VISITS = document.querySelector(
  '.popup-my-profile__visits'
);
const POPUP_PROFILE_BOOKS = document.querySelector('.popup-my-profile-books');

const LOGIN_FORM = document.getElementById('login-form');
const LOGIN_EMAIL = document.getElementById('login-email');
const LOGIN_PASSWORD = document.getElementById('login-password');

let users = [];
let usersCollection = [];
let user = {};
let userDataIsCorrect;
let loginDataIsCorrect;
let isLoggedIn = false;

function createNewUser() {
  user.firstname = FIRSTNAME_INPUT.value.trim().toLowerCase();
  user.lastname = LASTNAME_INPUT.value.trim().toLowerCase();
  user.email = EMAIL_INPUT.value.trim().toLowerCase();
  user.password = PASSWORD_INPUT.value.trim();
  user.visits = 1;
  user.books = [];
  user.cardnumber = Math.floor(Math.pow(16, 9) * Math.random()).toString(16);
  for (let i = 0; i < 7; i++) {
    if (user.cardnumber.length < 9) {
      user.cardnumber = '0' + user.cardnumber;
    }
  }

  userDataIsCorrect = user.firstname.trim() && user.lastname.trim();

  if (!userDataIsCorrect) {
    alert('First name and Last name fields must not be empty!');
    return;
  }
}

function writeCardNumber(cardNumber) {
  navigator.clipboard.writeText(cardNumber).then(
    () => {
      console.log('copied');
    },
    () => {
      console.error('not copied');
    }
  );
}

function copyCard(event) {
  if (event.target.closest('.popup-my-profile__icon-copy')) {
    writeCardNumber(user.cardnumber.toUpperCase());
  } else {
    return;
  }
}

function displayPersonalUserData() {
  PROFILE_INITIALS.textContent = user.firstname[0] + user.lastname[0];
  let fullName = `${user.firstname
    .charAt(0)
    .toUpperCase()}${user.firstname.slice(1)} ${user.lastname
    .charAt(0)
    .toUpperCase()}${user.lastname.slice(1)}`;
  PROFILE_INITIALS.setAttribute('title', fullName);
  PROFILE_INITIALS.classList.add('header__profile-initials_visible');
  PROFILE_IMAGE.classList.remove('header__profile-image_visible');
  DROP_MENU_HEADING.classList.add('drop-menu__heading_login');
  DROP_MENU_CARDNUMBER.textContent = user.cardnumber;
  POPUP_PROFILE_CARDNUMBER.textContent = user.cardnumber;
  POPUP_PROFILE_FULLNAME.textContent = fullName;
  POPUP_PROFILE_INITIALS.textContent = user.firstname[0] + user.lastname[0];
  POPUP_PROFILE_VISITS.textContent = user.visits;
  POPUP_PROFILE_BOOKS.textContent = user.books.length;
}

function logOut(event) {
  if (event.target.closest('.popup-logout_link')) {
    user = {};
    PROFILE_INITIALS.textContent = '';
    PROFILE_INITIALS.removeAttribute('title');
    PROFILE_INITIALS.classList.remove('header__profile-initials_visible');
    PROFILE_IMAGE.classList.add('header__profile-image_visible');
    DROP_MENU_HEADING.classList.remove('drop-menu__heading_login');
    DROP_MENU_CARDNUMBER.textContent = '';
    POPUP_PROFILE_CARDNUMBER.textContent = '';
    POPUP_PROFILE_FULLNAME.textContent = '';
    POPUP_PROFILE_INITIALS.textContent = '';
    POPUP_PROFILE_VISITS.textContent = '';
    POPUP_PROFILE_BOOKS.textContent = '';
    isLoggedIn = false;
  }
}

document.addEventListener('click', copyCard);

document.addEventListener('click', logOut);

function addFirstUser() {
  console.log(
    'в хранилище пока нет пользователей, добавляю нового пользователя',
    user.firstname,
    user.lastname
  );
  users.push(user);
  usersCollection = users;
  localStorage.setItem('users', JSON.stringify(usersCollection));
  usersCollection = JSON.parse(localStorage.getItem('users'));
  console.log('количество пользователей в базе:', usersCollection.length);
  console.log('полный перечень пользователей:');
  usersCollection.forEach((item) => {
    console.log(item);
  });
  clearFormAndClose();
  isLoggedIn = true;
  displayPersonalUserData();
}

function addNextUser() {
  console.log('в хранилище уже есть пользователи, проверяю на совпадения');
  userIsUnique = true;
  usersCollection.forEach((item) => {
    if (user.email === item.email) {
      console.log('такой пользователь уже существует');
      userIsUnique = false;
    }
  });
  if (userIsUnique) {
    console.log('добавляю нового пользователя:', user.firstname, user.lastname);
    usersCollection.push(user);
    localStorage.setItem('users', JSON.stringify(usersCollection));
    console.log('количество пользователей в базе:', usersCollection.length);
    console.log('полный перечень пользователей:');
    usersCollection.forEach((item) => {
      console.log(item);
    });
    clearFormAndClose();
    isLoggedIn = true;
    displayPersonalUserData();
  } else {
    console.log('ошибка добавления нового пользователя');
    alert(
      'Такой пользователь уже существует. Войдите в учётную запись или придумайте что-то новенькое!'
    );
  }
}

function UserDataProcessing(event) {
  event.preventDefault();
  createNewUser();

  if (!userDataIsCorrect) {
    return;
  }

  usersCollection = JSON.parse(localStorage.getItem('users'));

  if (!usersCollection || usersCollection.length === 0) {
    addFirstUser();
  } else {
    addNextUser();
  }

  usersData = JSON.stringify(user);

  localStorage.setItem('user', usersData);
}

REGISTER_FORM.addEventListener('submit', UserDataProcessing);

// working on Login ability start
function logInDataProcessing(event) {
  event.preventDefault();
  const emailAttempt = LOGIN_EMAIL.value.trim().toLowerCase();
  const passwordAttempt = LOGIN_PASSWORD.value.trim();
  let loginByEmail;

  if (!emailAttempt) {
    alert('Email field must not be empty!');
    return;
  }

  if (!passwordAttempt) {
    alert('Password field must not be empty!');
    return;
  }

  usersCollection = JSON.parse(localStorage.getItem('users'));

  if (!usersCollection || usersCollection.length === 0) {
    alert(
      `User with e-mail ${emailAttempt} not found! You need to register before log in.`
    );
    return;
  }

  if (emailAttempt.includes('@')) {
    loginByEmail = true;
  }

  let userPosition;
  let result;
  let currentUser;

  if (loginByEmail) {
    currentUser = usersCollection.find((item, index) => {
      if (item.email === emailAttempt) {
        userPosition = index;
        if (item.password === passwordAttempt) {
          return true;
        } else {
          result = 'password incorrect!';
          return false;
        }
      } else {
        return false;
      }
    });
  } else {
    currentUser = usersCollection.find((item, index) => {
      if (item.cardnumber === emailAttempt) {
        userPosition = index;
        if (item.password === passwordAttempt) {
          return true;
        } else {
          result = 'password incorrect!';
          return false;
        }
      } else {
        return false;
      }
    });
  }

  if (result) {
    alert(result);
    LOGIN_PASSWORD.value = '';
    return;
  }

  if (!currentUser) {
    if (loginByEmail) {
      alert(
        `User with e-mail: ${emailAttempt} not found!\nYou need to register before log in.`
      );
    } else {
      alert(
        `User with readers card: ${emailAttempt} not found!\nYou need to register before log in.`
      );
    }
    return;
  }

  user = currentUser;
  user.visits += 1;
  usersCollection[userPosition] = user;

  localStorage.setItem('users', JSON.stringify(usersCollection));

  displayPersonalUserData();
  clearLoginAndClose();
}

LOGIN_FORM.addEventListener('submit', logInDataProcessing);
// working on Login ability end

// working with localStorage end

// Profile drop menu display start
const dropMenuWithAuth = function (event) {
  if (event.target.closest('.header__profile-initials')) {
    navMenu.classList.remove('active');
    DROP_MENU_WITH_AUTH.classList.toggle('drop-menu_active');
  }
  if (
    (DROP_MENU_WITH_AUTH.classList.contains('drop-menu_active') &&
      !event.target.closest('.drop-menu') &&
      !event.target.closest('.header__profile-initials')) ||
    event.target.closest('.popup-profile_link') ||
    event.target.closest('.popup-logout_link')
  ) {
    DROP_MENU_WITH_AUTH.classList.remove('drop-menu_active');
  }
};

document.addEventListener('click', dropMenuWithAuth);
// Profile drop menu display end

//Popup My-Profile start
const POPUP_MY_PROFILE = document.querySelector('.popup-my-profile');
const popupMyProfileOpenLink = document.querySelector('.popup-profile_link');

function openMyProfilePopup(event) {
  if (event.target.closest('.popup-profile_link')) {
    POPUP_MY_PROFILE.classList.add('open');
    POPUP_MY_PROFILE.addEventListener('click', function (event) {
      if (
        !event.target.closest('.popup-my-profile__content') ||
        event.target.closest('.popup-my-profile__close-button')
      ) {
        POPUP_MY_PROFILE.classList.remove('open');
      }
    });
  }
}

document.addEventListener('click', openMyProfilePopup);
//Popup My-Profile end

// Close windows on Esc button start
function escapeFunction(event) {
  if (event.code === 'Escape') {
    navMenu.classList.remove('active');
    DROP_MENU_NO_AUTH.classList.remove('drop-menu_active');
    DROP_MENU_WITH_AUTH.classList.remove('drop-menu_active');
    popupRegisterWindow.classList.remove('open');
    REGISTER_FORM.reset();
    popupLoginWindow.classList.remove('open');
    DROP_MENU_WITH_AUTH.classList.remove('drop-menu_active');
    POPUP_MY_PROFILE.classList.remove('open');
  }
}
document.addEventListener('keyup', escapeFunction);
// Close windows on Esc button end
