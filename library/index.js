console.log(
  'Самооценка: 204/ 204 \n \n',
  'Этап 1: Пользователь не зарегистрирован \n\n',
  'Ограниченная карусель в блоке About \n',
  '1.	Карусель реагирует на нажатие кнопок (кнопки под каруселью и стрелочки слева и справа в мобильной версии) и происходит анимация перелистывания. +15 \n',
  '2.	На экране шириной 1440px проверяем, чтобы было доступно 2 других скрытых картинки. При каждом нажатии выезжает следующая, и так до границ справа и слева. +2 \n',
  '3.	Выделенная кнопка под каруселью (имеется ввиду кнопка соответствующая активному слайду и которая имеет коричневый цвет) - неактивная. +2 \n',
  '4.	Если анимация карусели не успела завершиться, при этом нажата была следующая кнопка, то картинка не должна зависнуть в промежуточном состоянии. +2 \n',
  '5.	На экране шириной 768px проверяем, чтобы было доступно 4 других скрытых картинки. Для этого меняем разрешение и перезагружаем страницу. Теперь доступных перемещений становится 5. +2 \n',
  '6.	Неактивными становятся не только выделенные кнопки, но и стрелочки на границах карусели. +2 \n\n',
  'Слайдер в блоке Favorites \n',
  '1.	"Слайдер" реагирует на нажатие кнопок панели навигации и происходит анимация затухания и проявления. +15\n',
  '2.	На любой ширине экрана все 4 карточки с книгами одновременно будут плавно затухать, а затем плавно проявляться следующие. +2\n',
  '3.	Анимация может быть прервана следующим нажатием на кнопку выбора поры года, но при этом анимация не должна застывать в промежуточном состоянии. Если анимация не была прервана следующим нажатием кнопки, то она должна отрабатывать до конца. +2\n',
  '4.	Во время анимаций высота блока Favorites не должна меняться. +2\n',
  '5.	❗Панель навигации "слайдера" сделана по технологии "sticky" для разрешений с одним рядом книг (768px и меньше), т.е. опускается вниз вместе со скроллом страницы, прилипая к верхней части экрана, в рамках блока Favorites. +2\n\n',
  'До регистрации\n',
  '1.	Нажатие на кнопку Check the card ни к чему не приведет.\n',
  'До авторизации\n',
  '1.	Иконка юзера в хедере отображается в виде силуэта.\n',
  '2.	В блоке Favorites все кнопки должны иметь имя Buy, а не Own. +2\n \n',
  'Этап 2: Пользователь на этапе регистрации\n',
  'Меню авторизации при нажатии на иконку пользователя\n',
  '1.	Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой. +2\n',
  '2.	На разрешении 768px, при открытом бургер-меню, оно закрывается и открывается меню авторизации. +2\n',
  '3.	То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна при открытом меню авторизации. +2\n',
  '4.	Нажатие на любую область или элемент вне меню приводят к закрытию меню авторизации. +2\n\n',
  'Модальное окно REGISTER\n',
  '1.	Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).\n',
  '2.	При нажатии на кнопку Register в открытом меню авторизации появляется модальное окно REGISTER, где есть поля First name, Last name, E-mail и Password. +2\n',
  '3.	При нажатии кнопки Sign Up в блоке Digital Library Cards также появляется модальное окно REGISTER. +2\n',
  '4.	Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2\n',
  '5.	При нажатии на крестик в углу окна, или на затемненную область вне этого окна, оно закрывается. +2\n',
  '6.	В данном случае, ограничения по полям - все поля должны быть не пустыми. +2\n',
  '7.	Пароль должен быть не короче 8 символов. +2\n',
  '8.	В поле E-mail должна быть валидация типа email. +2\n\n',
  'Окончание регистрации\n',
  '1.	Данные сохраняются в хранилище localStorage, в том числе и пароль, хотя в реальной жизни так делать нельзя. +2\n',
  '2.	Иконка пользователя меняется на заглавные буквы имени. +2\n',
  '3.	Отображение страницы приходит в состояние после авторизации (этап 4). +2\n',
  '4.	Будет сгенерирован девятизначный Card Number случайным образом в формате 16-ричного числа. +2\n',
  'При наличии регистрации, но будучи не авторизованным\n\n',
  '1.	Блок Digital Library Cards. Если введенные имя и номер карты совпадают с данными пользователя, то отображается панель с информацией, вместо кнопки Check the card на 10 секунд. +2\n',
  '2.	Там же после отображения информации, кнопка возвращается в прежнее состояние, а поля в форме сбрасываются. +2\n\n',
  'Этап 3: Пользователь на этапе входа в учетную запись после регистрации.\n',
  'Модальное окно LOGIN\n',
  '1.	Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).\n',
  '2.	При нажатии на кнопку Log In появляется модальное окно LOGIN, где есть поля E-mail or readers card и Password. +2\n',
  '3.	При нажатии кнопки Log In в блоке Digital Library Cards также появляется модальное окно LOGIN. +2\n',
  '4.	Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2\n',
  '5.	При нажатии на крестик в углу окна, или на затемненную область вне этого окна, оно закрывается. +2\n',
  '6.	Для авторизации все поля должны быть не пустыми. +2\n',
  '7.	Пароль должен быть не короче 8 символов. +2\n\n',
  'Блок Favorites\n',
  '1.	Если пользователь еще не вошел в учетную запись, то при нажатии на любую кнопку Buy открывается модальное окно LOGIN. +2\n\n',
  'Этап 4: Пользователь после входа в учетную запись\n',
  'Меню профиля при нажатии на иконку с инициалами пользователя\n',
  '1.	При наведении курсором на иконку пользователя должно отображаться полное имя пользователя (атрибут title). +2\n',
  '2.	Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой. +2\n',
  '3.	На разрешении 768px при открытом бургер-меню, оно закрывается и открывается меню авторизации. +2\n',
  '4.	То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна. +2\n',
  '5.	Нажатие на любую область или элемент вне меню приводят к закрытию меню профиля. +2\n',
  '6.	❗Вместо надписи Profile отображается девятизначный Card Number. Для Card Number можно использовать меньший шрифт чтобы надпись вметилась в контейнер, +2\n',
  '7.	Нажатие на кнопку My Profile открывает модальное окно MY PROFILE. +2\n',
  '8.	Нажатие на кнопку Log Out приводит к выходу пользователю из состояния авторизации, возвращаемся к этапу #1. +2\n\n',
  'Модальное окно MY PROFILE\n',
  '1.	Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).\n',
  '2.	В случае если имя и фамилия слешиком длинные и не влазят в блок то должен произойти перенос фамилии на следующую строку.\n',
  '3.	Счетчик для Visits отображает, сколько раз пользователь проходил процесс авторизации, включая самый первый - регистрацию. +2\n',
  '4.	Счетчик для Books отображает, сколько у пользователя книг находятся в состоянии Own. Значение варьируется 0-16. +2\n',
  '5.	Рядом с Card Number есть кнопка, нажатие на которую копирует код карты клиента в буфер обмена. +2\n',
  '6.	Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2\n',
  '7.	При нажатии на крестик в углу окна, или на затемненную область вне этого окна, оно закрывается. +2\n\n',
  'Блок Favorites\n',
  '1.	При нажатии на любую кнопку Buy, еще до покупки абонемента, открывается модальное окно BUY A LIBRARY CARD. +2\n',
  '2.	При нажатии на любую кнопку Buy, после покупки абонемента, меняет вид кнопки на неактивную Own, добавляя единицу к счетчику книг в профиле. +2\n',
  '3.	Кроме того после нажатия обновляется не только счетчик, но и название книги должно отобразится в разделе Rented Books. Название формируется по принципу <название книги>, <автор книги>. В случае если название книги слишком длинное или список стал слишком большой список книг в блоке Rented Books становится скроллируемым (по необходимости горизонтально/ вертикально или оба скролла сразу) Тайтл Rented Books скроллироваться не должен +2\n\n',
  'Модальное окно BUY A LIBRARY CARD\n',
  '1.	❗Модальное окно нужно сделать шириной 640px. Будет это обрезка по 5px по бокам, или просто уменьшение длины с сохранением сетки - значения не имеет, хотя при правильной сеточной структуре, сделать это будет намного проще. +2\n',
  '2.	Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).\n',
  '3.	При нажатии на крестик в углу окна, или на затемненную область вне этого окна, оно закрывается. +2\n',
  '4.	Для того, чтобы кнопка Buy была активна, все поля должны быть не пустыми. +2\n',
  '5.	Bank card number должен содержать 16 цифр. С пробелами каждые 4 символа или нет - значения не имеет. +2\n',
  '6.	Expiration code содержит 2 поля с ограничением в 2 цифры. +2\n',
  '7.	CVC должен содержать 3 цифры. +2\n',
  '8.	После удачного нажатия на кнопку Buy, окно закрывается, и больше мы к нему не возвращаемся.\n\n',
  'Блок Digital Library Cards\n',
  '1.	При наличии авторизации вместо кнопки Check the Card будут отображаться данные пользователя и бейджи, как на дизайне LibraryCard after login in account. +2\n'
);

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
    } else if (
      book.classList.contains('is-active') &&
      book.classList.contains('fade-out')
    ) {
      book.classList.remove('is-active');
      book.classList.remove('fade-out');
      book.removeEventListener('animationend', changeActive);
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
    event.target.closest('.popup-register__inner-link') ||
    (event.target.closest('.favorites__button') && !isLoggedIn)
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
const POPUP_PROFILE_VISITS = document.querySelector('.popup-my-profile-visits');
const BOTTOM_PROFILE_VISITS = document.querySelector('.my-profile-visits');
const POPUP_PROFILE_BOOKS_NUMBER = document.querySelector(
  '.popup-my-profile-books-number'
);
const BOTTOM_PROFILE_BOOKS_NUMBER = document.querySelector(
  '.my-profile-books-number'
);

const LOGIN_FORM = document.getElementById('login-form');
const LOGIN_EMAIL = document.getElementById('login-email');
const LOGIN_PASSWORD = document.getElementById('login-password');
const RENTED_BOOKS = document.getElementById('rented-books');
const CHECK_CARD_BUTTON = document.querySelector('.card__submit');
const FORM_FIND_CARD = document.querySelector('.card__find-card');
const POPUP_BUY_LIBRARY_CARD = document.querySelector(
  '.popup-buy-library-card'
);
const POPUP_BUY_LIBRARY_CARD_FORM = document.getElementById(
  'buy-library-card-form'
);
const FAVORITES_BUTTONS_ALL = document.querySelectorAll('.favorites__button');
const BOTTOM_PROFILE_MENU = document.querySelector('.bottom-profile-menu');
const FIND_CARD_HEADING = document.querySelector('.card__subheading');
const CARD_FIRST_LINE = document.querySelector('.card__firstline');
const CARD_SECOND_LINE = document.querySelector('.card__secondline');
const BOTTOM_SING_UP_BUTTON = document.querySelector(
  '.popup-register_link-button'
);
const BOTTOM_LOG_IN_BUTTON = document.querySelector('.popup-login_link-button');
const BOTTOM_PROFILE_BUTTON = document.querySelector('.profile-link-button');
const CARD_INPUT_NAME = document.querySelector('.card__input-name');
const CARD_INPUT_NUMBER = document.querySelector('.card__input-number');

let users = [];
let usersCollection = [];
let user = {};
let userDataIsCorrect;
let loginDataIsCorrect;
let isLoggedIn = false;
let userPosition;

function createNewUser() {
  user.firstname = FIRSTNAME_INPUT.value.trim().toLowerCase();
  user.lastname = LASTNAME_INPUT.value.trim().toLowerCase();
  user.email = EMAIL_INPUT.value.trim().toLowerCase();
  user.password = PASSWORD_INPUT.value.trim();
  user.visits = 1;
  user.books = [];
  user.bookTitles = [];
  user.ownLibraryCard = false;
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
  BOTTOM_PROFILE_VISITS.textContent = user.visits;
  POPUP_PROFILE_BOOKS_NUMBER.textContent = user.books.length;
  BOTTOM_PROFILE_BOOKS_NUMBER.textContent = user.books.length;
}

function displayBottomProfileMenu() {
  CHECK_CARD_BUTTON.classList.remove('card__submit_active');
  BOTTOM_PROFILE_MENU.classList.add('bottom-profile-menu_active');
  FIND_CARD_HEADING.textContent = 'Your Library card';
  CARD_FIRST_LINE.textContent = 'Visit your profile';
  CARD_SECOND_LINE.textContent =
    'With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.';
  BOTTOM_SING_UP_BUTTON.classList.remove('active');
  BOTTOM_LOG_IN_BUTTON.classList.remove('active');
  BOTTOM_PROFILE_BUTTON.classList.add('active');
  CARD_INPUT_NAME.value = `${user.firstname[0].toUpperCase()}${user.firstname.slice(
    1
  )} ${user.lastname[0].toUpperCase()}${user.lastname.slice(1)}`;
  CARD_INPUT_NUMBER.value = user.cardnumber.toUpperCase();
}

function removeBottomProfileMenu() {
  CHECK_CARD_BUTTON.classList.add('card__submit_active');
  BOTTOM_PROFILE_MENU.classList.remove('bottom-profile-menu_active');
  FIND_CARD_HEADING.textContent = 'Find your Library card';
  CARD_FIRST_LINE.textContent = 'Get a reader card';
  CARD_SECOND_LINE.textContent =
    'You will be able to see a reader card after logging into account or you can register a new account';
  BOTTOM_SING_UP_BUTTON.classList.add('active');
  BOTTOM_LOG_IN_BUTTON.classList.add('active');
  BOTTOM_PROFILE_BUTTON.classList.remove('active');
  CARD_INPUT_NAME.value = '';
  CARD_INPUT_NUMBER.value = '';
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
    BOTTOM_PROFILE_VISITS.textContent = '';
    POPUP_PROFILE_BOOKS_NUMBER.textContent = '';
    BOTTOM_PROFILE_BOOKS_NUMBER.textContent = '';
    isLoggedIn = false;

    removeBottomProfileMenu();

    BOOKS.forEach((book) => {
      book.removeEventListener('click', openBuyLibraryCard);
    });
    userCanBuyBookOff();
    profileRemoveAllRentedBooks();
    FAVORITES_BUTTONS_ALL.forEach((button) => {
      button.classList.remove('own');
    });
  }
}

