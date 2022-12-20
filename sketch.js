var nton;
var apple; 
var boy ;
var stone;
var bg ;
var tree;
var bgImg;
var boyImg;
var ntonImg;
var treeImg;
var appleImg;
var stoneImg;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var tree, stone,ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;


var launcher;

function preload(){
	boyImg=loadImage("asset/boy.png");
   treeImg=loadImg("asset/tree.png");
   bgImg=loadImage("asset/bac.png");
   appleImg=loadImg("asset/apple.png");

}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stone = new Stone(235,420,30); 

	mango1 = new Mango(1100,100,30);
  mango2 = new Mango(1170,130,30);
	mango3 = new Mango(1010,140,30);
	mango4 = new Mango(1000,70,30);
	mango5 = new Mango(1100,70,30);
	

	tree = new Tree(1050,580);
	ground = new Ground(width/2,600,width,20);

  //create launcher with stone as bodyA
  launcher = new Launcher(stone.body,{x:235,y:420})

	Engine.run(engine);
}

function draw() {

  background(230);
  Engine.update(engine);
  textSize(25);
  text("Hit the mangoes with the stone!!",50 ,50);
  image(boy ,200,340,200,300);
  

  tree.display();
  stone.display();


  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  

  stone.display();
  ground.display();
  launcher.display();


  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  
}

function mouseDragged()
{

//	Matter.Body.setPosition
//      (stone.body, {x:mouseX, y:mouseY}) 

//	Matter.Body.Position
//      (stone.body, {x:mouseX, y:mouseY}) 

//	Matter.Body.setPosition
//      ({x:mouseX, y:mouseY}) 

//	Matter.setPosition
//      (stone.body, {x:mouseX, y:mouseY}) 

}

function mouseReleased()
{
//	launcher();
//	launcher.fly();
//	launcherfly();
//	launcher.fly;
}


function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }