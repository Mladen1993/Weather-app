import axios from "axios";

const apiKey = "e0bed337d7c742e29de190826251905";

const response = await axios.get("https://dummyjson.com/test");

console.log(response.data.status);
