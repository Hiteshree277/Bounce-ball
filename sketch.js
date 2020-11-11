const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,ball;
function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
  var ground_option={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,50,10,ground_option);
  var balloptions={
    isStatic:false,
    restitution:0.2
  }
  ball=Bodies.circle(200,100,40,balloptions);
  World.add(world,ground);
  World.add(world,ball);
  console.log(ball);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,40,40);
    drawSprites();
}