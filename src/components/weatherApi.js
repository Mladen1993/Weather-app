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

export async function getWeatherInFuture(location, days) {
  return await axios.get(process.env.API_URL + "/v1/future.json", {
    params: {
      key: process.env.API_KEY,
      q: location,
      dt: days,
    },
  });
}

//https://api.weatherapi.com/v1/future.json?key=e0bed337d7c742e29de190826251905&q=London&dt=2025-06-20
