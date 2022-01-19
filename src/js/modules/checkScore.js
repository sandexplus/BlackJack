function checkScore(hand, scoreSelector, hold = false) {
    const regex = /..$/;
    const scoreOutput = document.querySelector(scoreSelector);

    let score = 0;
    let tempScore = 0;

    hand.forEach(element => {
        tempScore = 0;

        if (isNaN(+element.replace(regex, '')) && element.replace(regex, '') !== 'a') {
            score += 10;
            tempScore += 10;
        } else if (element.replace(regex, '') === 'a') {
            if (score + 11 > 21) {
                score += 1;
                tempScore += 1;
            } else {
                score += 11;
                tempScore += 11;
            }
        } else {
            score += +element.replace(regex, '');
            tempScore += +element.replace(regex, '');
        }

        if (scoreSelector === '.btns__dealer-score' && !hold && element === hand[1] && hand.length > 1) {
            score -= tempScore;
        }
    });

    if (scoreSelector === '.btns__your-score') {
        scoreOutput.textContent = `Your score: ${score}`;
    } else {
        scoreOutput.textContent = `Dealer score: ${score}`;
    }



}

export { checkScore };