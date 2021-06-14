class Block {
  constructor(x, y, size, number, condition, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.number = number;
    this.condition = condition; // c = true mean open; c = false mean closed
    this.color = color;
  }
  show() {
    fill(this.color[0], this.color[1], this.color[2], this.color[3]);
    noStroke();
    rect(this.x, this.y, this.size, this.size);
    if (this.condition) {
      fill(255);
      textSize(this.size * 0.8);
      text(this.number, this.x - this.size * 10/25, this.y + this.size/4);
    }
  }
  update() {
    if ((mouseX <= this.x + this.size/2) && (mouseX >= this.x - this.size/2)
    && ( mouseY <= this.y + this.size/2) && (mouseY >= this.y - this.size/2)) {
      this.color[3] = 70;
      if (mouseIsPressed && flag) {
        guess.push(this.number);
        this.color[3] = 20;
        flag = false;
      }
      } else {
        this.color[3] = 120;
      }
      if (!mouseIsPressed) {
        flag = true;
      }
  }
}

let blocks = [];
let size = 30;
let time = 0;
let guess = [];
let flag = true;
let flag2 = false;
let n = 5;
let result = true;
function setup() {
  rectMode(CENTER);
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < n; i++) {
    blocks[i] = new Block(random(size/2, width - size/2), random(size/2, height - size/2), size, i, true, [0, 255, 100, 100]);
  }
}
function draw() {
  background(0);
  for (let i = 0; i < n; i++) {
    blocks[i].show();
    if (time > 100 * map(n, 1, 100, 1, 5)) {
      blocks[i].condition = false;
      blocks[i].update();
      if (guess.length == n) {
        for (let j = 0; j < n; j++ ) {
          result = result && (guess[j] == j);
          if (guess[j] !== j) {
            blocks[j].color[0] = 255;
            blocks[j].color[1] = 0;
          }
        }
        if (result) {
          fill(255);
          textSize(30);
          text('You wоn !!!', 20, 100);
          text('Press enter to go to the next level', 20, 140);
          flag2 = true;
        } else {
          fill(255);
          textSize(30);
          text('You lost !!!', 20, 100);
          text('Press enter to start from the begining', 20, 140);
          flag2 = true;
          for (let j = 0; j < n; j++ ) {
            blocks[j].condition = true;
          }
        }
      }
    }
  }
  time++;
  fill(100, 230, 200);
  textSize(30);
  text(`Level ${n}`, 20, 30);
}

function keyPressed() {
  if (flag2) {
    if (keyCode == 13 && result) {
      result = true;
      n++;
      guess = [];
      blocks = [];
      time = 0;
      setup();
    }
    if (keyCode == 13 && !result) {
      result = true;
      n = 1;
      guess = [];
      blocks = [];
      time = 0;
      setup();
    }
    flag2 = false;
  }
}
