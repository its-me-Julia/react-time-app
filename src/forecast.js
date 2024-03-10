import React from "react";
import "./forecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function getForecast(response) {
    console.log(response.data);
  }

  let apiKey = "b2dt6f634c03ca0b6c80o88e820fa880";
  let city = props.forecastData.cityName;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(getForecast);

  return (
    <div className="forecast-maindiv">
      <div className="row">
        <div className="col d-flex flex-column">
          <div className="forecast-day">Day</div>
          <img
            src={props.forecastData.imgUrl}
            alt={props.forecastData.imgAlt}
          />
          <div className="forecast-temperature">
            <span className="forecast-temperature-max">10°</span> |{" "}
            <span className="forecast-temperature-min">0°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
