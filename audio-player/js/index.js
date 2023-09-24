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

const CURRENT_TIME = document.getElementById('current-time');
const TOTAL_TIME = document.getElementById('total-time');

const PROGRESS_RANGE_INPUT = document.getElementById('track-progress');

SHUFFLE_BUTTON.addEventListener('click', changeShuffle);
REPEAT_BUTTON.addEventListener('click', changeRepeat);
PLAY_BUTTON.addEventListener('click', playPause);

let repeatIsOn = true;
let isPaused = true;
let shuffleIsOn = false;
let mouseDown = false;

document.addEventListener('mousedown', (event) => {
  if (event.target.closest('#track-progress')) {
    mouseDown = true;
  }
});

document.addEventListener('mouseup', () => {
  mouseDown = false;
});

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
  if (!isPaused) {
    setInterval(() => {
      if (!mouseDown) {
        PROGRESS_RANGE_INPUT.value = AUDIO.currentTime;
      }
    }, 500);
  }
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
    if (!isPaused) {
      startPlaying();
    }
  } else {
    trackIndex++;
    if (trackIndex > songsNumber - 1) {
      if (repeatIsOn) {
        trackIndex = 0;
        loadTrackData(trackIndex);
        if (!isPaused) {
          startPlaying();
        }
      } else trackIndex--;
    } else {
      loadTrackData(trackIndex);
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
    if (!isPaused) {
      startPlaying();
    }
  } else {
    trackIndex--;
    if (trackIndex < 0) {
      if (repeatIsOn) {
        trackIndex = songsNumber - 1;
        loadTrackData(trackIndex);
        if (!isPaused) {
          startPlaying();
        }
      } else trackIndex++;
    } else {
      loadTrackData(trackIndex);
      if (!isPaused) {
        startPlaying();
      }
    }
  }
}

function trackTimeIndication(event) {
  const timePassed = Math.round(event.target.currentTime);
  const minutes = Math.floor(timePassed / 60);
  const seconds = timePassed % 60;
  if (seconds < 10) {
    CURRENT_TIME.innerText = `${minutes}:0${seconds}`;
  } else {
    CURRENT_TIME.innerText = `${minutes}:${seconds}`;
  }
}

function progressLineIndication(event) {
  PROGRESS_RANGE_INPUT.max = event.target.duration;
  PROGRESS_RANGE_INPUT.value = event.target.currentTime;
}

function setProgress() {
  AUDIO.currentTime = PROGRESS_RANGE_INPUT.value;
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

AUDIO.addEventListener('timeupdate', trackTimeIndication);
AUDIO.addEventListener('loadeddata', progressLineIndication);
AUDIO.addEventListener('loadeddata', fillTimeFields);
PROGRESS_RANGE_INPUT.addEventListener('change', setProgress);
AUDIO.addEventListener('ended', nextTrack);
