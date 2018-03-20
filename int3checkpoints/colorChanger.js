//Creates variables and saves DOM elements to each
var newColor = document.getElementById("newColor");
var colorChangeButton = document.getElementById("colorChangeButton");

/*
- EventListener makes it so that the button does the function when "clicked"
- The indented part inside the function sets the body's backgound value to the 
user's typed color choice.
*/
colorChangeButton.addEventListener("click", function(){
    document.body.style.backgroundColor = newColor.value;
})


/*
- newColor is the typed user input (their color choice). 
- "keyup": the function is executed when a keyboard key is released.
- The enter key is specifically key 13. Thus, the conditional with .keyCode===13 
makes it so that only when enter is pressed does the backgound color change to 
the user's color choice.
*/
newColor.addEventListener("keyup", function(event){
    event.preventDefault();
    if (event.keyCode === 13) {
        document.body.style.backgroundColor = newColor.value;
    }
});

/*an idea. ignore below. (I wanted it so that when you change the background to 
black, the text of "Hello, Darkness, my old friend" to come up (in an alert or in white text).)
newColor.addEventListener(document.body.style.backgroundColor === "black", function(darkness){
    if(document.body.style.backgroundColor === "black"){
        javascript:alert("Hello darkness my old friend");
    }
});
*/