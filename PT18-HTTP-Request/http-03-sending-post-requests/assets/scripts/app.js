const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul'); // everything is appended to the un ordered list
function sendHttpRequest(method, url, data) {
	// const promise = new Promise((resolve, reject) => {
	// const xhr = new XMLHttpRequest();

	// xhr.open(method, url);

	// xhr.responseType = 'json';

	// xhr.onload = function () {
	// 	if (xhr.status >= 200 && xhr.status < 300) {
	// 		resolve(xhr.response);
	// 	} else {
	// 		reject(new Error('Something went wrong'));
	// 	}
	// 	// const listOfPosts = JSON.parse(xhr.response);
	// };
	// xhr.onerror = function () {
	// 	// this will trigger when ever we have an error
	// 	reject(new Error('Failed to send request!'));
	// };

	// xhr.send(JSON.stringify(data)); // this will add the data
	// fetch api will send a GET request also it is a promise in itself
	// return promise
	return fetch(url, {
		method: method, // forwarding the paramter we set
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json' // this tells the server that my request has JSON data
		}
	})
		.then((response) => {
			if (response.status >= 200 && response.data < 300) {
				return response.json(); // will yeild a promise that will returns json to javascript format
			}else{
        return response.json().then(errData =>{
          console.log(errData);
          throw new Error('Something went wrong server-side')

        }) // need to call response.json to call the data
      }
		})
		.catch((error) => {
			console.log(error);
			throw new Error('Something went wrong');
		});
}

async function fetchPosts() {
	try {
		const responseData = await sendHttpRequest(
			'GET',
			'https://jsonplaceholder.typicode.com/posts'
		);
		const listOfPosts = responseData;
		for (const post of listOfPosts) {
			const postEl = document.importNode(postTemplate.content, true);
			postEl.querySelector('h2').textContent = post.title.toUpperCase();
			postEl.querySelector('p').textContent = post.body;
			postEl.querySelector('li').id = post.id; // each elemnent in the list has its own id
			listElement.append(postEl);
		}
	} catch (error) {
		alert(error.message);
	}
}

async function createPost(title, content) {
	const userId = Math.random();
	const post = {
		title: title,
		body: content,
		userId: userId
	};

	sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
}

fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', (event) => {
	event.preventDefault(); // so browser does not submit the form
	const enteredTitle = event.currentTarget.querySelector('#title').value;
	const enteredContent = event.currentTarget.querySelector('#content').value;
	createPost(enteredTitle, enteredContent);
	event = form.reset();
});
// need to map id to the element for deleting
postList.addEventListener('click', (event) => {
	//find which item was clicked
	if (event.target.tagName === 'BUTTON') {
		const postList = event.target.closest('li'); // looks for the closest list item that was clicked by
		const postId = postList.id;
		sendHttpRequest(
			'DELETE',
			`https://jsonplaceholder.typicode.com/posts/${postId}`
		);
		postList.remove();
	}
});
