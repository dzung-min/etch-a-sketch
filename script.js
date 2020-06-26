const table = document.querySelector('#container');
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    table.appendChild(cell);
  }
}

const cells = document.querySelectorAll('.cell');
let counter = 0;
table.addEventListener('click', () => {
  counter++;
  cells.forEach(cell => {
    if (counter % 2 === 1) {
      cell.addEventListener('mouseover', (e) => {
        e.target.classList.add('painted');
      })
    } else if (cell.className.indexOf('painted') === -1) {
      cell.addEventListener('mouseover', (e) => {
        e.target.className = 'cell';
      })
    }
  })
})