const choices = ["rock", "paper", "scissors"];

const choiceButtons = document.querySelectorAll("button");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const result = document.querySelector(".result");

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
	const randomIndex = Math.floor(Math.random() * 3);
	return choices[randomIndex];
};

const playRound = (humanChoice, computerChoice) => {
	if (humanChoice === computerChoice) {
		result.value = `You've both chose ${humanChoice}, play again!`;
		return;
	}
	if (humanChoice === "rock") {
		if (computerChoice === "paper") {
			result.value = "You lose, paper beats rock!";
			computerScore++;
		} else {
			result.value = "You win, rock beats scissors!";
			humanScore++;
		}
	} else if (humanChoice === "scissors") {
		if (computerChoice === "rock") {
			result.value = "You lose, rock beats scissors!";
			computerScore++;
		} else {
			result.value = "You win, scissors beats paper!";
			humanScore++;
		}
	} else {
		if (computerChoice === "scissors") {
			result.value = "You lose, scissors beats paper!";
			computerScore++;
		} else {
			result.value = "You win, paper beats rock!";
			humanScore++;
		}
	}
	player.value = humanScore;
	computer.value = computerScore;
};

const gameIsOver = () => {
	return humanScore === 5 || computerScore === 5;
};

const resetGame = () => {
	const winner = humanScore === 5 ? "Player" : "Computer";
	result.value = `${winner} wins! Make another choice to play again.`;
	humanScore = 0;
	computerScore = 0;
};

choiceButtons.forEach((button) => {
	button.addEventListener("click", () => {
		playRound(button.id, getComputerChoice());
		if (gameIsOver()) {
			resetGame();
		}
	});
});
