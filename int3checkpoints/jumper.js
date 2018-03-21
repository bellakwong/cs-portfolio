var jumper1 = document.getElementById("jumper1");
var jumper2 = document.getElementById("jumper2");
var jumper3 = document.getElementById("jumper3");

jumper1.style.position = "absolute";
jumper2.style.position = "absolute";
jumper3.style.position = "absolute";

//when the mouse moves close to the button, it will jump a random amount of pixels across the screen
jumper1.addEventListener("mousemove", function(){
    jumper1.style.top = Math.random() * 500 + "px";
    jumper1.style.left = Math.random() * 500 + "px";
})

jumper2.addEventListener("mousemove", function(){
    jumper2.style.top = Math.random() * 900 + "px";
    jumper2.style.left = Math.random() * 900 + "px";
})

jumper3.addEventListener("mousemove", function(){
    jumper3.style.top = Math.random() * 300 + "px";
    jumper3.style.left = Math.random() * 300 + "px";
})