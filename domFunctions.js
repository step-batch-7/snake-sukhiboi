const NUM_OF_COLS = 100;
const NUM_OF_ROWS = 60;

const GRID_ID = 'grid';

const getGrid = () => document.getElementById(GRID_ID);
const getCellId = (x, y) => x + '_' + y;

const getCell = (coords) => document.getElementById(getCellId(coords.x, coords.y));

const createCell = function(grid, x, y) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.id = getCellId(x, y);
  grid.appendChild(cell);
};

const createGrids = function() {
  const grid = getGrid();
  for (let y = 0; y < NUM_OF_ROWS; y++) {
    for (let x = 0; x < NUM_OF_COLS; x++) {
      createCell(grid, x, y);
    }
  }
};

const eraseTail = function(tail, species) {
  const cell = getCell(tail.coords);
  cell.classList.remove(species);
};

const drawSnake = function(snakeStatus) {
  eraseTail(snakeStatus.previousTail, snakeStatus.species);
  snakeStatus.location.forEach((position) => {
    const cell = getCell(position.coords);
    cell.classList.add(snakeStatus.species);
  });
};

const handleKeyPress = snake => {
  const key = event.key;
  switch (key) {
    case 'ArrowUp':
      snake.turnUp();
      break;
    case 'ArrowDown':
      snake.turnDown();
      break;
    case 'ArrowLeft':
      snake.turnLeft();
      break;
    case 'ArrowRight':
      snake.turnRight();
  }
};

const attachEventListeners = snake => {
  document.body.onkeydown = handleKeyPress.bind(null, snake);
};

const drawFood = function(foodLocation) {
  const cell = getCell(foodLocation.coords);
  cell.classList.add('food');
};

const eraseFood = function(foodLocation) {
  const cell = getCell(foodLocation.coords);
  cell.classList.remove('food');
};
