import React, { useState, useEffect } from "react";
import "./forecast.css";
import axios from "axios";
import ForecastDay from "./forecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.forecastData.cityName]);

  function getForecast(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast-maindiv">
        <div className="row">
          <div className="d-flex flex-row justify-content-between">
            <ForecastDay forecastData={forecastData[0]} />
            <ForecastDay forecastData={forecastData[1]} />
            <ForecastDay forecastData={forecastData[2]} />
            <ForecastDay forecastData={forecastData[3]} />
            <ForecastDay forecastData={forecastData[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "b2dt6f634c03ca0b6c80o88e820fa880";
    let city = props.forecastData.cityName;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(getForecast);

    return null;
  }
}
