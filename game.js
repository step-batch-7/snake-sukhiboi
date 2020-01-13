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
    this.gameOver = false;
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

  get over() {
    return this.gameOver;
  }

  update() {
    this.snake.move();
    const snakeHeadPosition = this.snake.location[
      this.snake.location.length - 1
    ];
    if (arePositionsEqual(snakeHeadPosition, this.food.position)) {
      this.previousFood = this.food;
      this.food = new Food(getRandomPosition());
      this.snake.grow();
    }
    if (this.snake.hasEatenItself) {
      this.gameOver = true;
    }
  }

}
