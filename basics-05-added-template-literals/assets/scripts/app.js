const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);

function add(num1, num2){
    const addResult = num1 + num2;
    alert('There Result is ' + addResult);
}
add(5,5);
add(1,2);