const wordBank = ["trout", "bellinger", "yelich", "pujols", "haniger", "goldschmidt", "molina"];
const workingCharacters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
let wordPicked = wordBank[Math.floor(Math.random() * wordBank.length)];
let word = wordPicked.split("");
let answer = [];
for (let i = 0; i < wordPicked.length; i++){
    answer[i] = "-";
}
let wins = 0;
let remainingGuesses = 12;
const winsText = document.getElementById("winsText");
const currentWord = document.getElementById("currentWord");
currentWord.textContent = answer.join("");
let triedCharacters = [];
const badCharacters = document.getElementById("lettersGuessed");
badCharacters.textContent = triedCharacters;
let guessesLeft = document.getElementById("numberGuesses");
guessesLeft.textContent = remainingGuesses;
let displayName = document.getElementById("playerName")



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

