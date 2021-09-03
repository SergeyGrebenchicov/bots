const app = require("../app");

let config = {
  "apiKey": 'K-91e4c0dc562214ee54e287006052cd8be840a7d4',
  "apiSecret": 'S-42960752de36f7cecb2615077f260584295651c3',
  "currency1": 'LTC',
  "currency2": 'USD',
  "canSpend": 100,
  "decimal": 6
};

var timerId = setTimeout(function tick() {
  app.initExmo(config);
  timerId = setTimeout(tick, 10000);
}, 10000);
