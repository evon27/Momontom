const body = document.querySelector("body");

const IMG_NUM = 5;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber}.JPG`;
    image.classList.add('bgImage');
    image.alt = `Can't load the image no ${imgNumber}`;
    body.prepend(image);
}

function genRand() {
    const number = Math.floor(Math.random() * IMG_NUM);
    return number;
}

function init() {
    const randomNumber = genRand();
    paintImage(randomNumber);
}

init();
