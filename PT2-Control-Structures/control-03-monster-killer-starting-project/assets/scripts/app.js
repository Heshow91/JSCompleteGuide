// because this is a global value that will not change
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 15;
const MONSTER_ATTACK_VALUE = 21;
const HEAL_VALUE = 20;

// string identifiers can have typos to avoid that we will store them in global variables
const MODE_ATTACK = 'ATTACK'; // or we can have it equal to a number MODE_ATTACK = 0;
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
// function to let user input health
const enteredvalue = prompt(
	'Choose Maximum Life for you and the Monster',
	'100'
);
// parsing the entered value to become a number instead of string
let chosenMaxLife = +enteredvalue;
// check if entered value is not a number
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
	chosenMaxLife = 10;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
// boolean value
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

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
	} else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
		alert('Monster Won');
	} else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
		alert('You Have a Draw!');
	}
	if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
		reset();
	}
}

function attackMonster(mode) {
	let maxDamage;
	if (mode === MODE_ATTACK) {
		maxDamage = ATTACK_VALUE;
	} else if (mode === MODE_STRONG_ATTACK) {
		maxDamage = STRONG_ATTACK_VALUE;
	}
	const damage = dealMonsterDamage(maxDamage);
	currentMonsterHealth -= damage;
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
	endRound();
}

// giving the attack button an actual function
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
