let currentFrameRate = 0; 
let maxFrameRate = 1000000000000000000; 
let growthRate = 0.5; 
let r;
let change;

function setup() {
  createCanvas(600, 600);
  
  angleMode(DEGREES)

  
//for circles
  x=width/2;
  y=height/2;
  r=299
}

function draw() {
  background('rgba(244,203,242,0.6)');

  let maxr=width/2;
  let change=10

  currentFrameRate += growthRate;

  if (currentFrameRate > maxFrameRate) {
    currentFrameRate = maxFrameRate;
  }

  frameRate(currentFrameRate);

    for(let r = 0; r<=maxr; r+= change)
  {
    fill(random (200), random (500), random (500),10); 
    strokeWeight(random(0,5))
    stroke('random(200), random(200), random(200)'); 
    noStroke()
    ellipse(width/2, height/2, r*2, r*2);
  //     for(let i = 0; i<50; i++){
  //   push();
  //   translate(300,300);
  //   rotate(10*i);
  //   strokeWeight(0.25)
  //   stroke(random(255), random(255), random(255))
  //   line(0, 0-r, 0, r);
  //   pop();
  // }
  
  }


// //cursor 
//   push()
//   noStroke()
//   fill('rgb(0,0,0)');
//   text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);  
//   pop()
  
// //circle cursor
//   push()
//   noStroke()
//   fill(random (500), random(500), random (500))
//   circle(mouseX,mouseY,50)
//   pop()
  
 
// //circle cursor
//   push()
//   noStroke()
//   fill(random (500), random(500), random (500))
//   circle(45,60,50)
//   pop()
  
}

//*I looked up how to incremently increase framerate using chatGPT