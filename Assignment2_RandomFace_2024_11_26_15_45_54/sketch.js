let r, g, b;

let eyecolor; //'rgb(78,195,201)'

let rad;

let rad2;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  
  eyecolor='#4EC3C9'
  rad=10
  rad2=20

  r=232
  g=131
  b=208
}

function draw() {
  background('#67E767');
  rad = (mouseX+mouseY)/20;
  rad2 = (mouseX+mouseY)/20;
  
//heart
  //triangle
  push()
  //fill(232,131,208)
  //stroke(232,131,208)
  strokeWeight(1)
  triangle(120,150, 200,280, 279,150)
  
  //left circle
  push()
  noStroke()
  fill('#67E767')
  push()
  translate(155,144)
  rotate(15)
  arc(-10, -15, 80, 80, 100, -140)
  pop()
  pop()
  stroke(r,g,b)
  strokeWeight(1)
  fill(r,g,b)//figure out how to get the fill out of here and keeping the pink like you did w triangle
  circle(162, 142, 80)

  //right circle
  push()
  noStroke()
  fill('#67E767')
  push()
  translate(242,142)
  rotate(16)
  arc(34, -10, 9, 80, -90, 90)
  pop()
  pop()
  push()
  stroke(r,g,b)
  strokeWeight(1)
  fill(r,g,b)
  circle(235, 143, 80)
  pop()
  
//face
  //left eye
  lefteye= 
  push()
  push()
  stroke('black')
  fill('white')
  circle(165, 155, 20)
  pop()
  
  //left pupil
  push()
  noStroke()
  //stroke('black')
  fill(eyecolor)
  circle(165, 157, rad)
  pop()
  
  //left eyelash top
  push()
  noFill()
  stroke('black')
  arc(152, 147.5, 14, 15, 75, 165)
  pop()
  //left eyelash bottom
  push()
  noFill()
  stroke('black')
  arc(150.5, 156, 11, 8, 20, 180)
  pop()
  pop()
  
  //right eye
  righteye=
  push()
  push()
  stroke('black')
  fill('white')
  circle(230, 155, 20)
  pop()
  
  //right pupil
  push()
  noStroke()
  //stroke('black')
  fill(eyecolor)
  circle(230, 157, rad)
  pop()
    
  //right eyelash top
  push()
  noFill()
  stroke('black')
  arc(243, 147, 10, 15, 20, -250)
  pop()
  //right eyelash bottom
  push()
  noFill()
  stroke('black')
  arc(242.5, 153, 11, 13, 20, -250)
  pop()
  pop()
  
  //nose
  push()
  stroke('black')
  arc(200, 185, 10, 5, 0, 180)
  pop()
  
  //lips
  push()
  stroke('black')
  fill('red')
  ellipse(200, 220, 40, rad2)
  line(180,220, 220,220)
  pop()
  
} 

  function mousePressed(){
  r=random(0,300)//this changes the color everytime you click
  g=random(0,300)
  b=random(0,300)
}

