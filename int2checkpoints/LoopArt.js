/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

//falling snow starting point
var startPlace = -200

draw = function() {

//falling snow
    background(66, 167, 244);
    
    for(var i = 0; i < width; i+=30){
        for(var j = startPlace; j < height; j+=30){
            var size = 18;
            fill(255, 255, 255, 255);
            stroke(244, 244, 244);
            ellipse(i, j, size, size);
        }
    }

    startPlace++
    
    if(startPlace >= 0){
        startPlace = -200;
    }
    
    //SNOWMAN vvv
    stroke(244, 244, 244);
    
    // The ground
    fill(244, 244, 244);
    rect(0, 300, 400, 100);  
    
    // The snowman
    fill(255, 255, 255);
    ellipse(200, 300, 150, 150);
    ellipse(200, 200, 100, 100);
    ellipse(200, 120, 75, 75);
    
    //hat
    stroke(73, 73, 73);
    fill(0, 0, 0);
    rect(170, 25, 60, 60);
    rect(150, 80, 100, 20);
    //red ribbon thingy
    fill(206, 27, 0); 
    rect(170, 60, 60, 20);
    
    //eyes
    fill(0, 0, 0);
    ellipse(183, 120, 9, 9);
    ellipse(214, 120, 9, 9);
    
    //arms
    stroke(45, 24, 0);
    line(160, 200, 82, 122);
    line(240, 202, 300, 109);
    
    //buttons
    fill(0, 0, 0);
    ellipse(200, 180, 9, 9);
    ellipse(200, 200, 9, 9);
    ellipse(200, 220, 9, 9);
    
    //scarf
    fill(206, 27, 0)
    quad(167, 143, 238, 142, 231, 167, 156, 172);
    rect(201.5, 168, 23, 40);
    
    //carrot nose
    fill(255, 147, 23);
    triangle(196, 140, 251, 137, 196, 130);

};


// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
