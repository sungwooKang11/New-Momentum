const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS = "todos";
let toDos = [];

//투두리스트를 저장하는 함수
function saveToDos() {
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}

//투두 없애는 함수
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

//투두 채워주는 함수
function fillToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

//인풋에 입력하고 제출을 제어하는 함수
function handleToDo(event) {
    event.preventDefault();
    const newToDo = toDoInput.value; 
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);//투두생성
    fillToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDo);//제출이벤트


const savedToDos = localStorage.getItem(TODOS);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);//JSON에 대한 추가공부 필요
    toDos = parsedToDos;
    parsedToDos.forEach(fillToDo);
}
