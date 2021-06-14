let points = [];
let new_point;
let n = 3;
let k = 0.5;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (let i = 0; i < n; i++) {
    let v = createVector(random(width), random(height));
    points.push(v);
  }
  new_point = createVector(random(width), random(height));
  fill(0, 255, 0);
  noStroke();
  for (let i = 0; i < n; i++) {
    circle(points[i].x, points[i].y, 3);
  }
}

function draw() {
  fill(10, 150, 255);
  for (let i = 0; i < 1000; i ++) {
    number = floor(random(n));
    new_point.x = lerp(new_point.x, points[number].x, k);
    new_point.y = lerp(new_point.y, points[number].y, k);
    circle(new_point.x, new_point.y, 0.5);
  }
}
