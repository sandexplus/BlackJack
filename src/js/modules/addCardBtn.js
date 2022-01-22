import { addCard } from './addCard';
import { drawCard } from './drawCard';

function addCardBtn(yourScoreSelector, yourHandOutputSelector, holdBtnSelector, addCardBtnSelector, doubleBtnSelector) {

    function addCardClick() {
        const yourHandOutput = document.querySelector(yourHandOutputSelector),
            yourScoreOutput = document.querySelector(yourScoreSelector),
            holdBtn = document.querySelector(holdBtnSelector),
            doubleBtn = document.querySelector(doubleBtnSelector);

        doubleBtn.style.display = 'none';
        while (yourHandOutput.firstChild) {
            yourHandOutput.removeChild(yourHandOutput.firstChild);
        }
        addCard('yourHand', '.btns__your-score');

        const yourHand = JSON.parse(localStorage.getItem('yourHand'));
        yourHand.forEach(card => {
            drawCard('.game__your-hand', card);
        });

        let yourScore = +yourScoreOutput.textContent.replace('Your score: ', '');
        if (+yourScore >= 21) {
            holdBtn.click();
        }
    }

    const addCardBtn = document.querySelector(addCardBtnSelector);
    addCardBtn.addEventListener('click', addCardClick);
}

export { addCardBtn };