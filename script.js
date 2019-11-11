let now = new Date();

let today = document.querySelector(".date");
let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();
let days = ["sun", "mon", "tue", "wen", "thu", "fri", "sat"];
let day = days[now.getDay()];
let months = [
  "jen",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec"
];
let month = months[now.getMonth()];
today.innerHTML = `${day} ${date} ${month}  ${hour}:${minutes}`;

let apiKey = "71f687cf35794567462cfbc034ffcc9d";
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector("#temp");
  temp.innerHTML = `${temperature}`;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  city.innerHTML = `${searchInput.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&appid=${apiKey}`;
  axios.get(`${apiUrl}`).then(showTemperature);
}
let form = document.querySelector("#enter-city");
form.addEventListener("submit", search);

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(showPosition);

let button = document.querySelector("#current-loc");
button.addEventListener("click", showPosition);
