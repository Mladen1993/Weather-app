import axios from "axios";

const apiKey = "e0bed337d7c742e29de190826251905";

let location = localStorage.getItem("location") || "";

while (location.trim() === "") {
  location = prompt("Unestie svoj grad");
}

localStorage.setItem("location", location);

document.querySelector(".locationBtn").addEventListener("click", () => {
  let location = "";
  while (location.trim() === "") {
    location = prompt("Unestie svoj grad");
  }

  localStorage.setItem("location", location);
  window.location.reload();
});

//https://api.weatherapi.com/v1/current.json?key=e0bed337d7c742e29de190826251905&q=london&aqi=no

try {
  const response = await axios.get(
    "https://api.weatherapi.com/v1/current.json",
    {
      params: {
        key: apiKey,
        q: location,
        aqi: "no",
      },
    }
  );

  if (!response.data.current.is_day) {
    document.querySelector("body").style.backgroundColor = "#252222";
  }
} catch (error) {
  prompt("desila se greska prlikom ucitavanja grada");
  console.error("new error", error);
}
