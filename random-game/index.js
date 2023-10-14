console.log("Let's go!");

const size = 16;
let allElements = document.querySelectorAll('.board > span');
let body = [129, 130, 131];
console.log(allElements);

function runGame() {
  for (const element of allElements) {
    element.classList.remove('body');
  }
}
