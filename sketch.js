const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drops = []

var engine, world;

var ground


function preload(){
    //boyImage=loadAnimation("sprites/Walking Frame/walking_8.png","sprites/Walking Frame/walking_7.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_1.png")
    light1=loadImage("sprites/1.png")
    light2=loadImage("sprites/2.png")
    light3=loadImage("sprites/3.png")
    light4=loadImage("sprites/4.png")
}

function setup(){
    createCanvas(600,800)

    engine=Engine.create();
    world = engine.world;

 // ground = new Ground(300,760,600,50)
  
   boy=createSprite(300,600,2,2)
   // boy.addAnimation("batman",boyImage)
    boy.scale=0.5;
}

function draw(){
    background(0)
    Engine.update(engine)
    if(frameCount % 50 === 0){
        var px = Math.round(random(50,750))
        var rain = new Drops(px, 0, 7)
        drops.push(rain)
    }
    for(var i = 0; i < drops.length; i++){
        drops[i].display()
    }
   // ground.display()
}   

