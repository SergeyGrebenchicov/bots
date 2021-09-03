const app = require("../app");

let config = {
  "apiKey": 'K-c483d0ef3fb286de2aa91d3f007adb5a460e4582',
  "apiSecret": 'S-de0028fe49aa3f6a79d62abe09182129780b3e85',
  "currency1": 'ZEC',
  "currency2": 'USD',
  "canSpend": 100,
  "decimal": 6
};

var timerId = setTimeout(function tick() {
  app.initExmo(config);
  timerId = setTimeout(tick, 10000);
}, 10000);
