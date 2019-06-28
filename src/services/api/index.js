import axios from "axios";

const api = axios.create({
  baseURL: "https://api.punkapi.com/v2/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  }
});

export default api;
