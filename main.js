const gameLoop = function(game) {
  eraseFood(game.foodStatus.previousFoodLocation);
  drawSnake(game.snakeStatus);
  drawFood(game.foodStatus.location);
};

const main = function() {
  const snake = new Snake(
    [
      [40, 25],
      [41, 25],
      [42, 25]
    ],
    new Direction(EAST),
    'snake'
  );

  const food = new Food(getRandomPosition());
  const game = new Game(snake, food);

  attachEventListeners(snake);
  createGrids();

  gameLoop(game);

  setInterval(() => {
    game.update();
    gameLoop(game);
  }, 200);
};
