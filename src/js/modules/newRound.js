import { shuffle } from './shuffle';
import { addCard } from './addCard';

function newRound(deck, yourHand, dealerHand, yourScoreSelector, dealerScoreSelector) {

    const yourHandOutput = document.querySelector('.game__your-hand'),
        dealerHandOutput = document.querySelector('.game__dealer-hand');

    deck = shuffle(deck);

    console.log(deck);

    addCard(deck, yourHand, yourScoreSelector);
    addCard(deck, yourHand, yourScoreSelector);
    addCard(deck, dealerHand, dealerScoreSelector);
    addCard(deck, dealerHand, dealerScoreSelector);

    yourHandOutput.textContent = yourHand;
    dealerHandOutput.textContent = dealerHand;
    console.log('deck: ' + deck);
}

export { newRound };