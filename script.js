const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
	const randomIndex = Math.floor(Math.random() * 3);
	return choices[randomIndex];
};

const getHumanChoice = () => {
	const humanChoice = prompt("What do you choose?").toLowerCase();
	if (choices.includes(humanChoice)) {
		return humanChoice;
	} else {
		getHumanChoice();
	}
};

const playRound = (humanChoice, computerChoice) => {
	if (humanChoice === computerChoice) {
		console.log(`You've both chosen ${humanChoice}, play again!`);
		return;
	}
	if (humanChoice === "rock") {
		if (computerChoice === "paper") {
			console.log("You lose, paper beats rock!");
			computerScore++;
		} else {
			console.log("You win, rock beats scissors!");
			humanScore++;
		}
	} else if (humanChoice === "scissors") {
		if (computerChoice === "rock") {
			console.log("You lose, rock beats scissors!");
			computerScore++;
		} else {
			console.log("You win, scissors beats paper!");
			humanScore++;
		}
	} else {
		if (computerChoice === "scissors") {
			console.log("You lose, scissors beats paper!");
			computerScore++;
		} else {
			console.log("You win, paper beats rock!");
			humanScore++;
		}
	}
};

const playGame = () => {
	while (humanScore < 5 && computerScore < 5) {
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();
		playRound(humanSelection, computerSelection);
	}
    if (humanScore === 5) {
        console.log("You've won! Congratulations!")
    } else {
        console.log("You've lost! Refresh to play again!")
    }
};

playGame();