const gridSize = 512;
let gridResolution = 16;
let colorMode = 'black';
let ereaser = false;

const container = document.querySelector('.container');
container.style.maxWidth = `${gridSize}px`;

makeGrid();

container.addEventListener('mouseover', (e) => {
  if (e.buttons === 1) {
    if (colorMode === 'black') {
      e.target.style.backgroundColor = 'black';
    } else if (colorMode === 'color') {
      let randomR = Math.random() * 255;
      let randomG = Math.random() * 255;
      let randomB = Math.random() * 255;
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    }
  }
})

const gridBtn = document.querySelector('.new-grid');
gridBtn.addEventListener('click', () => {
  gridResolution = prompt('select grid resolution (max 100)', '');
  if (gridResolution > 100) {
    gridResolution = prompt('please enter a number smaller than 100', '');
  }
  makeGrid();
})

const colorBtn = document.querySelector('.change-color')
colorBtn.addEventListener('click', () => {
  switch (colorMode) {
    case 'black':
      colorMode = 'color';
      colorBtn.textContent = 'black mode';
      ereaser = false;
      break;
    case 'color':
      colorMode = 'black';
      colorBtn.textContent = 'rainbow mode';
      ereaser = false;
      break;
  }
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