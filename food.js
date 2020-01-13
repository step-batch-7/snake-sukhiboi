class Food {
  constructor(location) {
    this.location = location;
  }

  get position() {
    return {
      x: this.location.x,
      y: this.location.y
    };
  }
}
