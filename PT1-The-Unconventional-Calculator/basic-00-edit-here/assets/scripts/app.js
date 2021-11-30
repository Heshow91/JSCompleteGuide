const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    //function to convert into a number
    //currentResult = currentResult + +userInput.value;
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, `${currentResult} + ${enter}`);
   // return result; // finishes the codes function
    // any code after return will not execute
}
// function that ties to the button - which function should be acted when clicked
//when button is clicked , look at the function with the name add and execute
// tells us that when the button is clicked to go ahead and execute the add function
addBtn.addEventListener('click',add);

