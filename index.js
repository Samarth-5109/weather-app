const inputText = document.querySelector(".city-input");
const searchBtn = document.querySelector(".btn");
const temperature = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humid-perc");
const wind = document.querySelector(".wind-speed");
const weatherDetails = document.querySelector(".weather-details");
const serverKey = "0c3fe26502b28ecc15a3ae22e25cd1be";
const serverUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric";

function getWeatherUrl(city) {
  return serverUrl + `&appid=${serverKey}` + `&q=${city}`;
}

searchBtn.addEventListener("click", function clickEventhandler() {
  const cityName = inputText.value;
  if (cityName === "") {
    weatherDetails.style.display = "none";
  } else {
    weatherDetails.style.display = "block";
    fetch(getWeatherUrl(cityName))
      .then((response) => response.json())
      .then((json) => {
        const cityTemp = json.main.temp;
        const cityHumidity = json.main.humidity;
        const cityWindSpeed = json.wind.speed;

        temperature.innerText = cityTemp + "°C";
        city.innerText = cityName;
        humidity.innerText = cityHumidity + "%";
        wind.innerText = cityWindSpeed + "km/h";
      });
  }
});
