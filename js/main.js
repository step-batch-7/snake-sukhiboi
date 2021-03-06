const gameLoop = function(game) {
  const gameStatus = game.status;
  const previousFood = gameStatus.previousFood;
  const food = gameStatus.food;
  eraseFood(previousFood.position, previousFood.type);
  drawSnake(gameStatus.snakeStatus);
  drawFood(food.position, food.type);
  drawScore(game.status.points);
};

const getSnakePositions = function(tailPosition, length) {
  const snakePositions = new Array(length);
  for (let idx = 0; idx < snakePositions.length; idx++) {
    snakePositions[idx] = new Position(
      tailPosition.coords.x + idx,
      tailPosition.coords.y
    );
  }
  return snakePositions.slice();
};

const main = function() {
  const snake = new Snake(
    getSnakePositions(new Position(40, 25), 4),
    new Direction(EAST),
    'snake'
  );

  const food = new Food(Position.randomPosition(), 10, 'food');
  const score = new Score(0);
  const game = new Game(snake, food, score);

  attachEventListeners(snake);
  createGrids();

  const createGameInterval = function(game) {
    return setInterval(() => {
      game.update();
      if (game.over) {
        clearInterval(gameInterval);
        drawGameOverScreen(game.status.points);
      } else {
        gameLoop(game);
      }
    }, 100);
  };

  gameLoop(game);

  let gameInterval = createGameInterval(game);

  const pausePlayBtn = getPausePlayBtn();
  let paused = false;
  pausePlayBtn.addEventListener('click', () => {
    if (paused) {
      gameInterval = createGameInterval(game);
      paused = !paused;
      return;
    }
    clearInterval(gameInterval);
    paused = !paused;
  });
};
