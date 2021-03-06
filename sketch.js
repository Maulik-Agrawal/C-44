//calling all the variables globally
var back_img;
var blueBoxer, redBoxer;
var boxer1, boxer2;
var gameState = 0;
var moveBoxer1 = 0;
var moveBoxer2 = 0;
var health = 100;

function preload() {
  //loading all the images 
  back_img = loadImage("images/bg.jpg");

  blueBoxer = loadImage("images/boxer_11.png");
  blueBoxer2 = loadImage("images/boxer_22.png");
  blueBoxer3 = loadImage("images/boxer_33.png");

  redBoxer = loadImage("images/boxer_1.png");
  redBoxer2 = loadImage("images/boxer_2.png")
  redBoxer3 = loadImage("images/boxer_3.png");

  //loading all the sounds
  crowd = loadSound("sounds/crowd cheer.mp3");
  death = loadSound("sounds/death sound.mp3");
}

function setup() {
  //the canvas size will be of the size of the screen
  createCanvas(windowWidth,windowHeight);

  //sprites of the boxers
  boxer1 = createSprite(590,600);
  boxer1.addImage(blueBoxer);
  boxer1.scale = 5.8;

  boxer2 = createSprite(1200,600);
  boxer2.addImage(redBoxer);
  boxer2.scale = 5.8;
}

function draw() {
  //adding our own background
  background(back_img);
  
  //BOXER 1 
  //adding all the keys for boxer number 1
  if(keyDown("S") && moveBoxer1 === 0)
  {
    boxer1.addImage(blueBoxer2);
    changePosition(20,10,boxer1);
    moveBoxer1 = 1;
  }

  if(keyDown("A") && moveBoxer1<=5)
  {
    boxer1.addImage(blueBoxer3);
    changePosition(50,10,boxer1);
    moveBoxer1 = moveBoxer1+1;
    //the crowd will cheer if boxer 1 hits boxer 2 or vice-versa
    crowd.play();
  }

  //BOXER 2
  //adding all the keys for boxer number 2

  drawSprites();
}

//function for changing the position if certain keys are pressed
function changePosition(x,y,boxer){
  boxer.x = boxer.x + x;
  boxer.y = boxer.y + y;
}