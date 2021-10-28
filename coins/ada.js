const app = require("../app");

let config = {
  "name": 'Bot 7',
  "apiKey": 'K-fdad78d6cb54e954a31d3251472b965bec58e1a2',
  "apiSecret": 'S-313a50fcfda99448996dfe31e502018f2fc6cefb',
  "currency1": 'ADA',
  "currency2": 'USD',
  "canSpend": 20,
  "decimal": 6
};

var timerId = setTimeout(function tick() {
  app.initialization(config);
  timerId = setTimeout(tick, 15000);
}, 15000);
