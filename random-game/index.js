console.log("Let's go!");

const size = 16;
let allElements = document.querySelectorAll('.board > span');
let body = [129, 130, 131];
let result;

function runGame() {
  result = 0;
  for (const element of allElements) {
    element.classList.remove('body');
  }
}

body.forEach((piece) => {
  allElements[piece].classList.add('body');
});
