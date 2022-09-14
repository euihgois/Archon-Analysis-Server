const axios = require("axios");
require("dotenv").config();

const instance = axios.create({
  baseURL: "https://api.m3o.com/v1/user/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.M3O_API_TOKEN}`,
  },
});

module.exports = instance;
