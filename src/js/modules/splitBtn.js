import { addCard } from "./addCard";
import { drawCard } from "./drawCard";

function splitBtn(splitBtnSelector, doubleBtnSelector, surrenderSelector, addCardBtnSelector, holdBtnSelector, btns1Selector, btns2Selector, btns3Selector, btns4Selector, btnsSplitSelector, firstHandSelector, secondHandSelector, hand2Selector) {
    const splitBtn = document.querySelector(splitBtnSelector);

    splitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const doubleBtn = document.querySelector(doubleBtnSelector),
            surrenderBtn = document.querySelector(surrenderSelector),
            addCardBtn = document.querySelector(addCardBtnSelector),
            holdBtn = document.querySelector(holdBtnSelector),
            btns1 = document.querySelector(btns1Selector),
            btns2 = document.querySelector(btns2Selector),
            btns3 = document.querySelector(btns3Selector),
            btns4 = document.querySelector(btns4Selector),
            btnsSplit = document.querySelector(btnsSplitSelector),
            firstHand = document.querySelector(firstHandSelector),
            secondHand = document.querySelector(secondHandSelector),
            hand2 = document.querySelector(hand2Selector);

        splitBtn.style.display = 'none';
        doubleBtn.style.display = 'none';
        surrenderBtn.style.display = 'none';
        addCardBtn.style.display = 'none';
        holdBtn.style.display = 'none';
        btnsSplit.style.display = 'block';
        secondHand.style.display = 'block';
        hand2.style.display = 'block';
        btns1.style.display = 'block';
        btns2.style.display = 'block';
        btns3.style.display = 'block';
        btns4.style.display = 'block';

        localStorage.removeItem('.btns__your-score');
        localStorage.removeItem('.btns__your-score-2');

        let yourHand2 = [],
            yourHand = JSON.parse(localStorage.getItem('yourHand'));

        localStorage.setItem('yourHand2', JSON.stringify(yourHand2));

        yourHand2[0] = yourHand[1];
        yourHand.pop();
        localStorage.setItem('yourHand2', JSON.stringify(yourHand2));
        localStorage.setItem('yourHand', JSON.stringify(yourHand));
        addCard('yourHand', '.btns__your-score');
        addCard('yourHand2', '.btns__your-score-2');

        localStorage.setItem('holdCount', 0);
        while (firstHand.firstChild) {
            firstHand.removeChild(firstHand.firstChild);
        }

        yourHand = JSON.parse(localStorage.getItem('yourHand'));
        yourHand.forEach(card => {
            drawCard('.game__your-hand', card);
        });


        while (secondHand.firstChild) {
            secondHand.removeChild(secondHand.firstChild);
        }

        yourHand2 = JSON.parse(localStorage.getItem('yourHand2'));
        yourHand2.forEach(card => {
            drawCard('.game__your-hand-2', card);
        });

    });
}

export { splitBtn };