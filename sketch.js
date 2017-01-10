var ypos = 300;
var xpos = 440;
var xstep = 30;
var hstep = 15;
var fillstep = 20;
var origin = 225;

function setup() {
  createCanvas(1200, 600);
}

function draw() {
  background(sin(frameCount/300)*150+50);
  fill(sin(frameCount/45 + 15)*150 + 100*random());
  strokeWeight((frameCount%20)*random());
  ellipse(50, 50, 160, 160);
  stroke(cos(frameCount/187)*100);
  rect(160, 130, 135, 245);
  fill(123);
  strokeWeight(random());
  stroke(17);
  quad(sin(frameCount/120)*500 + 100, 350, mouseX, 57, 300, mouseY, 89, 500, 599);
 
  for (var i = 0; i < 12; i++) {
    fill(255-(fillstep*i)*random());
    ellipse(xpos+(xstep*i), ypos, 20, 20+(hstep*i));
  }
  
  strokeWeight(2);
  for (var i = 0; i < 10; i++) {
    stroke(210);
    line(i*25 + 50, origin, origin, origin - i*25);
    line(origin + i*25, origin, origin, i*25);
    line(450 - i*25, origin, origin, origin + i*25);
    line(origin - i*25, origin, origin, 450 - i*25);
  }
  
  noStroke();
  for (var i = 0; i < 5; i++) {
    fill(sin(frameCount/400)*255);
    ellipse(
      480+(sin(frameCount/(i+10))*(i+20)),
      350+(i*50),
      40,
      40);
  }
  
  fill(cos(frameCount/300)*150+50);
  textSize(16);
  textFont("Helvetica");
  textStyle(ITALIC);
  text("Technology is not bringing things", 860, 260);
  text("near but it is expanding the here", 860, 280);
  text("into an infinite space.", 860, 300);
  textStyle(NORMAL);
  text("Tom McCarthy", 860, 355);
}