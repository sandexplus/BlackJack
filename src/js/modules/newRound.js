import { shuffle } from './shuffle';
import { addCard } from './addCard';
import { drawCard } from './drawCard';
import { checkScore } from './checkScore';

function newRound(yourScoreSelector, dealerScoreSelector, winnerSelector, newGameSelector, modalSelector) {

    const winner = document.querySelector(winnerSelector),
        newGame = document.querySelector(newGameSelector),
        modal = document.querySelector(modalSelector);

    let deck = [
        '2-s', '3-s', '4-s', '5-s', '6-s', '7-s', '8-s', '9-s', '10-s', 'j-s', 'q-s', 'k-s', 'a-s',
        '2-h', '3-h', '4-h', '5-h', '6-h', '7-h', '8-h', '9-h', '10-h', 'j-h', 'q-h', 'k-h', 'a-h',
        '2-c', '3-c', '4-c', '5-c', '6-c', '7-c', '8-c', '9-c', '10-c', 'j-c', 'q-c', 'k-c', 'a-c',
        '2-d', '3-d', '4-d', '5-d', '6-d', '7-d', '8-d', '9-d', '10-d', 'j-d', 'q-d', 'k-d', 'a-d'
    ];

    let yourHand = [],
        dealerHand = [],
        yourScore = 0,
        dealerScore = 0;


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

    /* if (+checkScore('yourHand', '.btns__your-score', false, false) === 21) {
        if (dealerHand[0].endsWith('a')) {
            // Дать выбор продалжить играть или получить ставку х2
            // Но пока что в любом случае игрок выиграл
            localStorage.setItem('bank', +localStorage.getItem('bank') + localStorage.getItem('bet') * 2.5);
            localStorage.setItem('bet', 0);
            newGame.style.boxShadow = '0px 0px 16px 20px rgba(255, 26, 26, 0.2)';
            setTimeout(() => {
                winner.textContent = `Winner: You`;
                modal.style.display = 'block';
            }, 1000);
        } else {
            localStorage.setItem('bank', +localStorage.getItem('bank') + localStorage.getItem('bet') * 2.5);
            localStorage.setItem('bet', 0);
            newGame.style.boxShadow = '0px 0px 16px 20px rgba(255, 26, 26, 0.2)';
            setTimeout(() => {
                winner.textContent = `Winner: You`;
                modal.style.display = 'block';
            }, 1000);
        }
    } */
}

export { newRound };