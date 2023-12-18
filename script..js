const gridSize = 512;
let gridResolution = 16;

const container = document.querySelector('.container');
container.style.maxWidth = `${gridSize}px`;

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  gridResolution = prompt('select grid resolution (max 100)', '');
  if (gridResolution > 100) {
    gridResolution = prompt('please enter a number smaller than 100', '');
  }
  makeGrid();
})

container.addEventListener('mouseover', (e) => {
  e.target.classList.add('hovered');
})

function makeGrid() {
  let totalSquares = gridResolution * gridResolution;
  container.textContent = ''
  for (i = 0; i < totalSquares; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.width = `${gridSize / gridResolution}px`
    newDiv.style.height = `${gridSize / gridResolution}px`
    container.appendChild(newDiv);
  }
}