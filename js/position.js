class Position {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  get coords() {
    return {
      x: this.#x,
      y: this.#y
    };
  }

  add(position) {
    const { x, y } = position.coords;
    return new Position(this.#x + x, this.#y + y);
  }

  liesBetween(position1, position2) {
    return (
      this.#x >= position1.coords.x &&
      this.#y >= position1.coords.y &&
      this.#x <= position2.coords.x &&
      this.#y <= position2.coords.y
    );
  }

  static randomPosition() {
    const randomx = Math.random() * NUM_OF_COLS;
    const randomy = Math.random() * NUM_OF_ROWS;
    return new Position(Math.round(randomx), Math.round(randomy));
  }

  isEqualTo(position) {
    const { x, y } = position.coords;
    return this.#x == x && this.#y == y;
  }
}
