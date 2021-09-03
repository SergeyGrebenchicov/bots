const app = require("../app");

let config = {
  "apiKey": 'K-dce61983a5e84c27cb98252736e3ad3ac80c46b5',
  "apiSecret": 'S-f672442c43d1fa486ba8eb26504de8c75ca79d15',
  "currency1": 'DASH',
  "currency2": 'USD',
  "canSpend": 100,
  "decimal": 6
};

var timerId = setTimeout(function tick() {
  app.initExmo(config);
  timerId = setTimeout(tick, 10000);
}, 10000);
