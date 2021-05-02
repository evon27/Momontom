import "./styles.css";

const form = document.querySelector(".form-todo");
const input = form.querySelector("input");
const list = document.querySelector(".list-todo");

const TODOS_LS = "TODOS"

let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;

    list.removeChild(li);

    const cleanToDos = toDos.filter(toDo => {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDos(text) {
    const li = document.createElement("li");
    const newId = toDos.length + 1;
    li.id = newId;

    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    span.innerHTML = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);

    const toDoObj = {
        id:   newId,
        text:  text,
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintToDos(currentValue);
    input.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(toDo => {
            paintToDos(toDo.text);
        })
    }
}

function init() {
    loadToDos();
    form.addEventListener("submit", handleSubmit);
}

init();