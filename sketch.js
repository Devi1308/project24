const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer , hammerImg;
var plane;
var stone,stoneImg;
var iron,ironImg;
var rubber,rubberImg;

/*function Preload(){
 hammerImg = loadImage("hammer.png");
 stoneImg = loadImage("stone.png");
 ironImg = loadImage("iron.png");
 rubber = loadImage("rubber.png");
}*/

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)

    hammer = new Hammer(10,100);
    //hammer.addImage(hammerImg);
    //world.add(hammerImg);

    stone = new Stone(300,200);
    //stone.addImage(stoneImg);
    //world.add(stoneImg);

    iron = new Iron(600,350);
   // iron.addImage(ironImg);
   // world.add(ironImg);

    rubber = new Rubber(800,400,60);
    //rubber.addImage(rubberImg);
   // world.add(rubberImg);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    rubber.display();
    
 
}