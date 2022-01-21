import { newRound } from './newRound';
import { newGame } from './newGame';

function newGameBtn(newGameSelector, dealerHandSelector, yourHandSelector, dealerScoreSelector, yourScoreSelector) {
    const newGameBtn = document.querySelector(newGameSelector);

    newGameBtn.addEventListener('click', (e) => {
        e.preventDefault();

        /* const dealerHandOutput = document.querySelector(dealerHandSelector),
            yourHandOutput = document.querySelector(yourHandSelector),
            dealerScoreOutput = document.querySelector(dealerScoreSelector),
            yourScoreOutput = document.querySelector(yourScoreSelector);

        let yourScore = 0,
            dealerScore = 0;

        while (dealerHandOutput.firstChild) {
            dealerHandOutput.removeChild(dealerHandOutput.firstChild);
        }
        while (yourHandOutput.firstChild) {
            yourHandOutput.removeChild(yourHandOutput.firstChild);
        }
        newRound('.btns__your-score', '.btns__dealer-score', '.popup__winner', '.nav__new-game', '.popup');
        yourScore = +yourScoreOutput.textContent.replace('Your score: ', '');
        dealerScore = +dealerScoreOutput.textContent.replace('Dealer score: ', '');
        newGame.style.boxShadow = '';
        localStorage.setItem('bet', 0); */

        newGame('.nav__new-game', '.btns', '.game', '.bet', '.bet__bank', '.game__dealer-hand', '.game__your-hand');
    });
}

export { newGameBtn };