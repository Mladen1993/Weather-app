import axios from "axios";

export async function getGeoLocationForCoords(lat, lon) {
  try {
    return await axios.get(process.env.OPENWEATHER_API_URL + "1.0/reverse", {
      params: {
        lat: lat,
        lon: lon,
        appid: process.env.OPENWEATHER_API_KEY,
        limit: 1,
      },
    });
  } catch (exception) {
    return alert("Someting went wrong with geting weather for your location");
  }
}
