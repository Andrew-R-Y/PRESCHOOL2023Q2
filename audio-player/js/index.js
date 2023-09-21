const SHUFFLE_BUTTON = document.getElementById('shuffle');
const REPEAT_BUTTON = document.getElementById('repeat');

SHUFFLE_BUTTON.addEventListener('click', changeShuffle);
REPEAT_BUTTON.addEventListener('click', changeRepeat);

function changeShuffle() {
  SHUFFLE_BUTTON.classList.toggle('active-color');
}

function changeRepeat() {
  REPEAT_BUTTON.classList.toggle('active-color');
}
