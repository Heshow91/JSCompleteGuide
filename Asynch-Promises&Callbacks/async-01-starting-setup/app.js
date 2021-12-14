const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
	console.log('Clicked!');
	navigator.geolocation.getCurrentPosition(
		// this will be handed off to the broswer
		(posData) => {
			setTimeout(() => {
				// multiple callbacks and setTimeOut
				console.log(posData);
			}, 2000);
		},
		(error) => {
			console.log(error);
		}
	);
  // this will execute right away after button is clicked after log('getting position)
	setTimeout(() => {
		console.log('Timer Done!');
	}, 0);
	// this will execute once clicked because this is non blocking code
	console.log('getting current position...');
}
console.log('Start positioning');

button.addEventListener('click', trackUserHandler);
