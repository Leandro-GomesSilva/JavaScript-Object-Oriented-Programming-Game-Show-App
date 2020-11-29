/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


/**
 * Adding an Event Listener to the Start Game button
 * In the callback function, a new game object is created and the startGame() method is called
 */

const button = document.getElementById("btn__reset");
const game = new Game();
button.addEventListener('click', () => {
    game.startGame();
}); 

