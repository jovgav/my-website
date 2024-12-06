function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}
  function 
  draw() { 
  background(0, 0, 102);
    
//disco ball
  push()
  fill(192);
  circle(330, 60, 100);
  strokeWeight(1);
  stroke(192, 192, 192);
  pop() 
  push()
  fill(165)
  ellipse(330, 60, 100, 80);
  pop()
  push()
  fill(192)
  ellipse(330, 60, 100, 60);
  pop()
  push()
  fill(165)
  ellipse(330, 60, 100, 40);
  pop()
  push()
  fill(192)
  ellipse(330, 60, 100, 20);
  pop()
  push()
  fill(165)
  ellipse(330, 60, 100, 0);
  pop()
  
//disco vertical lines
  push()
  noFill();
  arc(320, 60, 60, 97.5, 100, 270);
  pop()
  push()
  noFill();
  arc(330, 60, 60, 99.5, 90, 270);
  pop()
  push()
  noFill();
  arc(340, 60, 60, 99.5, 90, 270);
  pop()
  push()
  noFill();
  arc(350, 60, 60, 93, 90, 270);
  pop()
  push()
  noFill();
  arc(355, 60, 50, 85, 90, 270);
  pop()
  push()
  noFill();
  arc(365, 60, 47, 82, 90, 270);
  pop()
  push()
  noFill();
  arc(368, 60, 30, 70, 90, 270);
  pop()  
  push()
  noFill();
  arc(373, 60, 20, 60, 90, 270);
  pop()  
  push()
  noFill();
  arc(377, 60, 10, 42, 90, 270);
  pop()  
  
//left earring
  push()
  fill(255, 215, 0);
  strokeWeight(5)
  stroke(255,215,0)
  arc(195, 180, 70, 100, 80, 300);
  pop()
  push()
  fill(0, 0, 102);
  noStroke()
  arc(205, 180, 75, 100, 90, 300);
  pop()

//right earring
  push()
  fill(255,215,0);
  strokeWeight(2)
  stroke(255,215,0)
  arc(215, 180, 70, 100, 90, 300);
  pop()
  push()
  fill(0, 0, 102);
  noStroke()
  arc(220, 180, 50, 99, 90, 300);
  pop()

//earring clasp
  push()
  noStroke()
  translate(236,140)
  rotate(10)
  fill(230, 230, 230, 120);
  ellipse(0, 0, 5, 20);
  pop()
  push()
  noStroke()
  translate(241,140)
  rotate(30)
  fill(230, 230, 230, 120);
  ellipse(0, 2, 10, 7);
  pop()
 
//outline
  push()
  stroke(255,215,0)
  strokeWeight(4)
  fill(255,215,0);
  ellipse(218, 280, 60, 80);
  pop()
  push()
  push()
  stroke(255, 228, 77)
  strokeWeight(4)
  fill(255,215,0);
  translate (180, 280)
  rotate(12)
  ellipse(16, 0, 25, 60);
  pop()
  stroke(255, 228, 77)
  strokeWeight(4)
  fill(255,215,0);
  push()
  stroke(255, 228, 77)
  strokeWeight(4)
  fill(255,215,0);
  translate (233, 280)
  rotate(-12)
  ellipse(7, 2, 25, 60);
  pop()
  pop()
    
//tulip
  push()
  noStroke()
  fill(255, 204, 255);
  ellipse(218, 280, 60, 80);
  pop()
  push()
  push()
  noStroke()
  fill(255, 204, 255);
  translate (180, 280)
  rotate(12)
  ellipse(16, 0, 25, 60);
  pop()
  noStroke()
  fill(255, 204, 255);
  push()
  noStroke()
  fill(255, 204, 255);
  translate (233, 280)
  rotate(-12)
  ellipse(7, 2, 25, 60);
  pop()
  pop()

  push()
  noFill()
  strokeWeight(3)
  stroke(179, 152, 0)
  circle(215, 235, 10);
  stroke(0);
  pop()
    
//upper left lights
  push()
  blendMode(HARD_LIGHT)
  noStroke()
  fill(255, 232, 102)
  triangle(100,20, 103,15, 106,20)
  fill(255, 184, 51)
  triangle(100,20, 103,25, 106,20)
  push()
  noStroke()
  fill(255, 217, 0)
  triangle(80,30, 83,25, 86,30)
  fill(255, 232, 102)
  triangle(80,30, 83,35, 86,30)
  pop()
  push()
  noStroke()
  fill(255, 184, 51)
  triangle(95,40, 98,35, 101,40)
  fill(255, 232, 102)
  triangle(95,40, 98,45, 101,40)
  pop()
  pop()
    
  //bottom right lights
  push()
  blendMode(HARD_LIGHT)
  noStroke()
  fill(255, 217, 0)
  triangle(300, 220,303 ,215,306, 220)
  fill('yellow')
  triangle(300, 220,303 ,225,306, 220)
  push()
  noStroke()
  fill(255, 184, 51)
  triangle(280,230, 283,225, 286,230)
  fill(255, 217, 0)
  triangle(280,230, 283,235, 286,230)
  pop()
  push()
  noStroke()
  fill(255, 184, 51)
  triangle(305,240, 308,235, 311,240)
  fill(255, 217, 0)
  triangle(305,240, 308,245, 311,240)
  pop()
  pop()


}


