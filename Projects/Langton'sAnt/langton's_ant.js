let grid;
let cols;
let rows;
let ant;
let rules;

function setup() {
  rectMode(CORNER);
  createCanvas(500, 500);
  rules = createP(" На белом квадрате — повернуть на 90° вправо,изменить цвет квадрата на чёрный, сделать шаг вперед на следующую клетку.");
  rules = createP(" На чёрном квадрате — повернуть на 90° влево, изменить цвет квадрата на белый,сделать шаг вперед на следующую клетку.");
  cols = width
  rows = height
  grid = make2Darray(rows, cols);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j] = false;
      fill(grid[i][j] * 255);
      point(i, j);
    }
  }
  ant = new Ant(250, 200);
}

function draw() {
  for (let k = 0; k < 100; k ++) {
    ant.move(grid);
    ant.show();
  }
}

function make2Darray(rows, cols) {
  arr = new Array(rows);
  for (let i = 0; i < cols; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}
