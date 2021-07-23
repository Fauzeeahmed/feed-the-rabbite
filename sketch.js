var garden,rabbit,apple,leaves;
var gardenImg,rabbitImg,appleImg,leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.x = World.mouseX;

 

 
  
  
  
}


function draw() {
  background(0);
  rabbit.x = World.mouseX
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();

  var select_sprites = Math.round(random(1,2));
  if (frameCount  %  80 == 0) {
  if (select_sprites ==1) {
    createapple();   
  }
  else {
    createleafes();
  }
  }
  

}
function createapple() {
  apple = createSprite(random(50, 350),40, 10, 10);
 apple.addImage(appleImg);
 apple.scale = 0.07;
 apple.velocityY = 3;
 apple.lifetime = 200;

    
}

function createleafes() {
  leafe = createSprite(random(50, 350),40, 10, 10);
  leafe.addImage(leavesImg);
  leafe.scale = 0.07;
  leafe.velocityY = 3;
  leafe.lifetime = 200;
  
}
