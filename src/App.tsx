import React, { useState } from "react";
import { fetchWeather } from "./services/weatherAPI";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import "./App.scss";
import { Footer } from "./components/layout/footer.tsx";

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (city: string) => {
    const data = await fetchWeather(city);
    setWeatherData(data);
  };

  return (
    <>
      <h1 className="text-4xl font-bold mb-4 text-center">Sky Cast</h1>
      <SearchBar onSearch={handleSearch} />
      {weatherData && <WeatherCard data={weatherData} />}
      <Footer />
    </>
  );
};

export default App;
