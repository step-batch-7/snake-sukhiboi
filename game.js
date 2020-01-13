const arePositionsEqual = (position1, position2) =>
  position1.every((id, index) => id === position2[index]);

const getRandomPosition = function() {
  const randomColId = Math.random() * 100 + 1;
  const randomRowId = Math.random() * 60 + 1;
  const randomPosition = [randomColId, randomRowId].map(id => {
    return Math.round(id);
  });
  return randomPosition;
};


class Game {
  constructor(snake, ghostSnake, food) {
    this.snake = snake;
    this.ghostSnake = ghostSnake;
    this.food = food;
    this.previousFood = new Food([0, 0]);
  }

  checkIfFoodEaten() {
    const snakeHeadPosition = this.snake.location[
      this.snake.location.length - 1
    ];
    if (arePositionsEqual(snakeHeadPosition, this.food.position)) {
      this.previousFood = this.food;
      this.updateFood();
    }
  }

  update() {
    this.snake.move();
    this.ghostSnake.move();
    this.checkIfFoodEaten();
  }

  updateFood() {
    this.food = new Food(getRandomPosition());
  }
}
