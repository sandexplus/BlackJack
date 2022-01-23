import { checkScore } from './checkScore';
import { addCard } from './addCard';
import { drawCard } from './drawCard';
import { checkWin } from './checkWin';

function holdSplitBtn(dealerScoreSelector, yourScoreSelector, dealerHandSelector, bankSelector, newGameSelector, addCardBtnSelector, modalSelector, holdBtnSelector, surrenderSelector, doubleBtnSelector, winnerSelector = '.popup__winner', rewardSelector = '.popup__reward') {
    function holdClick() {
        const dealerScoreOutput = document.querySelector(dealerScoreSelector),
            dealerHandOutput = document.querySelector(dealerHandSelector),
            bank = document.querySelector(bankSelector),
            newGame = document.querySelector(newGameSelector),
            addCardBtn = document.querySelector(addCardBtnSelector),
            surrenderBtn = document.querySelector(surrenderSelector),
            modal = document.querySelector(modalSelector),
            yourScore = +document.querySelector(yourScoreSelector).textContent.replace('Your score: ', '').replace('Dealer score: ', ''),
            doubleBtn = document.querySelector(doubleBtnSelector);
        doubleBtn.style.display = 'none';
        let dealerScore = checkScore('dealerHand', '.btns__dealer-score', true, false);
        localStorage.setItem('holdCount', +localStorage.getItem('holdCount') + 1);

        localStorage.setItem(yourScoreSelector, +yourScore);

        if (localStorage.getItem('holdCount') < 2) {
            return;
        }

        while (dealerScore < 17) {

            addCard('dealerHand', '.btns__dealer-score', true);
            dealerScore = +dealerScoreOutput.textContent.replace('Dealer score: ', '');
        }

        dealerScoreOutput.textContent = `Dealer score: ${dealerScore}`;

        while (dealerHandOutput.firstChild) {
            dealerHandOutput.removeChild(dealerHandOutput.firstChild);
        }

        const dealerHand = JSON.parse(localStorage.getItem('dealerHand'));
        dealerHand.forEach(card => {
            drawCard('.game__dealer-hand', card);
        });


        let score1 = localStorage.getItem('.btns__your-score'),
            score2 = localStorage.getItem('.btns__your-score-2'),
            bet = localStorage.getItem('bet');

        checkWin(score1, dealerScore, winnerSelector, rewardSelector, 'yourHand');
        localStorage.setItem('bank', Math.floor(+localStorage.getItem('bank') + +bet));
        localStorage.setItem('bet', bet);


        const winner2 = document.createElement('div'),
            reward2 = document.createElement('div');
        winner2.classList.add('popup__winner', 'winner2');
        reward2.classList.add('popup__reward', 'reward2');
        document.querySelector('.popup__wrapper').appendChild(winner2);
        document.querySelector('.popup__wrapper').appendChild(reward2);

        checkWin(score2, dealerScore, '.winner2', '.reward2', 'yourHand2');


        localStorage.setItem('bank', Math.floor(+localStorage.getItem('bank') + +localStorage.getItem('bet')));
        localStorage.setItem('bet', 0);

        bank.textContent = `Your bank: ${localStorage.getItem('bank')}$`;
        newGame.style.boxShadow = '0px 0px 16px 20px rgba(255, 26, 26, 0.2)';
        addCardBtn.style.display = 'none';
        holdBtnBtn.style.display = 'none';
        surrenderBtn.style.display = 'none';
        document.querySelector('.hold-2').style.display = 'none';
        document.querySelector('.add-card-2').style.display = 'none';
        setTimeout(() => {
            modal.style.display = 'block';
        }, 1000);
    }

    const holdBtnBtn = document.querySelector(holdBtnSelector);
    holdBtnBtn.addEventListener('click', holdClick);
}

export { holdSplitBtn };