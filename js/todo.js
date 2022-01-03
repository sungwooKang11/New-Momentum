const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

function fillToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newToDo;
    todoList.appendChild(li);
}

function handleToDo(event) {
    event.preventDefault();
    const newToDo = todoInput.value; 
    todoInput.value = "";
    fillToDo(newToDo);
}

todoForm.addEventListener("submit", handleToDo);