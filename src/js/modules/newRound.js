import { shuffle } from './shuffle';
import { addCard } from './addCard';
import { drawCard } from './drawCard';

function newRound(deck, yourHand, dealerHand, yourScoreSelector, dealerScoreSelector) {

    deck = shuffle(deck);

    console.log(deck);

    addCard(deck, yourHand, yourScoreSelector);
    addCard(deck, yourHand, yourScoreSelector);
    addCard(deck, dealerHand, dealerScoreSelector);
    addCard(deck, dealerHand, dealerScoreSelector);

    yourHand.forEach(card => {
        drawCard('.game__your-hand', card);
    });

    dealerHand.forEach((card, i) => {
        if (i === 1) {
            drawCard('.game__dealer-hand', card, true);
        } else {
            drawCard('.game__dealer-hand', card);
        }
    });
    console.log('deck: ' + deck);
}

export { newRound };