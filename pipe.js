
class Pipe {
  constructor() {
    this.spacing = 150;
    this.top = random(height / 6, 3 / 4 * height);
    this.bottom = height - (this.top + this.spacing);
    this.x = width;
    this.w = 80;
    this.speed = 6;
    this.hspeed = 4;
  }
    hits(bird) {
      if (bird.y < this.top || bird.y > height - this.bottom) {
        if (bird.x > this.x && bird.x < this.x + this.w) {
          return true;
        }
      }
      return false;
    };
    show() {
      fill(255);
      if (this.highlight) {
        fill(255, 0, 0);
      }
      image(wallImg, this.x, 0, this.w, this.top);
      image(wallImg, this.x, height - this.bottom, this.w, this.bottom);
    };
    update() {
      this.x -= this.speed;
    };
    offscreen() {
      if (this.x < -this.w) {
        return true;
      }
      else {
        return false;
      }
    };
  }

