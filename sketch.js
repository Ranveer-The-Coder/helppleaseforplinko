const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground,division1;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 270;

function setup(){
    var canvas = createCanvas(1400,650);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(700,625,1400,20)
    division1 = new Divisions(5,480,15,270)
    division2 = new Divisions(265+50,480,15,270)
    division3 = new Divisions(525+50,480,15,270)
    division4 = new Divisions(785+50,480,15,270)
    division5 = new Divisions(1045+50,480,15,270)
    division6 = new Divisions(1305+50,480,15,270)

    for (var i = 40; i<=width; j=j+50){
        plinkos.push(new plinko(i,75))
    }
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    console.log(mouseY)
    console.log(mouseX)
    division1.display()
    division2.display()
    division3.display()
    division4.display()
    division5.display()
    division6.display()

 
    ground.display();
}