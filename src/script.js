import axios from "axios";
import { getUserLocation } from "./components/location";
import { getCurrentWeatherForLocation } from "./components/weatherApi";
import { getforecastForSeveralDays } from "./components/weatherApi";

let location = localStorage.getItem("location") || getUserLocation();

localStorage.setItem("location", location);

document.querySelector(".locationBtn").addEventListener("click", () => {
  let location = getUserLocation();

  localStorage.setItem("location", location);

  getforecastForSeveralDays(location, 4);
});

const response = await getCurrentWeatherForLocation(location);

if (!response.data.current.is_day) {
  document.querySelector("body").style.backgroundColor = "#252222";
}
