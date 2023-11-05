class Particle {
    constructor(position) {
      this.pos = position.copy();
      this.mpos = createVector(mouseX, mouseY);
      this.acc = createVector(0, 0);
      this.vel = createVector(random(-3,3), 0);
      this.lifespan = 255;
      this.csize = 10;
      this.opos = position.copy();
    }
    
    run() {
      this.update();
      this.display();
    }
    
    test() {
      print(this.pos.dist(this.mpos));
    }
    
    Checkmouse() {
      if(this.pos.dist(this.mpos) < 20) {
        if(this.mpos.y < this.pos.y) {
          this.acc.add(createVector(0, 1));
        } else {
          this.acc.add(createVector(0, -1));
        }
      }
    }
    
    Checkpos() {
      if(this.pos.y < this.opos.y) {
        this.acc.sub(createVector(0, 0.1));
      } else if(this.pos.y > this.opos.y) {
        this.acc.add(createVector(0, 0.1));
      }
    }
    
    update() {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.vel.mult(0.97);
      
      this.lifespan -= 6;
      
      this.acc = createVector(0, 0);
    }
    
    display() {
      stroke(200, this.lifespan);
      strokeWeight(1);
      fill(120, this.lifespan);
      ellipse(this.pos.x, this.pos.y, this.csize, this.csize);
    }
    
    isDead() {
      return this.lifespan < 0;
    }
    
  }