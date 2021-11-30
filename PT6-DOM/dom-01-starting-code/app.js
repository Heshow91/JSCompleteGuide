// const h1 = document.getElementById('main-title');
const h1 = document.getElementById('main-title');
//  const listItemElements = document.querySelectorAll('li')
// getElement give live changes
const listItemElements = document.getElementsByTagName('li');
const li = document.querySelector('li:last-of-type');
const body = document.body

li.textContent = li.textContent + ' (Changed!) ';


//  h1.textContent
//  'Dive into the DOM!'
//  h1.className
//  ''
// h1.textContent = 'Something Else Now'
// 'Something Else Now'
//  h1.className = 'title'
//  'title'
//  h1.style.alignContent
//  ''
//  h1.style.color = 'Blue'
// 'Blue'
//  h1.style.backgroundColor = 'orange'
//  'white'
for (let listItem of listItemElements) {
	console.dir(listItem);
}
h1.textContent = 'Another Title';
h1.style.color = 'Navy';
h1.style.backgroundColor = 'Tan';
