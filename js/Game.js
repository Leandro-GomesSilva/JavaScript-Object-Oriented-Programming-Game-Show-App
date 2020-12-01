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


    handleInteraction() {

        
    }

    removeLife() {

        
    }

    /**
    * 'checkForWin' method
    * 
    *   1. Selects the 'ul' element (the first element child of the DOM element with the 'phrase' ID)
    *   2. Selects all the elements with the class name 'hide'
    *   3. Checks the length of this HTML colection: if it is 0, there is no hiding letter leftis any class called 'hide' among the children of 'ul' and returns true or false accordingly
    * 
    * @return {boolean} True if the game was won, false if it was not
    * 
    */
    checkForWin() {
        const ulElement = document.getElementById("phrase").firstElementChild;

        if ( ulElement.getElementsByClassName("hide").length === 0) {
            return true;
        } else return false;            
    }

    gameOver() {

        
    }
 }