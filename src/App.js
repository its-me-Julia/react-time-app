import React from "react";
import "./App.css";
import Weather from "./weather";

export default function App() {
  return (
    <div className="App">
      <h1 className="header">Weather App</h1>
      <Weather defaultCity="Berlin" />
      <footer>
        <p className="footer-text">
          - Coded by{" "}
          <a className="footer-link" href="https://github.com/its-me-Julia">
            JuliaD
          </a>
          -
        </p>
      </footer>
    </div>
  );
}
