const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var snow = [];
var maxSnow = 10;
var snowBody;

function preload(){
  snowImage= loadImage("snow2.jpg")
  boyImg = loadImage("boy.png")
}
function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
	world = engine.world;

  boy = createSprite(1050, 520, 50, 50);
  boy.addImage(boyImg);
  boy.scale= 0.1

  if(frameCount%180 === 0){
    for(var i = 0; i < maxSnow; i++){
      snow.push(snowBody= new Snow(random(0,1200),random(-50,600)))

    }

  }
}

function draw() {
  background(snowImage);  
  Engine.update(engine);

  if(keyDown (RIGHT_ARROW)){
    boy.x = boy.x +2;

  }

  if(keyDown (LEFT_ARROW)){
    boy.x = boy.x -2;
    
  }

  for(var i=0; i<maxSnow; i++) {
     snow[i].display();
      snow[i].repeat();
     }
      if(frameCount%180 === 0) {
         for(var i=0; i<maxSnow; i++) {
            snow[i].repeat(); } }
  drawSprites();
}