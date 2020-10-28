var gameState= "start";
var invisibleground;

function preload(){
 upload = new Upload();
}


function setup() { 
  createCanvas(windowWidth-20, windowHeight-30);
  invisibleground= createSprite(200, 470, 300, 10);
 // invisibleground.visible=false;
   back =new Backdrop();
   arrangment =new Arrangment();

   brother1.setCollider("circle",50 ,50, 50 );

  
  
}

function draw() {
  background(112,115,163);

  // Roation of sprite saw of level 1
  sawmachine.rotation=sawmachine.rotation+7;
  
  sawmachine1.rotation=sawmachine1.rotation+7;



  

  if(keyDown("enter")){
    brother1.x= 80;
    brother1.y=400;    
  }


  // Player control through arrow
  if(keyDown(RIGHT_ARROW)){
    brother1.changeAnimation("running", brotherrunimg);
    brother1.x+=5;    
  }

  if(keyDown(LEFT_ARROW)){
    brother1.changeAnimation("running", brotherrunimg);
    brother1.x-=5;    
  }

  if(keyDown(UP_ARROW)){
    brother1.changeAnimation("jumping", brotherjumpimg);
    brother1.velocityY=-5;
    brother1.x+=5;    
  
}
if(keyDown(UP_ARROW) && (brother1.velocityY=-5)){
brother1.velocityY=brother1.velocityY+0.8;
}



brother1.velocityY=brother1.velocityY+0.8;

/*if(keyDown("space")){
  brother1.changeAnimation("jumpattacking", brotherjumpattackimg);
  brother1.y-=5;
  brother1.x+=5;    

}*/

brother1.collide(p1);
brother1.collide(p2);
brother1.collide(p3);
brother1.collide(rbarrel);
brother1.collide(gbarrel);
brother1.collide(block);
brother1.collide(invisibleground);




if(brother1.isTouching(spike)|| brother1.isTouching(sawmachine) ||brother1.isTouching(sawmachine1)){
  brother1.changeAnimation("dead", brotherdeadimg); 
  //gameState === END;  
}

brother1.collide(p1);
brother1.collide(p2);
brother1.collide(p3);
brother1.collide(rbarrel);
brother1.collide(gbarrel);
brother1.collide(block);
brother1.collide(p1);
brother1.collide(p1);







	drawSprites();
	
	
}
