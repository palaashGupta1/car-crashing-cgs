var car,wall; 
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car = createSprite(0, 200, 100, 50);
  wall = createSprite(1500,200,60,height/2);
}

function draw() {
  background("pink");  
  car.shapeColor="red";
  wall.shapeColor=(80,80,80);

car.velocityX = speed;
car.collide(wall);

if(deformation(weight,speed)<100){
  car.shapeColor="green";
}
else if(deformation(weight,speed)>100 && deformation(weight,speed)<180){
  car.shapeColor="yellow";
}
else if(deformation(weight.speed)>180){
  car.shapeColor="red";
}


  drawSprites();
}
function deformation (weight,speed){
var damage=(0.5*weight*speed*speed)/22500;
  
  return damage;
}
