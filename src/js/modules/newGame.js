function newGame(newGameSelector, btnsSelector, gameSelector, betPopupSelector, bankSelector, dealerHandSelector, yourHandSelector, winnerSelector, rewardSelector) {
    const newGameBtn = document.querySelector(newGameSelector),
        btns = document.querySelector(btnsSelector),
        game = document.querySelector(gameSelector),
        betPopup = document.querySelector(betPopupSelector),
        bank = document.querySelector(bankSelector),
        dealerHandOutput = document.querySelector(dealerHandSelector),
        yourHandOutput = document.querySelector(yourHandSelector),
        winner = document.querySelector(winnerSelector),
        reward = document.querySelector(rewardSelector);


    if (localStorage.getItem('bank')) {
        bank.textContent = `Your bank: ${localStorage.getItem('bank')}$`;
    } else {
        bank.textContent = `Your bank: 1000$`;
        localStorage.setItem('bank', 1000);
    }
    localStorage.setItem('bet', 0);
    newGameBtn.style.boxShadow = '0px 0px 16px 20px rgba(255, 26, 26, 0.2)';

    while (yourHandOutput.firstChild) {
        yourHandOutput.removeChild(yourHandOutput.firstChild);
    }
    while (dealerHandOutput.firstChild) {
        dealerHandOutput.removeChild(dealerHandOutput.firstChild);
    }

    winner.textContent = ``;
    reward.textContent = ``;

    btns.style.display = 'none';
    game.style.display = 'none';

    function newGameClick() {
        betPopup.style.display = 'block';
    }

    newGameBtn.addEventListener('click', newGameClick);
}

export { newGame };