import React, { useState } from "react";


export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="Weathertemperature">
        <div className="temp-unit text-center">
          <span className="temperature">{Math.round(props.celsius)}</span>
          <span className="unit">
            °C {""}  |
          </span>
          <span className="unit" >
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
      </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <div className="temp-unit text-center"> 
          <span className="temperature">{Math.round(fahrenheit())}</span>
          <span className="unit">
            <a href="/" onClick={showCelsius}>
              °C
            </a> {""} |
          </span>
         
          <span className="unit">
            °F
          </span>
          </div>
      </div>
    );
  }
}