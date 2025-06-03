import React from "react";

interface Props {
  data: any;
}

const WeatherCard: React.FC<Props> = ({ data }) => {
  const { name, main, weather, wind } = data;

  return (
    <div className="p-4 text-center w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-xl font-semibold">{main.temp}°C</p>
      <p className="italic">{weather[0].description}</p>
      <div className="mt-4 text-sm space-y-1">
        <p>🌡 Feels like: {main.feels_like}°C</p>
        <p>💧 Humidity: {main.humidity}%</p>
        <p>💨 Wind: {wind.speed} m/s</p>
        <p>📈 Pressure: {main.pressure} hPa</p>
      </div>
    </div>
  );
};

export default WeatherCard;
