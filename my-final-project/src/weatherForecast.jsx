import React, { useState } from "react";
import "./weatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./weatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(true);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <h3 className="D">Daily</h3>
        <hr />
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "0e8411b87ebdb4c7a51d12f84927e60d";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}