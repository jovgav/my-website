// Cypress data
let pets1 = [1, 3, 2, 1, 2, 1, 2]; 
let currentHeight1 = 25;        
let index1 = 0;        
let eyeSize1 = 20; 
let eyeIncreased1 = false; 

// Juni data
let pets = [2, 1, 4, 3, 3, 1, 3]; 
let currentHeight = 25;        
let index = 0;  
let eyeSize = 20; 
let eyeIncreased = false; 

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  currentHeight1 = pets1[index1] * 10;
  currentHeight = pets[index] * 10;
}

function draw() {
  background('rgb(236,236,181)');
  
  let x1 = 164;
  let y1 = 215;
  
  let x = 366;
  let y = 210;
  
  // Cypress
  push();
  textSize(25);
  text('Cypress', 150, 180);
  pop();
  
  push();
  fill('tan');
  textSize(25);
  text('Juniper', 360, 180);
  pop();
  
  // Cypress
  push();
  fill('tan');
  noStroke();
  // Head
  circle(200, 250, 90);
  // Eyes
  push();
  stroke('black');
  fill('white');
  circle(180, 240, eyeSize1);
  circle(220, 240, eyeSize1);
  pop();
  push();
  fill('green');
  circle(180, 240, eyeSize1/2); 
  circle(220, 240, eyeSize1/2); 
  pop();
  
  // Whiskers
  push();
  strokeWeight(0.5);
  stroke('white');
  line(197, 262, 172, 260);
  line(197, 264, 172, 264);
  line(203, 262, 227, 260);
  line(203, 264, 227, 264);
  pop();
  
  // Nose
  push();
  stroke('black')
  fill('pink');
  triangle(195, 260, 200, 270, 205, 260);
  pop();
  
  // Body
  ellipse(200, 350, 100, 150);
  push();
  fill('white');
  ellipse(200, 350, 50, 100);
  pop();
  
  // Mouth arcs
  push();
  stroke(2);
  arc(195, 270, 10, 10, 0, 180);
  arc(205, 270, 10, 10, 0, 180);
  pop();
  
  // Left ear
  triangle(160, 230, 180, 220, 160, 185);
  // Right ear
  triangle(216, 220, 238, 230, 233, 185);
  
  // Rectangle that rises to open eyes
  push();
  rect(x1, y1, 72, currentHeight1);
  pop();
  
  // Tail
  stroke('tan');
  strokeWeight(15);
  let tailStartX = 100; // x position of the tail base
  let tailStartY = 445; // y position of the tail base
  let controlPoint1X = tailStartX + 30; // first control point
  let controlPoint1Y = tailStartY - 50; // first control point
  let controlPoint2X = tailStartX + 50; // second control point
  let controlPoint2Y = tailStartY - 100; // second control point
  let tailEndX = tailStartX + 70; // end point of the tail
  let tailEndY = tailStartY - 60; // end point of the tail
  noFill();
  beginShape();
  vertex(tailStartX, tailStartY);
  bezierVertex(controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y, tailEndX, tailEndY);
  endShape();
  pop();
  
  // Juni
  push();
  fill('black');
  noStroke();
  // Head
  circle(400, 250, 90);
  // Eyes
  push();
  stroke('black');
  fill('white');
  circle(380, 240, eyeSize);
  circle(420, 240, eyeSize);
  pop();
  push();
  fill('green');
  circle(380, 240, eyeSize / 2); 
  circle(420, 240, eyeSize / 2); 
  pop();
  
  // Whiskers
  push();
  strokeWeight(0.5);
  stroke('white');
  line(397, 262, 372, 260);
  line(397, 264, 372, 264);
  line(403, 262, 427, 260);
  line(403, 264, 427, 264);
  pop();
  
  // Nose
  push();
  fill('pink');
  triangle(395, 260, 400, 270, 405, 260);
  pop();
  
  // Mouth arcs
  push();
  stroke('white');
  arc(395, 270, 10, 10, 0, 180);
  arc(405, 270, 10, 10, 0, 180);
  pop();
  
  // Left ear
  triangle(360, 240, 385, 220, 355, 185);
  // Right ear
  triangle(440, 240, 415, 220, 445, 185);
  
  // Body
  ellipse(400, 350, 100, 150);
  
  //Rectangle for eyes
  push();
  rect(x, y, 65, currentHeight);
  pop();

  // Tail
  stroke('black');
  strokeWeight(15);
  let tailStartX1 = 300; 
  let tailStartY1 = 445; 
  let controlPoint1X1 = tailStartX1 + 30; 
  let controlPoint1Y1 = tailStartY1 - 50; 
  let controlPoint2X1 = tailStartX1 + 50; 
  let controlPoint2Y1 = tailStartY1 - 100; 
  let tailEndX1 = tailStartX1 + 70; 
  let tailEndY1 = tailStartY1 - 60; 
  noFill();
  
  beginShape();
  vertex(tailStartX1, tailStartY1);
  bezierVertex(controlPoint1X1, controlPoint1Y1, controlPoint2X1, controlPoint2Y1, tailEndX1, tailEndY1);
  endShape();
  pop();
  
  // Cursor 
  push();
  noStroke();
  fill('rgb(0,0,0)');
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);  
  pop();
}

function mousePressed() {
  index1 = (index1 + 1) % pets1.length; 
  currentHeight1 = pets1[index1] * 10; 
  index = (index + 1) % pets.length; 
  currentHeight = pets[index] * 10; 
  
  if (!eyeIncreased1) {
    eyeSize1 += 10; 
    eyeIncreased1 = true; 
  }
  
  if (!eyeIncreased) {
    eyeSize += 3;  
    eyeIncreased = true; 
  }
}

// I used chatGPT to figure out how to make a bezierVertex for the tail
