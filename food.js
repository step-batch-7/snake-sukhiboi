class Food {
  constructor(location) {
    this.location = location;
  }

  get position() {
    return new Position(this.location.x, this.location.y);
  }
}
