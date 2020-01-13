const main = function () {
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
  drawSnake(game.snake);
  drawSnake(game.ghostSnake);
  drawFood(game.food);

  setInterval(() => {
    game.update();
    eraseFood(game.previousFood);
    drawSnake(game.snake);
    drawSnake(game.ghostSnake);
    drawFood(game.food);
  }, 200);

  setInterval(() => {
    let x = Math.random() * 100;
    if (x > 50) {
      ghostSnake.turnLeft();
    }
  }, 500);
};
