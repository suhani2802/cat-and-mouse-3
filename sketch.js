var bgImg;
var cat;
var mouse;

function preload() {
  bgImg=loadImage("images/garden.png");
  catImg1=loadAnimation("images/cat1.png");
  mouseImg1=loadAnimation("images/mouse1.png");
  catImg2=loadAnimation("images/cat2.png","images/cat3.png");
  mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
  catImg3=loadAnimation("images/cat4.png");
  mouseImg3=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(400,200,80,30);
    cat.addAnimation("catSleeping",catImg1);
    cat.scale = 0.2;
    mouse=createSprite(200,200,50,80);
    mouse.addAnimation("mouseStanding",mouseImg3);
    mouse.scale = 0.15;

}

function draw() {

    background(bgImg);

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catLastImage",catImg3);
        cat.x = 300;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage",mouseImg3);
        mouse.scale = 0.15;
        mouse.changeAnimation("mouseLastImage")
    }
    drawSprites();
}

function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX-5;
        cat.addAnimation("catRunning",catImg2);
        cat.changeAnimation("catRunning");
        mouse.addAnimation("mouseTeasing",mouseImg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;
        
    }
}
