class Ball {
  constructor(x, y, mass) {
    this.loc = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.radius = mass;
  }
  move() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.acc.mult(0);
  }
  show() {
    fill(255);
    noStroke();
    circle(this.loc.x, this.loc.y, this.radius);
  }
  inside(l) {
    return (this.loc.y + this.radius > l.y) && (this.loc.y - this.radius < l.y + l.h);
  }
  check() {
    if (this.loc.x + this.radius > width) {
      this.loc.x = width - this.radius;
      this.vel.x *= -1;
    } else if (this.loc.x < 0) {
      this.loc.x = 0;
      this.vel.x *= -1;
    }
    if (this.loc.y + this.radius > height) {
      this.loc.y = height - this.radius;
      this.vel.y *= -1;
    } else if (this.loc.y <= 0) {
      this.loc.y = 0;
      this.vel.y *= -1;
    }
  }
  applyForse(force) {
    this.f = force.copy();
    this.f.div(this.mass);
    this.acc.add(this.f);
  }
}
