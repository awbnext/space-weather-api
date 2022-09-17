const cheerio = require("cheerio");
const axios = require("axios");

let data = [];

const scrapWeather = async () => {
  const url = `https://www.spaceweather.com`;
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const mainDiv = $(".solarWindText").first();
    const speed = $(mainDiv)
      .find("b")
      .each((index, el) => {
        if (index >= 1) data.push($(el).text());
      });
    return data;
  } catch (e) {
    console.error(`Error while fetching`);
    return;
  }
};

const weatherData = scrapWeather();

module.exports.data = weatherData;
