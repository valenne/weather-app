import React, { useContext } from "react";
import "../../App.css";
import { WeatherContext } from "../../context/WeatherContext.jsx";

import { WeatherCard } from "./WeatherCard.jsx";
import { WeatherForm } from "./WeatherForm.jsx";

const Weather = () => {
  const { captureIndexLi } = useContext(WeatherContext);

  return (
    <div className="weather">
      <div className="weather__container">
        <WeatherForm captureIndexLi={captureIndexLi} />
        <WeatherCard />
      </div>
    </div>
  );
};

export default Weather;
