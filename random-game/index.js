console.log(`Self-check: 60/60\n
1. Вёрстка (10/10)
- реализован интерфейс игры +5
- в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5
2. Логика игры. Ходы, перемещения фигур, другие действия игрока подчиняются определённым свойственным игре правилам (10/10)
3. Реализовано завершение игры при достижении игровой цели (10/10)
4. По окончанию игры выводится её результат, например, количество ходов, время игры, набранные баллы, выигрыш или поражение и т.д (10/10)
5. Есть таблица результатов, в которой сохраняются результаты 10 игр с наибольшим счетом (лучшим временем и т.п.) или просто 10 последних игр (хранится в local storage) (10/10)
6. Анимации или звуки, или настройки игры. Баллы начисляются за любой из перечисленных пунктов (10/10)`);

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
alert(
  `The maximum score in this game is 50\nControls are: keyboard arrows, or buttons "A" "W" "D" "S"\nAnd, please, don't be strict! ;-)`
);

function loadResults() {
  results = JSON.parse(localStorage.getItem('superSquad'));
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
  targetNumber = Math.floor(Math.random() * size * size);
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
  if (score === 50) {
    MARIO.pause();
    HALLELUJAH.play();
    saveResult();
    loadResults();
    if (
      confirm(
        `You win!\nYour result is: 50\nThis is the maximum possible result in my game. \nPress 'Ok' if you want to play again, or 'Cancel' if you like winner song.\nAnd I wish to you good luck in further training!`
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
