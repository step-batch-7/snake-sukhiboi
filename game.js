class Game {
  #snake;
  #food;
  #score;
  #previousFood;
  #gameOver;
  #foodCount;

  constructor(snake, food, score) {
    this.#snake = snake;
    this.#food = food;
    this.#score = score;
    this.#previousFood = new Food(new Position(0, 0), 10, 'food');
    this.#gameOver = false;
    this.#foodCount = 0;
  }

  get status() {
    return {
      snakeStatus: this.#snake.status,
      previousFood: this.#previousFood.status,
      food: this.#food.status,
      points: this.#score.points
    };
  }

  get over() {
    const snakeTouchesBoundary = function(headLocation) {
      const topLeftPosition = new Position(0, 0);
      const bottomRigthPosition = new Position(
        NUM_OF_COLS - 1,
        NUM_OF_ROWS - 1
      );
      return !headLocation.liesBetween(topLeftPosition, bottomRigthPosition);
    };

    if (
      this.#snake.hasEatenItself ||
      snakeTouchesBoundary(this.#snake.headLocation)
    ) {
      this.#gameOver = true;
    }
    return this.#gameOver;
  }

  update() {
    this.#snake.move();
    const foodPosition = this.#food.status.position;
    if (this.#snake.headLocation.isEqualTo(foodPosition)) {
      this.#previousFood = this.#food;
      this.#food = new Food(Position.randomPosition(), 10, 'food');
      this.#snake.grow();
      this.#score.incrementBy(this.#previousFood.status.points);
      this.#foodCount++;
    }
    if (this.#foodCount >= 5) {
      this.#food = new Food(Position.randomPosition(), 20, 'superFood');
      this.#foodCount = 0;
    }
  }
}
