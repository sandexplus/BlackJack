import { modal } from './modules/modal';
import { range } from './modules/range';
import { addBet } from './modules/addBet';
import { newGame } from "./modules/newGame";
import { addCardBtn } from "./modules/addCardBtn";
import { holdBtn } from './modules/holdBtn';
import { newGameBtn } from './modules/newGameBtn';
import { resetBank } from './modules/resetBank';
import { saveGameBtn } from './modules/saveGameBtn';
import { continueGameBtn } from './modules/continueGameBtn';
import { takeBetBtn } from './modules/takeBetBtn';
import { playOnBtn } from './modules/playOnBtn';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    newGame('.nav__new-game', '.btns', '.game', '.bet', '.bet__bank', '.game__dealer-hand', '.game__your-hand', '.popup__winner', '.popup__reward');

    modal('.popup', '.popup__close');
    modal('.bet', '.bet__close');
    modal('.black-jack', '.black-jack__close');

    range('.bet__input', '.bet__your-bet');
    resetBank('.bet__reset', '.bet__bank');

    addBet('.bet__make-bet', '.bet__input', '.bet__bank', '.nav__new-game', '.bet', '.game', '.btns', '.btns__add-card', '.btns__hold', '.btns__bet');

    addCardBtn('.btns__your-score', '.game__your-hand', '.btns__hold', '.btns__add-card');
    holdBtn('.btns__dealer-score', '.btns__your-score', '.game__dealer-hand', '.bet__bank', '.nav__new-game', '.btns__add-card', '.popup', '.btns__hold', '.btns__bet');

    newGameBtn('.nav__new-game');
    saveGameBtn('.nav__save');
    continueGameBtn('.nav__continue', '.game__dealer-hand', '.game__your-hand');

    takeBetBtn('.black-jack__take-bet', '.nav__new-game', '.popup__winner', '.popup', '.black-jack', '.btns__add-card', '.btns__hold', '.btns__bet', '.popup__reward');
    playOnBtn('.black-jack__play-on', '.black-jack');
});