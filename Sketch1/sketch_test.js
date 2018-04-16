function setup() {

createCanvas(400,400);

}

function draw() {

  background(0);
  push();
  fill(255,0,255);
  translate(width/2, height/2);
  ellipse(0,0,random(40,50),random(40,50));
  pop();


}
