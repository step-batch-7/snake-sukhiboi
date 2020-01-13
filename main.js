const gameLoop = function(game) {
  eraseFood(game.foodStatus.previousFoodLocation);
  drawSnake(game.snakeStatus);
  drawSnake(game.ghostSnakeStatus);
  drawFood(game.foodStatus.location);
};

const randomlyMoveGhostSnake = function(ghostSnake) {
  setInterval(() => {
    let x = Math.random() * 100;
    if (x > 50) {
      ghostSnake.turnLeft();
    }
  }, 500);
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

  const ghostSnake = new Snake(
    [
      [40, 30],
      [41, 30],
      [42, 30]
    ],
    new Direction(SOUTH),
    'ghost'
  );

  const food = new Food(getRandomPosition());
  const game = new Game(snake, ghostSnake, food);

  attachEventListeners(snake);
  createGrids();

  gameLoop(game);

  setInterval(() => {
    game.update();
    gameLoop(game);
  }, 200);

  randomlyMoveGhostSnake(ghostSnake);
};
