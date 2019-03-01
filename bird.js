
class Bird {
  constructor() {
    this.fitness = 0
    this.score
    this.y = height / 2;
    this.x = 64;
    this.gravity = 0.7;
    this.lift = -12;
    this.velocity = 0;
  }
    show() {
      fill(255);
      image(birdImg, this.x, this.y, 64, 64);
    };
    up() {
      this.velocity += this.lift;
    };
    update() {
      this.velocity += this.gravity;
      this.fitness ++;
      // this.velocity *= 0.9;
      this.y += this.velocity;
      if (this.y > height) {
        this.y = height;
        this.velocity = 0;
        gameState = false;
      }
      if (this.y < 0) {
        this.y = 0;
        this.velocity = 0;
        gameState = false;
      }
    };
    
      
    
  }

