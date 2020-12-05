/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor () {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
    * 'createPhrases' method
    * 
    *   1. Creates an array literal
    *   2. Create five Phrase objects (via the "Phrase Class") with pre-defined phrases and stores them in the array
    *   3. Returns the array of Phrase objects
    * 
    * @return {array} An array of phrase objects with pre-defined phrases
    * 
    */
    createPhrases() {
        const arrayPhrases = [];
        arrayPhrases[0] = new Phrase(`I love JavaScript`);
        arrayPhrases[1] = new Phrase(`Strive for greatness`);
        arrayPhrases[2] = new Phrase(`We are what we think`);
        arrayPhrases[3] = new Phrase(`Well begun is half done`);
        arrayPhrases[4] = new Phrase(`Failure is success in progress`);

        return arrayPhrases;
    }
    
    /**
    * 'getRandomPhrase' method
    * 
    *   1. Creates a random number that varies from 0 to the last index of the phrases array property (for this project, 0 to 4)
    *   2. Returns the phrase object with the index corresponding to the random number
    * 
    * @return {Object} Phrase object random selected
    * 
    */
    getRandomPhrase() {
        const randomIndex = Math.floor( Math.random() * this.phrases.length );
        return this.phrases[randomIndex];
    }

    /**
    * 'startGame' method
    * 
    *   1. Selects the DOM element with the 'overlay' ID
    *   2. Hides the overlay that covers the game
    *   3. Selects a random phrase using the getRandomPhrase method and stores it in the property activePhrase
    *   4. Display the random phrase in the display using the addPhraseToDisplay method
    * 
    */
    startGame() {
        const overlay = document.getElementById("overlay");
        overlay.style.display = "none";
        
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
    * 'handleInteraction' method
    * 
    *   1. Disables the clicked button
    *   2. If the 'checkLetter' method returns:
    *       a. True
    *           I - adds the class 'chosen' to the button element
    *           II - calls the "showMatchedLetter" method
    *           III - uses a short-circuit-evaluation of AND to call the method 'gameOver' with 'true' as parameter, in case the 'checkForWin' method returns TRUE
    *       b. False
    *           I - adds the class 'wrong' to the button element
    *           II - calls the 'removeLife' method
    * 
    * 
    * @param {HTML Button Element} button - The clicked HTML button element
    * 
    */
    handleInteraction(button) {
        
        button.disabled = true;

        if ( this.activePhrase.checkLetter(button.textContent) ) {

            button.classList.add("chosen");
            this.activePhrase.showMatchedLetter(button.textContent);
            this.checkForWin() && this.gameOver(true);

        } else {
            
            button.classList.add("wrong");
            this.removeLife();
        }
    }

    /**
    * 'removeLife' method
    * 
    *   1. Increments the property "missed" by 1
    *   2. Changes the full heart pic most to the right to an empty heart, by doing the following:
    *       a. Selects all 'li' elements under the 'div' with ID 'scoreboard'
    *       b. Selects the last 'img' element that is still a full heart
    *       c. Modifies the 'source' property of this 'img' element
    *   3. Uses a short-circuit-evaluation of AND to call the method 'gameOver' with 'false' as parameter, in case the number of 'li' elements (i.e. hearts) is equal to the number of misses
    * 
    */
    removeLife() {
        this.missed += 1;

        const liElements = document.getElementById("scoreboard").getElementsByTagName("li");
        const imgToModify = liElements[liElements.length - this.missed].firstElementChild;
        imgToModify.src = "images/lostHeart.png";

        liElements.length === this.missed && this.gameOver(false);
    }

    /**
    * 'checkForWin' method
    * 
    *   1. Selects the 'ul' element (the first element child of the DOM element with the 'phrase' ID)
    *   2. Selects all the elements with the class name 'hide' under the 'ul' element and checks the length of this HTML colection: 
    *       a. if the length is 0, there is no hiding letter left => the game has been won
    *       b. if the length is not 0, there are still DOM elements with the "hide" class => the game has not been won
    *   3. Returns true or false accordingly
    * 
    * @return {boolean} True or false, depending if the game has been won or not
    * 
    */
    checkForWin() {
        const ulElement = document.getElementById("phrase").firstElementChild;

        const gameWon = ulElement.getElementsByClassName("hide").length === 0 ? true : false;
        return gameWon;
    }

    /**
    * 'gameOver' method
    * 
    *   1. Displays the original start screen overlay by selecting the 'div' element with the 'overlay' ID
    *   2. Tests if the game has been won or lost:
    *       a. Selects the 'h1' element with the ID 'game-over-message' and changes its text accordingly to the game's outcome
    *       b. Changes the class of the 'div' element with the 'overlay' ID accordingly to the game's outcome
    * 
    * @param {boolean} gameWon - Boolean value representing if the game has been won or lost (true for won)
    * 
    */
    gameOver(gameWon) {
        const overlay = document.getElementById("overlay");
        overlay.style.display = "inherit";

        const h1 = document.getElementById("game-over-message");

        if (gameWon) {
            h1.innerText = "Congratulations, you nailed it!"
            overlay.classList.add("win");
            overlay.classList.remove("start");
        } else {
            h1.innerText = "Try again!"
            overlay.classList.add("lose");
            overlay.classList.remove("start");
        }        
    }
 }