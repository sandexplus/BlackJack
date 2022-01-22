import { checkScore } from "./checkScore";

function doubleBtn(doubleBtnSelector, addCardBtnSelector, holdBtnSelector) {
    const doubleBtn = document.querySelector(doubleBtnSelector);

    doubleBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const addCardBtn = document.querySelector(addCardBtnSelector),
            holdBtn = document.querySelector(holdBtnSelector);

        if (localStorage.getItem('bank') - localStorage.getItem('bet') >= 0) {

            localStorage.setItem('bank', localStorage.getItem('bank') - localStorage.getItem('bet'));
            localStorage.setItem('bet', localStorage.getItem('bet') * 2);
            alert(`Your bet was increased to ${localStorage.getItem('bet')}$`);

            addCardBtn.click();
            if (+checkScore('yourHand', '.btns__your-score', false, false) < 21) {
                holdBtn.click();
            }

        }
    });
}

export { doubleBtn };