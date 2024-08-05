import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./Weather.css";


export default function weather() {
 const [ready, setReady] = useState(false);
 const [city, setCity] = useState("lagos");
const [weatherData, setWeatherData] = useState({   
    temperature: "--",
    humidity: "--",
    description: "--",
    wind: "--",
    city: "--"
});

function handleResponse(response){   
    setWeatherData({
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        city: response.data.name,
        description:  response.data.weather[0].description,
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
      <div className="container">
        <div className="weather-app">
      <form
      className="form-inline d-flex justify-content-center md-form form-sm"
      onSubmit={handleSubmit}>
        
            <input type="search" 
            placeholder="Enter a city..." 
             className="form-control form-control-sm mr-3 w-75"  onChange={handleCityChange} />
            <input type="submit"
             value="Search" 
             className="search-icon" />
      </form>
      <hr />
      <h1 className="city">{weatherData.city}</h1>
      <div className="row text-center">
        <div className="col-6">
        <ul> 
        <li className="info">{ready ? new Date().toLocaleString() : "--"}</li>
        </ul>
        </div>
      
        <div className="col-6">
        <ul>
        <li className="info">{weatherData.description}</li>
        </ul>
          </div> 
      </div>
      <div className="temp-unit text-center">
        <span className="temperature">{ready ? Math.round(weatherData.temperature) : "--"}</span>
        <span className="unit">°C</span>
      </div>
      <div className="row text-center">
        <div className="col-6">
          <ul>
            <li className="info">Humidity: {weatherData.humidity}%</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li className="info">Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}