import React, { useState } from "react";
import "./weather.css";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState(`celsius`);

  function convertToF(event) {
    event.preventDefault();
    setUnit(`fahrenheit`);
  }

  function convertToC(event) {
    event.preventDefault();
    setUnit(`celsius`);
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === `celsius`) {
    return (
      <div>
        <span className="temperature">{props.celsius}°</span>
        <span className="units">
          <span className="fs-2 fw-semibold">C</span> |{" "}
          <a href="/" onClick={convertToF}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature">{Math.round(fahrenheit())}°</span>
        <span className="units">
          <a href="/" onClick={convertToC}>
            C
          </a>{" "}
          | <span className="fs-2 fw-semibold">F</span>
        </span>
      </div>
    );
  }
}
