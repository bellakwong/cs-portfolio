/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(0,0,0);

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

drawGhost = function(x, y){
    fill(random(255),random(255),random(255));
    noStroke();
    //body
    rect(x-111, y-50, 67, 61);
    rect(x-102, y-66, 49, 41);
    //eyes
    fill(255, 255, 255);
    rect(x-66, y-43, 18, 18);
    rect(x-103, y-43, 18, 18);
    //pupils
    fill(0, 0, 0);
    rect(x-92, y-36, 8, 8);
    rect(x-56, y-36, 8, 8);
}

drawPac = function(x, y){
    fill(255, 238, 5);
    arc(x, y + 20, 50, 50, 0.5, 5.5); 
}


mouseClicked = function() {
    if(random(2) > 1){
        drawPac(mouseX, mouseY);
    }
    else {
        drawGhost(mouseX + 70, mouseY + 30);
    }
}


draw = function() {

};


// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
