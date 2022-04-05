/// <reference path="./lib/Intellisense/js-turtle_hy.ts" />
//DOCUMENTATION: https://hanumanum.github.io/js-turtle/
/*
showGrid(20);      
forward(distance)  
right(angle)       
left(angle) 	   
goto(x,y) 	       
clear() 	       
penup() 	       
pendown() 	       
reset() 	       
angle(angle)	   
width(width)       

color(r,g,b)
color([r,g,b])
color("red")
color("#ff0000")
*/


showGrid(50); 
setSpeed(25);


function showWelcomeMessage()
{
	alert("nostalgia incoming"); 
}

lineColor = "blue";

showWelcomeMessage()
	width(4);

drawS()

setSpeed(50);
for (i=0; i<4; i=i+1) {

	randomColor_h()
	goto(250,0);
	strangeLine(200)
}



function drawS()
{

	goto(100,150);

right(0);
color(lineColor);
forward(50);

goto(150,150);
right(0);
color(lineColor);
forward(50);

goto(200,150);
right(0);
color(lineColor);
forward(50);

goto(100,50);
right(0);
color(lineColor);
forward(50);

goto(150,50);
right(0);
color(lineColor);
forward(50);

goto(200,50);
right(0);
color(lineColor);
forward(50);

goto(150,100);
right(45);
color(lineColor);
forward(70);

goto(100,100);
right(0);
color(lineColor);
forward(70);

goto(100,200);
right(0);
color(lineColor);
forward(70);

goto(200,200);
left(45);
left(45);
color(lineColor);
forward(70);

goto(150,0);
right(0);
color(lineColor);
forward(70);

goto(150,0);
right(45);
right(45);
color(lineColor);
forward(70);

goto(200,100);
left(135);
color(lineColor);
forward(50);

goto(150,150);
left(0);
color(lineColor);
forward(50);
}





