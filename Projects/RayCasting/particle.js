class Particle {
  constructor(x, y, fov) {
    this.loc = createVector(x, y);
    this.angle = HALF_PI;
    this.alpha;
    this.rays = [];
    this.fov = fov
    for (let i = 0; i < resolution; i++) {
      alpha = map(i, 0, resolution, this.angle - this.fov, this.angle + this.fov);
      this.rays[i] = new Ray(50, 300, alpha);
    }
  }

  look(walls) {
    const scene = []
    for (let ray of this.rays) {
      closest = null;
      let record = Infinity;
      for (let wall of walls) {
        wall.show();
        const pt = ray.hit(wall);
        if (pt) {
          const d = p5.Vector.dist(ray.loc, pt);
          if (d < record) {
            record = d;
            closest = pt;
          }
        }
      }
      if (closest) {
        stroke(255, 100);
        line(ray.loc.x, ray.loc.y, closest.x, closest.y);
      }
      scene.push(record);
    }
    return scene;
  }


  show() {
    fill(255);
    ellipse(this.loc.x, this.loc.y, 4);
    for (let ray of this.rays) {
      ray.show();
    }
  }

  update(x, y) {
    this.loc.set(x, y);
  }
}
