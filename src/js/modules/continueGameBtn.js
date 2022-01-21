import { checkScore } from './checkScore';
import { drawCard } from './drawCard';

function continueGameBtn(continueGameSelector, dealerHandSelector, yourHandSelector) {
    const continueGame = document.querySelector(continueGameSelector);

    continueGame.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(1);
        const dealerHandOutput = document.querySelector(dealerHandSelector),
            yourHandOutput = document.querySelector(yourHandSelector);

        localStorage.setItem('deck', localStorage.getItem('savedDeck'));
        localStorage.setItem('yourHand', localStorage.getItem('savedYourHand'));
        localStorage.setItem('dealerHand', localStorage.getItem('savedDealerHand'));
        localStorage.setItem('bank', localStorage.getItem('savedBank'));
        localStorage.setItem('bet', localStorage.getItem('savedBet'));


        while (dealerHandOutput.firstChild) {
            dealerHandOutput.removeChild(dealerHandOutput.firstChild);
        }
        while (yourHandOutput.firstChild) {
            yourHandOutput.removeChild(yourHandOutput.firstChild);
        }

        const dealerHand = JSON.parse(localStorage.getItem('dealerHand'));
        dealerHand.forEach((card, i) => {
            if (i === 1) {
                drawCard('.game__dealer-hand', card, true);
            } else {
                drawCard('.game__dealer-hand', card);
            }
        });
        checkScore('dealerHand', '.btns__dealer-score');

        const yourHand = JSON.parse(localStorage.getItem('yourHand'));
        yourHand.forEach(card => {
            drawCard('.game__your-hand', card);
        });
        checkScore('yourHand', '.btns__your-score');
    });
}

export { continueGameBtn };