function Player(x,y,w,h,img,speed){
  this.x = x;
  this.y= y;
  this.w = w;
  this.h = h;
  this.img = loadImage(img)
  this.speed = speed;
  
  this.display = function(){
    this.img.resize(this.w, this.h);
    image(this.img, this.x, this.y);
  }
    this.update = function(){
    if(keyIsDown(37)){
      p.x -= this.speed;
    }
     if(keyIsDown(39)){
      p.x += this.speed;
    }
     if(keyIsDown(38)){
      p.y -= this.speed;
    }
    if(keyIsDown(40)){
      p.y += this.speed;
    }
  }
}//end player


function everythingPlayer(){
    p.display()
    p.update()
}
