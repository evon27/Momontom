const weather = document.querySelector(".span-weather");

const COORDS = 'coords';
const API_KEY = "f767fe72dcecda7562e13f5dc89c4f3e";

function getWeather(lat, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(resp => {
        return resp.json();
    }).then(json => {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerHTML = `${temperature}°C ${place}`;
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude:   latitude,
        longitude:  longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.error("위치정보를 불러오지 못했습니다!");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCords);
        const lat = parsedCoords.latitude;
        const lng = parsedCoords.longitude;
        getWeather(lat, lng);
    }
}

function init() {
    loadCoords();
}

init();