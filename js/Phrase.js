/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


 class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
        

    }


    /**
    * Displays phrase on the screen
    */
    addPhraseToDisplay() {
        const divPhrase = document.getElementById("phrase");
        const ul = divPhrase.firstElementChild;
        
        const phraseIntoChars = [...this.phrase];

        phraseIntoChars.forEach( char => {
            const li = document.createElement('li');
            li.innerHTML = char;
            li.className = char === ` ` ? `space` : `hide letter ${char}`;
            ul.appendChild(li);
        });
    }

    checkLetter() {


    }

    showMatchedLetter() {

        
    }

 }