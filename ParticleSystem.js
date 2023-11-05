class ParticleSystem {
    constructor(position) {
      this.origin = position.copy();
      this.particles = [];
    }
    
    addParticle() {
      if (frameCount%5 === 0) {
        this.particles.push(new Particle(this.origin))
      }
    }
    
    add() {
      for (let cd of this.particles) {
        cd.Checkmouse();
      }
    }
    
    run() {
      for (let i = this.particles.length - 1; i >=0; i--) {
        let cd = this.particles[i];
        cd.run();
        
        if (cd.isDead()) {
          this.particles.splice(i, 1);
        }
      }
    }
  }