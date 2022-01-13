var bg;
var mouse1, cat1;
var mouse2, cat2;
var mouse3, cat3;

function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    mouse1 = loadAnimation("images/mouse1.png");
    cat1 = loadAnimation("images/cat1.png");
    mouse2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    cat2 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouse3 = loadAnimation("images/mouse4.png");
    cat3 = loadAnimation("images/cat4.png");



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(870, 600);
    cat.addAnimation("catSitting", cat1);
    cat.scale = 0.2;

    mouse =  createSprite(200, 600);
    mouse.addAnimation("mouse", mouse1);
    mouse.scale = 0.2;


}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
        cat.addAnimation("catSitting", cat3);
        cat.changeAnimation("catSitting");
        mouse.addAnimation("mouseStanding", mouse3);
        mouse.changeAnimation("mouseStanding");

        cat.velocityX = 0;
        

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW) {
      mouse.addAnimation("mouseTeasing", mouse2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;

      cat.velocityX = -5;
      cat.addAnimation("catWalking", cat2);
      cat.changeAnimation("catWalking");
  }


}
