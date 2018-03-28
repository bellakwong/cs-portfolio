//Creates variables and saves DOM elements to each
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var operator = document.getElementById("operator");
var calc = document.getElementById("calc");
var answer = document.getElementById("answer");

calc.addEventListener("click", function(solve){
    var number1 = +num1.value; //the variables number1 and number 2 store what values the user input
    var number2 = +num2.value; //the + in front of "num2.value" makes the user inputted value a number (rather than 3 + 6 equaling "36")
    var op = operator.value; //".value" is what the user put in. Read it was "value of the operator"
    
    //if the user picks +
    if(op === "+"){
        answer.innerHTML = "= " + (number1 + number2); //the "= " makes it so that the equal sign shows up next to the answer.
    }
    
    //if the user picks -
    if(op === "-"){
        answer.innerHTML = "= " + (number1 - number2);
    }
    
    //if the user picks x
    if(op === "x"){
        answer.innerHTML = "= " + (number1 * number2);
    }
    
    //if the user picks ÷
    if(op === "÷"){
        answer.innerHTML = "= " + (number1 / number2);
    }
    
    //if the user picks "% of"
    if(op === "% of"){
        answer.innerHTML = "= " + ((number1 * 0.01) * number2); //the * 0.01 is there to show the moving decimal when calculating percent.
    }
    
    //if the user picks "% off of"
    if(op === "% off of"){
        answer.innerHTML = "= " + (number2-((number1 * 0.01) * number2))
    }
    
    //if the user picks "to the power of"
    if(op === "to the power of"){
        answer.innerHTML = "= " + Math.pow(number1, number2) //Math.pow is code for finding whatever is in a  to the power of b in (a, b). Because of this, number1 and number2 makes this find the power of the user's input.
    }
});