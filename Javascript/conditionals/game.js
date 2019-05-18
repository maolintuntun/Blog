//create secretNumber
var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a number"));


//check if guess is right
if(guess === secretNumber){ //change the type
	alert("Right!!");
}

//otherwise wrong

/*else{
	alert("Wrong..");
}*/

//otherwise too high or too low
else if(guess > secretNumber){
	alert("Too high! guess again");
}
else{ 
	alert("Too low! guess again");
}


