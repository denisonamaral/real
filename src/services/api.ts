import axios from "axios";

export const api = axios.create({
  baseURL: "https://min-api.cryptocompare.com/data/v2/",
});

api.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Apikey ${process.env.API_KEY}`,
  };

  return config;
});
