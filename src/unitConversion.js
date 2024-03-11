import React, { useState } from "react";
import "./weather.css";

export default function UnitConversion(props) {
  return (
    <div>
      <span className="temperature">{props.celsius}°</span>
      <span className="units">
        <span className="fs-2 fw-semibold">C</span>
      </span>
    </div>
  );
}
