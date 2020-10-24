
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roofOb;
var first,second,third,fourth,fifth;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	first= new bob(width/2-60,400,30);
	second= new bob(width/2-30,400,30);
	third= new bob(width/2,400,30);
	fourth= new bob(width/2+30,400,30);
	fifth= new bob(width/2+60,400,30);

	roofOb= new roof(width/2,200,170,20,PI/1);

	rope1= new rope(roofOb.body,third.body,third/2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(10,50,255);

  
	 first.display();
	second.display();
	 third.display();
	 fourth.display();
	 fifth.display();


	 roofOb.display();
	 rope1.display();

  
  drawSprites();
 
}



