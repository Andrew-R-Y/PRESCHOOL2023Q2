BUTTON = document.querySelector('.button');
const size = 16;
let allElements = document.querySelectorAll('.board > span');
let body = [131, 130, 129];
let result = 0;
let step = 1;
let move;
let horizontalDirection = true;
let lastElement;
let targetNumber;

function runGame() {
  clearInterval(move);
  result = 0;
  for (const element of allElements) {
    element.classList.remove('body');
  }
  for (const element of allElements) {
    element.classList.remove('target');
  }
  generateTarget();
  move = setInterval(moving, 250);
}

function clearBoard() {
  allElements.forEach((element) => {
    element.classList.remove('body');
  });
}

function moving() {
  clearBoard();
  body.unshift(body[0] + step);
  lastElement = body.pop();
  checkTarget(body[0]);
  displaySnake();
  if (step === 1 || step === -1) {
    horizontalDirection = true;
  } else {
    horizontalDirection = false;
  }
}

function checkTarget(elementNumber) {
  if (allElements[elementNumber].classList.contains('target')) {
    allElements[elementNumber].classList.remove('target');
    body.push(lastElement);
    generateTarget();
  }
}

function generateTarget() {
  targetNumber = Math.floor(Math.random() * size * size + 1);
  console.log(targetNumber);
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
  if (
    (event.keyCode === 65 || event.keyCode === 37) &&
    step !== 1 &&
    !horizontalDirection
  ) {
    step = -1;
  }
  if (
    (event.keyCode === 87 || event.keyCode === 38) &&
    step !== 16 &&
    horizontalDirection
  ) {
    step = -16;
  }
  if (
    (event.keyCode === 68 || event.keyCode === 39) &&
    step !== -1 &&
    !horizontalDirection
  ) {
    step = 1;
  }
  if (
    (event.keyCode === 83 || event.keyCode === 40) &&
    step !== -16 &&
    horizontalDirection
  ) {
    step = 16;
  }
}

BUTTON.addEventListener('click', runGame);
document.addEventListener('keydown', chooseDirection);
