import axios from "axios";

export async function getCurrentWeatherForLocation(location) {
  return await axios.get(process.env.API_URL + "/v1/current.json", {
    params: {
      key: process.env.API_KEY,
      q: location,
      aqi: "no",
    },
  });
}

export async function getforecastForSeveralDays(location, days) {
  return await axios.get(process.env.API_URL + "/v1/forecast.json", {
    params: {
      key: process.env.API_KEY,
      q: location,
      days: days,
      aqi: "no",
      alerts: "no",
    },
  });
}
