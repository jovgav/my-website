//for the maze, edit the start and end points, and make the player a person/something more symbollic instead of a blue square. 

let scene_num = 1;
let img, img1, img2, img3, img4, img5, img6;
let playerImg;
let highlights = [], highlights1 = [], highlights2 = [], highlights3 = [], highlights4 = [], highlights5 = [], highlights7 = [];
let cols, rows;
let cellSize = 40;
let grid = [];
let stack = [];
let current, player, start, end;
let reachedEnd = false;
let collisionPoints = [
  { x: 3, y: 3, message: "I then moved to LA" },
  { x: 5, y: 7, message: "This is where I began my first stint in the world of work" },
  { x: 8, y: 2, message: "My friends were all pursing similar yet very different career paths" },
  { x: 10, y: 5, message: "I felt I kept falling short, and I couldn't understand why..." },
  { x: 6, y: 9, message: "Finally, I took another leap of faith, and decided to move back East" }
];

function preload() {
  img = loadImage('game/assets/palm.png'); 
  img1 = loadImage('game/assets/search1.png');
  img2 = loadImage('game/assets/search2.png');
  img3 = loadImage('game/assets/search3.png');
  img4 = loadImage('game/assets/search4.png');
  img5 = loadImage('game/assets/search5.png');
  img6 = loadImage('gameassets/search6.png');
  img7 = loadImage('game/assets/search7.png');
  playerImg=loadImage('game/assets/playerready.png'); 
}

function setup() {
  createCanvas(600, 400);
  latteArtGraphics = createGraphics(600, 400);
  cols = floor(width / cellSize);
  rows = floor(height / cellSize);

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  start = grid[0];
  end = grid[grid.length - 1];
  player = { x: 0, y: 0 };
  current = start;
}

function draw_highlighter(x, y, rad = 15) {
  noStroke();
  fill('#79554821'); 
  circle(x, y, rad);
}

