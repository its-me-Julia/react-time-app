import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import UpperList from "./upper-list";
import SearchForm from "./form";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <div className="main-div">
        <UpperList />
        <br />
        <SearchForm />
      </div>
      <footer>
        <p className="footer-text">
          - Coded by
          <a className="footer-link" href="https://github.com/its-me-Julia">
            &nbsp;JuliaD
          </a>
          -
        </p>
      </footer>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
