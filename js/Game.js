/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {

    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases()
        this.activePhrase = null;
    }
    getRandomPhrase() {
        var randomNumber = Math.floor(Math.random() * data.length)
        return data[randomNumber]
    }

    createPhrases() {

        let phares = []
        for (let i = 0; i < 3; i++) {
            let phrase = new Phrase(data[i])
            phares.push(phrase)
        }
        return phares
    }

    startGame() {
        const ul=document.getElementById('phrase').children[0]
        console.log('bhaji', ul)
        while (ul.firstChild) {
            ul.removeChild(ul.lastChild);
        }
        this.missed = 0;
        const livess = document.getElementsByTagName('img')
        for(let i=0; i<livess.length; i++){
            livess[i].setAttribute('src', 'images/liveHeart.png')
        }
        const some = document.getElementsByTagName('button')
         for (let i = 0; i < some.length; i++) {
            some[i].className = 'key'
            some[i].disabled = false
            some[i].removeAttribute('style')
        }
        console.log('some', some)
        document.getElementById('overlay').style.display = 'none'
        this.activePhrase = this.getRandomPhrase()
        let phrase = new Phrase(this.activePhrase)
        phrase.addPhraseToDisplay(this.activePhrase)
    }
    handleInteraction(button) {
        const some = document.getElementsByClassName('key')
        console.log('some', some)
        let phrase = new Phrase(this.activePhrase)
        if (phrase.checkLetter(button)) {
            for (let i = 0; i < some.length; i++) {
                if (some[i].textContent == button) {
                    some[i].disabled = true
                    some[i].setAttribute('style', 'cursor:not-allowed')
                    some[i].className = 'chosen'
                }
            }
            this.checkForWin()
        } else {
            for (let i = 0; i < some.length; i++) {
                console.log('heheheh', some[i])
                if (some[i].textContent == button) {
                    some[i].disabled = true
                    some[i].setAttribute('style', 'cursor:not-allowed')
                    some[i].className = 'wrong'
                }
            }
            this.removeLife()
        }
    }


    /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
    checkForWin() {
        const hiddenElement = document.getElementsByTagName('li')
        for (let i = 0; i < this.activePhrase.length; i++) {
            if (hiddenElement[i].className.includes('hide')) {
                return
            }
        }
        this.gameOver('Great job!', 'win');
    };

    /**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
    removeLife() {
        const lives = document.getElementsByTagName('img')[this.missed]
        lives.setAttribute('src', 'images/lostHeart.png')
        this.missed ++;
        if (this.missed == 5) {
            this.gameOver('Sorry better luck next time', 'lose');
        }
    };


    /**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
    gameOver(gameWon, modifyClass) {
        document.getElementById('overlay').style.display = ''
        document.getElementById('overlay').className = modifyClass
        document.querySelector('#game-over-message').innerHTML = gameWon
    };
}
