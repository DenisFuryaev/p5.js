class ant {
  constructor(x, y) {
    this.loc = createVector(x, y);
    this.dir = 0; //[0, 1, 2, 3] ^<|>
  }
  show() {
    fill(255, 0, 0);
    noStroke();
    rect(this.loc.x, this.loc.y, 1, 1);
  }
  move(array) {
  }
  check() {

  }

}
let grid;
let cols;
let rows;
let ant;

function setup() {
  createCanvas(500, 500);
  cols = width;
  rows = height;
  grid = make2Darray(rows, cols);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j] = false;
    }
  }
}

function draw() {

}

// function mouseReleased() {
//       ant.move(grid);
// }

function make2Darray(rows, cols) {
  arr = new Array(rows);
  for (let i = 0; i < cols; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}
