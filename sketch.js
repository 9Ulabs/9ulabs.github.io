var frameInterval = 10; // how many frames per segment
var numMolnarGridsX = 25;
var numMolnarGridsY = 3;
var gridSizeX = 2;
var gridSizeY = 3;

var molnarGrids = [];
var indexActive = 0;

var curvedVertices = false;
var textHeight = 150;

var a, b;

function setup() {
  createCanvas(700, 900);
  noFill();
  frameRate(100);
  a = round(random()*6)*100 + 50;
  b = round(random()*6)*100 + 50;

  for (var y=0; y<numMolnarGridsY; y++) {
    for (var x=0; x<numMolnarGridsX; x++) {
      var mx = map(x, 0, numMolnarGridsX, 0, width);
      var my = map(y, 0, numMolnarGridsY, height - textHeight, height);
      var mwidth = width / numMolnarGridsX;
      var mheight = textHeight / numMolnarGridsY;
      var margin = 10;
      
      var m = new MolnarGrid(mx, my, mwidth, mheight, gridSizeX, gridSizeY, margin);
      m.createOrder();
      molnarGrids.push(m);
    }
  }
}

function draw() {
  var c = round(random()*6)*100 + 50;
  var d = round(random()*6)*100 + 50;
  stroke(255);
  if (frameCount % 15 == 0) {
    line(a,b,c,d);
    a = c;
    b = d;
  }

  molnarGrids[indexActive].update();
  
  // check if it's done... if it is, set to update the next molnar grid
  if (molnarGrids[indexActive].isDone()) {
    if (indexActive % 4 == 0 && round(random()))
      indexActive = indexActive + 2;
    else
      indexActive = indexActive + 1
    indexActive = min(indexActive, molnarGrids.length-1);
  }
  
  for (var i=0; i<molnarGrids.length; i++) {
    molnarGrids[i].draw();
  }
}

