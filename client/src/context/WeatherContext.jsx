import { createContext, useState } from "react";

import { weatherData } from "../api/weather-data.js";

export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [responseWeather, setResponseWeather] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showData, setShowData] = useState({});

  const [captureIndex, setCaptureIndex] = useState("");

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

  return (
    <WeatherContext.Provider
      value={{
        responseWeather,
        setResponseWeather,
        isSelected,
        setIsSelected,
        isLoading,
        setIsLoading,
        showData,
        setShowData,
        captureIndex,
        setCaptureIndex,
        getWeatherData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
