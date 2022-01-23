function checkWin(yourScore, dealerScore, winnerSelector, rewardSelector, yourHand = 'yourHand') {
    const winner = document.querySelector(winnerSelector),
        reward = document.querySelector(rewardSelector);

    reward.textContent = '';
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
            reward.textContent = `Your winnings are ${localStorage.getItem('bet')}$`;
        }
        if (yourScore === 21) {
            if (yourHand.length === 2) {
                winner.textContent = `Winner: You`;
                localStorage.setItem('bet', localStorage.getItem('bet') * 2.5);
                reward.textContent = `Your winnings are ${localStorage.getItem('bet')}$`;
            } else {
                winner.textContent = `Winner: You`;
                localStorage.setItem('bet', localStorage.getItem('bet') * 2);
                reward.textContent = `Your winnings are ${localStorage.getItem('bet')}$`;
            }
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
                reward.textContent = `Your winnings are ${localStorage.getItem('bet')}$`;
            }
        }
        if (yourScore === 21) {
            if (yourHand.length === 2) {
                winner.textContent = `Winner: You`;
                localStorage.setItem('bet', localStorage.getItem('bet') * 2.5);
                reward.textContent = `Your winnings are ${localStorage.getItem('bet')}$`;
            } else {
                winner.textContent = `Winner: You`;
                localStorage.setItem('bet', localStorage.getItem('bet') * 2);
                reward.textContent = `Your winnings are ${localStorage.getItem('bet')}$`;
            }
        }
        if (yourScore > 21) {
            winner.textContent = `Winner: Dealer`;
            localStorage.setItem('bet', 0);
        }
    }
}

export { checkWin };