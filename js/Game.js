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
            new Phrase('Beans'),
            new Phrase('Super cool')
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
        this.activePhrase.addPhraseToDisplay(this.activePhrase);
    };

    // Returns a random phrase from the array.
    getRandomPhrase(){
        let randomNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNumber];
    };

    // handleInteraction - Disable the keyboard button.
    // If match, add the 'chosen' class, call showMatchedLetter(), and call checkForWin(). 
    // If no match, add the 'wrong' class, call removeLife().
    // If the player has won the game, also call the gameOver() method.

    handleInteraction(e){
        e.target.disabled = true;
        if (this.activePhrase.checkLetter(e.target.textContent)) {
            e.target.className = 'key chosen';
            this.activePhrase.showMatchedLetter(e.target.textContent);
            this.checkForWin();
        } else {
            e.target.className = 'key wrong';
            this.removeLife();
        };
    };

    removeLife(){
        const removeHeart = document.querySelectorAll('.tries img')[this.missed];
        removeHeart.src = 'images/lostHeart.png';
        this.missed ++;
        if (this.missed == 5) {
            this.gameOver('loss');
        }
    };

    checkForWin(){
        if (document.querySelectorAll('.hide').length == 0) {
            this.gameOver('win')
        }
    };

    gameOver(outcome){
        let overlay = document.getElementById('overlay')
        overlay.style.display = 'flex';
        if (outcome == 'win') {
            document.querySelector('h1').textContent = `You're a winner!`;
            overlay.className = 'win';
        } else {
            document.querySelector('h1').textContent = `Better luck next time!`;
            overlay.className = 'lose';
        }
    };
}
