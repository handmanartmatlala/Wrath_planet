let water; 
let boat; 
let boattexture; 
let song;

function preload(){
  boat = loadModel('Boat.obj')
  song = loadSound('gentle-ocean-waves-birdsong-and-gull-7109.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  boattexture = loadImage('boat_diffuse.jpg');
  water = createVideo(['Water - 756.mp4']); 
  water.elt.muted = true;
  water.loop();
  water.hide();
    song.loop();

}

function draw() {
  background(217, 255, 254);
  orbitControl(); 
  noStroke();
  
  camera(100, 670, -200 , 0, 0, 0, 0, 1, 0);  camera(300, -90, 0, 0, 0, 0, 0, 1, 0);
  
  
  push(); 
  texture(water); 
  rotateY(4.72);
  box(900, 10, 500);
  pop(); 
  
  push();
  translate(0,0,-180);
  scale(0.15);
  rotateX(3.15);
  rotateY(4.69);
  texture(boattexture);
  model(boat);
  pop();
  
   push();
  translate(-20,0,180);
  scale(0.15);
  rotateX(3.15);
  rotateY(4.69);
  texture(boattexture);
  model(boat);
  pop();
  
   push();
  translate(-180,0,-20);
  scale(0.15);
  rotateX(3.15);
  rotateY(4.69);
  texture(boattexture);
  model(boat);
  pop();
  
  
   push();
  translate(140,0,180);
  scale(0.15);
  rotateX(3.15);
  rotateY(4.69);
  texture(boattexture);
  model(boat);
  pop();
  
   push();
  translate(150,0,-180);
  scale(0.15);
  rotateX(3.15);
  rotateY(4.69);
  texture(boattexture);
  model(boat);
  pop();
}