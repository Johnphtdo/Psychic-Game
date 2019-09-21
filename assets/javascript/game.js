var computerChoice = ["a", "b", "c", "d", "e",
    "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerLetter = "";

function rdmLetter(){

    computerLetter = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    guessesSoFar = []
    guessesLeft = 9;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("left").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("soFar").innerHTML = "Guesses so far: " + guessesSoFar;
    console.log(computerLetter)
}

rdmLetter();
document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess);

    if (guessesLeft > 0) {
        console.log(guessesLeft);
        if (userGuess !== computerLetter) {
            guessesLeft--;
            document.getElementById("left").innerHTML = "Guesses Left: " + guessesLeft;
            guessesSoFar.push(userGuess);
            document.getElementById("soFar").innerHTML = "Guesses So Far: " + guessesSoFar;
        }
        
        if (userGuess === computerLetter) {
            wins++;
            document.getElementById("wins").innerHTML = "Wins: " + wins;
            alert("You Guessed it!");
            rdmLetter();
    }
        if (guessesLeft == 0) {
            losses++;
            document.getElementById("losses").innerHTML = "Losses: " + losses;
            alert("You suck!")

            rdmLetter();
        };
    };
};