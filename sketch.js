
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2
  
  foodGroup=new Group();
  obsticalsGroup=new Group();
  
  score=0;
}


function draw() {
background(255);
  if(ground.x<0){
    ground.x=ground.width/2
  } 
    if(keyDown("space")){
      monkey.velocityY=-12;
    }
    monkey.velocityY=monkey.velocityY+0.8;
    monkey.collide(ground);
    Spawnfood();
    SpawnObstacles();
    
    drawSprites();
    
    text("score =",+score,500,50)
    if(obsticalsGroup.isTouching(monkey)){
      ground.velocityX=0;
      monkey.velocityY=0;
      
      obsticalsGroup.setVelocityXEach(0);
      foodGroup.setVelocityXEach(0);
      
      obsticalsGroup.setLifetimeEach(-1);
      foodGroup.setLifetimeEach(-1);
      
    }
  }
  function Spawnfood(){
    if(frameCount%80===0){
      banana=createSprite(600,250,40,10);
      banana.y=random(120,200);
      banana.velocityX=-5;
      banana.lifetime=300;
      banana.addImage(bananaImage);
      banana.scale=0.05;
      foodGroup.add(banana);
    }
  }
   function SpawnObstacles(){
    if(frameCount%300===0){
      obstacles=createSprite(800,320,10,40);
      obstacles.velocityX=-5;
      obstacles.lifetime=300;
      obstacles.addImage(obstaceImage);
      obstacles.scale=0.15;
      obsticalsGroup.add(obstacles);
    }
  
}






