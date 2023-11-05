let systems;

function setup() {
  createCanvas(400, 400);
  systems = new ParticleSystem(createVector(width/2, height/2));
}

function draw() {
  background(220);
  systems.addParticle();
  systems.add();
  systems.run();
}