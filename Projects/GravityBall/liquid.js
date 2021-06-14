class Liquid {
  constructor(x, y, w, h, p) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.p = p;
  }
  show() {
    fill(100);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }
}
