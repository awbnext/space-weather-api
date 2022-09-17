const express = require("express");
const weatherData = require("../cheerio/cheerioWeather");

const route = express.Router();

// /getWeather => GET
route.get("/getWeather", async (req, res, next) => {
  const data = await weatherData.data;
  if (data.length > 0) {
    res.json({
      speed: data[0] + "km/sec",
      density: data[1] + "protons/cm3",
    });
  } else {
    res.json("Response empty");
  }
});

module.exports = route;
