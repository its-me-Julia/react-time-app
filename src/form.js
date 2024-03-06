import React, { useState } from "react";
import Info from "./info";
import axios from "axios";

export default function SearchForm() {
  let [cityName, setCityName] = useState("");
  let [weatherDescript, setWeatherDescript] = useState("");
  let [temperatureSet, setTemperature] = useState("");
  let [humiditySet, setHumidity] = useState("");
  let [windSet, setWind] = useState("");
  let [iconSet, setIcon] = useState("");
  let [timeSet, setTime] = useState("");
  let [tempChangeSet, setTempChange] = useState("");
  let [dividerSet, setDivider] = useState("");

  function showTemp(response) {
    console.log(response.data);
    let city = response.data.city;
    let country = response.data.country;
    let date = new Date(response.data.time * 1000);
    let timeSetup = formatDate(date);
    let weatherDescription = response.data.condition.description;
    let temperature = Math.round(response.data.temperature.current);
    let humidity = `Humidity: ${Math.round(
      response.data.temperature.humidity
    )}%`;
    let wind = `Wind: ${Math.round(response.data.wind.speed)}km/h`;
    let icon = response.data.condition.icon;
    let iconURL = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${icon}.png`;
    let tempBtn = "°C|°F";
    let divider = <hr />;
    setCityName(`${city}, ${country}`);
    setWeatherDescript(weatherDescription);
    setTemperature(temperature);
    setHumidity(humidity);
    setWind(wind);
    setIcon(iconURL);
    setTime(timeSetup);
    setTempChange(tempBtn);
    setDivider(divider);
  }

  function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[date.getDay()];

    return `${day}, ${hours}:${minutes}`;
  }

  function searchCity(city) {
    let apiKey = "b2dt6f634c03ca0b6c80o88e820fa880";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemp);
  }

  function submitForm(event) {
    event.preventDefault();
    let searchBar = document.querySelector("#searchBar");
    searchCity(searchBar.value);
  }

  return (
    <div>
      <div>
        <form className="search-form" onSubmit={submitForm}>
          <input
            className="search-bar"
            id="searchBar"
            type="text"
            placeholder="Type a city here.."
            autoComplete="off"
            autoFocus
          ></input>

          <input id="searchBtn" type="submit" value="Search"></input>
          <input id="currentBtn" type="button" value="Current Location"></input>
        </form>
      </div>
      <Info
        cityName={cityName}
        weather={weatherDescript}
        temperature={temperatureSet}
        humidity={humiditySet}
        wind={windSet}
        image={iconSet}
        timeDate={timeSet}
        tempBtn={tempChangeSet}
        divider={dividerSet}
      />
    </div>
  );
}
