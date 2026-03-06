let img; 
let img2;
function preload(){
  img2 = loadImage("ChefMouse2.webp")
}


let x = 200
let y = 450
let　t = 0.1;
let l = 40;
let r = 77;
let g = 240;
let a = 1;
function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  x = width/2;
  y = height/2;
  noCursor();
}

function draw() {
  noCursor();
  if(mouseIsPressed){
    t =lerp(t, 0.8,0.1);
    l=lerp(l, 150,0.1);
  }else{
    t = lerp(t, 0.1,0.1);
    l=lerp(l, 40,0.1);
  }
  push();
  translate(mouseX,mouseY);
  
  // the snake body
  background(151, 207, 252);
  noStroke(255);
  //the body code for the green snake 
  push();
  fill(r, g, 120);
  for(let i=0; i< l; i++){
    let s = map(i, 0, 70, 10, 40); //smaller to bigger
    let x = map(i, 0, 40, -280, -120); //how long
    let y = 20*sin(frameCount*0.05 + i*t); //I just came up with this formula from experimentation
    circle( x, y, s);
  }
  // pop();
  pop();
  
  pop();
  image(img2, mouseX, mouseY, 50, 50);
  //river
  
  push();
    fill(52, 88, 235)
    rect(0,440,800,60)
  pop();
  //moving river lines 
  push();
  stroke(255)
  strokeWeight(3)
  //1st line 
  line(x, y, x+50, y)
  //3rd line 
  line (x-120, y+10, x-70, y+10)
  //4th line 
   line (x-150, y+30, x-100, y+30)
  //5th line
   line (x-230, y+40, x-180, y+40)
  //this is what makes the line move 
  x=x+3;
  //this is what makes the link loop and go back to the starting position
  if (x>=800){
    x=0
  }
  
  
  pop();
  if(r>255 || r<0){
    a=-a;
  }
  r +=a;
  g +=a;
  
 
}
