var carlos;
var ground;
var platform1;
var platform2;
var shop;
var coin;
var score = 0
var flag = 0
var bomb;
var explo;

function preload()
{
  
 Esquare = loadImage("Images/RedTriangle.png")
 Ishop = loadImage("Images/GameShop.png")
 Icoin = loadImage("Images/GoldCoin.png")
 IGameBomb = loadAnimation("Images/GameBombTrans.png")
 Iexplo = loadAnimation("Images/GameExoplosion.png")
}

function setup() 
{
  createCanvas(windowWidth,windowHeight);

  carlos = createSprite(500,643,50,50);
  carlos.shapeColor = "cyan"

  ground = createSprite(width/2,height-20,1100,500)
  ground.shapeColor = "white";

  platform1 = createSprite(600,400,200,40);
  platform2 = createSprite(1200,400,200,40)
  platform1.shapeColor = "white"
  platform2.shapeColor = "white"

  shop = createSprite(900,570,200,200)
  shop.addImage(Ishop);
  shop.scale = 0.5
 // shop.debug = true
  shop.setCollider("rectangle",0,0,350,350)



  coinsgroup = new Group()
  bombgroup = new Group()
}

function draw() 
{
  background("black")
  textSize(30)
  fill("white")
  text("Score ="+score,width/2,200)
  coins()
  createbomb()

  if(keyDown("space")){
    carlos.velocityY = -10
  }
  if(keyDown(LEFT_ARROW)){
    carlos.x = carlos.x-10
  }
  if(keyDown(RIGHT_ARROW)){
    carlos.x = carlos.x+10
  }
  if(carlos.x > width/2 ){
  }
  else if(carlos.x < width/2-50){
  }
  else{
  }
  carlos.velocityY = carlos.velocityY+0.8
  carlos.collide(ground)
  carlos.collide(platform1)
  carlos.collide(platform2)
  carlos.collide(shop)

  if(carlos.isTouching(coinsgroup)){
    coinsgroup.destroyEach()
    score = score+5
  }
  if(carlos.isTouching(bombgroup)){
    bomb.changeAnimation("explo")
    carlos.destroy()
    flag = "end";
  }
  if(flag == "end") {
    textSize(40)
    fill("red")
    text("You Have Been Destroyed..",width/2, height/2-300)
  }
  if(score == 25) {
    flag = "level 1"
    text("You Completed Level 1!", width/2, height/2-200)
  }
  if(flag == "level 1") {
    textSize(40)
    fill("green")
    text("Level 2 - Collect 50 coins.",width/2, height/2-300)
  }
  drawSprites()
}


function coins(){
  if(frameCount%110==0){
    coin = createSprite(200,200,100,100)
    coin.x = Math.round(random(100,width-200))
    coin.y = Math.round(random(100,height/2))  
    coin.addImage(Icoin)
    coin.lifetime = 100;
    coin.scale = 0.02
    coinsgroup.add(coin)
  }
}

function createbomb() {
  if(frameCount%200==0){
    bomb = createSprite(200,200,100,100)
    bomb.x = Math.round(random(100,width-200))
    bomb.y = Math.round(random(100,height/2))  
    bomb.addAnimation("bomb",IGameBomb)
    bomb.addAnimation("explo",Iexplo)
    bomb.changeAnimation("bomb")
    bomb.lifetime = 100;
    bomb.scale = 0.1
    bombgroup.add(bomb)

  }

}



