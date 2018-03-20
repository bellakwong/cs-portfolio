/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

draw = function() {
    //background();

    //changes the square based on the x-position
    if(mouseX > 200){
        rect(mouseX, mouseY, 30, 30);
        fill(209, 144, 237); //purple square
        strokeWeight(4);
        stroke(160, 36, 214);
    }
    else{
        ellipse(mouseX, mouseY, 38, 38);
        fill(86, 231, 247); //neon blue circle
        stroke(82, 132, 242);
    }
    //hesby helped here
    if(mouseX < 200){
        ellipse(mouseX, mouseY, 38, 38);
        fill(231, 223, 23); //yellow circle
    }
    else{
        fill(12, 20, 123); //circle and square
        strokeWeight(2);
    }
    //
    if(mouseY < 200){
        ellipse(mouseX, mouseY, 38, 38);
        fill(213, 32, 122);
        stroke(24, 122, 43);
    }

};


// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
