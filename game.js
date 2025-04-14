function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        displayResult(`It's a tie! Both chose ${humanChoice}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        displayResult(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else {
        displayResult(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
    updateScore();
    if (humanScore >= 5 || computerScore >= 5) {
        announceWinner();
        resetGame();
    }
}

function displayResult(result) {
    const resultDiv = document.getElementById('results');
    resultDiv.textContent = result;
}

function updateScore() {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Score: You - ${humanScore}, Computer - ${computerScore}`;
}

function announceWinner() {
    const resultDiv = document.getElementById('results');
    if (humanScore > computerScore) {
        resultDiv.textContent = "Congratulations! You won the game!";
    } else {
        resultDiv.textContent = "Better luck next time! The computer won the game.";
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScore();
}

document.getElementById('rock').addEventListener('click', () => playRound('rock', getComputerChoice()));
document.getElementById('paper').addEventListener('click', () => playRound('paper', getComputerChoice()));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors', getComputerChoice()));

updateScore();
