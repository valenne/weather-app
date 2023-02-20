import React, { useContext } from "react";
import "../../App.css";
import { WeatherContext } from "../../context/WeatherContext.jsx";

import { WeatherCard } from "./WeatherCard.jsx";
import { WeatherForm } from "./WeatherForm.jsx";

const Weather = () => {
  return (
    <div className="weather">
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
