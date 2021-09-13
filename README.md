# Exmo exchange trade bot
Registration [EXMO](https://exmo.me/?ref=648079)

```
const apiKey = 'YOUR-API-KEY';
const apiSecret = 'YOUR-API-SECRET';
```
5) Start
```
node app
```

6) Install [forever](https://www.npmjs.com/package/forever)

Установите 'forever' и 'forever-win' глобально

* npm -g install forever
* npm -g install forever-win

```
"scripts": {
  "forever" : "forever"
},
```

* npm run forever
* npm run forever list
* npm run forever start .\coins\dash.js
