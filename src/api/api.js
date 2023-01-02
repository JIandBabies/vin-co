import axios from "axios";

export const instance = axios.create({
  baseURL: "https://asia-northeast3-heropy-api.cloudfunctions.net/api",
  headers: {
    "content-type": "application/json",
    apiKey: process.env.REACT_APP_API_KEY,
    username: process.env.REACT_APP_USER_NAME,
  },
  // timeout: 1000,
});
