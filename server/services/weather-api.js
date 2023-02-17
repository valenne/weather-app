import axios from "axios";
import { DevParameter } from "../config.js";

const getGeoData = async (city) => {
  const response = await axios.get(DevParameter.geoApi(city));

  const coordinatesCountry = response.data.map((row) => {
    return {
      lat: row.lat,
      lon: row.lon,
      cod: row.country,
      country: row.name,
    };
  });

  return coordinatesCountry;
};

export const weatherResponseData = async (city) => {
  // get lat and lon of the city required
  const valuesLatLon = await getGeoData(city);

  let response = [];

  try {
    for (let value of valuesLatLon) {
      let result = await axios.get(
        DevParameter.weatherApi(value.lat, value.lon)
      );

      response.push(result.data);
    }
  } catch (e) {
    console.error(e.message);
  }

  return response;
};
