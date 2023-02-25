import React, { useContext, useState, useRef, useEffect } from "react";
import { WeatherContext } from "../../context/WeatherContext.jsx";
import { capitalize } from "../../assets/js/capitalize-string.js";

// icons
import { IoMdRadioButtonOn } from "react-icons/io";

export const WeatherForm = () => {
  const [cityName, setCityName] = useState("");
  const [modalView, setModalView] = useState(false);

  // ref to ul container

  const modalRef = useRef();

  const {
    responseWeather,
    setResponseWeather,
    isLoading,
    setShowData,
    getWeatherData,
    isSelected,
    setIsSelected,
    hasError,
    isCompleted,
  } = useContext(WeatherContext);

  // handlesubmit form city name
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (e.target[0].value) {
      setIsSelected(false);
    }
    let city = e.target[0].value;
    setCityName(city);
    try {
      await getWeatherData(city);
      e.target.reset();
    } catch (e) {
      throw new Error("error getting data weatherForm");
    }
  };

  // capture li index to render data on weathercard component

  const captureIndexLi = async (e) => {
    let index;
    if (typeof e.target.parentElement.value == "number") {
      index = e.target.parentElement.value;
      await saveData(index);
    } else if (typeof e.target.parentElement.parentElement.value == "number") {
      index = e.target.parentElement.parentElement.value;
      await saveData(index);
    }
    index = "";
  };

  const saveData = async (index) => {
    if (hasError.status === 200) {
      let response = await responseWeather[index];
      setShowData(response);
      setIsSelected(true);
      console.log({ success: "City was found" });
      setResponseWeather([]);
    } else {
      setShowData(null);
      setIsSelected(false);
      console.log({ success: "City wasnt found" });
      setResponseWeather([]);
    }
  };

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
              placeholder="Search a city"
            />
            <button className="weather__button" type="submit" value="Search">
              {isLoading ? "Loading" : "Search"}
            </button>
          </div>
          <div
            className={`weather__list--container ${
              isSelected ? "none" : "block"
            }`}
          >
            <ul>
              {isCompleted ? (
                <>
                  {responseWeather.map((value, key) => (
                    <li className="weather__list--li" key={key} value={key}>
                      <div className="weather_list--text">
                        <span>{capitalize(cityName)},</span>
                        <span> {value.sys.country}</span>

                        <img
                          className={`weather__flag ${
                            value.sys?.country ? null : "none"
                          }`}
                          src={
                            value.sys.country?.hasOwnProperty("country") !==
                            undefined
                              ? `https://openweathermap.org/images/flags/${value.sys.country?.toLowerCase()}.png`
                              : null
                          }
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
                  ))}
                </>
              ) : hasError.status === 400 ? (
                <li className="weather__list--li">
                  City Not found - Try Again
                </li>
              ) : isLoading ? (
                <p className="weather__list--li">Loading information...</p>
              ) : null}
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
};
