import { addCard } from './modules/addCard';
import { newRound } from './modules/newRound';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const yourHandOutput = document.querySelector('.game__your-hand'),
        dealerHandOutput = document.querySelector('.game__dealer-hand'),
        yourScoreOutput = document.querySelector('.game__your-score'),
        dealerScoreOutput = document.querySelector('.game__dealer-score'),
        winner = document.querySelector('.game__winner');

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

    yourScoreOutput.textContent = `Your score: ${yourScore}`;
    dealerScoreOutput.textContent = `Dealer score: ${dealerScore}`;


    newRound(deck, yourHand, dealerHand, '.game__your-score', '.game__dealer-score');

    yourScore = +yourScoreOutput.textContent.replace('Score: ', '');
    dealerScore = +dealerScoreOutput.textContent.replace('Score: ', '');

    // Add card to your hand
    const addCardBtn = document.querySelector('.game__add-card');
    addCardBtn.addEventListener('click', (e) => {
        e.preventDefault();

        addCard(deck, yourHand, '.game__your-score');

        yourHandOutput.textContent = yourHand;
        yourScore = +yourScoreOutput.textContent.replace('Score: ', '');
        console.log('deck: ' + deck);
    });


    // Add card to dealer hand
    const holdBtn = document.querySelector('.game__hold');
    holdBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(dealerScore);
        while (dealerScore < 17) {

            addCard(deck, dealerHand, '.game__dealer-score');
            dealerScore = dealerScoreOutput.textContent.replace('Score: ', '');
        }

        dealerHandOutput.textContent = dealerHand;

        setTimeout(() => {
            if (dealerScore === 21) {
                winner.textContent = `Winner: Dealer`;
            } else if (dealerScore > 21) {
                if (yourScore > 21) {
                    winner.textContent = `Winner: Dealer`;
                } else {
                    winner.textContent = `Winner: You`;
                }
            } else if (dealerScore < 21) {
                if (yourScore > 21) {
                    winner.textContent = `Winner: Dealer`;
                } else {
                    if (dealerScore >= yourScore) {
                        winner.textContent = `Winner: Dealer`;
                    } else {
                        winner.textContent = `Winner: You`;
                    }
                }
            }

        }, 1000);

    });


    // Start new game
    const newGame = document.querySelector('.nav__new-game');
    newGame.addEventListener('click', (e) => {
        e.preventDefault();
        deck = [
            '2-s', '3-s', '4-s', '5-s', '6-s', '7-s', '8-s', '9-s', '10-s', 'j-s', 'q-s', 'k-s', 'a-s',
            '2-h', '3-h', '4-h', '5-h', '6-h', '7-h', '8-h', '9-h', '10-h', 'j-h', 'q-h', 'k-h', 'a-h',
            '2-c', '3-c', '4-c', '5-c', '6-c', '7-c', '8-c', '9-c', '10-c', 'j-c', 'q-c', 'k-c', 'a-c',
            '2-d', '3-d', '4-d', '5-d', '6-d', '7-d', '8-d', '9-d', '10-d', 'j-d', 'q-d', 'k-d', 'a-d'
        ];

        yourHand = [];
        dealerHand = [];
        yourScore = 0;
        dealerScore = 0;

        newRound(deck, yourHand, dealerHand, '.game__your-score', '.game__dealer-score');
        yourScore = +yourScoreOutput.textContent.replace('Score: ', '');
        dealerScore = +dealerScoreOutput.textContent.replace('Score: ', '');
        winner.textContent = `Winner: `;
    });

});