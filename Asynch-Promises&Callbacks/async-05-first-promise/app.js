const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = (duration) =>{
	// promis constructor 
const promise = new Promise((resolve,reject) => {
  // executes once promise is made
  setTimeout(() =>{
    resolve('Done!')
  },duration)
})
return promise
}

function trackUserHandler() {
	navigator.geolocation.getCurrentPosition(
		// this will be handed off to the broswer
		(posData) => {
			setTimer(2000).then(data => {
        console.log(data, posData);
      })
		},
		(error) => {
			console.log(error);
		}
	);
	// this will execute right away after button is clicked after log('getting position)
	setTimer(1000).then(() =>{
    console.log('Timer Done!!');
  })
	// this will execute once clicked because this is non blocking code
	console.log('getting current position...');
}

button.addEventListener('click', trackUserHandler);
