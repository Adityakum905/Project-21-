
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground ;
var left ; 
var right ; 
var ball ;


function preload()
{
}

function setup() {
	createCanvas(1000, 500);



	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(width/2,370,width,20)
  World.add(world,ground) ;

  left = new leftSide(700,335,5,60) ;
World.add(world,left) ;

right = new rightSide(800,335,5,60) ;
World.add(world,right) ;

var ball_options ={

  isStatic : false ,
  restitution : 0.2 ,
  friction : 0 ,
  density : 1.2 ,

} ;

ball = Bodies.circle(200,50,10,ball_options);

World.add(world,ball);


}


function draw() {
	Engine.update(engine);  

  background(0);
  rectMode(CENTER) ;
  ellipseMode(RADIUS);
ground.show() ;  
left.show() ;
right.show() ;
ellipse(ball.position.x , ball.position.y , 10) ;

 keyPressed() ;
  drawSprites();
 
}

function keyPressed() {
  if(keyDown(UP_ARROW)){
      Matter.Body.applyForce(ball,{x : 0 ,y : 0} ,{x : 1.6, y : 1.6})
    }
}






