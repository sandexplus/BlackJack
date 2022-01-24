import { holdBtn } from './holdBtn';

function playOnBtn(btnSelector, modalSelector, holdBtnSelector) {
    const playOn = document.querySelector(btnSelector);

    playOn.addEventListener('click', () => {



        const modal = document.querySelector(modalSelector),
            holdBtn = document.querySelector(holdBtnSelector);

        modal.style.display = 'none';

        holdBtn.click();
    });
}

export { playOnBtn };