function draw() {
  background("white");

  switch (scene_num) {
    case 1: 
      background('rgba(255,192,203,0.66)');
      textSize(35);
      stroke(1)
      textFont('Verdana');
      fill('rgb(141,141,210)');
      text('I’m Nobody! Who are you?', 35, 75);
      textSize(20);
      text('Emily Dickinson', 35, 105);
      textSize(15);
      text("I’m Nobody! Who are you?\nAre you – Nobody – too?\nThen there’s a pair of us!\nDon't tell! they'd advertise – you know!", 35, 140) 
      text("How dreary – to be – Somebody!\nHow public – like a Frog –\nTo tell one’s name – the livelong June –\nTo an admiring Bog!", 35, 230);
      push()
      noStroke();
      textSize(10);      
      text('Please navigate this story by pressing keys A-J in alphabetical order.', 50, 370)
      pop()
      
      push() //frog
      noStroke()
      fill('green')
      ellipse(450, 350, 50, 70)
      ellipse(450, 320, 70, 50)     
      circle(435, 300, 30)
      circle(465, 300, 30)
      pop()
      push()
      fill('white')
      circle(435, 300, 15)
      circle(465, 300, 15)
      pop()
      push()
      fill('black')
      circle(435, 300, 5)
      circle(465, 300, 5)
      pop()
      push()
      noFill()
      stroke('black');
      strokeWeight(1);
      arc(450, 320, 30, 20, 0, PI);
      pop() 
      push()
      noStroke()
      fill('green')
      ellipse(430, 360, 20, 40)
      ellipse(430,375, 40, 20)
      pop()
      push()
      noStroke()
      fill('green')
      ellipse(470, 360, 20, 40)
      ellipse(470,375, 40, 20)
      pop()
      break;

    case 2:
      image(img, 0, 0, 400, 400);
      background('#FF572235');
      textSize(15);
      fill(0);
      textFont('Courier New');                text('As\nan\neighteen\nyear\nold\nI\nwas\nexcited\nto\ntake\nadvantage\nof\nan\neducation\nat\nthe\nUniversity\nof\nChicago.', 450, 25);
      for (let highlight of highlights) {
        draw_highlighter(highlight.x, highlight.y);
      }
      if (mouseIsPressed) {
        highlights.push({ x: mouseX, y: mouseY });
      }
      break;

    case 3:
      image(img1, 0, 0, 400, 400);
      background('#FFC10760');
      textSize(20);
      fill(0);
        text('Would\nI\nfollow\nmy\npassions\nand\npursue\na\ndegree\nin\nEnglish?', 450, 60);
      for (let highlight1 of highlights1) {
        draw_highlighter(highlight1.x, highlight1.y);
      }
      if (mouseIsPressed) {
        highlights1.push({ x: mouseX, y: mouseY });
      }
      break;
      
    case 4:
      image(img2, 0, 0, 400, 400);
      background('rgba(0,128,0,0.26)');
      textSize(20);
      fill(0);
      text('For\nbetter\nor\nfor\nworse\nI\nfollowed\nmy\nheart.', 450, 60);
      for (let highlight2 of highlights2) {
        draw_highlighter(highlight2.x, highlight2.y);
      }
      if (mouseIsPressed) {
        highlights2.push({ x: mouseX, y: mouseY });
      }
      break;
      
    case 5:
      image(img3, 0, 0, 400, 400);
      background('rgba(0,0,255,0.18)');
      textSize(15);
      fill(0);
      text('The\nreal\neducation\ncame\nfrom\nliving\non\nmy\nown\nfor\nthe\nfirst\ntime\nlearning\nhow\nto\ncare\nfor\nmyself.', 450, 30);
      for (let highlight3 of highlights3) {
        draw_highlighter(highlight3.x, highlight3.y);
      }
      if (mouseIsPressed) {
        highlights3.push({ x: mouseX, y: mouseY });
      }
      break;  
      
    case 6:
      image(img4, 0, 0, 400, 400);
      background('rgba(128,0,128,0.2)');
      textSize(20);
      fill(0);
      text('And\nsometimes\nfailing\nto\ncare\nfor\nmyself\nadequately.', 450, 60);
      for (let highlight4 of highlights4) {
        draw_highlighter(highlight4.x, highlight4.y);
      }
      if (mouseIsPressed) {
        highlights4.push({ x: mouseX, y: mouseY });
      }
      break;    
      
    case 7:
      image(img5, 0, 0, 400, 400);
      background('rgba(179,246,217,0.37)');
      textSize(20);
      fill(0);
      text('And\nmet\nsome\nof\nmy\nfavorite\npeople\nat\nthis\nuniversity.', 450, 60);
      for (let highlight5 of highlights5) {
        draw_highlighter(highlight5.x, highlight5.y);
      }
      if (mouseIsPressed) {
        highlights5.push({ x: mouseX, y: mouseY });
      }
      break;      
      
    case 8:
      image(img6, 0, 0, 400, 400);
      background('#B0EA0849');
      textSize(13.5);
      fill(0);
      text('While\nfeeling\nlost\nabout\nwhat\nthe\nreal\nworld\nentailed\npost\ngrad\nI\nhad\na\nsturdy\nsense\non\nwhat\na\nlust\nfor\nlife\nmeant.', 450, 20);
      for (let highlight7 of highlights7) {
        draw_highlighter(highlight7.x, highlight7.y);
      }
      if (mouseIsPressed) {
        highlights7.push({ x: mouseX, y: mouseY });
      }
      break;    
      
    case 9:
      background('rgb(208,184,124)');
      noStroke();

      for (let cell of grid) {
        cell.show();
      }

      drawTree(start.i * cellSize + cellSize / 2, start.j * cellSize + cellSize / 2); // Start
      drawWaterfall(end.i * cellSize + cellSize / 2, end.j * cellSize + cellSize / 2); // End

      if (!reachedEnd) {
     image(playerImg, 
          player.x * cellSize-10, 
          player.y * cellSize-10, 
          cellSize+20, 
          cellSize+20);
  }

      current.visited = true;
      let next = current.checkNeighbors();
      if (next) {
        next.visited = true;
        stack.push(current);
        removeWalls(current, next);
        current = next;
      } else if (stack.length > 0) {
        current = stack.pop();
      }

      // Check if player has reached the end
      if (player.x === end.i && player.y === end.j) {
        reachedEnd = true;
        fill('black');
        textStyle(BOLD);
        textSize(30);
        textAlign(CENTER);
        text("Let the next chapter begin!", width / 2, height / 2);
      }
      

      for (let point of collisionPoints) {
        if (player.x === point.x && player.y === point.y) {
          fill('yellow')
          rect(40, 10, 460, 380)
          image(img7, 8, 80, 800, 400);
          push()
          fill('black');
          textSize(15);
          textFont('Grunge')
          text("Then, I moved to LA. This is where I began\nmy first stint in the world of entertainment. \nMy friends were all pursing similar yet\nvery different career paths. I felt I kept\nfalling short, and I couldn't understand why...\nI did have moments of radical self growth, \nand really connected with nature,\nexploring the Redwoods, and Malibu, and \nJoshua tree. I found solace in hiking,\nreaching a summit just to look down \nat the world, to remember \nhow small I was in the grand \nscheme of things. Ultimately, I knew \nmy life had grown stagnant in LA, \nand so I moved back East.", 50, 30);
          pop()
        }
      }
      break;
      
      case 10: drawLatteScene(); break;

  }
}

