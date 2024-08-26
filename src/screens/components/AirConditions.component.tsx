import React from "react";
import {
  FaGlassWaterDroplet,
  FaTemperatureQuarter,
  FaWind,
} from "react-icons/fa6";
import { useWeather } from "../../context/weatherContext";

function AirConditionsComponent() {
  const {weather} = useWeather()
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-screen-lg mx-auto">
      <h1 className="text-lg font-bold  text-slate-400 mb-4">Air Conditions</h1>
      <div className=" w-full grid grid-cols-2 gap-5">
        {/* temp  */}
        <div className="flex gap-3 ">
          <FaTemperatureQuarter className="dark:text-white"/>
          <div className="dark:text-slate-300 flex flex-col space-y-4">
            <h3>Temperature</h3>
            <span className="text-5xl font-bold text-white">{weather?.current.temp_c}°</span>
          </div>
        </div>
        {/* wind  */}
        <div className="flex gap-3">
          <FaWind className="dark:text-white"/>
          <div className="dark:text-slate-300 flex flex-col space-y-4">
            <h3>Wind</h3>
            <span className="text-5xl font-bold text-white">{weather?.current.wind_kph} Km/h</span>
          </div>
        </div>
        {/* rain  */}
        {/* <div className="flex gap-3">
          <FaGlassWaterDroplet className="dark:text-white" />
          <div className="dark:text-slate-300 flex flex-col space-y-4">
            <h3>Chance of Rain</h3>
            <span className="text-5xl font-bold text-white">{weather?.current.}</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default AirConditionsComponent;
