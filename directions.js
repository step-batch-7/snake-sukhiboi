const EAST = 0;
const NORTH = 1;
const WEST = 2;
const SOUTH = 3;

class Direction {

  #heading;
  #deltas;

  constructor(initialHeading) {
    this.#heading = initialHeading;
    this.#deltas = {};
    this.#deltas[EAST] = new Position(1, 0);
    this.#deltas[WEST] = new Position(-1, 0);
    this.#deltas[NORTH] = new Position(0, -1);
    this.#deltas[SOUTH] = new Position(0, 1);
  }

  get delta() {
    return this.#deltas[this.#heading];
  }

  turnLeft() {
    if (this.#heading == NORTH || this.#heading == SOUTH) {
      this.#heading = WEST;
    }
  }

  turnRight() {
    if (this.#heading == NORTH || this.#heading == SOUTH) {
      this.#heading = EAST;
    }
  }

  turnUp() {
    if (this.#heading == EAST || this.#heading == WEST) {
      this.#heading = NORTH;
    }
  }

  turnDown() {
    if (this.#heading == EAST || this.#heading == WEST) {
      this.#heading = SOUTH;
    }
  }
}
