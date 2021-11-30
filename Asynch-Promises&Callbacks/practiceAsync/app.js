const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
	console.log('Clicked!');
}
const greet = ()=> {
  console.log('Hi');
}
const showAlert = () =>{
  alert('danger'), console.log('Hello After alert');
}
setTimeout(showAlert,2000)
greet()

button.addEventListener('click', trackUserHandler);
