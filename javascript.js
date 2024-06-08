function getComputerChoice() {
    let rps = Math.random();

    if (rps <= 0.33) {
        return 'rock';
    } else if (rps > 0.33 && rps <= 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let choice = prompt('rock, paper or scissors: ');  
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice === 'rock' && computerChoice === 'rock') {
        console.log('Tie!');
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('You lose! Paper beats Rock.');
        computerScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You win! Rock beats Scissors.');
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You win! Paper beats Rock.');
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'paper') {
        console.log('Tie!');
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You lose! Scissors beats Paper.');
        computerScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You lose! Rock beats Scissors.');
        computerScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You win! Scissors beats Paper.');
        humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        console.log('Tie!');
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if (humanScore < computerScore) {
        console.log('Computer Wins!');
    } else if (humanScore > computerScore) {
        console.log('You Win!');
    } else {
        console.log('Tie!');
    }
}

playGame();