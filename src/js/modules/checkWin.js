function checkWin(yourScore, dealerScore, winnerSelector) {
    const winner = document.querySelector(winnerSelector);

    if (dealerScore === 21) {
        if (yourScore < 21) {
            winner.textContent = `Winner: Dealer`;
            localStorage.setItem('bet', 0);
        }
        if (yourScore === 21) {
            winner.textContent = `Draw`;
        }
        if (yourScore > 21) {
            winner.textContent = `Winner: Dealer`;
            localStorage.setItem('bet', 0);
        }
    }
    if (dealerScore > 21) {
        if (yourScore < 21) {
            winner.textContent = `Winner: You`;
            localStorage.setItem('bet', localStorage.getItem('bet') * 2);
        }
        if (yourScore === 21) {
            winner.textContent = `Winner: You`;
            localStorage.setItem('bet', localStorage.getItem('bet') * 2);
        }
        if (yourScore > 21) {
            winner.textContent = `Winner: Dealer`;
            localStorage.setItem('bet', 0);
        }
    }
    if (dealerScore < 21) {
        if (yourScore < 21) {
            if (yourScore < dealerScore) {
                winner.textContent = `Winner: Dealer`;
                localStorage.setItem('bet', 0);
            }
            if (yourScore === dealerScore) {
                winner.textContent = `Draw`;
            }
            if (yourScore > dealerScore) {
                winner.textContent = `Winner: You`;
                localStorage.setItem('bet', localStorage.getItem('bet') * 2);
            }
        }
        if (yourScore === 21) {
            winner.textContent = `Winner: You`;
            localStorage.setItem('bet', localStorage.getItem('bet') * 2);
        }
        if (yourScore > 21) {
            winner.textContent = `Winner: Dealer`;
            localStorage.setItem('bet', 0);
        }
    }
}

export { checkWin };