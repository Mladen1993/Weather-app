import axios from "axios";

const response = await axios.get("https://dummyjson.com/test");

console.log(response.data.status);
console.log("hallo");
const name = "maden";

console.log("name");

console.log("name", name);
