/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
/* randomePhrase = game.getRandomPhrase()
const phrase = new Phrase(randomePhrase);
phrase.addPhraseToDisplay() */


document.getElementById('btn__reset').addEventListener('click', () => {
    game.startGame();
})

var buttons = document.querySelectorAll(".key");
for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function (event) {
        game.handleInteraction(event.target.textContent)    
})
}
