import "./App.css";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState("");
  const [searchedCity, setSearchedCity] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (city.trim() === "") return;

    setLoading(true);

    setError("");
    setTemperature(null);
    setSearchedCity("");
    setLatitude(null);
    setLongitude(null);
    setWeather(null);

    try {
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city.trim())}&count=1`
      );

      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        setError("City not found");
        return;
      }

      const lat = geoData.results[0].latitude;
      const lon = geoData.results[0].longitude;
      const cityName = geoData.results[0].name;

      setLatitude(lat);
      setLongitude(lon);
      setSearchedCity(cityName);

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`
      );

      const weatherData = await weatherResponse.json();
      const wea = weatherData.current.weather_code;

      setWeather(wea);
      setTemperature(weatherData.current.temperature_2m);
    } catch (err) {
      setError("Something went wrong. Please try again. ⚠️");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>🌦️ Weather App</h1>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      {loading && <p>⏳ Loading weather...</p>}

      <button onClick={handleSearch}>🔍 Search</button>

      {error && <p>{error}</p>}

      {!error && searchedCity && (
        <>

          <div className="weather-details">
            <div className="main-details">
              <h2>📍 City: {searchedCity}</h2>
              <h2>🌡️ Temperature: {temperature}°C</h2>
            </div>

            <div className="location-details">
              <p>🌐 Latitude: {latitude}</p>
              <p>🌐 Longitude: {longitude}</p>
            </div>
          </div>


          {!error && weather === 0 && <p>☀️ Clear sky</p>}
          {!error && weather === 1 && <p>🌤️ Mainly Clear</p>}
          {!error && weather === 2 && <p>⛅ Partly cloudy</p>}
          {!error && weather === 3 && <p>☁️ Overcast</p>}

          {!error && (weather === 45 || weather === 48) && (
            <p>🌫️ Foggy</p>
          )}

          {!error &&
            (weather === 51 || weather === 53 || weather === 55) && (
              <p>🌦️ Drizzle</p>
            )}

          {!error &&
            (weather === 61 || weather === 63 || weather === 65) && (
              <p>🌧️ Rain</p>
            )}

          {!error &&
            weather !== null &&
            ![0, 1, 2, 3, 45, 48, 51, 53, 55, 61, 63, 65].includes(weather) && (
              <p>🌍 Unknown weather condition</p>
            )}
        </>
      )}
    </div>
  );
}

export default App;
