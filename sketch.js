var hr,mn,se;
var hrangle,mnangle,seangle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);

  hr=hour();
  mn=minute();
  se=second();

  seangle = map(se,0,60,0,360);
  mnangle = map(mn,0,60,0,360);
  hrangle = map(hr%12,0,12,0,360);

  push();
  rotate(seangle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnangle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,75,0);
  pop();


  push();
  rotate(hrangle);
  stroke("green");
  strokeWeight(7);
  line(0,0,50,0);
  pop();


  stroke("yellow");
  point(0,0);
  strokeWeight(10);
  noFill();
  stroke("red");
  arc(0,0,300,300,0,seangle);

  stroke("blue");
  arc(0,0,280,280,0,mnangle);

  stroke("green");
  arc(0,0,260,260,0,hrangle);

}
