const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

function handleToDo(event) {
    event.preventDefault();
    const newToDo = todoInput.value; 
    todoInput.value = "";
}

todoForm.addEventListener("submit", handleToDo);