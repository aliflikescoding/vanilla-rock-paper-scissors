/* Variables */
// moves
let elephant = document.querySelector('#elephant');
let ant = document.querySelector('#ant');
let human = document.querySelector('#human');

// text
let winText = document.querySelector('#win-message');
let playerScText = document.querySelector('#player-score');
let computerScText = document.querySelector('#computer-score');
let luckText = document.querySelector('#luck-message');

// count variables
let playerScore = 0;
let computerScore = 0;
let wins = 0;

// game choice
let playerChoice;
let computerChoice;

// get computer choice function
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    return num;
}

// change player score text and computer score text
playerScText.textContent = `Player Score: ${playerScore}`;
computerScText.textContent = `Computer Score: ${computerScore}`;

// click events
elephant.addEventListener('click', () => {
    action(1);
});
ant.addEventListener('click', () => {
    action(2);
});
human.addEventListener('click', () => {
    action(3);
});

// event function
function action(selected) {
    playerChoice = selected;
    computerChoice = getComputerChoice();
    if (playerChoice == computerChoice) {
        winText.textContent = `It's a draw, select again`;
    }
    else if (playerChoice === 1 && computerChoice === 3) {
        playerScore++;
        playerScText.textContent = `Player Score: ${playerScore}`;
        computerScText.textContent = `Computer Score: ${computerScore}`;
        winText.textContent = `Player wins this round!!!`;
        wins++;
    }
    else if (playerChoice === 1 && computerChoice === 2) {
        computerScore++;
        playerScText.textContent = `Player Score: ${playerScore}`;
        computerScText.textContent = `Computer Score: ${computerScore}`;
        winText.textContent = `Computer wins this round!!!`;
        wins++;
    }
    else if (playerChoice === 2 && computerChoice === 1) {
        playerScore++;
        playerScText.textContent = `Player Score: ${playerScore}`;
        computerScText.textContent = `Computer Score: ${computerScore}`;
        winText.textContent = `Player wins this round!!!`;
        wins++;
    }
    else if (playerChoice === 2 && computerChoice === 3) {
        computerScore++;
        playerScText.textContent = `Player Score: ${playerScore}`;
        computerScText.textContent = `Computer Score: ${computerScore}`;
        winText.textContent = `Computer wins this round!!!`;
        wins++;
    }
    else if (playerChoice === 3 && computerChoice === 2) {
        playerScore++;
        playerScText.textContent = `Player Score: ${playerScore}`;
        computerScText.textContent = `Computer Score: ${computerScore}`;
        winText.textContent = `Player wins this round!!!`;
        wins++;
    }
    else if (playerChoice === 3 && computerChoice === 1) {
        computerScore++;
        playerScText.textContent = `Player Score: ${playerScore}`;
        computerScText.textContent = `Computer Score: ${computerScore}`;
        winText.textContent = `Computer wins this round!!!`;
        wins++;
    }
}
