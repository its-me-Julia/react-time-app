import React from "react";
import SearchForm from "./form";

export default function Info(props) {
  return (
    <div>
      <div>
        <h1>{props.cityName}</h1>
        <h5>{props.timeDate}</h5>
        <h6>{props.weather}</h6>
        <div>{props.divider}</div>
        <div className="other-info">
          <div className="icon-and-degrees">
            <h3>
              <img src={props.image} alt="" />
            </h3>
            <h1>{props.temperature}</h1>
            <h6>{props.tempBtn}</h6>
          </div>
          <div className="humidity-wind">
            <p>{props.humidity}</p>
            <p>{props.wind}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
