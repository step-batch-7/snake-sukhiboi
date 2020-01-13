const EAST = 0;
const NORTH = 1;
const WEST = 2;
const SOUTH = 3;

class Direction {
  constructor(initialHeading) {
    this.heading = initialHeading;
    this.deltas = {};
    this.deltas[EAST] = { deltaX: 1, deltaY: 0 };
    this.deltas[WEST] = { deltaX: -1, deltaY: 0 };
    this.deltas[NORTH] = { deltaX: 0, deltaY: -1 };
    this.deltas[SOUTH] = { deltaX: 0, deltaY: 1 };
  }

  get delta() {
    return this.deltas[this.heading];
  }

  turnLeft() {
    if (this.heading == NORTH || this.heading == SOUTH) {
      this.heading = WEST;
    }
  }

  turnRight() {
    if (this.heading == NORTH || this.heading == SOUTH) {
      this.heading = EAST;
    }
  }

  turnUp() {
    if (this.heading == EAST || this.heading == WEST) {
      this.heading = NORTH;
    }
  }

  turnDown() {
    if (this.heading == EAST || this.heading == WEST) {
      this.heading = SOUTH;
    }
  }
}
