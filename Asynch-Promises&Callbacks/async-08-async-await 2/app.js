const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
	const promise = new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(success) => {
				resolve(success);
			},
			(error) => {
				reject(error);
			},
			opts
		);
	});
	return promise;
};

const setTimer = (duration) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Done!');
		}, duration);
	});
	return promise;
};

async function trackUserHandler() {
	let positionData;
	let posData;
	let timerData;
	try {
		posData = await getPosition();
		timerData = await setTimer(2000);
	} catch (error) {
		console.log(error);
	}
	console.log(timerData, posData);
	// getPosition()
	//   .then(posData => {
	//     positionData = posData;
	//     return setTimer(2000);
	//   })
	//   .catch(err => {
	//     console.log(err);
	//     return 'on we go...';
	//   })
	//   .then(data => {
	//     console.log(data, positionData);
	//   });
	setTimer(1000).then(() => {
		console.log('Timer done!');
	});
	console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// Promise.race([getPosition(), setTimer(5000)]).then(data =>{
//   console.log(data);
// });//takes an array of promises race returns a promise that returns the fastest promise it was passed too
// want to exeute after all promises have ran
Promise.all([getPosition(), setTimer(1000)]).then((data) => {
	console.log(data); // data will be combined data of all the promises if one of the promises fail then the next one will not execute
});
// Promise,allSettled([getPosition(),setTimer()]).then(data =>{
//   console.log(data);
// })
// getPosition();
// setTimer(1000);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);

async function promiseAllTest1() {
	let data1;
	let data2;
	try {
		const data = await Promise.all([getPosition(), setTimer(1000)]);
		data1 = data[0];
		data2 = data[1];
	} catch {
		console.log(error);
	}
	console.log(data1);
	console.log(data2);
}
