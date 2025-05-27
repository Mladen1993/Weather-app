import axios from "axios";

export async function getGeoLocationForCoords(lat, lon) {
  return await axios.get(process.env.OPENWEATHER_API_URL + "1.0/reverse", {
    params: {
      lat: lat,
      lon: lon,
      appid: process.env.OPENWEATHER_API_KEY,
      limit: 1,
    },
  });
}
