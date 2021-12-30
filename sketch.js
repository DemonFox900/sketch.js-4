var player1
var player2
var Sword1
var Sword2
var Background
var invisibleBoundary1
var invisibleBoundary2
var edges
var END=0
var PLAY=1
var gameState=SERVE
var SERVE
var player2Health=100
var player1Health=100
var blood1
var blood2
var shield1
var shield2
function preload(){
player1Image=loadImage("player1.png")
player2Image=loadImage("player2.png")
shield1Image=loadImage("shield1.png")
shield2Image=loadImage("shield2.png")
Sword1Image=loadImage("Ninjasword1.png")
Sword2Image=loadImage("Ninto.png")
BackgroundImage=loadImage("Background1.jpg")
Theme1Sound=loadSound("Theme 1.mp3")
Theme2Sound=loadSound("Theme 2.mp3")
ThumbnailImage=loadImage("Thumbnail.jpg")
BloodImage=loadImage("blood.png")
player2DeadImage=loadImage("player2Dead.png")
player1DeadImage=loadImage("player1Dead.png")
}

function setup() {
  createCanvas(1550,750);
  player1=createSprite(200, 400,);
player1.addImage("abc",player1Image)
player1.scale=01

player2=createSprite(1400,400)
player2.addImage("xyz",player2Image)
player2.scale=01

Sword1=createSprite(400,400)
Sword1.addImage("fnherouvb",Sword1Image)
Sword1.scale=0.5

Sword2=createSprite(1100,400)
Sword2.addImage("enjojb3f",Sword2Image)
Sword2.scale-0.1
invisibleBoundary1=createSprite(15,700,15,1400)
invisibleBoundary1.visible=false

edges=createEdgeSprites()
Theme2Sound.play()

player1.setCollider("Circle",0,0,10)
player1.debug=false

player2.setCollider("Circle",0,0,10)
player2.debug=false
}

function draw() {
  background(BackgroundImage);
if(keyDown(RIGHT_ARROW)){
  Sword1.x=Sword1.x+50
}
  if(keyDown(LEFT_ARROW)){
    Sword1.x=Sword1.x-50
  }
  
  if(keyDown("A")){
    player1.x=player1.x-50
  }
    if(keyDown("D")){
      player1.x=player1.x+50
    }
    
if(keyWentDown("Z")){
shield()
}
if(keyWentUp("Z")){
  shield1.destroy()
}
      if(keyWentDown("K")){
     otherShield()
  }
  if(keyWentUp("K")){
    shield2.destroy()
  }
      if(keyDown(RIGHT_ARROW)){
        Sword1.x=Sword1.x+50
      }
        if(keyDown(LEFT_ARROW)){
          Sword1.x=Sword1.x-50
        }
if(keyDown("1")){
  Sword2.x=Sword2.x-50
}
if(keyDown("2")){
Sword2.x=Sword2.x+50
}
      player1.collide(edges)
      Sword1.collide(edges)
      
      player2.collide(edges)
      Sword2.collide(edges)
      

if(Sword1.isTouching(player2)){
  player2Health=player2Health-20
Sword1.x=400
Sword1.y=400
}
if(Sword2.isTouching(player1)){
  player1Health=player1Health-20
Sword2.x=1300
Sword2.y=400
}
  
  if(player2Health===0){
   player1.x=200
   player1.y=400
   Sword1.x=400
    Sword1.y=400
   player2.x=1250
   player2.y=500
    player2.addImage("ABCDEFG",player2DeadImage)
   player2.changeImage("ABCDEFG")
   player2.scale=1
    Sword2.visible=false
    
   blood2=createSprite(1400,500)
  blood2.addImage(BloodImage)
  blood2.scale=0.6
}
if(player1Health===0){
  player2.x=1400
  player2.y=400
  Sword2.x=1100
  Sword2.y=400
  
player1.addImage("xyz",player1DeadImage)
player1.changeImage("xyz")
player1.scale=1
blood1=createSprite(400,500)
blood1.addImage(BloodImage)
blood1.scale=0.4
player1.x=400
player1.y=500
Sword1.visible=false

}
  if(player2Health===0){
    textSize(55)
    fill(250)
  text("Player 1 is the Winner!",750,375)
  }
  if(player1Health===0){
    textSize(55)
    fill(250)
    text("Player 2 is the Winner!",350,375)
  }
       drawSprites();
textSize(35)
fill(250)
text("player2Health :"+player2Health,1200,100)
      
textSize(35)
fill(250)
text("player1Health:"+player1Health,100,100)
}

 function shield(){
  shield1=createSprite(player1.x+200,400)
  shield1.addImage("noiw",shield1Image)
  shield1.scale=0.7
 
  if(shield1.isTouching(Sword2)){
 Sword2.x=1100
 Sword2.y=400
  }

}
 function otherShield(){
  shield2=createSprite(player2.x-150,400)
  shield2.addImage("noi",shield2Image)
  shield2.scale=1.75
  shield2.collide(Sword1)
 }