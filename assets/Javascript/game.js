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
var currentWord = document.getElementById("currentWord");
currentWord.textContent = answer;
var triedCharacters = [];
var badCharacters = document.getElementById("lettersGuessed");
badCharacters.textContent = triedCharacters;
var guessesLeft = document.getElementById("numberGuesses");
guessesLeft.textContent = remainingGuesses;





document.onkeyup = function(event){  
    var userGuess = event.key;

    function gameReset(){
        triedCharacters = [];
        remainingGuesses = 12;
        wordPicked = wordBank[Math.floor(Math.random() * wordBank.length)];
        word = wordPicked.split("");
        answer = [];
        for (var i = 0; i < wordPicked.length; i++){
            answer[i] = "-";
        }
        currentWord.textContent = answer;
        guessesLeft.textContent = remainingGuesses;
        badCharacters.textContent = triedCharacters;
    }      
    
    if (workingCharacters.indexOf(userGuess) === -1 ){
        return alert("Enter a valid character");   
    }
    
    
    for(var i = 0; i < word.length; i++){
        if (word[i] === userGuess){
            answer[i] = userGuess;
            currentWord.textContent = answer;
            
        }           
    }   
    
    if (word.indexOf(userGuess) === -1){
        triedCharacters.push(userGuess);
        badCharacters.textContent = triedCharacters;
        -- remainingGuesses;
        guessesLeft.textContent = remainingGuesses;
    
    } 
    
    
    if (remainingGuesses === 0){
        gameReset();
        alert("Game Over! You ran out of guesses.");
    }


    if (answer.join("") === wordPicked){
        alert("Congratulations you've won!")
        currentWord.textContent = answer;
        // gameReset()
    }

    
}

console.log(wordPicked);
console.log(answer);
console.log(word);