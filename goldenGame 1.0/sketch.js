//Create variables here
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tank1,ground1;
var backgroundImg;

function preload()
{
	//load images here
   getBackgroundImg();
}

function setup() {
	createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  tank1 = new Tank(windowWidth-1200,height-145);
  tanktop1 = new Tanktop(windowWidth-1200,height-205);
  compTank = new CTank(windowWidth-100,height-145);
  ground1 = new Ground(windowWidth/2,height-55,width,height/4-50);

}


function draw() {  
  
  if(backgroundImg)
   background(backgroundImg);

  Engine.update(engine);
  tank1.display();
  tanktop1.display();
  compTank.display();
  ground1.display();
  drawSprites();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json(); 
  var datetime = responseJSON.datetime; 
  var hour = datetime.slice(11,13);
  if(hour>=06 && hour<=17){
    bg = "images/background/rust evening.png"; 
  }    
  else{ 
    bg = "images/background/green night.png";
  } 
  backgroundImg = loadImage(bg);
  }


