import express from "express";
const app = express();
import cors from "cors";
import { DevParameter } from "./config.js";
import { weatherResponseData } from "./services/weather-api.js";

// middleswares
app.use(cors());

app.get("/api", async (req, res) => {
  try {
    const response = await weatherResponseData("lima");

    res.status(200).json(response);
  } catch (e) {
    res.status(500).send({ Error: "api bkend problems" });
    throw new Error("API bkend not working");
  }
});

app.get("/weather?", async (req, res) => {
  try {
    const city = req.query;
    const response = await weatherResponseData(city.name);
    res.status(200).send(response);
  } catch (e) {
    res.status(500).send("Internal Server Error");
    console.error(e.message);
  }
});

app.listen(DevParameter.PORT, () => {
  console.log("Server up on port:", `http://localhost:${DevParameter.PORT}`);
});
