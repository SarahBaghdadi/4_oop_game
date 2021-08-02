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

    // Hide the start screen, choose a phrase, add the phrase to the board.
    startGame(){
        this.missed = 0;
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        let keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            key.className = `key ${key.textContent}`;
            key.disabled = false;
        }); 
    };

    // Returns a random phrase from the array.
    getRandomPhrase(){
        let randomNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNumber];
    };

    // Disable keyboard button when used. If match, add the 'chosen' class, showMatchedLetter(), and checkForWin(). If no match, add the 'wrong' class, call removeLife(). 

    handleInteraction(letter){
        let key = document.querySelector(`.key.${letter}`);
        key.disabled = true;
        if (this.activePhrase.checkLetter(letter)) {
            key.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);
            this.checkForWin();
        } else {
            key.classList.add('wrong');
            this.removeLife();
        };
    };

    // Remove a life from the board, update count, check for loss.
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

    // Check for win.
    checkForWin(){
        if (document.querySelectorAll('.hide').length == 0) {
            this.gameOver('win')
        }
    };

    // Display win or lose screen, reset game.
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
        const replaceHeart = document.querySelectorAll('.tries img');
        replaceHeart.forEach(x => x.src = 'images/liveHeart.png');
        game = undefined; 
    };
}
