const app = require("../app");

let config = {
  "apiKey": 'K-1d374d7c7bf055cdfc212b438ec0ca2198db6947',
  "apiSecret": 'S-41eb4f44949d93fd2f5a79865241ec786dfa814d',
  "currency1": 'BTC',
  "currency2": 'USD',
  "canSpend": 500,
  "decimal": 2
};

var timerId = setTimeout(function tick() {
  app.initExmo(config);
  timerId = setTimeout(tick, 10000);
}, 10000);
