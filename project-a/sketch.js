//all the notes are for myself to remember and organize the stuff I coded. 

//bg stands for background

let d = 50;
let angle = 0; 
let pulse = 0; 
let xc, yc;

let x = 200
let y = 450
let t = 0.1;
let l = 40;
let r = 77;
let g = 240;
let a = 1;

function setup() {
  console.log("setup ran");
  let canvas=createCanvas(800, 500);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");
  colorMode(HSB, 150);//imagine of a grass 
  noCursor();
  xc = 100;
  yc = 200;
}

function bg(){
  background(0);
  angle += 0.1; // the speed of the shape spin
  pulse = sin(frameCount * 0.25); // the pulse
  push();
  fill(66, 72, 245)
  circle(380,90,10);
  circle(150,200,10);
  circle(200,290,10);
  circle(70,380,10);
  circle(510,350,10);
  circle(650,150,10);
  circle(550,20,10);
  circle(270,70,10);
  circle(100,40,10);
  circle(400,410,10);
  circle(480,180,10);
  circle(680,450,10);
  //creature code 

  for (let x = d / 4; x < width; x += d) {
    for (let y = d / 4; y < height; y += d) {
      
      // Having the pulse movement shift and change the size dynamically
      let s = d * noise(frameCount * 0.01 + x * y) + (pulse * 10);
      
      let di = dist(mouseX, mouseY, x, y);
      let b = map(di, 0, 100, 100, 0);
      
      fill(50, 100, b);
      noStroke(); 

      push(); // 
      translate(x, y); // translate mainly allows the rotation and movement center in (0,0)
      
      // this will help rotate each shape indivisually
      rotate(angle + di * 0.01); 

      if (noise(x * y) > 0.5) {
        circle(0, 0, s); 
      } else {
        rectMode(CENTER);
        rect(0, 0, s, s);
      }
      pop();
    }
  }
}

function snake(){
  noCursor();
  //the expanding body code
  if(mouseIsPressed){
    t =lerp(t, 0.8,0.1);
    l=lerp(l, 150,0.1);
     if (mouseIsPressed == true) {
    x = mouseX
    y = mouseY
  }
  }else{
    t= lerp(t, 0.1,0.05);
    l=lerp(l, 40,0.05);
  }
  
  xc = lerp(xc, x, 0.05); 
  yc = lerp(yc, y, 0.05);
  push();
  translate(xc,yc);
  
  // the snake body
  noStroke();
  //the body code for the green snake 
  push();
  fill(r, g, 120);
  // this is the foreloop device 
  for(let i=0; i< l; i++){
    let s = map(i, 0, 70, 10, 40); //smaller to bigger
    let x = map(i, 0, 40, -280, -120); //how long
    let y = 20*sin(frameCount*0.05 + i*t); //I just came up with this formula from experimentation
    circle( x, y, s);
  }
  // pop();
  pop();
}

function draw() { // allows the snake to be on top of the background
  bg();
  snake();
}