import axios from "axios";

export async function getCurrentWeatherForLocation(location) {
  try {
    return await axios.get(process.env.API_URL + "/v1/current.json", {
      params: {
        key: process.env.API_KEY,
        q: location,
        aqi: "no",
      },
    });
  } catch (exception) {
    return alert(
      "Someting went wrong with geting weather for current location try again"
    );
  }
}

export async function getforecastForSeveralDays(location, days) {
  try {
    return await axios.get(process.env.API_URL + "/v1/forecast.json", {
      params: {
        key: process.env.API_KEY,
        q: location,
        days: days,
        aqi: "no",
        alerts: "no",
      },
    });
  } catch (exception) {
    return alert("Someting went wrong with geting weather for several days");
  }
}

export async function getWeatherInFuture(location, days) {
  try {
    return await axios.get(process.env.API_URL + "/v1/forecast.json", {
      params: {
        key: process.env.API_KEY,
        q: location,
        dt: days,
      },
    });
  } catch (exception) {
    return alert("Someting went wrong with geting weather in future");
  }
}
