var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombieImg;
var bullet , bulletImg

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
zombieImg = loadImage("assets/zombie.png")
  bgImg = loadImage("assets/bg.jpeg")
bulletImg = loadImage("assets/bullet.png")
}

function setup() {
zombieGroup = new Group();
  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
 
  player.debug = true
   // player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
   //player.setcollider("rectangle",0,0)
   player.setCollider("rectangle",0,0,300,300)
  // player.Setcollider("rectangle",0,0,300,300)

}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyDown("space")){
  //player.addImage( shooter_shooting )
 // player.addImage()
  player.addImage(shooterImg)
 //player.addImage(shooter_1.png)

}
spawnzombie();
drawSprites();

}
function spawnzombie() {
if(frameCount % 60 === 0){
zombie = createSprite(windowWidth,windowHeight/2,100,100)
zombie.addImage(zombieImg);
zombie.velocityX = -2;
zombie.scale = 0.2;
zombie.y = random(100,500)
zombie.lifetime = 500;
zombieGroup.add(zombie)
}
}
function spawnbullets() {
  if(keyWentDown("space")){
  bullet = createSprite(player.x,player.y,50,50);
  bullet.addImage(bulletImg);
  bullet.velocityX = 2;
  bullet.scale = 0.05;
  bullet.lifetime = 500;
  }
}