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

const TRACK_LINE = document.querySelector('.track-line');
const CURRENT_LINE = document.querySelector('.current-line');

const CURRENT_TIME = document.getElementById('current-time');
const TOTAL_TIME = document.getElementById('total-time');

SHUFFLE_BUTTON.addEventListener('click', changeShuffle);
REPEAT_BUTTON.addEventListener('click', changeRepeat);
PLAY_BUTTON.addEventListener('click', playPause);

let repeatIsOn = true;
let isPaused = true;
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
  isPaused = false;
}

function pausePlaying() {
  AUDIO.classList.add('pause');
  PLAY_BUTTON.classList.remove('active-color');
  AUDIO.pause();
  PLAY_BUTTON.innerText = 'play_arrow';
  PLAYING_WORD.classList.remove('active');
  PAUSED_WORD.classList.add('active');
  isPaused = true;
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
PREVIOUS_BUTTON.addEventListener('click', previousTrack);

function nextTrack() {
  if (shuffleIsOn) {
    trackIndex = getRundomTrackNumber();
    loadTrackData(trackIndex);
    CURRENT_LINE.style.width = '';
    if (!isPaused) {
      startPlaying();
    }
  } else {
    trackIndex++;
    if (trackIndex > songsNumber - 1) {
      if (repeatIsOn) {
        trackIndex = 0;
        loadTrackData(trackIndex);
        CURRENT_LINE.style.width = '';
        if (!isPaused) {
          startPlaying();
        }
      } else trackIndex--;
    } else {
      loadTrackData(trackIndex);
      CURRENT_LINE.style.width = '';
      if (!isPaused) {
        startPlaying();
      }
    }
  }
}

function previousTrack() {
  if (shuffleIsOn) {
    trackIndex = getRundomTrackNumber();
    loadTrackData(trackIndex);
    CURRENT_LINE.style.width = '';
    if (!isPaused) {
      startPlaying();
    }
  } else {
    trackIndex--;
    if (trackIndex < 0) {
      if (repeatIsOn) {
        trackIndex = songsNumber - 1;
        loadTrackData(trackIndex);
        CURRENT_LINE.style.width = '';
        if (!isPaused) {
          startPlaying();
        }
      } else trackIndex++;
    } else {
      loadTrackData(trackIndex);
      CURRENT_LINE.style.width = '';
      if (!isPaused) {
        startPlaying();
      }
    }
  }
}

function progressLineIndication(event) {
  const trackDuration = event.target.duration;
  let timePassed = event.target.currentTime;
  CURRENT_LINE.style.width = `${(timePassed / trackDuration) * 100}%`;
  timePassed = Math.round(timePassed);
  const minutes = Math.floor(timePassed / 60);
  const seconds = timePassed % 60;
  if (seconds < 10) {
    CURRENT_TIME.innerText = `${minutes}:0${seconds}`;
  } else {
    CURRENT_TIME.innerText = `${minutes}:${seconds}`;
  }
}

function setTime(event) {
  const choosedLength = event.offsetX;
  const fullTrackLength = TRACK_LINE.clientWidth;
  const fullTrackTime = AUDIO.duration;
  AUDIO.currentTime = (choosedLength / fullTrackLength) * fullTrackTime;
}

function fillTimeFields() {
  const trackDuration = Math.round(AUDIO.duration);
  const minutes = Math.floor(trackDuration / 60);
  const seconds = trackDuration % 60;
  if (seconds < 10) {
    TOTAL_TIME.innerText = `${minutes}:0${seconds}`;
  } else {
    TOTAL_TIME.innerText = `${minutes}:${seconds}`;
  }
}

AUDIO.addEventListener('timeupdate', progressLineIndication);
TRACK_LINE.addEventListener('click', setTime);
AUDIO.addEventListener('loadeddata', fillTimeFields);
