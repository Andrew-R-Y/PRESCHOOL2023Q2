console.log(
  ' Самооценка: 60 / 60: \n\n',
  '[x] Вёрстка (10 / 10)\n',
  '- на странице есть несколько фото и строка поиска +5 \n',
  '- в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5 \n\n',
  '[x] При загрузке приложения на странице отображаются полученные от API изображения (10 / 10) \n\n',
  '[x] Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API (10 / 10) \n\n',
  '[x] Поиск (30 / 30) \n',
  '- при открытии приложения курсор находится в поле ввода +5 \n',
  '- есть placeholder +5 \n',
  '- автозаполнение поля ввода отключено (нет выпадающего списка с предыдущими запросами) +5 \n',
  '- поисковый запрос можно отправить нажатием клавиши Enter +5 \n',
  '- после отправки поискового запроса и отображения результатов поиска, поисковый запрос продолжает отображаться в поле ввода +5 \n',
  '- в поле ввода есть крестик при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder +5'
);

const IMAGE_CONTAINER = document.querySelector('.main');
url =
  'https://api.unsplash.com/photos?client_id=kQtp2xCFDX59Fxz8WdVLkEiQ7ryBMrMLY2IQuZ6swRs&orientation=landscape&per_page=15&page=1';

const INPUT = document.querySelector('.input');
const FORM = document.querySelector('.form');

let inputText = '';
let requestUrl = '';

async function getPhotos() {
  const result = await fetch(url);
  const photoData = await result.json();
  console.log(photoData);
  iterateImages(photoData);
}

getPhotos();

function createImage(imageUrl) {
  const image = document.createElement('img');
  image.src = imageUrl;
  image.alt = 'image';
  return image;
}

function iterateImages(images) {
  const infoText = 'images recieved from Unsplash API';
  if (images.length > 0) {
    const length = images.length;
    removeImages();
    for (const image of images) {
      const newImage = createImage(image.urls.small);
      IMAGE_CONTAINER.append(newImage);
    }
  } else {
  }
}

function removeImages() {
  while (IMAGE_CONTAINER.firstChild) {
    IMAGE_CONTAINER.firstChild.remove();
  }
}

function recieveInputText() {
  if (INPUT.value) {
    inputText = INPUT.value.trim();
    inputText = inputText.replaceAll(' ', '%20');
  }
}

function createRequestUrl() {
  if (!inputText) {
    return;
  }
  requestUrl = `https://api.unsplash.com/search/photos?query=${inputText}&per_page=18&orientation=landscape&client_id=kQtp2xCFDX59Fxz8WdVLkEiQ7ryBMrMLY2IQuZ6swRs`;
}

FORM.addEventListener('submit', (event) => {
  event.preventDefault;
  requestProcessing();
});

function requestProcessing() {
  recieveInputText();
  createRequestUrl();
  async function getNewPhotos() {
    const result = await fetch(requestUrl);
    const photoData = await result.json();
    iterateImages(photoData.results);
  }

  getNewPhotos();
}
