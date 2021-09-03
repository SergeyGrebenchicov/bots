const exmo = require("./exmo");
const fun = require("./fun");

const profit = 0.008;               // Какой навар нужен с каждой сделки? (0.006 = 0.6%)
const stockFee = 0.002;             // Комиссия, которую берет биржа (0.002 = 0.2%)
const orderLifeTime = 5;            // Через сколько минут отменять не исполненный ордер на покупку currency1
const avgPricePeriod = 30;          // За какой период брать среднюю цену (мин)
const stockTimeOffset = 0;          // Если расходится время биржи с текущим в часах

let currency1MinQuantity = 0;

module.exports.initExmo = function initExmo (config) {
  exmo.init_exmo({ key: config.apiKey, secret: config.apiSecret });
  this.pairSettings(config);
}

module.exports.pairSettings = function pairSettings (config) {
  exmo.api_query('pair_settings', {}, result => {
    let coinPair = config.currency1 + '_' + config.currency2;
    let res = fun.Valid(result, 'pair_settings', config.currency1, config.currency2);
    currency1MinQuantity = res[coinPair].min_quantity;
  });
  this.Trade(config);
}

module.exports.Trade = function Trade (config) {
  let coinPair = config.currency1 + '_' + config.currency2;
  let openedOrders = exmo.api_query ( 'user_open_orders', {}, result => {
    let res = fun.Valid(result, 'user_open_orders', config.currency1, config.currency2);
    if ( res[coinPair] == undefined ) {
      console.log(fun.Time(), 'Открытых оредеров нет');
    };
    let buyOrders = [];
    for(let i in res[coinPair]){
      if (res[coinPair][i].type == 'sell') {
          console.log(fun.Time(), 'Выход, ждем пока не исполнятся/закроются все ордера на продажу');
      } else {
        buyOrders.push(res[coinPair][i]);
      }
    }
    if(buyOrders.length > 0){
        for (let key in buyOrders) {
          console.log(fun.Time(), 'Проверяем, что происходит с отложенным ордером', buyOrders[key]['order_id']);
          exmo.api_query('order_trades', { "order_id": buyOrders[key]['order_id'] }, result => {
            let res = fun.Valid(result, 'order_trades', config.currency1, config.currency2);
            if (res.result !== undefined) {
              if (res.result !== false) {
                console.log(fun.Time(), 'Выход, продолжаем надеяться докупить валюту по тому курсу, по которому уже купили часть');
              } else {
                let timePassed = (new Date().getTime() / 1000) + stockTimeOffset * 60 * 60 - (buyOrders[key]['created']);
                if (timePassed > orderLifeTime * 60) {
                  exmo.api_query('order_cancel', {"order_id": buyOrders[key]['order_id'] }, res => {
                    let result = fun.Valid(res, 'order_cancel', config.currency1, config.currency2);
                    console.log(fun.Time(), `Отменяем ордер за ${orderLifeTime} минут не удалось купить ${config.currency1}`);
                  });
                } else {
                  console.log(fun.Time(), `Выход, продолжаем надеяться купить валюту по указанному ранее курсу, прошло время ${timePassed.toFixed(2)}`);
                }
              }
            }
          });
        }
    } else {
      exmo.api_query ( 'user_info', {}, result => {
        let res = fun.Valid(result, 'user_info', config.currency1, config.currency2);
        if (res.balances !== undefined) {
          let balance = res.balances[config.currency1];
          let balance2 = res.balances[config.currency2];
          if(balance >= currency1MinQuantity){
            let wannaGet = config.canSpend + config.canSpend * ( stockFee + profit );
            console.log('sell', balance, wannaGet, (wannaGet/balance));
            exmo.api_query('order_create', { "pair": coinPair, "quantity": balance, "price": (wannaGet / balance).toFixed(config.decimal), "type": 'sell' }, res => {
              let result = fun.Valid(res, 'order_create', config.currency1, config.currency2);
            });
          } else {
            if(parseInt(balance2) >= parseInt(config.canSpend)){
               exmo.api_query('trades',{"pair":coinPair}, result => {
                let res = fun.Valid(result, 'trades', config.currency1, config.currency2);
                let prices = [];
                let summ2 = 0;
                for(let deal in res[coinPair]){
                  let timePassed = 0;
                  timePassed = (new Date().getTime() / 1000) + stockTimeOffset * 60 * 60 - (res[coinPair][deal].date);
                  if(timePassed < avgPricePeriod * 60){
                    summ2 += parseInt(res[coinPair][deal].price);
                    prices.push(parseInt(res[coinPair][deal].price));
                  }
                }
                let avgPrice = summ2 / prices.length;
                let needPrice = (avgPrice - avgPrice * (stockFee + profit)).toFixed(config.decimal);
                let ammount = (config.canSpend / needPrice).toFixed(config.decimal);
                console.log(fun.Time(), 'Buy', ammount, needPrice);
                if(ammount > currency1MinQuantity){
                  console.log(fun.If(), `${ammount} > ${currency1MinQuantity}`);
                  exmo.api_query('order_create', { "pair": coinPair, "quantity": ammount, "price": needPrice, "type": 'buy' }, res => {
                    let result = fun.Valid(res, 'order_create', config.currency1, config.currency2);
                  });
                } else {
                  console.log(fun.Time(), 'Выход, не хватает денег на создание ордера');
                }
               });
            } else {
              console.log(fun.Time(), 'Выход, не хватает денег');
            }
          }
        }
      });
    }
  });
}
