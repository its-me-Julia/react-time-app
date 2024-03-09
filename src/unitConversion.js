import React, { useState } from "react";

export default function UnitConversion(props) {
  return (
    <div>
      <span className="temperature">{props.celsius}</span>
      <span className="units">C|F</span>
    </div>
  );
}
