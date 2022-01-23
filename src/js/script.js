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
import { surrenderBtn } from './modules/surrenderBtn';
import { doubleBtn } from './modules/doubleBtn';
import { splitBtn } from './modules/splitBtn';
import { holdSplitBtn } from './modules/holdSplitBtn';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    newGame('.nav__new-game', '.btns', '.game', '.bet', '.bet__bank', '.game__dealer-hand', '.game__your-hand', '.popup__winner', '.popup__reward');

    modal('.popup', '.popup__close');
    modal('.bet', '.bet__close');
    modal('.black-jack', '.black-jack__close');

    range('.bet__input', '.bet__your-bet');
    resetBank('.bet__reset', '.bet__bank');

    addBet('.bet__make-bet', '.bet__input', '.bet__bank', '.nav__new-game', '.bet', '.game', '.btns', '.btns__add-card', '.btns__hold', '.btns__surrender', '.btns__split', '.split-btns', '.game__second-hand');

    addCardBtn('.btns__your-score', '.game__your-hand', '.btns__hold', '.btns__add-card', '.btns__double');
    holdBtn('.btns__dealer-score', '.btns__your-score', '.game__dealer-hand', '.bet__bank', '.nav__new-game', '.btns__add-card', '.popup', '.btns__hold', '.btns__surrender', '.btns__double', '.btns__split');


    // Split btns
    addCardBtn('.btns__your-score', '.game__your-hand', '.hold-1', '.add-card-1', '.btns__double', true);
    addCardBtn('.btns__your-score-2', '.game__your-hand-2', '.hold-2', '.add-card-2', '.btns__double', true);

    holdSplitBtn('.btns__dealer-score', '.btns__your-score', '.game__dealer-hand', '.bet__bank', '.nav__new-game', '.add-card-1', '.popup', '.hold-1', '.btns__surrender', '.btns__double');

    holdSplitBtn('.btns__dealer-score', '.btns__your-score-2', '.game__dealer-hand', '.bet__bank', '.nav__new-game', '.add-card-2', '.popup', '.hold-2', '.btns__surrender', '.btns__double');




    surrenderBtn('.btns__surrender', '.popup__reward', '.popup__winner', '.popup', '.btns__add-card', '.btns__hold', '.nav__new-game', '.btns__double');
    doubleBtn('.btns__double', '.btns__add-card', '.btns__hold');
    splitBtn('.btns__split', '.btns__double', '.btns__surrender', '.btns__add-card', '.btns__hold', '.add-card-1', '.hold-1', '.add-card-2', '.hold-2', '.split-btns', '.game__your-hand', '.game__your-hand-2', '.game__second-hand');

    newGameBtn('.nav__new-game');
    saveGameBtn('.nav__save');
    continueGameBtn('.nav__continue', '.game__dealer-hand', '.game__your-hand');

    takeBetBtn('.black-jack__take-bet', '.nav__new-game', '.popup__winner', '.popup', '.black-jack', '.btns__add-card', '.btns__hold', '.popup__reward', '.btns__surrender');
    playOnBtn('.black-jack__play-on', '.black-jack', '.btns__hold');
});