import React from "react";
import { useWeather } from "../../context/weatherContext";

export default function CurrentDayForecastComponent() {
  const { forecast } = useWeather();

  if (!forecast) {
    return <div>Loading...</div>;
  }

  const currentDayForecast = forecast.forecast.forecastday[0];

  const getIcon = (image: string) => {
    return <img src={image} className="w-16 h-16" alt="weather-icon" />;
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-screen-lg mx-auto">
      <h1 className="text-lg font-bold text-slate-400 mb-4">Today's Forecast</h1>
      <div className="flex w-full overflow-x-auto space-x-4">
        {currentDayForecast.hour.map((hour, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 p-8 shadow-md border-r"
          >
            <span className="text-gray-300 text-lg">
              {new Date(hour.time_epoch??0 * 1000).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
            <span className="text-5xl font-bold text-white">
              {Math.round(hour.temp_c)}°C
            </span>
            {getIcon(hour.condition.icon)}
          </div>
        ))}
      </div>
    </div>
  );
}
