
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var rope,rope2,rope3,rope4,rope5
var ball,ball2,ball3,ball4,ball5
var roof

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Bob(220,500);
	ball2 = new Bob(260,500);
	ball3 = new Bob(300,500);
	ball4 = new Bob(340,500);
	ball5 = new Bob(380,500);
	roof = new Roof(300,300,300,50);
  rope = new Rope(ball.body,roof.body,-40*2,0)
  rope2 = new Rope(ball2.body,roof.body,-20*2,0)
  rope3 = new Rope(ball3.body,roof.body,0*2,0)
  rope4 = new Rope(ball4.body,roof.body,20*2,0)
  rope5 = new Rope(ball5.body,roof.body,40*2,0)
 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);
  roof.display();
  rope.display();
  rope2.display()
  rope3.display();
  rope4.display();
  rope5.display();
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  
  
  drawSprites();
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(ball5.body,ball5.body.position,{x:50,y:50});

  }
}
function mouseDragged(){
    
  Matter.Body.setPosition(ball5.body, {x: mouseX , y: mouseY});

}