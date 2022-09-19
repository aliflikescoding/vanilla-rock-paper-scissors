/* Variables */
// moves
let elephant = document.querySelector('#elephant');
let ant = document.querySelector('#ant');
let human = document.querySelector('#human');

// text
let roundText = document.querySelector('#win-message');
let playerScText = document.querySelector('#player-score');
let computerScText = document.querySelector('#computer-score');
let luckText = document.querySelector('#luck-message');

// count variables
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

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
    
}
