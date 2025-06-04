import axios from "axios";
import { getUserLocation } from "./components/location";
import {
  getCurrentWeatherForLocation,
  getforecastForSeveralDays,
  getWeatherInFuture,
} from "./components/weatherApi";
import { getDateInFuture } from "./helper/dateHelper";
import { getGeoLocationForCoords } from "./components/openWeatherApi";

let location = localStorage.getItem("location") || getUserLocation();

localStorage.setItem("location", location);

document.querySelector(".locationBtn").addEventListener("click", () => {
  let location = getUserLocation();

  localStorage.setItem("location", location);
  window.location.reload();
});
/*
document
  .querySelector(".showWeatherForMyLocation")
  .addEventListener("click", async () => {
    if (!navigator.geolocation) {
      return alert("vas browser ne podrzava prikazivanje geo lokacije");
    }
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      let cords = await getGeoLocationForCoords(lat, lon);

      let citiName = cords.data[0].name;

      if (citiName.includes("Municipality")) {
        citiName = citiName.replace("Municipality", "");
      }

      // localStorage.setItem("location", citiName);
    });
  });
*/
// current forecaste
const response = await getCurrentWeatherForLocation(location);

if (response.data.current.is_day) {
  document.body.classList.add("day");
  document.body.classList.remove("night");
} else {
  document.body.classList.add("night");
  document.body.classList.remove("day");
}

let currentForecastDiv = document.querySelector(".currentforecast");

let currentForecastEl = document.createElement("div");
currentForecastEl.innerHTML = `<p>${response.data.location.name}</p>
  <p>${response.data.current.temp_c}°C</p>
  <p>${response.data.current.condition.text}</p>
  <img src="${response.data.current.condition.icon}" alt="icon" />`;

currentForecastDiv.append(currentForecastEl);

//forecaste for several days
const forecastResponse = await getforecastForSeveralDays(location, 3);

let forecastDiv = document.querySelector(".forecast");
forecastDiv.innerHTML = "";

for (let res of forecastResponse.data.forecast.forecastday) {
  let forecastEl = document.createElement("div");
  forecastEl.classList.add("forecastForSeveralDays");
  console.log(res);
  forecastEl.innerHTML = ` <p>  ${forecastResponse.data.location.name} </p>
                            <p> ${res.date} </p>
                          <p>Maxtepm: ${res.day.maxtemp_c} </p>
                          <p>Mintepm: ${res.day.mintemp_c} </p>
                          <img src="${res.day.condition.icon}" alt ="icon" />`;

  forecastDiv.append(forecastEl);
}

// const dateFormatted = await getDateInFuture(10);
const futureWeater = await getWeatherInFuture(location, 5);
