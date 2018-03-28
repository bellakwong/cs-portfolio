//Creates the variables for the different images
var twitter = document.getElementById("twitter");
var insta = document.getElementById("insta");
var facebook = document.getElementById("facebook");
var pin = document.getElementById("pin");

//when the file begins, it listens for a click and then performs the function
twitter.addEventListener("click", function(){
    descriptions.innerHTML = "Do you want to rant about the government issues and create memes? Then Twitter is right for you!";
});

insta.addEventListener("click", function(){
    descriptions.innerHTML = "If you have low selfconfidence, then get Instagram! Likes, followers, and comparing yourself to others never looked better!";
});

facebook.addEventListener("click", function(){
    descriptions.innerHTML = "How to hate your friends 101. Also good for getting your info stolen.";
});

pin.addEventListener("click", function(){
    descriptions.innerHTML = "loOk aT My foOd aNd ArT!";
});

snap.addEventListener("click", function(){
   descriptions.innerHTML = "Do you like embarassing you and your friends on the internet? Download Snapchat!" 
});