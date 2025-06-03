import React from "react";

interface Props {
  data: any;
}

const WeatherCard: React.FC<Props> = ({ data }) => {
  const { name, main, weather } = data;

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-xl">{main.temp}°C</p>
      <p>{weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;
