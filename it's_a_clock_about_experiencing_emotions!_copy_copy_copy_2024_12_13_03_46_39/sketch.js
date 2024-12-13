// Global variables for circle states
let whiteCircleClicked = false;
let whiteClickStartTime;
let whiteTransitionDuration = 20000; 
let blueCircleClicked = false;
let blueClickStartTime;
let blueTransitionDuration = 20000;
let pinkCircleClicked = false;
let pinkClickStartTime;
let pinkTransitionDuration = 20000;
let redCircleClicked = false;
let redClickStartTime;
let transitionDuration = 20000;

// Circle dimensions
let rad = 400;
let size;
let minSize = 10;
let maxSize = rad - 340;
let shrinking = true;
let startTime;
let duration = 5000;

// Interactive state
let isPressed = false;
let pressStartTime;

// color arrays
const circleColors = {
  green: ["#5DAC62", "#7CDA0F", "#248E11", "#C5DC2A", "#91E64C"],
  purple: ["#000000", "#FFA500", "#8BC34A", "#DC3EDC", "#FFFF00", "#FFFFFF", "#B8E8FC", "#FE78E4", "#FF0000"],
  yellow: ["rgb(251,251,36)", "#FFFFFF"]
};
let green_circle_colors = [];
let green_frameCounter = 0;

function setup() {
  createCanvas(600, 600);
  size = maxSize;
  startTime = millis();
  green_circle_colors = ["#5DAC62", "#7CDA0F", "#248E11", "#C5DC2A", "#91E64C"];
  purple_circle_colors = [
    "#000000",
    "#FFA500",
    "#8BC34A",
    "#DC3EDC",
    "#FFFF00",
    "#FFFFFF",
    "#B8E8FC",
    "#FE78E4",
    "#FF0000",
  ];
  yellow_circle_colors = ["rgb(251,251,36)", "#FFFFFF"];
}

function mousePressed() {
  if (mouseX < 360 && mouseX > 240 && mouseY > 380 && mouseY < 500) {
    isPressed = true;
    pressStartTime = millis();
  }
}

function draw() {
  if (whiteCircleClicked) {
    let elapsedTime = millis() - whiteClickStartTime;
    let progress = constrain(elapsedTime / whiteTransitionDuration, 0, 1);

    background(255); // Pure white background

    if (progress >= 1) {
      whiteCircleClicked = false;
    }
    drawAllCircles();
  }
  else if (blueCircleClicked) {
    let elapsedTime = millis() - blueClickStartTime;
    let progress = constrain(elapsedTime / blueTransitionDuration, 0, 1);
    let r = map(progress, 0, 1, 184, 0);
    let g = map(progress, 0, 1, 232, 0);
    let b = map(progress, 0, 1, 252, 50); // Keep some blue at the darkest point

    background(r, g, b); // Transition from light blue to dark blue

    if (progress >= 1) {
      blueCircleClicked = false;
    }
    drawAllCircles();
  } 
 else if (pinkCircleClicked) {
    let elapsedTime = millis() - pinkClickStartTime;
    let progress = constrain(elapsedTime / pinkTransitionDuration, 0, 1);
    
    // Create a pink transition from dark to light
    let r = map(progress, 0, 1, 254, 255); // Slight change in red
    let g = map(progress, 0, 1, 20, 192);  // Bigger change in green
    let b = map(progress, 0, 1, 147, 203); // Moderate change in blue
    background(r, g, b);

    if (progress >= 1) {
      pinkCircleClicked = false;
    }
    // Only draw pink circle when clicked
    push();
    noStroke();
    fill("rgb(254,120,228)");
    circle(120, 400, rad - 180);
    
    // Draw the "LOVE" text
    push();
    text("LOVE", 90, 400);
    fill('black');
    textSize(20);
    textFont()
    pop();
    pop();
}
  else if (redCircleClicked) {
    let elapsedTime = millis() - redClickStartTime;
    let progress = elapsedTime / transitionDuration;

    if (progress >= 1) {
      background(0);
      redCircleClicked = false;
    } else {
      let redValue = map(progress, 0, 1, 255, 0);
      background(redValue, 0, 0);
    }
    // Only draw red circle when clicked
    push();
    noStroke();
    fill("red");
    circle(478, 475, rad - 170);
    pop();
  } 
  else {
    // Normal state
    background("rgba(167,160,160,0.62)");

    fill("black");
    text("Feelings & Time Align", 10, 50);
    textSize(43);

    // Draw circles and check for clicks
    drawAllCircles();
    checkCircleClicks();
    drawInteractiveCircles();

    push()
    textStyle(BOLD);
    fill('black')
    textSize(45);
    text("ANGER", 395, 485);
    pop()
    
    push()
    textFont('Brush Script MT, cursive');
    textSize(24);
    fill('black')
    text("Love", 90, 400);
    pop()
    
    push()
    fill('black')
    textSize(14);
    text("sadness", 455, 135);
    pop()
  }
}

