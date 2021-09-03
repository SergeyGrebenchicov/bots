const exmo = require("../exmo");

exmo.init_exmo({ key: 'K-1d374d7c7bf055cdfc212b438ec0ca2198db6947', secret: 'S-41eb4f44949d93fd2f5a79865241ec786dfa814d' });

exmo.api_query ( 'trades', {"pair": 'BTC_USD'} , result => {
  console.log( JSON.parse(result) );
});
