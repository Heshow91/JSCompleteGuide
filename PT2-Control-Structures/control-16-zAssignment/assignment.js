// 1. write code that shows an alert (with any message) when that number is greater than 0.7.
const randomNumber = Math.random(); // produces random number between 0 and 1

if (randomNumber > 0.7) {
	alert('greater or equal than 0.7');
} else {
	alert('not greater than 0.7');
}
// 2. Create an array of numbers (any numbers of your choice) and loop through the array in two different ways - outputting the numbers inside the loop.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("regular for loop");
for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
}
console.log("for of loop");
for (const num of numbers) {
	console.log(num);
}
console.log("while loop");
let counter = 0;
while (counter < numbers.length) {
	console.log(numbers[counter]);
	counter++;
}
// 3. adjust one of the loops from the last task such that it actually starts at the end(last element) of the array and loops to the first element
// for loop backwards
console.log("for loop backwards");
for(let i = numbers.length - 1; i >= 0; i--){
  console.log(numbers[i]);
}
// 4.create another number (in a seperate constant) and show an alert in two different scenarios: Both are greater 0.7 OR at least one of the two is NOT greater than 0.2. 
const randomNumber2 = Math.random();
console.log(randomNumber);
console.log(randomNumber2);
if((randomNumber > 0.7 && randomNumber2 > 0.7) || randomNumber <= 0.2 || randomNumber2 <= 0.2){
  alert ('Greater than 0.7 or smaller than 0,2')
}