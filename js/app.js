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