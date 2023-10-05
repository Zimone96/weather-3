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
  let temp = Math.round(response.data.main.temp);
  let name = response.data.name;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${name} ${fullTime}`;

  let tempDisplay = document.querySelector("a");
  tempDisplay.innerHTML = `${temp} °C`;

  let description = document.querySelector(".convert-text");
  let realDescription = response.data.weather[0].description;
  description.innerHTML = `-*-*-> ${realDescription} <-*-*-`;

  let iconChange = document.querySelector("i");
  let weatherIcon = response.data.weather[0].icon;
  let weatherIconHtml = `<img src=https://openweathermap.org/img/wn/${weatherIcon}@2x.png>`;
  iconChange.innerHTML = `${weatherIconHtml}`;
}

function searchCity(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#citySearch");
  let city = citySearch.value;
  let apiKey = "597c40c39084687093b091cd48b366f8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

let form = document.querySelector("#city-holder");
form.addEventListener("submit", searchCity);

//🙀Bonus Feature

function showTemp2(response) {
  let temp = Math.round(response.data.main.temp);
  let name = response.data.name;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${name} ${fullTime}`;

  let tempDisplay = document.querySelector("a");
  tempDisplay.innerHTML = `${temp} °C`;

  let description = document.querySelector(".convert-text");
  let realDescription = response.data.weather[0].description;
  description.innerHTML = `-*-*-> ${realDescription} <-*-*-`;

  let iconChange = document.querySelector("i");
  
  let weatherIcon = response.data.weather[0].icon;
  let weatherIconHtml = `<img src=https://openweathermap.org/img/wn/${weatherIcon}@2x.png>`;
  iconChange.innerHTML = `${weatherIconHtml}`;
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "445905dadb3d2b0c6f1b916c9d0e3860";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showTemp2);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let searchLoc = document.querySelector(".search-loc");
searchLoc.addEventListener("click", getCurrentLocation);