class Cell {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
    this.visited = false;
  }

  checkNeighbors() {
    let neighbors = [];
    let top = grid[index(this.i, this.j - 1)];
    let right = grid[index(this.i + 1, this.j)];
    let bottom = grid[index(this.i, this.j + 1)];
    let left = grid[index(this.i - 1, this.j)];

    if (top && !top.visited) neighbors.push(top);
    if (right && !right.visited) neighbors.push(right);
    if (bottom && !bottom.visited) neighbors.push(bottom);
    if (left && !left.visited) neighbors.push(left);

    if (neighbors.length > 0) {
      return neighbors[floor(random(0, neighbors.length))];
    } else {
      return undefined;
    }
  }

  show() {
    let x = this.i * cellSize;
    let y = this.j * cellSize;

    if (this.walls[0]) drawTree(x + cellSize / 2, y); //top wall
    
    if (this.walls[1]) drawBush(x + cellSize, y + cellSize / 2); // right 
    if (this.walls[2]) drawTree(x + cellSize / 2, y + cellSize); // Bottom wall
    if (this.walls[3]) drawBush(x, y + cellSize / 2); //left 
  }
}

function index(i, j) {
  if (i < 0 || j < 0 || i >= cols || j >= rows) return -1;
  return i + j * cols;
}

function removeWalls(a, b) {
  let x = a.i - b.i;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }
  let y = a.j - b.j;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}

function drawTree(x, y) {
  fill(139, 69, 19);
  rect(x - 2, y+7, 4, cellSize * 0.3);
  fill(34, 139, 34);
  ellipse(x, y, cellSize * 0.6, cellSize * 0.6);
}

function drawBush(x, y) {
  fill(85, 107, 47);
  ellipse(x, y, cellSize * 0.5, cellSize * 0.5);
  fill('rgb(11,123,11)');
  ellipse(x+4, y-1, cellSize * 0.5, cellSize * 0.5);
  fill(85, 107, 47);
  ellipse(x+4, y-5, cellSize * 0.5, cellSize * 0.5);
}

function drawWaterfall(x, y) {
  fill(0, 191, 255);
  ellipse(x, y, cellSize * 0.7, cellSize * 0.7);
}

function drawLatteScene() {
  background("#FFEB3B");
  push()
  textSize(25);
  noStroke();
  textFont('Brush Script MT');
  fill(' rgb(211,14,105)');
  text('I am now at Parsons, again trying to uncover where my passions might', 8, 20);
  text('lie. It seems that you never really stop growing up, you just continue',8, 45)
  text('to grow into yourself. Right', 8, 70)
  text('now, I am enjoying my', 380, 70)
  text('life as a student, and',8,95)
  text('rediscovering the', 410, 95)
  text('creative parts of', 8, 120)
  text('myself, that I', 430, 120)
  text('have not connected', 8, 145)
  text('with, since my', 440, 145)
  text('early childhood.', 8, 170)
  text('It is a bit scary', 450, 170)
  text('to take another', 8, 195)
  text('jump. To', 500, 195)
  text('risk a deadend,', 8, 220)
  text('to yet again', 500, 220)
  text('fall short. But', 8, 245)
  text('we only have', 490, 245)
  text('a single life to', 8, 270)
  text('live. And since', 470, 270)
  text('I now know that', 8, 295)
  text('things move fast, I', 430, 295)
  text('think I will enjoy', 8, 320)
  text('this time while it lasts.', 410, 320)
  text('I take pleasure in the', 8, 345)
  text('meditative nature of my', 390, 345)
  text("barista job. You can try it too! Just paint art on the latte, in whichever", 8, 370)
  text("shape you like. Remember, it won't last, and that's the beauty of it.",8, 395)
  pop()
  
  //latte cup
  push()
  noStroke()
  fill('#3C4E9D');
  ellipse(width / 2, height / 2, 300, 300); 
  arc(width / 2 + 120, height / 2, 150, 150, 0, 180, OPEN); //handle

//latte
  fill('#D7B152');
  ellipse(width / 2, height / 2, 250, 250); // Milk foam
  image(latteArtGraphics, 0, 0);
  pop()

    if (mouseIsPressed) {
    if (dist(mouseX, mouseY, width / 2, height / 2) < 125) { // Draw only within foam area
      latteArtGraphics.strokeWeight(15);
      latteArtGraphics.stroke(255);
      latteArtGraphics.line(mouseX, mouseY, pmouseX, pmouseY); 
    }
  }
}

function keyPressed() {
  if (scene_num === 9) {
    if (key === 'j') {
      scene_num = 10;
      return;
    }
    let currentCell = grid[index(player.x, player.y)];
    switch (keyCode) {
      case UP_ARROW:
        if (!currentCell.walls[0]) player.y -= 1;
        break;
      case RIGHT_ARROW:
        if (!currentCell.walls[1]) player.x += 1;
        break;
      case DOWN_ARROW:
        if (!currentCell.walls[2]) player.y += 1;
        break;
      case LEFT_ARROW:
        if (!currentCell.walls[3]) player.x -= 1;
        break;
    }
  } else {
    switch (key) {
      case 'a': scene_num = 1; break;
      case 'b': scene_num = 2; break;
      case 'c': scene_num = 3; break;
      case 'd': scene_num = 4; break;
      case 'e': scene_num = 5; break;
      case 'f': scene_num = 6; break;
      case 'g': scene_num = 7; break;
      case 'h': scene_num = 8; break;
      case 'i': scene_num = 9; break;
      case 'j': scene_num = 10; break;
    }
  }
}