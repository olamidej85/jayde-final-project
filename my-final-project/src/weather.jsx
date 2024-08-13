import React, { useState } from "react";

import WeatherInfor from "./weatherInfor";
import WeatherForecast from "./weatherForecast";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      max: Math.round(response.data.main.temp_max),
      min: Math.round(response.data.main.temp_min),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "0e8411b87ebdb4c7a51d12f84927e60d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="container">
          <div className="weather-app">
        <form onSubmit={handleSubmit}
        className="form-inline d-flex justify-content-center md-form form-sm"
        >
          
              <input type="search" 
              placeholder="Enter a city..." 
               className="form-control form-control-sm mr-3 w-75"
               onChange={handleCityChange}   />
              <button type="submit" 
               className="search-icon">
                   <i className="fas fa-search"></i>
                </button>
        </form>
        <hr />
        <WeatherInfor data={weatherData} />
        < WeatherForecast coordinates={weatherData.coordinates} />
      </div>
      </div>
   </div>   
    );
  } else {
    search();

    return "Loading...";
  }
}