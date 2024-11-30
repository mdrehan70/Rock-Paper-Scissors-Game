let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScore();

function playGame(playerChoice) {
    const computerChoice = setRandom();
    let result = '';

    if (playerChoice === 'Scissor') {
        if (computerChoice === 'Rock') {
            result = 'You lose';
        } else if (computerChoice === 'Paper') {
            result = 'You win.';
        } else if (computerChoice === 'Scissor') {
            result = 'Tie.';
        }
    } else if (playerChoice === 'Paper') {
        if (computerChoice === 'Rock') {
            result = 'You win.';
        } else if (computerChoice === 'Paper') {
            result = 'Tie.';
        } else if (computerChoice === 'Scissor') {
            result = 'You lose';
        }
    } else if (playerChoice === 'Rock') {
        if (computerChoice === 'Rock') {
            result = 'Tie.';
        } else if (computerChoice === 'Paper') {
            result = 'You lose';
        } else if (computerChoice === 'Scissor') {
            result = 'You win.';
        }
    }

    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You lose') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.result').innerHTML = `${result}`;
    document.querySelector('.comparison').innerHTML = `You
                <img class="image" src="images/${playerChoice}-emoji.png" alt="">
                <img class="image" src="images/${computerChoice}-emoji.png" alt="">
                Computer`;
}

function updateScore() {
    document.querySelector('.score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function setRandom() {
    let randomNumber = Math.random();
    let computerChoice = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerChoice = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerChoice = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerChoice = 'Scissor';
    }

    return computerChoice;
}