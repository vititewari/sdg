var trackI, track;
var robberI, robber;
var coinI, coin;
var energyI, energy;
var laserI, laser;

function preload(){
robberI = loadAnimation("images/robber 1.png", "images/robber 2.png", "images/robber 3.png");
coinI = loadAnimation("images/coin 1.png","images/coin 2.png","images/coin 3.png","images/coin 4.png","images/coin 5.png","images/coin 6.png");
energyI = loadImage("images/energy drinks.png");
laserI = loadImage("images/laser.png");
trackI = loadImage("images/track1.png");

}

function setup() {
  createCanvas(400, 800);

  robber = createSprite(100,700,20,50);
  robber.addAnimation("running",robberI);

  coin = createSprite(random(150,300),random(200,700),0,0)
  coin.addAnimation("rotating",coinI)
  coin.scale = 0.5
}

function draw() {
  background(220);
  
  drawSprites();
}