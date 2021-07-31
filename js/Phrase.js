/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// Set a global variable letter to correspond to the user's letter choice. 
// Where does this code go?
let letter = '';
const qwerty = document.getElementById('qwerty');

qwerty.addEventListener('click', (e) => {
    if (e.target.className == 'key') {
        letter = e.target.textContent;
    }
    console.log(letter);
    return letter;
});

class Phrase {

    // Phrase constructor
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
        this.letters = this.phrase.split('');
    }

    // Adds letter placeholders to the display when the game starts
    addPhraseToDisplay(){
        let listElement = document.querySelector('#phrase ul'); 
        let html = '';
        console.log(this.letters);
        this.letters.forEach((letter) => {
           html += `<li class="hide letter ${letter}"></li>`
        });
        listElement.innerHTML = html;
    };

    // Checks to see if the letter selected by the player matches a letter in the phrase.
    checkLetter(letter){
        if (this.letters.includes(letter) ) {
            console.log(letter);
            return letter;
        } else {
            console.log('false');
            return false;
        }   
    }

    // Reveals the letter(s) on the board that match the player's selection.
    showMatchedLetter(letter){
        let match = this.checkLetter(letter);
        console.log(match);
        let matches = document.querySelectorAll(`.hide.letter.${match}`);
        console.log(matches);
        matches.forEach(x => x.className = `show letter ${letter}`);
    }
}

const phrase = new Phrase('Sarah');
phrase.addPhraseToDisplay();
phrase.showMatchedLetter('s');