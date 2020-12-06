/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


 // Creating a new game object via the Game class and defining a variable "betweenGames" with false

const game = new Game();
let betweenGames = false;

const h3GameMode = document.createElement("h3");
document.getElementById("banner").appendChild(h3GameMode);


 /**
  * Adding an Event Listener to the Start Game button. 
  * In the callback function, a short-circuit-evaluation of AND is used to call the function 'resetGameboard' if betweenGames is 'true' 
  * Finally, calls the startGame() method and sets betweenGames to 'true'
  */

const button = document.getElementById("btn__reset");
button.addEventListener('click', () => {
    
    h3GameMode.innerText = "Single-player mode";

    betweenGames && resetGameboard();
    game.startGame();
    betweenGames = true;
}); 

 /**
  * Adding an Event Listener to the Qwerty Keyboard using event delegation via the 'div' with ID "qwerty" 
  * In the callback function, it is checked if the element clicked is a button:
  *      If yes, the method 'handleInteraction' is called
  * 
  */

const qwerty = document.getElementById("qwerty");
qwerty.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') {
        game.handleInteraction(e.target);
    }
});

 /**
  * 'resetGameboard' function
  * 
  *   1. Selects the 'ul' element of the div with ID 'phrase' and removes everything inside it
  *   2. Selects all elements with the classes "key" and "chosen". For each of these elements, removes the class "chosen" and sets the property "disabled" to false
  *   3. Repeats the equivalent of the process in step 2 for all elements with the classes "key" and "wrong"
  *   4. Sets the property "missed" of the game of object back to 0
  *   5. Selects all 'li' elements corresponding to the heart pictures, selects the corresponding 'img' element and sets its source to the 'Live Heart' pic
  *   6. Sets the class of the element with the 'overlay' ID back to "start", so that the code at 'gameOver' method is kept consistent
  * 
  * @returns
  * 
  */

function resetGameboard() {
    
    const ul = document.getElementById("phrase").firstElementChild;
    ul.innerHTML = "";
    
    const chosenKeys = qwerty.querySelectorAll(".key.chosen");
    chosenKeys.forEach( key => {
        key.disabled = false;
        key.classList.remove("chosen");
    });

    const wrongKeys = qwerty.querySelectorAll(".key.wrong");
    wrongKeys.forEach( key => {
        key.disabled = false;
        key.classList.remove("wrong");
    });

    game.missed = 0;

    const allHeartElements = document.getElementById("scoreboard").getElementsByTagName("li");
    for (const liElement of allHeartElements) {
        const imgElement = liElement.firstElementChild;
        imgElement.src = "images/liveHeart.png";
    }
    
    document.getElementById("overlay").className = "start";

    return;
}

 /*********** For extra credit ***********/

 /**
  * Adding keyboard functionality:
  *     1. Select all qwerty button elements
  *     2. Adds an event listener that listens for a 'keydown' event
  *     3. Loops through all qwerty button elements => compares its inner text to the pressed button on the physical keyboard and checks if the button element is NOT disabled
  *     4. For the matching button (in case it is NOT disabled), calls the 'handleInteraction' method passing the corresponding HTML button element as parameter
  * 
  *     The steps 3 and 4 are surrounded by an 'if' statement that prevents these code lines from running,
  *     in case the game is not "active", i.e. the start screen overlay display property is not set to "none"
  * 
  */

const allButtons = qwerty.getElementsByClassName("key");

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
 * Making the project my own
 * 
 */

// Multiplayer functionalities

    // Adding a multiplayer button for the multiplayer mode
const multiplayerButton = document.createElement("button");
multiplayerButton.id = "btn__multiplayer";
multiplayerButton.innerText = "Multiplayer";
multiplayerButton.style.width = "200px";
multiplayerButton.style.margin = "10px auto 0px";
overlay.appendChild(multiplayerButton);

    // Multiplayer's div
const divMultiplayer = document.createElement("div");
divMultiplayer.className = "flex-container";
divMultiplayer.style.display = "none";
overlay.appendChild(divMultiplayer);

    // h3 element for the instruction message for the Multiplayer mode
const divMessage = document.createElement("h3");
divMessage.innerText = "Player 1 is now playing...";
divMessage.className = "flex-item";
divMultiplayer.appendChild(divMessage);

    // Label for the input box for Player 1
const labelInputPlayer1 = document.createElement("label");
labelInputPlayer1.htmlFor = "PhrasePlayer1";
labelInputPlayer1.innerText = `Enter the phrase to be hunted below.\nCover the keyboard from Player 2.`;
labelInputPlayer1.className = "flex-item";
divMultiplayer.appendChild(labelInputPlayer1);

    // Input box for Player 1
const inputPlayer1 = document.createElement("input");
inputPlayer1.className = "flex-item";
inputPlayer1.type = "text";
inputPlayer1.id = "PhrasePlayer1";
divMultiplayer.appendChild(inputPlayer1);

    // Adding one more button, to start multiplayer mode
const startMultiplayerButton = document.createElement("button");
startMultiplayerButton.id = "btn__startMultiplayer";
startMultiplayerButton.innerText = "Ready!";
startMultiplayerButton.style.width = "200px";
startMultiplayerButton.style.margin = "10px auto 0px";
divMultiplayer.appendChild(startMultiplayerButton);

    // Event listener for both buttons
multiplayerButton.addEventListener('click', () => {
    
    if (divMultiplayer.style.display === "none") {
        divMultiplayer.style.display = "inherit";
        multiplayerButton.className = "clicked";
    } else {
        divMultiplayer.style.display = "none";
        multiplayerButton.className = "";
    } 
})

startMultiplayerButton.addEventListener('click', () => {
    
    betweenGames && resetGameboard();
       
    h3GameMode.innerText = "Multiplayer mode - Player 2 is playing";
    overlay.style.display = "none";
    game.activePhrase = new Phrase( inputPlayer1.value.replace(/[^a-zA-Z\s]/g, "") );
    game.activePhrase.addPhraseToDisplay();

    betweenGames = true;

    divMultiplayer.style.display = "none";
    multiplayerButton.className = "";
    inputPlayer1.value = "";
});
 



