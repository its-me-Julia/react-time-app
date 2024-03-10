import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./weatherInfo";
import WeatherForecast from "./forecast";
import "./weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function fetchResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      cityName: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      imgAlt: response.data.condition.icon,
      imgUrl: response.data.condition.icon_url,
      temperature: Math.round(response.data.temperature.current),
      humidity: `${Math.round(response.data.temperature.humidity)}%`,
      wind: `${Math.round(response.data.wind.speed)}km/h`,
    });
  }

  function search() {
    const apiKey = "b2dt6f634c03ca0b6c80o88e820fa880";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(fetchResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather-frame">
        <form onSubmit={handleSubmit}>
          <div className="row m-auto justify-content-between">
            <input
              onChange={handleChange}
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
        <WeatherInfo allData={weatherData} />
        <br />
        <br />
        <WeatherForecast forecastData={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
