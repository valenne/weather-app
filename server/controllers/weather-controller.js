import { weatherResponseData } from "../services/weather-api.js";

export const controller = {
  getWeather: async (req, res) => {
    try {
      const city = req.query;
      const response = await weatherResponseData(city.name);

      console.log(`backend route /weather`, response);
      res.status(200).send(response);
    } catch (e) {
      res.status(500).send("Internal Server Error");
      console.error(e.message);
    }
  },
};
