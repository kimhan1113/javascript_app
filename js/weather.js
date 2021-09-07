const API_KEY = "0e3b1448853a6da76e5b7cab5eeb7c99";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.log(lat, lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url).then(Response => Response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃`
    });
}

function onGeoError(){
    alert("Can't find where you are");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);