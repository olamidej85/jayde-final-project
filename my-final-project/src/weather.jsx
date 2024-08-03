import React, {useState} from "react";
import axios from 'axios';
import "./Weather.css";


export default function weather() {
 const [ready, setReady] = useState(true);
const [weatherData, setWeatherData] = useState({});
function handleResponse(response){
    setReady(true);
    console.log(response.data);
   
    setWeatherData({
        temperature: response.data.temperature.current,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        date: "sarturday 10:50",
        city: response.data.name
    });
}
if (ready){
    return (<div className="weather">
    <form>
        <div className="row">
            <div className="col-9">
            <input type="search" placeholder="Enter a city......" className="form-control" autoFocus="on"/>
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
            </div>
        </div>
    </form>
    <h1> {weatherData.city}</h1>
    <ul>
        <li>{weatherData.date}</li>
        <li>cloudy</li>
    </ul>
    <div className="temp-unit text-center">
    <span className="temperature ">{Math.round(weatherData.temperature)}</span>
    <span className="unit">°C</span>
    </div>
    <div className="row text-center ">
        <div className="col-6">
            <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            </ul>
        </div>
        <div className="col-6">
            <ul>
                <li>Wind: {weatherData.wind}km/h</li>
            </ul>
        </div>
    </div>
</div>);

} else {
    const apiKey = "af6881898c0658bf57fb18b55894e370";
let city = "lagos";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
return "Loading.....";
}
   }