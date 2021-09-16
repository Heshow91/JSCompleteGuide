const defaultResult = 0;
let currentResult = defaultResult;

//
function getUserNumberInput() {
	return parseInt(userInput.value);
}
function createAndWriteOutPut(operator, reslutBeforeCalc, calcNumber) {
	// out put text
	const calcDescription = `${reslutBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription);
}
function add() {
	// to avoid repeating code stored the function into another variable that we can use all over our code
	const enteredNumber = getUserNumberInput();
	// wrap the template literal will be converted to a string, building description before the code
	//const calcDescription = `${currentResult} + ${enteredNumber}`;
	// storing initial result with current result before we change it
	const initialResult = currentResult;
	// parseInt converts the text into number
	currentResult = currentResult + enteredNumber;
	createAndWriteOutPut('+', initialResult, enteredNumber);
}
// logic will be similar to the add function
function subract() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult = currentResult - enteredNumber;
	createAndWriteOutPut('-', initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult = currentResult - enteredNumber;
	createAndWriteOutPut('*', initialResult, enteredNumber);
}


function divide() {
  const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult = currentResult - enteredNumber;
	createAndWriteOutPut('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);