import React from "react";
import "./Weather.css";


export default function weather() {
    return <div className="weather">
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
        <h1>Nigeria</h1>
        <ul>
            <li>Thursday 10:52</li>
            <li>Cloudy</li>
        </ul>
        <div className="temp-unit text-center">
        <span className="temperature ">23 </span>
        <span className="unit">°C</span>
        </div>
        <div className="row text-center m-1">
            <div className="col-6">
                <ul>
                <li>Humidity: 8%</li>
                </ul>
            </div>
            <div className="col-6">
                <ul>
                    <li>Wind: 6km/h</li>
                </ul>
            </div>
        </div>
            
        
    </div>;
}