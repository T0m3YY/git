var aantal = 5;

function setup() {
  canvas = createCanvas(450, 450);
  canvas.parent('processing');
  frameRate(10);
  colorMode(RGB, 255, 255, 255, 1);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background('lavender');
  fill('black');
  text("aantal = " + aantal, 10, 20);
  translate(225, 225);
  
  for (var n = 0; n < aantal; n++) {
    tekenBlad();
  }

  // Gele binnenkant
  fill(255, 255, 0, 0.5);
  
  for (var i = 0; i < aantal; i++) {
    drawYellowCenter();
  }
  
  if (keyIsDown(LEFT_ARROW) && aantal >= 2) {
    aantal--;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    aantal++;
  }
}

function tekenBlad() {
  // Tekenen rode bladeren
  fill(178, 34, 34, 0.7);
  ellipse(0, 0, 400, 50);
  rotate(360 / aantal);
}

function drawYellowCenter() {
  // Tekenen gele binnenkant
  rect(0, 0, 75, 75);
  rotate(360 / aantal); // Halveer de rotatie
}
