class Ray {
  constructor(x, y, alpha) {
    this.loc = createVector(x, y);
    this.dir = createVector(0, -1);
    this.dir.rotate(alpha);
  }
  show(x, y) {
    stroke(255);
    line(this.loc.x, this.loc.y, x, y);
  }
  hit(boundary) {
    const x1 = boundary.a.x;
    const y1 = boundary.a.y;
    const x2 = boundary.b.x;
    const y2 = boundary.b.y;
    const x3 = this.loc.x;
    const y3 = this.loc.y;
    const x4 = this.loc.x + this.dir.x;
    const y4 = this.loc.y + this.dir.y;
    const d = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / d;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / d;
    let x = x1 + t * (x2 - x1);
    let y = y1 + t * (y2 - y1);
    if ((d == 0) || (t < 0) || (t > 1) || (u < 0)) {
      return null;
    }
    else {
      let pt = createVector(x,y);
      return pt;
    }
  }
}
