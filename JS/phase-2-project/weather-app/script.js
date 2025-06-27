const city = document.getElementById("city-name");

async function getWeather(cityName, apiKey) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    );
    return await res.json();
  } catch (error) {
    console.error("API error:", error);
  }
}

const result = async () => {
  const cityName = city.value.trim();
  if (!cityName) {
    document.getElementById("weatherResult").innerHTML =
      "<p class='text-red-500'>Please enter a city name.</p>";
    return;
  }

  const weather = await getWeather(cityName, apiKey);

  if (weather.cod !== 200) {
    document.getElementById("weatherResult").innerHTML =
      `<p class='text-red-500'>❌ ${weather.message}</p>`;
    return;
  }

  document.getElementById("weatherResult").innerHTML = `
    <h3 class="text-xl font-semibold">Weather in ${weather.name}</h3>
    <p>🌡 Temperature: <strong>${weather.main.temp} °C</strong></p>
    <p>🌥 Condition: ${weather.weather[0].description}</p>
    <p>💨 Wind: ${weather.wind.speed} m/s</p>
  `;
};
