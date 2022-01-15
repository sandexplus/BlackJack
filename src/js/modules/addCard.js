import { checkScore } from './checkScore';

function addCard(deck, hand, scoreSelector) {

    hand.push(deck[0]);
    deck.shift();

    checkScore(hand, scoreSelector);

}

export { addCard };