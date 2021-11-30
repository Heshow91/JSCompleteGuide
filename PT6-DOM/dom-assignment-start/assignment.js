const task1 = document.getElementById('task-1')
const taskOne = document.querySelector('#task-1')

task1.style.backgroundColor = 'black'
task1.style.color = 'white'

taskOne.style.backgroundColor = 'black'
taskOne.style.color = 'white'


//const changeTitle = document.querySelector('title')
const docHead = document.head.querySelector('title')

docHead.textContent = 'Assignment - Solved'
// changeTitle.textContent = 'Assignment - Solved'

const h1 = document.getElementsByTagName('h1')

h1[0].textContent = 'Assignment - Solved'
