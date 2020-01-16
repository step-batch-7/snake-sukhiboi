class Food {

  #location;
  #value;

  constructor(location, value) {
    this.#location = location;
    this.#value = value;
  }

  get points() {
    return this.#value;
  }

  get position() {
    return new Position(this.#location.coords.x, this.#location.coords.y);
  }
}
