const exmo = require("../exmo");

function Time () {
  var d = new Date();
  return '' + d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '';
}

// "name": 'Bot 5',
// exmo.init_exmo({ key: 'K-1d374d7c7bf055cdfc212b438ec0ca2198db6947', secret: 'S-41eb4f44949d93fd2f5a79865241ec786dfa814d' });
exmo.init_exmo({ key: 'K-8e09ae863e4d4d1752b8bfb7652483f0f2c7ba37', secret: 'S-4a6732cecda7d7d0ae175da17afc9a63417792ce' });

exmo.api_query ( 'trades', {"pair": 'BTC_USD'} , result => {
  // console.table( JSON.parse(result)['BTC_USD'] );
});

/*exmo.api_query ( 'user_info', {} , result => {
    console.log( 'uid:', JSON.parse(result).uid );
    console.log( 'server_date:', Time(JSON.parse(result).server_date) );
    console.table( JSON.parse(result).balances );
    console.table( JSON.parse(result).reserved );
});*/

exmo.api_query ( 'order_trades', {"order_id": 12345} , result => {
  // console.table( JSON.parse(result) );
});

exmo.api_query ( 'deposit_address', {} , result => {
  //console.table( JSON.parse(result) );
});

exmo.api_query ( 'pair_settings', {} , result => {
  //console.table( JSON.parse(result) );
});

exmo.api_query ( 'currency', {} , result => {
  console.table( JSON.parse(result) );
});

exmo.api_query ( 'wallet_history', {} , result => {
  //console.table( JSON.parse(result).history );
});

/*exmo.api_query ( 'user_open_orders', {} , result => {
  var mass = JSON.parse(result);
  for (var key in mass) {
      console.log(key);
      console.table(mass[key]);
  }
});*/
