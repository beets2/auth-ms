const axios = require("axios");
const { generalSecrets } = require("./config");

const authHeader = `Basic ${generalSecrets.AUTH_STRING}`;

const api = axios.create({
  baseUrl: generalSecrets.ENDPOINT,
});

api.defaults.headers.common["Authorization"] = authHeader;
api.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

exports.default = api;
