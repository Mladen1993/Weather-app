import axios from "axios";

const response = await axios.get("https://dummyjson.com/test");

console.log(response.data.status);
