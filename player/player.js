function Player(x, y, w, h, img, xSpeed, ySpeed) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.img = loadImage(img);
  this.xSpeed = xSpeed;
  this.ySpeed = ySpeed;

  this.display = function () {
    this.img.resize(this.w, this.h);
    image(this.img, this.x, this.y);
  };
  this.update = function () {
    if (keyIsDown(37)) {
      if (!wallLeftRight()) {
        this.xSpeed = -20;
        this.ySpeed = 0;
      }
    }
    if (keyIsDown(39)) {
      if (!wallLeftRight()) {
        this.xSpeed = 20;
        this.ySpeed = 0;
      }
    }

    if (keyIsDown(38)) {
      if (!wallAboveBelow()) {
        console.log("Please")
        this.ySpeed = -20;
        this.xSpeed = 0;
      }
    }
    if (keyIsDown(40)) {
      if (!wallAboveBelow()) {
        this.ySpeed = 20;
        this.xSpeed = 0;
      }
    }
    p.x += this.xSpeed;
    p.y += this.ySpeed;
  };
} //end player

function everythingPlayer() {
  p.display();
  p.update();
}
