function takeBetBtn(takeBetSelector, newGameSelector, winnerSelector, modalSelector, thisModalSelector, addCardSelector, holdSelector, betSelector, rewardSelector) {
    const takeBet = document.querySelector(takeBetSelector);

    takeBet.addEventListener('click', (e) => {
        e.preventDefault();

        const newGame = document.querySelector(newGameSelector),
            winner = document.querySelector(winnerSelector),
            modal = document.querySelector(modalSelector),
            thisModal = document.querySelector(thisModalSelector),
            addCardBtn = document.querySelector(addCardSelector),
            holdBtn = document.querySelector(holdSelector),
            betBtn = document.querySelector(betSelector),
            reward = document.querySelector(rewardSelector);

        winner.textContent = `Winner: You`;
        localStorage.setItem('bank', +localStorage.getItem('bank') + localStorage.getItem('bet') * 2);
        reward.textContent = `Your winnings are ${localStorage.getItem('bet')}$`;
        localStorage.setItem('bet', 0);
        newGame.style.boxShadow = '0px 0px 16px 20px rgba(255, 26, 26, 0.2)';
        thisModal.style.display = 'none';
        addCardBtn.style.display = 'none';
        holdBtn.style.display = 'none';
        betBtn.style.display = 'none';
        setTimeout(() => {
            modal.style.display = 'block';
        }, 1000);
    });

}

export { takeBetBtn };