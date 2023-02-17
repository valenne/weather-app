import React, { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext.jsx";
import { convertTimestamptoTime } from "../../assets/js/format-date.js";

export const WeatherCard = () => {
  const { indexLi, responseWeather, showData } = useContext(WeatherContext);

  console.log(`data selecionada`, showData);

  return (
    <div className="container-weather flex flex-col justify-center">
      <div>
        <p>{convertTimestamptoTime(responseWeather.dt)}</p>
        <p>
          {responseWeather.name}, <span>{responseWeather.sys.country}</span>
        </p>
      </div>
      <div className="flex flex-col align-middle">
        <p>Room Temperature</p>
        <div className="flex flex-row">
          <img
            className="w-15"
            src={`http://openweathermap.org/img/wn/${responseWeather.weather[0].icon}@2x.png`}
            alt="weather of the country"
          />
          <p className="">{Math.round(responseWeather.main.temp, 2)}°C</p>
        </div>
      </div>
      <div>
        <p>Feels Like: {Math.round(responseWeather.main["feels_like"])}°C</p>

        <p>Weather Description: {responseWeather.weather[0].description}</p>
      </div>
      <div>
        <ul>
          <li>wind: {responseWeather.wind.speed} m/s</li>
          <li>humedad</li>
          <li>visibilidad</li>
          <li>anochecer</li>
        </ul>
      </div>
    </div>
  );
};
