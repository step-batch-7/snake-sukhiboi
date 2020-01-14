const gameLoop = function(game) {
  const gameStatus = game.status;
  eraseFood(gameStatus.previousFoodLocation);
  drawSnake(gameStatus.snakeStatus);
  drawFood(gameStatus.foodLocation);
  drawScore(game.status.points)
};

const getSnakePositions = function(tailPosition, length) {
  let snakePositions = new Array(length);
  for (let idx = 0; idx < snakePositions.length; idx++) {
    snakePositions[idx] = new Position(tailPosition.coords.x + idx, tailPosition.coords.y)
  }
  return snakePositions.slice();
};

const main = function() {
  const snake = new Snake(
    getSnakePositions(new Position(40, 25), 4),
    new Direction(EAST),
    'snake'
  );

  const food = new Food(Position.randomPosition());
  const score = new Score(0);
  const game = new Game(snake, food, score);

  attachEventListeners(snake);
  createGrids();

  gameLoop(game);

  const gameInterval = setInterval(() => {
    game.update();
    if (game.over) {
      clearInterval(gameInterval);
    } else {
      gameLoop(game);
    }
  }, 50);
};
