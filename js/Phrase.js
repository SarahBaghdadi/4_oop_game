/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

    // Phrase constructor
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
        this.letters = this.phrase.split('');
    }

    // Add letter placeholders to the display when the game starts
    addPhraseToDisplay(){
        let listElement = document.querySelector('#phrase ul'); 
        let html = '';
        this.letters.forEach((letter) => {
           html += `<li class="hide letter ${letter}">${letter}</li>`
        });
        listElement.innerHTML = html;
    };

    // Check to see if the letter selected by the player matches a letter in the phrase.
    checkLetter(letter){
        if (this.letters.includes(letter) ) { 
            return letter;
        } else {
            return false;
        }
    }

    // Reveal the letter(s) on the board that match the player's selection.
    showMatchedLetter(letter){
        let matches = document.querySelectorAll(`.hide.letter.${letter}`);
        matches.forEach(match => match.className = `show letter ${letter}`);
    }
}
