import axios from "axios";

export const api = axios.create({
  baseURL: "https://min-api.cryptocompare.com/data/v2/",
});
