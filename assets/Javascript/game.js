var wordBank = ["trout", "bellinger", "yelich", "pujols", "haniger", "goldschmidt", "molina"];
var workingCharacters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var wordPicked = wordBank[Math.floor(Math.random() * wordBank.length)];
var word = wordPicked.split("");
var answer = [];
for (var i = 0; i < wordPicked.length; i++){
    answer[i] = "-";
}
var wins = 0;
var remainingGuesses = 12;
var winsText = document.getElementById("winsText");
// var guessesLeft = document.getElementById("numberGuesses");
var currentWord = document.getElementById("currentWord");
currentWord.textContent = answer;
// guessesLeft.textContent = remainingGuesses;
var triedCharacters = [];
var badCharacters = document.getElementById("lettersGuessed");
badCharacters.textContent = triedCharacters;


document.onkeyup = function(event){  
    var userGuess = event.key;

    var guessesLeft = document.getElementById("numberGuesses");
    guessesLeft.textContent = remainingGuesses;

    function gameReset(){
        wordPicked;
        triedCharacters = [];
        remainingGuesses = 12;
    }




      
              
    if (workingCharacters.indexOf(userGuess) === -1 ){
        return alert("Enter a valid character");   
    }

    if (remainingGuesses === 0){
        gameReset()
        alert("Game Over! You ran out of guesses.")
    }


    for(var i = 0; i < word.length; i++){
        if (word[i] === userGuess){
                answer[i] = userGuess;
                currentWord.textContent = answer;
        }           
    }
        


    if (word.indexOf(userGuess) === -1){
        -- remainingGuesses;
        triedCharacters.push(userGuess);
        badCharacters.textContent = triedCharacters;
    }


        


    


    
}

console.log(wordPicked);
console.log(answer)
console.log(remainingGuesses)