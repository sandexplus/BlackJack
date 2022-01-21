import { newRound } from './newRound';

function addBet(btnSelector, inputSelector, bankSelector, newGameSelector, betModalSelector, gameSelector, btnsSelector) {
    const btn = document.querySelector(btnSelector),
        bet = document.querySelector(inputSelector),
        bankTitle = document.querySelector(bankSelector),
        newGame = document.querySelector(newGameSelector),
        betModal = document.querySelector(betModalSelector),
        gameSection = document.querySelector(gameSelector),
        btnsSection = document.querySelector(btnsSelector);


    btn.addEventListener('click', (e) => {
        e.preventDefault();

        let bank;
        if (localStorage.getItem('bank')) {
            bank = localStorage.getItem('bank');
        } else {
            bank = 1000;
        }
        bank -= +bet.value;
        newGame.click();
        localStorage.setItem('bank', bank);
        localStorage.setItem('bet', +localStorage.getItem('bet') + +bet.value);
        bankTitle.textContent = `Your bank: ${bank}$`;

        betModal.style.display = 'none';
        gameSection.style.display = 'block';
        btnsSection.style.display = 'block';
        newGame.style.boxShadow = '';
        newRound('.btns__your-score', '.btns__dealer-score', '.popup__winner', '.nav__new-game', '.popup');
    });
}

export { addBet };