import { shuffle } from './shuffle';
import { addCard } from './addCard';
import { drawCard } from './drawCard';
import { checkScore } from './checkScore';

function newRound(winnerSelector, newGameSelector, modalSelector, bjModalSelector, rewardSelector, doubleBtnSelector, addCardBtnSelector, holdBtnSelector, surrenderBtnSelector, splitBtnSelector) {

    const winner = document.querySelector(winnerSelector),
        newGame = document.querySelector(newGameSelector),
        modal = document.querySelector(modalSelector),
        bjModal = document.querySelector(bjModalSelector),
        reward = document.querySelector(rewardSelector),
        doubleBtn = document.querySelector(doubleBtnSelector),
        addCardBtn = document.querySelector(addCardBtnSelector),
        holdBtn = document.querySelector(holdBtnSelector),
        surrenderBtn = document.querySelector(surrenderBtnSelector),
        splitBtn = document.querySelector(splitBtnSelector);

    winner.textContent = '';
    reward.textContent = '';

    if (document.querySelector('.winner2') || document.querySelector('.reward2')) {
        document.querySelector('.winner2').textContent = '';
        document.querySelector('.reward2').textContent = '';
    }

    let deck = [
        '2-s', '3-s', '4-h', '5-s', '6-s', '7-s', '8-s', '9-s', '10-s', 'j-s', 'q-s', 'k-s', 'a-s',
        '2-h', '3-h', '4-h', '5-h', '6-h', '7-h', '8-h', '9-h', '10-h', 'j-h', 'q-h', 'k-h', 'a-s',
        '2-c', '3-c', '4-c', '5-c', '6-c', '7-c', '8-c', '9-c', '10-c', 'j-c', 'q-c', 'k-c', 'a-c',
        '2-d', '3-d', '4-d', '5-d', '6-d', '7-d', '8-d', '9-d', '10-d', 'j-d', 'q-d', 'k-d', 'a-d'
    ];

    let tempdeck = [
        '2-s', '3-s', '4-h', '5-s', '6-s', '7-s', '8-s', '9-s', '10-s', 'j-s', 'q-s', 'k-s', 'a-s',
        '2-h', '3-h', '4-h', '5-h', '6-h', '7-h', '8-h', '9-h', '10-h', 'j-h', 'q-h', 'k-h', 'a-s',
        '2-c', '3-c', '4-c', '5-c', '6-c', '7-c', '8-c', '9-c', '10-c', 'j-c', 'q-c', 'k-c', 'a-c',
        '2-d', '3-d', '4-d', '5-d', '6-d', '7-d', '8-d', '9-d', '10-d', 'j-d', 'q-d', 'k-d', 'a-d'
    ];

    for (let i = 1; i < +localStorage.getItem('deckCount'); i++) {
        deck.push.apply(deck, tempdeck);
    }

    let yourHand = [],
        dealerHand = [];

    if (JSON.parse(localStorage.getItem('deck')).length < 20) {
        localStorage.setItem('deck', JSON.stringify(deck));
    }

    deck = shuffle(deck);

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

    const regex = /..$/;

    yourHand.forEach((card, i) => {
        if (card.replace(regex, '') === 'j') {
            yourHand[i] = card.replace('j', '10');
        }
        if (card.replace(regex, '') === 'q') {
            yourHand[i] = card.replace('q', '10');
        }
        if (card.replace(regex, '') === 'k') {
            yourHand[i] = card.replace('k', '10');
        }
        if (card.replace(regex, '') === 'a') {
            yourHand[i] = card.replace('a', '11');
        }
    });

    if (yourHand[0].replace(regex, '') !== yourHand[1].replace(regex, '')) {
        splitBtn.style.display = 'none';
    }


    if (+checkScore('yourHand', '.btns__your-score', false, false) === 21) {
        if (dealerHand[0].startsWith('a')) {
            bjModal.style.display = 'block';
        } else {
            winner.textContent = `Winner: You`;
            localStorage.setItem('bank', +localStorage.getItem('bank') + localStorage.getItem('bet') * 2.5);
            reward.textContent = `Your winnings are ${localStorage.getItem('bet') * 2.5}$`;
            localStorage.setItem('bet', 0);
            newGame.style.boxShadow = '0px 0px 16px 20px rgba(255, 26, 26, 0.2)';
            addCardBtn.style.display = 'none';
            holdBtn.style.display = 'none';
            surrenderBtn.style.display = 'none';
            splitBtn.style.display = 'none';
            setTimeout(() => {
                modal.style.display = 'block';
            }, 1000);
        }
    } else {
        if (+checkScore('yourHand', '.btns__your-score', false, false) < 12 && +checkScore('yourHand', '.btns__your-score', false, false) > 8) {
            alert('You can double your bet');
        }
        doubleBtn.style.display = 'block';
    }
}

export { newRound };