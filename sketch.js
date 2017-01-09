var ypos = 300;
var xpos = 440;
var xstep = 30;
var hstep = 15;
var fillstep = 20;
var origin = 225;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(sin(frameCount/40)*210, cos(frameCount/100)*100, sin(frameCount/50 + 50)*origin);
  fill(sin(frameCount/45 + 15)*150 + 100, 34, sin(frameCount/500)*255 + 55);
  strokeWeight(25);
  ellipse(50, 50, 160, 160);
  stroke(50, 134, cos(frameCount/187)*100);
  rect(140, 140, 135, 245);
  fill(123, 64, 238);
  strokeWeight(5);
  stroke(17, 117, 217);
  quad(sin(frameCount/120)*350 + 100, 350, mouseX, 57, 187, mouseY, 89, 799, 799);
 
  for (var i = 0; i < 12; i++) {
    fill(100+(mouseX%100), 255-(fillstep*i), 200);
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
    fill(sin(frameCount/80)*255);
    ellipse(
      500+(sin(frameCount/(i+10))*(i+20)),
      400+(i*50),
      40,
      40);
  }
  
  var mobydick = "Here, millions of mixed shades and shadows, drowned dreams, somnambulisms, reveries; all that we call lives and souls, lie dreaming, dreaming, still; tossing like slumberers in their beds; the ever-rolling waves but made so by their restlessness.";
  text(mobydick, 80, 510, 200, 200);
  text("Herman Melville", 80, 670);
}