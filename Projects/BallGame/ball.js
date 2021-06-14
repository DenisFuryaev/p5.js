class Ball {
  constructor(x, y, radius, speedx, speedy) {
    this.loc = createVector(x, y);
    this.vel = createVector(speedx, speedy);
    this.radius = radius;
  }
  move() {
    this.loc.add(this.vel);
  }
  show() {
    circle(this.loc.x,this.loc.y,this.radius);
  }
  check() {
    if (this.loc.x + this.radius >= width || this.loc.x - this.radius <= 0) {
      this.vel.x *= -1;
    } else if (this.loc.y - this.radius <= 0) {
      this.vel.y *= -1;
    }
  }
  land(other) {
    return (this.loc.y + this.radius - other.loc.y - other.h/2 >= 0) &&
           (this.loc.x <= other.loc.x + other.w/2) &&
           (this.loc.x >= other.loc.x - other.w/2);
  }
  hit(other) {
    return (this.loc.y - this.radius <= other.loc.y + other.h/2) &&
           (this.loc.x >= other.loc.x - other.w/2) &&
           (this.loc.x <= other.loc.x + other.w/2);
  }
}
