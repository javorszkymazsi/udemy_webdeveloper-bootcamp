var secretNumber = 12;
var guessedNumber = Number(prompt("Guess a number!"));
if (guessedNumber !== Number) {
	alert("It's not a number! Try again.");
} else if (guessedNumber === secretNumber) {
	alert("You've guessed it!");
} else if (guessedNumber < secretNumber) {
	alert("Too low! Try again.");
} else {
	alert("Too high! Try again.");
}