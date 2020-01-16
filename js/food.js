class Food {
  #location;
  #value;
  #category;

  constructor(location, value, category) {
    this.#location = location;
    this.#value = value;
    this.#category = category;
  }

  get status() {
    return {
      points: this.#value,
      type: this.#category,
      position: new Position(this.#location.coords.x, this.#location.coords.y)
    };
  }
}
