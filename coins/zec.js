const app = require("../app");

let config = {
  "name": 'Bot 4',
  "apiKey": 'K-c483d0ef3fb286de2aa91d3f007adb5a460e4582',
  "apiSecret": 'S-de0028fe49aa3f6a79d62abe09182129780b3e85',
  "currency1": 'ZEC',
  "currency2": 'USD',
  "canSpend": 20,
  "decimal": 6
};

var timerId = setTimeout(function tick() {
  app.initialization(config);
  timerId = setTimeout(tick, 15000);
}, 15000);
