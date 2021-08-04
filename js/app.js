/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Global variables 
let game; 
let keys = document.querySelectorAll('.key'); 

// Reset key function - resets on-screen key button classes, removes chosen/wrong class names, adds letter, rests disabled to false 
const resetKeys = () => {keys.forEach(key => { 
    key.className = `key ${key.textContent}`;
    key.disabled = false;
})};

// Start button starts game - creates new game object & calls startGame()
document.querySelector('#btn__reset').addEventListener('click', (e) => {
    game = new Game(); 
    game.startGame();
});

// Clicking on an on-screen key button calls handleInteraction(), passing in the letter
qwerty.addEventListener('click', (e) => {
    let letter = e.target.textContent;
    if (e.target.classList.contains('key')) {
        game.handleInteraction(letter);
    }
});

// Pressing physical keyboard letter key calls handleInteraction(), passing in the letter
window.addEventListener("keydown", (e) => {
    if (/^[a-z]$/i.test(e.key) && game) {
        let letter = e.key;
        game.handleInteraction(letter);
        // Cancel the default action to avoid it being handled twice
        e.preventDefault();
    }
}, true);