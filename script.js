let playerScore = 0;
let computerScore = 0;

function computerPlay() {
	const items = ["rock", "paper", "scissors"];
	const computerChoice = items[Math.floor(Math.random() * 3)];
	return computerChoice;
}

function game(playerSelection) {
	const computerSelection = computerPlay();
	const outScore = document.querySelector('#outScore');
	playRound(playerSelection, computerSelection);

	outScore.textContent = `You: ${playerScore} VS AI: ${computerScore}`;

	
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      alert("You Lose! Paper beats Rock.");
      computerScore += 1;
    }
    if (computerSelection == "scissors") {
      alert("You Win! Rock beats Scissors.");
      playerScore += 1;
    }
    if (computerSelection == "rock") {
      alert("Draw!");
    }

  }

  if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      alert("You Lose! Scissors beats paper.");
      computerScore += 1;
    }
    if (computerSelection == "rock") {
      alert("You Win! Paper beats rock.");
      playerScore += 1;
    }
    if (computerSelection == "paper") {
      alert("Draw!");
    }
  }

  if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      alert("You Lose! Rock beats scissors.");
      computerScore += 1;
    }
    if (computerSelection == "paper") {
      alert("You Win! Scissors beats paper.");
      playerScore += 1;
    }
    if (computerSelection == "scissors") {
      alert("Draw!");
    }


  }
}

const btnRock = document.querySelector('#rock-button');
const btnPaper = document.querySelector('#paper-button');
const btnScissors = document.querySelector('#scissors-button');

btnRock.addEventListener('click', function () {game('rock')});
btnPaper.addEventListener('click', function () {game('paper')});
btnScissors.addEventListener('click', function () {game('scissors')});
