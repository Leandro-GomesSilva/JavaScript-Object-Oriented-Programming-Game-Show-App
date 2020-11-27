/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


/*
 * Adding an Event Listener to the Start Game button, which creates 
 * a new instance of the game Class and calls the startGame() method.
 */

const button = document.getElementById("btn__reset");
button.addEventListener('click', () => {
    const game = new Game();
    game.startGame();
}); 

