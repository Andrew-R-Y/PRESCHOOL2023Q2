console.log('Hello, Image gallery!');

const IMAGE_CONTAINER = document.querySelector('.wrapper');
url =
  'https://api.unsplash.com/photos?client_id=kQtp2xCFDX59Fxz8WdVLkEiQ7ryBMrMLY2IQuZ6swRs&per_page=5&page=1';

async function getPhotos() {
  const result = await fetch(url);
  const photoData = await result.json();
  console.log(photoData);
  console.log(photoData[1].urls.small);
  const newImage = createImage(photoData[1].urls.small_s3);
  IMAGE_CONTAINER.append(newImage);
}
getPhotos();

function createImage(imageUrl) {
  const image = document.createElement('img');
  image.src = imageUrl;
  image.alt = 'image';
  return image;
}
