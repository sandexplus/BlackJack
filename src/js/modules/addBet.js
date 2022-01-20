function addBet(btnSelector, inputSelector, bankSelector, newGameSelector) {
    const btn = document.querySelector(btnSelector),
        bet = document.querySelector(inputSelector),
        bankTitle = document.querySelector(bankSelector),
        newGame = document.querySelector(newGameSelector);

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

    });
}

export { addBet };