let board;
let ball
let bricks = [];
let score;
let trace;

function setup() {
  rectMode(CENTER);
  createCanvas(700, 500);
  board = new Board(350, 480, 100, 20);
  for (let i = 0; i < 10; i++){
    bricks[i] = new Brick(65 * (i + 1), 30, 55, 20, 255);
  }
  ball = new Ball(110, 100, 10, 6, 6);
  score = 0;
  trace = createGraphics(width, height);
  trace.clear();
}

function draw() {
  background(0);

  // for (let i = 0; i < bricks.length; i++){
  //   bricks[i].show();
  // }

  // for (let i = 0; i < bricks.length; i++) {
  //   if (ball.hit(bricks[i])) {
  //     ball.loc.y = bricks[i].loc.y + bricks[i].h/2;
  //     ball.vel.y = -1 * ball.vel.y;
  //     bricks[i].t -= 100;
  //     score ++;
  //   }
  //   if (bricks[i].t <= 0) {
  //     bricks.splice(i, 1);
  //   }
  // }

  board.move();
  board.show();
  ball.check();
  if (ball.land(board)) {
    ball.vel.y = -1 * ball.vel.y;
    ball.loc.y = board.loc.y - board.h/2;
  }
  ball.move();
  ball.show();

  textSize(20);
  text(`your score is ${score}`, 50, 100);
  // if (ball.loc.y >= height) {
  // 	textSize(32);
  // 	text('You lose :( Click to play again', 100, 200);
  //   ball.vel = (0, 0);
  // }
  // if (bricks.length == 0) {
  // 	textSize(32);
  // 	text('You win !!! :) Click to play again', 100, 300);
  // }
  trace.fill(255, 100);
  trace.noStroke();
  trace.circle(ball.loc.x, ball.loc.y, 1);
  image(trace, 0, 0);
}
function mousePressed() {
  setup();
}
