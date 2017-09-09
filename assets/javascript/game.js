alert("Turn up your volume (maybe not too loud)");

// Variables

var options = ["q", "w", "e", "r", "t", "y", "u", "i", "o", 
"p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", 
"c", "v", "b", "n", "m"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];
var psychicGuess = options[Math.floor(Math.random()
		*options.length)];

// Functions

function reset () {
	guessesLeft = 10;
	guessedLetters = [];
	psychicGuess = options[Math.floor(Math.random()
		*options.length)];
}

document.onkeyup = function () {

	var userGuess = String.fromCharCode(event.keyCode)
	.toLowerCase();

	var pushedLetters = guessedLetters.indexOf(userGuess);

	console.log(psychicGuess);

	// Sound effects

	var harp = new Audio("harp.wav");
	var bang = new Audio("bang.wav");

	// Conditions

	if (userGuess == psychicGuess) {
		harp.play();
		wins++;
		reset();
	}

	if (userGuess !== psychicGuess && pushedLetters == -1) {
		guessesLeft--;
		guessedLetters.push(userGuess);
	}

	if (guessesLeft == 0) {
		bang.play();
		losses++;
		reset();
	}

	if (pushedLetters !== -1){
		alert("You guessed that already!")
	}


// Pushing results to html file

	var gameText = "<h1>Guess what letter I'm thinking of</h1>"
	+ "<h2>Press any letter key</h2>"
	+ "<p>Wins: " + wins + "</p>"
	+ "<p>Losses: " + losses + "</p>"
	+ "<p>Guesses Left: " + guessesLeft + "</p>"
	+ "<p>Guessed Letters: " + guessedLetters + ", </p>";

	document.querySelector("#game").innerHTML = gameText;


}










