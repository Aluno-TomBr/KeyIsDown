var background;
var box;

function setup() {
  createCanvas(400,400)

background = createSprite (200, 200, 400,400)
box = createSprite (200,200,20,20);
}



function draw() 
{
  if (keyIsDown (RIGHT_ARROW)){
  
    background.shapeColor = "blue";

box.shapeColor = "green";

    box.position.x = box.position.x +5;
  }
 if (keyIsDown (LEFT_ARROW)){
  
  background.shapeColor = "green";

 box.shapeColor = "blue";
    
    box.position.x = box.position.x -5;
  }
 if (keyIsDown (UP_ARROW)){

  background.shapeColor = "red";

    box.shapeColor = "yellow";

    box.position.y = box.position.y -5;
  }
  if (keyIsDown (DOWN_ARROW)){
   
    background.shapeColor = "yellow";

     box.shapeColor = "red";
      
      box.position.y = box.position.y +5;
  }
  if (box.position.x >= 390 ){

   box.position.x = 390
  } 
  if (box.position.x <= 10){

    box.position.x = 10
  }
  if (box.position.y >= 390){

    box.position.y = 390
   } 
   if (box.position.y <= 10){
 
     box.position.y = 10
   }


  drawSprites();
}