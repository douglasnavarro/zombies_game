let survivor;

function drawSurvivor(survivor) {
  line(0, 0, survivor.x, survivor.y);
}

function setup() {
  createCanvas(400, 400);
  survivor = p5.Vector.fromAngle(radians(45), 50);
}

function draw() {
  background(220);
  translate(width/2, height/2);
  drawSurvivor(survivor);
}