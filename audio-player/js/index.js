const PLAY_BUTTON = document.getElementById('play-button');
const SHUFFLE_BUTTON = document.getElementById('shuffle');
const REPEAT_BUTTON = document.getElementById('repeat');

const PREVIOUS_BUTTON = document.getElementById('previous');
const NEXT_BUTTON = document.getElementById('next');

const AUDIO = document.getElementById('audio');
const READY_WORD = document.querySelector('.ready');
const PLAYING_WORD = document.querySelector('.playing');
const PAUSED_WORD = document.querySelector('.paused');

const songName = document.querySelector('.song-name');
const artistName = document.querySelector('.artist-name');
const songImage = document.getElementById('image');

SHUFFLE_BUTTON.addEventListener('click', changeShuffle);
REPEAT_BUTTON.addEventListener('click', changeRepeat);
PLAY_BUTTON.addEventListener('click', playPause);

let repeatIsOn = true;
let shuffleIsOn = false;

function changeShuffle() {
  if (shuffleIsOn) {
    SHUFFLE_BUTTON.classList.remove('active-color');
    shuffleIsOn = false;
  } else {
    SHUFFLE_BUTTON.classList.add('active-color');
    shuffleIsOn = true;
  }
}

function changeRepeat() {
  if (repeatIsOn) {
    REPEAT_BUTTON.classList.remove('active-color');
    repeatIsOn = false;
  } else {
    REPEAT_BUTTON.classList.add('active-color');
    repeatIsOn = true;
  }
}

function startPlaying() {
  AUDIO.classList.remove('pause');
  PLAY_BUTTON.classList.add('active-color');
  AUDIO.play();
  PLAY_BUTTON.innerText = 'pause';
  READY_WORD.classList.remove('active');
  PAUSED_WORD.classList.remove('active');
  PLAYING_WORD.classList.add('active');
}

function pausePlaying() {
  AUDIO.classList.add('pause');
  PLAY_BUTTON.classList.remove('active-color');
  AUDIO.pause();
  PLAY_BUTTON.innerText = 'play_arrow';
  PLAYING_WORD.classList.remove('active');
  PAUSED_WORD.classList.add('active');
}

function playPause() {
  if (!AUDIO.classList.contains('pause')) {
    pausePlaying();
  } else {
    startPlaying();
  }
}

let trackIndex = 0;

const songsNumber = playlist.length;

function getRundomTrackNumber() {
  const result = Math.floor(Math.random() * songsNumber);
  if (result !== trackIndex) {
    return result;
  } else return getRundomTrackNumber();
}

function loadTrackData(index) {
  let trackData = playlist[index];
  songName.innerText = `${index + 1}. ${trackData.title.replaceAll('_', ' ')}`;
  artistName.innerText = trackData.artist.replaceAll('_', ' ');
  songImage.src = `./assets/img/${trackData.image}.jpg`;
  AUDIO.src = `./assets/audio/${trackData.track}.mp3`;
}

window.addEventListener('load', () => {
  loadTrackData(trackIndex);
});

NEXT_BUTTON.addEventListener('click', nextTrack);

function nextTrack() {
  if (shuffleIsOn) {
    trackIndex = getRundomTrackNumber();
    console.log(trackIndex);
    loadTrackData(trackIndex);
    startPlaying();
  } else {
    trackIndex++;
    if (trackIndex > songsNumber) {
      if (repeatIsOn) {
        trackIndex = 0;
        console.log(trackIndex);
        loadTrackData(trackIndex);
        startPlaying();
      } else trackIndex--;
    } else {
      console.log(trackIndex);
      loadTrackData(trackIndex);
      startPlaying();
    }
  }
}
