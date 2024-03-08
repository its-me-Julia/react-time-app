import React from "react";
import "./App.css";
import Weather from "./weather";

export default function App() {
  return (
    <div className="App">
      <h1 className="header">Weather App</h1>
      <Weather />
      <footer>
        <p class="footer-text">
          - Coded by{" "}
          <a class="footer-link" href="https://github.com/its-me-Julia">
            JuliaD
          </a>
          -
        </p>
      </footer>
    </div>
  );
}
