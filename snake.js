class Snake {
  constructor(positions, direction, type) {
    this.positions = positions.slice();
    this.direction = direction;
    this.type = type;
    this.previousTail = new Position(0,0);
  }

  get location() {
    return this.positions.slice();
  }

  get species() {
    return this.type;
  }

  get status() {
    return {
      headLocation: this.headLocation,
      location: this.location,
      species: this.species,
      previousTail: this.previousTail
    };
  }

  get headLocation() {
    return this.location[this.location.length - 1];
  }

  get hasEatenItself() {
    const snakeHeadPosition = this.location[this.location.length - 1];
    const snakeBody = this.location.slice(0, -1);
    return snakeBody.some(part => snakeHeadPosition.isEqualTo(part));
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
    const headPosition = this.positions[this.positions.length - 1];
    this.previousTail = this.positions.shift();

    const delta = this.direction.delta;
    const nextPosition = headPosition.add(delta);
    this.positions.push(nextPosition);
  }

  grow() {
    this.positions.unshift(this.previousTail);
  }
}
