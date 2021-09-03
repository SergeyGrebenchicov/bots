module.exports.Time = function Time () {
  var d = new Date();
  return '[' + d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ']:';
}

module.exports.If = function If () {
  var d = new Date();
  return '[' + d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ']: IF';
}

module.exports.Valid = function Valid (rs, qr, cur1, cur2) {
  let coinPair = cur1 + '_' + cur2;

  if (rs.error) { console.log(this.Time(), rs.error) };

  switch (qr) {
    case "user_info":        console.log( this.Time(), `QUERY (${qr}) ${cur1} =`, (JSON.parse(rs)).balances[cur1], `${cur2} =`,  (JSON.parse(rs)).balances[cur2] ); break;
    case "order_create":     console.log( this.Time(), 'QUERY Создан ордер', rs); break;
    case "user_open_orders": console.log( this.Time(), `QUERY (${qr})`, rs ); break;
    case "trades":  rs;      break;
    case "pair_settings":    console.log( this.Time(), `QUERY (${qr})`, JSON.stringify(JSON.parse(rs)[coinPair]) ); break;
    case "order_trades":     console.log( this.Time(), `QUERY (${qr})`, JSON.parse(rs).error ); break;
    case "order_cancel":     console.log( this.Time(), `QUERY (${qr})`, JSON.parse(rs).error ); break;
    default:                 console.log( this.Time(), `QUERY (${qr})`, rs);
  }

  if (rs.code !== 'ENOTFOUND' && rs.code !== 'ETIMEDOUT') {
    return JSON.parse(rs);
  }
}
