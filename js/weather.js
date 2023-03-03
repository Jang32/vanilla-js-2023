const API_KEY = "e91b9f9cc8924b50faa94ad75ec271f6"

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = ` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = `@${data.name}`;
      weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp*10)/10}°C`;
    });
}
function onGeoErr() {
  alert("Can't find you. Weather is not available.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);