class Score {
    constructor(score) {
      this.score = score
    }

    get points() {
        return this.score;
    }
    
    incrementBy(points) {
        this.score += points;
    }
}
