const gameLoop = function(game) {
  const gameStatus = game.status;
  eraseFood(gameStatus.previousFoodLocation);
  drawSnake(gameStatus.snakeStatus);
  drawFood(gameStatus.foodLocation);
};

const main = function() {
  const snake = new Snake(
    [new Position(40, 25), new Position(41, 25), new Position(42, 25)],
    new Direction(EAST),
    'snake'
  );

  const food = new Food(Position.randomPosition());
  const game = new Game(snake, food);

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
