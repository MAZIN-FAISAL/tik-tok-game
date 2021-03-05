hr = hour();
mn = minute();
sc = second(); 



function setup() {


  createCanvas(800,400);
  noStroke();
  createSprite(400, 200, 50, 50);


  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
   
  drawSprites();
}

 function map(){

  scAngle = map(sc, 0, 60, 0,360);
 }