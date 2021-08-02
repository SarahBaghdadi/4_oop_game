/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Game variable 
let game; 

// Start button starts game
document.querySelector('#btn__reset').addEventListener('click', (e) => {
    game = new Game(); 
    game.startGame();
});

// Clicking on a letter key calls handleInteraction()
qwerty.addEventListener('click', (e) => {
    let letter = e.target.textContent;
    if (e.target.classList.contains('key')) {
        game.handleInteraction(letter);
    }
});

// Pressing a keyboard letter key calls handleInteraction()
window.addEventListener("keydown", (e) => {
    if (/^[a-z]$/i.test(e.key) && game) {
        let letter = e.key;
        game.handleInteraction(letter);
        // Cancel the default action to avoid it being handled twice
        e.preventDefault();
    }
}, true);