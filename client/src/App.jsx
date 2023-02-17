import React from "react";
import "./App.css";
import Weather from "./components/section-weather/Weather.jsx";

const App = () => {
  return (
    <>
      {/* {isLoading ? (
        { isGeoOk } ? (
          <div key={responseWeather.sys.id} className="h-20 bg-orange-200">
            <ul>
              <li>
                <p>{date(responseWeather.dt)}</p>
                <img
                  src={`http://openweathermap.org/img/wn/${responseWeather.weather[0].icon}@2x.png`}
                  alt="weather"
                />
              </li>
            </ul>
          </div>
        ) : (
          <p>Something go wrong 😫</p>
        )
      ) : (
        <p>Loading....</p>
      )} */}
      <Weather />
    </>
  );
};

export default App;
