import { checkScore } from './checkScore';

function addCard(deck, hand, scoreSelector, hold) {

    hand.push(deck[0]);
    deck.shift();

    checkScore(hand, scoreSelector, hold);

}

export { addCard };