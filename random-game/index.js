const BUTTON_START = document.querySelector('.button-start');
const BUTTON_RESULTS = document.querySelector('.button-results');
const RESULT = document.querySelector('span.score');
const MARIO_COIN = document.querySelector('.mario-coin');
const SAD_TROMBONE = document.querySelector('.sad-trombone');
const MARIO = document.querySelector('.mario');
const HALLELUJAH = document.querySelector('.hallelujah');
const size = 16;
let allElements = document.querySelectorAll('.board > span');
let body = [131, 130, 129];
let result = 0;
let results = [];
let step = 1;
let move;
let lastElement;
let targetNumber;
displaySnake();
MARIO.loop = true;
let resultsInformation = '';

function loadResults() {
  results = JSON.parse(localStorage.getItem('superSquad'));
  console.log(results);
  if (!results) {
    results = [];
  }
}

loadResults();

function showResults(data) {
  if (data.length > 0) {
    resultsInformation = data.join('\n');
    alert(`Last results are:\n${resultsInformation}`);
  } else {
    alert(`At this moment no one can deal with this game!`);
  }
}

function saveResult() {
  if (result > 0) {
    results.push(result);
    if (results.length > 10) {
      results.shift();
    }
    localStorage.setItem('superSquad', JSON.stringify(results));
  } else {
    return;
  }
}

function runGame() {
  HALLELUJAH.pause();
  HALLELUJAH.currentTime = 0;
  MARIO.currentTime = 0;
  MARIO.play();
  clearInterval(move);
  result = 0;
  RESULT.innerText = result;
  for (const element of allElements) {
    element.classList.remove('body');
  }
  for (const element of allElements) {
    element.classList.remove('target');
  }
  body = [131, 130, 129];
  step = 1;
  horizontalDirection = true;
  displaySnake();
  generateTarget();
  move = setInterval(moving, 250);
}

function clearBoard() {
  allElements.forEach((element) => {
    element.classList.remove('body');
  });
}

function moving() {
  if (checkFail()) {
    clearBoard();
    body.unshift(body[0] + step);
    lastElement = body.pop();
    checkTarget(body[0]);
    displaySnake();
  }
}

function checkFail() {
  if (
    (body[0] > size * (size - 1) && step === size) ||
    (body[0] < size && step === -size) ||
    (body[0] % size === size - 1 && step === 1) ||
    (body[0] % size === 0 && step === -1) ||
    allElements[body[0] + step].classList.contains('body')
  ) {
    clearInterval(move);
    MARIO.pause();
    SAD_TROMBONE.play();
    saveResult();
    loadResults();
    if (
      confirm(`Game over! Your result is: ${result}\nPress 'Ok' to restart!`)
    ) {
      window.location = './';
    } else {
      return false;
    }
  } else {
    return true;
  }
}

function checkTarget(elementNumber) {
  if (allElements[elementNumber].classList.contains('target')) {
    allElements[elementNumber].classList.remove('target');
    body.push(lastElement);
    result++;
    MARIO_COIN.play();
    RESULT.innerText = result;
    if (resultCheck(result)) {
      clearInterval(move);
    }
    generateTarget();
  }
}

function generateTarget() {
  targetNumber = Math.floor(Math.random() * size * size + 1);
  if (!body.includes(targetNumber)) {
    allElements[targetNumber].classList.add('target');
  } else {
    generateTarget();
  }
}

function displaySnake() {
  body.forEach((piece) => {
    allElements[piece].classList.add('body');
  });
}

function chooseDirection(event) {
  if ((event.keyCode === 65 || event.keyCode === 37) && step !== 1) {
    step = -1;
  }
  if ((event.keyCode === 87 || event.keyCode === 38) && step !== 16) {
    step = -16;
  }
  if ((event.keyCode === 68 || event.keyCode === 39) && step !== -1) {
    step = 1;
  }
  if ((event.keyCode === 83 || event.keyCode === 40) && step !== -16) {
    step = 16;
  }
}

function resultCheck(score) {
  if (score === 12) {
    MARIO.pause();
    HALLELUJAH.play();
    saveResult();
    loadResults();
    if (
      confirm(
        `You win!\nYour result is: 12! This is the maximum possible result in my game! \nPress 'Ok' if you want to play again!`
      )
    ) {
      window.location = './';
    } else {
      return true;
    }
  }
}

BUTTON_START.addEventListener('click', runGame);
BUTTON_RESULTS.addEventListener('click', () => {
  showResults(results);
});
document.addEventListener('keydown', chooseDirection);
