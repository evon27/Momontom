const form = document.querySelector(".form-name");
const input = form.querySelector("input");
const h3 = document.querySelector(".h3-name");

const USER_LS = "USER"
const SHOW_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOW_CN);
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text) {
    form.classList.remove(SHOW_CN);
    h3.classList.add(SHOW_CN);
    h3.innerText = `Hello ${text}`
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();