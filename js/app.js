/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game = new Game(); // This line.

// Start button starts game.
document.querySelector('#btn__reset').addEventListener('click', (e) => {
    game.startGame();
});

// Clicking on a letter key calls handle interaction.
qwerty.addEventListener('click', (e) => {
    if (e.target.className == 'key') {
        game.handleInteraction(e);
    }
});
