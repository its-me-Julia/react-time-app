import React from "react";
import TimeStampFormat from "./TimeStamp";
import UnitConversion from "./unitConversion.js";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.allData.cityName}</h1>
      <ul>
        <li>
          <TimeStampFormat timestamp={props.allData.date} />
        </li>
        <li className="text-capitalize">{props.allData.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 main-info">
          <img src={props.allData.imgUrl} alt={props.allData.imgAlt} />
          <UnitConversion celsius={props.allData.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.allData.humidity}</li>
            <li>Wind: {props.allData.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
