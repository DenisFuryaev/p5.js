function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(140);


  strokeWeight(2);
  translate(100, 100);
  beginShape(TRIANGLES);
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      vertex(i * 30, j * 30);
    }
  }
  endShape();
}
