/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game = new Game(); // This line.

// Add class names to buttons
let keys = document.querySelectorAll('.key');
keys.forEach(key => key.classList.add(`${key.textContent}`))

// Start button starts game.
document.querySelector('#btn__reset').addEventListener('click', (e) => {
    game.startGame();
});

// Clicking on a letter key calls handle interaction.
qwerty.addEventListener('click', (e) => {
    if (e.target.className == 'key') {
        console.log(e);
        game.handleInteraction(e);
    }
});

window.addEventListener("keydown", (e) => {
    console.log(e);
    //game.handleInteraction(e.key)
    // Cancel the default action to avoid it being handled twice
    e.preventDefault();
  }, true);