
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);




	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground = new Ground(600,370,1200,20);
	 paper = new Paper(200,150,20);
	 dustbin = new Dustbin(1000,350);


  
}


function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  paper.display();
  dustbin.display();
  
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-75});
	}
}



