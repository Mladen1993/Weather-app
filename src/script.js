import axios from "axios";
import { getUserLocation } from "./components/location";
import {
  getCurrentWeatherForLocation,
  getforecastForSeveralDays,
  getWeatherInFuture,
} from "./components/weatherApi";
import { getDateInFuture } from "./helper/dateHelper";

let location = localStorage.getItem("location") || getUserLocation();

localStorage.setItem("location", location);

document.querySelector(".locationBtn").addEventListener("click", () => {
  let location = getUserLocation();

  localStorage.setItem("location", location);
});

const response = await getCurrentWeatherForLocation(location);

if (!response.data.current.is_day) {
  document.querySelector("body").style.backgroundColor = "#252222";
}

const forecastResponse = await getforecastForSeveralDays(location, 3);
console.log(forecastResponse);
let forecastDiv = document.querySelector(".forecast");
forecastDiv.innerHTML = "";

for (let res of forecastResponse.data.forecast.forecastday) {
  let forecastEl = document.createElement("div");
  console.log(res);
  forecastEl.innerHTML = ` <p> City: ${forecastResponse.data.location.country} </p>
                            <p>Date: ${res.date} </p>
                          <p>Maxtepm: ${res.day.maxtemp_c} </p>
                          <p>Mintepm: ${res.day.mintemp_c} </p>`;

  forecastDiv.append(forecastEl);
}

const dateFormatted = await getDateInFuture(30);
const futureWeater = await getWeatherInFuture(location, dateFormatted);

console.log(futureWeater);
