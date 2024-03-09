import React from "react";

export default function TimeStampFormat(props) {
  console.log(props.timestamp);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.timestamp.getDay()];
  let hours = props.timestamp.getHours();
  let minutes = props.timestamp.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return (
    <div>
      {day}, {hours}:{minutes}
    </div>
  );
}
