const NUM_OF_COLS = 100;
const NUM_OF_ROWS = 60;

const GRID_ID = 'grid';

const getGrid = () => document.getElementById(GRID_ID);
const getCellId = (x, y) => x + '_' + y;

const getCell = (x, y) => document.getElementById(getCellId(x, y));

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
  let { x, y } = tail;
  const cell = getCell(x, y);
  cell.classList.remove(species);
};

const drawSnake = function(snakeStatus) {
  eraseTail(snakeStatus.previousTail, snakeStatus.species);
  snakeStatus.location.forEach(({ x, y }) => {
    const cell = getCell(x, y);
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
  const { x, y } = foodLocation;
  const cell = getCell(x, y);
  cell.classList.add('food');
};

const eraseFood = function(foodLocation) {
  const { x, y } = foodLocation;
  const cell = getCell(x, y);
  cell.classList.remove('food');
};
