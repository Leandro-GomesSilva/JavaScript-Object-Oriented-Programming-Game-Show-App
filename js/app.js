/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


 // Declaring global variables, which will be used across all classes and in app.js

 const button = document.getElementById("btn__reset");      // Button Element to start game
 const qwerty = document.getElementById("qwerty");          // Div element for the Virtual keyboard
 const allButtons = qwerty.getElementsByClassName("key");   // Live HTML Colection of all 'keys' of the Virtual Keyboard
 const overlay = document.getElementById("overlay");        // Div element for the start overlay
 let betweenGames = false;                                  // Extra variable that handles the transition between games

 
 // Creating a new variable game and setting it to an empty object

let game = {};

 // The h3 element below is used "to make the project my own" - more informations on the README.md file

const h3GameMode = document.createElement("h3");
document.getElementById("banner").appendChild(h3GameMode);


 /**
  * Adding an Event Listener to the Start Game button. 
  * In the callback function:
  *     1- Instantiates a new Game object via the Game class using the 'game' variable
  *     2- The 'h3' element is changed to indicate the single-player mode
  *     3- A short-circuit-evaluation of AND is used to call the method 'resetGameboard' if the global variable 'betweenGames' is 'true' 
  *     4- Finally, calls the startGame() method
  * 
  */

button.addEventListener('click', () => {
    
    game = new Game();
    h3GameMode.innerText = "Single-player mode";
    betweenGames && game.resetGameboard();
    game.startGame();
}); 

 /**
  * Adding an Event Listener to the Qwerty Keyboard using event delegation via the 'div' with ID "qwerty" 
  * In the callback function, it is checked if the element clicked is a button:
  *      If yes, the method 'handleInteraction' is called
  * 
  */

qwerty.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') {
        game.handleInteraction(e.target);
    }
});

 
 /*********** For extra credit ***********/

 /**
  * Adding keyboard functionality:
  *     1. Select all qwerty button elements
  *     2. Adds an event listener that listens for a 'keydown' event
  *     3. Loops through all qwerty button elements => compares its inner text to the pressed button on the physical keyboard and checks if the button element is NOT disabled
  *     4. For the matching button (in case it is NOT disabled), calls the 'handleInteraction' method passing the corresponding HTML button element as argument
  * 
  *     The steps 3 and 4 are surrounded by an 'if' statement that prevents these code lines from running,
  *     in case the game is not "active", i.e. the start screen overlay display property is not set to "none"
  * 
  */

document.addEventListener('keydown', (e) => {
    
    if (overlay.style.display === "none") {
        for (const button of allButtons) {
            if (button.innerText === e.key && button.disabled === false) {
                game.handleInteraction(button);
            }
        }
    }
}); 


/**
 * 
 * Making the project my own: Adding Multiplayer functionalities
 * 
 */

    // Adding a button to display the overlay for the multiplayer mode
const multiplayerOverlayButton = document.createElement("button");
multiplayerOverlayButton.id = "btn__multiplayer";
multiplayerOverlayButton.innerText = "Multiplayer";
multiplayerOverlayButton.style.width = "200px";
multiplayerOverlayButton.style.margin = "10px auto 0px";
overlay.appendChild(multiplayerOverlayButton);

    // Adding a Flexbox for the overlay of the multiplayer mode
const divMultiplayer = document.createElement("div");
divMultiplayer.className = "flex-container";
divMultiplayer.style.display = "none";
overlay.appendChild(divMultiplayer);

    // Adding a 'h3' element for the instructions message of the multiplayer overlay
const divMessage = document.createElement("h3");
divMessage.innerText = "Player 1 is now playing...";
divMessage.className = "flex-item";
divMultiplayer.appendChild(divMessage);

    // Adding the label for the input box for Player 1
const labelInputPlayer1 = document.createElement("label");
labelInputPlayer1.htmlFor = "PhrasePlayer1";
labelInputPlayer1.innerText = `Enter the phrase to be hunted below.\nCover the keyboard from Player 2.`;
labelInputPlayer1.className = "flex-item";
divMultiplayer.appendChild(labelInputPlayer1);

    // Adding the input box for Player 1, so Player 1 can enter their phrase, which will then be hunted by Player 2
const inputPlayer1 = document.createElement("input");
inputPlayer1.className = "flex-item";
inputPlayer1.type = "text";
inputPlayer1.id = "PhrasePlayer1";
divMultiplayer.appendChild(inputPlayer1);

    // Adding one more button, in order to start the multiplayer mode
const startMultiplayerButton = document.createElement("button");
startMultiplayerButton.id = "btn__startMultiplayer";
startMultiplayerButton.innerText = "Ready!";
startMultiplayerButton.style.width = "200px";
startMultiplayerButton.style.margin = "10px auto 0px";
divMultiplayer.appendChild(startMultiplayerButton);

 /**
  * Adding an Event Listener to the Multiplayer Overlay button
  * In the callback function the multiplayer overlay div is toggled between visible and invisible and the design of the button is changed accordingly
  * 
  */

multiplayerOverlayButton.addEventListener('click', () => {
    
    if (divMultiplayer.style.display === "none") {
        divMultiplayer.style.display = "inherit";
        multiplayerOverlayButton.className = "clicked";
    } else {
        divMultiplayer.style.display = "none";
        multiplayerOverlayButton.className = "";
    } 
});

 /**
  * Adding an Event Listener to the Start Multiplayer Game button, analog to the Start (Single-Player) Game Button
  * In the callback function:
  *     1- Instantiates a new Game object via the Game class using the 'game' variable 
  *     2- The 'h3' element is changed to indicate the multiplayer mode
  *     3- A short-circuit-evaluation of AND is used to call the method 'resetGameboard' if the global variable 'betweenGames' is 'true' 
  *     4- Finally, calls the startMultiplayerGame() method
  * 
  */

startMultiplayerButton.addEventListener('click', () => {
    
    game = new Game();
    h3GameMode.innerText = "Multiplayer mode - Player 2 is playing";
    betweenGames && game.resetGameboard();
    game.startMultiplayerGame();
});
 



