import { checkScore } from './checkScore';

function addCard(handLS, scoreSelector, hold) {
    const deck = JSON.parse(localStorage.getItem('deck')),
        hand = JSON.parse(localStorage.getItem(handLS));

    hand.push(deck[0]);
    deck.shift();

    localStorage.setItem('deck', JSON.stringify(deck));
    localStorage.setItem(handLS, JSON.stringify(hand));

    checkScore(handLS, scoreSelector, hold);

}

export { addCard };