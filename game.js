const arePositionsEqual = (position1, position2) =>
  position1.every((id, index) => id === position2[index]);

const getRandomPosition = function() {
  const randomColId = Math.random() * 99 + 1;
  const randomRowId = Math.random() * 59 + 1;
  const randomPosition = [randomColId, randomRowId].map(id => {
    return Math.round(id);
  });
  return randomPosition;
};

class Game {
  constructor(snake, food) {
    this.snake = snake;
    this.food = food;
    this.previousFood = new Food([0, 0]);
  }

  get snakeStatus() {
    return this.snake.status;
  }

  get foodStatus() {
    return {
      previousFoodLocation: this.previousFood.location,
      location: this.food.location
    };
  }

  ifFoodEaten() {
    const snakeHeadPosition = this.snake.location[
      this.snake.location.length - 1
    ];
    if (arePositionsEqual(snakeHeadPosition, this.food.position)) {
      this.previousFood = this.food;
      this.updateFood();
      this.snake.grow();
    }
  }

  update() {
    this.snake.move();
    this.ifFoodEaten();
  }

  updateFood() {
    this.food = new Food(getRandomPosition());
  }
}
