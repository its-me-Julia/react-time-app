import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function fetchResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      description: response.data.condition.description,
      imgAlt: response.data.condition.icon,
      imgUrl: response.data.condition.icon_url,
      temperature: `${Math.round(response.data.temperature.current)}°`,
      feelsLike: `${Math.round(response.data.temperature.feels_like)}°C`,
      humidity: `${Math.round(response.data.temperature.humidity)}%`,
      wind: `${Math.round(response.data.wind.speed)}km/h`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather-frame">
        <form>
          <div className="row m-auto justify-content-between">
            <input
              type="search"
              placeholder="Type a city.."
              autoFocus
              className="search-bar col-7"
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-primary col-2"
            />
            <input
              type="submit"
              value="Current Location"
              className="btn btn-success col-3"
            />
          </div>
        </form>
        <h1>New York, USA</h1>
        <ul>
          <li>Wednesday, 07:00</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6 main-info">
            <img src={weatherData.imgUrl} alt={weatherData.imgAlt} />
            <span className="temperature">{weatherData.temperature}</span>
            <span className="units">C|F</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels like: {weatherData.feelsLike}</li>
              <li>Humidity: {weatherData.humidity}</li>
              <li>Wind: {weatherData.wind}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "sydney";
    const apiKey = "b2dt6f634c03ca0b6c80o88e820fa880";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(fetchResponse);

    return "Loading...";
  }
}
