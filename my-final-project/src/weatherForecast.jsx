import React,{useState, useEffect} from "react";

import WeatherForecastDay from "./weatherForecastDay";
import "./weatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
  let [loaded,setLoaded]= useState(false);
  let [forecast,setForecast]= useState(null);
  useEffect(()=> {setLoaded(false);}, [props.coordinates])

    function handleResponse(response){
         console.log(response.data); 
         setForecast(response.data.daily);
         setLoaded(true);
    }
   console.log(props);
    
    if(loaded){
      return(
        <div className="weatherForecast">
        <hr />
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[3]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[4]} />
          </div>
        
        </div>
      </div>
      );
  
    } else{

      let apiKey="fe1483f743b581b5520a1b725af03a49";
      let longitude=props.coordinates.lon;
      let latitude=props.coordinates.lat; 
      
      let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`; 
      
      
      axios.get(apiUrl).then(handleResponse);
      return null;
    
}
}