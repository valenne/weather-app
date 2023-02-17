import * as dotenv from "dotenv";

dotenv.config();

export const DevParameter = {
  _key: process.env.WEATHER_KEY,
  geoApi: (city, key = DevParameter._key, limit = 5) => {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${key}`;
  },
  weatherApi: (lat, lon, key = DevParameter._key) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
  },
  PORT: process.env.PORT_SERVER || 5000,
};
