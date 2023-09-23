import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <video autoPlay loop muted id="weatherVideo">
          <source
            id="dayVideo"
            src="/videos/cloudy-sky.mp4"
            type="video/mp4"
          />
        </video>

        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form id="search-form" className="mb-3">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a city.."
                    className="form-control"
                    id="city-input"
                    autoComplete="off"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>
            <div className="overview">
              <h1 id="city-name">Kinshasa</h1>
              <ul>
                <li>Last updated: <span id="date"></span></li>
                <li id="description"></li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="clearfix weather-temperature">
                  <img
                    src="images/sun.png"
                    alt="Clear"
                    id="icon"
                    className="float-left"
                  />
                  <div className="float-left">
                    <strong id="temperature"></strong>
                    <span className="units"> °C</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>Humidity: <span id="humidity"></span>%</li>
                  <li>Wind: <span id="wind"></span> km/h</li>
                </ul>
              </div>
            </div>

            <div className="weather-forecast" id="forecast"></div>
            <div className="row">
              <div className="col-2"></div>
            </div>
          </div>
        </div>

        <footer>
          This project was coded by Shimei Bakala and is{" "}
          <a
            href="https://github.com/Shimmybaks/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
