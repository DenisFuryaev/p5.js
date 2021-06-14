class Circle {
  constructor(x, y, r, a, as) {
    this.loc_c = createVector(x, y);
    this.loc_d = createVector(0, 0);
    this.radius = r;
    this.angle = a;
    this.angleSpeed = as;
  }
  show(flag) {
    stroke(0, 255, 255, 100);
    noFill();
    circle(this.loc_c.x, this.loc_c.y, this.radius);
    if (flag) {
      line(this.loc_d.x, 0, this.loc_d.x, height);
    } else {
      line(0, this.loc_d.y, width, this.loc_d.y);
    }
    noStroke();
    fill(255);
    circle(this.loc_d.x, this.loc_d.y, 3);
  }
  update() {
    this.angle += this.angleSpeed;
    this.loc_d.x = this.loc_c.x + this.radius * cos(this.angle);
    this.loc_d.y = this.loc_c.y + this.radius * sin(this.angle);
  }
}
let circles = [];
let colm = 5;
let rows = 5;
let extraCanvas;

function setup() {
  for (let i = 0; i < colm; i++) {
    circles[i] = new Circle(120, 120 * (i + 2), 55, 0, 0.01 * (i + 1));
  }
  for (let i = rows; i < colm + rows; i++) {
    circles[i] = new Circle(120 * (i - rows + 2), 120, 55, 0, 0.01 * (i - rows + 1));
  }
  createCanvas(windowWidth, windowHeight);
  extraCanvas = createGraphics(windowWidth, windowHeight);
  extraCanvas.clear();
}

function draw() {
  background(0);

  for (let i = 0; i < colm; i++) {
    for (let j = rows; j < colm + rows; j++) {
      extraCanvas.fill(255,70);
      extraCanvas.noStroke();
      extraCanvas.circle(circles[j].loc_d.x, circles[i].loc_d.y ,1);
      fill(255, 100, 0);
      circle(circles[j].loc_d.x, circles[i].loc_d.y ,3);
    }
  }
  image(extraCanvas,0,0);
  for (let i = 0; i < colm; i++) {
    circles[i].update();
    circles[i].show(false);
  }
  for (let i = rows; i < colm + rows; i++) {
    circles[i].update();
    circles[i].show(true);
  }
}
function mousePressed() {
  extraCanvas.clear();
}
