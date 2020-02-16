let gameSurvivor;
let gameZombie;

function drawSurvivor(survivor) {
  line(0, 0, survivor.x, survivor.y);
}

function drawZombie(zombie) {
  circle(zombie.x, zombie.y, 35);
}

// Pure functions

function createSurvivor() {
  return p5.Vector.fromAngle(radians(45), 50);
}

function createZombie(distance = 75) {
  return p5.Vector.fromAngle(radians(-90), distance);
}

function moveZombie(zombie) {
  return p5.Vector.fromAngle(zombie.heading(), zombie.mag() - 1);
}

// p5Js functions

function setup() {
  createCanvas(400, 400);
  gameSurvivor = createSurvivor();
  gameZombie = createZombie();
}

function draw() {
  gameZombie = moveZombie(gameZombie);

  background(220);
  translate(width / 2, height / 2);
  drawSurvivor(gameSurvivor);
  drawZombie(gameZombie);
}