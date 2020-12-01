/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }


    /**
    * 'addPhraseToDisplay' method
    * 
    *   1. Selects the DOM element with the "phrase" ID
    *   2. Selects its first child, the 'ul' element
    *   3. Splits the phrase in this class to single characters
    *   4. Iterate through the characters and creates the corresponding 'li' elements
    *   4. Appends the li elements to the 'ul' that was selected in the step 2
    * 
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

    /**
    * 'checkLetter' method
    * 
    *   1. Uses the spread operator to split the phrase property into single chars
    *   2. Uses the 'includes' method to check if 'letter' is in the phrase and returns true or false
    * 
    * @param {string} letter - The letter to be checked
    * @return {boolean} True or false
    * 
    */
    checkLetter(letter) {
        return [...this.phrase].includes(letter);
    }

    /**
    * 'showMatchedLetter' method
    * 
    *   1. Selects all DOM elements with the class name that matches the letter
    *   2. Replaces the 'hide' class name with the 'show' class for each DOM element selected
    * 
    * @param {string} letter - The letter to be displayed
    * 
    */   
    showMatchedLetter(letter) {      
        const liElements = document.getElementsByClassName(`letter ${letter}`);
        
        for (const element of liElements) {
            element.classList.add("show");
            element.classList.remove("hide");
        };
    }

 }