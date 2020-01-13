const gameLoop = function(game) {
  const gameStatus = game.status;
  eraseFood(gameStatus.previousFoodLocation);
  drawSnake(gameStatus.snakeStatus);
  drawFood(gameStatus.foodLocation);
};

const main = function() {
  const snake = new Snake(
    [
      { x: 40, y: 25 },
      { x: 41, y: 25 },
      { x: 42, y: 25 }
    ],
    new Direction(EAST),
    'snake'
  );

  const food = new Food(getRandomPosition());
  const game = new Game(snake, food);

  attachEventListeners(snake);
  createGrids();

  gameLoop(game);

  const gameInterval = setInterval(() => {
    game.update();
    gameLoop(game);
    if (game.over) {
      clearInterval(gameInterval);
    }
  }, 50);
};
