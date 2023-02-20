import React, { useContext, useEffect } from "react";
import { WeatherContext } from "../../context/WeatherContext.jsx";
import { convertTimestamptoTime } from "../../assets/js/format-date.js";

export const WeatherCard = () => {
  const { showData, isSelected, setIsSelected } = useContext(WeatherContext);

  console.log(isSelected);
  console.log(showData);

  return (
    <>
      {isSelected ? (
        <div className="card__information">
          <div className="card__header">
            <p>{convertTimestamptoTime(showData.dt).complete_time}</p>
            <p>
              {showData.name}, <span>{showData.sys.country}</span>
            </p>
          </div>

          <div className="card__temp">
            <img
              className=""
              src={`http://openweathermap.org/img/wn/${showData.weather[0].icon}@2x.png`}
              alt="weather of the country"
            />
            <p className="">{Math.round(showData.main.temp, 2)}°C</p>
          </div>

          <div className="test">
            <p>Feels Like: {Math.round(showData.main["feels_like"])}°C</p>

            <p>Weather: {showData.weather[0].description}</p>
          </div>
          <div className="test">
            <p>Wind: {showData.wind.speed} m/s</p>
            <p>Humidity: {showData.main.humidity}%</p>
            <p>Visibility {showData.visibility / 1000} km</p>
            <p>
              Sunset: {convertTimestamptoTime(showData.sys.sunset).minimal_time}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
};
