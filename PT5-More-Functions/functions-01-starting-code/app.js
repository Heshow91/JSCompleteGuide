const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
	const selection = prompt(
		`${ROCK}, ${PAPER} or ${SCISSORS}?`,
		''
	).toUpperCase();
	if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
		alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
		return;
		// return nothing if user didnt mke a choice
	}
	return selection;
};

const getComputerChoice = () => {
	const randomValue = Math.random();
	if (randomValue < 0.34) {
		return ROCK;
	} else if (randomValue < 0.67) {
		return PAPER;
	} else {
		return SCISSORS;
	}
};
// setting default value to the parameter
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
	cChoice === pChoice
		? RESULT_DRAW
		: (cChoice === ROCK && pChoice === PAPER) ||
		  (cChoice === PAPER && pChoice === SCISSORS) ||
		  (cChoice === SCISSORS && pChoice === ROCK)
		? RESULT_PLAYER_WINS
		: RESULT_COMPUTER_WINS;

// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return RESULT_PLAYER_WINS;
// } else {
//   return RESULT_COMPUTER_WINS;
// }

startGameBtn.addEventListener('click', () => {
	if (gameIsRunning) {
		return;
	}
	gameIsRunning = true;
	console.log('Game is starting...');
	const playerChoice = getPlayerChoice();
	const computerChoice = getComputerChoice();
	let winner;
	if (playerChoice) {
		winner = getWinner(computerChoice, playerChoice);
	} else {
		//calling a function that expects 2 parameters
		winner = getWinner(computerChoice, playerChoice);
	}
	console.log(playerChoice);
	console.log(computerChoice);
	console.log(winner);
	// accesable code from anywhere
	let message = `You picked ${
		playerChoice || DEFAULT_USER_CHOICE
	} and computer picked ${computerChoice}, `;
	if (winner === RESULT_DRAW) {
		message = message + ' its a draw!';
	} else if (winner === RESULT_PLAYER_WINS) {
		message = message + 'you won!';
	} else {
		message = message + 'boohoo you lost';
	}
	alert(message);
	// set game to false so we can play again once it ocmpketed all the steps
	gameIsRunning = false;
});

// not related to the game
const sumUp = ()=>{

}