function takeBetBtn(takeBetSelector, newGameSelector, winnerSelector, modalSelector, thisModalSelector, addCardSelector, holdSelector, rewardSelector, surrenderSelector) {
    const takeBet = document.querySelector(takeBetSelector);

    takeBet.addEventListener('click', () => {


        const newGame = document.querySelector(newGameSelector),
            winner = document.querySelector(winnerSelector),
            modal = document.querySelector(modalSelector),
            thisModal = document.querySelector(thisModalSelector),
            addCardBtn = document.querySelector(addCardSelector),
            holdBtn = document.querySelector(holdSelector),
            reward = document.querySelector(rewardSelector),
            surrenderBtn = document.querySelector(surrenderSelector);

        winner.textContent = `Winner: You`;
        localStorage.setItem('bank', +localStorage.getItem('bank') + localStorage.getItem('bet') * 2);
        reward.textContent = `Your winnings are ${localStorage.getItem('bet') * 2}$`;
        localStorage.setItem('bet', 0);
        newGame.style.boxShadow = '0px 0px 16px 20px rgba(255, 26, 26, 0.2)';
        thisModal.style.display = 'none';
        addCardBtn.style.display = 'none';
        holdBtn.style.display = 'none';
        surrenderBtn.style.display = `none`;
        setTimeout(() => {
            modal.style.display = 'block';
        }, 1000);
    });

}

export { takeBetBtn };