var alphaKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft= 8;
var display = [];
var output = " ";
var guessedLetters = [];
var randomWords= ["homerun", "strike", "out", "basehit", "rangers", "athletics", "dodgers", "cardinals", "giants", "yankees", "astros", "hotdog", "beer", "cap", "bat", "mariners", "mets", "umpire", "catcher", "pitcher"];
var currentWord= randomWords[Math.floor(Math.random()*randomWords.length)];
var wordLength= currentWord.length;
var letters = currentWord.split("");
console.log(letters)
$(document).ready(function(){
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#guessesRemaining").text(guessesLeft);
    $("#lettersGuessed").text(guessedLetters);

    console.log(currentWord);

// convert the letters from the chosen word to "_"
    var blanks = function(){
        for (var i=0; i < wordLength; i++){
            display[i] = "_ ";
            output = output + display[i];
        }
        $("#currentWord").text(output);
        output = "";
    }

    blanks();
    console.log(letters);
    document.onkeyup = function() {
        output = ""
        var userGuess = event.key;

        if (alphaKeys.indexOf(userGuess) >= 0){
        var forLoopChecker = function() {
            for (var i=0; i<currentWord.length; i++) {                
                if (userGuess == letters[i]){
                    display[i] = userGuess;   
                } output = output + display[i] + " ";         
            }                  
        }
        forLoopChecker();
        $("#currentWord").text(output);
        if (guessedLetters.indexOf(userGuess) >= 0){
            return;
        }
        if (letters.indexOf(userGuess) < 0){
            guessedLetters.push(userGuess);
            guessesLeft --;   
            $("#lettersGuessed").text(guessedLetters + ", ");   
            $("#guessesRemaining").text(guessesLeft);      
        }
        if (output.indexOf("_") < 0){
            console.log("YouWin!");
            wins ++;
            guessedLetters = [];
            guessesLeft = 8;
            currentWord= randomWords[Math.floor(Math.random()*randomWords.length)];
            wordLength= currentWord.length;
            letters = currentWord.split("");    
            $("#wins").text("Wins: " + wins);
            $("#lettersGuessed").text(guessedLetters);
            $("#guessesRemaining").text(guessesLeft);
            output = "";

            blanks();


        } else if (guessesLeft === 0){
            console.log("YouLose!");
            losses ++;
            guessedLetters = [];
            guessesLeft = 8;
            currentWord= randomWords[Math.floor(Math.random()*randomWords.length)];
            wordLength= currentWord.length;
            letters = currentWord.split("");            
            $("#losses").text("Losses: " + losses);
            $("#lettersGuessed").text(guessedLetters);
            $("#guessesRemaining").text(guessesLeft);
            output = "";

            blanks();
        }
        } else {
            //alert("That is not a valid key");
            }               

    }      
           
})
