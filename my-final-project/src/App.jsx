import React from "react";
import "./App.css";
import Weather from "./weather.jsx";

export default function App() {
  return <div className="App"> 
  <div className="container">
  
  <Weather defaultCity="lagos" />
  <footer> 
    This project was coded by Jayde and is {""}
    <a href="https://github.com/olamidej85/jayde-final-project" target="_blank">
    open-sourced on Github 
      </a>
  </footer>
  </div>
    </div>;
}