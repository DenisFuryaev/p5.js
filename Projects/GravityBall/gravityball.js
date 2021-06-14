let balls = [];
let forces;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 2; i ++) {
    balls[i] = new Ball(600 + 100 * i, 400, (i + 1) * 10);
  }
}

function draw() {
  background(0);

  for (let i = 0; i < balls.length - 1; i ++) {
    for (let j = i + 1; j < balls.length; j ++) {
      let forces = createVector();
      forces.set(balls[j].x, balls[j].y);
      forces.sub(balls[j]);
      forces.normalize();
      balls[j].applyForce(forces);
    }
  }
  for (let i = 0; i < balls.length; i ++) {
    balls[i].move();
    balls[i].check();
    balls[i].show();
  }
}
