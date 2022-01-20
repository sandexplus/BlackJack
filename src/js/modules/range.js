function range(rangeSelector, betSelector) {
    const range = document.querySelector(rangeSelector),
        bet = document.querySelector(betSelector);

    range.addEventListener('input', () => {
        bet.textContent = `Your bet: ${range.value}$`;
    });
}

export { range };