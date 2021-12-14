
// function sayHello(name){
//   console.log('Hi' + name);           regular way
// } 
// const sayHello = (name) => {          arrow function 
//   console.log('Hi ' + name);
// }
const sayHello = name=> console.log('Hi ' + name);       // 1 liner arrow with

const sayHello2 = (name, phrase) => console.log( phrase + ' ' +  name);       
const sayHello3 = name =>  'Hi ' + name;    // with a return value of Hi and name


const person = (name,age) =>{
  console.log('Hey ' + name + ' cant belive your only ' + age);
}
person('Hisham', 30)

sayHello('Hisham')
sayHello2('hi','Heshow')
sayHello3('hisham')
console.log(sayHello3('hisham 3'));

const sayHello5 = (name, phrase='hi') => console.log(phrase + ' ' + name);       
sayHello5('meow hesow')
sayHello5('Hisham', 'Why')

function checkInput(cb, ...strings){
let emptyText = false;
for (const text of strings) {
  if(!text){
    emptyText = true
    break
  }
}
if(!emptyText){
cb()
}
}
checkInput(() =>{
  console.log('All not empty');
}, 'Hello', 'Im here')