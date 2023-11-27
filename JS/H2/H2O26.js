var vuur = {
  x: 225,
  y: 225,
  diameter: null,
  straal: null,
  R: 255,
  G: 150,
  B: 0,
  
  teken() {
    this.diameter = random(240,270); // grootte verandert steeds
    this.straal = this.diameter / 2;
    this.G = random(70,150); // kleur verandert 
    fill(this.R,this.G,this.B);
    ellipse(this.x,this.y,this.diameter);
  }
}

var jos = {
  x: null,
  y: null,
  diameter: 50,
  straal: 25,
  naam: "Jos",
  kleur: 'salmon',
  
  isVlakbij(gevaar) {
    if (dist(this.x,this.y,gevaar.x,gevaar.y) < this.straal+gevaar.straal + 25) { 
      // De methode isVlakbij geeft de waarde true terug als de afstand tussen het middelpunt van Jos (this.x, this.y) en het gevaar (het object vuur) kleiner is dan de som van de straal van Jos (this.straal) en de straal van het gevaar (gevaar.straal), plus 25 pixels. Met andere woorden, de methode geeft true terug als Jos binnen een bepaalde afstand van het gevaar is.
      return true;
    }
    else {
      return false;
    }
  },
  
  teken(muisPositieX,muisPositieY) {
    this.x = constrain(muisPositieX,this.diameter / 2,canvas.width - this.diameter / 2);
    this.y = constrain(muisPositieY,this.diameter / 2,canvas.height - this.diameter / 2);

    push();
    translate(this.x,this.y);
    noStroke();
    fill(this.kleur);
    ellipse(0,0,this.diameter);
    fill('slategray');
    ellipse(-7,-10,17);
    ellipse(7,-10,17);
    fill('white');
    ellipse(-7,-8,7,13);
    ellipse(7,-8,7,13);
    fill('orange');
    ellipse(0,3,17);
    stroke('slategray');
    strokeWeight(3);
    fill('white');
    arc(0, 13, 26, 13, 0, PI, CHORD);
    pop();
  }
};


function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  noStroke();
  frameRate(20);
}

function draw() {
  background('lavender');
  vuur.teken();
  
  // voeg hier de if-else in
  
  if (jos.isVlakbij(vuur)) {
    jos.kleur = 'red';
   }
   else {
    jos.kleur = 'salmon';
   }
  jos.teken(mouseX,mouseY);
}