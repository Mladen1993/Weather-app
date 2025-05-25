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

export async function getforecastForSeveralDays(location, days) {
  return await axios.get("https://api.weatherapi.com/v1/forecast.json", {
    params: {
      key: apiKey,
      q: location,
      days: days,
      aqi: "no",
      alerts: "no",
    },
  });
}

// const datas = response.data.forecast.forecastday;
// let forecastDiv = document.querySelector(".forecast");
// forecastDiv.innerHTML = "";

// for (let data of datas) {
//   let forecastEl = document.createElement("div");

//   forecastEl.innerHTML = ` <p>Date: ${data.date} </p>
//                           <p>Maxtepm: ${data.day.maxtemp_c} </p>
//                           <p>Mintepm: ${data.day.mintemp_c} </p>`;
//   forecastDiv.append(forecastEl);

//   console.log(data);
// }
