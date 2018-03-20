/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos = 0;
var yPos = 0;
var weight = 2;

draw = function() {
    //draws yellow circles from left to right diagonally
    strokeWeight(3); //the thickness of the outline
    stroke(20, 20, 30); //black outline
    fill(300, 210, 40); //makes it yellow
    ellipse(xPos, yPos, 30, 30);
    xPos = xPos + 55;
    yPos = yPos + 30;
    
    //draws red circles from right to left diagonally
    strokeWeight(weight+5); //the thickness of the outline
    stroke(100, 40, 330); //color of the outline
    fill(300, 10, 40); //makes circle red
    ellipse(height-xPos, yPos/2, 35, 35);
    xPos = xPos + 10;
    yPos = yPos + 40;
    
    //draws blue circles from right to left diagonally
    strokeWeight(weight+2); //the thickness of the outline
    stroke(100, 50, 30); //color of the outline
    fill(100, 10, 230); //makes circle blue
    ellipse(height-xPos/4, yPos/4, 35, 35);
    xPos = xPos + 10;
    yPos = yPos + 30;
    weight++
    
    //draws green circles from left to right diagonally
    strokeWeight(weight - 10); //the thickness of the outline
    stroke(20, 20, 30); //black outline
    fill(30, 210, 40); //makes it yellow
    ellipse(xPos + 90, yPos/2, 40, 40);
    xPos = xPos + 5;
    yPos = yPos + 30;

    
};    
    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
