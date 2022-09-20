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
        if (playerChoice === 1) {
            luckText.innerHTML = `Player Choose Elephant | Computer Choose Elephant`;
        }
        else if (playerChoice === 2) {
            luckText.innerHTML = `Player Choose Ant | Computer Choose Ant`;
        }
        else if (playerChoice === 3) {
            luckText.innerHTML = `Player Choose Human | Computer Choose Human`;
        }
    }
    else if (playerChoice === 1 && computerChoice === 3) {
        playerScore++;
        playerScText.textContent = `Player Score: ${playerScore}`;
        computerScText.textContent = `Computer Score: ${computerScore}`;
        winText.textContent = `Player wins this round!!!`;
        luckText.innerHTML = `Player Choose Elephant | Computer Choose Human`;
    }
    else if (playerChoice === 1 && computerChoice === 2) {
        computerScore++;
        playerScText.textContent = `Player Score: ${playerScore}`;
        computerScText.textContent = `Computer Score: ${computerScore}`;
        winText.textContent = `Computer wins this round!!!`;
        luckText.innerHTML = `Player Choose Elephant | Computer Choose Ant`;
    }
    else if (playerChoice === 2 && computerChoice === 1) {
        playerScore++;
        playerScText.textContent = `Player Score: ${playerScore}`;
        computerScText.textContent = `Computer Score: ${computerScore}`;
        winText.textContent = `Player wins this round!!!`;
        luckText.innerHTML = `Player Choose Ant | Computer Choose Elephant`;
    }
    else if (playerChoice === 2 && computerChoice === 3) {
        computerScore++;
        playerScText.textContent = `Player Score: ${playerScore}`;
        computerScText.textContent = `Computer Score: ${computerScore}`;
        winText.textContent = `Computer wins this round!!!`;
        luckText.innerHTML = `Player Choose Ant | Computer Choose Human`;
    }
    else if (playerChoice === 3 && computerChoice === 2) {
        playerScore++;
        playerScText.textContent = `Player Score: ${playerScore}`;
        computerScText.textContent = `Computer Score: ${computerScore}`;
        winText.textContent = `Player wins this round!!!`;
        luckText.innerHTML = ``;
        luckText.innerHTML = `Player Choose Human | Computer Choose Ant`;
    }
    else if (playerChoice === 3 && computerChoice === 1) {
        computerScore++;
        playerScText.textContent = `Player Score: ${playerScore}`;
        computerScText.textContent = `Computer Score: ${computerScore}`;
        winText.textContent = `Computer wins this round!!!`;
        luckText.innerHTML = `Player Choose Elephant | Computer Choose Ant`;
    }

    if (playerScore === 2 || computerScore === 2) {
        if (playerScore === 2) {
            winText.textContent = `Congrats You Won!!!`;
            const text = document.createElement('p');
            text.innerHTML = 'Congrats luck was on your side!!!';
            luckArea.appendChild(text);
        }
        if (computerScore === 2) {
            winText.textContent = `Computer Won!!!`;
            const text = document.createElement('p');
            text.innerHTML = 'Aww man unlucky better luck next time!!!';
            luckArea.appendChild(text);
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
    }
}
