class Food {
  constructor(location, value) {
    this.location = location;
    this.value = value;
  }

  get points() {
    return this.value;
  }

  get position() {
    return new Position(this.location.x, this.location.y);
  }
}
