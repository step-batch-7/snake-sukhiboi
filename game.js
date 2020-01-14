class Game {
  constructor(snake, food) {
    this.snake = snake;
    this.food = food;
    this.previousFood = new Food(new Position(0,0));
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

    const snakeTouchesBoundary = function () {
      const topLeftPosition = new Position(0, 0);
      const bottomRigthPosition = new Position(99, 59);
      return !snakeHeadPosition.liesBetween(topLeftPosition, bottomRigthPosition);
    };

    if (this.snake.hasEatenItself || snakeTouchesBoundary()) {
      this.gameOver = true;
    }

    if (snakeHeadPosition.isEqualTo(this.food.position)){
      this.previousFood = this.food;
      this.food = new Food(Position.randomPosition());
      this.snake.grow();
    }
  }
}
