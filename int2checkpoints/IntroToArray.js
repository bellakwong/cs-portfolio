/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


//array
var myArr = ["hi", "bye", "hello", "yay", 34, 23];

//calls up everything in the array
for(var i = 0; i < myArr.length; i++){
    console.log(myArr[i])
}

//------------------------------------------

var myCat = {
    name: "Kitty", 
    age: 12, 
    type: "calico",
    meow: function(){
        return this.name;
    }
}

console.log(myCat.type) 
//will pop out what type of mycat it is. For example, "console.log(myCat.age)" 
//will make "12" appear. Remember that everything in myCat has to be separated by commas.


// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
