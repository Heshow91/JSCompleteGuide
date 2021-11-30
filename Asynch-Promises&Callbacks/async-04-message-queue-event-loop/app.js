const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimeout(() => {
        console.log('this is before the timee');
        console.log(posData);
      }, 1000);
    },
    error => {
      console.log(error);
    }
  );
  console.log('before timmer');
  setTimeout(() => {
    console.log('Timer running!' + result);
  }, 2000);

  console.log('Getting position...' + result);
}

button.addEventListener('click', trackUserHandler);

let result = 0;

for (let i = 0; i < 100000000; i++) {
  result += i;
}

//console.log(result);
