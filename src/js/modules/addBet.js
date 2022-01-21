import { newRound } from './newRound';

function addBet(btnSelector, inputSelector, bankSelector, newGameSelector, betModalSelector, gameSelector, btnsSelector, addCardSelector, holdSelector, betSelector) {
    const btn = document.querySelector(btnSelector),
        bankTitle = document.querySelector(bankSelector),
        newGame = document.querySelector(newGameSelector),
        betModal = document.querySelector(betModalSelector),
        gameSection = document.querySelector(gameSelector),
        btnsSection = document.querySelector(btnsSelector),
        addCardBtn = document.querySelector(addCardSelector),
        holdBtnBtn = document.querySelector(holdSelector),
        betBtn = document.querySelector(betSelector);

    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const bet = +document.querySelector(inputSelector).value;

        let bank;
        if (localStorage.getItem('bank')) {
            bank = localStorage.getItem('bank');
        } else {
            bank = 1000;
        }

        if (bank - bet < 0) {
            bankTitle.textContent = `You don't have enough money`;
            return;
        }
        bank -= bet;

        newGame.click();
        localStorage.setItem('bank', bank);
        localStorage.setItem('bet', +localStorage.getItem('bet') + bet);
        bankTitle.textContent = `Your bank: ${bank}$`;

        betModal.style.display = 'none';
        gameSection.style.display = 'block';
        btnsSection.style.display = 'block';
        addCardBtn.style.display = 'block';
        holdBtnBtn.style.display = 'block';
        betBtn.style.display = 'block';
        newGame.style.boxShadow = '';
        newRound('.popup__winner', '.nav__new-game', '.popup', '.black-jack', '.popup__reward');
    });
}

export { addBet };