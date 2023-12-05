const rp = require("request-promise");

module.exports = async function (city = "") {
  if (!city) {
    throw new Error("Имя города не может быть пустым!");
  }

  const KEY = "ad20652b9c0c66f1f1d7755bb1976a23";
  const uri = `https://api.openweathermap.org/data/2.5/weather`;
  const options = {
    uri,
    qs: {
      appid: KEY,
      q: city,
      units: "metric",
    },
    json: true,
  };
  try {
    const data = await rp(options);
    return {
      weather: `${data.name}: ${data.main.temp}`,
      error: null,
    };
  } catch (error) {
    return {
      weather: null,
      error: error.error.message,
    };
  }
};
