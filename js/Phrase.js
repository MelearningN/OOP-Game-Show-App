/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
const parentNode = document.querySelector('#phrase')

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase()

    }

    addPhraseToDisplay(phrase) {
        let strings = [];
        let con = this.phrase.split('')


        for (let i = 0; i < phrase.length; i++) {
            strings[i] = document.createElement('li');
            if (con[i] === ' ') {
                strings[i].className = 'space'
            } else {
                strings[i].className = `hide letter ${
                    con[i]
                }`
            } strings[i].innerHTML = con[i]
            parentNode.children[0].appendChild(strings[i])
        }
    }

    /**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
    checkLetter(letter) {
        let result = this.phrase.includes(letter)
        if (result) {
            this.showMatchedLetter(letter)
            return result
        }


    };


    /**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
    showMatchedLetter(letter) {
        const hiddenElement = document.getElementsByTagName('li')
        for (let i = 0; i < this.phrase.length; i++) {
            if (hiddenElement[i].innerHTML == letter) {
                hiddenElement[i].className = `show letter ${i}`
            }
        }
        let string = [];

        /* for (let i = 0; i < phrase.length; i++) {
    className='show letter ${letter}'
    } */
    };
}
