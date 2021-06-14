class ball {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-3,3), random(-3,3));
    this.r = r;
  }
  show() {
    fill(240,0,200,60);
    noStroke();
    circle(this.pos.x, this.pos.y, this.r);
  }
  move() {
    this.pos.add(this.vel);
  }
  check() {
    if (this.pos.x + this.r >= width || this.pos.x - this.r <= 0) {
      this.vel.x = -1 * this.vel.x;
    } else if (this.pos.y + this.r >= height || this.pos.y - this.r <= 0) {
        this.vel.y = -1 * this.vel.y;
    }
  }
  inside(some_x, some_y) {
    return (dist(this.pos.x, this.pos.y, some_x, some_y) <= this.r);
  }
}
let balls = [];

function setup() {
  for (let i = 0; i < 1; i ++) {
    balls[i] = new ball(100,100,30);
  }
  createCanvas(windowWidth, 500);
}

function draw() {
  background(0);
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].check();
    balls[i].show();
  }
  for (let i = 0; i < balls.length; i++) {
    for (let j = 0; j < balls.length; j++) {
      stroke(255,50);
      line(balls[j].pos.x, balls[j].pos.y, balls[i].pos.x, balls[i].pos.y);
    }
  }

}
function mouseClicked() {
  t = true;
  for (let i = 0; i < balls.length; i++) {
    if (balls[i].inside(mouseX, mouseY)) {
      balls.splice(i, 1);
      t = false;
    }
  }
  if (t) {
    let b = new ball(mouseX,mouseY,30);
    balls.push(b);
  }
}
