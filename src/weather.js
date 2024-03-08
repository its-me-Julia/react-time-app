import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="weather-frame">
      <form>
        <input
          type="search"
          placeholder="Type a city.."
          autoFocus
          className="search-bar"
        />
        <input type="submit" value="Search" className="btn btn-primary" />
        <input
          type="button"
          value="Current location"
          className="btn btn-success"
        />
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday, 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6 main-info">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly cloudy"
          />
          6°C|°F
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
