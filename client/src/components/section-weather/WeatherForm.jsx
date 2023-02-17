import React, { useContext, useState, useRef } from "react";
import { WeatherContext } from "../../context/WeatherContext.jsx";
import { weatherData } from "../../api/weather-data.js";
import { capitalize } from "../../assets/js/capitalize-string.js";

// icons
import { IoMdRadioButtonOn } from "react-icons/io";

export const WeatherForm = ({ captureIndexLi }) => {
  const [cityName, setCityName] = useState("");

  // ref to ul container
  const refUl = useRef(null);

  const {
    setResponseWeather,
    responseWeather,
    isCompleted,
    setIsCompleted,
    setIsLoading,
    isLoading,
  } = useContext(WeatherContext);

  // handlesubmit form city name

  const handleSubmit = async (e) => {
    e.preventDefault();

    let city = e.target[0].value;
    setCityName(city);

    try {
      await getWeatherData(city);
      e.target.reset();
    } catch (e) {
      setIsCompleted(false);
      throw new Error("error getting data weatherForm");
    }
  };

  const getWeatherData = async (city) => {
    try {
      setIsLoading(true);
      let response = await weatherData(city);
      setResponseWeather(response);
      setIsLoading(false);
    } catch (e) {
      console.error(e.message);
    }
  };

  const renderDataInput = responseWeather.map((value, key) => {
    return (
      <>
        {value.sys?.country ? (
          <li className="weather__list--li" key={key} value={key}>
            <div className="weather_list--text">
              <span>{capitalize(cityName)},</span>
              <span> {value.sys.country}</span>

              <img
                className={`weather__flag ${
                  value.sys?.country ? null : "none"
                }`}
                src={`https://openweathermap.org/images/flags/${value.sys.country.toLowerCase()}.png`}
                alt="flag of the country"
              />
            </div>

            <span>{Math.round(value.main.temp)}°C</span>
            <img
              className="weather__icon"
              src={`http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`}
              alt="weather of the country"
            />

            <IoMdRadioButtonOn
              className="weather__select"
              onClick={(e) => captureIndexLi(e)}
            />
          </li>
        ) : (
          <span key={key}></span>
        )}
      </>
    );
  });

  return (
    <div className="weather__form--external">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="weather__form--inner">
          <div className="weather__form--width">
            <input
              className="weather__input"
              id="city"
              type="text"
              name="city"
            />
            <button className="weather__button" type="submit" value="Search">
              Search
            </button>
          </div>
          <div className="weather__list--container">
            <ul>{isLoading ? <p>is loading</p> : <>{renderDataInput}</>}</ul>
          </div>
        </div>
      </form>
    </div>
  );
};
