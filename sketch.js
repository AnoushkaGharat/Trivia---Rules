var form;
var hallway,hallwayIMG
var gameState=0
var play,startButton;
var rules, rulesIMG;

function preload(){

  hallwayIMG = loadImage("hallway.jpg")
  startbutton=loadAnimation("button1.gif", "button2.gif","button3.gif","button4.gif","button5.gif","button6.gif");
  rulesIMG = loadImage("Rules.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //createSprite(400, 200, 50, 50);



//title=createElement("h1")
//title.html("Treacherous Trivia")

}

function draw() {
 // background(); 





  if(mousePressedOver(play)&&gameState===0){
    hallway.visible=false;
    play.visible=false;
    gameState=1
   
   
  }
  drawSprites();
if(gameState===0){
  
hallway = createSprite(windowWidth/2, windowHeight/2);
hallway.addImage(hallwayIMG)
hallway.scale = 3.0
  textSize(175);
 textFont("chiller")
 fill("Red");
 text("Treacherous Trivia",windowWidth/2 - 700,windowHeight/2- 250);
  //form.display();
  play=createSprite(windowWidth/2 - 620,windowHeight/2 + 150)
play.addAnimation("playing",startbutton)
play.scale=0.4
input=createInput('Hello')
input.position(windowWidth/2 - 680,windowHeight/2 + 50)

rules = createSprite(windowWidth/2,windowHeight/2);
rules.addImage(rulesIMG);
rules.visible = false;
}
 
if(gameState === 1){
  play.visible = false;
  input.visible = false;
  rules.visible = true;

}



}