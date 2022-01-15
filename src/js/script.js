import { addCard } from './modules/addCard';
import { newRound } from './modules/newRound';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const yourHandOutput = document.querySelector('.game__your-hand'),
        dealerHandOutput = document.querySelector('.game__dealer-hand');

    const deck = [
        '2-s', '3-s', '4-s', '5-s', '6-s', '7-s', '8-s', '9-s', '10-s', 'j-s', 'q-s', 'k-s', 'a-s',
        '2-h', '3-h', '4-h', '5-h', '6-h', '7-h', '8-h', '9-h', '10-h', 'j-h', 'q-h', 'k-h', 'a-h',
        '2-c', '3-c', '4-c', '5-c', '6-c', '7-c', '8-c', '9-c', '10-c', 'j-c', 'q-c', 'k-c', 'a-c',
        '2-d', '3-d', '4-d', '5-d', '6-d', '7-d', '8-d', '9-d', '10-d', 'j-d', 'q-d', 'k-d', 'a-d'
    ];

    let yourHand = [],
        dealerHand = [],
        yourScore = 0,
        dealerScore = 0;


    newRound(deck, yourHand, dealerHand);

    const addCardBtn = document.querySelector('.game__add-card');
    addCardBtn.addEventListener('click', (e) => {
        e.preventDefault();

        addCard(deck, yourHand);

        yourHandOutput.textContent = yourHand;
        dealerHandOutput.textContent = dealerHand;

        console.log('deck: ' + deck);
    });

    const holdBtn = document.querySelector('.game__hold-card');
    holdBtn.addEventListener('click', (e) => {
        e.preventDefault();

        while (dealerScore < 17) {
            addCard(deck, dealerHand);
        }

    });

});