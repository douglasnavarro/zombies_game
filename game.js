let survivor;
let zombie;

function drawSurvivor(survivor) {
  line(0, 0, survivor.x, survivor.y);
}

function drawZombie(zombie) {
  circle(zombie.x, zombie.y, 35);
}

function setup() {
  createCanvas(400, 400);
  survivor = p5.Vector.fromAngle(radians(45), 50);
  zombie = p5.Vector.fromAngle(radians(-90), 75);
}

function draw() {
  background(220);
  translate(width/2, height/2);
  drawSurvivor(survivor);
  drawZombie(zombie);
}