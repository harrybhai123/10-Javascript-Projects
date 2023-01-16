const API_KEY = "4d8fb5b93d4af21d66a2948710284366";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=`;

async function getWeather(city) {
  const response = await fetch(`${API_URL}${city}&appid=${API_KEY}`);
  const data = await response.json();
  return data;
}

function displayWeather(weatherData) {
  const weatherContainer = document.querySelector("#weather");
  weatherContainer.innerHTML = `
  <h2>Weather in ${weatherData.name}</h2>
  <p>Temperature: ${weatherData.main.temp}°F</p>
  <p>Weather: ${weatherData.weather[0].description}</p>
`;
}

const searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", async () => {
  const city = document.querySelector("#city").value;
  const weatherData = await getWeather(city);
  displayWeather(weatherData);
});
