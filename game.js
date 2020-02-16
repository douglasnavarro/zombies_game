let gameSurvivor;
let gameZombies;

function drawSurvivor(survivor) {
  line(0, 0, survivor.x, survivor.y);
}

function drawZombie(zombie) {
  circle(zombie.x, zombie.y, 35);
}

function drawZombies(zombies) {
  zombies.forEach(zombie => drawZombie(zombie));
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

function moveZombies(zombies) {
  return zombies.map(zombie => moveZombie(zombie));
}

// p5Js functions

function setup() {
  createCanvas(400, 400);
  gameSurvivor = createSurvivor();
  gameZombies = [createZombie(), createZombie(120)];
}

function draw() {
  gameZombies = moveZombies(gameZombies);

  background(220);
  translate(width / 2, height / 2);
  drawSurvivor(gameSurvivor);
  drawZombies(gameZombies);
}