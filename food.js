class Food {
  constructor(location) {
    this.location = location;
  }

  get position() {
    return this.location.slice();
  }
}
