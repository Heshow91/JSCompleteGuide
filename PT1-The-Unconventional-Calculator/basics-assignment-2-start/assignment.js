const task3Element = document.getElementById('task-3');

function hello(){
   // task3Element.addEventListener();
    alert('Hey')
}
function moreHello(name){
    alert('Hi ' + name)
}
function evenMoreHello(name1, name2, name3){
name1 = 'Hisham';
name2 = ' And';
name3 = ' Cece';
namesAdded =  name1+name2+name3
alert(namesAdded);
}
function combine(str1, str2, str3){
    //const combinedText = str1 + str2 + str3;
    const combinedText = `${str1} ${str2} ${str3}`;
    return combinedText;
}

hello();
moreHello('Hisham');
evenMoreHello();
task3Element.addEventListener('click', hello)
const combinedString = combine('Hi', 'there', 'Hisham');
alert(combinedString);
