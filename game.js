const arePositionsEqual = (position1, position2) => {
  return position1.x == position2.x && position1.y == position2.y
};

const getRandomPosition = function() {
  const randomx = Math.random() * 99 + 1;
  const randomy = Math.random() * 59 + 1;
  return {
    x: Math.round(randomx),
    y: Math.round(randomy)
  };
};

class Game {
  constructor(snake, food) {
    this.snake = snake;
    this.food = food;
    this.previousFood = new Food({ x: 0, y:0});
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
