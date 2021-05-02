import "./styles.css";

const form = document.querySelector(".form-clock");
const h1 = document.getElementById("h1-clock");

function setClock() {
    const time = new Date();
    const
        hours = time.getHours(),
        minutes = time.getMinutes();

    h1.innerText = `${hours}:${minutes}`;
    if(minutes < 10) {
        h1.innerText = `${hours}:0${minutes}`;
    }
}

function init() {
    setInterval(setClock, 250);
}

init();