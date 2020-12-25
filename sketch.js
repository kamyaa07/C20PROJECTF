

var car,wall;


var speed, weight; 


function setup() {
  createCanvas(1600, 1600);


	speed1=random(55,90)
	weight1=random(400,1500)
	speed2=random(55,90)
	weight2=random(400,1500)

	car1=createSprite(50, 200, 50,50);   
	car2=createSprite(50, 400, 50,50);  
	car1.velocityX = speed1;
    car2.velocityX = speed2;
	car1.shapeColor=color("magenta");
	car2.shapeColor=color("grey");

  
  	wall=createSprite(1200,200, 60, height/2)
  	wall.shapeColor=color("yellow")
}


function draw() {
  background(0);

  if(wall.x-car1.x < (car1.width+wall.width)/2)
  {
  	car1.velocityX=0;
  	var deformation=0.5 * weight1 * speed1* speed1/22500;
	if(deformation>180)
	{
		car1.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		car1.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		car1.shapeColor=color(0,255,0);
	}
  }  
  if(wall.x-car2.x < (car2.width+wall.width)/2)
  {
  	car2.velocityX=0;
  	var deformation=0.5 * weight2 * speed2* speed2/22500;
	if(deformation>180)
	{
		car2.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		car2.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		car2.shapeColor=color(0,255,0);
	}
  }  
  drawSprites();
 
}


