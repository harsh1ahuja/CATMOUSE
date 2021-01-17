var garden,garden_im;
var tom,tom_im1,tom_im2,tom_im3,tom_im4;
var jerry,jerry_im1,jerry_im2,jerry_im3,jerry_im4;








function preload() {
    //load the images here
    garden_im=loadImage("garden.png");

    tom_im1=loadImage("tomOne.png");
    tom_im2=loadImage("tomTwo.png");
    tom_im3=loadImage("tomThree.png");
    tom_im4=loadImage("tomFour.png");

    jerry_im1=loadImage("jerryOne.png");
    jerry_im2=loadImage("jerry.png");
    jerry_im3=loadImage("jerryThree.png");
    jerry_im4=loadImage("jerryFour.png");
    

}

function setup(){
    createCanvas(1000,800);
   
    garden=createSprite(500,400);
    garden.addImage(garden_im);

    //create tom and jerry sprites here
    tom=createSprite(400,400,20,20);
    tom.addImage(tom_im1);

    jerry=createSprite(300,300,20,20);
    jerry.addImage(jerry_im1);

}

function draw() {

    
    background(0);

    //Write condition here to evalute if tom and jerry collide



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
