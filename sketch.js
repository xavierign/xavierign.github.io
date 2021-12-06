function setup() {
  createCanvas(400, 400);
  background(220);
  fill(255)
  ellipse(224, 184, 220, 220);
  i = 0
}

function draw() {
  //background(220);
  fill(0,i,100)
  ellipse(224+i, 184-i, 20, 20);
  i =  i +1;
  fill(255,0,0);
  rect(100,100,40+i);
}