import React from "react";
import "./forecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="forecast-maindiv">
      <div className="row">
        <div className="col d-flex flex-column">
          <div className="forecast-day">Day</div>
          <img src={props.icon.imgUrl} alt={props.icon.imgAlt} />
          <div className="forecast-temperature">
            <span className="forecast-temperature-max">10°</span> |{" "}
            <span className="forecast-temperature-min">0°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
