//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const footerButtons = document.querySelector('.footer-buttons');
const todoCounter = document.querySelector('.todo-counter');

//Event Listeners
todoInput.addEventListener('keypress', addTodo);
todoList.addEventListener('click', Check);
footerButtons.addEventListener("click", filterTodos);

//Functions
var todosLeft = 0;
function addTodo(e) {
    if (e.key === 'Enter') {
        e.preventDefault();

        footerButtons.style.display = 'block';
        var inputVal = document.getElementsByClassName("todo-input")[0].value;
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        const completedButton = document.createElement('button'); // Check button
        completedButton.innerHTML = '<i class = "fa fa-check"> </i>';
        completedButton.classList.add("completed-button");
        todoDiv.appendChild(completedButton);

        const newTodo = document.createElement('li'); // Todo Inputs
        newTodo.innerText = inputVal;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        const trashButton = document.createElement('button'); //Trash button
        trashButton.innerHTML = '<i class = "fa fa-trash"> </i>';
        trashButton.classList.add("trash-button");
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv); //Append to list

        todosLeft++;
        todoCounter.innerHTML = todosLeft;
        todoCounter.append(" items left");

        todoInput.value = ""; // Clear input
    }
}
function Check(e) {
    if (e.target.classList[0] === 'trash-button') // Delete todo if trash button is pressed
    {
        e.target.parentElement.remove();
        todosLeft--;
        todoCounter.innerHTML = todosLeft;
        todoCounter.append(" items left");
    }
    if (e.target.classList[0] === 'completed-button') // Complete task if check button is pressed
    {
        if (e.target.style.color == "green") {
            e.target.style.color = "gray";
        } else {
            e.target.style.color = "green";
        }
        e.target.parentElement.classList.toggle("completed");
    }

}

function filterTodos(e) {
    let todos = todoList.childNodes;

    for (let i = 0; i < todos.length; i++) {
        if (e.target.className === "all-filter") {
            todos[i].style.display = "flex";
        } else if (e.target.className === "completed-filter") {
            if (todos[i].classList.contains("completed")) {
                todos[i].style.display = "flex";
            } else {
                todos[i].style.display = "none";
            }
        } else if (e.target.className === "active-filter") {
            if (!todos[i].classList.contains("completed")) {
                todos[i].style.display = "flex";
            } else {
                todos[i].style.display = "none";
            }
        } else if (e.target.className === "delete-completed") {
            if (todos[i].classList.contains("completed")) {
                todos.item(i).remove();
                i--;
				todosLeft--;
				todoCounter.innerHTML = todosLeft;
				todoCounter.append(" items left");
                console.log("test3");
				
            }
        }
    }
}








