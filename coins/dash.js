const app = require("../app");

let config = {
  "name": 'Bot 6',
  "apiKey": 'K-dce61983a5e84c27cb98252736e3ad3ac80c46b5',
  "apiSecret": 'S-f672442c43d1fa486ba8eb26504de8c75ca79d15',
  "currency1": 'DASH',
  "currency2": 'USD',
  "canSpend": 20,
  "decimal": 6
};

var timerId = setTimeout(function tick() {
  app.initialization(config);
  timerId = setTimeout(tick, 15000);
}, 15000);
