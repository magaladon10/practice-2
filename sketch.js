const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint


function setup() {
var canvas =   createCanvas(800,400);
 engine = Engine.create()
world = engine.world
ground = new Ground(400,380,820,20)
box = new Box(400,300,50,50)
ball = new Ball(50,100,50)
chain = new Chain(ball.body,{x:300,y:50})
box2 = new Box(400,275,50,50)
box3 = new Box(400,250,50,50)
box4 = new Box(400,225,50,50)
box5 = new Box(400,200,50,50)
box6 = new Box(475,175,50,50)
box7 = new Box(475,125,50,50)
box8 = new Box(475,100,50,50)
box9 = new Box(475,75,50,50)
box10 = new Box(475,50,50,50)
}

function draw() {
  background(255,255,255);  
 Engine.update(engine)
 box.display();
 ground.display();
 ball.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 chain.display(); 
}