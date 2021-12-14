// // const h1 = document.getElementById('main-title');
// const h1 = document.getElementById('main-title');
// //  const listItemElements = document.querySelectorAll('li')
// // getElement give live changes
// const listItemElements = document.getElementsByTagName('li');
// const li = document.querySelector('li:last-of-type');
// const body = document.body

// li.textContent = li.textContent + ' (Changed!) ';

// //  h1.textContent
// //  'Dive into the DOM!'
// //  h1.className
// //  ''
// // h1.textContent = 'Something Else Now'
// // 'Something Else Now'
// //  h1.className = 'title'
// //  'title'
// //  h1.style.alignContent
// //  ''
// //  h1.style.color = 'Blue'
// // 'Blue'
// //  h1.style.backgroundColor = 'orange'
// //  'white'
// for (let listItem of listItemElements) {
// 	console.dir(listItem);
// }
// h1.textContent = 'Another Title';
// h1.style.color = 'Navy';
// h1.style.backgroundColor = 'Tan';

// // how to nagivate down the node tree
//  const ul = document.querySelector('ul')
//  ul.lastChild.textContent = 'heyy'

// //  how to navigate from child node to parent/ancestor
//  const liFirst = document.querySelector('li')
// // liFirst.closest('body') is an ancestor up the elemnt tree that wraps the UL

// // navigate between sibling nodes
// const ulList = li.parentElement
// // ulList.previousElementSibling will access the header node/elemnt
//  ulList.nextElementSibling.textContent = 'something new'  //will access the input node/element

// //  since firstElement child is the header we can access its sibling which is the un-ordered list
//  const unList = document.body.firstElementChild.nextElementSibling
//  const firstLi = unList.firstElementChild
//  console.log(firstLi);
const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;
// now will access the UL instead of the list
console.log(firstLi);

// this overrides the class styling we had in the html, inline styling takes over
const section = document.querySelector('section');
const btn = document.querySelector('button');
//section.style.backgroundColor = 'navy'

// this removes what we had on the class
section.className = 'red-bg';

btn.addEventListener('click', () => {
	// if its equal to red - visible
	// if (section.className === 'red-bg visible') {
	// 	// then i want to set the classname to red invisible
	// 	section.className = 'red-bg invisible';
	// } else {
	// 	// else i want it to be red and visible
	// 	section.className = 'red-bg visible';
	// }
// this will check if its visible then we can toggle to become invisible
	// section.classList.toggle('visible')
	// more flexible
	 section.classList.toggle('invisible')
});
// inner html, changing the content, will replace what was in there before
// section.innerHTML = '<h2> a new title </h2>'

// append to exsisting html thats already there
// this is bad because it renders the whole html all user input will be lost
const list = document.querySelector('ul')
list.innerHTML = list.innerHTML + '<li class="list-item">Item 4 added</li>'

// insertAdjacent allows you to target a position then what you want to enter
// 'beforebegin': Before the element itself.
// 'afterbegin': Just inside the element, before its first child.
// 'beforeend': Just inside the element, after its last child.
// 'afterend': After the element itself.
// const div = document.querySelector('div')
// inserts new code next to the exsisting content
//div.insertAdjacentHTML('beforeend', '<p>Something went wrong!</p>')
// downside is that we have no direct access to the new content 

// this is better when adding new elements and we can access it now
const newLi = document.createElement('li')
newLi.textContent = 'Item 5'
 list.appendChild(newLi)

//  prepend the newly created element to the top of the list
 const newList = document.createElement('li')
 newList.textContent = 'Item 6';
 list.prepend(newList);

//  existing element is moved to a new place
// list.lastElementChild.replaceWith(newList);

// list.firstElementChild.replaceWith(newList);
// copy an element with all child nodes
const newLi2 = newLi.cloneNode(true)
list.append(newLi, newLi2)
// removing elements 
// this will remove the whole list
// list.remove()
// list.parentElement.removeChild('ul')
newList.textContent = newList.textContent + 'plus some more 🤌🏽 '
 