class object {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.e = [1,1,1,-1];
  }
  show() {
    fill(205)
    noStroke();
    rect(this.x, this.y, this.w, this.h);
    fill(0, 0, 200);
    rect(this.x + this.e[0] * this.w/5, this.y + this.e[2] * this.w/5, this.w/6, this.h/6);
    rect(this.x + this.e[1] * this.w/5, this.y + this.e[3] * this.w/5, this.w/6, this.h/6);
  }
  check() {
    return (this.x - this.w/2 < 0) || (this.x + this.w/2 > width) ||
           (this.y - this.h/2 < 0) || (this.y + this.h/2 > height);
  }
}
class wall {
  constructor(x, y, w, h, t) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.t = t;
  }
  show() {
    fill(0, 0, 255, this.t)
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }
}
let player;
let grid;
let walls = [];
let rows = 600/30;
let collumns = rows;

function setup() {
  rectMode(CENTER);
  createCanvas(600,600);
  player = new object(15, 15, 30, 30);
  for (let i = 0; i <  collumns; i++) {
    walls[i] = [];
    for (let j = 0; j <  rows; j++) {
      if (random(true, false)) {
        walls[i][j] = new wall(15 + 30 * i, 15 + 30 * j, 30, 30, 100);
      }
    }
  }
}
function draw() {
  background(0);
  for (let i = 0; i <  collumns; i++) {
    for (let j = 0; j <  rows; j++) {
      walls[i][j].show();
    }
  }
  for (let i = 0; i < collumns; i++) {
    stroke(70);
    line(i * player.w, 0, i * player.w, height);
  }
  for (let i = 0; i < rows; i++) {
    stroke(70);
    line(0, i * player.w, height, i * player.w);
  }
  player.show();
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.x -= player.w;
    if (player.check()) {
      player.x += player.w;
    }
    player.e = [-1,-1,-1,1];
  } else if (keyCode == RIGHT_ARROW) {
      player.x += player.w;
      if (player.check()) {
        player.x -= player.w;
      }
      player.e = [1,1,1,-1];
    } else if (keyCode == UP_ARROW) {
        player.y -= player.h;
        if (player.check()) {
          player.y += player.h;
        }
        player.e = [1,-1,-1,-1];
      } else if (keyCode == DOWN_ARROW) {
          player.y += player.h;
          if (player.check()) {
            player.y -= player.h;
          }
          player.e = [-1,1,1,1];
        }
}
