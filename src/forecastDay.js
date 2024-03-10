import React from "react";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.forecastData.time * 1000);
    console.log(props.forecastData.time);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }

  return (
    <div className="d-flex flex-column">
      <div className="forecast-day fw-bold">{day()}</div>
      <img
        src={props.forecastData.condition.icon_url}
        alt={props.forecastData.condition.icon}
      />
      <div className="forecast-temperature">
        <span className="forecast-temperature-max">
          {Math.round(props.forecastData.temperature.maximum)}°
        </span>{" "}
        |{" "}
        <span className="forecast-temperature-min">
          {Math.round(props.forecastData.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