document.addEventListener('click', copyCard);

document.addEventListener('click', logOut);

function addFirstUser() {
  users.push(user);
  usersCollection = users;
  localStorage.setItem('superSquad', JSON.stringify(usersCollection));
  usersCollection = JSON.parse(localStorage.getItem('superSquad'));
  clearFormAndClose();
  isLoggedIn = true;
  displayPersonalUserData();

  displayBottomProfileMenu();

  BOOKS.forEach((book) => {
    book.addEventListener('click', openBuyLibraryCard);
  });
}

function addNextUser() {
  userIsUnique = true;
  usersCollection.forEach((item) => {
    if (user.email === item.email) {
      userIsUnique = false;
    }
  });
  if (userIsUnique) {
    usersCollection.push(user);
    localStorage.setItem('superSquad', JSON.stringify(usersCollection));
    clearFormAndClose();
    isLoggedIn = true;
    displayPersonalUserData();

    displayBottomProfileMenu();

    BOOKS.forEach((book) => {
      book.addEventListener('click', openBuyLibraryCard);
    });
  } else {
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

  usersCollection = JSON.parse(localStorage.getItem('superSquad'));

  if (!usersCollection || usersCollection.length === 0) {
    addFirstUser();
    userPosition = 0;
  } else {
    userPosition = usersCollection.length;
    addNextUser();
  }
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

  usersCollection = JSON.parse(localStorage.getItem('superSquad'));

  if (!usersCollection || usersCollection.length === 0) {
    alert(
      `User with e-mail or readers card ${emailAttempt} not found! You need to register before log in.`
    );
    return;
  }

  if (emailAttempt.includes('@')) {
    loginByEmail = true;
  }

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

  isLoggedIn = true;
  user = currentUser;
  user.visits += 1;
  usersCollection[userPosition] = user;

  localStorage.setItem('superSquad', JSON.stringify(usersCollection));

  if (user && user.books && user.books.length > 0) {
    user.books.forEach(function (book) {
      const newBook = document.createElement('li');
      newBook.textContent = book;
      newBook.classList.add('popup-my-profile__book-item');
      RENTED_BOOKS.append(newBook);
    });
  }

  disableOwnBookBuyButtons();
  displayPersonalUserData();
  clearLoginAndClose();
  if (!user.ownLibraryCard) {
    BOOKS.forEach((book) => {
      book.addEventListener('click', openBuyLibraryCard);
    });
  } else {
    userCanBuyBookOn();
  }

  displayBottomProfileMenu();
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
  if (
    event.target.closest('.popup-profile_link') ||
    event.target.closest('.profile-link-button')
  ) {
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
    POPUP_BUY_LIBRARY_CARD.classList.remove('open');
    POPUP_BUY_LIBRARY_CARD_FORM.reset();
    POPUP_BUY_LIBRARY_CARD.removeEventListener('keyup', activateBuyButton);
    FORM_FIND_CARD.reset();
    BOTTOM_PROFILE_MENU.classList.remove('bottom-profile-menu_active');
    CHECK_CARD_BUTTON.classList.add('card__submit_active');
  }
}
document.addEventListener('keyup', escapeFunction);
// Close windows on Esc button end

// Buying books in favories section start
function userCanBuyBookOn() {
  if (!isLoggedIn) {
    return;
  }
  BOOKS.forEach(function (book) {
    if (!book.children[4].classList.contains('own')) {
      book.addEventListener('click', bookBuyHandler);
    }
  });
}

function userCanBuyBookOff() {
  BOOKS.forEach(function (book) {
    book.removeEventListener('click', bookBuyHandler);
  });
}

function bookBuyHandler(event) {
  if (event.target.closest('.favorites__button')) {
    let bookTitle = this.children[2].firstElementChild.textContent.trim();
    let bookAuthor = this.children[2].lastElementChild.textContent
      .trim()
      .slice(3);
    const bookItem = `${bookTitle}, ${bookAuthor}`;
    user.books.push(bookItem);
    user.bookTitles.push(bookTitle);
    addBookToMyProfile(bookItem);
    let numberOfBooks = Number(POPUP_PROFILE_BOOKS_NUMBER.textContent);
    numberOfBooks += 1;
    POPUP_PROFILE_BOOKS_NUMBER.textContent = numberOfBooks;
    BOTTOM_PROFILE_BOOKS_NUMBER.textContent = numberOfBooks;
    this.children[4].classList.add('own');
    this.removeEventListener('click', bookBuyHandler);
    usersCollection[userPosition] = user;
    localStorage.setItem('superSquad', JSON.stringify(usersCollection));
  }
}

function disableOwnBookBuyButtons() {
  BOOKS.forEach(checkOwnBooks);
}

function checkOwnBooks(book) {
  let bookTitle = book.children[2].firstElementChild.textContent.trim();
  if (user.bookTitles && user.bookTitles.includes(bookTitle)) {
    book.children[4].classList.add('own');
  }
}

function addBookToMyProfile(book) {
  const newBook = document.createElement('li');
  newBook.textContent = book;
  newBook.classList.add('popup-my-profile__book-item');
  RENTED_BOOKS.append(newBook);
}
// Buying books in favories section end

function profileRemoveAllRentedBooks() {
  while (RENTED_BOOKS.firstChild) {
    RENTED_BOOKS.firstChild.remove();
  }
}
// Popup Buy Library Card functionality start

function openBuyLibraryCard(event) {
  if (event.target.closest('.favorites__button') && isLoggedIn) {
    POPUP_BUY_LIBRARY_CARD.classList.add('open');
    BUY_LIBRARY_CARD_BUTTON.setAttribute('disabled', true);
    BUY_LIBRARY_CARD_BUTTON.classList.remove('active');
    POPUP_BUY_LIBRARY_CARD.addEventListener('keyup', activateBuyButton);
    POPUP_BUY_LIBRARY_CARD_FORM.addEventListener('submit', getLibraryCard);
    POPUP_BUY_LIBRARY_CARD.addEventListener('click', function (event) {
      if (
        !event.target.closest('.popup-buy-library-card__content') ||
        event.target.closest('.popup-buy-library-card__close-button')
      ) {
        POPUP_BUY_LIBRARY_CARD.classList.remove('open');
        POPUP_BUY_LIBRARY_CARD.removeEventListener('keyup', activateBuyButton);
        POPUP_BUY_LIBRARY_CARD_FORM.reset();
      }
    });
  }
}

const CARD_NUMBER_INPUT = document.getElementById('bank-card-number');
const EXPIRATION_CODE_MONTH_INPUT = document.getElementById(
  'expiration-code-month'
);
const EXPIRATION_CODE_YEAR_INPUT = document.getElementById(
  'expiration-code-year'
);
const CVC_INPUT = document.getElementById('cvc');
const CARDHOLDER_NAME_INPUT = document.getElementById('cardholder-name');
const POSTAL_CODE_INPUT = document.getElementById('postal-code');
const CITY_TOWN_INPUT = document.getElementById('city-town');
const BUY_LIBRARY_CARD_BUTTON = document.querySelector(
  '.popup__buy-library-card-button'
);

function activateBuyButton() {
  const input1 = CARD_NUMBER_INPUT.value.trim();
  const input2 = EXPIRATION_CODE_MONTH_INPUT.value.trim();
  const input3 = EXPIRATION_CODE_YEAR_INPUT.value.trim();
  const input4 = CVC_INPUT.value.trim();
  const input5 = CARDHOLDER_NAME_INPUT.value.trim();
  const input6 = POSTAL_CODE_INPUT.value.trim();
  const input7 = CITY_TOWN_INPUT.value.trim();
  if (
    input1 &&
    input1.length > 0 &&
    input2 &&
    input2.length > 0 &&
    input3 &&
    input3.length > 0 &&
    input4 &&
    input4.length > 0 &&
    input5 &&
    input5.length > 0 &&
    input6 &&
    input6.length > 0 &&
    input7 &&
    input7.length > 0
  ) {
    BUY_LIBRARY_CARD_BUTTON.removeAttribute('disabled');
    BUY_LIBRARY_CARD_BUTTON.classList.add('active');
  } else if (
    BUY_LIBRARY_CARD_BUTTON.classList.contains('active') &&
    !BUY_LIBRARY_CARD_BUTTON.hasAttribute('disabled')
  ) {
    BUY_LIBRARY_CARD_BUTTON.setAttribute('disabled', true);
    BUY_LIBRARY_CARD_BUTTON.classList.remove('active');
  }
}

function getLibraryCard(event) {
  event.preventDefault();
  user.ownLibraryCard = true;
  usersCollection[userPosition] = user;
  localStorage.setItem('superSquad', JSON.stringify(usersCollection));
  BOOKS.forEach((book) => {
    book.removeEventListener('click', openBuyLibraryCard);
  });
  userCanBuyBookOn();
  POPUP_BUY_LIBRARY_CARD_FORM.reset();
  POPUP_BUY_LIBRARY_CARD.classList.remove('open');
}
// Popup Buy Library Card functionality end

// Find Library Card start
function findLibraryCard(event) {
  event.preventDefault();
  usersCollection = JSON.parse(localStorage.getItem('superSquad'));

  if (!usersCollection || usersCollection.length === 0) {
    return;
  }

  let cardNumberAttempt = CARD_INPUT_NUMBER.value;
  let userNameAttempt = CARD_INPUT_NAME.value;

  if (cardNumberAttempt) {
    cardNumberAttempt = cardNumberAttempt.trim();
    if (cardNumberAttempt) {
      cardNumberAttempt = cardNumberAttempt.toLowerCase();
    } else {
      alert('Library Card field must not be empty!');
      return;
    }
  } else {
    return;
  }

  if (userNameAttempt) {
    userNameAttempt = userNameAttempt.trim();
    if (userNameAttempt) {
      userNameAttempt = userNameAttempt.toLowerCase();
    } else {
      alert('User name field must not be empty!');
      return;
    }
  } else {
    return;
  }

  user = usersCollection.find((item, index) => {
    if (cardNumberAttempt === item.cardnumber) {
      userPosition = index;
      if (
        item.firstname === userNameAttempt ||
        item.lastname === userNameAttempt
      ) {
        return true;
      } else {
        result = 'user not found!';
        return false;
      }
    } else {
      return false;
    }
  });

  if (user) {
    addBottomUserData();
    setTimeout(removeBottomUserData, 10000);
  } else {
    alert(result);
  }
}

function addBottomUserData() {
  BOTTOM_PROFILE_VISITS.textContent = user.visits;
  BOTTOM_PROFILE_BOOKS_NUMBER.textContent = user.books.length;
  CHECK_CARD_BUTTON.classList.remove('card__submit_active');
  BOTTOM_PROFILE_MENU.classList.add('bottom-profile-menu_active');
  CARD_INPUT_NAME.value = `${user.firstname[0].toUpperCase()}${user.firstname.slice(
    1
  )} ${user.lastname[0].toUpperCase()}${user.lastname.slice(1)}`;
  CARD_INPUT_NUMBER.value = user.cardnumber.toUpperCase();
}

function removeBottomUserData() {
  BOTTOM_PROFILE_MENU.classList.remove('bottom-profile-menu_active');
  CHECK_CARD_BUTTON.classList.add('card__submit_active');
  FORM_FIND_CARD.reset();
  user = {};
}

FORM_FIND_CARD.addEventListener('submit', findLibraryCard);
// Find Library Card end
