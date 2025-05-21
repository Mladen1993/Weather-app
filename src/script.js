import axios from "axios";
import { getUserLocation } from "./components/location";
import { getCurrentWeatherForLocation } from "./components/weatherApi";

let location = localStorage.getItem("location") || getUserLocation();

localStorage.setItem("location", location);

document.querySelector(".locationBtn").addEventListener("click", () => {
  let location = getUserLocation();

  localStorage.setItem("location", location);

  window.location.reload();
});

//https://api.weatherapi.com/v1/current.json?key=e0bed337d7c742e29de190826251905&q=london&aqi=no

const response = await getCurrentWeatherForLocation(location);
console.log(response);
if (!response.data.current.is_day) {
  document.querySelector("body").style.backgroundColor = "#252222";
}
