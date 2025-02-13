import { useState } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&{appid=d3cbbe24790a6855c4c3d9f1d8a094c0}`
      );

      const data = await response.json();

      console.log(data, "data");
    } catch (e) {
      console.log(e);
    }
  }

  function handleSearch(search) {
    fetchWeatherData(search);
  }

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <div className="weather-name">Weather</div>
    </div>
  );
}
