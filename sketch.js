var frameInterval = 25; // how many frames per segment
var numMolnarGridsX = 8;
var numMolnarGridsY = 8;
var gridSizeX = 4;
var gridSizeY = 4;

var molnarGrids = [];
var indexActive = 0;

var curvedVertices = false;
var bg;

function setup() {
  createCanvas(1200, 800);
  noFill();
  bg = loadImage("background.jpg");
  
  for (var y=1; y<numMolnarGridsY-1; y++) {
    for (var x=1; x<numMolnarGridsX-1; x++) {
      var mx = map(x, 0, numMolnarGridsX, 0, width);
      var my = map(y, 0, numMolnarGridsY, 0, height);
      var mwidth = width / numMolnarGridsX;
      var mheight = height / numMolnarGridsY;
      var margin = 10;
      
      var m = new MolnarGrid(mx, my, mwidth, mheight, gridSizeX, gridSizeY, margin);
      m.createOrder();
      molnarGrids.push(m);
    }
  }
}

function draw() {
  background(bg);
  
  molnarGrids[indexActive].update();
  
  // check if it's done... if it is, set to update the next molnar grid
  if (molnarGrids[indexActive].isDone()) {
    indexActive = indexActive + 1;
    indexActive = min(indexActive, molnarGrids.length-1);
  }
  
  for (var i=0; i<molnarGrids.length; i++) {
    molnarGrids[i].draw();
  }
}

