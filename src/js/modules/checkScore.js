function checkScore(hand, scoreSelector) {
    const regex = /..$/;
    const scoreOutput = document.querySelector(scoreSelector);

    let score = 0;
    hand.forEach(element => {
        if (isNaN(+element.replace(regex, '')) && element.replace(regex, '') !== 'a') {
            score += 10;
        } else if (element.replace(regex, '') === 'a') {
            if (score + 11 > 21) {
                score += 1;
            } else {
                score += 11;
            }
        } else {
            score += +element.replace(regex, '');
        }
    });

    scoreOutput.textContent = `Score: ${score}`;

}

export { checkScore };