// [Rest of the functions remain exactly the same]

function checkCircleClicks() {
  if (mouseIsPressed) {
    // Blue circle click
    if (dist(mouseX, mouseY, 480, 130) < (rad - 230) / 2) {
      blueCircleClicked = true;
      blueClickStartTime = millis();
    }

    // Pink circle click
    if (dist(mouseX, mouseY, 120, 400) < (rad - 180) / 2) {
      pinkCircleClicked = true;
      pinkClickStartTime = millis();
    }

    // Red circle click
    if (dist(mouseX, mouseY, 478, 475) < (rad - 170) / 2) {
      redCircleClicked = true;
      redClickStartTime = millis();
    }
  }
}

function drawAllCircles() {
  // Blue circle
  push();
  noStroke();
  if (mouseIsPressed && dist(mouseX, mouseY, 480, 130) < (rad - 230) / 2) {
    blueCircleClicked = true;
    blueClickStartTime = millis();
  }
  fill("rgb(184,232,252)");
  circle(480, 130, rad - 230);
  pop();

  // Pink circle
  push();
  noStroke();
  fill("rgb(254,120,228)");
  circle(120, 400, rad - 180);
  pop();

  // Red circle
  push();
  noStroke();
  fill("red");
  circle(478, 475, rad - 170);
  pop();
}

function drawInteractiveCircles() {
  // Yellow circle
  push();
  if (isPressed && millis() - pressStartTime < duration) {
    if (mouseX < 360 && mouseX > 240 && mouseY > 380 && mouseY < 500) {
      noStroke();
      fill(random(yellow_circle_colors));
      circle(300, 440, rad - 280);
    }
  } else {
    noStroke();
    fill("yellow");
    circle(300, 440, rad - 280);
  }
  pop();

  // White circle (peace)
  push();
  noStroke();
  if (
    mouseIsPressed &&
    mouseX < 225 &&
    mouseX > 75 &&
    mouseY < 225 &&
    mouseY > 73
  ) {
    fill("white");
    circle(150, 150, millis() * 30);
  } else {
    fill("white");
    circle(150, 150, rad - 250);
  }
  pop();
  
  push()
  text('calm',102, 152)
  textSize(20)
  pop()


  // Purple circle (joy)
  push();
  noStroke();
  if (
    mouseIsPressed &&
    mouseX < 425 &&
    mouseX > 315 &&
    mouseY > 195 &&
    mouseY < 300
  ) {
    fill(random(purple_circle_colors));
  } else {
    fill("#DC3EDC");
  }
  circle(370, 250, rad - 290);
  pop();

  // Green circle (meditation)
  push();
  noStroke();
  if (
    mouseIsPressed &&
    mouseX > 180 &&
    mouseX < 280 &&
    mouseY < 320 &&
    mouseY > 220
  ) {
    fill(random(green_circle_colors));
  } else {
    fill("#8BC34A");
  }
  circle(230, 270, rad - 300);
  pop();

  // Orange circle (focus)
  push();
  noStroke();
  if (
    mouseIsPressed &&
    mouseX > 320 &&
    mouseX < 380 &&
    mouseY < 380 &&
    mouseY > 320 &&
    shrinking
  ) {
    fill("orange");
    circle(350, 350, size);
    size -= 0.3;
    if (millis() - startTime > duration) {
      shrinking = false;
    }
  } else {
    size = maxSize;
    shrinking = true;
    startTime = millis();
    fill("orange");
    circle(350, 350, rad - 340);
  }
  pop();

  // Black circle (depression)
  push();
  noStroke();
  if (
    mouseIsPressed &&
    mouseX < 312 &&
    mouseX > 288 &&
    mouseY < 312 &&
    mouseY > 288
  ) {
    fill("black");
    circle(300, 300, millis() * 30);
  } else {
    fill("black");
    circle(300, 300, rad - 375);
  }
  pop();
}