var wordBank = ["trout", "bellinger", "yelich", "pujols", "haniger", "goldschmidt", "molina"];
var workingCharacters = ["a","b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var wordPicked = wordBank[Math.floor(Math.random() * wordBank.length)];
var answer = [];
for (var i = 0; i < wordPicked.length; i++){
    answer[i] = "-";
}
var wins = 0;
var remainingGuesses = 12;
var winsText = document.getElementById("winsText");
var guessesLeft = document.getElementById("numberGuesses");
var currentWord = document.getElementById("currentWord");
currentWord.textContent = answer;
guessesLeft.textContent = remainingGuesses;


document.onkeyup = function(event){  
    var userGuess = event.key;

    var wordPicked = wordBank[Math.floor(Math.random() * wordBank.length)];

    while (remainingGuesses > 0){

    

        
        var triedCharacters = [];
        var correctCharacters =[];

       
              
        if (workingCharacters.indexOf(userGuess) === -1 ){
            return alert("Enter a valid character");   
        }


        for(var i = 0; i < wordPicked.length; i++){
            if (wordPicked[i] === userGuess){
                answer[i] = userGuess;
                currentWord.textContent = answer
            }

        }
        


    


    }
}

console.log(wordPicked);
console.log(answer)
console.log(remainingGuesses)