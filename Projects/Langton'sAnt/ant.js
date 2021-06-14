class Ant {
  constructor(x, y) {
    this.loc = createVector(x, y);
    this.vel = createVector(0, -1);
  }
  show() {
    fill(255, 0, 0);
    stroke(255);
    point(this.loc.x, this.loc.y);
  }
  move(array) {
    let i = this.loc.x;
    let j = this.loc.y;
    if (array[i][j] == false) {
      this.vel.rotate(-HALF_PI);
      array[i][j] = true;
    } else {
      this.vel.rotate(HALF_PI);
      array[i][j] = false;
    }
    fill(array[i][j] * 255);
    point(i, j);
    this.loc.add(this.vel);
    
    if (this.loc.x >= width) {
      this.loc.x = 0;
    }
    if (this.loc.y >= height) {
      this.loc.y = 0;
    }
    if (this.loc.x < 0) {
      this.loc.x = width - 1;
    }
    if (this.loc.y < 0) {
      this.loc.y = height - 1;
    }
  }
}
