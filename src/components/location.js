export function getUserLocation() {
  let userLocation = "";

  while (userLocation.trim() === "") {
    userLocation = prompt("Unestie svoj grad");
  }

  return userLocation;
}
