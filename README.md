# JavaScript: Object-Oriented Programming Game-Show-App
 My 4th project on the Full Stack JavaScript Techdegree: OOP Game Show App. A browser-based game, where JavaScript and OOP (Object-Oriented Programming) were used.

This game is a Phrase Hunter game: the player has a limited number of tries to guess a random phrase that is displayed on the screen. 
The player can input their guesses via a virtual keyboard that is displayed on the screen or via the physical keyboard.

This project uses Object Oriented Programming. For this, the following Classes have been create, which have the following properties and methods:

1. Game Class
    a. Properties: missed, phrases, activePhrase
    b. Methods: createPhrases(), getRandomPhrase(), startGame(), handleInteraction(), removeLife(), checkForWin(), gameOver(), resetGameboard(), startMultiplayerGame()

2. Phrase Class
    a. Properties: phrase
    b. Methods: addPhraseToDisplay(), checkLetter(), showMatchedLetter()

For Exceeding Expectations:

I. Keyboard functionality

    An Event Listener was added to the app.js, which detects 'keydown' events when the physical keyboard is pressed and calls the handleInteraction() method with the corresponding pressed button as argument

II. Local Multiplayer functionalities

    1. Another button for a Multiplayer Mode was added. The button displays another overlay (for which the CSS Flexbox was used for design) that lets Player 1 enter whatever sentence they want.
    2. A new implemented method in the Game Class, startMultiplayerGame(), will be called and will do pretty much the same as the startGame() method does, but using the custom sentence of Player 1.
        a. There is a simple regex evaluation to prevent any other character then spaces and letters to be passed to the new Phrase object.
    3. The custom sentence is displayed on the screen and now is time for Player 2 (who is a friend that is in the same room and will use the same computer - Local Multiplayer) to guess it.

III. CSS changes
    
    1. Changing color for the CSS variables 'color-win' and 'color-lose' as well as the color in the class '.lose'
    2. Adding a new CSS rule for the selector 'h3', for some custom sentences that I add to the screen
    3. Adding CSS rules for the classes '.flex-container' and 'flex-item' - these classes are used for the multiplayer container
    4. Adding a CSS rule (#PhrasePlayer1) for the input field for Player 1 in the Multiplayer Mode
    5. Adding a CSS rule for '.clicked' that is activated when the Multiplayer Button is clicked - to give the user a visual hint that the mode is active
    6. Adding multiple hover and focus rules to the buttons:
        i. The buttons of the start screen grow and change their colors
        ii. The buttons of the virtual keyboard grow and change their colors
        iii. The buttons of the virtual keyboard that have already been cliked grow a little bit less then before and also change their color to other colors
        iv. The hearts translate vertically
