var wordBank = ["trout", "bellinger", "yelich", "pujols", "haniger", "goldschmidt", "molina"];
var workingCharacters = ["a","b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
var currentWord = ["-","-"]
var wins = 0;
var remainingGuesses = 12;
var wordGenerator = wordBank[Math.floor(Math.random() * wordBank.length)];
var letter = wordGenerator[0]


document.onkeyup = function(event){  

    var userGuess = event.key;

    var wordGenerator = wordBank[Math.floor(Math.random() * wordBank.length)];

    if (workingCharacters.indexOf(userGuess) === -1 ){
       return alert("Enter a valid character")   
    }

    


}

console.log(wordGenerator);
console.log(letter)