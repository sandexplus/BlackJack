import { shuffle } from './shuffle';
import { addCard } from './addCard';
import { drawCard } from './drawCard';
import { checkScore } from './checkScore';

function newRound(winnerSelector, newGameSelector, modalSelector, bjModalSelector, rewardSelector) {

    const winner = document.querySelector(winnerSelector),
        newGame = document.querySelector(newGameSelector),
        modal = document.querySelector(modalSelector),
        bjModal = document.querySelector(bjModalSelector),
        reward = document.querySelector(rewardSelector);

    let deck = [
        '10-s', 'a-s', 'a-h', '5-s', '6-s', '7-s', '8-s', '9-s', '2-s', 'j-s', 'q-s', 'k-s', '3-s',
        '2-h', '3-h', '4-h', '5-h', '6-h', '7-h', '8-h', '9-h', '10-h', 'j-h', 'q-h', 'k-h', '4-s',
        '2-c', '3-c', '4-c', '5-c', '6-c', '7-c', '8-c', '9-c', '10-c', 'j-c', 'q-c', 'k-c', 'a-c',
        '2-d', '3-d', '4-d', '5-d', '6-d', '7-d', '8-d', '9-d', '10-d', 'j-d', 'q-d', 'k-d', 'a-d'
    ];

    let yourHand = [],
        dealerHand = [];


    deck = shuffle(deck);
    localStorage.setItem('deck', JSON.stringify(deck));
    localStorage.setItem('yourHand', JSON.stringify(yourHand));
    localStorage.setItem('dealerHand', JSON.stringify(dealerHand));


    addCard('yourHand', '.btns__your-score');
    addCard('dealerHand', '.btns__dealer-score');
    addCard('yourHand', '.btns__your-score');
    addCard('dealerHand', '.btns__dealer-score');

    yourHand = JSON.parse(localStorage.getItem('yourHand'));
    yourHand.forEach(card => {
        drawCard('.game__your-hand', card);
    });

    dealerHand = JSON.parse(localStorage.getItem('dealerHand'));
    dealerHand.forEach((card, i) => {
        if (i === 1) {
            drawCard('.game__dealer-hand', card, true);
        } else {
            drawCard('.game__dealer-hand', card);
        }
    });

    if (+checkScore('yourHand', '.btns__your-score', false, false) === 21) {
        if (dealerHand[0].startsWith('a')) {
            bjModal.style.display = 'block';
        } else {
            winner.textContent = `Winner: You`;
            localStorage.setItem('bank', +localStorage.getItem('bank') + localStorage.getItem('bet') * 2.5);
            reward.textContent = `Your winnings are ${localStorage.getItem('bet')}$`;
            localStorage.setItem('bet', 0);
            newGame.style.boxShadow = '0px 0px 16px 20px rgba(255, 26, 26, 0.2)';
            setTimeout(() => {
                modal.style.display = 'block';
            }, 1000);
        }
    }
}

export { newRound };