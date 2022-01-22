let playerScore = 0;
let computerScore = 0;

function computerPlay() {
	const items = ["rock", "paper", "scissors"];
	const computerChoice = items[Math.floor(Math.random() * 3)];
	return computerChoice;
}

function game(playerSelection) {
	const outScore = document.querySelector('#outScore');
	const outRoundResult = document.querySelector('#outRoundResult');
	const outGameResults = document.querySelector('#outGameResults');

	const computerSelection = computerPlay();
	const roundPlayedResult = playRound(playerSelection, computerSelection);

	outScore.textContent = `You: ${playerScore} VS AI: ${computerScore}`;
	outRoundResult.textContent = roundPlayedResult;
	
	if (playerScore > 4) { 
		outGameResults.style.color = 'blue';
		outGameResults.textContent = 'You defeated the AI!';
		gameButtons.forEach(element => {
			element.setAttribute('disabled', 'true');
		});
		btnPlayAgain.style.display = 'block';
	}
	if (computerScore > 4) { 
		outGameResults.style.color = 'red';
		outGameResults.textContent = 'The AI defeated you!';
		gameButtons.forEach(element => {
			element.setAttribute('disabled', 'true');
		});
		btnPlayAgain.style.display = 'block';
	}
	
}

function playRound(playerSelection, computerSelection) {
	
	switch (playerSelection) {
		case 'rock':
			switch (computerSelection) {
				case 'paper':
					computerScore += 1;
					return 'You lose! Paper beats Rock.';
				case 'scissors':
					playerScore += 1;
					return 'You win! Rock beats Scissors.';
				default:
					return 'Draw!';
			}
			break;
		case 'paper':
			switch (computerSelection) {
				case 'scissors':
                                        computerScore += 1;
					return 'You lose! Scissors beats Paper.';
				case 'rock':
                                        playerScore += 1;
					return 'You Win! Paper beats Rock.';
				default:
					return 'Draw!';
			}
			break;
		case 'scissors':
			switch (computerSelection) {
				case 'rock':
                                        computerScore += 1;
					return 'You lose! Rock beats Scissors.';
				case 'paper':
                                        playerScore += 1;
					return 'You Win! Scissors beats Paper.';
				default:
					return 'Draw!';
				}
			break;
	}
}

const gameButtons = document.querySelectorAll('.gameButtons');
gameButtons.forEach(element => {
	element.addEventListener('click', function () {
		game(element.getAttribute('data-value'))
	});
});

const btnPlayAgain = document.querySelector('#btnPlayAgain');
btnPlayAgain.addEventListener('click', function () {
	document.location.reload(true);
});
