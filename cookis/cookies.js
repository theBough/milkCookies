function Cookie(x,y,w,h,img){
  this.x = x
  this.y = y
  this.w = w
  this.h = h
  this.img = loadImage(img)
  this.speed = 5
  
  this.display = function(){
    this.img.resize(this.w, this.h)
    image(this.img, this.x, this.y)
  }//end display
  
  
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
}//end cookie

function everythingCookie(){
  oreo.display()
}
