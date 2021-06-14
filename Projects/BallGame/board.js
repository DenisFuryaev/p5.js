class Board {
  constructor(x, y, w, h) {
    this.loc = createVector(x, y);
    this.w = w;
    this.h = h;
  }
  move() {
    this.loc.x = mouseX;
  }
  show() {
    fill(255);
    noStroke();
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }
}
