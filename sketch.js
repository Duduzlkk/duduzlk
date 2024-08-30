var tela=2;

var sol;
var xSol=100, ySol=200;

function preload(){
  sol=loadImage("sol.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if(tela==2){
    
    image(sol,xSol,ySol, 100,100);
    
    xSol++;
    
    if(xSol>=400){
      xSol=-100;
    }
    
    
  }
}