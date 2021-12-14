const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
	const promise = new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(success) => {
				resolve(success); // now when ever we use .then we will look for this data
			},
			(error) => {
        reject(error) // error is a callback from getCurrentPosition 
        // mark the promise as fail
      },
			opts
		);
	});
	return promise;
};

const setTimer = (duration) => {
	// promis constructor
	const promise = new Promise((resolve, reject) => {
		// executes once promise is made
		setTimeout(() => {
			resolve('Done!');
		}, duration);
	});
	return promise;
};

function trackUserHandler() {
	let positionData;
	getPosition()
		.then((posData) => {
			positionData = posData;
			return setTimer(1000); // will set it to pending this ebcomes a promise because its wrapped into a promise
		})
    
		.catch((err) => {
			console.log(err); // we skipp all previous thens if it rejects 
      return 'on we go...' // any then block after the catch will be executed
		})
    //this will execute because the catch does not stop then after it
		.then((data) => { // data = what is returned from the catch block
			console.log(data, positionData); // promise chaining
		});

	setTimer(2000).then(() => {
		console.log('Timer Done!!');
	});
	// this will execute once clicked because this is non blocking code
	console.log('getting current position...');
}

button.addEventListener('click', trackUserHandler);
