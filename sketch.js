const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


var object1,object2,object3,object4,object5,handle;
var engine,world;
var chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;

  
  
  object1 = new Ball(300,350,50)
  object2 = new Ball(350,350,50)
  object3 = new Ball(400,350,50)
  object4 = new Ball(450,350,50)
  object5 = new Ball(500,350,50)  
  

handle = new Log(400,100,300,40)

chain1 = new Chain(object1.body,handle.body,-50*2,0)
chain2 = new Chain(object2.body,handle.body,-25*2 ,0)
chain3 = new Chain(object3.body,handle.body,0*2 ,0)
chain4 = new Chain(object4.body,handle.body,25*2 ,0)
chain5 = new Chain(object5.body,handle.body,50*2 ,0)


Engine.run(engine)
}


function draw() {
background("lightblue")

Engine.update(engine)
rectMode(CENTER)


object1.display();
object2.display();
object3.display();
object4.display();
object5.display();
  handle.display()
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  
text("Press Up arrow key",500,50)
  if(keyWentDown("UP"))
    Matter.Body.applyForce(object1.body,object1.body.position,{x:-100,y: -100});

  drawSprites();
 
}

