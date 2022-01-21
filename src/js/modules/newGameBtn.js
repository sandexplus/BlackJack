import { newRound } from './newRound';
import { newGame } from './newGame';

function newGameBtn(newGameSelector) {
    const newGameBtn = document.querySelector(newGameSelector);

    newGameBtn.addEventListener('click', (e) => {
        e.preventDefault();

        newGame('.nav__new-game', '.btns', '.game', '.bet', '.bet__bank', '.game__dealer-hand', '.game__your-hand');
    });
}

export { newGameBtn };