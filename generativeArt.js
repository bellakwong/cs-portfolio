/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(600, 600);background(153, 204, 255);

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var startPlace = -600 //for the ovals that make the wave
var fishStay = [];
 
draw = function() {
   
    background(153, 204, 255) //sky
    fill(250, 236, 69);
    ellipse(70, 65, 80, 80); //yellow sun
    
    //ocean
    fill(0, 34, 102);
    rect(0, 250, 599, 600); 
    //the ocean is actually a rectangle of dark blue. The chain of ovals (below) are the same color as the sky to make it look like waves
    
     
    //waves
    for (var i = 0; i < width; i += 80){ //i = y-axis
        for (var j = startPlace; j < height; j += 80){ //j = x-axis
            noStroke();
            fill(153, 204, 255);
            ellipse(j, 250, 80, 60); //"j" makes the ovals move to the right along the x-axis
        }
    }
    
    startPlace ++ //the increment makes the ovals move to create the illusion that the waves are moving
    
    //when the ovals go past a certain point, the chain will move back to the left off screen 
    if (startPlace >= -300){
        startPlace = -600;
    }
    
    //gets the background to not redraw itself over the fish
    for (var k = 0; k < fishStay.length; k++){
        drawFish(fishStay[k].x, fishStay[k].y);
    }
    
};

drawFish = function(x, y){
    fill(255, 119, 28); //makes the fish orange
    noStroke();
    ellipse(x-141, y+54, 68, 36); //fish body
    ellipse(x-100, y+49, 53, 14); //top back fin
    ellipse(x-106, y+59, 39, 13); //bottom back fin
    triangle(x-168, y+53, x-94, y+50, x-129, y+20); //top fin
    triangle(x-114, y+78, x-96, y+51, x-144, y+64); //bottom fin
    fill(0, 0, 0); //fish eye color (black)
    ellipse(x-158, y+50, 5, 5); //eye
};
     

mouseClicked = function(){
    if (mouseY > 300) {  //if the mouse is under 300 on the y-axis, then draw a fish. If it is above, don't draw. 
        fishStay.push({x:mouseX + 130, y:mouseY - 50}); //when mouse is clicked, it draws a fish
    }
};


// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
