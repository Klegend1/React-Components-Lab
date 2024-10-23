//import React from 'react';
//import WeatherIcon
import "./weatherForecast.css"

const WeatherData = (props) => {
  return (
    <div className="weather">
      <h2>{props.forecast.day}</h2>
      <img src={props.forecast.img} alt={props.forecast.imgAlt} />
      <p>Conditions: <span>{props.forecast.conditions}</span></p>
      <p>Time: <span>{props.forecast.time}</span></p>
    </div>
  );
};

export default WeatherData;
