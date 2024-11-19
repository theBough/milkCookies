let p;
let oreo;
let w = [];
let t;

function setup() {
  createCanvas(600, 450);
  frameRate(8)
  p = new Player(300, 200, 20, 20, "player/milk.jpg",0,0);
  oreo = new Cookie(180, 200, 20, 20, "cookies/oreo.png");
  loadLevelOne()
}

function draw() {
  background(220);
  everythingPlayer();
  everythingCookie();
  everythingWall()
  
}
