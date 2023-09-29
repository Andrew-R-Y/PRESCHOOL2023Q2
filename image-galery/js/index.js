console.log('Hello, Image gallery!');

const IMAGE_CONTAINER = document.querySelector('.main');
url =
  'https://api.unsplash.com/photos?client_id=kQtp2xCFDX59Fxz8WdVLkEiQ7ryBMrMLY2IQuZ6swRs&orientation=landscape&per_page=15&page=1';

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
    for (const image of images) {
      const newImage = createImage(image.urls.small);
      IMAGE_CONTAINER.append(newImage);
    }
  } else {
    console.log(`no ${infoText}`);
  }
}
