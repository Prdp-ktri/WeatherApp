import { useState } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid={27c7cfb1d16a02ab1d2156ec5ac0885b}`
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
