// The list of players that can be randomly selected
const wordBank = ["trout", "bellinger", "yelich", "pujols", "haniger", "goldschmidt", "molina"];
// Catch to make sure the user types a letter to guess
const workingCharacters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
// Picks the word from the bank
let wordPicked = wordBank[Math.floor(Math.random() * wordBank.length)];
// Splits the chosen word into individual letters
let word = wordPicked.split("");
let answer = [];
for (let i = 0; i < wordPicked.length; i++){
    answer[i] = "-";
}
// Win counter
let wins = 0;
// Guesses left
let remainingGuesses = 12;
// Grabbing and storing values with their jQuery selector
const winsText = document.getElementById("winsText");
const currentWord = document.getElementById("currentWord");
const badCharacters = document.getElementById("lettersGuessed");
let displayName = document.getElementById("playerName")
let guessesLeft = document.getElementById("numberGuesses");
// Letters that have been guessd
let triedCharacters = [];
// Bring the word together on the spaces
currentWord.textContent = answer.join("");
// Print the letters that were not part of the word but guesses
badCharacters.textContent = triedCharacters;
// Print out the remaining guesses
guessesLeft.textContent = remainingGuesses;



document.onkeyup = event => {  
    const userGuess = event.key;

    const gameReset = () => {
        triedCharacters = [];
        remainingGuesses = 12;
        wordPicked = wordBank[Math.floor(Math.random() * wordBank.length)];
        word = wordPicked.split("");
        answer = [];
        for (let i = 0; i < wordPicked.length; i++){
            answer[i] = "-";
        }
        currentWord.textContent = answer.join("");
        guessesLeft.textContent = remainingGuesses;
        badCharacters.textContent = triedCharacters;
    }      
    
    if (workingCharacters.indexOf(userGuess) === -1 ){
        return alert("Enter a valid character");   
    }
    
    
    for(let i = 0; i < word.length; i++){
        if (word[i] === userGuess){
            answer[i] = userGuess;
            currentWord.textContent = answer.join("");
            
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
        document.getElementById("picture").src="./assets/Images/MLB.jpg";
    }


    if (answer.join("") === wordPicked){
        alert("Congratulations you've won!")
        currentWord.textContent = answer.join("");
        wins ++;
        winsText.textContent = "Wins: " + wins;
        displayName.textContent = "Last player guessed correctly: " + wordPicked;
        document.getElementById("picture").src="assets/Images/" + wordPicked + ".jpg";  
        gameReset();
    }
    
}

