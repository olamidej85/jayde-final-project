import React from "react";
import WeatherIcon from "./weatherIcon";
import "./weatherForecast.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="weather-forecast-day">{day()}</div>
      <div className="weather-forecast-icon"> <WeatherIcon code={props.data.weather[0].icon} size={36} /> </div>
      <div className="weather-forecast-temp">
        <span className="max">
          {maxTemperature()}
        </span>
        <span className="min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}