let addToDoButton = document.getElementById('addToDo');
let iDForToDoContainerToAccessWithJS = document.getElementById('iDForToDoContainerToAccessWithJS');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    iDForToDoContainerToAccessWithJS.appendChild(paragraph);

    inputField.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })

    paragraph.addEventListener('dblclick', function(){
        iDForToDoContainerToAccessWithJS.removeChild(paragraph);
    })


})
