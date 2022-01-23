import { addCard } from './addCard';
import { drawCard } from './drawCard';

function addCardBtn(yourScoreSelector, yourHandOutputSelector, holdBtnSelector, addCardBtnSelector, doubleBtnSelector, split = false) {

    function addCardClick() {
        const yourHandOutput = document.querySelector(yourHandOutputSelector),
            yourScoreOutput = document.querySelector(yourScoreSelector),
            doubleBtn = document.querySelector(doubleBtnSelector),
            holdBtn = document.querySelector(holdBtnSelector);
        let hand;
        if (yourHandOutputSelector === '.game__your-hand') {
            hand = 'yourHand';
        } else {
            hand = 'yourHand2';
        }

        doubleBtn.style.display = 'none';
        while (yourHandOutput.firstChild) {
            yourHandOutput.removeChild(yourHandOutput.firstChild);
        }
        addCard(hand, yourScoreSelector);

        const yourHand = JSON.parse(localStorage.getItem(hand));
        yourHand.forEach(card => {
            drawCard(yourHandOutputSelector, card);
        });

        let yourScore = +yourScoreOutput.textContent.replace('Your score: ', '');
        if (!split) {
            if (+yourScore >= 21) {
                holdBtn.click();
            }
        }

    }

    const addCardBtn = document.querySelector(addCardBtnSelector);
    addCardBtn.addEventListener('click', addCardClick);
}

export { addCardBtn };