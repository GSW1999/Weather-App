const weatherApiKey = /*enter your open weather app api key*/"";
const weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"

function getWeatherDetails(cityName) {
    let response = fetch(weatherApiUrl + `&q=${cityName}&appid=${weatherApiKey}`);
    response.then(response => {
        if (response.status == "404") {
            document.querySelector(".error").style.display = "block";
            weatherDetailsBox.style.display = "none";
        }
        else
            return response.json();
    }).then(data => {
        if (data) {
            console.log(data);
            document.querySelector("#city").innerHTML = data.name;
            document.querySelector("#temperature").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
            weatherImg.src = `./images/${data.weather[0].main.toLowerCase()}.png`;
            document.querySelector(".error").style.display = "none";
            weatherDetailsBox.style.display = "block";
        }
    })

}
const cityName = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-btn");
const weatherImg = document.querySelector(".weather-icon");
const weatherDetailsBox = document.querySelector(".weather-details");

searchBtn.addEventListener("click", () => {
    getWeatherDetails(cityName.value);

})
