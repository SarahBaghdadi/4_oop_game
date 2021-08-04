/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    // Game constructor
    constructor(){
        this.missed = 0;
        this.phrases = [
            new Phrase('Oregano and radish stir fry'),
            new Phrase('Napolitana and vermicelli penne'), 
            new Phrase('Orange and cardamom mousse'),
            new Phrase('Bran and honey biscuits'),
            new Phrase('Chard and sweetcorn risotto')
        ]
        this.activePhrase = null;  
    }

    // startGame() Sets missed to 0, hides the start screen, calls getRandomPhrase() & addPhraseToDisplay()to choose a phrase and add it to the board
    startGame(){
        this.missed = 0;
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay(); 
        resetKeys();
    };

    // getRandomPhrase() Returns a random phrase from the array.
    getRandomPhrase(){
        let randomNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNumber];
    };

    // handleInteraction() Handles most of the game interaction:
    // - Disables a keyboard button when used. 
    // - If letter is a match, adds the 'chosen' class to the onscreen key, calls showMatchedLetter(), and calls checkForWin(). 
    // - If no match, adds the 'wrong' class, and calls removeLife(). 
    handleInteraction(letter){
        let key = document.querySelector(`.key.${letter}`);
        if (!key.disabled) {
            key.disabled = true;
            if (this.activePhrase.checkLetter(letter)) {
                key.classList.add('chosen');
                this.activePhrase.showMatchedLetter(letter);
                if (this.checkForWin()){
                    this.gameOver('win');
                }
            } else {
                key.classList.add('wrong');
                this.removeLife();
            };
        }
    };

    // removeLife() Removes a life from the board, updates missed integer, checks for loss.
    removeLife(){
        const removeHeart = document.querySelectorAll('.tries img')[this.missed];
        removeHeart.src = 'images/lostHeart.png';
        if (this.missed < 5) {
            this.missed ++;
        }
        if (this.missed == 5) {
            this.gameOver('loss');
        }
    };

    // checkForWin() Checks for win
    checkForWin(){
        if (document.querySelectorAll('.hide').length == 0) {
            return true;
        } else {
            return false;
        }
    };

    // gameOver Displays win or lose screen, resets the game: removes old phrase, resets onscreen key class names, replaces life hearts, set game object to undefined
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
        document.querySelector('#phrase ul').innerHTML = ''; 
        resetKeys(); 
        const replaceHeart = document.querySelectorAll('.tries img'); 
        replaceHeart.forEach(heart => heart.src = 'images/liveHeart.png'); 
        game = undefined; 
    };
}
