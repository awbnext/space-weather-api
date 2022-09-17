const express = require("express");
require("dotenv").config();

const app = express();
const weatherRoute = require("./route/getWeather");

app.use(express.json());

app.use(weatherRoute);
app.get("/", (req, res) => {
  res.json("Space Weather API end point: /getWeather");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port: " + process.env.PORT);
});
