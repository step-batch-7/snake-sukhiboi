const arePositionsEqual = (position1, position2) => {
  return position1.x == position2.x && position1.y == position2.y;
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
    this.previousFood = new Food({ x: 0, y: 0 });
    this.gameOver = false;
  }

  get status() {
    return {
      snakeStatus: this.snake.status,
      previousFoodLocation: this.previousFood.location,
      foodLocation: this.food.location
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

    const snakeTouchesBoundary = function() {
      const { x, y } = snakeHeadPosition;
      return x > 99 || x < 0 || y > 59 || y < 0;
    };

    if (this.snake.hasEatenItself || snakeTouchesBoundary()) {
      this.gameOver = true;
    }

    if (arePositionsEqual(snakeHeadPosition, this.food.position)) {
      this.previousFood = this.food;
      this.food = new Food(getRandomPosition());
      this.snake.grow();
    }
  }
}
