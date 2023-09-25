import React from "react";
import Weather from "./Weather";
// eslint-disable-next-line no-unused-vars

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kinshasa" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://64df9c563519d60008d85a39--fancy-kringle-0f2164.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shimei Bakala
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Shimmybaks/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://650f3f4e4f9d260008fc9bb0--iridescent-figolla-4087b5.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted by Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
