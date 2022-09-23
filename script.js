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
let luckArea = document.querySelector('.luck-area');
let messageArea = document.querySelector('.message-area');

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
    playRound(1);
});
ant.addEventListener('click', () => {
    playRound(2);
});
human.addEventListener('click', () => {
    playRound(3);
});

// event function
function playRound(selected) {
    playerChoice = selected;
    computerChoice = getComputerChoice();
    if (playerChoice == computerChoice) {
        winText.textContent = `It's a draw, select again`;
        if (playerChoice === 1) {
            luckText.textContent = `Player Choose Elephant | Computer Choose Elephant`;
        }
        else if (playerChoice === 2) {
            luckText.textContent = `Player Choose Ant | Computer Choose Ant`;
        }
        else if (playerChoice === 3) {
            luckText.textContent = `Player Choose Human | Computer Choose Human`;
        }
    }
    else if (playerChoice === 1 && computerChoice === 3) {
        playerScore++;
        winText.textContent = `Player wins this round!!!`;
        luckText.textContent = `Player Choose Elephant | Computer Choose Human`;
    }
    else if (playerChoice === 1 && computerChoice === 2) {
        computerScore++;
        winText.textContent = `Computer wins this round!!!`;
        luckText.textContent = `Player Choose Elephant | Computer Choose Ant`;
    }
    else if (playerChoice === 2 && computerChoice === 1) {
        playerScore++;
        winText.textContent = `Player wins this round!!!`;
        luckText.textContent = `Player Choose Ant | Computer Choose Elephant`;
    }
    else if (playerChoice === 2 && computerChoice === 3) {
        computerScore++;
        winText.textContent = `Computer wins this round!!!`;
        luckText.textContent = `Player Choose Ant | Computer Choose Human`;
    }
    else if (playerChoice === 3 && computerChoice === 2) {
        playerScore++;
        computerScText.textContent = `Computer Score: ${computerScore}`;
        winText.textContent = `Player wins this round!!!`;
        luckText.textContent = `Player Choose Human | Computer Choose Ant`;
    }
    else if (playerChoice === 3 && computerChoice === 1) {
        computerScore++;
        winText.textContent = `Computer wins this round!!!`;
        luckText.textContent = `Player Choose Elephant | Computer Choose Ant`;
    }
    playerScText.textContent = `Player Score: ${playerScore}`;
    computerScText.textContent = `Computer Score: ${computerScore}`;

    if (playerScore === 5 || computerScore ===5) {
        if (playerScore === 5) {
            winText.textContent = `Congrats You Won!!!`;
            const text = document.createElement('p');
            text.textContent = 'Congrats luck was on your side!!!';
            luckArea.appendChild(text);
            text.style.color = 'var(--red)';
        }
        if (computerScore === 5) {
            winText.textContent = `Computer Won!!!`;
            const text = document.createElement('p');
            text.textContent = 'Aww man unlucky better luck next time!!!';
            luckArea.appendChild(text);
            text.style.color = 'var(--red)';
        }
        winText.style.color = 'var(--red)';
        winText.style.fontSize = '250%';

        const restartButton = document.createElement('button');
        restartButton.textContent = 'CLICK HERE TO RESTART THE GAME';
        restartButton.addEventListener('click', () => {
            window.location.reload();
        });
        messageArea.appendChild(restartButton);
        

        playerScText.textContent = `Player Score: ${playerScore}`;
        computerScText.textContent = `Computer Score: ${computerScore}`;
        playerScore = 0;
        computerScore = 0;

        elephant.style.pointerEvents = 'none';
        ant.style.pointerEvents = 'none';
        human.style.pointerEvents = 'none';
    }
}
