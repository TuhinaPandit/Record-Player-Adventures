var backgImg;
var gear1Img, gear2Img, gear3Img, gear4mg, gear5Img;
var starImg, earringImg;
var stickmanStandImg, stickmanJumpImg, stickmanRunImg; 

var score=0;
//var gameOver, restart;

function preload(){

    stickmanStandImg = loadImage("stickmanStand.png")
    stickmanJumpImg = loadImage("stickmanJump2.png");
    stickmanRunImg = loadAnimation("stickmanRunning.gif")

    backgImg = loadImage("background.png");

    gear1Img = loadImage("Gear1.png");
    gear2Img = loadImage("Gear2.png");
    gear3Img = loadImage("Gear3.png");
    gear4Img = loadImage("Gear4.png");
    gear5Img = loadImage("Gear5.png");

    starImg = loadImage("star.png")
    earringImg = loadImage("earring.png");

    

}

function setup(){
    
    createCanvas(1000,600);

    backg = createSprite(200,280);
    backg.addImage("background",backgImg);
    backg.x = backg.width /2;
    backg.velocityX = -6;

    ground=createSprite(500,450,1000,20);
    ground.visible = false;

    //ground2 = createSprite(500,100,1000,20);


    stickmanStand = createSprite(40,400);
    stickmanStand.addImage("stand", stickmanStandImg);
    stickmanStand.addAnimation("jump",stickmanJumpImg);
    //stickmanStand.addAnimation(stickmanRunImg);
    stickmanStand.scale = 0.2;

    gear1 = createSprite(1100,400);
    gear1.addImage(gear1Img);
    gear1.scale = 0.08;
    gear1.velocityX = -6;

    gear2 = createSprite(1200,400);
    gear2.addImage(gear2Img);
    gear2.scale = 0.1;
    gear2.velocityX = -8;


    gear3 = createSprite(1450,400);
    gear3.addImage(gear3Img);
    gear3.scale = 0.2;
    gear3.velocityX = -6;


    gear4 = createSprite(1160,400);
    gear4.addImage(gear4Img);
    gear4.scale = 0.008;
    gear4.velocityX = -9;


    gear5 = createSprite(1900,400);
    gear5.addImage(gear5Img);
    gear5.scale = 0.2;
    gear5.velocityX = -11;


    star = createSprite(800,400);
    star.addImage(starImg);
    star.scale = 0.08
    


    earring = createSprite(400,400)
    earring.addImage(earringImg);
    earring.scale = 0.04
    
    score = 0;

}

function draw(){

    //background(backgImg);
    text("Score: "+ score, 500,400);

    if (star.collideStickman){
      score = score + 5
    }

    if (gear1.collideStickman){
      gear1.velocityx = 0;
    }

star.x = mouseX
star.y = mouseY


    if (backg.x < 0){
        backg.x = backg.width/2;
    }

    if (gear1.x < 50){
      gear1.x = 1400;
    }

    if (gear2.x < 50){
      gear2.x = 1700;
    }

    if (gear3.x < 50){
      gear3.x = 1400;
    }

    if (gear4.x < 50){
      gear4.x = 1700;
    }

    if (gear5.x < 50){
      gear5.x = 1800;
    }

     // if(keyDown("space") && trex.y >= 159) {
      // trex.velocityY = -12;
      //}


 if(keyDown("up") && stickmanStand.y>=350) 
  {
    stickmanStand.velocityY=-13;
    stickmanStand.changeAnimation(stickmanJumpImg);
  }
 stickmanStand.velocityY=stickmanStand.velocityY+0.5;

 /*
  if(keyPressed("up")){
      stickmanStand.velocityY=+10
  }



  if(keyDown("up")){
      stickmanStand.velocity=-13
  }
    
*/


     stickmanStand.collide(ground);
     //stickmanStand.bounce(ground2);
    
    drawSprites()
    
}

/*
function spawnGears() {
  if(frameCount % 60 === 0) {
    var gear = createSprite(500,400);
    //gear.debug = true;
    gear.velocityX = -6 //(6 + 3*score/100);

    //generate random gears
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: gear.addImage(gear1Img);
              break;
      case 2: gear.addImage(gear2Img);
              break;
      case 3: gear3.addImage(gear3Img);
              break;
      case 4: gear.addImage(gear4Img);
              break;
      case 5: gear.addImage(gear5Img);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the gears           
    //gear.scale = 0.5;
    gear.lifetime = 700;
    //add each gear to the group
    gearGroup.add(gear);
  }
}

*/
