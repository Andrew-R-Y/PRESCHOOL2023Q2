const PLAY_BUTTON = document.getElementById('play-button');
const SHUFFLE_BUTTON = document.getElementById('shuffle');
const REPEAT_BUTTON = document.getElementById('repeat');
const AUDIO = document.getElementById('audio');
const PLAYING_WORD = document.getElementById('playing');

SHUFFLE_BUTTON.addEventListener('click', changeShuffle);
REPEAT_BUTTON.addEventListener('click', changeRepeat);
PLAY_BUTTON.addEventListener('click', playPause);

function changeShuffle() {
  SHUFFLE_BUTTON.classList.toggle('active-color');
}

function changeRepeat() {
  REPEAT_BUTTON.classList.toggle('active-color');
}

function playPause() {
  if (!AUDIO.classList.contains('pause')) {
    AUDIO.classList.add('pause');
    PLAY_BUTTON.classList.remove('active-color');
    AUDIO.pause();
    PLAY_BUTTON.innerText = 'play_arrow';
    PLAYING_WORD.innerText = 'Paused';
  } else {
    AUDIO.classList.remove('pause');
    PLAY_BUTTON.classList.add('active-color');
    AUDIO.play();
    PLAY_BUTTON.innerText = 'pause';
    PLAYING_WORD.innerText = 'Playing';
  }
}
