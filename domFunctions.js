const NUM_OF_COLS = 100;
const NUM_OF_ROWS = 60;

const GRID_ID = 'grid';

const getGrid = () => document.getElementById(GRID_ID);
const getCellId = (colId, rowId) => colId + '_' + rowId;

const getCell = (colId, rowId) =>
  document.getElementById(getCellId(colId, rowId));

const createCell = function(grid, colId, rowId) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.id = getCellId(colId, rowId);
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
  let [colId, rowId] = tail;
  const cell = getCell(colId, rowId);
  cell.classList.remove(species);
};

const drawSnake = function(snakeStatus) {
  eraseTail(snakeStatus.previousTail, snakeStatus.species);
  snakeStatus.location.forEach(([colId, rowId]) => {
    const cell = getCell(colId, rowId);
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
  const [colId, rowId] = foodLocation;
  const cell = getCell(colId, rowId);
  cell.classList.add('food');
};

const eraseFood = function(foodLocation) {
  const [colId, rowId] = foodLocation;
  const cell = getCell(colId, rowId);
  cell.classList.remove('food');
};
