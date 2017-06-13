# CrystalsCollector

***HTML, CSS, Bootstrap, JavaScript and jQuery***

Here's how the app works:

There will be four crystals displayed as buttons on the page.

The player will be shown a random number at the start of the game.

When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

The game will hide this amount until the player clicks a crystal.
When they do click one, the player's score counter will update.
The player wins if their total score matches the random number from the beginning of the game.

The player loses if their score goes above the random number.

The game restarts whenever the player wins or loses.

When the game begins again:
* The player will see a new random number. 
* All the crystals will have four new hidden values. 
* The user's score (and score counter) will reset to zero.
* The app will show the number of games the player wins and loses. 

Game design notes:
* The random number shown at the start of the game will be between 19 - 120.
* Each crystal will have a random hidden value between 1 - 12.