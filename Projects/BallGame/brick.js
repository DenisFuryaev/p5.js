class Brick {
  constructor(x, y, w, h, t) {
    this.loc = createVector(x, y);
    this.w = w;
    this.h = h;
    this.t = t;
    this.color = [random(255),random(255),random(255)];
  }
  show() {
    fill(this.color[0], this.color[1], this.color[2], this.t);
    noStroke();
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }
}
