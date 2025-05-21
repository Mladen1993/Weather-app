const apiKey = "e0bed337d7c742e29de190826251905";
import axios from "axios";

export async function getCurrentWeatherForLocation(location) {
  return await axios.get("https://api.weatherapi.com/v1/current.json", {
    params: {
      key: apiKey,
      q: location,
      aqi: "no",
    },
  });
}
