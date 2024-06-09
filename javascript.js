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

let humanChoice = '';

let humanScore = 0;
let computerScore = 0;

let humanScoreTracker = document.querySelector("#human");
let computerScoreTracker = document.querySelector("#computer");

function playRound(str) {
    let computerChoice = getComputerChoice();

    if (humanChoice === 'rock' && computerChoice === 'rock') {
        alert("Tie!");
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        alert('You lose! Paper beats Rock.');
        computerScore++;
        computerScoreTracker.innerHTML = 'Computer: ' + computerScore;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        alert('You win! Rock beats Scissors.');
        humanScore++;
        humanScoreTracker.innerHTML = 'You: ' + humanScore;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        alert('You win! Paper beats Rock.');
        humanScore++;
        humanScoreTracker.innerHTML = 'You: ' + humanScore;
    } else if (humanChoice === 'paper' && computerChoice === 'paper') {
        alert('Tie!');
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        alert('You lose! Scissors beats Paper.');
        computerScore++;
        computerScoreTracker.innerHTML = 'Computer: ' + computerScore;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        alert('You lose! Rock beats Scissors.');
        computerScore++;
        computerScoreTracker.innerHTML = 'Computer: ' + computerScore;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        alert('You win! Scissors beats Paper.');
        humanScore++;
        humanScoreTracker.innerHTML = 'You: ' + humanScore;
    } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        alert('Tie!');
    }
}

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    humanChoice = 'rock';
    playRound(humanChoice);

    if (humanScore === 5) {
        humanScore = 0;
        computerScore = 0;
        alert("You reached 5. You win!");
        humanScoreTracker.innerHTML = 'You: ' + humanScore;
        computerScoreTracker.innerHTML = 'Computer: ' + computerScore;
    } else if (computerScore === 5) {
        humanScore = 0;
        computerScore = 0;
        alert("Computer reached 5. Computer wins!");
        humanScoreTracker.innerHTML = 'You: ' + humanScore;
        computerScoreTracker.innerHTML = 'Computer: ' + computerScore;
    }
});

paper.addEventListener("click", () => {
    humanChoice = 'paper';
    playRound(humanChoice);

    if (humanScore === 5) {
        humanScore = 0;
        computerScore = 0;
        alert("You reached 5. You win!");
        humanScoreTracker.innerHTML = 'You: ' + humanScore;
        computerScoreTracker.innerHTML = 'Computer: ' + computerScore;
    } else if (computerScore === 5) {
        humanScore = 0;
        computerScore = 0;
        alert("Computer reached 5. Computer wins!");
        humanScoreTracker.innerHTML = 'You: ' + humanScore;
        computerScoreTracker.innerHTML = 'Computer: ' + computerScore;
    }
});

scissors.addEventListener("click", () => {
    humanChoice = 'scissors';
    playRound(humanChoice);
    
    if (humanScore === 5) {
        humanScore = 0;
        computerScore = 0;
        alert("You reached 5. You win!");
        humanScoreTracker.innerHTML = 'You: ' + humanScore;
        computerScoreTracker.innerHTML = 'Computer: ' + computerScore;
    } else if (computerScore === 5) {
        humanScore = 0;
        computerScore = 0;
        alert("Computer reached 5. Computer wins!");
        humanScoreTracker.innerHTML = 'You: ' + humanScore;
        computerScoreTracker.innerHTML = 'Computer: ' + computerScore;
    }
})
