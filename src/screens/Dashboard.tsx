import React, { useContext, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ForecastComponent from "./components/Forecast.component";
import WeatherComponent from "./components/Weather.component";
import AirConditionsComponent from "./components/AirConditions.component";
import CurrentDayForecastComponent from "./components/CurrentDayForecast.component";
import { useWeather, WeatherContextType } from "../context/weatherContext";

function Dashboard() {
  const { error, loading, fetchWeatherByLocation } = useWeather();
  useEffect(() => {
    fetchWeatherByLocation("Hyderabad");
  }, []);
  return (
    <div className="w-full min-h-screen flex flex-col gap-4 py-5">
      <div className="container max-w-screen-xl mx-auto w-full sticky top-5  z-10 grid grid-cols-1 lg:grid-cols-3 gap-6  ">
        <div className="lg:col-span-2">
          <SearchBar />
        </div>
      </div>

      {loading && (
        <div className="container mx-auto  flex items-center justify-center w-full max-w-screen-xl flex-1">
          <h1 className="text-3xl text-white">Loading ....</h1>
        </div>
      )}
      {error && (
        <div className="container mx-auto  flex items-center justify-center w-full max-w-screen-xl flex-1">
          <h1 className="text-3xl text-white">{error}</h1>
        </div>
      )}
      {!loading && !error && (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-screen-xl flex-1">
          <div className="lg:col-span-2 space-y-6 overflow-y-auto h-full pr-2">
            <WeatherComponent />
            <CurrentDayForecastComponent />
            <AirConditionsComponent />
          </div>

          <div className="">
            <ForecastComponent />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
