import { createContext, useState } from "react";

import { weatherData } from "../api/weather-data.js";

export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [responseWeather, setResponseWeather] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [hasError, setHasError] = useState({
    status: "",
    details_code: "",
    msg: "",
  });
  const [showData, setShowData] = useState({});
  const [captureIndex, setCaptureIndex] = useState("");

  const getWeatherData = async (city) => {
    setIsLoading(true);
    try {
      let response = await weatherData(city);

      if (response.length === 0) {
        setResponseWeather({});
        setIsLoading(false);
        setHasError({
          status: 400,
          details_code: 5000,
          msg: "Invalid or unknown parameter supplied",
        });
        setIsCompleted(false);
      } else {
        setResponseWeather(response);
        setIsLoading(false);
        setHasError({
          status: 200,
          details_code: 200,
          msg: "Process the response",
        });
        setIsCompleted(true);
      }
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
        hasError,
        isCompleted,
        setIsCompleted,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
