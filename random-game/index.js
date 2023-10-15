BUTTON = document.querySelector('.button');
const size = 16;
let allElements = document.querySelectorAll('.board > span');
let body = [131, 130, 129];
let result;
let step = 1;
let move;

function runGame() {
  clearInterval(move);
  result = 0;
  for (const element of allElements) {
    element.classList.remove('body');
  }
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
  body.pop();
  displaySnake();
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

  console.log(event.keyCode);
}

BUTTON.addEventListener('click', runGame);
document.addEventListener('keyup', chooseDirection);
