function drawCard(parentSelector, cardTile, hidden = false) {
    const cardBorder = document.createElement('div'),
        cards = document.querySelector(parentSelector),
        suit = document.createElement('img'),
        power = document.createElement('div');

    cardBorder.classList.add('game__card');
    suit.classList.add('game__suit');
    power.classList.add('game__power');
    cardBorder.appendChild(suit);
    cardBorder.appendChild(power);
    if (hidden) {
        cardBorder.classList.add('game__card-hidden');
    }

    if (cardTile.endsWith('s')) {
        suit.src = '../assets/img/spades.svg';
        power.textContent = cardTile.replace(/..$/, '');
    }
    if (cardTile.endsWith('d')) {
        suit.src = '../assets/img/diamond.svg';
        power.textContent = cardTile.replace(/..$/, '');
    }
    if (cardTile.endsWith('c')) {
        suit.src = '../assets/img/clubs.svg';
        power.textContent = cardTile.replace(/..$/, '');
    }
    if (cardTile.endsWith('h')) {
        suit.src = '../assets/img/heart.svg';
        power.textContent = cardTile.replace(/..$/, '');
    }

    cards.appendChild(cardBorder);

}

export { drawCard };