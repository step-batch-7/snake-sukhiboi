class Game {
  constructor(snake, food, score) {
    this.snake = snake;
    this.food = food;
    this.score = score;
    this.previousFood = new Food(new Position(0, 0));
    this.gameOver = false;
  }

  get status() {
    return {
      snakeStatus: this.snake.status,
      previousFoodLocation: this.previousFood.location,
      foodLocation: this.food.location,
      points: this.score.points
    };
  }

  get over() {
    return this.gameOver;
  }

  update() {
    this.snake.move();

    const snakeTouchesBoundary = function(headLocation) {
      const topLeftPosition = new Position(0, 0);
      const bottomRigthPosition = new Position(
        NUM_OF_COLS - 1,
        NUM_OF_ROWS - 1
      );

      return !headLocation.liesBetween(topLeftPosition, bottomRigthPosition);
    };

    if (
      this.snake.hasEatenItself ||
      snakeTouchesBoundary(this.snake.headLocation)
    ) {
      this.gameOver = true;
    }

    if (this.snake.headLocation.isEqualTo(this.food.position)) {
      this.previousFood = this.food;
      this.food = new Food(Position.randomPosition());
      this.snake.grow();
      this.score.incrementBy(10);
    }
  }
}
