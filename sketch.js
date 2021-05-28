var watcher
var sawtooth
var ravager
var thunderjaw
var backimg
var arrowhead
var arrowhead2
var score = 0

function preload(){
    watcher1 = loadImage("images/watcher sdg.png");
    sawtooth1 = loadImage("images/sawtooth sdg.png");
    ravager1 = loadImage("images/ravager sdg.png");
    thunderjaw1 = loadImage("images/thunderjaw sdg.png")
    backimg1 = loadImage("images/lukas-kolz-territory-of-the-banuk-tribe-inspired-by-the-colorado-rockies.jpg");
    arrowhead1 = loadImage("images/arrow.png");
    arrowhead2a = loadImage("images/arrow2.png");
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    backimg = createSprite(500,500,displayWidth,displayHeight)
 watcher = createSprite (1060,500,5,5)
 watcher.scale = 0.5
 sawtooth = createSprite (175,400,10,10)
 sawtooth.scale = 0.7
 ravager = createSprite (150,200,10,10)
 ravager.scale = 0.7
 thunderjaw = createSprite (875,150,20,20)
 thunderjaw.scale = 1


 watcher.addImage("watcher1",watcher1);
 sawtooth.addImage("sawtooth1",sawtooth1);
 ravager.addImage("ravager1",ravager1);
 thunderjaw.addImage("thunderjaw1",thunderjaw1);
 backimg.addImage("backimg1",backimg1);
 
    


}
function arrow(){
    arrowhead = createSprite(500,500,5,5);
    arrowhead.scale = 0.3;
    arrowhead.addImage("arrowhead1",arrowhead1);

    arrowhead2 = createSprite(500,500,5,5);
    arrowhead2.scale = 0.3;
    arrowhead2.addImage("arrowhead2a",arrowhead2a);

    arrowhead.y = World.mouseY;
    arrowhead2.y = World.mouseY;
    if(keyDown("right")){
       arrowhead.velocityX = arrowhead.velocityX+5
    }
     
}


function draw(){
    background("cyan");
    
    arrow();
    drawSprites();
}

