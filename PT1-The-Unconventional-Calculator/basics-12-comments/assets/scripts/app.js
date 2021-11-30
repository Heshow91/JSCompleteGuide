const defaultResult = 0;
let currentResult = defaultResult;
// adding new global array variable
let logEntries = [];

// Gets input from input field and turns it into a number b/c default is a string
function getUserNumberInput() {
	return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription); // from vendor file
}
// this function will be used alot so we can reuse the logic with this
function writeToLog(
	operationIdentifier,
	prevResult,
	operationNumber,
	newResult
) {
	const logEntry = {
		// adding key value pairs
		operation: operationIdentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: newResult,
	};
	logEntries.push(logEntry);
	console.log(logEntries);
}
function calculateResult(calculationType) {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	if (calculationType === 'ADD') {
		currentResult += enteredNumber;
	} else {
		currentResult -= enteredNumber;
	}

	createAndWriteOutput('-', initialResult, enteredNumber);
	writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function add() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	// short cut to currentResult + enteredNumber; putting operator before = will do the calculation
	// is to += enterendNumber; this will do the same thing
	currentResult += enteredNumber;
	createAndWriteOutput('+', initialResult, enteredNumber);
	writeToLog('ADD', initialResult, enteredNumber, currentResult);

	// want to add a new entry to array with one element
	// pushes a new element onto the array, new element to the list
	//logEntries.push(logEntry);
	// pushed element
	// access specific property
	//console.log(logEntry.operation);
	//console.log(logEntries);
	// logged element
	//console.log(logEntries[0]);
}

function subtract() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult -= enteredNumber;
	createAndWriteOutput('-', initialResult, enteredNumber);
	writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
	// made this into a function that can be reused instead of writing this every time
	// const logEntry = {
	// 	// adding key value pairs
	// 	operation: 'SUBTRACT',
	// 	prevResult: initialResult,
	// 	number: enteredNumber,
	// 	result: currentResult,
	// };
}
// the writeToLog
// and now we're reusing this write to log function to create our log object with different dynamic data

// which we add in which we get as parameters in the function, which we then use to build that object which

// we then add to our array, which we then log to the console.

function multiply() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult *= enteredNumber;
	createAndWriteOutput('*', initialResult, enteredNumber);
	writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
	// typeof allows to see what the type of variable is at run time
}

function divide() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult /= enteredNumber;
	createAndWriteOutput('/', initialResult, enteredNumber);
	writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
