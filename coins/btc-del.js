const app = require("../app");

let config = {
  "apiKey": '',
  "apiSecret": '',
  "currency1": 'BTC',
  "currency2": 'USD',
  "canSpend": 500,
  "decimal": 2
};

var timerId = setTimeout(function tick() {
  app.initExmo(config);
  timerId = setTimeout(tick, 10000);
}, 10000);
