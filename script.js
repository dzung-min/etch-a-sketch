/************************************************
 * MAIN PROGRAM
 ************************************************/

let defaultSize = 16;
let drawingStage = false;

const newBtn = document.querySelector('#new-btn');
const resetBtn = document.querySelector('#reset-btn');
const board = document.querySelector('#container');

board.addEventListener('dragstart', (e) => { e.preventDefault(); })
board.addEventListener('mouseleave', stopDrawing)

document.addEventListener('DOMContentLoaded', () => {
  draw(createBoard(defaultSize));
});

newBtn.addEventListener('click', () => {
  let newSize = null;
  do {
    newSize = +prompt('Enter board size');
  } while (isNaN(newSize));
  if (!newSize) {
    newSize = defaultSize;
  }
  draw(createBoard(newSize));
})

resetBtn.addEventListener('click', resetBoard);


/**********************************************
 * HELPER FUNCTIONS
 **********************************************/

function createBoard(size) {
  // Create a new board and return a nodeList of cells in that board
  board.innerHTML = ''; // Clear old board
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell')
      board.appendChild(cell);
    }
  }
  board.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr)`);
  return document.querySelectorAll('.cell');
}

function draw(cellList) {
  cellList.forEach(cell => {
    cell.addEventListener('mousedown', startDrawing);
    cell.addEventListener('mousemove', drawing);
    cell.addEventListener('mouseup', stopDrawing);
  });
}

function startDrawing(e) {
  drawingStage = true;
  e.target.classList.add('drawed');

}

function drawing(e) {
  let currentClass = Array.from(e.target.classList);
  if (currentClass.indexOf('drawed') === -1 && drawingStage == true) {
    e.target.classList.add('drawed');
  }
}

function stopDrawing(e) {
  drawingStage = false;
}

function resetBoard() {
  const cells = document.querySelectorAll('.drawed');
  cells.forEach(cell => {
    cell.className = 'cell';
  })
}