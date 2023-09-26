import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weather({ defaultCity }) {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState(defaultCity);
    const apiKey = "1dbf926d3b4417bf379db7043bec1047";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(apiUrl);
                setWeatherData(response.data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        fetchWeatherData();
    }, [apiUrl]);

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const { name, weather, main, wind } = weatherData;
    const { description, icon } = weather[0];
    const { temp, humidity } = main;
    const { speed } = wind;

    return (
        <div className="container">
            <video autoPlay loop muted id="weatherVideo">
                <source id="dayVideo" src="/videos/cloudy-sky.mp4" type="video/mp4" />
            </video>

            <div className="weather-app-wrapper">
                <div className="weather-app">
                    <form
                        id="search-form"
                        className="mb-3"
                        onSubmit={(event) => {
                            event.preventDefault();
                            // Update the city when the form is submitted
                            setCity(event.target.elements.city.value);
                        }}
                    >
                        <div className="row">
                            <div className="col-9">
                                <input
                                    type="search"
                                    placeholder="Type a city.."
                                    className="form-control"
                                    id="city-input"
                                    autoComplete="off"
                                    name="city"
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
                        <h1 id="city">{name}</h1>
                        <ul>
                            <li>
                                Last updated: <span id="date">{new Date().toLocaleString()}</span>
                            </li>
                            <li id="description">{description}</li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="clearfix weather-temperature">
                                <img
                                    src={`http://openweathermap.org/img/wn/${icon}.png`}
                                    alt={description}
                                    id="icon"
                                    className="float-left"
                                />
                                <div className="float-left">
                                    <strong id="temperature">{temp}</strong>
                                    <span className="units"> °C</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>
                                    Humidity: <span id="humidity">{humidity}</span>%
                                </li>
                                <li>
                                    Wind: <span id="wind">{speed}</span> km/h
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="weather-forecast" id="forecast"></div>
                    <div className="row">
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}