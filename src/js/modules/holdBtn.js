import { checkScore } from './checkScore';
import { addCard } from './addCard';
import { drawCard } from './drawCard';
import { checkWin } from './checkWin';

function holdBtn(dealerScoreSelector, yourScoreSelector, dealerHandSelector, bankSelector, newGameSelector, addCardBtnSelector, modalSelector, holdBtnSelector, betBtnSelector) {
    function holdClick() {
        const dealerScoreOutput = document.querySelector(dealerScoreSelector),
            dealerHandOutput = document.querySelector(dealerHandSelector),
            bank = document.querySelector(bankSelector),
            newGame = document.querySelector(newGameSelector),
            addCardBtn = document.querySelector(addCardBtnSelector),
            modal = document.querySelector(modalSelector),
            yourScore = +document.querySelector(yourScoreSelector).textContent.replace('Your score: ', ''),
            betBtn = document.querySelector(betBtnSelector);


        let dealerScore = checkScore('dealerHand', '.btns__dealer-score', true, false);

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

        checkWin(yourScore, dealerScore, '.popup__winner');

        localStorage.setItem('bank', Math.floor(+localStorage.getItem('bank') + +localStorage.getItem('bet')));
        localStorage.setItem('bet', 0);

        bank.textContent = `Your bank: ${localStorage.getItem('bank')}$`;
        newGame.style.boxShadow = '0px 0px 16px 20px rgba(255, 26, 26, 0.2)';
        addCardBtn.style.display = 'none';
        holdBtnBtn.style.display = 'none';
        betBtn.style.display = 'none';
        setTimeout(() => {
            modal.style.display = 'block';
        }, 1000);
    }

    const holdBtnBtn = document.querySelector(holdBtnSelector);
    holdBtnBtn.addEventListener('click', holdClick);
}

export { holdBtn };