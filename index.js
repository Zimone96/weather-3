//⏰Feature #1
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let now = new Date();
let day = days[now.getDay()];
let hour = now.getHours();
let min = now.getMinutes();
let fullTime = `${day} ${hour}:${min}`;

let h1 = document.querySelector("h1");
h1.innerHTML = `East-London ${fullTime}`;

function showTemp(response) {
  let temp = Math.round(response.data.temperature.current);
  let name = response.data.city;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${name} ${fullTime}`;

  let tempDisplay = document.querySelector("a");
  tempDisplay.innerHTML = `${temp} °C`;

  let description = document.querySelector(".convert-text");
  let realDescription = response.data.condition.description;
  description.innerHTML = `-*-*-> ${realDescription} <-*-*-`;

  let iconChange = document.querySelector("i");
  let weatherIcon = response.data.condition.icon;
  
  let weatherIconHtml = `<img src=http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${weatherIcon}.png>`;
  iconChange.innerHTML = `${weatherIconHtml}`;

  let humidity =document.querySelector(".humid");
  let currentHumid = Math.round(response.data.temperature.humidity);
  humidity.innerHTML= `Humidity : ${currentHumid} %`;

  let wind =document.querySelector(".wind");
  let currentWind = Math.round(response.data.wind.speed);
  wind.innerHTML= `Wind speed : ${currentWind} km/h`;

  
}

function searchCity(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#citySearch");
  let city = citySearch.value;
  let apiKey = "eb49o06628a7b734b67c2eb60f4d3btf";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

let form = document.querySelector("#city-holder");
form.addEventListener("submit", searchCity);

//🙀Bonus Feature

function showTemp2(response) {
  let temp = Math.round(response.data.temperature.current);
  let name = response.data.city;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${name} ${fullTime}`;

  let tempDisplay = document.querySelector("a");
  tempDisplay.innerHTML = `${temp} °C`;

  let description = document.querySelector(".convert-text");
  let realDescription = response.data.condition.description;
  description.innerHTML = `-*-*-> ${realDescription} <-*-*-`;

  let iconChange = document.querySelector("i");
  let weatherIcon = response.data.condition.icon;
  
  let weatherIconHtml = `<img src=http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${weatherIcon}.png>`;
  iconChange.innerHTML = `${weatherIconHtml}`;

  let humidity =document.querySelector(".humid");
  let currentHumid = Math.round(response.data.temperature.humidity);
  humidity.innerHTML= `Humidity : ${currentHumid} %`;

  let wind =document.querySelector(".wind");
  let currentWind = Math.round(response.data.wind.speed);
  wind.innerHTML= `Wind speed : ${currentWind} km/h`;

  console.log(weatherIconHtml)
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "eb49o06628a7b734b67c2eb60f4d3btf";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&units=${units}&key=${apiKey}`;
  
  axios.get(apiUrl).then(showTemp2);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let searchLoc = document.querySelector(".search-loc");
searchLoc.addEventListener("click", getCurrentLocation);
