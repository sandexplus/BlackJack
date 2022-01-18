import { addCard } from './modules/addCard';
import { checkScore } from './modules/checkScore';
import { newRound } from './modules/newRound';
import { drawCard } from './modules/drawCard';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const yourHandOutput = document.querySelector('.game__your-hand'),
        dealerHandOutput = document.querySelector('.game__dealer-hand'),
        yourScoreOutput = document.querySelector('.game__your-score'),
        dealerScoreOutput = document.querySelector('.game__dealer-score'),
        winner = document.querySelector('.game__winner'),
        saveGame = document.querySelector('.nav__save'),
        continueGame = document.querySelector('.nav__continue'),
        newGame = document.querySelector('.nav__new-game'),
        addCardBtn = document.querySelector('.game__add-card'),
        holdBtn = document.querySelector('.game__hold');

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
    addCardBtn.addEventListener('click', (e) => {
        e.preventDefault();

        addCard(deck, yourHand, '.game__your-score');
        while (yourHandOutput.firstChild) {
            yourHandOutput.removeChild(yourHandOutput.firstChild);
        }
        yourHand.forEach(card => {
            drawCard('.game__your-hand', card);
        });
        yourScore = +yourScoreOutput.textContent.replace('Score: ', '');
        console.log('deck: ' + deck);
    });


    // Add card to dealer hand
    holdBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(dealerScore);
        while (dealerScore < 17) {

            addCard(deck, dealerHand, '.game__dealer-score', true);
            dealerScore = dealerScoreOutput.textContent.replace('Score: ', '');
        }

        while (dealerHandOutput.firstChild) {
            dealerHandOutput.removeChild(dealerHandOutput.firstChild);
        }

        dealerHand.forEach((card, i) => {
            drawCard('.game__dealer-hand', card);
        });

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

        while (dealerHandOutput.firstChild) {
            dealerHandOutput.removeChild(dealerHandOutput.firstChild);
        }
        while (yourHandOutput.firstChild) {
            yourHandOutput.removeChild(yourHandOutput.firstChild);
        }
        newRound(deck, yourHand, dealerHand, '.game__your-score', '.game__dealer-score');
        yourScore = +yourScoreOutput.textContent.replace('Score: ', '');
        dealerScore = +dealerScoreOutput.textContent.replace('Score: ', '');
        winner.textContent = `Winner: `;
    });

    // Save game
    saveGame.addEventListener('click', (e) => {
        e.preventDefault();

        localStorage.setItem('deck', JSON.stringify(deck));
        localStorage.setItem('yourHand', JSON.stringify(yourHand));
        localStorage.setItem('dealerHand', JSON.stringify(dealerHand));
        localStorage.setItem('yourScore', JSON.stringify(yourScore));
        localStorage.setItem('dealerScore', JSON.stringify(dealerScore));
    });


    // Continue game
    continueGame.addEventListener('click', (e) => {
        e.preventDefault();

        deck = JSON.parse(localStorage.getItem('deck'));
        yourHand = JSON.parse(localStorage.getItem('yourHand'));
        dealerHand = JSON.parse(localStorage.getItem('dealerHand'));
        yourScore = JSON.parse(localStorage.getItem('yourScore'));
        dealerScore = JSON.parse(localStorage.getItem('dealerScore'));


        while (dealerHandOutput.firstChild) {
            dealerHandOutput.removeChild(dealerHandOutput.firstChild);
        }
        while (yourHandOutput.firstChild) {
            yourHandOutput.removeChild(yourHandOutput.firstChild);
        }

        dealerHand.forEach((card, i) => {
            if (i === 1) {
                drawCard('.game__dealer-hand', card, true);
            } else {
                drawCard('.game__dealer-hand', card);
            }
        });
        checkScore(dealerHand, '.game__dealer-score');

        yourHand.forEach(card => {
            drawCard('.game__your-hand', card);
        });
        checkScore(yourHand, '.game__your-score');
    });

});