function modal(modalSelector, closeSelector) {
    const modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector);

    modal.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target && e.target === modal || e.target === close) {
            modal.style.display = 'none';
        }
    });
}

export { modal };