/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


/**
 * Adding an Event Listener to the Start Game button
 * In the callback function, a new game object is created and the startGame() method is called
 * 
 */

const button = document.getElementById("btn__reset");
const game = new Game();
button.addEventListener('click', () => {
    game.startGame();
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
