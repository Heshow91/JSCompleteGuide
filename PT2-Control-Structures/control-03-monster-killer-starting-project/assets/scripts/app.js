// because this is a global value that will not change
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 15;
const MONSTER_ATTACK_VALUE = 21;
const HEAL_VALUE = 20;

// capital letters that they are static variables thay we made
// string identifiers can have typos to avoid that we will store them in global variables
const MODE_ATTACK = 'ATTACK'; // or we can have it equal to a number MODE_ATTACK = 0;
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
// this will be used in our battleLog
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATATCK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';
// function to let user input health
const enteredvalue = prompt(
	'Choose Maximum Life for you and the Monster',
	'100'
);
// parsing the entered value to become a number instead of string
let chosenMaxLife = +enteredvalue;
// we will use battle log to store our battles
let battleLog = [];
// check if entered value is not a number
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
	chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
// boolean value
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

// this is how we can update the board with patch request for project
function writeToLog(ev, val, monsterHealth, playerHealth) {
	let logEntry = {
		event: ev,
		value: val,
		finalMonsterHealth: monsterHealth,
		finalPlayerHealth: playerHealth,
	};
	// can make logEntry a global variable
	if (ev === LOG_EVENT_PLAYER_ATTACK) {
		// this would be the more dynamic approach
		logEntry.target = 'MONSTER';
	} else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
		logEntry = {
			event: ev,
			value: val,
			target: 'MONSTER',
			finalMonsterHealth: currentMonsterHealth,
			finalPlayerHealth: playerHealth,
		};
		// battleLog.push(logEntry);
	} else if (ev === LOG_EVENT_MONSTER_ATTACK) {
		logEntry = {
			event: ev,
			value: val,
			target: 'PLAYER',
			finalMonsterHealth: currentMonsterHealth,
			finalPlayerHealth: playerHealth,
		};
		// battleLog.push(logEntry);
	} else if (ev === LOG_EVENT_PLAYER_HEAL) {
		logEntry = {
			event: ev,
			value: val,
			target: 'PLAYER',
			finalMonsterHealth: currentMonsterHealth,
			finalPlayerHealth: playerHealth,
		};
		// battleLog.push(logEntry);
	} else if (ev === LOG_EVENT_GAME_OVER) {
		// if i use the dynamic way then i dont need this last if block
		logEntry = {
			event: ev,
			value: val,
			finalMonsterHealth: currentMonsterHealth,
			finalPlayerHealth: playerHealth,
		};
		// battleLog.push(logEntry);
	}
	// pushing after if block
	battleLog.push(logEntry);
}

// reseting the health
function reset() {
	currentMonsterHealth = chosenMaxLife;
	currentPlayerHealth = chosenMaxLife;
	// reset with the chosen max life
	resetGame(chosenMaxLife);
}

function endRound() {
	const initialPlayerHealth = currentPlayerHealth;
	const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
	currentPlayerHealth -= playerDamage;
	writeToLog(
		LOG_EVENT_MONSTER_ATTACK,
		playerDamage,
		currentMonsterHealth,
		currentPlayerHealth
	);
	// check for bonus life
	if (currentPlayerHealth <= 0 && hasBonusLife) {
		hasBonusLife = false;
		removeBonusLife();
		// sets it baack to health before monster hit user
		currentPlayerHealth = initialPlayerHealth;
		// updates player healthbar
		setPlayerHealth(initialPlayerHealth);
		alert('You almost died but bonus life has saved you');
	}

	if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
		alert('You Won');
		writeToLog(
			LOG_EVENT_GAME_OVER,
			'PLAYER WON',
			currentMonsterHealth,
			currentPlayerHealth
		);
	} else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
		alert('Monster Won');
		writeToLog(
			LOG_EVENT_GAME_OVER,
			'MONSTER WON',
			currentMonsterHealth,
			currentPlayerHealth
		);
	} else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
		alert('You Have a Draw!');
		writeToLog(
			LOG_EVENT_GAME_OVER,
			'Draw',
			currentMonsterHealth,
			currentPlayerHealth
		);
	}
	if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
		reset();
	}
}

function attackMonster(mode) {
	const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
	const logEvent =
		mode === MODE_ATTACK
			? LOG_EVENT_PLAYER_ATTACK
			: LOG_EVENT_PLAYER_STRONG_ATTACK;
	// if (mode === MODE_ATTACK) {
	// 	maxDamage = ATTACK_VALUE;
	// 	logEvent = LOG_EVENT_PLAYER_ATTACK;
	// } else if (mode === MODE_STRONG_ATTACK) {
	// 	maxDamage = STRONG_ATTACK_VALUE;
	// 	logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
	// }
	const damage = dealMonsterDamage(maxDamage);
	currentMonsterHealth -= damage;
	writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
	endRound();
}

function attackHandler() {
	// made this attack monster function to be more dynamic
	attackMonster(MODE_ATTACK);
	// // dealMonsterDamage calculates random amount of damage based on the damage we feed it
	// const damage = dealMonsterDamage(ATTACK_VALUE);
	// // monster health will decrease from the damage
	// currentMonsterHealth -= damage;
	// // allow monster to hit user after it is hit
	// // we will use deal playerDamage
	// const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
	// currentPlayerHealth -= playerDamage;
	// if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
	// 	alert('You Won');
	// } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
	// 	alert('Monster Won');
	// 	// if both are less than 0 than it is a draw
	// } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
	// 	alert('You Have a Draw!');
	// }
}

function strongAttackHandler() {
	attackMonster(MODE_STRONG_ATTACK);
}
function healPlayerHandler() {
	let healValue;
	// chosenMaxLife - Heal_value is evaluated first
	// of cureent player health is more then chosenmaxLife
	if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
		alert("You can't heal more than your initial health");
		healValue = chosenMaxLife - currentPlayerHealth;
	} else {
		// apply full heal when healValue is less
		healValue = HEAL_VALUE;
	}
	increasePlayerHealth(HEAL_VALUE);
	// even after we heal the monster can still hit us
	currentPlayerHealth += HEAL_VALUE;
	writeToLog(
		LOG_EVENT_PLAYER_HEAL,
		healValue,
		currentMonsterHealth,
		currentPlayerHealth
	);
	endRound();
}
function printLogHandler() {
	for(let i = 0; i < 3; i++){
		console.log('-------');
	}
	for(let i = 10; i > 0; i--){
		console.log(i);
	}
	console.log(battleLog);
}
// giving the attack button an actual function
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);
