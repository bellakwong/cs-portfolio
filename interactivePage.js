//Creates variables and saves DOM elements to each
var ficOrNonFic = document.getElementById("ficOrNonFic");
var submitFictionType = document.getElementById("submitFictionType");
var fictionDropDown = document.getElementById("fictionDropDown");
var nonFicDropDown = document.getElementById("nonFicDropDown");
var book = document.getElementById("book");

//Adds listener to "enter" button on click
submitFictionType.addEventListener("click", function(enter){
    var submitFT = ficOrNonFic.value    //grabs user input
    if (submitFT === "fiction" || submitFT === "Fiction"){
        fictionDropDown.style.display = "block";    //displays the fiction select menu
    }
    else{
        nonFicDropDown.style.display = "block";   //displays the fiction select menu
    }
});

fictionDropDown.addEventListener("click", function(){
    var ficType = fictionDropDown.value;  //whatever selected in the drop down menu
    
    //if the user chooses fantasy
    if (ficType === "Fantasy"){ 
        var ember = "'An Ember in the Ashes' by Sabaa Tahir";
        var emberLink = ember.link("https://www.goodreads.com/book/show/20560137-an-ember-in-the-ashes");   //Attaches the Goodreads link to the string
        book.innerHTML = emberLink;
    }
    
    //if the user chooses sci-fi
    if (ficType === "Science Fiction"){
        var flowers = "'Flowers for Algernon' by Daniel Keyes";
        var flowersLink = flowers.link("https://www.goodreads.com/book/show/18373.Flowers_for_Algernon");
        book.innerHTML = flowersLink;
    }
    
    //if the user chooses sci-fi
    if (ficType === "Drama"){
        var outsiders = "'The Outsiders' by S.E. Hinton";
        var outsidersLink = outsiders.link("https://www.goodreads.com/book/show/231804.The_Outsiders");
        book.innerHTML = outsidersLink;
    }
    
    //if the user chooses graphic novel
    if (ficType === "Graphic Novel"){
        var kindred = "'Kindred: A Graphic Novel Adaptation' by Octavia E. Butler";
        var kindredLink = kindred.link("https://www.goodreads.com/book/show/28818221-kindred");
        book.innerHTML = kindredLink;
    }
});

nonFicDropDown.addEventListener("click", function(){
   var nonFicType = nonFicDropDown.value;
   
   //if the user chooses biography
   if (nonFicType === "Biography"){
       var caged = "'I Know Why the Caged Bird Sings' by Maya Angelou";
       var cagedLink = caged.link("https://www.goodreads.com/book/show/13214.I_Know_Why_the_Caged_Bird_Sings");
       book.innerHTML = cagedLink;
   }
   
   //if the user chooses historical
   if (nonFicType === "Historical"){
       var washington = "'Washington's Spies: the Story of America's First Spy Ring' by Alexander Rose";
       var washingtonLink = washington.link("https://www.goodreads.com/book/show/19503231-washington-s-spies");
       book.innerHTML = washingtonLink;
   }
   
   //if the user chooses science
   if (nonFicType === "Science"){
       var heLa = "'The Immortal Life of Henrietta Lacks' by Rebecca Skloot";
       var heLaLink = heLa.link("https://www.goodreads.com/book/show/6493208-the-immortal-life-of-henrietta-lacks");
       book.innerHTML = heLaLink;       
   }
});

