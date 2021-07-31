/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [
            new Phrase('Alex'),
            new Phrase('Launchy'), 
            new Phrase('Hannah'),
            new Phrase('Beans are delicious'),
            new Phrase('Super cool beans')
        ]
        this.activePhrase = null;  
    }

    // Hides the start screen overlay, 
    // Calls the getRandomPhrase() method, 
    // Sets the activePhrase property with the chosen phrase. 
    // Adds that phrase to the board by calling the addPhraseToDisplay() method on the activePhrase property.
    startGame(){
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        console.log(this.activePhrase);
        this.activePhrase.addPhraseToDisplay(this.activePhrase);
    };

    // Returns a random phrase from the array.
    getRandomPhrase(){
        let randomNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNumber];
    };

    // handleInteraction
    /* 
    - Disables the selected letter’s onscreen keyboard button.
    - Checks to see if the button clicked by the player matches a letter in the phrase
    - If no match, add the 'wrong' CSS class to the selected letter's keyboard button and call the removeLife() method.
    - If match, add the 'chosen' CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. 
    - If the player has won the game, also call the gameOver() method. */

    handleInteraction(e){
        e.target.disabled = true;
        phrase.showMatchedLetter(e.target.textContent);
        console.log(e.target.textContent);
    };
}

const game = new Game();
game.startGame();

qwerty.addEventListener('click', (e) => {
    game.handleInteraction(e);
});
