function addCard(deck, hand) {

    hand.push(deck[0]);
    deck.shift();

}

export { addCard };