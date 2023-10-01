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
    console.log(`${length} ${infoText}`);
    removeImages();
    for (const image of images) {
      const newImage = createImage(image.urls.small);
      IMAGE_CONTAINER.append(newImage);
    }
  } else {
    console.log(`no ${infoText}`);
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
