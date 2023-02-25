import React from "react";
import "../../App.css";

import { WeatherCard } from "./WeatherCard.jsx";
import { WeatherForm } from "./WeatherForm.jsx";

const Weather = () => {
  return (
    <div className="weather">
      <nav className="navBar">
        <h1 className="weather__title">
          Weather
          <span className="inline title__inline tracking-in-expand">Now</span>
          casts
        </h1>
      </nav>
      <div className="weather__container">
        <div className="weather__container--inner">
          <WeatherForm />
          <WeatherCard />
        </div>
      </div>
    </div>
  );
};

export default Weather;
