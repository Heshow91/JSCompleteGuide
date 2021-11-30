functions are "Code on Demand"

function declaration/ function statement 
function multuply(a,b){
  return a*b;
}
-> Hoisted to top can be declared anywhere in file

function expression 
const multiply = function (a,b){
  return a*b
}
-> Hoisted to top but not initialized / defined cant be declared anywhere in the file
-> looks cleaner 

Arrow functions 
(args1, args2) => {...} empty pairs parantheses is required
args => {...} parantheses can be ommitted with exactly one argument
(a,b) => a+b curly braces can be ommitted result is returned with exactly one expression in func body