let myShader;

async function setup() {
  createCanvas(600, 600, WEBGL);
  myShader = await loadShader("shader.vert", "shader.frag");
  drawingContext.disable(drawingContext.DEPTH_TEST);
}

function draw() {
  background(25);
  orbitControl();
  lights();

  shader(myShader);

  freieForm();
  startPoints();
  koordinationsLinien();
}

function freieForm() {
  // Styling der freien Form
  stroke(255, 0, 0);
  strokeWeight(1);
  myShader.setUniform("uFarbe", [1.0, 1.0, 0.0, 0.5]);

  // --- FREIE ORGANISCHE FORM (p5.js v2 Spline-Syntax) ---
  beginShape();
  //macht geschmeidige oder kantige Form - 0.0 Standard, -1.0 geschmeidiger, 1.0 harte Kurve
  splineProperty("tightness", -1.0);

  // In v2 tippst du einfach nacheinander alle 3D-Punkte ein.
  // Die Kurve fliesst geschmeidig durch jeden dieser Punkte.
  splineVertex(-200, 0, 80); // Punkt 1 (oben links, im Raum vorn)
  splineVertex(0, -120, -50); // Punkt 2 (oben rechts, im Raum hinten)
  splineVertex(150, 50, 150); // Punkt 3 (unten rechts, weit vorn)
  splineVertex(0, 150, 50); // Punkt 4 (unten Mitte)
  splineVertex(-150, 80, -150); // Punkt 5 (unten links, im Raum hinten)

  // endShape(CLOSE) verbindet Punkt 5 perfekt geschmeidig zurück mit Punkt 1!
  endShape(CLOSE);
}

function startPoints() {
  strokeWeight(0.2);
  stroke(0);
  myShader.setUniform("uFarbe", [1.0, 1.0, 0.0, 1.0]);

  //point1
  push();
  translate(-200, 0, 80);
  sphere(10);
  pop();

  //point2
  push();
  translate(0, -120, -50);
  sphere(10);
  pop();

  //point3
  push();
  translate(150, 50, 150);
  sphere(10);
  pop();

  //point4
  push();
  translate(0, 150, 50);
  sphere(10);
  pop();

  //point5
  push();
  translate(-150, 80, -100);
  sphere(10);
  pop();
}

function koordinationsLinien() {
  stroke("#f4ecbc");
  strokeWeight(0.5);

  beginShape();
  splineVertex(0, -200, 0);
  splineVertex(0, 200, 0);
  endShape();

  beginShape();
  splineVertex(-250, 0, 0);
  splineVertex(250, 0, 0);
  endShape();

  beginShape();
  splineVertex(0, 0, 200);
  splineVertex(0, 0, -200);
  endShape();
}
