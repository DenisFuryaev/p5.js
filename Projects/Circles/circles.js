class Circle {
  constructor(x, y, r) {
    this.pos_c = createVector(x, y);
    this.r = r;
    this.angle = 0;
  }
  show() {
    noFill();
    stroke(100);
    circle(this.pos_c.x, this.pos_c.y, this.r);
  }
  dot() {
    this.pos_d = createVector(this.pos_c.x + this.r * cos(this.angle), this.pos_c.y + this.r * sin(this.angle));
    fill(255);
    noStroke();
    circle(this.pos_d.x, this.pos_d.y, 2);
    stroke(255);
    line(this.pos_c.x, this.pos_c.y, this.pos_d.x, this.pos_d.y);
  }
}
let circle1;
let wave = [];

function setup() {
  createCanvas(1000, 700);
  circle1 = new Circle(0, 0, 100);
}

function draw() {
  background(0);
  translate(width/5, height/2);

  circle1.show();
  circle1.dot();

  wave.unshift(circle1.pos_d.y);

  translate(200, 0);
  line(circle1.pos_d.x - 200, circle1.pos_d.y, 0, wave[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i ++) {
    vertex(i, wave[i]);
  }
  endShape();

  circle1.angle -= 0.05;

  if (wave.length > 600) {
    wave.pop();
  }
}
