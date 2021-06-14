let walls = [];
let rays = [];
let fov;
let angle;
let alpha;
let i;
let w;
let h;
let closest;
let sceneWidth;
let sceneHeight;
let slider_resolution;
let resolution = 10;
function setup() {
  sceneWidth = windowWidth/2;
  sceneHeight = windowHeight/2;
  createCanvas(windowWidth, windowHeight/2);
  for (let i = 0; i < 3; i++) {
    walls[i] = new Boundary(random(sceneWidth), random(sceneHeight), random(sceneWidth), random(sceneHeight));
  }
  walls[3] = new Boundary(0, 0, sceneWidth - 1, 0);
  walls[4] = new Boundary(0, 0, 0, sceneHeight - 1);
  walls[5] = new Boundary(sceneWidth - 1, sceneHeight - 1, sceneWidth - 1, 0);
  walls[6] = new Boundary(sceneWidth - 1, sceneHeight - 1, 0, sceneHeight - 1);
  fov = PI / 4;
  angle = HALF_PI;
  for (let i = 0; i < resolution; i++) {
    alpha = map(i, 0, resolution, angle - fov, angle + fov);
    rays[i] = new Ray(50, 300, alpha);
  }
  w = sceneWidth / resolution;
  slider_resolution = createSlider(1,1000,1);
  slider_resolution.input(changeResolution);
}

function changeResolution() {
  const res = slider_resolution.value();
  resolution = res * 2;
  rays = [];
  for (let i = 0; i < resolution; i++) {
    alpha = map(i, 0, resolution, angle - fov, angle + fov);
    rays[i] = new Ray(50, 300, alpha);
  }
    w = sceneWidth / resolution;
}

function draw() {
  background(0);

  i = 0;
  for (let ray of rays) {
    closest = null;
    let record = Infinity;
    for (let wall of walls) {
      wall.show();
      const pt = ray.hit(wall);
      if (pt) {
        const d = p5.Vector.dist(ray.loc, pt)
        if (d < record) {
          record = d;
          closest = pt;
        }
      }
    }
    if (closest) {
      stroke(255, 100);
      line(ray.loc.x, ray.loc.y, closest.x, closest.y);

      //ray.loc.set(mouseX, mouseY);

      let a = ray.dir.angleBetween(rays[resolution/2].dir);
      let max_dist = (sceneWidth**2 + sceneHeight**2)**(1/2) * cos(a)
      const d = p5.Vector.dist(ray.loc, closest) * cos(a);
      rectMode(CENTER);
      noStroke();
      let j = map(i, 0, resolution, 0, sceneWidth);
      let h = map(d, 0, max_dist, height, 50);
      let color = map(d, 0, max_dist, 255, 10);
      fill(color);
      rect(sceneWidth + j + w/2, sceneHeight/2, w + 1, h);
      i++;
    }

  }
  if (keyIsDown(LEFT_ARROW)) {
    for (let i = 0; i < resolution; i++) {
      rays[i].dir.rotate(-0.05);
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    for (let i = 0; i < resolution; i++) {
      rays[i].dir.rotate(0.05);
    }
  }
  if (keyIsDown(UP_ARROW)) {
    for (let i = 0; i < resolution; i++) {
      rays[i].loc.add(rays[resolution/2].dir);
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    for (let i = 0; i < resolution; i++) {
      rays[i].loc.sub(rays[resolution/2].dir);
    }
  }
}
