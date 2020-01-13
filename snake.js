class Snake {
  constructor(positions, direction, type) {
    this.positions = positions.slice();
    this.direction = direction;
    this.type = type;
    this.previousTail = { x: 0, y: 0 };
  }

  get location() {
    return this.positions.slice();
  }

  get species() {
    return this.type;
  }

  get status() {
    return {
      location: this.location,
      species: this.species,
      previousTail: this.previousTail
    };
  }

  get hasEatenItself() {
    const snakeHeadPosition = this.location[this.location.length - 1];
    const snakeBody = this.location.slice(0, -1);
    return snakeBody.some(part => arePositionsEqual(snakeHeadPosition, part));
  }

  turnLeft() {
    this.direction.turnLeft();
  }

  turnRight() {
    this.direction.turnRight();
  }

  turnUp() {
    this.direction.turnUp();
  }

  turnDown() {
    this.direction.turnDown();
  }

  move() {
    const { x, y } = this.positions[this.positions.length - 1];
    this.previousTail = this.positions.shift();

    const { deltaX, deltaY } = this.direction.delta;

    this.positions.push({ x: x + deltaX, y: y + deltaY });
  }

  grow() {
    this.positions.unshift(this.previousTail);
  }
}
