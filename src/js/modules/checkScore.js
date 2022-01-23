function checkScore(handLS, scoreSelector, hold = false, write = true) {
    const regex = /..$/;
    const scoreOutput = document.querySelector(scoreSelector),
        hand = JSON.parse(localStorage.getItem(handLS));
    let score = 0;
    let tempScore;

    hand.forEach(element => {
        tempScore = 0;

        if (isNaN(+element.replace(regex, '')) && !element.startsWith('a')) {
            score += 10;
            tempScore += 10;
        } else if (element.startsWith('a')) {
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

    if (write) {
        if (scoreSelector === '.btns__your-score' || scoreSelector === '.btns__your-score-2') {
            scoreOutput.textContent = `Your score: ${score}`;
        } else {
            scoreOutput.textContent = `Dealer score: ${score}`;
        }
    } else {
        return score;
    }
}

export { checkScore };