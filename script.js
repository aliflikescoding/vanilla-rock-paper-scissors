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

// game score
let score = 0;

// player choice
let playerChoice;
// computer choice
let computerChoice;

// get computer choice function
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    return num;
}
