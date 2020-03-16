import axios from "axios";

require("axios-debug-log");

const instance = axios.create({
  baseURL: process.env.BASE_URL
});

export default instance;
