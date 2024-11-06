function Wall(x, y, w, h, col, show) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.col = col;
  this.show = show;

  this.display = function () {
    if (this.show) {
      fill(this.col);
      rect(this.x, this.y, this.w, this.h);
    }
  }; //end display
}
function wallCollision() {

  for (var i = 0; i < w.length; i++) {
    //check if we hit the left of any wall
    if (
      p.y <= w[i].y + w[i].h &&
      p.y + p.h >= w[i].y &&
      p.x <= w[i].x + w[i].w &&
      p.x >= w[i].x &&
      w[i].show
    ) {
      p.x += p.speed;
      
    }

    //check if we hit the right of any wall
    if (
      p.y <= w[i].y + w[i].h &&
      p.y + p.h >= w[i].y &&
      p.x + p.w >= w[i].x &&
      p.x <= w[i].x + w[i].w &&
      w[i].show
    ) {
      p.x -= p.speed;
     
    }

    if (
      p.x <= w[i].x + w[i].w &&
      p.x + p.w >= w[i].x &&
      p.y <= w[i].y + w[i].h &&
      p.y >= w[i].y &&
      w[i].show
    ) {
      p.y += p.speed;

    }

    //check if we hit the top of any wall
    if (
      p.x <= w[i].x + w[i].w &&
      p.x + p.w >= w[i].x &&
      p.y + p.h >= w[i].y &&
      p.y <= w[i].y + w[i].h &&
      w[i].show
    ) {
      p.y -= p.speed;
     
    }
  } //end loop
} //end colision

function everythingWall() {
  for(i=0 ; i<w.length;i++){
    w[i].display();
  }
}
