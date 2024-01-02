var animatie = [];
var aantalBeeldjes = 6;
var nummer = 5;

function preload() {
  for (var b = 0;b < aantalBeeldjes;b++) {
    nieuw_beeldje = loadImage("images/sprites/Jos_losse_beeldjes/Jos-" + b + ".png");
    animatie.push(nieuw_beeldje);
  }
}

function setup() {
  canvas = createCanvas(460,460);
  canvas.parent('processing');
  noStroke();
  frameRate(50);
}

function draw() {
  background('white');
  image(animatie[nummer],0,0);
  
  // straal van de neus is 180

  if (mouseX < 145) {
    nummer = 3;
  }
  else if (mouseX > 305) {
    nummer = 4;
  }
  else {
    if (mouseY < 145) {
      nummer = 1;
    }
    else if (mouseY > 305) {
      nummer = 0;
    }
    else {
      nummer = 5;
    }
  }
}