let img;
//for spaghetti legs
let x1;
let y1;
let x2;
let y2;
//for sauce
let x3;
let y3;
let w;
let h;
//for bread
let x4;
let y4;
let w2;
let h2;
//for bowtie
let x5;
let x6;
let x7;
let y5;
let y6;
let y7;
let dw;
let dh;

function preload() {
  img = loadImage('exquisite-corpse/assets/meatball2.png');
}

function setup() {
  
  createCanvas(400, 600);
  
  background('50');
  
  angleMode(DEGREES);

  image(img, 0, 0);
  
  x1=225
  y1=350
  x2=227
  y2=575
  x3=230
  y3=430
  w2=20
  h2=40
  y5=360
  y6=350
  y7=350
  t=50
    
}

function draw() {
  background('white');
  
//mushroom  
  //mushroom top
  push()
  fill('red');
  stroke('red');
  strokeWeight(20);
  strokeJoin(ROUND);
  translate(50,0)
  triangle(50,400,20,450,80,450)  
  pop()
  push()
  fill('tan')
  strokeWeight(.5)
  stroke('black')
  arc(100,459.75,70,30,180,0)
  pop()
  push()
  fill('tan')
  noStroke()
  rect(90,450,20,70,50)
  pop()
  push()
  strokeWeight(.5)
  stroke('black')
  line(69,453,69,459)   
  strokeWeight(.5)
  stroke('black')
  line(75,450,75,459)  
  strokeWeight(.5)
  stroke('black')
  line(81,448,81,459)
  strokeWeight(.5)
  stroke('black')
  line(87,446,87,459)
  strokeWeight(.5)
  stroke('black')
  line(93,446,93,459)
  strokeWeight(.5)
  stroke('black')
  line(99,446,99,459)  
  strokeWeight(.5)
  stroke('black')
  line(105,446,105,459)    
  strokeWeight(.5)
  stroke('black')
  line(111,446,111,459)  
  strokeWeight(.5)
  stroke('black')
  line(117,447,117,459)  
  strokeWeight(.5)
  stroke('black')
  line(123,449,123,459)    
  strokeWeight(.5)
  stroke('black')
  line(129,452,129,459)     
  pop()
  push()
  noStroke()
  fill('white')
  circle(95,407,10)
  fill('white')
  circle(114,423,10)
  fill('white')
  circle(84,432,10)
  pop()

  
    //meatball head
  image(img, 46, -20, 300, 300);
  
    //meatball head mouth
  push()
  noStroke()
  fill('blue')
  arc(200,180,100,100,0,180)
  pop()
  
    //meatball head eyes
  push()
  noStroke()
  translate(140,110)
  rotate(-20)
  fill('blue')
  triangle(0,0,30,50,0,30)
  pop()
  push()
  noStroke()
  translate(220,145)
  rotate(-101)
  fill('blue')
  triangle(0,0,30,50,0,30)
  pop()
  
  //spaghetti legs
  stroke('#FFC107')
  strokeWeight(2)
  draw_legs(x1-40, y1, x2-40, y2)
  draw_legs(x1-35, y1, x2-35, y2)
  draw_legs(x1-10, y1, x2-10, y2)
  draw_legs(x1-5, y1, x2-5, y2)
  
  //sauce for the legs
  push()
  noStroke()
  fill('red')
  draw_sauce(x3-40,y3-30)
  draw_sauce(x3-36,y3+5)
  draw_sauce(x3-40,y3+50)
  draw_sauce(x3-35,y3+90)  
  draw_sauce(x3-10,y3-20)
  draw_sauce(x3-7,y3+65)
  draw_sauce(x3-11,y3+20)    
  draw_sauce(x3-11,y3+100)    
  pop()
 
  //bowtie pasta midsection
  push()
  noStroke()
  fill('#FFC107')
  triangle(200,315,150,350,250,350)  
  triangle(200,330,150,295,250,295)
  push()
  stroke('rgb(0,0,0)')
  strokeWeight(0.25)
  line(193,315,193,327)
  line(198,315,198,327)
  line(202,315,202,327)  
  line(207,315,207,327)
  pop()
  draw_bowtie(155,y5,150,y6,160)
  draw_bowtie(165,y5,160,y6,170)
  draw_bowtie(175,y5,170,y6,180)
  draw_bowtie(185,y5,180,y6,190)  
  draw_bowtie(195,y5,190,y6,200)
  draw_bowtie(205,y5,200,y6,210)
  draw_bowtie(215,y5,210,y6,220)  
  draw_bowtie(225,y5,220,y6,230)
  draw_bowtie(235,y5,230,y6,240)    
  draw_bowtie(245,y5,240,y6,250)      
  pop()

  //loaf of bread arms
  push()
  noStroke()
  fill('tan')
  draw_breadshading(330,290,w2,h2,t)
  draw_breadshading(50,290,w2,h2,t)  
  pop()
  
  //loaf of bread hands
  push()
  noStroke()
  fill('rgb(186,160,126)')
  circle(60,325,30)
  circle(340,325,30)  
  pop()  
  
  //loaf of bread chest
  push()
  noStroke()
  fill('tan')
  rect(35,250,330,50,50)
  pop()
  push()
  noStroke()
  fill('rgb(186,160,126)')
  draw_breadshading(50,250)
  draw_breadshading(90,250)
  draw_breadshading(130,250)
  draw_breadshading(170,250)
  draw_breadshading(210,250)
  draw_breadshading(250,250)
  draw_breadshading(290,250)
  draw_breadshading(330,250)
  pop()
  
  push()
  if (mouseIsPressed==true) {
  if (mouseX<250 && mouseX>150 && mouseY<230 && mouseY>180) {
    //meatball head
  image(img, 46, -20, 300, 300);
    //meatball head mouth
  push()
  noStroke()
  fill('blue')
  arc(200,180,100,50,0,180)
  pop()
    //meatball head eyes
  push()
  noStroke()
  translate(140,110)
  rotate(-20)
  fill('blue')
  triangle(0,0,30,50,0,30)
  pop()
  push()
  noStroke()
  translate(220,145)
  rotate(-101)
  fill('blue')
  triangle(0,0,30,50,0,30)
  pop()   
  } else { 
    //meatball head
  image(img, 46, -20, 300, 300);
    //meatball head mouth
  push()
  noStroke()
  fill('blue')
  arc(200,180,100,100,0,180)
  pop()
    //meatball head eyes
  push()
  noStroke()
  translate(140,110)
  rotate(-20)
  fill('blue')
  triangle(0,0,30,50,0,30)
  pop()
  push()
  noStroke()
  translate(220,145)
  rotate(-101)
  fill('blue')
  triangle(0,0,30,50,0,30)
  pop()
  }    
}
  pop()

//cursor 
  push()
  noStroke()
  fill('rgb(0,0,0)');
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
//spoon
  stroke('black')
  fill('rgb(233,38,161)')
  rect(mouseX-5, mouseY,10,90)
  ellipse(mouseX,mouseY,40,60)
  // rect(mouseX-5, mouseY,10,90)
  pop()
  
}

function draw_legs(x1, y1, x2, y2){
  line(x1,y1,x2,y2);
  line(x1+5,y1+5,x2+5,y2+5);
}

function draw_sauce(x3,y3,w,h){
  ellipse(x3, y3, 5, 20)
}

function draw_breadshading(x4,y4,w2,h2,t){
  rect(x4,y4,20,40,50)
}

function draw_bowtie(x5,y5,x6,y6,x7,y7){
  triangle(x5,360,x6,350,x7,350)
}
