function playOnBtn(btnSelector, modalSelector) {
    const playOn = document.querySelector(btnSelector);

    playOn.addEventListener('click', (e) => {
        e.preventDefault();


        const modal = document.querySelector(modalSelector);

        modal.style.display = 'none';
    });
}

export { playOnBtn };