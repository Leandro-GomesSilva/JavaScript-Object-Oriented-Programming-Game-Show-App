/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


 // Creating a new game object via the Game class and defining a variable "betweenGames" with false

const game = new Game();
let betweenGames = false;

 /**
  * Adding an Event Listener to the Start Game button. 
  * In the callback function, a short-circuit-evaluation of AND is used to call the function 'resetGameboard' if betweenGames is 'true' 
  * Finally, calls the startGame() method and sets betweenGames to 'true'
  */

const button = document.getElementById("btn__reset");
button.addEventListener('click', () => {
    
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

const allKeys = qwerty.getElementsByClassName("key");

document.addEventListener('keydown', (e) => {
    
    if (overlay.style.display === "none") {
        for (const key of allKeys) {
            if (key.innerText === e.key && key.disabled === false) {
                game.handleInteraction(key);
            }
        }
    }
}); 