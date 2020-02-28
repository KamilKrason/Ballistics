/// <reference path = "types/p5.global-mode.d.ts" />
var player;
var bullets = [];
var score = 0;
var parallax = 0.9;
var bgImg;
var bgX = 0;
var maxScore = 0;
var bullet;


function setup() {
  createCanvas(1300, 800);
  reset();

}


function preload() {
  bgImg = loadImage('graphics/bg.png');
}



function draw() {
  // put drawing code here
  background(55);
  textSize(40);
  image(bgImg, bgX, 0, bgImg.width, height);
  bgX -= 1 * parallax;
  if (bgX <= -bgImg.width + width) {
    image(bgImg, bgX + bgImg.width, 0, bgImg.width, height);
    if (bgX <= -bgImg.width) {
      bgX = 0;
    }
  }


  player.update();
  player.show();

  for (var i = 0; i < bullets.length ; i++) {
  bullets[i].update();
  bullets[i].show();
}
  pipePassed = false;
 

  if (frameCount % 33 == 0) {
    bullets.push(new Bullet(player));
  }

  for (var i = bullets.length-1 ; i > 0 ; i--) {
    if (bullets[i].y > height){
      bullets.splice(i,1);
    }
    bullets[i].update();
    bullets[i].show();
  }

  fill(255, 255, 255);
  text(score, width / 2, 0.05 * height);

}

function keyPressed() {
  if (key == ' ') {
    player.up();
    if (isOver) {
      reset();
    }
    //console.log('space');
  }
}

function mousePressed() {
  player.up();
  //console.log('space');
}

function gameover() {
  textSize(64);
  fill(255);
  textAlign(CENTER, CENTER);
  text('GAME OVER', width / 2, height / 2);
  textAlign(LEFT, BASELINE);
  maxScore = max(score, maxScore);
  isOver = true;
  noLoop();
}

function reset() {
  isOver = false;
  score = 0;
  bgX = 0;
  frameCount = 0;
  player = new Player();
  bullets.push(new Bullet(player));
  //gameoverFrame = frameCount - 1;
  loop();
}