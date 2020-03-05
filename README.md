# Word-Guess-Game [Deployed Version](https://kailers.github.io/Word-Guess-Game/)

A game that lets users guess from a predetermined list of current MLB players. It uses the keys that users press and checks them against the word in play. When a letter is guessed it goes either into the word or a list of letters already guessed. When the user has zero guesses left it starts over and selects a new word. When the correct player's last name is guessed their picture will be displayed.

## Deployment 
This app is deployed on GitHub Pages.
1. After pushing all changes to the master branch navigate to the settings tab.
1. Scroll near the bottom of the page to the GitHub pages section.
1. Select the source branch as the master branch.
1. Wait until it is deployed.
1. Now you can follow the link to the site.

## Installs
No additional installs need to be made to run this app.

## Screenshots

This is the screen you will see when the page first loads:

![Starting Screen](/assets/Images/startingscreen.png)

If any keyboard button is pressed that is not a letter an alert will pop up:

![Invalid button](/assets/Images/invalidinput.png)

When you guess letters correct ones will fill in the blanks and wrong ones will go in the word bank. Also wrong answers will deplete the remaining guesses.

![Example Guesses](/assets/Images/guesses.png)

When you guess the player correctly their name and picture will be displayed. Also the win counter increases and a new word is selected:

![Win](/assets/Images/win.png)

When you lose an alert pops up and a new word is selected with the default MLB logo re appearing after closing the alert:

![loss](/assets/Images/loss.png)

![After alert closes loss scren](/assets/Images/loss2.png)

## Built With 
* HTML5
* JavaScript 
* CSS3
