function surrenderBtn(surrenderSelector, subwinnerSelector, winnerSelector, modalSelector, addCardSelector, holdSelector, newGameSelector) {
    const surrender = document.querySelector(surrenderSelector);

    surrender.addEventListener('click', (e) => {
        e.preventDefault();

        const winner = document.querySelector(winnerSelector),
            modal = document.querySelector(modalSelector),
            subwinner = document.querySelector(subwinnerSelector),
            addCardBtn = document.querySelector(addCardSelector),
            holdBtn = document.querySelector(holdSelector),
            newGame = document.querySelector(newGameSelector);


        localStorage.setItem('bank', +localStorage.getItem('bank') + Math.floor(+localStorage.getItem('bet') / 2));
        winner.textContent = `You surrendered`;
        subwinner.textContent = `Your winnigs are ${Math.floor(localStorage.getItem('bet') / 2)}`;

        addCardBtn.style.display = `none`;
        holdBtn.style.display = `none`;
        surrender.style.display = `none`;
        newGame.style.boxShadow = '0px 0px 16px 20px rgba(255, 26, 26, 0.2)';
        setTimeout(() => {
            modal.style.display = 'block';
        }, 1000);
    });
}

export { surrenderBtn };