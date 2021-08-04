/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

    // Phrase constructor
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
        this.letters = this.phrase.split('');
    }

    // addPhraseToDisplay() Adds letter placeholders to the display when the game starts
    addPhraseToDisplay(){
        let listElement = document.querySelector('#phrase ul'); 
        let html = '';
        this.letters.forEach((letter) => {
            if (letter !== ' ') {
                html += `<li class="hide letter ${letter}">${letter}</li>`
            } else {
                html += '<br>'
            }
        });
        listElement.innerHTML = html;
    };

    // checkLetter() Checks to see if the letter selected by the player matches a letter in the phrase
    checkLetter(letter){
        if (this.letters.includes(letter) ) { 
            return letter;
        } else {
            return false;
        }
    }

    // showMatchedLetter() Reveals the letter(s) on the board that match the player's selection
    // @param letter - the letter selected
    showMatchedLetter(letter){
        let matches = document.querySelectorAll(`.hide.letter.${letter}`);
        matches.forEach(match => match.className = `show letter ${letter}`);
    }
}
