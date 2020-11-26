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
    * Creates five phrase objects via the Phrase Class and stores these objects in an array of phrases
    * @return {array} An array of phrase objects to be used in the game
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
    * Selects random phrase from the phrases array property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomPhrase = Math.floor( Math.random() * this.phrases.length );
        return this.phrases[randomPhrase];
    }


    startGame() {
        

    }


    handleInteraction() {

        
    }

    removeLife() {

        
    }

    checkForWin() {

        
    }

    gameOver() {

        
    }
 }