/* Variables */
/* General Variables */
let computerChoice = {Value: ""};
let computerChoiceInt = 0;
let playerChoice;
let playerChoiceInt = 0;
const selectors = document.querySelectorAll('.selector');

let computerScore = 0;
let playerScore = 0;

/* Text Variables */
const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector('#computer-score');
computer.textContent = `Computer Score: ${computerScore}`;

const winMessage = document.querySelector('#win-message');
winMessage.textContent = `First to 3 wins!`;

const luckMessage = document.querySelector('#luck-message');
luckMessage.textContent = `Good Luck!!!`;
