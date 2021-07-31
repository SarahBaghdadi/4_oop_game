/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game = new Game();

document.querySelector('#btn__reset').addEventListener('click', (e) => {
    game.startGame();
});

qwerty.addEventListener('click', (e) => {
    if (e.target.className == 'key') {
        game.handleInteraction(e);
    }
});
