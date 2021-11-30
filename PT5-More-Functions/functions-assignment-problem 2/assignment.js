// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// converted to arrow function, one argument does not need () or brackets
const sayHello = (name) => console.log('Hi ' + name);

const sayHello2 = (name, phrase) => console.log(phrase + ' ' + name);

const sayHello3 = () => console.log('Hi ' + 'Hisham');

const sayHello4 = (name) => 'Hi ' + name;

sayHello('Hisham');
sayHello2('Hisham', 'Hello');
sayHello3();
//return value
console.log(sayHello4('Hisham'));

// add a default value
const sayHello5 = (name, phrase = 'Hi') => console.log(phrase + ' ' + name);
sayHello5('Heshow')

// add a new function which takes an unlimited amount of args(strings) and executes a callback function if NO argument/ string is an empty string
function checkInput(cb, ...strings){
  let hasEmptyText = false
  for(const text of strings){
    if(!text){
      hasEmptyText = true
      break;
    }
  }
  if(!hasEmptyText){
    cb()
  }
}
checkInput(() =>{
  console.log('All not Empty');
}, 'Hello', '12', 'We see stuff')