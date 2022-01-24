function saveGameBtn(saveGameSelector) {
    const saveGame = document.querySelector(saveGameSelector);

    saveGame.addEventListener('click', () => {


        localStorage.setItem('savedDeck', localStorage.getItem('deck'));
        localStorage.setItem('savedYourHand', localStorage.getItem('yourHand'));
        localStorage.setItem('savedDealerHand', localStorage.getItem('dealerHand'));
        localStorage.setItem('savedBank', localStorage.getItem('bank'));
        localStorage.setItem('savedBet', localStorage.getItem('bet'));
    });
}

export { saveGameBtn };