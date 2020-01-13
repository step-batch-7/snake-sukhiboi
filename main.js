const gameLoop = function(game) {
  eraseFood(game.foodStatus.previousFoodLocation);
  drawSnake(game.snakeStatus);
  drawFood(game.foodStatus.location);
};

const main = function () {
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
