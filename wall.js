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

 
} //end colision
function wallLeftRight(){
  for (var i = 0; i < w.length; i++) {
     if (
      p.y <= w[i].y + w[i].h &&
      p.y + p.h >= w[i].y &&
      p.x -20 <= w[i].x + w[i].w &&
      p.x -20>= w[i].x &&
      w[i].show
    ) {
     
      return true;
      
    }

    //check if we hit the right of any wall
    else if (
      p.y <= w[i].y + w[i].h &&
      p.y + p.h >= w[i].y &&
      p.x + p.w+20 >= w[i].x &&
      p.x +20<= w[i].x + w[i].w &&
      w[i].show
    ) {
      
      return true;
    }
  }
}

function wallAboveBelow(){
   for (var i = 0; i < w.length; i++) {
    if (
      p.x <= w[i].x + w[i].w &&
      p.x + p.w >= w[i].x &&
      p.y -20<= w[i].y + w[i].h &&
      p.y -20>= w[i].y &&
      w[i].show
    ) {
       
      return true;

    }

    //check if we hit the top of any wall
    else if (
      p.x <= w[i].x + w[i].w &&
      p.x + p.w >= w[i].x &&
      p.y + p.h +20 >= w[i].y &&
      p.y +20 <= w[i].y + w[i].h &&
      w[i].show
    ) {
     
      return true;
    }
  } //end loop
}

function everythingWall() {
  for(i=0 ; i<w.length;i++){
    w[i].display();
  }
}
