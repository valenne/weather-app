import { createContext, useState, useEffect } from "react";

export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [responseWeather, setResponseWeather] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [indexLi, setIndexLi] = useState("");
  const [showData, setShowData] = useState({});

  // capture li index to render data on weathercard component
  const captureIndexLi = (e) => {
    if (typeof e.target.parentElement.value == "number") {
      setIndexLi(e.target.parentElement.value);
      setShowData(responseWeather[e.target.parentElement.value]);
    } else if (typeof e.target.parentElement.parentElement.value == "number") {
      setIndexLi(e.target.parentElement.parentElement.value);
      setShowData(responseWeather[e.target.parentElement.value]);
    }
    return;
  };

  return (
    <WeatherContext.Provider
      value={{
        responseWeather,
        setResponseWeather,
        isCompleted,
        setIsCompleted,
        isLoading,
        setIsLoading,
        captureIndexLi,
        indexLi,
        showData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
