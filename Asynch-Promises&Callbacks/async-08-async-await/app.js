const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
	const promise = new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(success) => {
				resolve(success); // now when ever we use .then we will look for this data
			},
			(error) => {
				reject(error); // error is a callback from getCurrentPosition
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

async function trackUserHandler() { // async wraps your whole function into a promise and now it will return a promise
	// let positionData; becomes a synchronous code because it is executing line afer line
	let posData;
	let timerData
	try{
		 posData = await getPosition() // await waits for the promise to succeed or fail before moving onto next line
		 timerData = await setTimer(2000) // oonce getPosition resolves than setTimer will execute

	}catch (error){
		console.log(error);
	}

	console.log(timerData, posData);
		// .then((posData) => {
		// 	positionData = posData;
		// 	return setTimer(1000); // will set it to pending this ebcomes a promise because its wrapped into a promise
		// })

		// .catch((err) => {
		// 	console.log(err); // we skipp all previous thens if it rejects
		// 	return 'on we go...'; // any then block after the catch will be executed
		// })
		// //this will execute because the catch does not stop then after it
		// .then((data) => {
		// 	// data = what is returned from the catch block
		// 	console.log(data, positionData); // promise chaining
		// });
// with async this will log after the previoius steps because by default this becomes a then block with async await
	setTimer(2000).then(() => {
		console.log('Timer Done!!');
	});
	// // this will execute once clicked because this is non blocking code
	console.log('getting current position...');
}

button.addEventListener('click', trackUserHandler);
