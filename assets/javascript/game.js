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

function randomLetter(){

    computerLetter = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    guessesSoFar = []
    guessesLeft = 9;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("left").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("soFar").innerHTML = "Guesses so far: " + guessesSoFar;
    console.log(computerLetter)
}