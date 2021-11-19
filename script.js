let items = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function promptPlayer() {
  let playerPrompt = prompt("Choose between Rock, paper and scissors");
  let playerChoice = playerPrompt.toLowerCase();

  if (!items.includes(playerChoice)) {
    alert("Choose a valid option!");
    return;
  }
  return playerChoice;
}

function computerPlay() {
  let computerChoice = items[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = promptPlayer();
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
  if (playerScore > computerScore) {
    alert("Congratulations! You beat the AI!");
    return;
  } else if (computerScore > playerScore) {
    alert("Oh no! The AI defeated you!");
  } else {
		alert("It's a draw, no one wins!");
	}


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
game();
