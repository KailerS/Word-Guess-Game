# Word-Guess-Game
array string split link on slack .length
var game = {
    wordBank: ["trout", "bellinger", "yelich", "pujols", "haniger", "goldschmidt", "molina"],
    wins: 0,
    remainingGuesses: 12,
    wordGenerator : function() {
        return this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
         
    },
    winsIncrements: function(){
        this.wins++
    } 
}
// console.log(game.wordGenerator());
var word = game.wordGenerator()
console.log(word)
console.log(game.wins)