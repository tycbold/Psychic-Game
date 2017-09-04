var options = ["q", "w", "e", "r", "t", "y", "u", "i", "o", 
"p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", 
"c", "v", "b", "n", "m"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = " ";

document.onkeyup = function () {
	var userGuess = String.fromCharCode(event.keyCode)
	.toLowerCase();

	console.log (userGuess);



	var psychicGuess = options[Math.floor(Math.random()
		*options.length)];

	console.log(psychicGuess);

	if (userGuess == psychicGuess) {
		wins++;
		alert("you win!");
	}

	if (userGuess !== psychicGuess) {
		guessesLeft--;
	}

	if (guessesLeft == 0) {
		losses++;
		alert("you lose!");
		guessesLeft = 10;
	}

	var gameText = "<h1>Guess what letter I'm thinking of</h1>"
	+ "<p>Wins: " + wins + "</p>"
	+ "<p>Losses: " + losses + "</p>"
	+ "<p>Guesses Left: " + guessesLeft + "</p>"
	+ "<p>Guessed Letters: " + userGuess + ", </p>";

	document.querySelector("#game").innerHTML = gameText;

}









