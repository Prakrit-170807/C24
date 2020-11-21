const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, bird, pig;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,width,20)
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700, 240, 70, 70)
    box4 = new Box(940, 240, 70, 70)
    // box5 = 
    // bird = new Bird(100,100)
    pig1 = new Pig(810,350)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    // bird.display();
    pig1.display();
    
}