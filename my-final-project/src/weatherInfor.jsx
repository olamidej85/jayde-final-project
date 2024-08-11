import React from "react";
import "./weatherInfor.css";


export default function WeatherInfor(props) {
  let now = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[now.getDay()];
  let date = now.getDate();
  let month = months[now.getMonth()];
  return (
    <div className="weatherInfor">
       <h1 className="city">{props.data.city}</h1>
      <div className="row text-center">
        <div className="col-6">
        <ul> 
        <li className="info"> <h3 id="date">
        {day} — {date} {month}
      </h3>
       </li>
        </ul>
        </div>
      
        <div className="col-6">
        <ul>
        <li className="info">{props.data.description}</li>
        </ul>
          </div> 
      </div>
      <div className="temp-unit text-center">
        <span className="temperature">{ Math.round(props.data.temperature) }</span>
        <span className="unit">°C</span>
      </div>
      <div className="row text-center">
        <div className="col-6">
          <ul>
            <li className="info">Humidity: {props.data.humidity}%</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li className="info">Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}