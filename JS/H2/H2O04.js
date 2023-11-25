var strand;
var strandX;

function preload() {
  strand = loadImage("images/backgrounds/strand.jpg");
}

function setup() {
  canvas = createCanvas(600, 400);
  canvas.parent('processing');
  strandX = 0;
  fill('black');
  textFont("Verdana");
  textSize(14);
}

function draw() {
  background('grey');
  image(strand, strandX, 0);
  image(strand, strandX + width, 0);

  if (keyIsDown(RIGHT_ARROW)) {
    strandX++;
    if (strandX >= 0) {
      strandX = -strand.width;
    }
  } 
  else {
    strandX--;
    if (strandX <= -strand.width) {
      strandX = 0;
    }
  }

  text("strandX=" + strandX, 20, 20);
}

// gemaakt door TDG TPS 251123