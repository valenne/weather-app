import React, { useContext, useState, useRef } from "react";
import { WeatherContext } from "../../context/WeatherContext.jsx";
import { convertTimestamptoTime } from "../../assets/js/format-date.js";
import { directionWind } from "../../data/degree-direction.js";

import {
  RiTempColdLine,
  RiWindyFill,
  TiWeatherCloudy,
  WiHumidity,
  MdOutlineVisibility,
  FiSunset,
} from "../../assets/js/react-icons.js";

export const WeatherCard = () => {
  const { showData, isSelected } = useContext(WeatherContext);
  const [temperatureType, setTemperatureType] = useState(true);

  const showTemp = useRef();

  const changeTemperature = (e) => {
    if (e.target.innerText === "°C") {
      setTemperatureType(true);
      showTemp.current.innerText = Math.round(showData.main.temp);
    } else if (e.target.innerText === "°F") {
      setTemperatureType(false);
      showTemp.current.innerText = Math.round(showData.main.temp) * 1.8 + 32;
    }
  };

  return (
    <>
      {isSelected && showData !== null ? (
        <div className="card__information">
          <div className="card__header">
            <p>{convertTimestamptoTime(showData.dt).complete_time}</p>
            <p>
              {showData.name}, <span>{showData.sys.country}</span>
            </p>
          </div>
          <div className="card__temp">
            <img
              src={`http://openweathermap.org/img/wn/${showData.weather[0].icon}@2x.png`}
              alt="weather of the country"
            />
            <span ref={showTemp}>{Math.round(showData.main.temp, 2)}</span>

            <div className="card__typeTemp">
              <a
                href="#"
                className={` ${
                  temperatureType ? "temp__color-active" : "temp__color-visited"
                }`}
                onClick={(e) => changeTemperature(e)}
              >
                °C
              </a>
              <span>|</span>
              <a
                href="#"
                className={` ${
                  temperatureType ? "temp__color-visited" : "temp__color-active"
                }`}
                onClick={(e) => changeTemperature(e)}
              >
                °F
              </a>
            </div>
          </div>
          <div className="weather__description">
            <p>
              <RiTempColdLine className="icon__description" />
              <span>Feels Like: </span>
              {Math.round(showData.main["feels_like"])}°C
            </p>
            <p>
              <TiWeatherCloudy className="icon__description" />
              <span>Weather: </span>
              {showData.weather[0].description}
            </p>
            <p>
              <RiWindyFill className="icon__description" />
              <span>Wind: </span>
              {showData.wind.speed} m/s {directionWind(showData.wind.deg)}
            </p>
            <p>
              <WiHumidity className="icon__description" />
              <span>Humidity: </span>
              {showData.main.humidity}%
            </p>
            <p>
              <MdOutlineVisibility className="icon__description" />
              <span>Visibility: </span>
              {showData.visibility / 1000} km
            </p>
            <p>
              <FiSunset className="icon__description" />
              <span>Sunset: </span>
              {convertTimestamptoTime(showData.sys.sunset).minimal_time}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
};
