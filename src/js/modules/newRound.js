import { shuffle } from './shuffle';
import { addCard } from './addCard';

function newRound(deck, yourHand, dealerHand) {

    const yourHandOutput = document.querySelector('.game__your-hand'),
        dealerHandOutput = document.querySelector('.game__dealer-hand');

    deck = shuffle(deck);

    console.log(deck);

    addCard(deck, yourHand);
    addCard(deck, yourHand);
    addCard(deck, dealerHand);
    addCard(deck, dealerHand);

    yourHandOutput.textContent = yourHand;
    dealerHandOutput.textContent = dealerHand;
    console.log('deck: ' + deck);
}

export { newRound };