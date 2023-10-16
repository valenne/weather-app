import express from "express";
const app = express();

import cors from "cors";
import { DevParameter } from "./config.js";
import router from "./router/app-routes.js";

// middleswares
app.use(cors());

app.use(router);

app.listen(DevParameter.PORT, () => {
  console.log("Server up on port:", `http://localhost:${DevParameter.PORT}`);
});
