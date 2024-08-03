import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState("lagos");
  const [weatherData, setWeatherData] = useState({
    temperature: "--",
    humidity: "--",
    description: "--",
    wind: "--",
    city: "--"
  });

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
    setReady(true);
  }

  function search() {
    const apiKey = "af6881898c0658bf57fb18b55894e370";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setReady(false);
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  useEffect(() => {
    search();
  }, []);

  return (
    <div className="weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange} />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li>{ready ? new Date().toLocaleString() : "--"}</li>
        <li>{weatherData.description}</li>
      </ul>
      <div className="temp-unit text-center">
        <span className="temperature">{ready ? Math.round(weatherData.temperature) : "--"}</span>
        <span className="unit">°C</span>
      </div>
      <div className="row text-center">
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
